import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, TrendingDown, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cv: null,
    coverLetter: ''
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO WITH TWIST */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="relative bg-transparent rounded-[3rem] p-12 md:p-16 text-slate-900 text-center shadow-none overflow-hidden">
          {/* Animated background elements - removed for transparent background */}
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter relative z-10">
            Join Our <span className="text-blue-600">Twisty</span> Team
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto relative z-10 mb-8">
            We're building the future of carpooling in India. Help us revolutionize how people commute!
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Team Members" },
              { number: "5M+", label: "Users Served" },
              { number: "10+", label: "Open Positions" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="text-3xl font-black text-blue-600">{stat.number}</div>
                <p className="text-sm font-bold text-slate-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY JOIN US */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Why Join Wayloshare?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🚀', title: 'Impact', desc: 'Work on a mission that changes how millions commute' },
            { icon: '🌍', title: 'Diversity', desc: 'Join a diverse, inclusive team from across India' },
            { icon: '💡', title: 'Innovation', desc: 'Build cutting-edge solutions for real problems' },
            { icon: '📈', title: 'Growth', desc: 'Grow your skills and career with us' },
            { icon: '🤝', title: 'Culture', desc: 'Work in a collaborative, supportive environment' },
            { icon: '⚡', title: 'Flexibility', desc: 'Flexible work arrangements and remote options' }
          ].map((reason, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Open Positions</h2>
        
      {/* CV SUBMISSION FORM */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Join Our Team</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[3rem] p-8 md:p-12 border-2 border-blue-200 shadow-lg">
          <form className="space-y-6 md:space-y-8">
            {/* Name Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Phone Number *</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white"
                required
              />
            </div>

            {/* Position Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Position Interested In *</label>
              <select
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white"
                required
              >
                <option value="">Select a position</option>
                <option value="community-manager">Community Manager</option>
                <option value="safety-officer">Safety & Compliance Officer</option>
                <option value="product-designer">Product Designer</option>
                <option value="backend-developer">Backend Developer</option>
                <option value="support-specialist">Customer Support Specialist</option>
                <option value="marketing-manager">Marketing Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Experience Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Years of Experience *</label>
              <input
                type="number"
                placeholder="e.g., 3"
                min="0"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white"
                required
              />
            </div>

            {/* CV Upload Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Upload Your CV *</label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-dashed border-blue-300 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                  required
                />
                <p className="text-xs md:text-sm text-slate-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            </div>

            {/* Cover Letter Field */}
            <div>
              <label className="block text-sm md:text-base font-bold text-slate-800 mb-2">Cover Letter (Optional)</label>
              <textarea
                placeholder="Tell us why you'd be a great fit for WayloShare..."
                rows="5"
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all text-sm md:text-base bg-white resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 mt-1 rounded border-2 border-blue-200 focus:border-blue-500 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-xs md:text-sm text-slate-600">
                I agree to the <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/community-guidelines" className="text-blue-600 hover:underline">Terms of Service</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 md:py-4 rounded-xl font-black text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all shadow-lg"
            >
              Submit Application
            </button>

            <p className="text-xs md:text-sm text-slate-500 text-center">
              We'll review your application and get back to you within 5-7 business days.
            </p>
          </form>
        </div>
      </div>
      </div>

      {/* CULTURE SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-green-100 to-cyan-100 rounded-[3rem] p-12 md:p-16 border border-green-300">
          <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">We Believe In:</h3>
              <ul className="space-y-3">
                {[
                  'Making a real impact on society',
                  'Diversity and inclusion',
                  'Continuous learning and growth',
                  'Work-life balance',
                  'Transparent communication',
                  'Celebrating wins together'
                ].map((belief, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="font-bold">{belief}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Team Perks</h3>
              <ul className="space-y-3">
                {[
                  '🏥 Comprehensive health insurance',
                  '🎓 Learning & development budget',
                  '🏠 Remote work flexibility',
                  '🎉 Team outings & events',
                  '📱 Latest tech & tools',
                  '🚀 Career growth opportunities'
                ].map((perk, i) => (
                  <li key={i} className="text-slate-700 font-bold">{perk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join the WayloShare waitlist and be part of our team when we launch
          </p>
          <Link to="/" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
