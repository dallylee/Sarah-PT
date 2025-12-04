import React, { useState, useEffect } from 'react';
import { Button } from '../UI/Button';
import { EnquiryFormData, TrainingType, TrainingLocation, StartTimeframe } from '../../types';
import { CheckCircle } from 'lucide-react';

interface EnquiryFormProps {
  initialInterest: TrainingType | null;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialInterest }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    location: TrainingLocation.HOME,
    trainingType: TrainingType.HOME_1TO1,
    timeSlots: [],
    interestedInGroups: false,
    startTime: StartTimeframe.MONTH,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (initialInterest) {
      setFormData(prev => ({ 
        ...prev, 
        trainingType: initialInterest,
        interestedInGroups: initialInterest === TrainingType.SMALL_GROUPS
      }));
    }
  }, [initialInterest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (name === 'timeSlots') {
       const slots = checked 
        ? [...formData.timeSlots, value]
        : formData.timeSlots.filter(slot => slot !== value);
       setFormData(prev => ({ ...prev, timeSlots: slots }));
    } else if (name === 'interestedInGroups') {
       setFormData(prev => ({ ...prev, interestedInGroups: checked }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section className="py-24 bg-london-green text-white text-center rounded-[3rem] mx-4 my-12">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-gold" />
            </div>
            <h2 className="text-4xl font-serif mb-4">Enquiry Received</h2>
            <p className="text-stone-light text-lg mb-8 font-light">
                Thank you, {formData.name.split(' ')[0]}. I will review your details and get back to you within one working day.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-london-green"
              onClick={() => setStatus('idle')}
            >
              Send another enquiry
            </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-stone text-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4 block">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-serif text-london-green mb-6">Check Availability</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-stone-light border-none rounded-xl py-4 px-6 text-london-green focus:ring-2 focus:ring-gold transition-all"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-stone-light border-none rounded-xl py-4 px-6 text-london-green focus:ring-2 focus:ring-gold transition-all"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full bg-stone-light border-none rounded-xl py-4 px-6 text-london-green focus:ring-2 focus:ring-gold transition-all"
                        placeholder="Optional"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Postcode</label>
                    <input
                        type="text"
                        name="postcode"
                        required
                        className="w-full bg-stone-light border-none rounded-xl py-4 px-6 text-london-green focus:ring-2 focus:ring-gold transition-all"
                        placeholder="SW11..."
                        value={formData.postcode}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea
                    name="message"
                    rows={3}
                    className="w-full bg-stone-light border-none rounded-xl py-4 px-6 text-london-green focus:ring-2 focus:ring-gold transition-all resize-none"
                    placeholder="Tell me about your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </div>

            <div className="text-center">
                <Button 
                    type="submit" 
                    fullWidth 
                    variant="green"
                    className="text-lg py-4 shadow-xl max-w-md mx-auto"
                >
                    {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                </Button>
            </div>
        </form>
      </div>
    </section>
  );
};