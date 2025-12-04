import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emma S.",
      location: "Clapham Common",
      quote: "Having Sarah turn up at my door twice a week has made all the difference. I feel stronger, my back no longer aches, and I actually look forward to training.",
    },
    {
      name: "James T.",
      location: "Battersea",
      quote: "I used to join gyms and never go. Now Sarah meets me in the park before work. It feels manageable, and I have kept it up for more than a year.",
    },
    {
      name: "Laura M.",
      location: "Wandsworth Common",
      quote: "Sarah helped me rebuild my strength safely after my second baby. There was no pressure, just steady progress and lots of reassurance.",
    }
  ];

  return (
    <section className="py-24 bg-stone-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-london-green mb-4">Client Stories</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10 shadow-sm border-t-4 border-london-green">
                    <div className="mb-6 text-gold">
                         {/* 5 stars SVG */}
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(s => (
                                <svg key={s} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ))}
                         </div>
                    </div>
                    <blockquote className="text-gray-600 italic font-light leading-relaxed mb-8">
                        "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                             <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&h=100`} alt="" className="w-full h-full object-cover grayscale opacity-60" />
                        </div>
                        <div>
                            <cite className="not-italic block font-serif font-bold text-london-green">{t.name}</cite>
                            <span className="text-xs uppercase tracking-wider text-gray-400">{t.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};