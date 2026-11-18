export interface VedicNumberProfile {
  number: number;
  title: string;
  title_hi: string;
  ruler: string;
  ruler_hi: string;
  archetype: string;
  archetype_hi: string;
  element: string;
  element_hi: string;
  direction: string;
  direction_hi: string;
  luckyColors: string;
  luckyColors_hi: string;
  luckyDays: string;
  luckyDays_hi: string;
  harmonicMantra: string;
  gemstone: string;
  gemstone_hi: string;
  rudraksha: string;
  rudraksha_hi: string;
  description: string;
  description_hi: string;
}

export const VEDIC_NUMBERS_MAP: Record<number, VedicNumberProfile> = {
  1: {
    number: 1,
    title: "The Pioneer, Sovereign & Trailblazer",
    title_hi: "नेतृत्व करने वाले, आत्मनिर्भर व राह दिखाने वाले",
    ruler: "Sun (Surya Dev)",
    ruler_hi: "सूर्य देव",
    archetype: "The Solar Visionary",
    archetype_hi: "तेजस्वी और दूर की सोच रखने वाले",
    element: "Water in Lo Shu / Fire in Vedic",
    element_hi: "लो-शू में जल / वैदिक में अग्नि",
    direction: "North (Lo Shu) / East (Vedic)",
    direction_hi: "उत्तर (लो-शू) / पूर्व (वैदिक)",
    luckyColors: "Gold, Copper, Ruby Red, Saffron",
    luckyColors_hi: "सुनहरा, तांबा रंग, गहरा लाल, केसरिया",
    luckyDays: "Sunday, Monday",
    luckyDays_hi: "रविवार, सोमवार",
    harmonicMantra: "Om Hram Hreem Hroum Sah Suryaya Namaha (ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः)",
    gemstone: "Ruby (माणिक्य)",
    gemstone_hi: "माणिक्य (Ruby) या गार्नेट",
    rudraksha: "1-Mukhi or 12-Mukhi",
    rudraksha_hi: "1-मुखी या 12-मुखी रुद्राक्ष",
    description: "Blessed with the vitalizing brilliance of Surya, you possess innate leadership, strong willpower, and executive charisma to initiate new ventures.",
    description_hi: "सूर्य देव के प्रभाव से आपमें जन्म से ही लीडर बनने के गुण, मजबूत इरादा और नए काम की शुरुआत करने की अच्छी क्षमता होती है।"
  },
  2: {
    number: 2,
    title: "The Empath, Intuitive & Harmonizer",
    title_hi: "संवेदनशील, शांत और दिल से जुड़ने वाले",
    ruler: "Moon (Chandra Dev)",
    ruler_hi: "चन्द्र देव",
    archetype: "The Lunar Mystic",
    archetype_hi: "शांत स्वभाव और गहरी समझ",
    element: "Earth in Lo Shu / Water in Vedic",
    element_hi: "लो-शू में पृथ्वी / वैदिक में जल",
    direction: "South-West (Lo Shu) / North-West (Vedic)",
    direction_hi: "दक्षिण-पश्चिम (लो-शू) / उत्तर-पश्चिम (वैदिक)",
    luckyColors: "Pearl White, Silver, Cream, Pale Green",
    luckyColors_hi: "सफेद, सिल्वर, क्रीम, हल्का हरा",
    luckyDays: "Monday, Sunday",
    luckyDays_hi: "सोमवार, रविवार",
    harmonicMantra: "Om Shram Shreem Shroum Sah Chandraya Namaha (ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः)",
    gemstone: "Pearl / Moonstone (मोती / चंद्रकांत मणि)",
    gemstone_hi: "सच्चा मोती या मूनस्टोन",
    rudraksha: "2-Mukhi Rudraksha",
    rudraksha_hi: "2-मुखी रुद्राक्ष",
    description: "Under Chandra's calming radiance, your gift lies in deep emotional intelligence, diplomacy, intuitive foresight, and collaborative unity.",
    description_hi: "चंद्रमा की शांत ऊर्जा के कारण आप दूसरों की भावनाओं को जल्दी समझते हैं, मिलनसार हैं और रिश्तों को जोड़कर रखना बखूबी जानते हैं।"
  },
  3: {
    number: 3,
    title: "The Wise Mentor, Creator & Communicator",
    title_hi: "समझदार सलाहकार, रचनात्मक और ज्ञानी",
    ruler: "Jupiter (Brihaspati / Guru)",
    ruler_hi: "बृहस्पति देव (गुरु)",
    archetype: "The Sacred Preceptor",
    archetype_hi: "सही सलाह देने वाले गुरु",
    element: "Wood (Lo Shu) / Ether (Akash Vedic)",
    element_hi: "काष्ठ तत्व (लो-शू) / आकाश तत्व (वैदिक)",
    direction: "East (Lo Shu) / North-East (Vedic)",
    direction_hi: "पूर्व (लो-शू) / उत्तर-पूर्व (वैदिक)",
    luckyColors: "Bright Yellow, Golden Amber, Ochre",
    luckyColors_hi: "चमकीला पीला, सुनहरा, हल्का नारंगी",
    luckyDays: "Thursday, Tuesday",
    luckyDays_hi: "गुरुवार, मंगलवार",
    harmonicMantra: "Om Gram Greem Groum Sah Guruve Namaha (ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः)",
    gemstone: "Yellow Sapphire (पुखराज)",
    gemstone_hi: "पीला पुखराज या सुनहला",
    rudraksha: "5-Mukhi Rudraksha",
    rudraksha_hi: "5-मुखी रुद्राक्ष",
    description: "Guided by Brihaspati, you possess expansive wisdom, expressive articulation, optimistic foresight, and an innate capacity to advise and uplift others.",
    description_hi: "गुरु बृहस्पति की कृपा से आपकी समझ बहुत गहरी है। आप अपनी बातों से दूसरों को सही राह दिखाने और प्रेरित करने में बहुत आगे रहते हैं।"
  },
  4: {
    number: 4,
    title: "The Architect, Strategist & Rebel",
    title_hi: "पक्की योजना बनाने वाले, मेहनती और अलग सोच वाले",
    ruler: "Rahu (North Lunar Node)",
    ruler_hi: "राहु देव",
    archetype: "The Structural Reformer",
    archetype_hi: "नए बदलाव लाने वाले",
    element: "Wood in Lo Shu / Airy Shadow in Vedic",
    element_hi: "लो-शू में काष्ठ / वैदिक में वायु तत्व",
    direction: "South-East (Lo Shu) / South-West (Vedic)",
    direction_hi: "दक्षिण-पूर्व (लो-शू) / दक्षिण-पश्चिम (वैदिक)",
    luckyColors: "Electric Blue, Charcoal Grey, Khaki",
    luckyColors_hi: "गहरा नीला, ग्रे, खाकी रंग",
    luckyDays: "Sunday, Saturday",
    luckyDays_hi: "रविवार, शनिवार",
    harmonicMantra: "Om Bhram Bhreem Bhroum Sah Rahave Namaha (ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः)",
    gemstone: "Hessonite Garnet (गोमेद)",
    gemstone_hi: "गोमेद (Hessonite)",
    rudraksha: "8-Mukhi Rudraksha",
    rudraksha_hi: "8-मुखी रुद्राक्ष",
    description: "Influenced by Rahu, you bring revolutionary thinking, unconventional mastery, acute technical strategy, and perseverance against all odds.",
    description_hi: "राहु के प्रभाव से आप भीड़ से अलग सोचते हैं, अच्छी योजना बनाते हैं और मुश्किल हालात को भी अपने पक्ष में बदलना जानते हैं।"
  },
  5: {
    number: 5,
    title: "The Alchemist, Communicator & Free Spirit",
    title_hi: "बोलने में कुशल, तेज दिमाग और हर माहौल में ढलने वाले",
    ruler: "Mercury (Budh Dev)",
    ruler_hi: "बुध देव",
    archetype: "The Mercurial Polymath",
    archetype_hi: "बुद्धिमान और बहुमुखी प्रतिभा",
    element: "Earth (Prithvi / Center)",
    element_hi: "पृथ्वी तत्व (केंद्र / मध्य)",
    direction: "Center / Brahmasthan (लो-शू व वैदिक)",
    direction_hi: "केंद्र / बीच का स्थान",
    luckyColors: "Emerald Green, Mint, Turquoise",
    luckyColors_hi: "हरा, हल्का हरा, फिरोजी",
    luckyDays: "Wednesday, Friday",
    luckyDays_hi: "बुधवार, शुक्रवार",
    harmonicMantra: "Om Bram Breem Broum Sah Budhaya Namaha (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः)",
    gemstone: "Emerald (पन्ना)",
    gemstone_hi: "पन्ना (Emerald) या ओनेक्स",
    rudraksha: "4-Mukhi Rudraksha",
    rudraksha_hi: "4-मुखी रुद्राक्ष",
    description: "Governed by Budh, you excel in commercial acumen, sharp analytical intellect, adaptive versatility, and engaging interpersonal communication.",
    description_hi: "बुध देव की कृपा से आपका दिमाग बहुत तेज चलता है। बिजनेस की समझ, लोगों से बातचीत और नए बदलावों को अपनाना आपकी खास ताकत है।"
  },
  6: {
    number: 6,
    title: "The Harmonizer, Healer & Aesthetician",
    title_hi: "प्रेम, कला, परिवार और सुख-शांति चाहने वाले",
    ruler: "Venus (Shukra Dev)",
    ruler_hi: "शुक्र देव",
    archetype: "The Sacred Harmonizer",
    archetype_hi: "सौंदर्य और सुख लाने वाले",
    element: "Metal in Lo Shu / Water in Vedic",
    element_hi: "लो-शू में धातु / वैदिक में जल",
    direction: "North-West (Lo Shu) / South-East (Vedic)",
    direction_hi: "उत्तर-पश्चिम (लो-शू) / दक्षिण-पूर्व (वैदिक)",
    luckyColors: "Rose Pink, Silk White, Sky Blue",
    luckyColors_hi: "गुलाबी, सफेद, आसमानी नीला",
    luckyDays: "Friday, Wednesday",
    luckyDays_hi: "शुक्रवार, बुधवार",
    harmonicMantra: "Om Dram Dreem Droum Sah Shukraya Namaha (ॐ द्रां द्रीं द्रौं सः शुक्राय नमः)",
    gemstone: "Diamond / White Zircon / Opal",
    gemstone_hi: "हीरा, सफेद जरकन या ओपल",
    rudraksha: "6-Mukhi Rudraksha",
    rudraksha_hi: "6-मुखी रुद्राक्ष",
    description: "Under Shukra's radiant blessing, your presence brings soothing beauty and healing comfort. You have natural aesthetic genius and deep familial fidelity.",
    description_hi: "शुक्र देव के आशीर्वाद से आपका स्वभाव आकर्षक, प्यार भरा और कलात्मक है। आप अपने परिवार और आसपास के लोगों के जीवन में खुशी लाते हैं।"
  },
  7: {
    number: 7,
    title: "The Seeker, Mystic & Truth Finder",
    title_hi: "गहरी सोच वाले, सच्चाई खोजने वाले और आध्यात्मिक",
    ruler: "Ketu (South Lunar Node)",
    ruler_hi: "केतु देव",
    archetype: "The Introspective Sage",
    archetype_hi: "शांत और खोजी स्वभाव",
    element: "Metal in Lo Shu / Fiery Shadow in Vedic",
    element_hi: "लो-शू में धातु / वैदिक में अग्नि तत्व",
    direction: "West (Lo Shu) / North-East (Vedic)",
    direction_hi: "पश्चिम (लो-शू) / उत्तर-पूर्व (वैदिक)",
    luckyColors: "Sea Green, Light Yellow, Pearl Grey",
    luckyColors_hi: "हल्का हरा, हल्का पीला, स्लेटी",
    luckyDays: "Monday, Thursday",
    luckyDays_hi: "सोमवार, गुरुवार",
    harmonicMantra: "Om Sram Sreem Sroum Sah Ketave Namaha (ॐ स्रां स्रीं स्रौं सः केतवे नमः)",
    gemstone: "Cat's Eye (लहसुनिया)",
    gemstone_hi: "लहसुनिया (Cat's Eye)",
    rudraksha: "9-Mukhi Rudraksha",
    rudraksha_hi: "9-मुखी रुद्राक्ष",
    description: "Charged with Ketu's introspective current, you penetrate beyond surface illusions. You possess profound spiritual inclinations and metaphysical depth.",
    description_hi: "केतु के प्रभाव से आप दिखावे से दूर रहकर हर बात की गहराई में जाते हैं। आपका झुकाव रिसर्च, ध्यान और आध्यात्मिक ज्ञान की ओर ज्यादा होता है।"
  },
  8: {
    number: 8,
    title: "The Sovereign, Karmic Judge & Material Master",
    title_hi: "मेहनती, न्यायप्रिय और बड़े काम संभालने वाले",
    ruler: "Saturn (Shani Dev)",
    ruler_hi: "शनि देव",
    archetype: "The Karmic Pillar",
    archetype_hi: "धैर्य और पक्के इरादे वाले",
    element: "Earth in Lo Shu / Air in Vedic",
    element_hi: "लो-शू में पृथ्वी / वैदिक में वायु",
    direction: "North-East (Lo Shu) / West (Vedic)",
    direction_hi: "उत्तर-पूर्व (लो-शू) / पश्चिम (वैदिक)",
    luckyColors: "Midnight Blue, Black, Dark Violet",
    luckyColors_hi: "गहरा नीला, काला, बैंगनी",
    luckyDays: "Saturday, Wednesday",
    luckyDays_hi: "शनिवार, बुधवार",
    harmonicMantra: "Om Pram Preem Proum Sah Shanaishcharaya Namaha (ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः)",
    gemstone: "Blue Sapphire / Amethyst (नीलम / जमुनिया)",
    gemstone_hi: "नीलम या जमुनिया (Amethyst)",
    rudraksha: "7-Mukhi or 14-Mukhi",
    rudraksha_hi: "7-मुखी या 14-मुखी रुद्राक्ष",
    description: "Tempered by Shani Dev, you represent endurance, justice, institutional authority, and massive long-term accomplishments forged through discipline.",
    description_hi: "शनि देव के प्रभाव से आपमें गजब का धैर्य, मेहनत और सच का साथ देने की ताकत है। आप अपनी लगन से धीरे-धीरे बड़ी सफलता हासिल करते हैं।"
  },
  9: {
    number: 9,
    title: "The Warrior, Humanitarian & Transmuter",
    title_hi: "साहसी, दूसरों की मदद करने वाले और ऊर्जा से भरपूर",
    ruler: "Mars (Mangal Dev)",
    ruler_hi: "मंगल देव",
    archetype: "The Noble Protector",
    archetype_hi: "हिम्मत और सेवा भावना वाले",
    element: "Fire (Agni)",
    element_hi: "अग्नि तत्व",
    direction: "South (Lo Shu / Vedic)",
    direction_hi: "दक्षिण दिशा",
    luckyColors: "Crimson Red, Scarlet, Coral, Maroon",
    luckyColors_hi: "लाल, गहरा लाल, मूंगा रंग, मैरून",
    luckyDays: "Tuesday, Thursday",
    luckyDays_hi: "मंगलवार, गुरुवार",
    harmonicMantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha (ॐ क्रां क्रीं क्रौं सः भौमाय नमः)",
    gemstone: "Red Coral (लाल मूंगा)",
    gemstone_hi: "लाल मूंगा (Red Coral)",
    rudraksha: "3-Mukhi Rudraksha",
    rudraksha_hi: "3-मुखी रुद्राक्ष",
    description: "Infused with Mangal's boundless valor, you are fierce, protective, idealistic, and driven to champion noble causes and protect the vulnerable.",
    description_hi: "मंगल देव की ऊर्जा के कारण आप निडर, उत्साही और दूसरों की मदद के लिए हमेशा तैयार रहते हैं। मुश्किल समय में भी आप डटकर खड़े रहते हैं।"
  }
};

