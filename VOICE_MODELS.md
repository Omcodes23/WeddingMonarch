# Voice Models for Gujarati Wedding Invitations

## Overview
This project uses multiple voice models to provide authentic Gujarati pronunciation for personalized wedding invitation greetings.

## Voice Selection Strategy

### 1. **Microsoft Voices - EXCLUDED** ❌
- Microsoft voices are **automatically filtered out**
- Reason: Poor Gujarati linguistic accuracy
- Microsoft TTS often mispronounces Gujarati words and lacks proper tone

### 2. **Google Voices - PREMIUM** ⭐⭐⭐ Best
Available Google Cloud TTS voices for Gujarati:
- **gu-IN-Standard-A** (Female) - Native Gujarati pronunciation
- **gu-IN-Standard-B** (Male) - Native Gujarati pronunciation
- **hi-IN-Neural2-A** (Female) - Hindi fallback with good cross-language support
- **hi-IN-Neural2-C** (Male) - Hindi fallback

**Advantages:**
- Trained on native Gujarati speech patterns
- Accurate pronunciation of Gujarati script (ગુજરાતી)
- Natural intonation for Indian languages
- Neural models with human-like quality

### 3. **Browser Native Voices** ⭐⭐ Good
Quality browser voices (after filtering Microsoft):
- **Apple/Siri voices** - Good quality for Indian languages
- **Google voices** - Built into Chrome/Android
- Language priority: Gujarati > Hindi > English-India

## Voice Quality Scoring

Voices are automatically ranked by quality:

```
Score Calculation:
- Google voices: +50 points
- Apple/Siri voices: +40 points
- Native Gujarati (gu-IN): +30 points
- Hindi (hi-IN): +20 points
- English-India (en-IN): +10 points
- Female voices: +5 points (softer tone for invitations)
- Microsoft voices: -100 points (excluded)
```

## Current Greeting Text

```gujarati
જય શ્રી કૃષ્ણ. નમસ્તે {guestName}, 
આપનું કેયુર અને ઈશાના લગ્નમાં હાર્દિક સ્વાગત છે. 
આશા છે કે આપ આ શુભ અવસરે અમારા સાથે ઉપસ્થિત રહેશો. 
શુભ વિવાહ.
```

**Translation:**
"Jai Shree Krishna. Namaste {guestName}, you are heartily welcomed to Keyur and Ishana's wedding. We hope you will be present with us on this auspicious occasion. Happy wedding."

## Gujarati Linguistic Features

### Proper Pronunciation:
1. **Vowel Sounds**: Gujarati has 12 vowel sounds (અ, આ, ઇ, ઈ, ઉ, ઊ, etc.)
2. **Consonants**: 34 consonant sounds including retroflex stops
3. **Nasalization**: Proper anusvara (અં) and chandrabindu (અઁ) pronunciation
4. **Conjuncts**: Combined consonants (સ્વ, ત્ર, જ્ઞ, etc.)

### Why Microsoft Fails:
- Treats Gujarati as generic Indic script
- Mispronounces retroflex consonants (ટ, ઠ, ડ, ઢ)
- Incorrect stress patterns
- Robotic, non-natural tone

### Why Google Excels:
- Trained on native Gujarati speakers
- Understands context and proper stress
- Natural prosody (rhythm and intonation)
- Accurate pronunciation of all Gujarati phonemes

## Admin Usage

1. **Voice Selection**: Admin panel shows all available voices sorted by quality
2. **Test Playback**: Click "Test" button to preview voice with guest name
3. **Automatic Best Voice**: If no voice selected, system uses highest-quality available
4. **Fallback Chain**: Google Cloud → Google Browser → Apple → Hindi → Any Indian voice

## Technical Implementation

### Voice Service Architecture:
```typescript
VoiceOverService
├── Cloud Voices (Google TTS API)
│   ├── Gujarati voices (gu-IN)
│   └── Hindi voices (hi-IN)
└── Browser Voices (Web Speech API)
    ├── Filtered (NO Microsoft)
    ├── Quality scored
    └── Sorted by score
```

### Voice Selection Flow:
1. Load Google Cloud voices via `/api/tts/google`
2. Load browser voices via `speechSynthesis.getVoices()`
3. Filter out Microsoft voices
4. Score and rank all voices
5. Present sorted list to admin
6. Store selected voice with guest data
7. Use stored voice for invitation playback

## Future Enhancements

### Planned:
- [ ] Real-time Google Cloud TTS integration (requires API key)
- [ ] Custom voice training for wedding-specific terminology
- [ ] Multiple language support (English, Hindi, Gujarati)
- [ ] Audio caching for faster playback
- [ ] Offline voice download support

### Optional:
- [ ] ElevenLabs integration for ultra-realistic voices
- [ ] Voice cloning for family member narration
- [ ] Background music with voice-over mixing

## Configuration

To enable Google Cloud TTS (optional, premium feature):

1. Get Google Cloud API key
2. Add to `.env.local`:
```env
GOOGLE_CLOUD_TTS_API_KEY=your_api_key_here
```
3. Restart server
4. Google voices will be marked as "Premium" in dropdown

## Testing

To test voice quality:
1. Go to `/admin`
2. Enter a test guest name
3. Try different voices from dropdown
4. Click "Test" button for each voice
5. Compare pronunciation quality
6. Select the best-sounding voice for your guests

## Linguistic Accuracy Verification

Test phrases to verify Gujarati pronunciation:
- **જય શ્રી કૃષ્ણ** (Jai Shree Krishna)
- **નમસ્તે** (Namaste)
- **હાર્દિક સ્વાગત** (Heartily welcome)
- **શુભ અવસર** (Auspicious occasion)
- **લગ્ન** (Wedding)

Listen for:
- ✅ Clear retroflex sounds (ષ, ણ)
- ✅ Proper nasalization
- ✅ Natural rhythm
- ✅ Correct stress on syllables
- ❌ Robotic tone (indicates poor model)
- ❌ Mispronounced conjuncts

---

**Recommendation**: Always use Google voices (marked ⭐⭐⭐ Best) for authentic Gujarati pronunciation at weddings!
