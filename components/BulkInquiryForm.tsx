'use client';

export default function BulkInquiryForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name')?.toString() ?? '';
    const phone = fd.get('phone')?.toString() ?? '';
    const area = fd.get('area')?.toString() ?? '';
    const brand = fd.get('brand')?.toString() ?? '';
    const qty = fd.get('quantity')?.toString() ?? '';
    const msg = fd.get('message')?.toString() ?? '';
    const text = encodeURIComponent(
      `नमस्ते! Bulk Order Inquiry:\nName: ${name}\nPhone: ${phone}\nArea: ${area}\nBrand: ${brand}\nQuantity: ${qty}kg\nMessage: ${msg}`
    );
    window.open(`https://wa.me/919911662492?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-sage/30 border border-deepGreen/10 rounded-2xl p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-deepGreen mb-1">Name <span className="text-red-500">*</span></label>
          <input id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Aapka naam" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-deepGreen mb-1">Phone <span className="text-red-500">*</span></label>
          <input id="phone" name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Phone number" />
        </div>
      </div>
      <div>
        <label htmlFor="area" className="block text-sm font-semibold text-deepGreen mb-1">Village / Area</label>
        <input id="area" name="area" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Aapka gaon ya area" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-semibold text-deepGreen mb-1">Brand Preference</label>
          <select id="brand" name="brand" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all bg-white">
            <option>Kapila</option>
            <option>Bansuri</option>
            <option>Brajwasi</option>
            <option>Godrej Agrovet</option>
            <option>Mineral Mixture</option>
            <option>Any / All</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-deepGreen mb-1">Quantity (kg)</label>
          <input id="quantity" name="quantity" type="number" min="50" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Minimum 50kg" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-deepGreen mb-1">Message</label>
        <textarea id="message" name="message" rows={3} className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Koi sawaal ya vishesh jaankari..." />
      </div>
      <button type="submit" className="w-full bg-deepGreen hover:bg-deepGreen/90 text-white font-bold py-3 rounded-xl transition-colors text-sm">
        WhatsApp pe Inquiry Bhejein
      </button>
    </form>
  );
}
