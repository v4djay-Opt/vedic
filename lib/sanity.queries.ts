import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

// ---------------------------------------------------------------------------
// Image URL helper
// ---------------------------------------------------------------------------
const builder = imageUrlBuilder(client);
export function urlFor(source: any) { // eslint-disable-line
  return builder.image(source);
}

// ---------------------------------------------------------------------------
// TypeScript types
// ---------------------------------------------------------------------------

export interface SanitySlug {
  current: string;
}

export interface SanityImageAsset {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
  caption?: string;
}

export interface PostSummary {
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  mainImage?: SanityImageAsset;
  excerpt?: string;
  category?: string;
}

export interface Post extends PostSummary {
  body?: unknown[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface PostSlugResult {
  slug: string;
}

export interface Product {
  title: string;
  titleHindi?: string;
  slug: SanitySlug;
  mainImage?: SanityImageAsset;
  price?: number;
  unit?: string;
  description?: string;
  featured?: boolean;
  badge?: string;
}

export interface SiteSettings {
  title?: string;
  description?: string;
  logo?: SanityImageAsset;
  phone?: string;
  whatsapp?: string;
  address?: string;
}

// ---------------------------------------------------------------------------
// GROQ Queries  (named exports as requested)
// ---------------------------------------------------------------------------

export const getAllPosts = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    category
  }
`;

export const getPostBySlug = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    excerpt,
    metaTitle,
    metaDescription,
    category
  }
`;

export const getAllPostSlugs = `
  *[_type == "post"] { "slug": slug.current }
`;

export const getRecentPosts = `
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }
`;

export const getAllProducts = `
  *[_type == "product"] | order(_createdAt desc) {
    title,
    titleHindi,
    slug,
    mainImage,
    price,
    unit,
    description,
    featured,
    badge
  }
`;

export const getProductBySlug = `
  *[_type == "product" && slug.current == $slug][0] {
    title,
    titleHindi,
    slug,
    mainImage,
    price,
    unit,
    description,
    featured,
    badge
  }
`;

export const getSiteSettings = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    phone,
    whatsapp,
    address
  }
`;

export const getFeaturedProducts = `
  *[_type == "product" && featured == true] | order(_createdAt desc) {
    title,
    titleHindi,
    slug,
    mainImage,
    price,
    unit,
    badge
  }
`;

// ---------------------------------------------------------------------------
// Legacy aliases (kept for backward compatibility)
// ---------------------------------------------------------------------------
export const postsQuery = getAllPosts;
export const postBySlugQuery = getPostBySlug;
export const productsQuery = getAllProducts;
export const productBySlugQuery = getProductBySlug;
export const featuredProductsQuery = getFeaturedProducts;
export const siteSettingsQuery = getSiteSettings;
export const categoriesQuery = `*[_type == "category"] | order(title asc)`;
