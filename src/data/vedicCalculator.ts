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
  luckyColors: string;
  luckyColors_hi: string;
  luckyDays: string;
  luckyDays_hi: string;
  harmonicMantra: string;
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
    element: "Fire (Agni)",
    element_hi: "अग्नि तत्व",
    luckyColors: "Gold, Copper, Ruby Red, Saffron",
    luckyColors_hi: "सुनहरा, तांबा, गहरा लाल, केसरिया",
    luckyDays: "Sunday, Monday",
    luckyDays_hi: "रविवार, सोमवार",
    harmonicMantra: "Om Suryaya Namaha (ॐ सूर्याय नमः)",
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
    element: "Water (Jal)",
    element_hi: "जल तत्व",
    luckyColors: "Pearl White, Silver, Cream, Pale Green",
    luckyColors_hi: "मोती जैसा सफेद, चांदी, क्रीम, हल्का हरा",
    luckyDays: "Monday, Sunday",
    luckyDays_hi: "सोमवार, रविवार",
    harmonicMantra: "Om Chandraya Namaha (ॐ चन्द्राय नमः)",
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
    element: "Ether / Space (Akash)",
    element_hi: "आकाश तत्व",
    luckyColors: "Bright Yellow, Golden Amber, Ochre",
    luckyColors_hi: "चमकीला पीला, सुनहरा, गेरुआ",
    luckyDays: "Thursday, Tuesday",
    luckyDays_hi: "गुरुवार, मंगलवार",
    harmonicMantra: "Om Brihaspataye Namaha (ॐ बृहस्पतये नमः)",
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
    element: "Earth / Air",
    element_hi: "पृथ्वी / वायु तत्व",
    luckyColors: "Electric Blue, Charcoal Grey, Khaki",
    luckyColors_hi: "गहरा नीला, धूसर (ग्रे), खाकी",
    luckyDays: "Sunday, Saturday",
    luckyDays_hi: "रविवार, शनिवार",
    harmonicMantra: "Om Rahave Namaha (ॐ राहवे नमः)",
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
    element: "Earth (Prithvi)",
    element_hi: "पृथ्वी तत्व",
    luckyColors: "Emerald Green, Mint, Turquoise",
    luckyColors_hi: "पन्ना हरा, हल्का हरा, फिरोजी",
    luckyDays: "Wednesday, Friday",
    luckyDays_hi: "बुधवार, शुक्रवार",
    harmonicMantra: "Om Budhaya Namaha (ॐ बुधाय नमः)",
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
    element: "Water / Air",
    element_hi: "जल / वायु तत्व",
    luckyColors: "Rose Pink, Silk White, Sky Blue",
    luckyColors_hi: "गुलाबी, श्वेत (सफेद), आसमानी नीला",
    luckyDays: "Friday, Wednesday",
    luckyDays_hi: "शुक्रवार, बुधवार",
    harmonicMantra: "Om Shukraya Namaha (ॐ शुक्राय नमः)",
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
    element: "Water / Fire",
    element_hi: "जल / अग्नि तत्व",
    luckyColors: "Sea Green, Light Yellow, Pearl Grey",
    luckyColors_hi: "समुद्री हरा, हल्का पीला, मोती जैसा स्लेटी",
    luckyDays: "Monday, Thursday",
    luckyDays_hi: "सोमवार, गुरुवार",
    harmonicMantra: "Om Ketave Namaha (ॐ केतवे नमः)",
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
    element: "Air (Vayu)",
    element_hi: "वायु तत्व",
    luckyColors: "Midnight Blue, Black, Dark Violet",
    luckyColors_hi: "गहरा नीला, काला, गहरा बैंगनी",
    luckyDays: "Saturday, Wednesday",
    luckyDays_hi: "शनिवार, बुधवार",
    harmonicMantra: "Om Sham Shanaishcharaya Namaha (ॐ शं शनैश्चराय नमः)",
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
    luckyColors: "Crimson Red, Scarlet, Coral, Maroon",
    luckyColors_hi: "लाल, गहरा लाल, मूंगा रंग, कत्थई",
    luckyDays: "Tuesday, Thursday",
    luckyDays_hi: "मंगलवार, गुरुवार",
    harmonicMantra: "Om Angarakaya Namaha (ॐ अंगारकाय नमः)",
    description: "Infused with Mangal's boundless valor, you are fierce, protective, idealistic, and driven to champion noble causes and protect the vulnerable.",
    description_hi: "मंगल देव के असीम साहस से युक्त, आप निर्भीक, ऊर्जावान, परोपकारी और किसी भी संकट में डटकर खड़े रहने वाले साहसी नायक हैं।"
  }
};

// Chaldean Numerology mapping for letters (1-8, 9 is sacred and excluded from individual letters)
const CHALDEAN_MAP: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num || 1;
}

export function calculateVedicProfile(dobString: string, fullName: string = '') {
  // dobString expected format: YYYY-MM-DD or DD-MM-YYYY
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

  // 1. Mulank (Driver Number): reduced day of birth
  const mulank = reduceToSingleDigit(day);

  // 2. Bhagyank (Conductor Number): reduced sum of all digits
  const allDigits = `${day}${month}${year}`.replace(/\D/g, '');
  const totalSum = allDigits.split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
  const bhagyank = reduceToSingleDigit(totalSum);

  // 3. Name Vibration (Chaldean)
  let nameCompound = 0;
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  for (const char of cleanName) {
    if (CHALDEAN_MAP[char]) {
      nameCompound += CHALDEAN_MAP[char];
    }
  }
  const nameSingle = nameCompound > 0 ? reduceToSingleDigit(nameCompound) : mulank;

  const mulankProfile = VEDIC_NUMBERS_MAP[mulank] || VEDIC_NUMBERS_MAP[6];
  const bhagyankProfile = VEDIC_NUMBERS_MAP[bhagyank] || VEDIC_NUMBERS_MAP[6];

  // Synergy assessment
  let synergy = "Cosmic Harmony";
  let synergy_hi = "परम शुभ सामंजस्य";
  if (mulank === bhagyank) {
    synergy = "Unified Cosmic Resonance: Your core driver and ultimate destiny vibrate on the exact same planetary frequency, empowering swift focus and alignment.";
    synergy_hi = "अति शुभ एकात्मता: आपका मूलांक एवं भाग्यांक एक ही ग्रह स्वामी के अधीन हैं, जो आपके जीवन में लक्ष्यों की सहज प्राप्ति का मार्ग प्रशस्त करता है।";
  } else {
    synergy = "Dynamic Complementary Synergy: Your personality and destiny complement each other, creating balanced growth across material and spiritual avenues.";
    synergy_hi = "पूरक ग्रह सामंजस्य: आपका स्वभाव और जीवन लक्ष्य एक-दूसरे को संतुलित करते हैं, जिससे व्यावहारिक एवं आध्यात्मिक दोनों क्षेत्रों में उन्नति होती है।";
  }

  return {
    day,
    month,
    year,
    mulank,
    bhagyank,
    nameCompound: nameCompound || 24,
    nameSingle,
    mulankProfile,
    bhagyankProfile,
    synergy,
    synergy_hi
  };
}
