export interface ChakraItem {
  id: string;
  name: string;
  name_hi: string;
  sanskrit: string;
  location: string;
  location_hi: string;
  color: string;
  element: string;
  element_hi: string;
  balancedState: string;
  balancedState_hi: string;
  blockedSigns: string;
  blockedSigns_hi: string;
  healingMantra: string;
}

export const CHAKRAS_DATA: ChakraItem[] = [
  {
    id: "root",
    name: "Root Chakra",
    name_hi: "मूलाधार चक्र",
    sanskrit: "Muladhara (मूलाधार)",
    location: "Base of spine / Pelvic floor",
    location_hi: "रीढ़ की हड्डी का निचला हिस्सा",
    color: "#DC2626",
    element: "Earth (Prithvi)",
    element_hi: "पृथ्वी तत्व",
    balancedState: "Deep safety, grounded presence, financial composure, and unwavering stability.",
    balancedState_hi: "सुरक्षा का अहसास, जीवन में स्थिरता, पैसों की चिंता से मुक्ति और शांत मन।",
    blockedSigns: "Chronic worry, financial anxiety, lethargy, feeling unsettled or uprooted.",
    blockedSigns_hi: "हमेशा डर या असुरक्षा लगना, पैसों की चिंता, सुस्ती और भटकाव महसूस होना।",
    healingMantra: "LAM (लं)"
  },
  {
    id: "sacral",
    name: "Sacral Chakra",
    name_hi: "स्वाधिष्ठान चक्र",
    sanskrit: "Svadhisthana (स्वाधिष्ठान)",
    location: "Lower abdomen, four fingers below navel",
    location_hi: "नाभि के चार अंगुल नीचे, पेट का निचला हिस्सा",
    color: "#EA580C",
    element: "Water (Jal)",
    element_hi: "जल तत्व",
    balancedState: "Creative abundance, emotional flow, healthy intimacy, and vitality.",
    balancedState_hi: "नई सोच और रचनात्मकता, भावनाओं का संतुलन, अच्छे रिश्ते और जीवन की खुशी।",
    blockedSigns: "Emotional numbness, guilt, creative blockages, fear of vulnerability.",
    blockedSigns_hi: "भावनात्मक रुकावट, मन में अपराधबोध, रिश्तों में कड़वाहट और असंतोष।",
    healingMantra: "VAM (वं)"
  },
  {
    id: "solar-plexus",
    name: "Solar Plexus Chakra",
    name_hi: "मणिपूर चक्र",
    sanskrit: "Manipura (मणिपूर)",
    location: "Upper abdomen, stomach area",
    location_hi: "नाभि के ऊपर, पेट के ऊपरी हिस्से में",
    color: "#D97706",
    element: "Fire (Agni)",
    element_hi: "अग्नि तत्व",
    balancedState: "Radiant self-worth, willful discipline, leadership, and digestive ease.",
    balancedState_hi: "पक्का आत्मविश्वास, मजबूत इरादा, सही फैसले लेने की क्षमता और ऊर्जा से भरा जीवन।",
    blockedSigns: "Low confidence, indecision, difficulty setting boundaries, digestive fatigue.",
    blockedSigns_hi: "आत्मविश्वास की कमी, खुद पर शक, फैसला न ले पाना और पेट से जुड़ी थकान।",
    healingMantra: "RAM (रं)"
  },
  {
    id: "heart",
    name: "Heart Chakra",
    name_hi: "अनाहत चक्र",
    sanskrit: "Anahata (अनाहत)",
    location: "Center of chest",
    location_hi: "छाती के बीच (दिल के पास)",
    color: "#059669",
    element: "Air (Vayu)",
    element_hi: "वायु तत्व",
    balancedState: "Unconditional love, profound empathy, forgiveness, and inner peace.",
    balancedState_hi: "बिना शर्त प्यार, माफ करने की भावना, दूसरों के प्रति अपनापन और मन की शांति।",
    blockedSigns: "Holding grudges, fear of heartbreak, emotional insulation, loneliness.",
    blockedSigns_hi: "मन में कड़वाहट रखना, लोगों पर भरोसा न कर पाना, अकेलापन और पुराने दर्द।",
    healingMantra: "YAM (यं)"
  },
  {
    id: "throat",
    name: "Throat Chakra",
    name_hi: "विशुद्ध चक्र",
    sanskrit: "Vishuddha (विशुद्ध)",
    location: "Throat / Vocal cords",
    location_hi: "गले का हिस्सा (कंठ)",
    color: "#0284C7",
    element: "Ether / Space (Akash)",
    element_hi: "आकाश तत्व",
    balancedState: "Authentic self-expression, honest communication, and inspired listening.",
    balancedState_hi: "साफ और सच्ची बातचीत, बिना डरे अपनी बात रखना और अच्छे विचार।",
    blockedSigns: "Fear of speaking up, suppressed thoughts, throat tension, social hesitation.",
    blockedSigns_hi: "अपनी बात कहने में झिझक, गले में खिंचाव और लोगों के सामने खुलकर न बोल पाना।",
    healingMantra: "HAM (हं)"
  },
  {
    id: "third-eye",
    name: "Third Eye Chakra",
    name_hi: "आज्ञा चक्र",
    sanskrit: "Ajna (आज्ञा)",
    location: "Between eyebrows",
    location_hi: "दोनों भौंहों के बीच (माथे का केंद्र)",
    color: "#4F46E5",
    element: "Light (Jyoti)",
    element_hi: "प्रकाश / समझ",
    balancedState: "Clear intuition, sharp foresight, mental clarity, and wisdom.",
    balancedState_hi: "तेज समझ, आगे की बात भांप लेने की क्षमता, साफ सोच और सही सूझबूझ।",
    blockedSigns: "Brain fog, over-intellectualizing, cynicism, lack of purpose.",
    blockedSigns_hi: "दिमाग में उलझन, सही दिशा न मिलना और ध्यान न लग पाना।",
    healingMantra: "OM (ॐ)"
  },
  {
    id: "crown",
    name: "Crown Chakra",
    name_hi: "सहस्रार चक्र",
    sanskrit: "Sahasrara (सहस्रार)",
    location: "Top of head",
    location_hi: "सिर का सबसे ऊपरी हिस्सा",
    color: "#7C3AED",
    element: "Cosmic Consciousness (Brahma)",
    element_hi: "परम शांति व चेतना",
    balancedState: "Spiritual oneness, serenity, transcendence, and cosmic harmony.",
    balancedState_hi: "ईश्वर से जुड़ाव, गहरी मानसिक शांति, सकारात्मक सोच और धन्यवाद का भाव।",
    blockedSigns: "Spiritual disconnect, chronic existential dread, rigid closed-mindedness.",
    blockedSigns_hi: "अकेलापन महसूस होना, नकारात्मक सोच और जीवन के उद्देश्य से भटकाव।",
    healingMantra: "SO HAM (सो ऽहम्)"
  }
];
