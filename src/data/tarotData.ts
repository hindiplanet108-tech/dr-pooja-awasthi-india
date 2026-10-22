export interface TarotCard {
  id: string;
  name: string;
  name_hi: string;
  arcana: 'Major' | 'Minor';
  element: string;
  keywords: string[];
  keywords_hi: string[];
  essence: string;
  essence_hi: string;
  guidance: string;
  guidance_hi: string;
  affirmation: string;
  affirmation_hi: string;
  symbolism: string;
}

export const TAROT_DECK: TarotCard[] = [
  {
    id: 'the-star',
    name: 'The Star',
    name_hi: 'द स्टार (नक्षत्र)',
    arcana: 'Major',
    element: 'Air',
    keywords: ['Hope', 'Healing', 'Divine Faith'],
    keywords_hi: ['आशा', 'उपचार', 'ईश्वरीय विश्वास'],
    essence: 'A shower of divine grace after difficult times. Your authentic desires are aligning with cosmic support. Trust that your wounds are transmuting into sacred wisdom.',
    essence_hi: 'कठिन समय के बाद ईश्वरीय अनुग्रह की वर्षा। आपके अंतर की सच्ची इच्छाएं ब्रह्मांडीय सहायता से जुड़ रही हैं।',
    guidance: 'Open your heart to hope. Release the lingering anxiety of past struggles; the universe is replenishing your inner well with quiet grace.',
    guidance_hi: 'अपने हृदय को आशा से भरें। अतीत के संघर्षों की चिंता को त्यागें; ब्रह्मांड आपकी ऊर्जा को पुनः पवित्र कर रहा है।',
    affirmation: '“I am healed, guided, and deeply aligned with my highest light.”',
    affirmation_hi: '“मैं रोगमुक्त, मार्गदर्शित और अपने सर्वोच्च प्रकाश के साथ एकाकार हूँ।”',
    symbolism: 'Seven radiant stars, pure waters of conscious renewal, and unbounded starlight.'
  },
  {
    id: 'the-sun',
    name: 'The Sun',
    name_hi: 'द सन (सूर्य)',
    arcana: 'Major',
    element: 'Fire',
    keywords: ['Joy', 'Vitality', 'Triumph'],
    keywords_hi: ['आनंद', 'प्राण ऊर्जा', 'विजय'],
    essence: 'Radiant clarity, unbounded warmth, and glorious alignment. Shadows dissolve under the golden warmth of total truth and authentic self-expression.',
    essence_hi: 'प्रकाशमान स्पष्टता, असीम ऊर्जा और विजय। सत्य के प्रकाश में भ्रम और भय समाप्त होते हैं।',
    guidance: 'Step into the light without hesitation. Share your gifts freely, as this cycle heralds recognition, warmth, and vitality.',
    guidance_hi: 'बिना किसी संकोच के आत्मविश्वास से आगे बढ़ें। यह समय आपके यश, सम्मान और प्रचुरता का है।',
    affirmation: '“My inner light shines without fear; abundance and joy flow naturally to me.”',
    affirmation_hi: '“मेरा आंतरिक प्रकाश निर्भीक चमकता है; आनंद और प्रचुरता मेरे जीवन में सहज बहते हैं।”',
    symbolism: 'A radiant golden child on a white steed beneath the blessing of thirty-two sunrays.'
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    name_hi: 'दी एम्प्रेस (महारानी)',
    arcana: 'Major',
    element: 'Earth',
    keywords: ['Abundance', 'Fertility', 'Creativity'],
    keywords_hi: ['समृद्धि', 'सृजन', 'मातृत्व प्रेम'],
    essence: 'The fertile embodiment of Mother Nature. Creative projects, relationships, and wealth are ready to blossom into lush manifestation.',
    essence_hi: 'प्रकृति स्वरूपा उर्वर शक्ति। नए विचार, संबंध और व्यावसायिक योजनाएं फलीभूत होने को तत्पर हैं।',
    guidance: 'Nurture what you cherish with gentle patience. Allow natural incubation before rushing into aggressive action.',
    guidance_hi: 'अपने सपनों को धैर्य और प्रेम से सींचें। जल्दबाजी के स्थान पर स्वाभाविक विकास पर विश्वास करें।',
    affirmation: '“I am fertile ground for joy, creative abundance, and loving connection.”',
    affirmation_hi: '“मैं प्रचुरता, प्रेम और रचनात्मक ऊर्जा का जीवंत केंद्र हूँ।”',
    symbolism: 'A crown of twelve twelve-pointed stars, pomegranates of fertility, and golden wheat fields.'
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    name_hi: 'द मैजिशियन (जादूगर)',
    arcana: 'Major',
    element: 'Air / Fire',
    keywords: ['Manifestation', 'Resourcefulness', 'Willpower'],
    keywords_hi: ['संकल्प शक्ति', 'साधन संपन्नता', 'अभिव्यक्ति'],
    essence: 'As above, so below. You hold all four elemental tools—fire, water, air, and earth—to transmute your inner visions into tangible reality.',
    essence_hi: 'जैसा ऊपर, वैसा नीचे। आपके पास अपने विचारों को वास्तविकता में बदलने के सभी साधन विद्यमान हैं।',
    guidance: 'Focus your intent with unwavering clarity. The power to transform your current situation rests squarely in your own hands.',
    guidance_hi: 'अपनी एकाग्रता को साधें। अपनी परिस्थितियों को बदलने की संपूर्ण शक्ति आपके स्वयं के हाथों में है।',
    affirmation: '“I have all the tools, wisdom, and clarity needed to create my desired reality.”',
    affirmation_hi: '“मेरे पास अपने सपनों को साकार करने के लिए सभी साधन और विवेक उपलब्ध हैं।”',
    symbolism: 'Infinity symbol (lemniscate), sacred wand pointing to the heavens, four elemental tokens.'
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    name_hi: 'द हाई प्रीस्टेस (महापुरोहित)',
    arcana: 'Major',
    element: 'Water',
    keywords: ['Intuition', 'Sacred Mystery', 'Subconscious'],
    keywords_hi: ['अंतर्ज्ञान', 'दिव्य रहस्य', 'अवचेतन विवेक'],
    essence: 'Guardian of the veil between worlds. Wisdom that cannot be spoken, only felt in the stillness of deep meditation and intuitive communion.',
    essence_hi: 'रहस्यों की संरक्षिका। वह ज्ञान जो शब्दों में नहीं, अपितु मौन और अंतर्मन की गहराइयों में अनुभव होता है।',
    guidance: 'Look beyond surface logic. Pay intimate attention to your dreams, synchronicities, and quiet gut feelings.',
    guidance_hi: 'तर्क से परे जाकर अपने अंतर्ज्ञान की सुनें। आपके स्वप्न और आंतरिक संकेत आपको सही दिशा दिखा रहे हैं।',
    affirmation: '“I trust the quiet wisdom of my soul; my intuition never misguides me.”',
    affirmation_hi: '“मैं अपनी अंतरात्मा की सूक्ष्म आवाज पर विश्वास करता हूँ।”',
    symbolism: 'The twin pillars of Boaz and Jachin, pomegranate veil, crescent moon at her feet.'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    name_hi: 'व्हील ऑफ फॉर्च्यून (भाग्य चक्र)',
    arcana: 'Major',
    element: 'Fire / Space',
    keywords: ['Karmic Shift', 'Cosmic Timing', 'Opportunity'],
    keywords_hi: ['कर्म चक्र', 'शुभ समय', 'अवसर'],
    essence: 'The eternal wheel turns. A pivotal transition is unfolding, shifting challenges into breakthroughs and ushering in an auspicious cycle.',
    essence_hi: 'भाग्य का पहिया घूम रहा है। रुकावटें दूर हो रही हैं और आपके जीवन में नए शुभ अवसरों का चक्र प्रारंभ हो रहा है।',
    guidance: 'Surrender the need to micro-manage the universe. Align with the current and prepare to seize the emerging door of opportunity.',
    guidance_hi: 'परिस्थितियों से लड़ने के स्थान पर समय के प्रवाह के साथ तालमेल बनाएं। नया द्वार खुल रहा है।',
    affirmation: '“The universe turns in my favor; I welcome auspicious destiny with open arms.”',
    affirmation_hi: '“ब्रह्मांड मेरे अनुकूल घूम रहा है; मैं शुभ प्रारब्ध का सहर्ष स्वागत करता हूँ।”',
    symbolism: 'The four sacred beasts of the zodiac, the rotating cosmic wheel inscribed with sacred letters.'
  }
];
