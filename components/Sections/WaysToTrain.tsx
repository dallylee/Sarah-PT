import React from 'react';
import { Home, Trees, Users, UserPlus } from 'lucide-react';
import { Button } from '../UI/Button';

interface WaysToTrainProps {
  onEnquireGroup: () => void;
}

export const WaysToTrain: React.FC<WaysToTrainProps> = ({ onEnquireGroup }) => {
  const methods = [
    {
      icon: <Home size={32} />,
      title: 'Home Training',
      description: 'Privacy and convenience in your own space.',
    },
    {
      icon: <Trees size={32} />,
      title: 'Park Sessions',
      description: 'Fresh air on Clapham or Wandsworth Common.',
    },
    {
      icon: <Users size={32} />,
      title: 'Small Groups',
      description: 'Community and fitness in a friendly team.',
    },
    {
      icon: <UserPlus size={32} />,
      title: 'Couples',
      description: 'Share the journey with a partner.',
    }
  ];

  return (
    <section className="bg-london-green rounded-t-[3rem] md:rounded-t-[5rem] py-32 px-4 -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">
            What makes us special?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {methods.map((method, index) => (
                <div key={index} className="flex flex-col items-center group">
                    <div className="mb-6 text-gold transition-transform duration-300 group-hover:-translate-y-2">
                        {method.icon}
                    </div>
                    <h3 className="text-lg font-serif text-white mb-4 tracking-wide">{method.title}</h3>
                    <p className="text-white/60 text-sm max-w-[200px] leading-relaxed">
                        {method.description}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-20">
             <Button onClick={onEnquireGroup} variant="green" className="bg-white text-london-green hover:bg-stone-100 hover:text-london-green border-none">
                View Group Schedules
             </Button>
        </div>

      </div>
    </section>
  );
};