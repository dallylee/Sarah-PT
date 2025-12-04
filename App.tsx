import React, { useState, useCallback } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Areas } from './components/Sections/Areas';
import { WaysToTrain } from './components/Sections/WaysToTrain';
import { Programmes } from './components/Sections/Programmes';
import { Weather } from './components/Sections/Weather';
import { About } from './components/Sections/About';
import { Testimonials } from './components/Sections/Testimonials';
import { EnquiryForm } from './components/Sections/EnquiryForm';
import { TrainingType } from './types';

const App: React.FC = () => {
  const [preselectedInterest, setPreselectedInterest] = useState<TrainingType | null>(null);

  const handleEnquiryClick = useCallback((interest?: TrainingType) => {
    if (interest) {
      setPreselectedInterest(interest);
    }
    const formElement = document.getElementById('enquire');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-stone font-sans">
      <Header onEnquire={() => handleEnquiryClick()} />
      
      <main className="flex-grow">
        <Hero 
          onPrimaryClick={() => handleEnquiryClick()} 
          onSecondaryClick={() => {
            document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        {/* About flows directly from Hero */}
        <div id="about">
          <About />
        </div>

        {/* Ways To Train - Dark Green Curved Section overlapping About */}
        <div id="ways-to-train">
          <WaysToTrain onEnquireGroup={() => handleEnquiryClick(TrainingType.SMALL_GROUPS)} />
        </div>

        {/* Programmes Section - Flows after the curved section */}
        <div id="programmes" className="bg-stone-light pt-12">
          <Programmes onEnquire={() => handleEnquiryClick()} />
        </div>

        <div id="areas">
          <Areas onCheckCoverage={() => handleEnquiryClick()} />
        </div>

        <div id="weather">
          <Weather />
        </div>

        <div id="testimonials" className="bg-white">
          <Testimonials />
        </div>

        <div id="enquire">
          <EnquiryForm initialInterest={preselectedInterest} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;