// Chaldean Numerology mapping for letters (1-8, 9 is sacred and excluded from individual letters)
export const CHALDEAN_MAP: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function reduceToSingleDigit(num: number): number {
  if (num <= 0) return 1;
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num || 1;
}

// -------------------------------------------------------------
// KUA NUMBER CALCULATION (Authentic Classical Feng Shui & Li Chun)
// -------------------------------------------------------------
export interface KuaProfile {
  kua: number;
  rawKua: number;
  ruleOf5Applied: boolean;
  solarYear: number;
  isLiChunApplied: boolean;
  trigram: string;
  trigram_hi: string;
  element: string;
  element_hi: string;
  direction: string;
  direction_hi: string;
  group: 'East Group' | 'West Group';
  group_hi: 'पूर्व समूह' | 'पश्चिम समूह';
  formulaProof: string;
  formulaProof_hi: string;
  favorableDirections: { name: string; name_hi: string; meaning: string; meaning_hi: string }[];
  unfavorableDirections: { name: string; name_hi: string; meaning: string; meaning_hi: string }[];
}

export function calculateKuaProfile(
  year: number,
  month: number,
  day: number,
  gender: 'male' | 'female' = 'female'
): KuaProfile {
  // Step 1: Solar Year (Li Chun / Chinese Spring begins on Feb 4)
  // If born between Jan 1 and Feb 3, the solar birth year is year - 1
  let solarYear = year;
  let isLiChunApplied = false;

  if (month === 1 || (month === 2 && day <= 3)) {
    solarYear = year - 1;
    isLiChunApplied = true;
  }

  // Step 2: Sum the last two digits of the solar year and reduce to 1-9
  const lastTwoDigits = solarYear % 100;
  const d1 = Math.floor(lastTwoDigits / 10);
  const d2 = lastTwoDigits % 10;
  const sumLastTwo = d1 + d2;
  const reducedLastTwo = reduceToSingleDigit(sumLastTwo);

  let rawKua = 0;
  let formulaProof = '';
  let formulaProof_hi = '';

  const is20thCentury = solarYear < 2000;

  if (is20thCentury) {
    // 20th Century: 1900 - 1999
    if (gender === 'male') {
      rawKua = 10 - reducedLastTwo;
      if (rawKua > 9) rawKua = reduceToSingleDigit(rawKua);
      if (rawKua <= 0) rawKua = 9;
      formulaProof = `20th Century Male: 10 - (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) = ${rawKua}`;
      formulaProof_hi = `20वीं सदी (पुरुष): 10 - (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) = ${rawKua}`;
    } else {
      // Female: sum + 5
      rawKua = reducedLastTwo + 5;
      rawKua = reduceToSingleDigit(rawKua);
      formulaProof = `20th Century Female: (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) + 5 = ${reducedLastTwo + 5} -> ${rawKua}`;
      formulaProof_hi = `20वीं सदी (महिला): (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) + 5 = ${reducedLastTwo + 5} -> ${rawKua}`;
    }
  } else {
    // 21st Century: 2000+
    if (gender === 'male') {
      rawKua = 9 - reducedLastTwo;
      if (rawKua <= 0) rawKua = 9;
      formulaProof = `21st Century Male: 9 - (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) = ${rawKua}`;
      formulaProof_hi = `21वीं सदी (पुरुष): 9 - (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) = ${rawKua}`;
    } else {
      // Female: sum + 6
      rawKua = reducedLastTwo + 6;
      rawKua = reduceToSingleDigit(rawKua);
      formulaProof = `21st Century Female: (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) + 6 = ${reducedLastTwo + 6} -> ${rawKua}`;
      formulaProof_hi = `21वीं सदी (महिला): (${d1} + ${d2} = ${sumLastTwo} -> ${reducedLastTwo}) + 6 = ${reducedLastTwo + 6} -> ${rawKua}`;
    }
  }

  // Step 3: Rule of 5 (Bagua has no 5 direction)
  let finalKua = rawKua;
  let ruleOf5Applied = false;

  if (rawKua === 5) {
    ruleOf5Applied = true;
    if (gender === 'male') {
      finalKua = 2; // Male 5 converts to 2 (Kun Earth, South-West)
      formulaProof += ` -> Rule of 5: Male 5 converts to 2 (Kun Earth / South-West)`;
      formulaProof_hi += ` -> अंक 5 का नियम: पुरुष के लिए 5 बदलकर 2 (दक्षिण-पश्चिम) बनता है।`;
    } else {
      finalKua = 8; // Female 5 converts to 8 (Gen Earth, North-East)
      formulaProof += ` -> Rule of 5: Female 5 converts to 8 (Gen Earth / North-East)`;
      formulaProof_hi += ` -> अंक 5 का नियम: महिला के लिए 5 बदलकर 8 (उत्तर-पूर्व) बनता है।`;
    }
  }

  // Trigrams and directions lookup
  const KUA_DATA: Record<number, {
    trigram: string;
    trigram_hi: string;
    element: string;
    element_hi: string;
    direction: string;
    direction_hi: string;
    group: 'East Group' | 'West Group';
    group_hi: 'पूर्व समूह' | 'पश्चिम समूह';
    favorable: { name: string; name_hi: string; meaning: string; meaning_hi: string }[];
    unfavorable: { name: string; name_hi: string; meaning: string; meaning_hi: string }[];
  }> = {
    1: {
      trigram: "Kan (कन)",
      trigram_hi: "कन (Kan)",
      element: "Water (जल तत्व)",
      element_hi: "जल तत्व (Water)",
      direction: "North (उत्तर)",
      direction_hi: "उत्तर दिशा (North)",
      group: "East Group",
      group_hi: "पूर्व समूह",
      favorable: [
        { name: "South-East (Sheng Chi)", name_hi: "दक्षिण-पूर्व (समृद्धि व सफलता)", meaning: "Prosperity, vitality, career growth", meaning_hi: "धन, ऊर्जा एवं करियर में उन्नति" },
        { name: "East (Tian Yi)", name_hi: "पूर्व (स्वर्गीय चिकित्सक / उत्तम स्वास्थ्य)", meaning: "Vibrant health, healing, longevity", meaning_hi: "रोगमुक्ति एवं दीर्घायु" },
        { name: "South (Yan Nian)", name_hi: "दक्षिण (संबंध सामंजस्य व प्रेम)", meaning: "Harmonious love, relationships, family peace", meaning_hi: "प्रेम, वैवाहिक सुख व पारिवारिक शांति" },
        { name: "North (Fu Wei)", name_hi: "उत्तर (व्यक्तिगत विकास व स्थिरता)", meaning: "Mental clarity, study, peaceful focus", meaning_hi: "मानसिक स्थिरता एवं आंतरिक शांति" }
      ],
      unfavorable: [
        { name: "South-West (Jue Ming)", name_hi: "दक्षिण-पश्चिम (हानिकारक कोण)", meaning: "Total loss, severe obstacle", meaning_hi: "अत्यधिक बाधाएं व ऊर्जा ह्रास" },
        { name: "North-East (Wu Gui)", name_hi: "उत्तर-पूर्व (पाँच भूत / कलह)", meaning: "Gossip, fires, quarrels", meaning_hi: "विवाद व अचानक व्यवधान" },
        { name: "North-West (Liu Sha)", name_hi: "उत्तर-पश्चिम (छह हत्याएं / अशांति)", meaning: "Legal disputes, lost opportunities", meaning_hi: "कानूनी उलझनें व अशांति" },
        { name: "West (Huo Hai)", name_hi: "पश्चिम (दुर्घटना व कठिनाइयां)", meaning: "Minor mishaps, delays", meaning_hi: "सामान्य अड़चनें व विलंब" }
      ]
    },
    2: {
      trigram: "Kun (कुन)",
      trigram_hi: "कुन (Kun)",
      element: "Earth (पृथ्वी तत्व)",
      element_hi: "पृथ्वी तत्व (Earth)",
      direction: "South-West (दक्षिण-पश्चिम)",
      direction_hi: "दक्षिण-पश्चिम (South-West)",
      group: "West Group",
      group_hi: "पश्चिम समूह",
      favorable: [
        { name: "North-East (Sheng Chi)", name_hi: "उत्तर-पूर्व (समृद्धि व धन लाभ)", meaning: "Great wealth, expansion, good fortune", meaning_hi: "स्थायी संपत्ति व अप्रत्याशित लाभ" },
        { name: "West (Tian Yi)", name_hi: "पश्चिम (आरोग्य व दिव्य कृपा)", meaning: "Healing, vitality, trustworthy friends", meaning_hi: "आरोग्य एवं विश्वासपात्र मित्र" },
        { name: "North-West (Yan Nian)", name_hi: "उत्तर-पश्चिम (दीर्घायु व मजबूत रिश्ते)", meaning: "Long-term relationships, family unity", meaning_hi: "मजबूत सामाजिक व पारिवारिक संबंध" },
        { name: "South-West (Fu Wei)", name_hi: "दक्षिण-पश्चिम (स्थिरता व सुरक्षा)", meaning: "Grounding, inner stability, resilience", meaning_hi: "मानसिक स्थिरता व सुरक्षा" }
      ],
      unfavorable: [
        { name: "North (Jue Ming)", name_hi: "उत्तर (गंभीर ऊर्जा ह्रास)", meaning: "Total loss, bankruptcy", meaning_hi: "हानि व रुकावटें" },
        { name: "South-East (Wu Gui)", name_hi: "दक्षिण-पूर्व (कलह व तनाव)", meaning: "Betrayals, conflicts", meaning_hi: "तनाव व अपयश" },
        { name: "South (Liu Sha)", name_hi: "दक्षिण (रिश्तों में खटास)", meaning: "Emotional instability", meaning_hi: "रिश्तों में खटास" },
        { name: "East (Huo Hai)", name_hi: "पूर्व (कठिनाइयां व व्यर्थ खर्चे)", meaning: "Wasted efforts, obstacles", meaning_hi: "व्यर्थ खर्चे व बाधाएं" }
      ]
    },
    3: {
      trigram: "Zhen (झेन)",
      trigram_hi: "झेन (Zhen)",
      element: "Wood (काष्ठ तत्व)",
      element_hi: "काष्ठ तत्व (Wood)",
      direction: "East (पूर्व)",
      direction_hi: "पूर्व दिशा (East)",
      group: "East Group",
      group_hi: "पूर्व समूह",
      favorable: [
        { name: "South (Sheng Chi)", name_hi: "दक्षिण (ख्याति व अपार समृद्धि)", meaning: "Fame, high reputation, wealth", meaning_hi: "प्रसिद्धि, तेज एवं वित्तीय लाभ" },
        { name: "North (Tian Yi)", name_hi: "उत्तर (आरोग्य एवं शांति)", meaning: "Divine protection, vitality", meaning_hi: "रोग निवारण व दिव्य रक्षा" },
        { name: "South-East (Yan Nian)", name_hi: "दक्षिण-पूर्व (प्रेम व सद्भाव)", meaning: "Harmony, partnership, joy", meaning_hi: "सौहार्द व दांपत्य सुख" },
        { name: "East (Fu Wei)", name_hi: "पूर्व (ज्ञान व आत्मविश्वास)", meaning: "Spiritual poise, growth", meaning_hi: "आत्मबल व अध्ययन में एकाग्रता" }
      ],
      unfavorable: [
        { name: "West (Jue Ming)", name_hi: "पश्चिम (नुकसान व असफलता)", meaning: "Total loss", meaning_hi: "हानि व असफलता" },
        { name: "North-West (Wu Gui)", name_hi: "उत्तर-पश्चिम (कलह व विश्वासघात)", meaning: "Obstructions", meaning_hi: "विश्वासघात व तनाव" },
        { name: "North-East (Liu Sha)", name_hi: "उत्तर-पूर्व (अशांति व अनबन)", meaning: "Disputes", meaning_hi: "वाद-विवाद" },
        { name: "South-West (Huo Hai)", name_hi: "दक्षिण-पश्चिम (विलंब व रुकावट)", meaning: "Mishaps", meaning_hi: "विलंब व रुकावटें" }
      ]
    },
    4: {
      trigram: "Xun (शुन)",
      trigram_hi: "शुन (Xun)",
      element: "Wood (काष्ठ तत्व)",
      element_hi: "काष्ठ तत्व (Wood)",
      direction: "South-East (दक्षिण-पूर्व)",
      direction_hi: "दक्षिण-पूर्व (South-East)",
      group: "East Group",
      group_hi: "पूर्व समूह",
      favorable: [
        { name: "North (Sheng Chi)", name_hi: "उत्तर (सर्वोत्तम करियर व प्रगति)", meaning: "Fast career promotions, financial abundance", meaning_hi: "व्यापार में विस्तार व पदोन्नति" },
        { name: "South (Tian Yi)", name_hi: "दक्षिण (उत्कृष्ट स्वास्थ्य व स्फूर्ति)", meaning: "Vitality, longevity, good sleep", meaning_hi: "स्फूर्ति, निरोगी काया व दीर्घायु" },
        { name: "East (Yan Nian)", name_hi: "पूर्व (पारिवारिक प्रेम व मेलजोल)", meaning: "Warm relationships, networking", meaning_hi: "पारिवारिक प्रेम व नए संपर्क" },
        { name: "South-East (Fu Wei)", name_hi: "दक्षिण-पूर्व (रचनात्मकता व शांति)", meaning: "Personal development, peace", meaning_hi: "रचनात्मकता व मानसिक संतोष" }
      ],
      unfavorable: [
        { name: "North-East (Jue Ming)", name_hi: "उत्तर-पूर्व (अशुभ कोण)", meaning: "Severe losses", meaning_hi: "गंभीर अवरोध" },
        { name: "South-West (Wu Gui)", name_hi: "दक्षिण-पश्चिम (कलह व तनाव)", meaning: "Quarrels", meaning_hi: "तनाव व मतभेद" },
        { name: "West (Liu Sha)", name_hi: "पश्चिम (भावनात्मक उथल-पुथल)", meaning: "Legal hassles", meaning_hi: "चिंता व मानसिक तनाव" },
        { name: "North-West (Huo Hai)", name_hi: "उत्तर-पश्चिम (दुर्घटनाएं व अड़चनें)", meaning: "Delays", meaning_hi: "कार्यों में अड़चनें" }
      ]
    },
    6: {
      trigram: "Qian (चियान)",
      trigram_hi: "चियान (Qian)",
      element: "Metal (धातु तत्व)",
      element_hi: "धातु तत्व (Metal)",
      direction: "North-West (उत्तर-पश्चिम)",
      direction_hi: "उत्तर-पश्चिम (North-West)",
      group: "West Group",
      group_hi: "पश्चिम समूह",
      favorable: [
        { name: "West (Sheng Chi)", name_hi: "पश्चिम (नेतृत्व व स्थायी धन)", meaning: "Authority, enterprise success, wealth", meaning_hi: "उच्च पद, मान-सम्मान व वैभव" },
        { name: "North-East (Tian Yi)", name_hi: "उत्तर-पूर्व (संरक्षक व उत्तम स्वास्थ्य)", meaning: "Wise mentors, medical recovery", meaning_hi: "मार्गदर्शन व रोगों से सुरक्षा" },
        { name: "South-West (Yan Nian)", name_hi: "दक्षिण-पश्चिम (दांपत्य सामंजस्य)", meaning: "Romantic fidelity, lifelong alliances", meaning_hi: "स्थायी मित्रता व दांपत्य मधुरता" },
        { name: "North-West (Fu Wei)", name_hi: "उत्तर-पश्चिम (इच्छाशक्ति व आत्मबल)", meaning: "Administrative control, mental focus", meaning_hi: "निर्णय क्षमता व नेतृत्व शक्ति" }
      ],
      unfavorable: [
        { name: "South (Jue Ming)", name_hi: "दक्षिण (अति नुकसान व पतन)", meaning: "Disaster", meaning_hi: "प्रतिष्ठा ह्रास व अवरोध" },
        { name: "East (Wu Gui)", name_hi: "पूर्व (षड्यंत्र व मतभेद)", meaning: "Accidents", meaning_hi: "षड्यंत्र व अशांति" },
        { name: "North (Liu Sha)", name_hi: "उत्तर (वित्तीय उलझनें)", meaning: "Betrayals", meaning_hi: "आर्थिक उलझनें" },
        { name: "South-East (Huo Hai)", name_hi: "दक्षिण-पूर्व (दुर्भाग्य व बाधाएं)", meaning: "Setbacks", meaning_hi: "अचानक रुकावटें" }
      ]
    },
    7: {
      trigram: "Dui (दुई)",
      trigram_hi: "दुई (Dui)",
      element: "Metal (धातु तत्व)",
      element_hi: "धातु तत्व (Metal)",
      direction: "West (पश्चिम)",
      direction_hi: "पश्चिम दिशा (West)",
      group: "West Group",
      group_hi: "पश्चिम समूह",
      favorable: [
        { name: "North-West (Sheng Chi)", name_hi: "उत्तर-पश्चिम (उच्च सहयोग व समृद्धि)", meaning: "Influential patrons, joyful abundance", meaning_hi: "बड़े लोगों का सहयोग व धन लाभ" },
        { name: "South-West (Tian Yi)", name_hi: "दक्षिण-पश्चिम (उत्तम स्वास्थ्य व सुख)", meaning: "Holistic wellness, inner comfort", meaning_hi: "शारीरिक स्फूर्ति व मानसिक शांति" },
        { name: "North-East (Yan Nian)", name_hi: "उत्तर-पूर्व (आध्यात्मिक व सांसारिक प्रेम)", meaning: "Deep family bonds, loyalty", meaning_hi: "सद्भाव, प्रेम व पारिवारिक निष्ठा" },
        { name: "West (Fu Wei)", name_hi: "पश्चिम (आनंद, हास्य व अभिव्यक्ति)", meaning: "Eloquence, artistic joy, peaceful days", meaning_hi: "वाणी का प्रभाव व कलात्मक सिद्धि" }
      ],
      unfavorable: [
        { name: "East (Jue Ming)", name_hi: "पूर्व (गंभीर हानि)", meaning: "Great loss", meaning_hi: "बड़ा नुकसान" },
        { name: "South (Wu Gui)", name_hi: "दक्षिण (अग्नि तत्व कलह)", meaning: "Scandals", meaning_hi: "अपवाद व कलह" },
        { name: "South-East (Liu Sha)", name_hi: "दक्षिण-पूर्व (अपव्यय व कष्ट)", meaning: "Loss of wealth", meaning_hi: "धन का अपव्यय" },
        { name: "North (Huo Hai)", name_hi: "उत्तर (छोटी दुर्घटनाएं)", meaning: "Disappointments", meaning_hi: "निराशा व विलंब" }
      ]
    },
    8: {
      trigram: "Gen (गेन)",
      trigram_hi: "गेन (Gen)",
      element: "Earth (पर्वत पृथ्वी तत्व)",
      element_hi: "पर्वत पृथ्वी तत्व (Mountain Earth)",
      direction: "North-East (उत्तर-पूर्व)",
      direction_hi: "उत्तर-पूर्व (North-East)",
      group: "West Group",
      group_hi: "पश्चिम समूह",
      favorable: [
        { name: "South-West (Sheng Chi)", name_hi: "दक्षिण-पश्चिम (भूमि, भवन व स्थायी धन)", meaning: "Property investment, steady wealth, stability", meaning_hi: "अचल संपत्ति व दीर्घकालिक धन" },
        { name: "North-West (Tian Yi)", name_hi: "उत्तर-पश्चिम (सहायक व्यक्ति व स्वास्थ्य)", meaning: "Guardian angels, sound mind, bodily recovery", meaning_hi: "सद्गुरु कृपा व उत्तम स्वास्थ्य" },
        { name: "West (Yan Nian)", name_hi: "पश्चिम (आनंदमयी संबंध व संतान सुख)", meaning: "Children's joy, faithful friends, longevity", meaning_hi: "संतान सुख व मधुर संबंध" },
        { name: "North-East (Fu Wei)", name_hi: "उत्तर-पूर्व (ज्ञान, ध्यान व साधना)", meaning: "Contemplation, sharp studies, wisdom", meaning_hi: "उच्च विद्या, ध्यान व आध्यात्मिक शक्ति" }
      ],
      unfavorable: [
        { name: "South-East (Jue Ming)", name_hi: "दक्षिण-पूर्व (विपत्ति व नुकसान)", meaning: "Hardships", meaning_hi: "गंभीर कष्ट" },
        { name: "North (Wu Gui)", name_hi: "उत्तर (रोग व कलह)", meaning: "Illness", meaning_hi: "स्वास्थ्य विकार व अशांति" },
        { name: "East (Liu Sha)", name_hi: "पूर्व (पारिवारिक टकराव)", meaning: "Broken bonds", meaning_hi: "अपनों से मतभेद" },
        { name: "South (Huo Hai)", name_hi: "दक्षिण (मानहानि व अड़चनें)", meaning: "Financial slips", meaning_hi: "अकारण रुकावटें" }
      ]
    },
    9: {
      trigram: "Li (ली)",
      trigram_hi: "ली (Li)",
      element: "Fire (अग्नि तत्व)",
      element_hi: "अग्नि तत्व (Fire)",
      direction: "South (दक्षिण)",
      direction_hi: "दक्षिण दिशा (South)",
      group: "East Group",
      group_hi: "पूर्व समूह",
      favorable: [
        { name: "East (Sheng Chi)", name_hi: "पूर्व (तेज, यश व उच्च पद)", meaning: "Celebrity fame, executive authority, wealth", meaning_hi: "कीर्ति, यश, मान-प्रतिष्ठा व समृद्धि" },
        { name: "South-East (Tian Yi)", name_hi: "दक्षिण-पूर्व (प्रचुरता व स्वास्थ्य)", meaning: "Rich vitality, financial healing", meaning_hi: "उत्तम कांति, स्वास्थ्य व प्रचुरता" },
        { name: "North (Yan Nian)", name_hi: "उत्तर (लोकप्रियता व मधुर संबंध)", meaning: "Magnetic charisma, harmonious alliances", meaning_hi: "सम्मोहन, मित्रता व दांपत्य प्रेम" },
        { name: "South (Fu Wei)", name_hi: "दक्षिण (आत्मविश्वास व आंतरिक प्रकाश)", meaning: "Clarity of vision, radiant aura", meaning_hi: "दूरदृष्टि, आत्मविश्वास व ओज" }
      ],
      unfavorable: [
        { name: "North-West (Jue Ming)", name_hi: "उत्तर-पश्चिम (अति अवरोध)", meaning: "Bankruptcy", meaning_hi: "हानि व पतन" },
        { name: "West (Wu Gui)", name_hi: "पश्चिम (विवाद व कानूनी कष्ट)", meaning: "Legal fights", meaning_hi: "विवाद व शत्रु बाधा" },
        { name: "South-West (Liu Sha)", name_hi: "दक्षिण-पश्चिम (उदासी व विछोह)", meaning: "Heartbreak", meaning_hi: "मानसिक उदासी व अलगाव" },
        { name: "North-East (Huo Hai)", name_hi: "उत्तर-पूर्व (अस्थिरता व अड़चन)", meaning: "Setbacks", meaning_hi: "विद्या में बाधा व रुकावट" }
      ]
    }
  };

  const lookup = KUA_DATA[finalKua] || KUA_DATA[1];

  return {
    kua: finalKua,
    rawKua,
    ruleOf5Applied,
    solarYear,
    isLiChunApplied,
    trigram: lookup.trigram,
    trigram_hi: lookup.trigram_hi,
    element: lookup.element,
    element_hi: lookup.element_hi,
    direction: lookup.direction,
    direction_hi: lookup.direction_hi,
    group: lookup.group,
    group_hi: lookup.group_hi,
    formulaProof,
    formulaProof_hi,
    favorableDirections: lookup.favorable,
    unfavorableDirections: lookup.unfavorable
  };
}

