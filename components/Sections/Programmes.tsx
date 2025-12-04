import React from 'react';
import { Button } from '../UI/Button';
import { Check, ArrowRight } from 'lucide-react';

interface ProgrammesProps {
  onEnquire: () => void;
}

export const Programmes: React.FC<ProgrammesProps> = ({ onEnquire }) => {
  return (
    <section className="py-24 bg-stone-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block">Tailored for you</span>
                <h2 className="text-4xl md:text-5xl font-serif text-london-green">Programmes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative group rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0">
                         <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt="" />
                         <div className="absolute inset-0 bg-gradient-to-t from-london-green via-london-green/50 to-transparent opacity-90"></div>
                    </div>
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                        <h3 className="text-2xl font-serif mb-4">Busy Professional</h3>
                        <p className="text-sm text-white/80 mb-8 leading-relaxed">
                            Protect time in your diary for health, creating energy for your career. Efficient 45-60 min sessions tailored to your schedule.
                        </p>
                        <button onClick={onEnquire} className="flex items-center text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                            Enquire <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative group rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0">
                         <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt="" />
                         <div className="absolute inset-0 bg-gradient-to-t from-london-green via-london-green/50 to-transparent opacity-90"></div>
                    </div>
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                        <h3 className="text-2xl font-serif mb-4">Post-Natal Rebuild</h3>
                        <p className="text-sm text-white/80 mb-8 leading-relaxed">
                             A safe, gradual return to exercise. We focus on core restoration, posture, and strength, respecting your recovery.
                        </p>
                        <button onClick={onEnquire} className="flex items-center text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                            Enquire <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative group rounded-[2.5rem] overflow-hidden min-h-[400px] md:min-h-[500px] bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0">
                         <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" alt="" />
                         <div className="absolute inset-0 bg-gradient-to-t from-london-green via-london-green/50 to-transparent opacity-90"></div>
                    </div>
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                        <h3 className="text-2xl font-serif mb-4">Small Groups</h3>
                        <p className="text-sm text-white/80 mb-8 leading-relaxed">
                            Training on the Common. Enjoy the motivation of a team with the expert guidance of a personal coach.
                        </p>
                        <button onClick={onEnquire} className="flex items-center text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                            Enquire <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};