import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { getAllPosts, urlFor, type PostSummary } from '@/lib/sanity.queries';

export const metadata: Metadata = {
  title: 'Vedic Farming Tips & Puja Knowledge Blog | Ayodhya',
  description:
    'Expert articles on cattle farming, Vedic rituals, havan practices and dairy farming from Ayodhya. Hindi and English guides by Vedic Heritage.',
};

async function getPosts(): Promise<PostSummary[]> {
  try {
    return await client.fetch<PostSummary[]>(getAllPosts);
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function BlogCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-deepGreen/30 transition-all duration-200"
    >
      <div className="relative h-48 bg-sage overflow-hidden">
        {post.mainImage ? (
          <Image
            src={urlFor(post.mainImage).width(600).height(400).url()}
            alt={post.mainImage.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl select-none">
            📜
          </div>
        )}
        {post.category && (
          <span className="absolute top-3 left-3 bg-deepGreen text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h2 className="font-bold text-deepGreen text-base leading-snug group-hover:text-ochre transition-colors line-clamp-2">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <time className="text-gray-400 text-xs">
            {post.publishedAt ? formatDate(post.publishedAt) : ''}
          </time>
          <span className="text-deepGreen text-xs font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-6">
            OUR BLOG
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-deepGreen leading-[1.1] tracking-tight">
            Vedic Knowledge &amp; Farming Tips
          </h1>
          <p className="text-gray-400 text-base mt-2 font-devanagari">
            वैदिक ज्ञान और खेती की जानकारी
          </p>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Expert articles on cattle feed, havan rituals, dairy farming, and Vedic living from
            our team in Ayodhya.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-5">📖</div>
              <p className="text-deepGreen font-bold text-lg">
                Blogs coming soon — check back weekly
              </p>
              <p className="text-gray-400 text-sm mt-2 font-devanagari">
                जल्द ही ब्लॉग पोस्ट आएंगी
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-8 bg-deepGreen text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-deepGreen/90 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug.current} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
