export type ProductStatus = 
  | 'available_in_shop'    // Physically in showroom in Mahendragarh
  | 'made_to_order'        // Can be remade to sample specifications
  | 'custom_only'          // Fully bespoke sizing & design
  | 'partner_product';     // Sourced from trusted external partner

export type ProductCategory = 
  | 'all'
  | 'furniture'
  | 'wooden_kitchen'
  | 'wooden_door'
  | 'wooden_window';

export type FurnitureSubcategory = 
  | 'all'
  | 'beds'
  | 'sofa_sets'
  | 'dining_tables'
  | 'chairs'
  | 'wardrobes'
  | 'cabinets'
  | 'tv_units'
  | 'dressing_tables'
  | 'tables'
  | 'trunks'
  | 'office_furniture'
  | 'other';

export interface ProductMaterials {
  wood?: string | null;           // e.g. "Sheesham (Indian Rosewood)", "Teak (Sagwan)"
  plywood?: string | null;        // e.g. "BWP Marine Grade 710", "MR Commercial"
  finish?: string | null;         // e.g. "Natural Hand Polish", "Melamine Matte", "PU Gloss"
  hardware?: string | null;       // e.g. "Soft-close hydraulic hinges", "Telescopic channels"
  foam?: string | null;           // e.g. "High Density 40-density foam"
  glass?: string | null;          // e.g. "8mm Toughened Glass"
  otherMaterials?: string | null; // e.g. "Brass inlays", "Rattan cane work"
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  perspective?: 'front' | 'side' | 'wood_detail' | 'in_progress' | 'in_room';
}

export interface Product {
  id: string;
  slug: string;
  name: {
    en: string;
    hi: string;
  };
  category: ProductCategory;
  subcategory?: FurnitureSubcategory;
  status: ProductStatus;
  description: {
    en: string;
    hi: string;
  };
  priceDisplay?: {
    en: string;
    hi: string;
  } | null;
  materials: ProductMaterials;
  dimensions?: string | null;
  images: ProductImage[];
  isCustomizable: boolean;
  isHandmadeByUs: boolean; // TRUE for Rohit Furniture; FALSE for partner goods
  partnerDetails?: {
    brandOrShop?: string;
    disclaimer: {
      en: string;
      hi: string;
    };
  };
  featuredInHome?: boolean;
}

export interface MaterialGuideItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  category: 'wood' | 'plywood' | 'finish' | 'hardware';
  bestFor: {
    en: string;
    hi: string;
  };
  durability: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  howWeUseIt: {
    en: string;
    hi: string;
  };
}

