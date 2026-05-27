'use client';

import { useState } from 'react';

const PRODUCTS = [
  'Kapila Pashu Aahar',
  'Bansuri Pashu Aahar',
  'Brajwasi Feeds',
  'Godrej Agrovet Cattle Feed',
  'Mineral Mixture / Khal / Chuni',
  'Cattle Feed Mix',
  'Havan Samagri',
  'Cow Dung Cake',
  'Hawan Wood Sticks',
  'Bulk Order',
  'Other / General Inquiry',
];

interface InquiryFormProps {
  defaultProduct?: string;
}

export default function InquiryForm({ defaultProduct = '' }: InquiryFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', product: defaultProduct, message: '' });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `नमस्ते! मेरा नाम ${form.name} है।\nProduct: ${form.product || 'General'}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/919911662492?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }

  const inputClass =
    'w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-colors duration-150';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ramesh Yadav"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide">
          Product / Interest
        </label>
        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a product…</option>
          {PRODUCTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/80 mb-1.5 uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="मुझे bulk order ke liye pricing chahiye…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-white text-deepGreen font-bold py-3 rounded-xl hover:bg-cream transition-colors duration-200 text-sm shadow-md"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send via WhatsApp
      </button>
    </form>
  );
}
