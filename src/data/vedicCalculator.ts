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
    title_hi: "प्रणेता, संप्रभु एवं पथप्रदर्शक",
    ruler: "Sun (Surya Dev)",
    ruler_hi: "सूर्य देव",
    archetype: "The Solar Visionary",
    archetype_hi: "सौर दूरदर्शी",
    element: "Water in Lo Shu / Fire in Vedic",
    element_hi: "लो-शू में जल / वैदिक में अग्नि",
    direction: "North (Lo Shu) / East (Vedic)",
    direction_hi: "उत्तर (लो-शू) / पूर्व (वैदिक)",
    luckyColors: "Gold, Copper, Ruby Red, Saffron",
    luckyColors_hi: "सुनहरा, तांबा, गहरा लाल, केसरिया",
    luckyDays: "Sunday, Monday",
    luckyDays_hi: "रविवार, सोमवार",
    harmonicMantra: "Om Hram Hreem Hroum Sah Suryaya Namaha (ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः)",
    gemstone: "Ruby (माणिक्य)",
    gemstone_hi: "माणिक्य (Ruby) अथवा गार्नेट",
    rudraksha: "1-Mukhi or 12-Mukhi",
    rudraksha_hi: "१-मुखी अथवा १२-मुखी रुद्राक्ष",
    description: "Blessed with the vitalizing brilliance of Surya, you possess innate leadership, strong willpower, and executive charisma to initiate new ventures.",
    description_hi: "भगवान सूर्य के तेज से संपन्न, आपमें जन्मजात नेतृत्व क्षमता, दृढ़ इच्छाशक्ति और नई पहलों को साकार करने का अद्वितीय ओज है।"
  },
  2: {
    number: 2,
    title: "The Empath, Intuitive & Harmonizer",
    title_hi: "संवेदनशील, अंतर्ज्ञानी एवं शांतिदूत",
    ruler: "Moon (Chandra Dev)",
    ruler_hi: "चन्द्र देव",
    archetype: "The Lunar Mystic",
    archetype_hi: "चंद्र रहस्यवादी",
    element: "Earth in Lo Shu / Water in Vedic",
    element_hi: "लो-शू में पृथ्वी / वैदिक में जल",
    direction: "South-West (Lo Shu) / North-West (Vedic)",
    direction_hi: "दक्षिण-पश्चिम (लो-शू) / उत्तर-पश्चिम (वैदिक)",
    luckyColors: "Pearl White, Silver, Cream, Pale Green",
    luckyColors_hi: "मोती जैसा सफेद, चांदी, क्रीम, हल्का हरा",
    luckyDays: "Monday, Sunday",
    luckyDays_hi: "सोमवार, रविवार",
    harmonicMantra: "Om Shram Shreem Shroum Sah Chandraya Namaha (ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः)",
    gemstone: "Pearl / Moonstone (मोती / चंद्रकांत मणि)",
    gemstone_hi: "सच्चा मोती अथवा मूनस्टोन",
    rudraksha: "2-Mukhi Rudraksha",
    rudraksha_hi: "२-मुखी रुद्राक्ष (अर्धनारीश्वर)",
    description: "Under Chandra's calming radiance, your gift lies in deep emotional intelligence, diplomacy, intuitive foresight, and collaborative unity.",
    description_hi: "चंद्रमा की शीतल आभा से पोषित, आपमें गहरी संवेदनशीलता, अंतर्ज्ञान, सौहार्द और रिश्तों को सहेजने की अलौकिक कला है।"
  },
  3: {
    number: 3,
    title: "The Wise Mentor, Creator & Communicator",
    title_hi: "ज्ञानी मार्गदर्शक, सृजनशील एवं दार्शनिक",
    ruler: "Jupiter (Brihaspati / Guru)",
    ruler_hi: "बृहस्पति देव (गुरु)",
    archetype: "The Sacred Preceptor",
    archetype_hi: "पवित्र गुरु व शिक्षक",
    element: "Wood (Lo Shu) / Ether (Akash Vedic)",
    element_hi: "काष्ठ तत्व (लो-शू) / आकाश तत्व (वैदिक)",
    direction: "East (Lo Shu) / North-East (Vedic)",
    direction_hi: "पूर्व (लो-शू) / उत्तर-पूर्व (वैदिक)",
    luckyColors: "Bright Yellow, Golden Amber, Ochre",
    luckyColors_hi: "चमकीला पीला, सुनहरा, गेरुआ",
    luckyDays: "Thursday, Tuesday",
    luckyDays_hi: "गुरुवार, मंगलवार",
    harmonicMantra: "Om Gram Greem Groum Sah Guruve Namaha (ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः)",
    gemstone: "Yellow Sapphire (पुखराज)",
    gemstone_hi: "पीला पुखराज (Yellow Sapphire) या सुनहला",
    rudraksha: "5-Mukhi Rudraksha",
    rudraksha_hi: "५-मुखी रुद्राक्ष (गुरु कृपा)",
    description: "Guided by Brihaspati, you possess expansive wisdom, expressive articulation, optimistic foresight, and an innate capacity to advise and uplift others.",
    description_hi: "गुरु बृहस्पति की कृपा से आप ज्ञान, उच्च विवेक, रचनात्मक अभिव्यक्ति और दूसरों को सही मार्ग दिखाने में अद्वितीय हैं।"
  },
  4: {
    number: 4,
    title: "The Architect, Strategist & Rebel",
    title_hi: "रणनीतिकार, संगठक एवं क्रांतिदर्शी",
    ruler: "Rahu (North Lunar Node)",
    ruler_hi: "राहु देव",
    archetype: "The Structural Reformer",
    archetype_hi: "व्यवस्था सुधारक",
    element: "Wood in Lo Shu / Airy Shadow in Vedic",
    element_hi: "लो-शू में काष्ठ / वैदिक में वायु-छाया",
    direction: "South-East (Lo Shu) / South-West (Vedic)",
    direction_hi: "दक्षिण-पूर्व (लो-शू) / दक्षिण-पश्चिम (वैदिक)",
    luckyColors: "Electric Blue, Charcoal Grey, Khaki",
    luckyColors_hi: "गहरा नीला, धूसर (ग्रे), खाकी",
    luckyDays: "Sunday, Saturday",
    luckyDays_hi: "रविवार, शनिवार",
    harmonicMantra: "Om Bhram Bhreem Bhroum Sah Rahave Namaha (ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः)",
    gemstone: "Hessonite Garnet (गोमेद)",
    gemstone_hi: "गोमेद (Hessonite Garnet)",
    rudraksha: "8-Mukhi Rudraksha",
    rudraksha_hi: "८-मुखी रुद्राक्ष (विघ्नहर्ता गणेश)",
    description: "Influenced by Rahu, you bring revolutionary thinking, unconventional mastery, acute technical strategy, and perseverance against all odds.",
    description_hi: "राहु के प्रभाव से आप लीक से हटकर सोचने वाले, सटीक रणनीतिकार और अप्रत्याशित चुनौतियों को अवसर में बदलने वाले हैं।"
  },
  5: {
    number: 5,
    title: "The Alchemist, Communicator & Free Spirit",
    title_hi: "वाकपटु, गतिशील एवं बहुमुखी प्रतिभा",
    ruler: "Mercury (Budh Dev)",
    ruler_hi: "बुध देव",
    archetype: "The Mercurial Polymath",
    archetype_hi: "बुध प्रतिभा",
    element: "Earth (Prithvi / Center)",
    element_hi: "पृथ्वी तत्व (ब्रह्मस्थान / मध्य)",
    direction: "Center / Brahmasthan (लो-शू व वैदिक)",
    direction_hi: "केंद्र / ब्रह्मस्थान (Center)",
    luckyColors: "Emerald Green, Mint, Turquoise",
    luckyColors_hi: "पन्ना हरा, हल्का हरा, फिरोजी",
    luckyDays: "Wednesday, Friday",
    luckyDays_hi: "बुधवार, शुक्रवार",
    harmonicMantra: "Om Bram Breem Broum Sah Budhaya Namaha (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः)",
    gemstone: "Emerald (पन्ना)",
    gemstone_hi: "पन्ना (Emerald) अथवा ओनेक्स",
    rudraksha: "4-Mukhi Rudraksha",
    rudraksha_hi: "४-मुखी रुद्राक्ष (ब्रह्म चेतना)",
    description: "Governed by Budh, you excel in commercial acumen, sharp analytical intellect, adaptive versatility, and engaging interpersonal communication.",
    description_hi: "बुध देव की कृपा से आपकी बुद्धि अत्यंत कुशाग्र, व्यापार में पारखी और किसी भी नए वातावरण में शीघ्र सामंजस्य बैठाने वाली है।"
  },
  6: {
    number: 6,
    title: "The Harmonizer, Healer & Aesthetician",
    title_hi: "सौंदर्य, प्रेम, संतुलन एवं कल्याणकर्ता",
    ruler: "Venus (Shukra Dev)",
    ruler_hi: "शुक्र देव",
    archetype: "The Sacred Harmonizer",
    archetype_hi: "सौंदर्य व कल्याणकर्ता",
    element: "Metal in Lo Shu / Water in Vedic",
    element_hi: "लो-शू में धातु / वैदिक में जल",
    direction: "North-West (Lo Shu) / South-East (Vedic)",
    direction_hi: "उत्तर-पश्चिम (लो-शू) / दक्षिण-पूर्व (वैदिक)",
    luckyColors: "Rose Pink, Silk White, Sky Blue",
    luckyColors_hi: "गुलाबी, श्वेत (सफेद), आसमानी नीला",
    luckyDays: "Friday, Wednesday",
    luckyDays_hi: "शुक्रवार, बुधवार",
    harmonicMantra: "Om Dram Dreem Droum Sah Shukraya Namaha (ॐ द्रां द्रीं द्रौं सः शुक्राय नमः)",
    gemstone: "Diamond / White Zircon / Opal",
    gemstone_hi: "हीरा, सफेद जरकन अथवा ओपल",
    rudraksha: "6-Mukhi Rudraksha",
    rudraksha_hi: "६-मुखी रुद्राक्ष (कार्तिकेय रूप)",
    description: "Under Shukra's radiant blessing, your presence brings soothing beauty and healing comfort. You have natural aesthetic genius and deep familial fidelity.",
    description_hi: "शुक्र देव के पावन आशीष से आपका व्यक्तित्व आकर्षक, कलात्मक, करुणामयी और दूसरों के जीवन में सुख-शांति लाने वाला है।"
  },
  7: {
    number: 7,
    title: "The Seeker, Mystic & Truth Finder",
    title_hi: "तत्वज्ञानी, साधक एवं शोधकर्ता",
    ruler: "Ketu (South Lunar Node)",
    ruler_hi: "केतु देव",
    archetype: "The Introspective Sage",
    archetype_hi: "अंतर्मुखी ज्ञानी",
    element: "Metal in Lo Shu / Fiery Shadow in Vedic",
    element_hi: "लो-शू में धातु / वैदिक में अग्नि-छाया",
    direction: "West (Lo Shu) / North-East (Vedic)",
    direction_hi: "पश्चिम (लो-शू) / उत्तर-पूर्व (वैदिक)",
    luckyColors: "Sea Green, Light Yellow, Pearl Grey",
    luckyColors_hi: "समुद्री हरा, हल्का पीला, मोती जैसा स्लेटी",
    luckyDays: "Monday, Thursday",
    luckyDays_hi: "सोमवार, गुरुवार",
    harmonicMantra: "Om Sram Sreem Sroum Sah Ketave Namaha (ॐ स्रां स्रीं स्रौं सः केतवे नमः)",
    gemstone: "Cat's Eye (लहसुनिया)",
    gemstone_hi: "वैदूर्य / लहसुनिया (Cat's Eye)",
    rudraksha: "9-Mukhi Rudraksha",
    rudraksha_hi: "९-मुखी रुद्राक्ष (नवदुर्गा शक्ति)",
    description: "Charged with Ketu's introspective current, you penetrate beyond surface illusions. You possess profound spiritual inclinations and metaphysical depth.",
    description_hi: "केतु के प्रभाव से आप बाहरी दिखावे से दूर, गूढ़ सत्यों को जानने वाले, उच्च आध्यात्मिक दृष्टि और अंतर्मुखी साधक हैं।"
  },
  8: {
    number: 8,
    title: "The Sovereign, Karmic Judge & Material Master",
    title_hi: "कर्मयोगी, न्यायी एवं संगठन शिल्पी",
    ruler: "Saturn (Shani Dev)",
    ruler_hi: "शनि देव",
    archetype: "The Karmic Pillar",
    archetype_hi: "कर्म न्याय स्तंभ",
    element: "Earth in Lo Shu / Air in Vedic",
    element_hi: "लो-शू में पृथ्वी / वैदिक में वायु",
    direction: "North-East (Lo Shu) / West (Vedic)",
    direction_hi: "उत्तर-पूर्व (लो-शू) / पश्चिम (वैदिक)",
    luckyColors: "Midnight Blue, Black, Dark Violet",
    luckyColors_hi: "गहरा नीला, काला, गहरा बैंगनी",
    luckyDays: "Saturday, Wednesday",
    luckyDays_hi: "शनिवार, बुधवार",
    harmonicMantra: "Om Pram Preem Proum Sah Shanaishcharaya Namaha (ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः)",
    gemstone: "Blue Sapphire / Amethyst (नीलम / जमुनिया)",
    gemstone_hi: "नीलम (Blue Sapphire) अथवा जमुनिया",
    rudraksha: "7-Mukhi or 14-Mukhi",
    rudraksha_hi: "७-मुखी रुद्राक्ष (महालक्ष्मी स्वरूप)",
    description: "Tempered by Shani Dev, you represent endurance, justice, institutional authority, and massive long-term accomplishments forged through discipline.",
    description_hi: "शनि देव की छत्रछाया में आप धैर्य, कर्मठता, न्यायप्रियता और दीर्घकालिक परिश्रम से विशाल उपलब्धियां हासिल करने वाले कर्मयोगी हैं।"
  },
  9: {
    number: 9,
    title: "The Warrior, Humanitarian & Transmuter",
    title_hi: "साहसी, परोपकारी एवं ऊर्जावान सेनानी",
    ruler: "Mars (Mangal Dev)",
    ruler_hi: "मंगल देव",
    archetype: "The Noble Protector",
    archetype_hi: "धर्मरक्षक योद्धा",
    element: "Fire (Agni)",
    element_hi: "अग्नि तत्व",
    direction: "South (Lo Shu / Vedic)",
    direction_hi: "दक्षिण (South)",
    luckyColors: "Crimson Red, Scarlet, Coral, Maroon",
    luckyColors_hi: "लाल, गहरा लाल, मूंगा रंग, कत्थई",
    luckyDays: "Tuesday, Thursday",
    luckyDays_hi: "मंगलवार, गुरुवार",
    harmonicMantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha (ॐ क्रां क्रीं क्रौं सः भौमाय नमः)",
    gemstone: "Red Coral (लाल मूंगा)",
    gemstone_hi: "इटालियन लाल मूंगा (Red Coral)",
    rudraksha: "3-Mukhi Rudraksha",
    rudraksha_hi: "३-मुखी रुद्राक्ष (अग्नि स्वरूप)",
    description: "Infused with Mangal's boundless valor, you are fierce, protective, idealistic, and driven to champion noble causes and protect the vulnerable.",
    description_hi: "मंगल देव के असीम साहस से युक्त, आप निर्भीक, ऊर्जावान, परोपकारी और किसी भी संकट में डटकर खड़े रहने वाले साहसी नायक हैं।"
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
      formulaProof_hi += ` -> अंक ५ का विशेष नियम: पुरुष के लिए ५ बदलकर २ (कुन पृथ्वी / दक्षिण-पश्चिम) बनता है।`;
    } else {
      finalKua = 8; // Female 5 converts to 8 (Gen Earth, North-East)
      formulaProof += ` -> Rule of 5: Female 5 converts to 8 (Gen Earth / North-East)`;
      formulaProof_hi += ` -> अंक ५ का विशेष नियम: महिला के लिए ५ बदलकर ८ (गेन पर्वत पृथ्वी / उत्तर-पूर्व) बनता है।`;
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
}