// -------------------------------------------------------------
// 8 PLANES OF DESTINY (Lo Shu Grid Planes / Yogas)
// -------------------------------------------------------------
export interface DestinyPlane {
  id: string;
  name: string;
  name_hi: string;
  englishTitle: string;
  numbers: number[];
  category: 'Horizontal' | 'Vertical' | 'Diagonal';
  category_hi: 'क्षैतिज तल' | 'ऊर्ध्वाधर तल' | 'कर्ण (राजयोग) तल';
  meaning: string;
  meaning_hi: string;
  presentNumbers: number[];
  missingNumbers: number[];
  percentage: number;
  status: 'Complete' | 'Semi-Active' | 'Inactive';
  status_hi: 'पूर्ण सक्रिय (100%)' | 'मध्यम सक्रिय (66%)' | 'निष्क्रिय / दुर्बल';
}

export const PLANES_DEFINITIONS = [
  {
    id: "mental",
    name: "Mental Plane (Row 1)",
    name_hi: "मानसिक तल (पंक्ति 1)",
    englishTitle: "Plane of Intellect & Memory",
    numbers: [4, 9, 2],
    category: "Horizontal" as const,
    category_hi: "क्षैतिज तल" as const,
    meaning: "Governs razor-sharp analytical faculty, photographic memory, systemic logic, and profound intellectual prowess.",
    meaning_hi: "कुशाग्र स्मरण शक्ति, विश्लेषणात्मक मेधा, गहरी सोच और बौद्धिक कार्यप्रणाली का प्रतीक है।"
  },
  {
    id: "emotional",
    name: "Emotional Plane (Row 2)",
    name_hi: "भावनात्मक तल (पंक्ति 2)",
    englishTitle: "Plane of Heart, Intuition & Compassion",
    numbers: [3, 5, 7],
    category: "Horizontal" as const,
    category_hi: "क्षैतिज तल" as const,
    meaning: "Governs psychic empathy, intuition, emotional depth, unconditional compassion, and spiritual connectivity.",
    meaning_hi: "गहरी संवेदनशीलता, अंतर्ज्ञान (छठी इंद्री), प्रेम, करुणा और आध्यात्मिक दृष्टिकोण का प्रतिनिधित्व करता है।"
  },
  {
    id: "practical",
    name: "Practical Plane (Row 3)",
    name_hi: "व्यावहारिक तल (पंक्ति 3)",
    englishTitle: "Plane of Physical Execution & Material Grounding",
    numbers: [8, 1, 6],
    category: "Horizontal" as const,
    category_hi: "क्षैतिज तल" as const,
    meaning: "Governs material pragmatism, commercial acumen, artisanal craftsmanship, and real-world physical implementation.",
    meaning_hi: "व्यावहारिक कुशलता, भौतिक सफलता, हाथ का हुनर, व्यापारिक समझ और ठोस क्रियान्वयन की क्षमता।"
  },
  {
    id: "thought",
    name: "Thought Plane (Col 1)",
    name_hi: "विचार तल (स्तंभ 1)",
    englishTitle: "Plane of Vision, Planning & Conceptualization",
    numbers: [4, 3, 8],
    category: "Vertical" as const,
    category_hi: "ऊर्ध्वाधर तल" as const,
    meaning: "Endows high-level strategic ideation, visionary architecture, philosophical vision, and long-range planning.",
    meaning_hi: "दूरगामी योजनाएं, दूरदर्शिता, उच्च विचार, रचनात्मक कल्पना और नए विचारों को जन्म देने की क्षमता।"
  },
  {
    id: "will",
    name: "Will Plane (Col 2)",
    name_hi: "इच्छाशक्ति तल (स्तंभ 2)",
    englishTitle: "Plane of Unshakable Determination & Grit",
    numbers: [9, 5, 1],
    category: "Vertical" as const,
    category_hi: "ऊर्ध्वाधर तल" as const,
    meaning: "Bestows iron resolve, relentless persistence, resilience through adversity, and stubborn dedication to reach goals.",
    meaning_hi: "अडिग संकल्प शक्ति, विपरीत परिस्थितियों में धैर्य, अटूट एकाग्रता और लक्ष्य प्राप्ति तक न रुकने का जज्बा।"
  },
  {
    id: "action",
    name: "Action Plane (Col 3)",
    name_hi: "कर्म तल (स्तंभ 3)",
    englishTitle: "Plane of Kinetic Drive & Implementation",
    numbers: [2, 7, 6],
    category: "Vertical" as const,
    category_hi: "ऊर्ध्वाधर तल" as const,
    meaning: "Translates thought into swift, energetic action; eliminates hesitation and drives prompt physical realization.",
    meaning_hi: "विचारों को तुरंत कार्यरूप में परिणत करना, फुर्तीलापन, गतिशीलता और आलस्य रहित कर्मठता।"
  },
  {
    id: "golden_raj_yoga",
    name: "Golden Raj Yoga (Diagonal 1)",
    name_hi: "स्वर्ण राजयोग (कर्ण 1 - सफलता योग)",
    englishTitle: "Supreme Fortune, Leadership & Sovereign Wealth",
    numbers: [4, 5, 6],
    category: "Diagonal" as const,
    category_hi: "कर्ण (राजयोग) तल" as const,
    meaning: "The most auspicious Raja Yoga in Lo Shu! Endows monumental financial abundance, magnetic prestige, leadership charisma, and effortless material luxury.",
    meaning_hi: "लो-शू चक्र का सर्वोच्च राजयोग! यह जातक को अपार धन-वैभव, उच्च प्रतिष्ठा, सरकारी/प्रशासनिक सफलता और राजसी जीवनशैली प्रदान करता है।"
  },
  {
    id: "silver_raj_yoga",
    name: "Silver Raj Yoga (Diagonal 2)",
    name_hi: "रजत राजयोग (कर्ण 2 - भूमि-भवन योग)",
    englishTitle: "Property, Real Estate, Earth Mastery & Enduring Security",
    numbers: [2, 5, 8],
    category: "Diagonal" as const,
    category_hi: "कर्ण (राजयोग) तल" as const,
    meaning: "The Earth Plane Raja Yoga: blesses with widespread land ownership, real estate prosperity, patient wealth accumulation, and deep generational security.",
    meaning_hi: "भूमि, मकान व अचल संपत्ति का परम योग! यह जातक को अनेक संपत्तियों का स्वामी, धैर्यवान, संचय में निपुण और दीर्घकालिक सुरक्षा देता है।"
  }
];

