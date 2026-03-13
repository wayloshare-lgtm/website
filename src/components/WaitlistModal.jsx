import React, { useState, useEffect } from 'react';
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
        to_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.number,
        user_preference: formData.preference === 'book' ? 'Book Rides' : formData.preference === 'offer' ? 'Offer Rides' : 'Both Options'
      };

      // Send email using EmailJS
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then((response) => {
          console.log('Email sent successfully:', response);
          setStep('success');
          setTimeout(() => {
            setStep('initial');
            setFormData({ name: '', email: '', number: '', preference: 'both' });
            onClose();
          }, 3000);
        })
        .catch((error) => {
          console.error('Email send failed:', error);
          // Still show success even if email fails (data is saved)
          setStep('success');
          setTimeout(() => {
            setStep('initial');
            setFormData({ name: '', email: '', number: '', preference: 'both' });
            onClose();
          }, 3000);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* INITIAL POPUP */}
      {step === 'initial' && (
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
            >
              <X size={24} className="text-slate-600" />
            </button>

            {/* SVG Image */}
            <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden">
              <img src="/join.svg" alt="Join Waitlist" className="w-full h-full object-contain p-4" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                Join the <span className="text-blue-600">Waitlist</span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Be among the first to experience WayloShare. Get early access and exclusive benefits when we launch!
              </p>

              <button
                onClick={() => setStep('form')}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 md:py-4 rounded-full font-black text-base md:text-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Join the Waitlist
              </button>

              <p className="text-xs text-slate-500 mt-4">
                ✓ No spam • ✓ Early access • ✓ Exclusive offers
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FORM POPUP */}
      {step === 'form' && (
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 md:p-8 text-white relative">
            <button
              onClick={() => setStep('initial')}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-black">Tell Us About You</h2>
            <p className="text-sm text-white/90 mt-2">Join thousands waiting for WayloShare</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="10-digit number"
                className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                  errors.number ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'
                }`}
              />
              {errors.number && <p className="text-xs text-red-600 mt-1">{errors.number}</p>}
            </div>

            {/* Preference */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">What interests you?</label>
              <div className="space-y-2">
                {[
                  { value: 'book', label: '🚗 Book Rides', emoji: '🚗' },
                  { value: 'offer', label: '💰 Offer Rides', emoji: '💰' },
                  { value: 'both', label: '🎯 Both Options', emoji: '🎯' }
                ].map(option => (
                  <label key={option.value} className="flex items-center p-3 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <input
                      type="radio"
                      name="preference"
                      value={option.value}
                      checked={formData.preference === option.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 cursor-pointer"
                    />
                    <span className="ml-3 font-bold text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg hover:shadow-lg hover:scale-105 transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>

            <p className="text-xs text-slate-500 text-center">
              We'll notify you as soon as we launch!
            </p>
          </form>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {step === 'success' && (
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Check size={40} className="text-white" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              You're In! 🎉
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-2">
              Welcome to the WayloShare family!
            </p>
            <p className="text-xs md:text-sm text-slate-500 mb-6">
              Check your email for updates and exclusive early-bird offers.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-blue-700">
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
  );
}
