import React from 'react';
import { CloudRain, Sun, Umbrella } from 'lucide-react';

export const Weather: React.FC = () => {
  return (
    <section className="relative py-32 bg-charcoal text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=2070&auto=format&fit=crop" 
                alt="Mist over London park" 
                className="w-full h-full object-cover opacity-20"
            />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-serif text-white mb-6">Weather & Flexibility</h2>
                    <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                        We embrace the London elements, but we never let them stop us.
                    </p>
                    <div className="h-1 w-20 bg-gold mb-8"></div>
                    <p className="text-gray-400 leading-relaxed max-w-md">
                        My car is fully equipped with mats, weights, and resistance bands. If the weather turns, we seamlessly switch to an indoor home session or find a sheltered spot.
                    </p>
                </div>
                
                <div className="grid gap-6">
                    <div className="flex items-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
                        <div className="bg-london-green p-3 rounded-full mr-6">
                            <CloudRain size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-1">Light Rain</h4>
                            <p className="text-sm text-gray-400">We train in the park with appropriate layers.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
                        <div className="bg-london-green p-3 rounded-full mr-6">
                            <Umbrella size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-1">Heavy Rain or Cold</h4>
                            <p className="text-sm text-gray-400">We move to your living room or conservatory.</p>
                        </div>
                    </div>

                     <div className="flex items-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
                        <div className="bg-london-green p-3 rounded-full mr-6">
                            <Sun size={24} className="text-white" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg mb-1">Travel Plans</h4>
                            <p className="text-sm text-gray-400">I provide simple hotel programs when you're away.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};