// -------------------------------------------------------------
// MISSING NUMBER REMEDIES (Comprehensive Vedic, Rudraksha, Vastu)
// -------------------------------------------------------------
export interface MissingNumberRemedy {
  number: number;
  planet: string;
  planet_hi: string;
  element: string;
  element_hi: string;
  direction: string;
  direction_hi: string;
  effects: string;
  effects_hi: string;
  remedies: {
    yantra: string;
    rudraksha: string;
    gemstone: string;
    colorTherapy: string;
    vastuAction: string;
    mantra: string;
  };
  remedies_hi: {
    yantra: string;
    rudraksha: string;
    gemstone: string;
    colorTherapy: string;
    vastuAction: string;
    mantra: string;
  };
}

export const MISSING_NUMBERS_REMEDIES: Record<number, MissingNumberRemedy> = {
  1: {
    number: 1,
    planet: "Sun (Surya)",
    planet_hi: "सूर्य देव",
    element: "Water / Fire",
    element_hi: "जल / अग्नि",
    direction: "North / East",
    direction_hi: "उत्तर (लो-शू) / पूर्व (वैदिक)",
    effects: "Lack of career clarity, low self-esteem, hesitation in asserting oneself, weak leadership, communication bottlenecks.",
    effects_hi: "करियर में सही दिशा न मिलना, आत्मविश्वास में कमी, अपनी बात रखने में झिझक और नेतृत्व करने में संकोच।",
    remedies: {
      yantra: "Surya Yantra in East / Brass Surya idol on entrance",
      rudraksha: "1-Mukhi or 12-Mukhi Rudraksha",
      gemstone: "Ruby (माणिक्य) or Red Garnet set in copper/gold",
      colorTherapy: "Incorporate Ruby Red, Gold, Saffron; avoid excess black",
      vastuAction: "Place a small clean water fountain or aquatic imagery in North; ensure North is clutter-free. Offer water (Arghya) to Sun at sunrise.",
      mantra: "Om Suryaya Namaha (ॐ सूर्याय नमः) 108 times on Sundays"
    },
    remedies_hi: {
      yantra: "घर की पूर्व दिशा में सूर्य यंत्र या पीतल का सूर्य लगाएं",
      rudraksha: "1-मुखी या 12-मुखी रुद्राक्ष धारण करें",
      gemstone: "तांबे या सोने में माणिक्य (Ruby) या गार्नेट पहनें",
      colorTherapy: "लाल, सुनहरा और केसरिया रंग ज्यादा पहनें; काले रंग से बचें",
      vastuAction: "उत्तर दिशा को साफ-सुथरा रखें और वहां पानी का छोटा झरना या बहते पानी की तस्वीर लगाएं। रोज सुबह उगते सूरज को जल चढ़ाएं।",
      mantra: "रविवार को 108 बार 'ॐ सूर्याय नमः' का जाप करें"
    }
  },
  2: {
    number: 2,
    planet: "Moon (Chandra)",
    planet_hi: "चन्द्र देव",
    element: "Earth (SW) / Water",
    element_hi: "पृथ्वी (दक्षिण-पश्चिम) / जल",
    direction: "South-West / North-West",
    direction_hi: "दक्षिण-पश्चिम (लो-शू) / उत्तर-पश्चिम (वैदिक)",
    effects: "Emotional instability, mood swings, insecurity in partnerships, lack of patience, relationship discord.",
    effects_hi: "मन का जल्दी परेशान होना, मूड बदलना, रिश्तों में अनबन, धैर्य की कमी और मानसिक तनाव।",
    remedies: {
      yantra: "Chandra Yantra / Sri Yantra in North-West",
      rudraksha: "2-Mukhi Rudraksha (Ardhanarishwara)",
      gemstone: "Natural Pearl (मोती) or Moonstone in silver ring on little finger",
      colorTherapy: "Wear Pearl White, Silver, Light Cream colors on Mondays",
      vastuAction: "Place a pair of Rose Quartz crystals or ceramic earth artifact in South-West to stabilize marital harmony. Respect motherly figures.",
      mantra: "Om Som Somaya Namaha (ॐ सों सोमाय नमः)"
    },
    remedies_hi: {
      yantra: "उत्तर-पश्चिम दिशा में चंद्र यंत्र या श्री यंत्र रखें",
      rudraksha: "2-मुखी रुद्राक्ष पहनें",
      gemstone: "चांदी की अंगूठी में असली मोती या मूनस्टोन सबसे छोटी उंगली में पहनें",
      colorTherapy: "सोमवार को सफेद, सिल्वर या हल्का क्रीम रंग पहनें",
      vastuAction: "दक्षिण-पश्चिम कोने में रोज़ क्वार्ट्ज़ का जोड़ा या मिट्टी का सजावटी सामान रखें। मां और घर की महिलाओं का सम्मान करें।",
      mantra: "सोमवार को 'ॐ सों सोमाय नमः' का जाप करें"
    }
  },
  3: {
    number: 3,
    planet: "Jupiter (Brihaspati / Guru)",
    planet_hi: "बृहस्पति देव (गुरु)",
    element: "Wood (East) / Ether",
    element_hi: "काष्ठ (पूर्व) / आकाश",
    direction: "East / North-East",
    direction_hi: "पूर्व (लो-शू) / उत्तर-पूर्व (वैदिक)",
    effects: "Difficulty focusing on higher studies, indecisiveness, absence of wise mentorship, delayed creative output.",
    effects_hi: "पढ़ाई में मन न लगना, सही फैसला लेने में दिक्कत, अच्छे सलाहकार की कमी और काम अटकना।",
    remedies: {
      yantra: "Brihaspati Yantra / Golden Vishnu Yantra",
      rudraksha: "5-Mukhi Rudraksha mala",
      gemstone: "Yellow Sapphire (पुखराज) or Citrine (सुनहला) in brass/gold",
      colorTherapy: "Wear Bright Yellow, Ochre, Golden fabrics on Thursdays",
      vastuAction: "Place fresh green bamboo plants or Tulsi in East zone. Apply saffron/turmeric tilak on forehead daily. Respect teachers and elders.",
      mantra: "Om Gram Greem Groum Sah Guruve Namaha (ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः)"
    },
    remedies_hi: {
      yantra: "बृहस्पति यंत्र या पीतल का विष्णु यंत्र पूजा घर में रखें",
      rudraksha: "5-मुखी रुद्राक्ष की माला या दाना धारण करें",
      gemstone: "सोने या पीतल में पीला पुखराज या सुनहला (Citrine) पहनें",
      colorTherapy: "गुरुवार को पीला या सुनहरा रंग पहनें",
      vastuAction: "पूर्व दिशा में हरा पौधा या तुलसी लगाएं। रोज माथे पर हल्दी या केसर का तिलक लगाएं। गुरु व बड़ों का सम्मान करें।",
      mantra: "गुरुवार को 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः' का जाप करें"
    }
  },
  4: {
    number: 4,
    planet: "Rahu",
    planet_hi: "राहु देव",
    element: "Wood (SE) / Airy Shadow",
    element_hi: "काष्ठ (दक्षिण-पूर्व) / वायु",
    direction: "South-East / South-West",
    direction_hi: "दक्षिण-पूर्व (लो-शू) / दक्षिण-पश्चिम (वैदिक)",
    effects: "Financial discipline leaks, impulsive expenditure, disorganization, difficulty structuring business contracts.",
    effects_hi: "बिना वजह पैसे खर्च होना, बचत न हो पाना, कामों का बिखराव और पैसों के मामले में उतार-चढ़ाव।",
    remedies: {
      yantra: "Rahu Yantra / Kuber Yantra in South-East",
      rudraksha: "8-Mukhi Rudraksha",
      gemstone: "Hessonite Garnet (गोमेद) in panchdhatu ring",
      colorTherapy: "Incorporate Electric Blue, Smoke Grey, Khaki accents",
      vastuAction: "Place a 4-rod wooden wind chime or lush healthy Money Plant in South-East (Wealth corner). Keep South-East clean and well-lit.",
      mantra: "Om Bhram Bhreem Bhroum Sah Rahave Namaha (ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः)"
    },
    remedies_hi: {
      yantra: "दक्षिण-पूर्व दिशा में राहु यंत्र या कुबेर यंत्र रखें",
      rudraksha: "8-मुखी रुद्राक्ष धारण करें",
      gemstone: "पंचधातु में गोमेद (सलाह लेकर) धारण करें",
      colorTherapy: "नीला, ग्रे और खाकी रंगों का इस्तेमाल बढ़ाएं",
      vastuAction: "दक्षिण-पूर्व कोने (धन के कोने) में 4 रॉड वाली लकड़ी की विंड चाइम या हरा मनी प्लांट लगाएं और इस कोने को रोशन व साफ रखें।",
      mantra: "'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः' मंत्र का जाप करें"
    }
  },
  5: {
    number: 5,
    planet: "Mercury (Budh)",
    planet_hi: "बुध देव",
    element: "Earth (Center / Brahmasthan)",
    element_hi: "पृथ्वी तत्व (घर का केंद्र)",
    direction: "Center / Brahmasthan",
    direction_hi: "बीच का केंद्र स्थान",
    effects: "Loss of core balance, lack of perseverance, restlessness, speech anxiety, frequent shifts without concluding projects.",
    effects_hi: "जीवन में स्थिरता की कमी, मन बेचैन रहना, काम बीच में रुक जाना और व्यापार में उतार-चढ़ाव।",
    remedies: {
      yantra: "Budh Yantra / Sri Chakra placed in center of home",
      rudraksha: "4-Mukhi Rudraksha",
      gemstone: "Emerald (पन्ना) or Green Jade / Tourmaline in silver",
      colorTherapy: "Wear Emerald Green, Mint Green, Parrot Green on Wednesdays",
      vastuAction: "Keep the center (Brahmasthan) of home light, open, unburdened, and spotlessly clean. Place a natural quartz crystal globe or green plant in center.",
      mantra: "Om Bram Breem Broum Sah Budhaya Namaha (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः)"
    },
    remedies_hi: {
      yantra: "घर के बीच वाले हिस्से में बुध यंत्र या श्री यंत्र रखें",
      rudraksha: "4-मुखी रुद्राक्ष धारण करें",
      gemstone: "चांदी में पन्ना (Emerald) या हरा जेड स्टोन पहनें",
      colorTherapy: "बुधवार को हरा या हल्का हरा रंग पहनें",
      vastuAction: "घर के बीच के स्थान (ब्रह्मस्थान) को हमेशा खाली, हल्का और साफ रखें। वहां असली क्रिस्टल बॉल या छोटा हरा पौधा रख सकते हैं।",
      mantra: "बुधवार को 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः' का जाप करें"
    }
  },
  6: {
    number: 6,
    planet: "Venus (Shukra)",
    planet_hi: "शुक्र देव",
    element: "Metal (NW) / Water",
    element_hi: "धातु (उत्तर-पश्चिम) / जल",
    direction: "North-West / South-East",
    direction_hi: "उत्तर-पश्चिम (लो-शू) / दक्षिण-पूर्व (वैदिक)",
    effects: "Absence of mentors or helpful allies, deprivation of luxury/comfort, delayed family bliss, struggles in attracting resources.",
    effects_hi: "सही समय पर लोगों की मदद न मिलना, घर में आराम व खुशियों की कमी और शादीशुदा जिंदगी में असंतोष।",
    remedies: {
      yantra: "Shukra Yantra / Maha Lakshmi Yantra in North-West",
      rudraksha: "6-Mukhi Rudraksha",
      gemstone: "Diamond, White Zircon, or Australian Opal in silver",
      colorTherapy: "Wear Soft Rose Pink, Silken White, Light Sky Blue on Fridays",
      vastuAction: "Hang a 6-rod hollow metallic wind chime in North-West to activate helpful people (Mentors / Kuan Yin energy). Use gentle pleasant fragrances.",
      mantra: "Om Shum Shukraya Namaha (ॐ शुं शुक्राय नमः)"
    },
    remedies_hi: {
      yantra: "उत्तर-पश्चिम दिशा में शुक्र यंत्र या महालक्ष्मी यंत्र रखें",
      rudraksha: "6-मुखी रुद्राक्ष धारण करें",
      gemstone: "चांदी में सफेद जरकन, ओपल या हीरा धारण करें",
      colorTherapy: "शुक्रवार को गुलाबी, सफेद या हल्का आसमानी रंग पहनें",
      vastuAction: "उत्तर-पश्चिम कोने में 6 रॉड वाली धातु की विंड चाइम लटकाएं ताकि अच्छे लोगों का सहयोग मिले। घर में हल्की अच्छी खुशबू रखें।",
      mantra: "शुक्रवार को 'ॐ शुं शुक्राय नमः' का जाप करें"
    }
  },
  7: {
    number: 7,
    planet: "Ketu",
    planet_hi: "केतु देव",
    element: "Metal (West) / Fiery Shadow",
    element_hi: "धातु (पश्चिम) / अग्नि तत्व",
    direction: "West / North-East",
    direction_hi: "पश्चिम (लो-शू) / उत्तर-पूर्व (वैदिक)",
    effects: "Difficulty meditating, skepticism towards spirituality, detachment from children or creative heirs, scattered insights.",
    effects_hi: "ध्यान न लगना, मन भटकते रहना, संतान से जुड़ी चिंता और हर बात में नकारात्मक सोच आना।",
    remedies: {
      yantra: "Ganesh Yantra / Ketu Yantra in West",
      rudraksha: "9-Mukhi Rudraksha (Durga Shakti)",
      gemstone: "Cat's Eye (लहसुनिया) in silver",
      colorTherapy: "Wear Sea Green, Light Smoky Grey, Pale Yellow",
      vastuAction: "Place metal decorative accents or brass singing bowls in West. Feed street dogs with roti/milk on Saturdays. Worship Lord Ganesha.",
      mantra: "Om Kem Ketave Namaha (ॐ कें केतवे नमः)"
    },
    remedies_hi: {
      yantra: "पश्चिम दिशा में गणेश यंत्र या केतु यंत्र रखें",
      rudraksha: "9-मुखी रुद्राक्ष धारण करें",
      gemstone: "चांदी में लहसुनिया (Cat's Eye) सलाह लेकर पहनें",
      colorTherapy: "समुद्री हरा, हल्का स्लेटी या हल्का पीला रंग पहनें",
      vastuAction: "पश्चिम दिशा में धातु की सुंदर वस्तु या पीतल का सजावटी कटोरा रखें। शनिवार को कुत्ते को रोटी या दूध दें और गणेश जी की पूजा करें।",
      mantra: "'ॐ कें केतवे नमः' मंत्र का जाप करें"
    }
  },
  8: {
    number: 8,
    planet: "Saturn (Shani)",
    planet_hi: "शनि देव",
    element: "Earth (NE) / Air",
    element_hi: "पृथ्वी (उत्तर-पूर्व) / वायु",
    direction: "North-East / West",
    direction_hi: "उत्तर-पूर्व (लो-शू) / पश्चिम (वैदिक)",
    effects: "Impatience, poor financial planning, inability to master deep technical crafts, weak endurance when facing obstacles.",
    effects_hi: "धैर्य की कमी, पैसों का सही हिसाब न रख पाना, प्रॉपर्टी के कामों में देरी और मेहनत का पूरा फल न मिलना।",
    remedies: {
      yantra: "Shani Yantra / Hanuman Yantra",
      rudraksha: "7-Mukhi or 14-Mukhi Rudraksha",
      gemstone: "Blue Sapphire (नीलम) or Amethyst (जमुनिया) in iron/silver",
      colorTherapy: "Wear Navy Blue, Midnight Blue, Dark Grey on Saturdays",
      vastuAction: "Place a natural crystal geode or earthen pot in North-East. Avoid making North-East heavy with iron scrap. Recite Hanuman Chalisa or Shani Chalisa.",
      mantra: "Om Sham Shanaishcharaya Namaha (ॐ शं शनैश्चराय नमः)"
    },
    remedies_hi: {
      yantra: "शनि यंत्र या हनुमान यंत्र की स्थापना करें",
      rudraksha: "7-मुखी या 14-मुखी रुद्राक्ष धारण करें",
      gemstone: "चांदी या लोहे में जमुनिया (Amethyst) या नीलम पहनें",
      colorTherapy: "शनिवार को गहरा नीला या गहरा ग्रे रंग पहनें",
      vastuAction: "उत्तर-पूर्व दिशा में क्रिस्टल या मिट्टी का साफ बर्तन रखें; वहां भारी लोहा या कबाड़ न जमा करें। हनुमान चालीसा का पाठ करें।",
      mantra: "शनिवार को 'ॐ शं शनैश्चराय नमः' का जाप करें"
    }
  },
  9: {
    number: 9,
    planet: "Mars (Mangal)",
    planet_hi: "मंगल देव",
    element: "Fire (South)",
    element_hi: "अग्नि तत्व (दक्षिण)",
    direction: "South",
    direction_hi: "दक्षिण दिशा",
    effects: "Low energy, lack of passion, difficulty gaining public recognition or fame, sluggish drive, timid in confrontation.",
    effects_hi: "शरीर में ऊर्जा व उत्साह की कमी, मान-सम्मान मिलने में देरी, आलस्य और हिम्मत की कमी महसूस होना।",
    remedies: {
      yantra: "Mangal Yantra / Hanuman Yantra in South",
      rudraksha: "3-Mukhi Rudraksha (Agni स्वरूप)",
      gemstone: "Italian Red Coral (मूंगा) in copper or gold ring",
      colorTherapy: "Incorporate Crimson Red, Scarlet, Warm Coral accents",
      vastuAction: "Place bright red lighting, a red candle, or copper pyramid in South zone to ignite fire energy and fame. Recite Sundarkand on Tuesdays.",
      mantra: "Om Angarakaya Namaha (ॐ अंगारकाय नमः)"
    },
    remedies_hi: {
      yantra: "दक्षिण दिशा में मंगल यंत्र या हनुमान यंत्र रखें",
      rudraksha: "3-मुखी रुद्राक्ष धारण करें",
      gemstone: "तांबे या सोने में लाल मूंगा (Red Coral) धारण करें",
      colorTherapy: "गहरा लाल और मूंगा (Coral) रंग ज्यादा इस्तेमाल करें",
      vastuAction: "दक्षिण दिशा में लाल रंग का बल्ब, लाल मोमबत्ती या तांबे का पिरामिड रखें। मंगलवार को सुंदरकांड या हनुमान चालीसा पढ़ें।",
      mantra: "मंगलवार को 'ॐ अंगारकाय नमः' का जाप करें"
    }
  }
};

