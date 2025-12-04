import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-stone relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl md:text-6xl font-serif text-london-green mb-8">About Sarah</h2>
        
        <p className="text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto">
           A space for those who value not just fitness, but the art of impeccable health surrounded by nature. Mobile coaching that respects your time and elevates your routine.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sarah Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
             {/* Image 2 */}
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden group mt-12 md:mt-0">
                <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Training Details" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
             {/* Image 3 */}
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                    alt="Outdoor Session" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
      </div>
    </section>
  );
};