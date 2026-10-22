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
    location_hi: "रीढ़ की हड्डी का आधार / पेल्विक क्षेत्र",
    color: "#DC2626",
    element: "Earth (Prithvi)",
    element_hi: "पृथ्वी तत्व",
    balancedState: "Deep safety, grounded presence, financial composure, and unwavering stability.",
    balancedState_hi: "सुरक्षा की गहरी भावना, स्थिरता, वित्तीय निश्चिंतता, मानसिक संतुलन।",
    blockedSigns: "Chronic worry, financial anxiety, lethargy, feeling unsettled or uprooted.",
    blockedSigns_hi: "लगातार भय, असुरक्षा, वित्तीय चिंता, जीवन में अनिश्चितता का भय।",
    healingMantra: "LAM (लं)"
  },
  {
    id: "sacral",
    name: "Sacral Chakra",
    name_hi: "स्वाधिष्ठान चक्र",
    sanskrit: "Svadhisthana (स्वाधिष्ठान)",
    location: "Lower abdomen, four fingers below navel",
    location_hi: "नाभि के नीचे का निचला उदर क्षेत्र",
    color: "#EA580C",
    element: "Water (Jal)",
    element_hi: "जल तत्व",
    balancedState: "Creative abundance, emotional flow, healthy intimacy, and vitality.",
    balancedState_hi: "रचनात्मक ऊर्जा, भावनात्मक प्रवाह, स्वस्थ संबंध और जीवन का आनंद।",
    blockedSigns: "Emotional numbness, guilt, creative blockages, fear of vulnerability.",
    blockedSigns_hi: "भावनात्मक रुकावट, अपराधबोध, रिश्तों में कटुता और असंतोष।",
    healingMantra: "VAM (वं)"
  },
  {
    id: "solar-plexus",
    name: "Solar Plexus Chakra",
    name_hi: "मणिपूर चक्र",
    sanskrit: "Manipura (मणिपूर)",
    location: "Upper abdomen, stomach area",
    location_hi: "नाभि के ऊपर, आमाशय क्षेत्र",
    color: "#D97706",
    element: "Fire (Agni)",
    element_hi: "अग्नि तत्व",
    balancedState: "Radiant self-worth, willful discipline, leadership, and digestive ease.",
    balancedState_hi: "आत्मविश्वास, संकल्प शक्ति, स्पष्ट निर्णय क्षमता और ऊर्जावान जीवन।",
    blockedSigns: "Low confidence, indecision, difficulty setting boundaries, digestive fatigue.",
    blockedSigns_hi: "हीनभावना, नियंत्रण की कमी, आत्म-संदेह, निर्णय लेने में असमर्थता।",
    healingMantra: "RAM (रं)"
  },
  {
    id: "heart",
    name: "Heart Chakra",
    name_hi: "अनाहत चक्र",
    sanskrit: "Anahata (अनाहत)",
    location: "Center of chest",
    location_hi: "हृदय का मध्य भाग",
    color: "#059669",
    element: "Air (Vayu)",
    element_hi: "वायु तत्व",
    balancedState: "Unconditional love, profound empathy, forgiveness, and inner peace.",
    balancedState_hi: "निस्वार्थ प्रेम, क्षमाशीलता, करुणा और आंतरिक शांति।",
    blockedSigns: "Holding grudges, fear of heartbreak, emotional insulation, loneliness.",
    blockedSigns_hi: "कड़वाहट, दूसरों पर अविश्वास, अलगाव, अतीत की आहत भावनाएं।",
    healingMantra: "YAM (यं)"
  },
  {
    id: "throat",
    name: "Throat Chakra",
    name_hi: "विशुद्ध चक्र",
    sanskrit: "Vishuddha (विशुद्ध)",
    location: "Throat / Vocal cords",
    location_hi: "कंठ और स्वर तंत्र",
    color: "#0284C7",
    element: "Ether / Space (Akash)",
    element_hi: "आकाश तत्व",
    balancedState: "Authentic self-expression, honest communication, and inspired listening.",
    balancedState_hi: "सत्य और स्पष्ट संवाद, निर्भीक अभिव्यक्ति, रचनात्मक विचार।",
    blockedSigns: "Fear of speaking up, suppressed thoughts, throat tension, social hesitation.",
    blockedSigns_hi: "बात कहने में संकोच, गले में खिंचाव, खुद को अभिव्यक्त न कर पाना।",
    healingMantra: "HAM (हं)"
  },
  {
    id: "third-eye",
    name: "Third Eye Chakra",
    name_hi: "आज्ञा चक्र",
    sanskrit: "Ajna (आज्ञा)",
    location: "Between eyebrows",
    location_hi: "भौंहों के मध्य (भ्रूमध्य)",
    color: "#4F46E5",
    element: "Light (Jyoti)",
    element_hi: "प्रकाश / विवेक",
    balancedState: "Clear intuition, sharp foresight, mental clarity, and wisdom.",
    balancedState_hi: "गहरा अंतर्ज्ञान, दूरदर्शिता, विवेक और विचारों में स्पष्टता।",
    blockedSigns: "Brain fog, over-intellectualizing, cynicism, lack of purpose.",
    blockedSigns_hi: "मानसिक भ्रम, दिशाहीनता, एकाग्रता की कमी, अंतर्दृष्टि का अभाव।",
    healingMantra: "OM (ॐ)"
  },
  {
    id: "crown",
    name: "Crown Chakra",
    name_hi: "सहस्रार चक्र",
    sanskrit: "Sahasrara (सहस्रार)",
    location: "Top of head",
    location_hi: "सिर का ऊपरी भाग (शिखा)",
    color: "#7C3AED",
    element: "Cosmic Consciousness (Brahma)",
    element_hi: "परम चेतना",
    balancedState: "Spiritual oneness, serenity, transcendence, and cosmic harmony.",
    balancedState_hi: "ईश्वरीय जुड़ाव, परम शांति, चेतना का विस्तार और कृतज्ञता।",
    blockedSigns: "Spiritual disconnect, chronic existential dread, rigid closed-mindedness.",
    blockedSigns_hi: "अलगाव की भावना, नकारात्मकता, जीवन के उच्च उद्देश्य से विमुखता।",
    healingMantra: "SO HAM (सो ऽहम्)"
  }
];
