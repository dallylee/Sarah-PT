import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-12">
            <div>
                <h3 className="font-serif text-2xl text-white mb-1">Sarah Collins</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Mobile Personal Training</p>
            </div>
            <div className="flex space-x-6 mt-6 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="mailto:hello@sarahcollinspt.co.uk" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400">
            <div>
                <h4 className="text-white font-bold mb-4">Areas</h4>
                <ul className="space-y-2">
                    <li>Clapham</li>
                    <li>Battersea</li>
                    <li>Wandsworth</li>
                    <li>Balham</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">Training</h4>
                <ul className="space-y-2">
                    <li>1 to 1 Home</li>
                    <li>Outdoor Park</li>
                    <li>Post Natal</li>
                    <li>Small Groups</li>
                </ul>
            </div>
             <div className="col-span-2 md:col-span-2 md:text-right">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Sarah Collins Mobile PT.<br/>
                    All rights reserved.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:justify-end">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};