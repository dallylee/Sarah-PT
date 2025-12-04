import React from 'react';
import { Button } from '../UI/Button';

interface HeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
          alt="Group fitness session in a London park at sunset" 
          className="w-full h-full object-cover brightness-[0.65]" // Darkened for text contrast
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
            {/* EST Style Date */}
            <div className="flex items-center gap-4 mb-8 opacity-80">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white">Est.</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white">2014</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-none tracking-tight">
              Sarah Collins
            </h1>
            
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold mb-12">
              Premium Mobile Personal Training
            </p>
            
            <div className="inline-block p-1 bg-white/10 backdrop-blur-md rounded-full mb-12">
                <Button onClick={onPrimaryClick} className="bg-white text-london-green min-w-[200px]">
                    Join the Club
                </Button>
            </div>

            <p className="text-white/80 font-light max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              Outdoor and home-based coaching for busy professionals in Clapham, Battersea and Wandsworth.
            </p>
        </div>
      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone to-transparent"></div>
    </div>
  );
};