export interface VedicPlaneItem {
  id: string;
  name: string;
  name_hi: string;
  numbers: number[];
  planets: string;
  planets_hi: string;
  presentNumbers: number[];
  missingNumbers: number[];
  percentage: number;
  status: 'Complete' | 'Semi-Active' | 'Inactive';
  status_hi: string;
  prediction: string;
  prediction_hi: string;
}

export interface VedicGridAnalysis {
  vedicPlanes: VedicPlaneItem[];
  dominantPlanets: { num: number; planet: string; planet_hi: string; count: number; effect: string; effect_hi: string }[];
  weakPlanets: { num: number; planet: string; planet_hi: string; remedy: string; remedy_hi: string; mantra: string }[];
  careerGuidance: string;
  careerGuidance_hi: string;
  wealthGuidance: string;
  wealthGuidance_hi: string;
  relationshipGuidance: string;
  relationshipGuidance_hi: string;
  spiritualGuidance: string;
  spiritualGuidance_hi: string;
}

// -------------------------------------------------------------
// MAIN CALCULATION FUNCTION
// -------------------------------------------------------------
export interface FullProfileResult {
  day: number;
  month: number;
  year: number;
  gender: 'male' | 'female';
  mulank: number;
  bhagyank: number;
  kuaProfile: KuaProfile;
  nameCompound: number;
  nameSingle: number;
  mulankProfile: VedicNumberProfile;
  bhagyankProfile: VedicNumberProfile;
  kuaNumberProfile: VedicNumberProfile;
  synergy: string;
  synergy_hi: string;

