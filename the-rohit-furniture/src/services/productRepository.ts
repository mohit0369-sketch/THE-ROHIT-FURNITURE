import { PRODUCTS_DATA } from '../data/products';
import type { Product, ProductCategory, ProductStatus } from '../types/product';

export interface IProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product | undefined>;
  getByCategory(category: ProductCategory): Promise<Product[]>;
  getByStatus(status: ProductStatus): Promise<Product[]>;
  getFeatured(): Promise<Product[]>;
  getAvailableInShop(): Promise<Product[]>;
  getMadeToOrder(): Promise<Product[]>;
  getPartnerProducts(): Promise<Product[]>;
}

export class LocalProductRepository implements IProductRepository {
  async getAll(): Promise<Product[]> {
    return [...PRODUCTS_DATA];
  }

  async getById(id: string): Promise<Product | undefined> {
    return PRODUCTS_DATA.find(p => p.id === id || p.slug === id);
  }

  async getByCategory(category: ProductCategory): Promise<Product[]> {
    if (category === 'all') return [...PRODUCTS_DATA];
    return PRODUCTS_DATA.filter(p => p.category === category);
  }

  async getByStatus(status: ProductStatus): Promise<Product[]> {
    return PRODUCTS_DATA.filter(p => p.status === status);
  }

  async getFeatured(): Promise<Product[]> {
    return PRODUCTS_DATA.filter(p => p.featuredInHome);
  }

  async getAvailableInShop(): Promise<Product[]> {
    return PRODUCTS_DATA.filter(p => p.status === 'available_in_shop');
  }

  async getMadeToOrder(): Promise<Product[]> {
    return PRODUCTS_DATA.filter(p => p.status === 'made_to_order' || p.status === 'custom_only');
  }

  async getPartnerProducts(): Promise<Product[]> {
    return PRODUCTS_DATA.filter(p => p.status === 'partner_product');
  }
}

// Single instance export. When migrating to Supabase/Firebase, simply swap this export.
export const productRepository: IProductRepository = new LocalProductRepository();

