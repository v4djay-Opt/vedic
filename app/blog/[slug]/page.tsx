import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { client } from '@/lib/sanity.client';
import {
  getPostBySlug,
  getAllPostSlugs,
  getRecentPosts,
  urlFor,
  type Post,
  type PostSummary,
  type PostSlugResult,
} from '@/lib/sanity.queries';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';

// ---------------------------------------------------------------------------
// Static params + metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const results = await client.fetch<PostSlugResult[]>(getAllPostSlugs);
    return (results ?? []).map((r) => ({ slug: r.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await client.fetch<Post | null>(getPostBySlug, { slug: params.slug });
    if (!post) return {};
    return {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
    };
  } catch {
    return {};
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// PortableText components (Tailwind-styled)
// ---------------------------------------------------------------------------

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-5 text-[15px]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-black text-deepGreen mt-10 mb-4 leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3 leading-snug">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-deepGreen mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-deepGreen pl-5 py-2 my-6 bg-sage/20 rounded-r-xl italic text-gray-600 text-sm">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-deepGreen">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-deepGreen underline underline-offset-2 hover:text-ochre transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-5 space-y-2 mb-5 text-gray-700 text-[15px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-5 space-y-2 mb-5 text-gray-700 text-[15px]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <Image
            src={urlFor(value).width(800).height(450).url()}
            alt={value?.alt ?? ''}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        {value?.caption && (
          <figcaption className="text-center text-gray-400 text-sm mt-2 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

// ---------------------------------------------------------------------------
// Sidebar sub-components
// ---------------------------------------------------------------------------

const WA_CTA = `https://wa.me/919999999999?text=${encodeURIComponent(
  'नमस्ते! मुझे आपके products के बारे में जानकारी चाहिए।'
)}`;

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function RecentPostCard({ post }: { post: PostSummary }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="flex gap-3 group">
      <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-sage">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(100).height(100).url()}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="56px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xl select-none">📜</div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-deepGreen text-xs font-semibold leading-snug line-clamp-2 group-hover:text-ochre transition-colors">
          {post.title}
        </p>
        {post.publishedAt && (
          <p className="text-gray-400 text-[11px] mt-1">{formatDate(post.publishedAt)}</p>
        )}
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: Post | null = null;
  let recentPosts: PostSummary[] = [];

  try {
    [post, recentPosts] = await Promise.all([
      client.fetch<Post | null>(getPostBySlug, { slug: params.slug }),
      client.fetch<PostSummary[]>(getRecentPosts),
    ]);
  } catch {
    // Sanity not configured or unavailable
  }

  if (!post) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-3xl font-black text-deepGreen mb-2">Post not found</p>
          <p className="text-gray-500 text-sm mb-6">
            This article may have been moved or is not yet published.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-deepGreen text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-deepGreen/90 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const otherRecent = recentPosts.filter((p) => p.slug.current !== params.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt ?? post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Vedic Heritage' },
    publisher: {
      '@type': 'Organization',
      name: 'Vedic Heritage',
      logo: { '@type': 'ImageObject', url: 'https://vedicheritage.in/logo.png' },
    },
    ...(post.mainImage
      ? { image: urlFor(post.mainImage).width(1200).height(630).url() }
      : {}),
  };

  return (
    <>
      <JsonLd schema={articleSchema as Record<string, unknown>} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <BreadcrumbList
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Hero image */}
      {post.mainImage && (
        <div className="relative w-full h-64 sm:h-80 md:h-[420px] bg-sage overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(1200).height(630).url()}
            alt={post.mainImage.alt ?? post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-4xl mx-auto">
              {post.category && (
                <span className="inline-block bg-deepGreen text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                  {post.category}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight max-w-2xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Content + sidebar */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Article body */}
            <article className="flex-1 min-w-0 max-w-2xl mx-auto lg:mx-0">
              {!post.mainImage && (
                <>
                  {post.category && (
                    <span className="inline-block bg-deepGreen/10 text-deepGreen text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4">
                      {post.category}
                    </span>
                  )}
                  <h1 className="text-3xl sm:text-4xl font-black text-deepGreen leading-tight mb-4">
                    {post.title}
                  </h1>
                </>
              )}
              <p className="text-gray-400 text-sm mb-8 pb-6 border-b border-gray-100">
                <time>{post.publishedAt ? formatDate(post.publishedAt) : 'Vedic Heritage'}</time>
                {post.category && (
                  <span className="ml-3 text-deepGreen font-medium">· {post.category}</span>
                )}
              </p>

              {post.body ? (
                <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={ptComponents} />
              ) : post.excerpt ? (
                <p className="text-gray-700 leading-relaxed text-[15px]">{post.excerpt}</p>
              ) : null}
            </article>

            {/* Sticky sidebar */}
            <aside className="lg:w-72 xl:w-80 shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* WhatsApp CTA */}
                <div className="bg-deepGreen rounded-2xl p-6 text-center">
                  <p className="text-white font-black text-lg mb-0.5">Order on WhatsApp</p>
                  <p className="text-white/55 text-xs font-devanagari mb-5">अभी ऑर्डर करें</p>
                  <a
                    href={WA_CTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-deepGreen font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-cream transition-colors shadow-md w-full"
                  >
                    <WaIcon />
                    WhatsApp Now
                  </a>
                  <Link
                    href="/products"
                    className="block text-white/50 hover:text-white/80 text-xs mt-3 transition-colors"
                  >
                    View all products →
                  </Link>
                </div>

                {/* Recent articles */}
                {otherRecent.length > 0 && (
                  <div className="bg-cream rounded-2xl p-5">
                    <p className="font-black text-deepGreen text-xs uppercase tracking-widest mb-4">
                      Recent Articles
                    </p>
                    <div className="space-y-4">
                      {otherRecent.map((p) => (
                        <RecentPostCard key={p.slug.current} post={p} />
                      ))}
                    </div>
                    <Link
                      href="/blog"
                      className="block text-center text-deepGreen hover:text-ochre text-xs font-semibold mt-4 pt-4 border-t border-deepGreen/10 transition-colors"
                    >
                      All articles →
                    </Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related posts bottom */}
      {otherRecent.length > 0 && (
        <section className="bg-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-deepGreen">More Articles</h2>
              <Link
                href="/blog"
                className="text-deepGreen hover:text-ochre font-semibold text-sm transition-colors flex items-center gap-1"
              >
                All Posts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherRecent.map((p) => (
                <Link
                  key={p.slug.current}
                  href={`/blog/${p.slug.current}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-deepGreen/30 transition-all"
                >
                  <div className="relative h-40 bg-sage overflow-hidden">
                    {p.mainImage ? (
                      <Image
                        src={urlFor(p.mainImage).width(400).height(250).url()}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl select-none">
                        📜
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    {p.category && (
                      <span className="text-deepGreen text-[10px] font-bold uppercase tracking-wide">
                        {p.category} ·{' '}
                      </span>
                    )}
                    <h3 className="font-bold text-deepGreen text-sm leading-snug line-clamp-2 group-hover:text-ochre transition-colors mt-0.5">
                      {p.title}
                    </h3>
                    {p.publishedAt && (
                      <p className="text-gray-400 text-xs mt-2">{formatDate(p.publishedAt)}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
