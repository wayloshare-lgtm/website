import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your credentials
const EMAILJS_PUBLIC_KEY = 'BTHfDz4YCMJUaAJQF';
const EMAILJS_SERVICE_ID = 'service_mqt137d';
const EMAILJS_TEMPLATE_ID = 'template_zlobl3b';

if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default function WaitlistModal({ isOpen, onClose }) {
  const [step, setStep] = useState('initial'); // 'initial', 'form', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    preference: 'both'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.number.trim()) newErrors.number = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.number.replace(/\D/g, ''))) newErrors.number = 'Invalid phone number';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      
      // Prepare email data
      const templateParams = {
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.number,
        user_preference: formData.preference === 'book' ? 'Book Rides' : formData.preference === 'offer' ? 'Offer Rides' : 'Both Options'
      };

      // Send email using EmailJS
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then((response) => {
          console.log('✅ Email sent successfully:', response);
          setStep('success');
          setTimeout(() => {
            setStep('initial');
            setFormData({ name: '', email: '', number: '', preference: 'both' });
            onClose();
          }, 3000);
        })
        .catch((error) => {
          console.error('❌ Email send failed:', error);
          console.error('Error details:', {
            status: error.status,
            text: error.text,
            message: error.message
          });
          alert(`Email failed to send. Error: ${error.text || error.message}`);
          setStep('initial');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="flex items-center justify-center w-full h-full">
        {/* INITIAL POPUP */}
        {step === 'initial' && (
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col">
            <div className="flex-1 flex flex-col overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
              >
                <X size={20} className="text-slate-600" />
              </button>

              {/* SVG Image */}
              <div className="h-32 md:h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/join.svg" alt="Join Waitlist" className="w-full h-full object-contain p-3" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 text-center flex-1 flex flex-col justify-center">
                <h2 className="text-lg md:text-2xl font-black text-slate-900 mb-2">
                  Launching <span className="text-blue-600">Soon</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6 leading-relaxed">
                  Be among the first to experience WayloShare. Get early access and exclusive benefits when we launch!
                </p>

                <button
                  onClick={() => setStep('form')}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 md:py-3 rounded-full font-black text-xs md:text-base hover:shadow-lg hover:scale-105 transition-all"
                >
                  Join the Waitlist
                </button>

                <p className="text-xs text-slate-500 mt-3 md:mt-4">
                  ✓ No spam • ✓ Early access • ✓ Exclusive offers
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FORM POPUP */}
        {step === 'form' && (
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 md:p-6 text-white relative flex-shrink-0">
              <button
                onClick={() => setStep('initial')}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-all"
              >
                <X size={20} />
              </button>
              <h2 className="text-lg md:text-2xl font-black pr-8">Launching Soon</h2>
              <p className="text-xs md:text-xs text-white/90 mt-1">Join thousands waiting for WayloShare</p>
            </div>

            {/* Form - Scrollable */}
            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-2.5 md:space-y-3 overflow-y-auto flex-1">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none transition-all text-xs ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none transition-all text-xs ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 mt-0.5">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  className={`w-full px-3 py-2 rounded-lg border-2 outline-none transition-all text-xs ${
                    errors.number ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                  }`}
                />
                {errors.number && <p className="text-xs text-red-600 mt-0.5">{errors.number}</p>}
              </div>

              {/* Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">What interests you?</label>
                <div className="space-y-1">
                  {[
                    { value: 'book', label: '🚗 Book Rides' },
                    { value: 'offer', label: '💰 Offer Rides' },
                    { value: 'both', label: '🎯 Both Options' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center p-2 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                      <input
                        type="radio"
                        name="preference"
                        value={option.value}
                        checked={formData.preference === option.value}
                        onChange={handleInputChange}
                        className="w-3 h-3 text-blue-600 cursor-pointer"
                      />
                      <span className="ml-2 font-bold text-slate-700 text-xs">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2.5 rounded-lg font-black text-xs hover:shadow-lg hover:scale-105 transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>

              <p className="text-xs text-slate-500 text-center pb-2">
                We'll notify you as soon as we launch!
              </p>
            </form>
          </div>
        )}

        {/* SUCCESS POPUP */}
        {step === 'success' && (
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-6 md:p-8 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Check size={32} className="text-white" />
              </div>

              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                You're In! 🎉
              </h2>
              <p className="text-xs md:text-sm text-slate-600 mb-2">
                Welcome to the WayloShare family!
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Check your email for updates and exclusive early-bird offers.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-xs font-bold text-blue-700">
                  ✓ Waitlist confirmed<br/>
                  ✓ Email sent to {formData.email}
                </p>
              </div>

              <p className="text-xs text-slate-500">
                Redirecting in a moment...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


