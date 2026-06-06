'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const email = new FormData(e.currentTarget).get('email')?.toString() ?? '';
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    const text = encodeURIComponent(`नमस्ते! मैं Vedic Heritage की newsletter subscribe करना चाहता हूँ।\nEmail: ${email}`);
    window.open(`https://wa.me/919911662492?text=${text}`, '_blank');
    setStatus('done');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'done'}
        className="px-6 py-3 bg-deepGreen hover:bg-deepGreen/90 text-white font-bold text-sm rounded-xl transition-colors shrink-0 shadow-md disabled:opacity-60"
      >
        {status === 'loading' ? 'Opening…' : status === 'done' ? 'Sent!' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-xs w-full text-center">Please enter a valid email.</p>
      )}
      {status === 'done' && (
        <p className="text-deepGreen text-xs w-full text-center">WhatsApp opened with your email.</p>
      )}
    </form>
  );
}
