export interface TarotCard {
  id: string;
  name: string;
  name_hi: string;
  arcana: 'Major' | 'Minor';
  arcana_hi: string;
  element: string;
  element_hi: string;
  keywords: string[];
  keywords_hi: string[];
  essence: string;
  essence_hi: string;
  guidance: string;
  guidance_hi: string;
  affirmation: string;
  affirmation_hi: string;
  symbolism: string;
  symbolism_hi: string;
}

export const TAROT_DECK: TarotCard[] = [
  {
    id: 'the-star',
    name: 'The Star',
    name_hi: 'द स्टार (नक्षत्र)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Air',
    element_hi: 'वायु तत्व',
    keywords: ['Hope', 'Healing', 'Divine Faith'],
    keywords_hi: ['नई उम्मीद', 'मन की शांति', 'ईश्वर पर भरोसा'],
    essence: 'A shower of divine grace after difficult times. Your authentic desires are aligning with cosmic support. Trust that your wounds are transmuting into sacred wisdom.',
    essence_hi: 'मुश्किल समय के बाद अब ईश्वर की कृपा बरसने का समय है। आपके मन की सच्ची इच्छाएं पूरी होने के लिए रास्ता बन रहा है।',
    guidance: 'Open your heart to hope. Release the lingering anxiety of past struggles; the universe is replenishing your inner well with quiet grace.',
    guidance_hi: 'अपने मन में नई उम्मीद जगाएं। बीते समय की चिंता छोड़ दें; प्रकृति आपकी ऊर्जा को फिर से ताजा और शांत कर रही है।',
    affirmation: '“I am healed, guided, and deeply aligned with my highest light.”',
    affirmation_hi: '“मैं शांत, स्वस्थ और ईश्वर के सही मार्गदर्शन के साथ जुड़ा हुआ हूँ।”',
    symbolism: 'Seven radiant stars, pure waters of conscious renewal, and unbounded starlight.',
    symbolism_hi: 'सात चमकते तारे, ताजगी देता शुद्ध जल और अनंत सकारात्मक रोशनी।'
  },
  {
    id: 'the-sun',
    name: 'The Sun',
    name_hi: 'द सन (सूर्य)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Fire',
    element_hi: 'अग्नि तत्व',
    keywords: ['Joy', 'Vitality', 'Triumph'],
    keywords_hi: ['खुशहाली', 'नई ऊर्जा', 'सफलता'],
    essence: 'Radiant clarity, unbounded warmth, and glorious alignment. Shadows dissolve under the golden warmth of total truth and authentic self-expression.',
    essence_hi: 'मन में साफ सोच, सकारात्मक ऊर्जा और बड़ी सफलता का संकेत। सच्चाई और भरोसे से हर तरह का डर दूर होता है।',
    guidance: 'Step into the light without hesitation. Share your gifts freely, as this cycle heralds recognition, warmth, and vitality.',
    guidance_hi: 'बिना किसी झिझक के पूरे आत्मविश्वास से आगे बढ़ें। यह समय आपके मान-सम्मान और खुशियों के बढ़ने का है।',
    affirmation: '“My inner light shines without fear; abundance and joy flow naturally to me.”',
    affirmation_hi: '“मेरा आत्मविश्वास बिना किसी डर के चमकता है; मेरे जीवन में सुख और सफलता आसानी से आते हैं।”',
    symbolism: 'A radiant golden child on a white steed beneath the blessing of thirty-two sunrays.',
    symbolism_hi: 'सफेद घोड़े पर सवार तेजस्वी बालक और सूर्य की 32 चमकती किरणें।'
  },
  {
    id: 'the-empress',
    name: 'The Empress',
    name_hi: 'दी एम्प्रेस (महारानी)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Earth',
    element_hi: 'पृथ्वी तत्व',
    keywords: ['Abundance', 'Fertility', 'Creativity'],
    keywords_hi: ['सुख-समृद्धि', 'रचनात्मकता', 'प्रेम व अपनापन'],
    essence: 'The fertile embodiment of Mother Nature. Creative projects, relationships, and wealth are ready to blossom into lush manifestation.',
    essence_hi: 'प्रकृति की तरह समृद्धि और पोषण देने वाली ऊर्जा। आपके नए विचार, रिश्ते और काम की योजनाएं अब सफल होने को तैयार हैं।',
    guidance: 'Nurture what you cherish with gentle patience. Allow natural incubation before rushing into aggressive action.',
    guidance_hi: 'अपने सपनों और रिश्तों को धैर्य और प्यार से संवारें। जल्दबाजी करने के बजाय सही समय पर भरोसा रखें।',
    affirmation: '“I am fertile ground for joy, creative abundance, and loving connection.”',
    affirmation_hi: '“मेरे जीवन में खुशी, रचनात्मकता और प्यार भरी समृद्धि हमेशा बढ़ती रहती है।”',
    symbolism: 'A crown of twelve twelve-pointed stars, pomegranates of fertility, and golden wheat fields.',
    symbolism_hi: '12 सितारों का मुकुट, समृद्धि के प्रतीक अनार और सुनहरे गेहूं के खेत।'
  },
  {
    id: 'the-magician',
    name: 'The Magician',
    name_hi: 'द मैजिशियन (जादूगर)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Air / Fire',
    element_hi: 'वायु / अग्नि तत्व',
    keywords: ['Manifestation', 'Resourcefulness', 'Willpower'],
    keywords_hi: ['मजबूत इरादा', 'सही साधन', 'सपने सच करना'],
    essence: 'As above, so below. You hold all four elemental tools—fire, water, air, and earth—to transmute your inner visions into tangible reality.',
    essence_hi: 'आपके भीतर वह सारी क्षमता और साधन मौजूद हैं जिनसे आप अपने विचारों को सच कर सकते हैं।',
    guidance: 'Focus your intent with unwavering clarity. The power to transform your current situation rests squarely in your own hands.',
    guidance_hi: 'अपना ध्यान एक लक्ष्य पर लगाएं। अपनी स्थिति को बेहतर बनाने की पूरी ताकत आपके अपने हाथों में है।',
    affirmation: '“I have all the tools, wisdom, and clarity needed to create my desired reality.”',
    affirmation_hi: '“मेरे पास अपने सपनों को सच करने के लिए पूरी समझ, साधन और हिम्मत मौजूद है।”',
    symbolism: 'Infinity symbol (lemniscate), sacred wand pointing to the heavens, four elemental tokens.',
    symbolism_hi: 'अनंत ऊर्जा का चिह्न, आकाश की ओर उठती शक्ति छड़ी और चार तत्वों के प्रतीक।'
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    name_hi: 'द हाई प्रीस्टेस (महापुरोहित)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Water',
    element_hi: 'जल तत्व',
    keywords: ['Intuition', 'Sacred Mystery', 'Subconscious'],
    keywords_hi: ['दिल की आवाज', 'गहरी समझ', 'आंतरिक संकेत'],
    essence: 'Guardian of the veil between worlds. Wisdom that cannot be spoken, only felt in the stillness of deep meditation and intuitive communion.',
    essence_hi: 'वह गहरी समझ जो शब्दों से नहीं, बल्कि शांत मन और ध्यान से महसूस होती है। आपके भीतर हर सवाल का सही जवाब मौजूद है।',
    guidance: 'Look beyond surface logic. Pay intimate attention to your dreams, synchronicities, and quiet gut feelings.',
    guidance_hi: 'सिर्फ बाहरी बातों पर न जाएं, अपने दिल की आवाज (इंट्यूशन) और अंदरूनी संकेतों पर ध्यान दें।',
    affirmation: '“I trust the quiet wisdom of my soul; my intuition never misguides me.”',
    affirmation_hi: '“मैं अपने मन की सच्ची आवाज पर भरोसा करता हूँ; मेरा अंतर्मन मुझे हमेशा सही राह दिखाता है।”',
    symbolism: 'The twin pillars of Boaz and Jachin, pomegranate veil, crescent moon at her feet.',
    symbolism_hi: 'संतुलन के दो स्तंभ, अनार का पर्दा और पैरों के पास अर्ध-चंद्रमा।'
  },
  {
    id: 'wheel-of-fortune',
    name: 'Wheel of Fortune',
    name_hi: 'व्हील ऑफ फॉर्च्यून (भाग्य चक्र)',
    arcana: 'Major',
    arcana_hi: 'मुख्य कार्ड',
    element: 'Fire / Space',
    element_hi: 'अग्नि / आकाश तत्व',
    keywords: ['Karmic Shift', 'Cosmic Timing', 'Opportunity'],
    keywords_hi: ['समय का बदलाव', 'सही मौका', 'भाग्य का साथ'],
    essence: 'The eternal wheel turns. A pivotal transition is unfolding, shifting challenges into breakthroughs and ushering in an auspicious cycle.',
    essence_hi: 'भाग्य का पहिया आपके पक्ष में घूम रहा है। पुरानी रुकावटें खत्म हो रही हैं और जीवन में नए व अच्छे मौके आ रहे हैं।',
    guidance: 'Surrender the need to micro-manage the universe. Align with the current and prepare to seize the emerging door of opportunity.',
    guidance_hi: 'हालात से लड़ने के बजाय समय के अच्छे बदलाव के साथ आगे बढ़ें। तरक्की का नया दरवाजा खुल रहा है।',
    affirmation: '“The universe turns in my favor; I welcome auspicious destiny with open arms.”',
    affirmation_hi: '“समय मेरे पक्ष में बदल रहा है; मैं अपने जीवन में आने वाले हर अच्छे अवसर का स्वागत करता हूँ।”',
    symbolism: 'The four sacred beasts of the zodiac, the rotating cosmic wheel inscribed with sacred letters.',
    symbolism_hi: 'चार दिशाओं के शुभ प्रतीक और जीवन में बदलाव को दर्शाता घूमता हुआ भाग्य चक्र।'
  }
];
