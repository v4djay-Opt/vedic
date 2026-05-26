'use client';

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-deepGreen hover:bg-deepGreen/90 text-white font-bold text-sm rounded-xl transition-colors shrink-0 shadow-md"
      >
        Subscribe
      </button>
    </form>
  );
}
