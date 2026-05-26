export const productsQuery = `*[_type == "product"] | order(_createdAt desc)`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0]`;

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(_createdAt desc)`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc)`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]`;

export const categoriesQuery = `*[_type == "category"] | order(title asc)`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
