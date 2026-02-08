export interface VoiceOverOptions {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  voiceName?: string; // Optional voice name for custom voice selection
}

export class VoiceOverService {
  private synthesis: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synthesis = window.speechSynthesis;
      this.loadVoices();
      
      // Load voices when they change (for Chrome)
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }

    }
  }

  private loadVoices(): void {
    if (this.synthesis) {
      this.voices = this.synthesis.getVoices();
    }
  }

  isSupported(): boolean {
    return this.synthesis !== null;
  }

  // Check if voice is from Microsoft (to filter out)
  private isMicrosoftVoice(voice: SpeechSynthesisVoice): boolean {
    return voice.name.toLowerCase().includes('microsoft') || 
           voice.name.toLowerCase().includes('windows');
  }

  // Rate voice quality for Gujarati text (higher score = better)
  private getVoiceQualityScore(voice: SpeechSynthesisVoice): number {
    let score = 0;
    const name = voice.name.toLowerCase();
    const lang = voice.lang.toLowerCase();

    if (this.isMicrosoftVoice(voice)) {
      return -100;
    }

    // Gujarati is best
    if (lang.includes('gu-in') || lang === 'gu') score += 50;
    // Hindi is good fallback
    else if (lang.includes('hi-in') || lang === 'hi') score += 40;
    // Other Indian languages
    else if (lang.includes('-in')) score += 30;
    
    // Quality boosters
    if (name.includes('google')) score += 20;
    if (name.includes('siri') || name.includes('apple')) score += 15;
    if (name.includes('female') || name.includes('woman')) score += 5;

    return score;
  }

  getGujaratiVoice(): SpeechSynthesisVoice | null {
    const nonMsVoices = this.voices.filter(v => !this.isMicrosoftVoice(v));
    
    if (nonMsVoices.length === 0) {
      return this.voices[0] || null;
    }

    // Sort all voices by quality score (Gujarati > Hindi > Indian > Others)
    const sortedVoices = nonMsVoices.sort((a, b) =>
      this.getVoiceQualityScore(b) - this.getVoiceQualityScore(a)
    );

    return sortedVoices[0] || null;
  }

  getAvailableVoices(): Array<{ name: string; lang: string; label: string; quality: string; voiceURI?: string }> {
    const allVoices: Array<{ name: string; lang: string; label: string; quality: string; voiceURI?: string }> = [];

    // Add pre-recorded audio option first
    allVoices.push({
      name: 'PRE_RECORDED',
      lang: 'gu-IN',
      label: '⭐⭐⭐ 🎙️ Pre-recorded Gujarati (High Quality)',
      quality: '⭐⭐⭐',
      voiceURI: '/gretting.mp3'
    });

    // Get all non-Microsoft voices, prefer Gujarati > Hindi > Indian > Others
    const nonMsVoices = this.voices.filter(v => !this.isMicrosoftVoice(v));
    
    // Separate by priority
    const gujaratiVoices = nonMsVoices.filter(v => v.lang.toLowerCase().includes('gu'));
    const hindiVoices = nonMsVoices.filter(v => v.lang.toLowerCase().includes('hi') && !v.lang.toLowerCase().includes('gu'));
    const indianVoices = nonMsVoices.filter(v => v.lang.toLowerCase().includes('-in') && !v.lang.toLowerCase().includes('gu') && !v.lang.toLowerCase().includes('hi'));
    const otherVoices = nonMsVoices.filter(v => 
      !v.lang.toLowerCase().includes('gu') && 
      !v.lang.toLowerCase().includes('hi') && 
      !v.lang.toLowerCase().includes('-in')
    );
    
    // Combine in priority order
    const relevantVoices = [...gujaratiVoices, ...hindiVoices, ...indianVoices, ...otherVoices];

    // Sort by quality score (best first)
    const sortedVoices = relevantVoices.sort((a, b) => 
      this.getVoiceQualityScore(b) - this.getVoiceQualityScore(a)
    );

    // Map to simplified format with quality indicators
    sortedVoices.forEach(v => {
      const score = this.getVoiceQualityScore(v);
      let quality = '⭐';
      if (score >= 40) quality = '⭐⭐⭐';
      else if (score >= 25) quality = '⭐⭐';
      
      // Detect gender from voice name
      const name = v.name.toLowerCase();
      let gender = '';
      if (name.includes('female') || name.includes('woman') || name.includes('samantha') || 
          name.includes('victoria') || name.includes('karen') || name.includes('moira') ||
          name.includes('#2') || name.includes('a)') || name.includes('ava')) {
        gender = '👩';
      } else if (name.includes('male') || name.includes('man') || name.includes('daniel') || 
                 name.includes('aaron') || name.includes('fred') || name.includes('tom') ||
                 name.includes('#1') || name.includes('b)') || name.includes('c)')) {
        gender = '👨';
      }
      
      allVoices.push({
        name: v.name,
        lang: v.lang,
        label: `${quality} ${gender} ${v.name} [${v.lang}]`.trim(),
        quality: quality,
        voiceURI: v.voiceURI
      });
    });

    return allVoices;
  }

  speak(options: VoiceOverOptions): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const voiceName = options.voiceName;
        const text = options.text;
        
        console.log('=== SPEAK CALLED ===');
        console.log('voiceName:', voiceName);
        console.log('voiceName type:', typeof voiceName);
        console.log('voiceName === "PRE_RECORDED":', voiceName === 'PRE_RECORDED');
        console.log('text:', text);
        
        // STRICTLY check for PRE_RECORDED
        if (voiceName === 'PRE_RECORDED') {
          console.log('✅ PRE_RECORDED BRANCH TAKEN');
          
          try {
            if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.currentTime = 0;
              this.currentAudio = null;
            }

            const audio = new Audio();
            this.currentAudio = audio;
            console.log('✅ Audio element created');
            
            audio.preload = 'auto';
            audio.src = '/gretting.mp3';
            audio.currentTime = 0;
            audio.load();
            console.log('✅ audio.src set to: /gretting.mp3');
            
            let startedPlaying = false;

            // Add timeout fallback - if audio doesn't start in 15 seconds, reject
            const timeoutId = setTimeout(() => {
              if (!startedPlaying) {
                console.error('❌ Audio timeout - file did not start in 15 seconds');
                audio.pause();
                reject(new Error('Audio file timeout'));
              }
            }, 15000);
            
            const cleanup = () => {
              clearTimeout(timeoutId);
              audio.removeEventListener('ended', onEnded);
              audio.removeEventListener('error', onError);
              audio.removeEventListener('loadstart', onLoadStart);
              audio.removeEventListener('loadeddata', onLoadedData);
              audio.removeEventListener('canplaythrough', onCanPlayThrough);
              audio.removeEventListener('playing', onPlaying);

              if (this.currentAudio === audio) {
                this.currentAudio = null;
              }
            };
            
            const onLoadStart = () => {
              console.log('✅ Audio loadstart event fired');
            };
            
            const onLoadedData = () => {
              console.log('✅ Audio loadeddata event fired - ready to play');
            };

            const onCanPlayThrough = () => {
              console.log('✅ Audio canplaythrough event fired');
            };

            const onPlaying = () => {
              startedPlaying = true;
              console.log('✅ Audio playing event fired');
            };
            
            const onEnded = () => {
              console.log('✅ Audio ended event fired');
              cleanup();
              resolve();
            };
            
            const onError = (e: Event) => {
              console.error('❌ Audio error event:', e);
              console.error('❌ Audio error:', audio.error);
              cleanup();
              reject(new Error(`Audio error: ${audio.error?.message || 'Unknown'}`));
            };
            
            audio.addEventListener('loadstart', onLoadStart);
            audio.addEventListener('loadeddata', onLoadedData);
            audio.addEventListener('canplaythrough', onCanPlayThrough);
            audio.addEventListener('playing', onPlaying);
            audio.addEventListener('ended', onEnded);
            audio.addEventListener('error', onError);
            
            console.log('✅ Event listeners attached');
            
            // Attempt to play
            const playPromise = audio.play();
            console.log('✅ audio.play() called, playPromise:', playPromise);
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log('✅ audio.play() resolved successfully');
                })
                .catch((error) => {
                  console.error('❌ audio.play() rejected:', error);
                  cleanup();
                  reject(error);
                });
            }
          } catch (error) {
            console.error('❌ Error in PRE_RECORDED branch:', error);
            reject(error);
          }
          
          return;
        }
        
        console.log('📢 Using speechSynthesis for voice:', voiceName);
        
        if (!this.synthesis) {
          reject(new Error('Speech synthesis not supported'));
          return;
        }

        // FORCE reload voices every time to ensure fresh list
        this.voices = this.synthesis.getVoices();
        if (this.voices.length === 0) {
          console.warn('⚠️ No voices loaded, waiting...');
          await new Promise(r => setTimeout(r, 200));
          this.voices = this.synthesis.getVoices();
        }
        
        // Cancel any ongoing speech
        this.synthesis.cancel();
        
        // Critical: Wait after canceling
        await new Promise(r => setTimeout(r, 100));

        // FIND THE VOICE FIRST - BEFORE creating utterance
        let voiceToUse: SpeechSynthesisVoice | null = null;
        
        if (voiceName) {
          voiceToUse = this.voices.find(v => v.name === voiceName) || null;
          if (!voiceToUse) {
            voiceToUse = this.voices.find(v => v.voiceURI === voiceName) || null;
          }
        }
        
        // Use default if no voice specified or not found
        if (!voiceToUse) {
          voiceToUse = this.getGujaratiVoice();
        }

        // Verify we have a voice
        if (!voiceToUse) {
          reject(new Error('No voice available'));
          return;
        }

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set voice - this is the critical part
        utterance.voice = voiceToUse;
        
        // DO NOT set lang separately - let it be automatic from voice
        // Setting lang can override voice in some browsers
        
        // Set other properties
        utterance.rate = options.rate || 0.9;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;

        if (!utterance.voice) {
          utterance.voice = voiceToUse;
        }

        utterance.onend = () => {
          resolve();
        };
        
        utterance.onerror = (event) => {
          reject(event);
        };

        this.synthesis.speak(utterance);
      } catch (error) {
        console.error('❌ Unexpected error in speak():', error);
        reject(error);
      }
    });
  }

  stop(): void {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }

  generateGreeting(guestName: string, customMessage?: string): string {
    if (customMessage && customMessage.trim()) {
      return `જય શ્રી કૃષ્ણ. ${guestName}, ${customMessage.trim()}`;
    }
    return `જય શ્રી કૃષ્ણ. નમસ્તે ${guestName}, આપનું કેયુર અને ઈશાના લગ્નમાં હાર્દિક સ્વાગત છે. આશા છે કે આપ આ શુભ અવસરે અમારા સાથે ઉપસ્થિત રહેશો. શુભ વિવાહ.`;
  }
}

export const voiceOverService = new VoiceOverService();
