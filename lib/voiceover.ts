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

  private playAudioFile(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
          this.currentAudio = null;
        }

        const audio = new Audio();
        this.currentAudio = audio;

        audio.preload = 'auto';
        audio.src = src;
        audio.currentTime = 0;
        audio.load();

        let startedPlaying = false;

        const timeoutId = setTimeout(() => {
          if (!startedPlaying) {
            audio.pause();
            reject(new Error('Audio file timeout'));
          }
        }, 15000);

        const cleanup = () => {
          clearTimeout(timeoutId);
          audio.removeEventListener('ended', onEnded);
          audio.removeEventListener('error', onError);
          audio.removeEventListener('playing', onPlaying);

          if (this.currentAudio === audio) {
            this.currentAudio = null;
          }
        };

        const onPlaying = () => {
          startedPlaying = true;
        };

        const onEnded = () => {
          cleanup();
          resolve();
        };

        const onError = () => {
          cleanup();
          reject(new Error(`Audio error: ${audio.error?.message || 'Unknown'}`));
        };

        audio.addEventListener('playing', onPlaying);
        audio.addEventListener('ended', onEnded);
        audio.addEventListener('error', onError);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            cleanup();
            reject(error);
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  private async speakWithSynthesis(options: VoiceOverOptions): Promise<void> {
    const voiceName = options.voiceName;
    const text = options.text;

    if (!this.synthesis) {
      throw new Error('Speech synthesis not supported');
    }

    this.voices = this.synthesis.getVoices();
    if (this.voices.length === 0) {
      await new Promise(r => setTimeout(r, 200));
      this.voices = this.synthesis.getVoices();
    }

    this.synthesis.cancel();
    await new Promise(r => setTimeout(r, 100));

    let voiceToUse: SpeechSynthesisVoice | null = null;

    if (voiceName) {
      voiceToUse = this.voices.find(v => v.name === voiceName) || null;
      if (!voiceToUse) {
        voiceToUse = this.voices.find(v => v.voiceURI === voiceName) || null;
      }
    }

    if (!voiceToUse) {
      voiceToUse = this.getGujaratiVoice();
    }

    if (!voiceToUse) {
      throw new Error('No voice available');
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voiceToUse;
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;

    await new Promise<void>((resolve, reject) => {
      utterance.onend = () => resolve();
      utterance.onerror = (event) => reject(event);
      this.synthesis?.speak(utterance);
    });
  }

  speak(options: VoiceOverOptions): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.playAudioFile('/final.mp4');
        resolve();
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
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
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
