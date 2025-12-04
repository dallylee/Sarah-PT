import React from 'react';
import { MapPin } from 'lucide-react';

interface AreasProps {
  onCheckCoverage: () => void;
}

const areas = ['Clapham', 'Battersea', 'Wandsworth', 'Balham', 'Earlsfield'];

export const Areas: React.FC<AreasProps> = ({ onCheckCoverage }) => {
  return (
    <section className="py-24 bg-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden h-[400px] shadow-inner bg-stone-light">
                    {/* Google Map Embed */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19889.78912852277!2d-0.18842145396782046!3d51.46089458021161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605c3175c5061%3A0x629555c270d04c0!2sClapham%20Common!5e0!3m2!1sen!2suk!4v1709852234000!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Service Area Map - South West London"
                    ></iframe>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif text-london-green mb-6">Local & Convenient</h2>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  I work exclusively across South West London. If you are within a 15 min drive of Clapham Junction, I likely cover your area.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                    {areas.map(area => (
                        <span key={area} className="px-4 py-2 border border-london-green/20 rounded-full text-london-green text-sm hover:bg-london-green hover:text-white transition-colors cursor-default">
                            {area}
                        </span>
                    ))}
                </div>

                <button onClick={onCheckCoverage} className="text-gold font-bold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-london-green hover:border-london-green transition-colors">
                    Check your postcode
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};