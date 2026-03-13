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

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm pt-20 md:pt-24">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes float-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pulse-text {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        .premium-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .glow-button {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .float-animation {
          animation: float-up 0.6s ease-out;
        }
      `}</style>
      <div className="flex items-center justify-center w-full h-full max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-6rem)]">
        {/* INITIAL POPUP */}
        {step === 'initial' && (
          <div className="premium-card rounded-[2.5rem] shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-500 flex flex-col border-2 border-blue-100">
            <div className="flex-1 flex flex-col overflow-y-auto relative">
              {/* Close Button - More Prominent */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 bg-white hover:bg-slate-100 p-3 rounded-full transition-all shadow-xl hover:shadow-2xl border-2 border-slate-200 hover:border-slate-300"
              >
                <X size={24} className="text-slate-800" strokeWidth={3} />
              </button>

              {/* SVG Image - Premium styling */}
              <div className="h-40 md:h-56 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                <img src="/join.svg" alt="Join Waitlist" className="w-full h-full object-contain p-4 md:p-6 relative z-10" />
              </div>

              {/* Content - Premium spacing */}
              <div className="p-6 md:p-8 text-center flex-1 flex flex-col justify-center space-y-6">
                <div className="float-animation">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1">
                    <span className="gradient-text pulse-text">Launching Soon!</span>
                  </h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-3"></div>
                </div>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Be among the first to experience WayloShare. Get early access and exclusive benefits when we launch!
                </p>

                <button
                  onClick={() => setStep('form')}
                  className="glow-button w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3.5 md:py-4 rounded-full font-black text-sm md:text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Join the Waitlist
                </button>

                <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-slate-500 font-semibold">
                  <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No spam</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Early access</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Exclusive</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FORM POPUP */}
        {step === 'form' && (
          <div className="premium-card rounded-[2.5rem] shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-500 flex flex-col border-2 border-blue-100">
            {/* Header - Premium gradient */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-6 md:p-8 text-white relative flex-shrink-0 shadow-lg">
              <button
                onClick={() => setStep('initial')}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all backdrop-blur-sm"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight pr-8">Launching Soon!</h2>
              <p className="text-sm text-white/90 mt-2 font-medium">Join thousands waiting for WayloShare</p>
            </div>

            {/* Form - Premium styling */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4 md:space-y-5 overflow-y-auto flex-1">
              {/* Name */}
              <div className="float-animation" style={{animationDelay: '0.1s'}}>
                <label className="block text-sm font-bold text-slate-800 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm font-medium ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500 bg-blue-50/50 focus:bg-white'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="float-animation" style={{animationDelay: '0.2s'}}>
                <label className="block text-sm font-bold text-slate-800 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm font-medium ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500 bg-blue-50/50 focus:bg-white'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="float-animation" style={{animationDelay: '0.3s'}}>
                <label className="block text-sm font-bold text-slate-800 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all text-sm font-medium ${
                    errors.number ? 'border-red-500 bg-red-50' : 'border-blue-200 focus:border-blue-500 bg-blue-50/50 focus:bg-white'
                  }`}
                />
                {errors.number && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.number}</p>}
              </div>

              {/* Preference */}
              <div className="float-animation" style={{animationDelay: '0.4s'}}>
                <label className="block text-sm font-bold text-slate-800 mb-3">What interests you?</label>
                <div className="space-y-2">
                  {[
                    { value: 'book', label: '🚗 Book Rides', desc: 'Find affordable rides' },
                    { value: 'offer', label: '💰 Offer Rides', desc: 'Earn money sharing' },
                    { value: 'both', label: '🎯 Both Options', desc: 'Maximum flexibility' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center p-3 border-2 border-blue-200 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all bg-blue-50/30">
                      <input
                        type="radio"
                        name="preference"
                        value={option.value}
                        checked={formData.preference === option.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 cursor-pointer"
                      />
                      <div className="ml-3">
                        <span className="font-bold text-slate-800 text-sm">{option.label}</span>
                        <p className="text-xs text-slate-500">{option.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="glow-button w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3.5 rounded-xl font-black text-sm hover:shadow-2xl hover:scale-105 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>

              <p className="text-xs text-slate-500 text-center font-medium pb-2">
                We'll notify you as soon as we launch!
              </p>
            </form>
          </div>
        )}

        {/* SUCCESS POPUP */}
        {step === 'success' && (
          <div className="premium-card rounded-[2.5rem] shadow-2xl w-full max-w-sm max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-500 border-2 border-blue-100">
            <div className="p-8 md:p-10 text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-lg">
                <Check size={40} className="text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                You're In! 🎉
              </h2>
              <p className="text-base text-slate-700 mb-2 font-semibold">
                Welcome to the WayloShare family!
              </p>
              <p className="text-sm text-slate-600 mb-6">
                Check your email for updates and exclusive early-bird offers.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
                <p className="text-sm font-bold text-green-700 leading-relaxed">
                  ✓ Waitlist confirmed<br/>
                  ✓ Email sent to {formData.email}
                </p>
              </div>

              <p className="text-sm text-slate-500 font-medium">
                Redirecting in a moment...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