export const MISSING_NUMBERS_REMEDIES: Record<number, MissingNumberRemedy> = {
  1: {
    number: 1,
    planet: "Sun (Surya)",
    planet_hi: "सूर्य देव",
    element: "Water / Fire",
    element_hi: "जल / अग्नि",
    direction: "North / East",
    direction_hi: "उत्तर (Lo Shu) / पूर्व (Vedic)",
    effects: "Lack of career clarity, low self-esteem, hesitation in asserting oneself, weak leadership, communication bottlenecks.",
    effects_hi: "करियर में दिशाहीनता, आत्मविश्वास की कमी, स्वयं को अभिव्यक्त करने में संकोच, नेतृत्व क्षमता का अभाव और पिता से मतभेद।",
    remedies: {
      yantra: "Surya Yantra in East / Brass Surya idol on entrance",
      rudraksha: "1-Mukhi or 12-Mukhi Rudraksha",
      gemstone: "Ruby (माणिक्य) or Red Garnet set in copper/gold",
      colorTherapy: "Incorporate Ruby Red, Gold, Saffron; avoid excess black",
      vastuAction: "Place a small clean water fountain or aquatic imagery in North; ensure North is clutter-free. Offer water (Arghya) to Sun at sunrise.",
      mantra: "Om Suryaya Namaha (ॐ सूर्याय नमः) 108 times on Sundays"
    }
  },
  2: {
    number: 2,
    planet: "Moon (Chandra)",
    planet_hi: "चन्द्र देव",
    element: "Earth (SW) / Water",
    element_hi: "पृथ्वी (दक्षिण-पश्चिम) / जल",
    direction: "South-West / North-West",
    direction_hi: "दक्षिण-पश्चिम (Lo Shu) / उत्तर-पश्चिम (Vedic)",
    effects: "Emotional instability, mood swings, insecurity in partnerships, lack of patience, relationship discord.",
    effects_hi: "भावनात्मक अस्थिरता, रिश्तों में अविश्वास, अधीरता, मानसिक तनाव, माता के स्वास्थ्य की चिंता और दांपत्य में तालमेल की कमी।",
    remedies: {
      yantra: "Chandra Yantra / Sri Yantra in North-West",
      rudraksha: "2-Mukhi Rudraksha (Ardhanarishwara)",
      gemstone: "Natural Pearl (मोती) or Moonstone in silver ring on little finger",
      colorTherapy: "Wear Pearl White, Silver, Light Cream colors on Mondays",
      vastuAction: "Place a pair of Rose Quartz crystals or ceramic earth artifact in South-West to stabilize marital harmony. Respect motherly figures.",
      mantra: "Om Som Somaya Namaha (ॐ सों सोमाय नमः)"
    }
  },
  3: {
    number: 3,
    planet: "Jupiter (Brihaspati / Guru)",
    planet_hi: "बृहस्पति देव (गुरु)",
    element: "Wood (East) / Ether",
    element_hi: "काष्ठ (पूर्व) / आकाश",
    direction: "East / North-East",
    direction_hi: "पूर्व (Lo Shu) / उत्तर-पूर्व (Vedic)",
    effects: "Difficulty focusing on higher studies, indecisiveness, absence of wise mentorship, delayed creative output.",
    effects_hi: "ज्ञान व विवेक में असमंजस, उच्च शिक्षा में बाधा, योग्य गुरु या मार्गदर्शक का अभाव, निर्णय न ले पाना एवं रचनात्मकता में कमी।",
    remedies: {
      yantra: "Brihaspati Yantra / Golden Vishnu Yantra",
      rudraksha: "5-Mukhi Rudraksha mala",
      gemstone: "Yellow Sapphire (पुखराज) or Citrine (सुनहला) in brass/gold",
      colorTherapy: "Wear Bright Yellow, Ochre, Golden fabrics on Thursdays",
      vastuAction: "Place fresh green bamboo plants or Tulsi in East zone. Apply saffron/turmeric tilak on forehead daily. Respect teachers and elders.",
      mantra: "Om Gram Greem Groum Sah Guruve Namaha (ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः)"
    }
  },
  4: {
    number: 4,
    planet: "Rahu",
    planet_hi: "राहु देव",
    element: "Wood (SE) / Airy Shadow",
    element_hi: "काष्ठ (दक्षिण-पूर्व) / वायु-छाया",
    direction: "South-East / South-West",
    direction_hi: "दक्षिण-पूर्व (Lo Shu) / दक्षिण-पश्चिम (Vedic)",
    effects: "Financial discipline leaks, impulsive expenditure, disorganization, difficulty structuring business contracts.",
    effects_hi: "धन का अनायास खर्च, आर्थिक अनुशासन की कमी, अव्यवस्थित जीवनशैली, कानूनी या कागजी अड़चनें और अप्रत्याशित वित्तीय उतार-चढ़ाव।",
    remedies: {
      yantra: "Rahu Yantra / Kuber Yantra in South-East",
      rudraksha: "8-Mukhi Rudraksha",
      gemstone: "Hessonite Garnet (गोमेद) in panchdhatu ring",
      colorTherapy: "Incorporate Electric Blue, Smoke Grey, Khaki accents",
      vastuAction: "Place a 4-rod wooden wind chime or lush healthy Money Plant in South-East (Wealth corner). Keep South-East clean and well-lit.",
      mantra: "Om Bhram Bhreem Bhroum Sah Rahave Namaha (ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः)"
    }
  },
  5: {
    number: 5,
    planet: "Mercury (Budh)",
    planet_hi: "बुध देव",
    element: "Earth (Center / Brahmasthan)",
    element_hi: "पृथ्वी तत्व (ब्रह्मस्थान / केंद्र)",
    direction: "Center / Brahmasthan",
    direction_hi: "मध्य केंद्र (Center)",
    effects: "Loss of core balance, lack of perseverance, restlessness, speech anxiety, frequent shifts without concluding projects.",
    effects_hi: "जीवन में संतुलन का अभाव, बेचैनी, व्यापार में उतार-चढ़ाव, एकाग्रता की कमी, काम बीच में छोड़ देना और पाचन विकार।",
    remedies: {
      yantra: "Budh Yantra / Sri Chakra placed in center of home",
      rudraksha: "4-Mukhi Rudraksha",
      gemstone: "Emerald (पन्ना) or Green Jade / Tourmaline in silver",
      colorTherapy: "Wear Emerald Green, Mint Green, Parrot Green on Wednesdays",
      vastuAction: "Keep the center (Brahmasthan) of home light, open, unburdened, and spotlessly clean. Place a natural quartz crystal globe or green plant in center.",
      mantra: "Om Bram Breem Broum Sah Budhaya Namaha (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः)"
    }
  },
  6: {
    number: 6,
    planet: "Venus (Shukra)",
    planet_hi: "शुक्र देव",
    element: "Metal (NW) / Water",
    element_hi: "धातु (उत्तर-पश्चिम) / जल",
    direction: "North-West / South-East",
    direction_hi: "उत्तर-पश्चिम (Lo Shu) / दक्षिण-पूर्व (Vedic)",
    effects: "Absence of mentors or helpful allies, deprivation of luxury/comfort, delayed family bliss, struggles in attracting resources.",
    effects_hi: "सहायक मित्रों और शुभचिंतकों की कमी, सुख-सुविधाओं का अभाव, आकर्षण में कमी, वैवाहिक जीवन में असंतोष और भौतिक संघर्ष।",
    remedies: {
      yantra: "Shukra Yantra / Maha Lakshmi Yantra in North-West",
      rudraksha: "6-Mukhi Rudraksha",
      gemstone: "Diamond, White Zircon, or Australian Opal in silver",
      colorTherapy: "Wear Soft Rose Pink, Silken White, Light Sky Blue on Fridays",
      vastuAction: "Hang a 6-rod hollow metallic wind chime in North-West to activate helpful people (Mentors / Kuan Yin energy). Use gentle pleasant fragrances.",
      mantra: "Om Shum Shukraya Namaha (ॐ शुं शुक्राय नमः)"
    }
  },
  7: {
    number: 7,
    planet: "Ketu",
    planet_hi: "केतु देव",
    element: "Metal (West) / Fiery Shadow",
    element_hi: "धातु (पश्चिम) / अग्नि-छाया",
    direction: "West / North-East",
    direction_hi: "पश्चिम (Lo Shu) / उत्तर-पूर्व (Vedic)",
    effects: "Difficulty meditating, skepticism towards spirituality, detachment from children or creative heirs, scattered insights.",
    effects_hi: "आध्यात्मिक भटकाव, ध्यान में मन न लगना, संतान सुख या बच्चों से जुड़ाव में कमी, निराशावादी सोच और गूढ़ विद्याओं से दूरी।",
    remedies: {
      yantra: "Ganesh Yantra / Ketu Yantra in West",
      rudraksha: "9-Mukhi Rudraksha (Durga Shakti)",
      gemstone: "Cat's Eye (लहसुनिया) in silver",
      colorTherapy: "Wear Sea Green, Light Smoky Grey, Pale Yellow",
      vastuAction: "Place metal decorative accents or brass singing bowls in West. Feed street dogs with roti/milk on Saturdays. Worship Lord Ganesha.",
      mantra: "Om Kem Ketave Namaha (ॐ कें केतवे नमः)"
    }
  },
  8: {
    number: 8,
    planet: "Saturn (Shani)",
    planet_hi: "शनि देव",
    element: "Earth (NE) / Air",
    element_hi: "पर्वत पृथ्वी (उत्तर-पूर्व) / वायु",
    direction: "North-East / West",
    direction_hi: "उत्तर-पूर्व (Lo Shu) / पश्चिम (Vedic)",
    effects: "Impatience, poor financial planning, inability to master deep technical crafts, weak endurance when facing obstacles.",
    effects_hi: "धैर्य की कमी, वित्तीय प्रबंधन में चूक, अचल संपत्ति अर्जन में बाधा, अनुशासनात्मक कमजोरी और परिश्रम का त्वरित फल न मिलना।",
    remedies: {
      yantra: "Shani Yantra / Hanuman Yantra",
      rudraksha: "7-Mukhi or 14-Mukhi Rudraksha",
      gemstone: "Blue Sapphire (नीलम) or Amethyst (जमुनिया) in iron/silver",
      colorTherapy: "Wear Navy Blue, Midnight Blue, Dark Grey on Saturdays",
      vastuAction: "Place a natural crystal geode or earthen pot in North-East. Avoid making North-East heavy with iron scrap. Recite Hanuman Chalisa or Shani Chalisa.",
      mantra: "Om Sham Shanaishcharaya Namaha (ॐ शं शनैश्चराय नमः)"
    }
  },
  9: {
    number: 9,
    planet: "Mars (Mangal)",
    planet_hi: "मंगल देव",
    element: "Fire (South)",
    element_hi: "अग्नि तत्व (दक्षिण)",
    direction: "South",
    direction_hi: "दक्षिण दिशा (South)",
    effects: "Low energy, lack of passion, difficulty gaining public recognition or fame, sluggish drive, timid in confrontation.",
    effects_hi: "ऊर्जा व उत्साह की कमी, सामाजिक ख्याति या मान-सम्मान का अभाव, आलस्य, अन्याय के विरुद्ध आवाज उठाने में झिझक।",
    remedies: {
      yantra: "Mangal Yantra / Hanuman Yantra in South",
      rudraksha: "3-Mukhi Rudraksha (Agni स्वरूप)",
      gemstone: "Italian Red Coral (मूंगा) in copper or gold ring",
      colorTherapy: "Incorporate Crimson Red, Scarlet, Warm Coral accents",
      vastuAction: "Place bright red lighting, a red candle, or copper pyramid in South zone to ignite fire energy and fame. Recite Sundarkand on Tuesdays.",
      mantra: "Om Angarakaya Namaha (ॐ अंगारकाय नमः)"
    }
  }
};

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
    row0: { num: number; count: number; name: string }[];
    row1: { num: number; count: number; name: string }[];
    row2: { num: number; count: number; name: string }[];
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
      { num: 4, count: countsMap[4] || 0, name: "South-East (Wood)" },
      { num: 9, count: countsMap[9] || 0, name: "South (Fire)" },
      { num: 2, count: countsMap[2] || 0, name: "South-West (Earth)" }
    ],
    row1: [
      { num: 3, count: countsMap[3] || 0, name: "East (Wood)" },
      { num: 5, count: countsMap[5] || 0, name: "Center (Earth)" },
      { num: 7, count: countsMap[7] || 0, name: "West (Metal)" }
    ],
    row2: [
      { num: 8, count: countsMap[8] || 0, name: "North-East (Earth)" },
      { num: 1, count: countsMap[1] || 0, name: "North (Water)" },
      { num: 6, count: countsMap[6] || 0, name: "North-West (Metal)" }
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
    synergy_hi = `अति शुभ एकात्मता (${mulank} एवं ${bhagyank}): आपका आंतरिक स्वभाव (मूलांक) और कर्म पथ (भाग्यांक) दोनों एक ही ग्रह स्वामी (${mulankProfile.ruler_hi}) के अधीन हैं। यह लक्ष्यों की त्वरित प्राप्ति और स्पष्ट जीवन दृष्टि प्रदान करता है।`;
  } else {
    synergy = `Dynamic Complementary Synergy (${mulank} & ${bhagyank}): Your Driver ${mulank} (${mulankProfile.ruler}) provides initiation energy, while your Conductor ${bhagyank} (${bhagyankProfile.ruler}) governs life milestones. When aligned with Kua ${kuaProfile.kua}, material and spiritual objectives flourish.`;
    synergy_hi = `पूरक ग्रह सामंजस्य (${mulank} एवं ${bhagyank}): आपका मूलांक ${mulank} (${mulankProfile.ruler_hi}) आपको स्वभाविक ऊर्जा देता है, जबकि भाग्यांक ${bhagyank} (${bhagyankProfile.ruler_hi}) आपके जीवन की दिशा तय करता है। कुआ अंक ${kuaProfile.kua} से वास्तु संरेखण करने पर सफलता का मार्ग प्रशस्त होता है।`;
  }

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
    allExtractedDigits: rawDigits
  };
}

// Backward compatibility export for any existing call sites
export function calculateVedicProfile(dobString: string, fullName: string = '') {
  return calculateFullNumerologyProfile(dobString, fullName, 'female');
}