  // Grids & Planes
  loShuGrid: {
    row0: { num: number; count: number; name: string; name_hi: string }[];
    row1: { num: number; count: number; name: string; name_hi: string }[];
    row2: { num: number; count: number; name: string; name_hi: string }[];
  };
  vedicGrid: {
    row0: { num: number; count: number; planet: string; planet_hi: string }[];
    row1: { num: number; count: number; planet: string; planet_hi: string }[];
    row2: { num: number; count: number; planet: string; planet_hi: string }[];
  };
  countsMap: Record<number, number>;
  presentNumbers: number[];
  missingNumbers: number[];
  destinyPlanes: DestinyPlane[];
  missingRemedies: MissingNumberRemedy[];
  allExtractedDigits: number[];
  vedicAnalysis: VedicGridAnalysis;
}

export function calculateFullNumerologyProfile(
  dobString: string,
  fullName: string = '',
  gender: 'male' | 'female' = 'female'
): FullProfileResult {
  let day = 15;
  let month = 6;
  let year = 1992;

  if (dobString) {
    const parts = dobString.includes('-') ? dobString.split('-') : dobString.split('/');
    if (parts.length === 3) {
      if (parts[0].length === 4) {
        // YYYY-MM-DD
        year = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        day = parseInt(parts[2], 10);
      } else {
        // DD-MM-YYYY
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
      }
    }
  }

  // 1. Mulank (Driver Number): Reduced day of birth (1-31 -> 1-9)
  const mulank = reduceToSingleDigit(day);

  // 2. Bhagyank (Conductor Number): Reduced sum of all digits DD + MM + YYYY
  const cleanDigitsStr = `${day}${month}${year}`.replace(/\D/g, '');
  const sumOfAllDigits = cleanDigitsStr
    .split('')
    .reduce((sum, d) => sum + parseInt(d, 10), 0);
  const bhagyank = reduceToSingleDigit(sumOfAllDigits);

  // 3. Kua Number (Authentic Feng Shui + Solar Year Li Chun + Rule of 5)
  const kuaProfile = calculateKuaProfile(year, month, day, gender);

  // 4. Name Vibration (Chaldean Numerology)
  let nameCompound = 0;
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  for (const char of cleanName) {
    if (CHALDEAN_MAP[char]) {
      nameCompound += CHALDEAN_MAP[char];
    }
  }
  const nameSingle = nameCompound > 0 ? reduceToSingleDigit(nameCompound) : mulank;

  // 5. Build Complete Digit Frequency for Lo Shu Grid
  // Authentic Lo Shu includes:
  // - All non-zero digits of DD, MM, YYYY
  // - Driver (Mulank)
  // - Conductor (Bhagyank)
  // - Kua Number
  const rawDigits: number[] = [];
  const dayStr = day.toString().padStart(2, '0');
  const monthStr = month.toString().padStart(2, '0');
  const yearStr = year.toString();

  for (const char of `${dayStr}${monthStr}${yearStr}`) {
    const n = parseInt(char, 10);
    if (n >= 1 && n <= 9) {
      rawDigits.push(n);
    }
  }
  rawDigits.push(mulank);
  rawDigits.push(bhagyank);
  rawDigits.push(kuaProfile.kua);

  const countsMap: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  for (const d of rawDigits) {
    countsMap[d] = (countsMap[d] || 0) + 1;
  }

  const presentNumbers: number[] = [];
  const missingNumbers: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (countsMap[i] > 0) {
      presentNumbers.push(i);
    } else {
      missingNumbers.push(i);
    }
  }

  // 6. Lo Shu 3x3 Grid Layout
  // Row 0: 4 (SE - Wood), 9 (S - Fire), 2 (SW - Earth)
  // Row 1: 3 (E - Wood), 5 (Center - Earth), 7 (W - Metal)
  // Row 2: 8 (NE - Earth), 1 (N - Water), 6 (NW - Metal)
  const loShuGrid = {
    row0: [
      { num: 4, count: countsMap[4] || 0, name: "South-East (Wood)", name_hi: "दक्षिण-पूर्व (काष्ठ)" },
      { num: 9, count: countsMap[9] || 0, name: "South (Fire)", name_hi: "दक्षिण (अग्नि)" },
      { num: 2, count: countsMap[2] || 0, name: "South-West (Earth)", name_hi: "दक्षिण-पश्चिम (पृथ्वी)" }
    ],
    row1: [
      { num: 3, count: countsMap[3] || 0, name: "East (Wood)", name_hi: "पूर्व (काष्ठ)" },
      { num: 5, count: countsMap[5] || 0, name: "Center (Earth)", name_hi: "केंद्र (पृथ्वी)" },
      { num: 7, count: countsMap[7] || 0, name: "West (Metal)", name_hi: "पश्चिम (धातु)" }
    ],
    row2: [
      { num: 8, count: countsMap[8] || 0, name: "North-East (Earth)", name_hi: "उत्तर-पूर्व (पृथ्वी)" },
      { num: 1, count: countsMap[1] || 0, name: "North (Water)", name_hi: "उत्तर (जल)" },
      { num: 6, count: countsMap[6] || 0, name: "North-West (Metal)", name_hi: "उत्तर-पश्चिम (धातु)" }
    ]
  };

  // 7. Vedic Grid (वैदिक अंक कुण्डली)
  // Classical Vedic 3x3 matrix:
  // Row 0: 3 (Guru / बृहस्पति), 1 (Surya / सूर्य), 9 (Mangal / मंगल)
  // Row 1: 6 (Shukra / शुक्र), 7 (Ketu / केतु), 5 (Budh / बुध)
  // Row 2: 2 (Chandra / चन्द्र), 8 (Shani / शनि), 4 (Rahu / राहु)
  const vedicGrid = {
    row0: [
      { num: 3, count: countsMap[3] || 0, planet: "Jupiter (Brihaspati)", planet_hi: "बृहस्पति देव" },
      { num: 1, count: countsMap[1] || 0, planet: "Sun (Surya)", planet_hi: "सूर्य देव" },
      { num: 9, count: countsMap[9] || 0, planet: "Mars (Mangal)", planet_hi: "मंगल देव" }
    ],
    row1: [
      { num: 6, count: countsMap[6] || 0, planet: "Venus (Shukra)", planet_hi: "शुक्र देव" },
      { num: 7, count: countsMap[7] || 0, planet: "Ketu", planet_hi: "केतु देव" },
      { num: 5, count: countsMap[5] || 0, planet: "Mercury (Budh)", planet_hi: "बुध देव" }
    ],
    row2: [
      { num: 2, count: countsMap[2] || 0, planet: "Moon (Chandra)", planet_hi: "चन्द्र देव" },
      { num: 8, count: countsMap[8] || 0, planet: "Saturn (Shani)", planet_hi: "शनि देव" },
      { num: 4, count: countsMap[4] || 0, planet: "Rahu", planet_hi: "राहु देव" }
    ]
  };

  // 8. Calculate 8 Planes of Destiny
  const destinyPlanes: DestinyPlane[] = PLANES_DEFINITIONS.map((def) => {
    const presentInPlane = def.numbers.filter((n) => countsMap[n] > 0);
    const missingInPlane = def.numbers.filter((n) => countsMap[n] === 0);
    const countPresent = presentInPlane.length;
    let percentage = 0;
    let status: 'Complete' | 'Semi-Active' | 'Inactive' = 'Inactive';
    let status_hi: 'पूर्ण सक्रिय (100%)' | 'मध्यम सक्रिय (66%)' | 'निष्क्रिय / दुर्बल' = 'निष्क्रिय / दुर्बल';

    if (countPresent === 3) {
      percentage = 100;
      status = 'Complete';
      status_hi = 'पूर्ण सक्रिय (100%)';
    } else if (countPresent === 2) {
      percentage = 66;
      status = 'Semi-Active';
      status_hi = 'मध्यम सक्रिय (66%)';
    } else if (countPresent === 1) {
      percentage = 33;
      status = 'Inactive';
      status_hi = 'निष्क्रिय / दुर्बल';
    } else {
      percentage = 0;
      status = 'Inactive';
      status_hi = 'निष्क्रिय / दुर्बल';
    }

    return {
      id: def.id,
      name: def.name,
      name_hi: def.name_hi,
      englishTitle: def.englishTitle,
      numbers: def.numbers,
      category: def.category,
      category_hi: def.category_hi,
      meaning: def.meaning,
      meaning_hi: def.meaning_hi,
      presentNumbers: presentInPlane,
      missingNumbers: missingInPlane,
      percentage,
      status,
      status_hi
    };
  });

  // 9. Missing Numbers Remedies
  const missingRemedies: MissingNumberRemedy[] = missingNumbers.map((m) => MISSING_NUMBERS_REMEDIES[m]);

  // Profiles
  const mulankProfile = VEDIC_NUMBERS_MAP[mulank] || VEDIC_NUMBERS_MAP[1];
  const bhagyankProfile = VEDIC_NUMBERS_MAP[bhagyank] || VEDIC_NUMBERS_MAP[1];
  const kuaNumberProfile = VEDIC_NUMBERS_MAP[kuaProfile.kua] || VEDIC_NUMBERS_MAP[1];

  // Synergy assessment
  let synergy = "Harmonic Planetary Alignment";
  let synergy_hi = "शुभ ग्रह सामंजस्य";
  if (mulank === bhagyank) {
    synergy = `Unified Cosmic Frequency (${mulank} & ${bhagyank}): Your core soul instinct (Driver) and outward destiny (Conductor) vibrate under the same planetary lord (${mulankProfile.ruler}), granting direct focus, swift manifestation, and strong personal conviction.`;
    synergy_hi = `बहुत अच्छा तालमेल (${mulank} और ${bhagyank}): आपका मूलांक और भाग्यांक दोनों एक ही ग्रह (${mulankProfile.ruler_hi}) से जुड़े हैं। इससे आपको लक्ष्य पर ध्यान लगाने और जल्दी सफलता पाने में मदद मिलती है।`;
  } else {
    synergy = `Dynamic Complementary Synergy (${mulank} & ${bhagyank}): Your Driver ${mulank} (${mulankProfile.ruler}) provides initiation energy, while your Conductor ${bhagyank} (${bhagyankProfile.ruler}) governs life milestones. When aligned with Kua ${kuaProfile.kua}, material and spiritual objectives flourish.`;
    synergy_hi = `अच्छा पूरक तालमेल (${mulank} और ${bhagyank}): आपका मूलांक ${mulank} (${mulankProfile.ruler_hi}) आपका स्वभाव बताता है, जबकि भाग्यांक ${bhagyank} (${bhagyankProfile.ruler_hi}) जीवन की दिशा तय करता है। कुआ अंक ${kuaProfile.kua} की सही दिशा के साथ मिलने से जीवन में बड़ी तरक्की होती है।`;
  }

  // 10. Vedic Grid Yogas and Predictions (8 Vedic Planes)
  const VEDIC_PLANES_DEF = [
    {
      id: "v-dharma",
      name: "Dharma & Thought Trine (3-1-9)",
      name_hi: "ज्ञान व धर्म योग (3-1-9)",
      numbers: [3, 1, 9],
      planets: "Jupiter (3), Sun (1), Mars (9)",
      planets_hi: "गुरु (3), सूर्य (1), मंगल (9)",
      prediction: "High intellectual authority, vision, moral principles, and executive command. Blessed with natural leadership and respect in governance or higher learning.",
      prediction_hi: "अच्छी समझ, आत्म-सम्मान, नेतृत्व की क्षमता और सही सिद्धांत। यह योग व्यक्ति को समाज, पढ़ाई-लिखाई, प्रशासन और ऊंचे पद पर सम्मान दिलाता है।"
    },
    {
      id: "v-artha",
      name: "Artha & Prosperity Trine (6-7-5)",
      name_hi: "धन व व्यापार योग (6-7-5)",
      numbers: [6, 7, 5],
      planets: "Venus (6), Ketu (7), Mercury (5)",
      planets_hi: "शुक्र (6), केतु (7), बुध (5)",
      prediction: "Commercial acumen, artistic eloquence, financial shrewdness, and magnetic charisma. Brings sudden fortune, trading success, and luxury aesthetics.",
      prediction_hi: "बिजनेस की अच्छी समझ, बढ़िया बातचीत की कला, सुख-सुविधाएं और आकर्षक व्यक्तित्व। यह योग व्यापार, कला और धन लाभ के लिए बहुत शुभ है।"
    },
    {
      id: "v-karma",
      name: "Karma & Stability Trine (2-8-4)",
      name_hi: "मेहनत व सफलता योग (2-8-4)",
      numbers: [2, 8, 4],
      planets: "Moon (2), Saturn (8), Rahu (4)",
      planets_hi: "चन्द्र (2), शनि (8), राहु (4)",
      prediction: "Patience, technical resilience, worldly triumph over adversities, and ability to steer large-scale enterprises or complex organizations.",
      prediction_hi: "धैर्य, कड़ी मेहनत, तकनीकी समझ और मुश्किल हालात से बाहर निकलने की ताकत। उद्योग, जमीन और टीम प्रबंधन में अच्छी सफलता मिलती है।"
    },
    {
      id: "v-gyan",
      name: "Gyan & Advisory Yoga (3-6-2)",
      name_hi: "ज्ञान व सलाहकार योग (3-6-2)",
      numbers: [3, 6, 2],
      planets: "Jupiter (3), Venus (6), Moon (2)",
      planets_hi: "गुरु (3), शुक्र (6), चन्द्र (2)",
      prediction: "Exceptional advisory aptitude, emotional diplomacy, aesthetic appreciation, and deep wisdom that inspires and guides large communities.",
      prediction_hi: "लोगों को सही सलाह देने का गुण, भावनाओं की समझ और सबको साथ लेकर चलने की कला।"
    },
    {
      id: "v-tapas",
      name: "Tapas & Rajyash Yoga (1-7-8)",
      name_hi: "तप व सम्मान योग (1-7-8)",
      numbers: [1, 7, 8],
      planets: "Sun (1), Ketu (7), Saturn (8)",
      planets_hi: "सूर्य (1), केतु (7), शनि (8)",
      prediction: "Unshakeable perseverance, research depth, administrative or state honors, and ascetic inner discipline that withstands all trials.",
      prediction_hi: "मजबूत इरादा, गहराई से काम करने की आदत, सरकारी क्षेत्रों में सम्मान और हर चुनौती का सामना करने का अनुशासन।"
    },
    {
      id: "v-parakram",
      name: "Parakram & Siddhi Yoga (9-5-4)",
      name_hi: "साहस व सफलता योग (9-5-4)",
      numbers: [9, 5, 4],
      planets: "Mars (9), Mercury (5), Rahu (4)",
      planets_hi: "मंगल (9), बुध (5), राहु (4)",
      prediction: "Fast tactical thinking, real estate and technological mastery, courageous enterprise, and sudden breakthroughs against competitors.",
      prediction_hi: "तेज सोच, प्रॉपर्टी व टेक्नोलॉजी के काम में लाभ, हिम्मत भरे फैसले और प्रतिस्पर्धा में जीत।"
    },
    {
      id: "v-adhyatma",
      name: "Maha Adhyatma Diagonal (3-7-4)",
      name_hi: "अध्यात्म व अंतर्ज्ञान योग (3-7-4)",
      numbers: [3, 7, 4],
      planets: "Jupiter (3), Ketu (7), Rahu (4)",
      planets_hi: "गुरु (3), केतु (7), राहु (4)",
      prediction: "Rare spiritual awakening, psychic intuition, ability to decode hidden universal laws, and triumph in occult or esoteric sciences.",
      prediction_hi: "गहरी आध्यात्मिक समझ, तेज अंतर्ज्ञान (इंट्यूशन) और गूढ़ विषयों को समझने की खास क्षमता।"
    },
    {
      id: "v-drishti",
      name: "Siddha Drishti Diagonal (9-7-2)",
      name_hi: "तेज समझ व सुरक्षा योग (9-7-2)",
      numbers: [9, 7, 2],
      planets: "Mars (9), Ketu (7), Moon (2)",
      planets_hi: "मंगल (9), केतु (7), चन्द्र (2)",
      prediction: "Fierce intuitive radar, energetic perception, high creative emotional intelligence, and warrior-like mental resilience.",
      prediction_hi: "लोगों और माहौल की ऊर्जा को जल्दी भांप लेने की शक्ति, भावनात्मक मजबूती और मानसिक साहस।"
    }
  ];

  const vedicPlanes: VedicPlaneItem[] = VEDIC_PLANES_DEF.map((def) => {
    const presentInPlane = def.numbers.filter((n) => countsMap[n] > 0);
    const missingInPlane = def.numbers.filter((n) => countsMap[n] === 0);
    const countPresent = presentInPlane.length;
    let percentage = 0;
    let status: 'Complete' | 'Semi-Active' | 'Inactive' = 'Inactive';
    let status_hi = 'कमजोर / अधूरा';

    if (countPresent === 3) {
      percentage = 100;
      status = 'Complete';
      status_hi = 'पूर्ण सक्रिय (100%)';
    } else if (countPresent === 2) {
      percentage = 66;
      status = 'Semi-Active';
      status_hi = 'मध्यम सक्रिय (66%)';
    } else if (countPresent === 1) {
      percentage = 33;
      status = 'Inactive';
      status_hi = 'आंशिक (33%)';
    }

    return {
      id: def.id,
      name: def.name,
      name_hi: def.name_hi,
      numbers: def.numbers,
      planets: def.planets,
      planets_hi: def.planets_hi,
      presentNumbers: presentInPlane,
      missingNumbers: missingInPlane,
      percentage,
      status,
      status_hi,
      prediction: def.prediction,
      prediction_hi: def.prediction_hi
    };
  });

  // Dominant planets (counts >= 1, sorted by count desc)
  const PLANET_NAMES_MAP: Record<number, { name: string; name_hi: string }> = {
    1: { name: "Sun (Surya)", name_hi: "सूर्य देव" },
    2: { name: "Moon (Chandra)", name_hi: "चन्द्र देव" },
    3: { name: "Jupiter (Brihaspati)", name_hi: "बृहस्पति देव" },
    4: { name: "Rahu", name_hi: "राहु देव" },
    5: { name: "Mercury (Budh)", name_hi: "बुध देव" },
    6: { name: "Venus (Shukra)", name_hi: "शुक्र देव" },
    7: { name: "Ketu", name_hi: "केतु देव" },
    8: { name: "Saturn (Shani)", name_hi: "शनि देव" },
    9: { name: "Mars (Mangal)", name_hi: "मंगल देव" }
  };

  const dominantPlanets = presentNumbers
    .map((num) => ({
      num,
      planet: PLANET_NAMES_MAP[num].name,
      planet_hi: PLANET_NAMES_MAP[num].name_hi,
      count: countsMap[num],
      effect: countsMap[num] > 1
        ? `Double/Multiple Planetary Activation (${countsMap[num]}x): Extremely pronounced influence on personality and decisions.`
        : `Balanced Solar/Planetary Chamber (1x): Steady, harmonious influence.`,
      effect_hi: countsMap[num] > 1
        ? `मजबूत प्रभाव (${countsMap[num]}x): आपके स्वभाव और फैसलों पर इस ग्रह का गहरा असर है।`
        : `संतुलित प्रभाव (1x): जीवन में इस ग्रह की ऊर्जा का सही और स्थिर साथ।`
    }))
    .sort((a, b) => b.count - a.count);

  const weakPlanets = missingNumbers.map((num) => ({
    num,
    planet: PLANET_NAMES_MAP[num].name,
    planet_hi: PLANET_NAMES_MAP[num].name_hi,
    remedy: MISSING_NUMBERS_REMEDIES[num]?.remedies?.vastuAction || "Chant Beej Mantra and wear prescribed gemstones.",
    remedy_hi: MISSING_NUMBERS_REMEDIES[num]?.remedies_hi?.vastuAction || "संबंधित ग्रह के मंत्र का जाप और आसान उपाय करें।",
    mantra: MISSING_NUMBERS_REMEDIES[num]?.remedies?.mantra || VEDIC_NUMBERS_MAP[num]?.harmonicMantra || ""
  }));

  // Life Guidance synthesis
  const hasDharma = countsMap[3] > 0 && countsMap[1] > 0 && countsMap[9] > 0;
  const hasArtha = countsMap[6] > 0 && countsMap[7] > 0 && countsMap[5] > 0;
  const hasKarma = countsMap[2] > 0 && countsMap[8] > 0 && countsMap[4] > 0;

  const careerGuidance = hasDharma
    ? "Your Dharma Trine (3-1-9) shines brightly, favoring leadership, consultancy, administrative authority, or higher education mentorship."
    : `Driven by Mulank ${mulank} and Bhagyank ${bhagyank}, your career path flourishes when combining structured focus with ethical principles.`;

  const careerGuidance_hi = hasDharma
    ? "आपकी कुंडली में ज्ञान व धर्म योग (3-1-9) सक्रिय है, जो नेतृत्व, परामर्श, सरकारी काम या शिक्षा के क्षेत्र में बड़ी सफलता और सम्मान देता है।"
    : `मूलांक ${mulank} और भाग्यांक ${bhagyank} के अनुसार जब आप अपनी समझ और अनुशासन को साथ लेकर चलेंगे, तो करियर में लगातार तरक्की होगी।`;

  const wealthGuidance = hasArtha
    ? "Your Artha Trine (6-7-5) creates enduring commercial magnetism, prosperity through intellect, and fine asset acquisition."
    : `Financial stability grows consistently through careful budgeting, regular savings, and activating missing financial remedies.`;

  const wealthGuidance_hi = hasArtha
    ? "धन व व्यापार योग (6-7-5) की मौजूदगी से बिजनेस में लाभ, पैसों की बचत और जीवन में अच्छी सुख-सुविधाएं मिलती रहती हैं।"
    : `सही बजट, नियमित बचत और अनुपस्थित अंकों के आसान उपाय करने से आपकी आर्थिक स्थिति लगातार मजबूत होगी।`;

  const relationshipGuidance = countsMap[2] > 0 && countsMap[6] > 0
    ? "Blessed with Chandra (2) and Shukra (6), your emotional radar is warm, diplomatic, and deeply understanding."
    : "Maintain calm transparency and avoid impulsive expectations in intimate partnerships.";

  const relationshipGuidance_hi = countsMap[2] > 0 && countsMap[6] > 0
    ? "चंद्र (2) और शुक्र (6) के अच्छे प्रभाव से आपके रिश्तों में प्यार, अपनापन और आपसी भरोसा बना रहता है।"
    : "रिश्तों में साफ बातचीत, धैर्य और एक-दूसरे की भावनाओं का सम्मान करने से घर-परिवार में शांति बनी रहेगी।";

  const spiritualGuidance = `Chant your personal Driver mantra daily: "${mulankProfile.harmonicMantra}" for aura radiance and internal peace.`;
  const spiritualGuidance_hi = `रोज सुबह अपने मूलांक का मंत्र: "${mulankProfile.harmonicMantra}" पढ़ें। इससे मन शांत रहेगा और सकारात्मक ऊर्जा बढ़ेगी।`;

  const vedicAnalysis: VedicGridAnalysis = {
    vedicPlanes,
    dominantPlanets,
    weakPlanets,
    careerGuidance,
    careerGuidance_hi,
    wealthGuidance,
    wealthGuidance_hi,
    relationshipGuidance,
    relationshipGuidance_hi,
    spiritualGuidance,
    spiritualGuidance_hi
  };

  return {
    day,
    month,
    year,
    gender,
    mulank,
    bhagyank,
    kuaProfile,
    nameCompound: nameCompound || 24,
    nameSingle,
    mulankProfile,
    bhagyankProfile,
    kuaNumberProfile,
    synergy,
    synergy_hi,
    loShuGrid,
    vedicGrid,
    countsMap,
    presentNumbers,
    missingNumbers,
    destinyPlanes,
    missingRemedies,
    allExtractedDigits: rawDigits,
    vedicAnalysis
  };
}

// Backward compatibility export for any existing call sites
export function calculateVedicProfile(dobString: string, fullName: string = '') {
  return calculateFullNumerologyProfile(dobString, fullName, 'female');
}
