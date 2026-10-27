import { BUSINESS_INFO } from '../data/businessInfo';
import type { Product } from '../types/product';

export function createWhatsAppUrl(message: string): string {
  const cleanNumber = BUSINESS_INFO.whatsapp.number.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export function getProductWhatsAppUrl(product: Product, lang: 'en' | 'hi' = 'en'): string {
  const prodName = lang === 'hi' ? product.name.hi : product.name.en;
  const isAvailableNow = product.status === 'available_in_shop';
  
  if (lang === 'hi') {
    if (isAvailableNow) {
      return createWhatsAppUrl(
        `नमस्ते रोहित फर्नीचर! मैंने आपकी वेबसाइट पर देखा कि "${prodName}" आपकी महेंद्रगढ़ दुकान पर उपलब्ध (Available in Shop) है। क्या मैं आज आकर इसे देख सकता हूँ?`
      );
    }
    return createWhatsAppUrl(
      `नमस्ते रोहित फर्नीचर! मुझे वेबसाइट पर "${prodName}" के बारे में जानकारी चाहिए। इसकी कीमत, लकड़ी और बनने के समय के बारे में बताएं।`
    );
  }

  if (isAvailableNow) {
    return createWhatsAppUrl(
      `Hello The Rohit Furniture! I saw that "${prodName}" is Available in Shop on your website. Is it currently available for inspection if I visit your Mahendragarh showroom today?`
    );
  }
  return createWhatsAppUrl(
    `Hello The Rohit Furniture! I saw "${prodName}" on your website. I would like to know more about the pricing, materials used, and made-to-order timeframe.`
  );
}

export function getCustomFurnitureWhatsAppUrl(lang: 'en' | 'hi' = 'en'): string {
  if (lang === 'hi') {
    return createWhatsAppUrl(
      `नमस्ते! मैं अपनी पसंद का कस्टम फर्नीचर (Custom Furniture) बनवाना चाहता हूँ। मेरे पास कमरे का नाप और संदर्भ तस्वीरें हैं, कृपया चर्चा करें।`
    );
  }
  return createWhatsAppUrl(
    `Hello! I would like to discuss a custom furniture requirement. I have reference photos and room dimensions to share with your workshop.`
  );
}

export function getKitchenWhatsAppUrl(lang: 'en' | 'hi' = 'en'): string {
  if (lang === 'hi') {
    return createWhatsAppUrl(
      `नमस्ते! मैं अपने घर के लिए लकड़ी की मॉड्युलर किचन (Wooden Kitchen) बनवाना चाहता हूँ। मुझे डिज़ाइन, लकड़ी के विकल्प और अनुमानित बजट के बारे में चर्चा करनी है।`
    );
  }
  return createWhatsAppUrl(
    `Hello! I am interested in a wooden modular kitchen for my home. I would like to discuss design layouts, wood types, and cost estimates.`
  );
}

export function getDoorsWindowsWhatsAppUrl(itemType: 'door' | 'window' | 'both' = 'both', lang: 'en' | 'hi' = 'en'): string {
  if (lang === 'hi') {
    const itemLabel = itemType === 'door' ? 'दरवाजे (Doors)' : itemType === 'window' ? 'खिड़कियाँ (Windows)' : 'दरवाजे और खिड़कियाँ (Doors & Windows)';
    return createWhatsAppUrl(
      `नमस्ते! मुझे अपने मकान के लिए ठोस लकड़ी के ${itemLabel} बनवाने हैं। कृपया चौखट, लकड़ी के विकल्प (शीशम/सागवान) और नाप के बारे में बात करें।`
    );
  }
  const itemLabel = itemType === 'door' ? 'Wooden Doors' : itemType === 'window' ? 'Wooden Windows' : 'Wooden Doors & Windows';
  return createWhatsAppUrl(
    `Hello! I am looking for handcrafted ${itemLabel} for my construction project. I would like to consult on wood options (Sheesham/Teak), chaukhat frames, and custom measurements.`
  );
}

export function getServiceAreaWhatsAppUrl(lang: 'en' | 'hi' = 'en'): string {
  if (lang === 'hi') {
    return createWhatsAppUrl(
      `नमस्ते! मैं [कृपया अपना गाँव या शहर लिखें] से हूँ। क्या आप मेरे स्थान पर फर्नीचर डिलीवरी और फिटिंग की सुविधा प्रदान करते हैं?`
    );
  }
  return createWhatsAppUrl(
    `Hello! I am located at [Please mention your village or town name]. Do you provide delivery and woodwork installation to my area?`
  );
}

