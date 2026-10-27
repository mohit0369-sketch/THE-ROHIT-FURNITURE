export interface ProjectItem {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  category: 'furniture' | 'kitchen' | 'doors' | 'windows' | 'custom';
  description: {
    en: string;
    hi: string;
  };
  materials: {
    wood?: string;
    plywood?: string;
    finish?: string;
    hardware?: string;
  };
  image: string;
  dimensions?: string;
  workshopNote: {
    en: string;
    hi: string;
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-01",
    title: {
      en: "Custom Sheesham Master Bedroom Suite (Bed, Wardrobe & Side Tables)",
      hi: "कस्टम शीशम मास्टर बेडरूम सेट (बेड, अलमारी व साइड टेबल)"
    },
    category: "furniture",
    description: {
      en: "Complete master bedroom woodwork crafted for a local home in Mahendragarh. Designed with continuous flowing Sheesham grain patterns across the headboard and 3-door wardrobe.",
      hi: "महेंद्रगढ़ में एक मकान के लिए तैयार किया गया संपूर्ण मास्टर बेडरूम सेट। हेडबोर्ड और 3-डोर अलमारी में शीशम की प्राकृतिक धारियों का एकसमान मिलान।"
    },
    materials: {
      wood: "Pure Seasoned Sheesham Wood (Indian Rosewood)",
      plywood: "IS 303 Heavy MR Plywood for internal shelves",
      finish: "Natural Lakhdana Hand Polish (Semi-Gloss)",
      hardware: "Hydraulic bed lifts & soft-close telescopic channels"
    },
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    dimensions: "King Size Bed (6ft x 6.5ft), Wardrobe (7ft x 4.5ft)",
    workshopNote: {
      en: "Handcrafted in our workshop over 18 days. Client inspected the solid framing before polishing.",
      hi: "हमारे वर्कशॉप में 18 दिनों में हाथ से तैयार। ग्राहक ने पॉलिश से पहले वर्कशॉप आकर ढांचा स्वयं देखा था।"
    }
  },
  {
    id: "proj-02",
    title: {
      en: "L-Shaped Waterproof BWP 710 Modular Wooden Kitchen",
      hi: "L-आकार की वाटरप्रूफ BWP 710 मॉड्युलर किचन"
    },
    category: "kitchen",
    description: {
      en: "Custom residential kitchen installation designed for heavy daily cooking. Built with 100% boiling water proof ply carcass and solid wood framed shutters.",
      hi: "दैनिक कुकिंग के लिए बनाई गई मजबूत किचन। अंदर 100% वाटरप्रूफ प्लाई और बाहर ठोस लकड़ी के बॉर्डर वाले पल्ले।"
    },
    materials: {
      wood: "Solid Teak Wood Shutter Mouldings",
      plywood: "Strictly BWP Grade 710 Marine Waterproof Plywood",
      finish: "Heat & Turmeric Resistant Polyurethane (PU) Matte Coating",
      hardware: "SS304 Grade Stainless Steel Drawer Baskets & Hydraulic Hinges"
    },
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    dimensions: "12ft x 9ft L-Shape Layout",
    workshopNote: {
      en: "Carcasses precision-cut in workshop, final assembly and hardware adjustment completed on-site.",
      hi: "वर्कशॉप में सटीक कटाई के बाद ग्राहक के घर पर कारीगरों द्वारा पूर्ण फिटिंग की गई।"
    }
  },
  {
    id: "proj-03",
    title: {
      en: "Hand-Carved Solid Teak Main Entrance Door & Heavy Chaukhat",
      hi: "ठोस सागवान का नक्काशीदार मुख्य दरवाजा व भारी चौखट"
    },
    category: "doors",
    description: {
      en: "Grand 42mm thick solid seasoned Teak (Sagwan) door with traditional geometric and floral motifs carved by hand by our senior master craftsman.",
      hi: "42mm मोटा पक्का सागवान का भव्य मुख्य दरवाजा, जिस पर हमारे वरिष्ठ कारीगर द्वारा हाथ से पारंपरिक नक्काशी की गई है।"
    },
    materials: {
      wood: "100% Solid Seasoned Sagwan (Teak Wood)",
      finish: "UV-Resistant Exterior Weatherproof Sealant",
      hardware: "Antique Brass Heavy Handles & High-Security Deadbolt"
    },
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    dimensions: "8ft Height x 4ft Width (42mm Section)",
    workshopNote: {
      en: "Heavy-timber mortise-and-tenon construction. Weighs over 65kg, built for multi-generational durability.",
      hi: "पारंपरिक मजबूत जोड़ों के साथ 65 किलो से अधिक वजन का मजबूत दरवाजा, जो पीढ़ियों तक चलेगा।"
    }
  },
  {
    id: "proj-04",
    title: {
      en: "Seasoned Wood Window Frames (Chaukhat) & Glass Shutters",
      hi: "पक्की लकड़ी की खिड़की चौखट, कांच के पल्ले व मच्छर जाली"
    },
    category: "windows",
    description: {
      en: "Set of 12 complete residential window units featuring seasoned wood frames, double-hung glazed leaves, and integrated rust-free stainless steel mosquito wire mesh.",
      hi: "एक नए मकान के लिए 12 खिड़कियों का संपूर्ण सेट — पक्की चौखट, कांच के पल्ले और जंग-मुक्त स्टील मच्छर जाली।"
    },
    materials: {
      wood: "Seasoned Solid Hardwood / Sheesham",
      finish: "Exterior Clear Timber Varnish",
      hardware: "Heavy Brass Tower Bolts & Friction Pivot Hinges"
    },
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80",
    dimensions: "5ft x 4ft 3-Panel Windows",
    workshopNote: {
      en: "Pre-treated against termites and weather contraction before on-site masonry installation.",
      hi: "मकान में चिनाई के समय लगाने से पहले दीमक-रोधी व मौसम सुरक्षा उपचार किया गया।"
    }
  },
  {
    id: "proj-05",
    title: {
      en: "Bespoke Sheesham & Natural Cane Floating TV Entertainment Wall",
      hi: "कस्टम शीशम व प्राकृतिक बेंत (Cane) टीवी वॉल कंसोल"
    },
    category: "custom",
    description: {
      en: "Modern living room entertainment unit featuring solid Sheesham frame, handwoven natural cane rattan drawer fronts for component ventilation, and concealed wiring channels.",
      hi: "लिविंग रूम के लिए आधुनिक टीवी कंसोल — ठोस शीशम का ढांचा, हाथ से बुनी प्राकृतिक बेंत की जाली और छिपे हुए केबल मार्ग।"
    },
    materials: {
      wood: "Solid Sheesham & Handwoven Cane (Rattan)",
      plywood: "Heavy MR Ply for mounting backplate",
      finish: "Matte Organic Oil Polish",
      hardware: "Concealed push-to-open soft closing drawer slides"
    },
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80",
    dimensions: "84\" Width x 18\" Depth x 16\" Height",
    workshopNote: {
      en: "Designed from a reference photo provided by the customer on WhatsApp, modified to fit their exact wall span.",
      hi: "ग्राहक द्वारा व्हाट्सएप पर भेजी गई फोटो के आधार पर उनकी दीवार के सही नाप के अनुसार बनाया गया।"
    }
  },
  {
    id: "proj-06",
    title: {
      en: "Handcrafted 8-Seater Solid Sheesham Dining Table & Chairs",
      hi: "हस्तनिर्मित 8-सीटर ठोस शीशम डाइनिंग टेबल व कुर्सियां"
    },
    category: "furniture",
    description: {
      en: "Extra-large family dining table with 5-inch thick square corner posts, edge-profiled tabletop, and 8 high-back ergonomic solid timber chairs.",
      hi: "बड़े परिवार के लिए डाइनिंग टेबल — 5-इंच मोटे कोने के पाए, मजबूत टॉप और 8 आरामदायक हाई-बैक कुर्सियां।"
    },
    materials: {
      wood: "100% Solid Seasoned Sheesham",
      finish: "Scratch & Hot-Spill Resistant Melamine Polish",
      hardware: "Corner bracing timber blocks with high-tensile steel bolts"
    },
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    dimensions: "Table: 8ft x 3.5ft x 30\" Height",
    workshopNote: {
      en: "All 8 chairs carved with identical back splats by hand, stress-tested in workshop for heavy weight.",
      hi: "सभी 8 कुर्सियों पर एकसमान नक्काशी और वर्कशॉप में वजन परीक्षण के बाद डिलीवरी।"
    }
  }
];

