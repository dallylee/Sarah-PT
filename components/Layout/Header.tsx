import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../UI/Button';
import { NavItem } from '../../types';

interface HeaderProps {
  onEnquire: () => void;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#ways-to-train' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Stories', href: '#testimonials' },
];

export const Header: React.FC<HeaderProps> = ({ onEnquire }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className={`
          flex items-center justify-between px-6 py-3 
          bg-stone-light/95 backdrop-blur-md 
          rounded-full shadow-lg border border-white/50
          transition-all duration-300
          ${isMenuOpen ? 'w-full max-w-lg rounded-2xl' : 'w-auto gap-8'}
        `}>
          
          {/* Mobile: Logo left, Burger right */}
          <div className="flex md:hidden items-center justify-between w-full">
             <span className="font-serif text-lg text-london-green font-bold">Sarah Collins</span>
             <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-london-green p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <span className="font-serif text-xl tracking-wide text-london-green font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Sarah Collins
            </span>
            
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button onClick={onEnquire} variant="green" className="px-6 py-2 text-xs h-10">
              Enquire
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-40 bg-stone-light rounded-3xl shadow-xl border border-white p-6 animate-in slide-in-from-top-4">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-serif text-london-green hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={() => { onEnquire(); setIsMenuOpen(false); }} fullWidth variant="green">
              Check availability
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};