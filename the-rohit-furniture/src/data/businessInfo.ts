export interface ContactPerson {
  name: string;
  nameHi: string;
  role: {
    en: string;
    hi: string;
  };
  phone: string;          // display string e.g. "94663 11706"
  telLink: string;        // e.g. "tel:+919466311706"
  whatsappNumber: string; // e.g. "919466311706"
  isPrimary: boolean;     // primary contact used as default in buttons
}

export interface BusinessInfo {
  name: {
    en: string;
    hi: string;
  };
  tagline: {
    en: string;
    hi: string;
  };
  experienceYears: string;
  city: string;
  state: string;
  pincodePlaceholder: string;
  contacts: ContactPerson[];
  // Primary fallback phone/whatsapp (first contact marked isPrimary)
  phone: {
    display: string;
    telLink: string;
    isPlaceholder: boolean;
  };
  whatsapp: {
    number: string;
    display: string;
    isPlaceholder: boolean;
  };
  address: {
    en: string;
    hi: string;
    landmark: {
      en: string;
      hi: string;
    };
    isPlaceholder: boolean;
  };
  hours: {
    en: string;
    hi: string;
    isPlaceholder: boolean;
  };
  googleMaps: {
    searchQuery: string;
    embedQuery: string;
    isPlaceholder: boolean;
  };
  serviceArea: {
    en: string;
    hi: string;
    details: {
      en: string;
      hi: string;
    };
  };
}

export const BUSINESS_INFO: BusinessInfo = {
  name: {
    en: "The Rohit Furniture",
    hi: "द रोहित फर्नीचर"
  },
  tagline: {
    en: "Handmade Furniture & Wooden Craftsmanship with 15 Years of Local Trust",
    hi: "15 वर्षों के अनुभव व स्थानीय विश्वास के साथ हस्तनिर्मित लकड़ी का फर्नीचर"
  },
  experienceYears: "15",
  city: "Mahendragarh",
  state: "Haryana",
  pincodePlaceholder: "123029",

  // ── Three real contacts ──────────────────────────────────────────────────
  contacts: [
    {
      name: "Rakesh Raj",
      nameHi: "राकेश राज",
      role: { en: "", hi: "" },
      phone: "94663 11706",
      telLink: "tel:+919466311706",
      whatsappNumber: "919466311706",
      isPrimary: true
    },
    {
      name: "Brijesh Raj",
      nameHi: "बृजेश राज",
      role: { en: "", hi: "" },
      phone: "94163 40544",
      telLink: "tel:+919416340544",
      whatsappNumber: "919416340544",
      isPrimary: false
    },
    {
      name: "Mahender Kumar PTI",
      nameHi: "महेन्द्र कुमार P.T.I.",
      role: { en: "", hi: "" },
      phone: "98128 84079",
      telLink: "tel:+919812884079",
      whatsappNumber: "919812884079",
      isPrimary: false
    }
  ],

  // Primary phone & WhatsApp (Rakesh Raj — first contact)
  phone: {
    display: "94663 11706",
    telLink: "tel:+919466311706",
    isPlaceholder: false
  },
  whatsapp: {
    number: "919466311706",
    display: "+91 94663 11706",
    isPlaceholder: false
  },

  address: {
    en: "Main Market / Workshop Road, Mahendragarh, Haryana (Exact address to be provided)",
    hi: "मेन मार्केट / वर्कशॉप रोड, महेंद्रगढ़, हरियाणा (सटीक पता जल्द उपलब्ध कराया जाएगा)",
    landmark: {
      en: "Mahendragarh City Centre",
      hi: "महेंद्रगढ़ सिटी सेंटर"
    },
    isPlaceholder: true
  },
  hours: {
    en: "Monday to Sunday: 9:00 AM – 8:00 PM (Subject to confirmation)",
    hi: "सोमवार से रविवार: सुबह 9:00 बजे से रात 8:00 बजे तक (पुष्टि होने पर अद्यतन)",
    isPlaceholder: true
  },
  googleMaps: {
    searchQuery: "The Rohit Furniture, Mahendragarh, Haryana",
    embedQuery: "Mahendragarh, Haryana",
    isPlaceholder: true
  },
  serviceArea: {
    en: "Mahendragarh and selected nearby areas",
    hi: "महेंद्रगढ़ और चुनिंदा नजदीकी क्षेत्र",
    details: {
      en: "We currently provide direct delivery and on-site woodwork measurement/installation in Mahendragarh city and surrounding villages/towns. You can verify your location directly on WhatsApp.",
      hi: "हम वर्तमान में महेंद्रगढ़ शहर और आसपास के गांवों/कस्बों में डिलीवरी और माप/फिटिंग सेवा प्रदान करते हैं। आप सीधे व्हाट्सएप पर अपनी लोकेशन की पुष्टि कर सकते हैं।"
    }
  }
};

// Helper: get primary contact
export const PRIMARY_CONTACT = BUSINESS_INFO.contacts.find(c => c.isPrimary)!;

