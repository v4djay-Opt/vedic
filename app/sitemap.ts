import type { MetadataRoute } from 'next';
import { client } from '@/lib/sanity.client';
import { getAllPostSlugs } from '@/lib/sanity.queries';

const BASE = 'https://vedicheritage.in';

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE,                                          changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE}/products`,                            changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE}/kapila-pashu-aahar-ayodhya`,          changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/bansuri-pashu-aahar-bikapur`,         changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/brajwasi-feeds-bikapur`,              changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/godrej-agrovet-bikapur`,              changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/mineral-mixture-bikapur`,             changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/havan-samagri-ayodhya`,               changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/cow-dung-cake-ayodhya`,               changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/hawan-wood-sticks-ayodhya`,           changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/service-areas`,                       changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/blog`,                                changeFrequency: 'daily',   priority: 0.8 },
  { url: `${BASE}/bulk-inquiry`,                        changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/contact`,                             changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/about`,                               changeFrequency: 'monthly', priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogSlugs: { slug: string }[] = [];
  try {
    blogSlugs = await client.fetch<{ slug: string }[]>(getAllPostSlugs);
  } catch {
    // Sanity not configured — skip dynamic blog URLs
  }

  const blogRoutes: MetadataRoute.Sitemap = (blogSlugs ?? []).map(({ slug }) => ({
    url: `${BASE}/blog/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
