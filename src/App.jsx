import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, ArrowRight, Heart, TrendingDown, Users, CheckCircle2, Map as MapIcon, ShieldAlert, Smartphone, QrCode, MapPinned, ChevronDown, Zap, Clock, Navigation, Sparkles, Calendar} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showWaitlist, setShowWaitlist] = useState(true);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-0 md:pb-0">
      {/* WAITLIST MODAL */}
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
      {/* --- ANIMATION MOTORS (Keyframes) --- */}
      <style>{`
        @keyframes bentoPop {
          0% { opacity: 0; transform: scale(0.9) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes drive {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(500px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes map-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(25, 118, 210, 0.2)); }
          50% { filter: drop-shadow(0 0 25px rgba(25, 118, 210, 0.4)); }
        }
        @keyframes float-map {
          0%, 100% { transform: perspective(1000px) rotateX(10deg) translateY(0); }
          50% { transform: perspective(1000px) rotateX(15deg) translateY(-15px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-animate {
          background: linear-gradient(-45deg, #1e40af, #0891b2, #059669, #1e40af);
          background-size: 300% 300%;
          animation: gradient-shift 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bento-box {
          animation: bentoPop 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .safety-left { animation: slideInLeft 0.8s ease-out; }
        .safety-right { animation: slideInRight 0.8s ease-out; }
        .safety-card { animation: float 3s ease-in-out infinite; }
        .safety-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .safety-item { animation: slideInLeft 0.8s ease-out forwards; opacity: 0; }
        .safety-item:nth-child(1) { animation-delay: 0.2s; }
        .safety-item:nth-child(2) { animation-delay: 0.4s; }
        .safety-item:nth-child(3) { animation-delay: 0.6s; }
        .bento-box {
          animation: bentoPop 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-car { animation: drive 4s linear infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-map-3d { animation: float-map 6s ease-in-out infinite; }
        .animate-glow { animation: map-glow 4s ease-in-out infinite; }
        .delay-1 { animation-delay: 100ms; }
        .delay-2 { animation-delay: 200ms; }
        .delay-3 { animation-delay: 300ms; }
        .delay-4 { animation-delay: 400ms; }
        .delay-5 { animation-delay: 500ms; }
        .india-shape {
          transition: all 0.5s ease;
          stroke-linejoin: round;
        }
      `}</style>

      {/* NAVBAR */}
      <Navbar onSignIn={() => setShowWaitlist(true)} onPostTrip={() => setShowWaitlist(true)} />

      {/* 3. HERO SECTION - NEW DESIGN */}
      <div className="w-full mb-8 md:mb-12 px-3 md:px-4 bento-box delay-2">
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-xl md:rounded-[2.5rem] p-4 md:p-8 border border-emerald-200 overflow-hidden">
          <div className="flex flex-col">
            {/* TOP SECTION - LEFT CONTENT + IMAGE */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center mb-6 md:mb-8">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                {/* ECO-FRIENDLY BADGE */}
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1.5 mb-3 md:mb-4 w-fit text-xs md:text-sm">
                  <span className="text-base md:text-lg">🌱</span>
                  <span className="font-bold">Eco-friendly commuting for everyone</span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-3xl md:text-5xl font-black leading-tight mb-3 md:mb-4 tracking-tighter">
                  <span className="gradient-animate inline-block">Why Go<br/>Solo?</span>
                </h1>

                {/* DESCRIPTION */}
                <p className="text-xs md:text-sm text-slate-700 mb-4 md:mb-6 leading-relaxed max-w-md">
                  Join a community of 50,000+ commuters turning empty seats into new connections and lower travel costs.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <button onClick={() => setShowWaitlist(true)} className="bg-white border-2 border-emerald-200 text-slate-900 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-xs md:text-sm flex items-center justify-center gap-2 flex-shrink-0">
                    <span className="text-base md:text-lg">⭐</span>
                    <span>JOIN WAITLIST</span>
                  </button>
                  <Link to="/how-it-works" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold transition-colors text-xs md:text-sm flex items-center justify-center gap-2 flex-shrink-0">
                    <span className="text-base md:text-lg">🎯</span>
                    <span>LEARN MORE</span>
                  </Link>
                </div>

                {/* SOCIAL PROOF */}
                <div className="flex items-center gap-2 mt-4 md:mt-6">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">👩</div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">👨</div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">👤</div>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold">Joined by 200+ people this hour</p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-64 md:h-96 flex items-center justify-center rounded-2xl overflow-hidden bg-white">
                <img src="/hero section image.jpeg" alt="WayloShare" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            {/* BOTTOM SECTION - SEARCH FORM */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl shadow-emerald-200/30 border border-emerald-100">
              {/* SEARCH HEADING */}
              <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-6 md:mb-8">Where are you heading?</h3>

              {/* SEARCH INPUTS - HORIZONTAL LAYOUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
                {/* FROM INPUT */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-2">From</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 md:p-4 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                    <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Leaving from..." 
                      className="bg-transparent outline-none w-full text-xs md:text-sm text-slate-800 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* TO INPUT */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-2">To</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 md:p-4 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
                    <MapPin size={18} className="text-emerald-500 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Going to..." 
                      className="bg-transparent outline-none w-full text-xs md:text-sm text-slate-800 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* DATE INPUT */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-2">Depart</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 md:p-4 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                    <Calendar size={18} className="text-purple-500 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Date" 
                      className="bg-transparent outline-none w-full text-xs md:text-sm text-slate-800 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* RETURN DATE INPUT */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-2">Return</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-3 md:p-4 border-2 border-pink-200 hover:border-pink-400 transition-colors">
                    <Calendar size={18} className="text-pink-500 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Return Date" 
                      className="bg-transparent outline-none w-full text-xs md:text-sm text-slate-800 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* PASSENGERS DROPDOWN */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-600 mb-2">Passengers</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 md:p-4 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                    <span className="text-orange-500 flex-shrink-0 text-lg">👥</span>
                    <select className="bg-transparent outline-none w-full text-xs md:text-sm text-slate-800 font-medium cursor-pointer appearance-none">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SEARCH BUTTON */}
              <button onClick={() => setShowWaitlist(true)} className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white rounded-xl py-4 md:py-5 font-black text-sm md:text-base transition-all shadow-lg shadow-emerald-500/40 flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105">
                <span className="text-xl">🔍</span>
                <span>Find Your Ride</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-3 md:px-4 bento-box delay-5">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* FEATURE 1 */}
          <div className="text-center">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">👥</span>
            </div>
            <h3 className="font-black text-slate-900 mb-2 text-sm md:text-lg">Join Our Community</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">Be part of the carpooling revolution. Join the waitlist and get early access.</p>
            <button onClick={() => setShowWaitlist(true)} className="text-blue-600 font-bold text-xs md:text-sm hover:underline">Join now</button>
          </div>

          {/* FEATURE 2 */}
          <div className="text-center">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">✓</span>
            </div>
            <h3 className="font-black text-slate-900 mb-2 text-sm md:text-lg">Safe rides with verified drivers</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">We verify every driver's licence and have many safety measures to help keep you safe.</p>
            <Link to="/safety" className="text-blue-600 font-bold text-xs md:text-sm hover:underline">How we keep you safe</Link>
          </div>

          {/* FEATURE 3 */}
          <div className="text-center">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">⚡</span>
            </div>
            <h3 className="font-black text-slate-900 mb-2 text-sm md:text-lg">Super easy to book</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 leading-relaxed">Find a ride, book in minutes, and travel for less - on our website or app for iPhone & Android.</p>
            <a href="#" className="text-blue-600 font-bold text-xs md:text-sm hover:underline">Find your ride</a>
          </div>
        </div>

        {/* BE A DRIVER SECTION */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl md:rounded-[2.5rem] p-6 md:p-16 text-center border border-yellow-200">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">Drive Smart. Save More</h2>
          <p className="text-sm md:text-lg text-slate-700 mb-6 md:mb-12 max-w-2xl mx-auto">
            You can save an average of <span className="font-black">₹8,000 every year</span> by carpooling with WayloShare.
          </p>
          
          {/* TRAVEL SVG */}
          <div className="flex justify-center mb-6 md:mb-12">
            <img src="/drivesmart2.jpeg" alt="Drive Smart illustration" className="w-full max-w-sm md:max-w-lg h-auto rounded-[2rem]" />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-slate-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors text-sm md:text-base">
              Post your trip
            </button>
            <button className="bg-white text-slate-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold border border-slate-300 hover:border-slate-400 transition-colors text-sm md:text-base">
              Find out more
            </button>
          </div>
        </div>
      </div>

      {/* --- POPULAR ROUTES SECTION --- */}
      <div className="w-full mb-6 md:mb-12 px-3 md:px-4 bento-box delay-5">
        <div className="bg-white rounded-xl md:rounded-[3rem] p-6 md:p-12 border border-slate-200 shadow-sm">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">
              <Navigation size={16} md:size={20} /> Popular Routes
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-4 leading-tight tracking-tight text-slate-900">
              Trending Routes <span className="text-emerald-600">Today</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-lg max-w-2xl mx-auto">Join thousands of commuters on these popular routes across India</p>
          </div>

          {/* ROUTES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Route 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 border-2 border-blue-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Bangalore → Chittoor</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~140 km • 2.5 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 240+ riders</span>
              </div>
            </div>

            {/* Route 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8 border-2 border-purple-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Trending</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Hyderabad → Vijayawada</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~280 km • 4 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 180+ riders</span>
              </div>
            </div>

            {/* Route 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 md:p-8 border-2 border-pink-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">Hot</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Chennai → Bangalore</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~350 km • 5.5 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 320+ riders</span>
              </div>
            </div>

            {/* Route 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8 border-2 border-orange-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Active</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Pune → Mumbai</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~150 km • 2.5 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 290+ riders</span>
              </div>
            </div>

            {/* Route 5 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 border-2 border-green-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Delhi → Agra</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~210 km • 3.5 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 150+ riders</span>
              </div>
            </div>

            {/* Route 6 */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 md:p-8 border-2 border-cyan-200 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🚗</div>
                <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">Bangalore → Mysore</h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">~145 km • 2.5 hours</p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <span>👥 210+ riders</span>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-8 md:mt-12">
            <button onClick={() => setShowWaitlist(true)} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-black text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Explore All Routes
            </button>
          </div>
        </div>
      </div>

       {/* SAFETY SECTION */}
      <div className="w-full mb-6 md:mb-12 bento-box delay-5">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-none p-6 md:p-12 px-0 text-slate-900 grid md:grid-cols-2 gap-6 md:gap-12 items-center overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="safety-left px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Ride With Confidence.
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              WayloShare is designed to ensure your safety at all times. Every ride is protected by our comprehensive verification system and <span className="font-black text-slate-900">24/7 support</span>.
            </p>
            <Link to="/safety" className="inline-block text-blue-600 font-black text-base md:text-lg hover:text-blue-700 hover:underline transition-colors">
              How we keep you safe →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="safety-right relative h-48 md:h-64 flex items-center justify-center pr-0">
            <div className="w-full h-full rounded-[3rem] overflow-hidden">
              <img src="/callcentre.jpeg" alt="Safe Community" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="w-full max-w-6xl mb-6 md:mb-12 text-center px-3 md:px-4 bento-box delay-5">
        <h2 className="text-xl md:text-4xl font-black text-slate-900 mb-4 md:mb-10">Simple as <span className="text-blue-500">1-2-3</span></h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
          {[
            { icon: <MapIcon />, color: "#06b6d4", title: "1. Search", text: "Find rides to your favorite places." },
            { icon: <CheckCircle2 />, color: "#a78bfa", title: "2. Select", text: "Pick a verified person to ride with." },
            { icon: <Car />, color: "#86efac", title: "3. Share", text: "Ride together, save money, have fun." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-4 md:p-8 rounded-xl md:rounded-[2.5rem] border border-blue-200 shadow-sm group hover:-translate-y-2 transition-all">
              <div className="w-12 md:w-20 h-12 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 transition-transform group-hover:scale-110" style={{backgroundColor: `${step.color}20`, color: step.color}}>
                {step.icon}
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-2">{step.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <Link to="/how-it-works" className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 md:px-10 py-2 md:py-4 rounded-full font-black text-xs md:text-base hover:scale-105 transition-transform shadow-lg shadow-blue-300/30">
          Learn More
        </Link>
      </div>

      {/* APP SHOWCASE */}
      <div className="w-full mb-6 md:mb-12 bento-box delay-5">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl md:rounded-[3rem] p-4 md:p-12 border border-purple-200 grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-40 md:w-64 h-80 md:h-[500px] bg-slate-900 rounded-xl md:rounded-[3rem] p-2 md:p-3 shadow-2xl relative overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full rounded-xl md:rounded-[2.5rem] object-cover"
                style={{backgroundColor: '#ffffff'}}
              >
                <source src="/videos/app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-xl md:text-4xl font-black mb-3 md:mb-6 leading-tight">Your commute, <br/><span className="text-purple-500">reimagined.</span></h2>
            <p className="text-slate-600 mb-4 md:mb-8 leading-relaxed italic font-medium text-xs md:text-base">Download the app to get live tracking, UPI payments, and 24/7 SOS.</p>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-3xl border border-purple-200">
                <QrCode size={60} md:size={100} className="text-slate-800" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="bg-black text-white px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone size={12} md:size={16}/> Google Play
                </div>
                <div className="bg-black text-white px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone size={12} md:size={16}/> App Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MISSION SECTION --- */}
      <div className="w-full max-w-6xl mb-6 md:mb-12 px-3 md:px-4 bento-box delay-5">
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl md:rounded-[3rem] p-4 md:p-12 border border-yellow-300 grid md:grid-cols-2 gap-4 md:gap-12 items-center relative overflow-hidden">
          <div>
            <div className="text-red-500 font-bold text-xs md:text-sm uppercase mb-2 md:mb-4 tracking-widest flex items-center gap-2">
              <Heart size={12} md:size={16} /> Our Core Mission
            </div>
            <h2 className="text-xl md:text-4xl font-black text-slate-900 mb-3 md:mb-6 leading-tight tracking-tight">
              Making Indian roads <br/><span className="text-green-600">cleaner & smarter.</span>
            </h2>
            <div className="space-y-3 md:space-y-6 text-slate-700">
              <div className="flex gap-2 md:gap-4">
                <div className="bg-green-200/40 p-2 md:p-3 rounded-2xl text-green-600 h-fit flex-shrink-0">
                  <TrendingDown size={16} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs md:text-base">Less Traffic</h4>
                  <p className="text-xs md:text-sm leading-relaxed">By sharing seats, we effectively remove solo vehicles from our high-traffic metros.</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4">
                <div className="bg-blue-200/40 p-2 md:p-3 rounded-2xl text-blue-600 h-fit flex-shrink-0">
                  <Users size={16} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs md:text-base">Safe Networking</h4>
                  <p className="text-xs md:text-sm leading-relaxed">Travel with people who work or study near you in a trusted, social environment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-48 md:w-80 aspect-square bg-white rounded-xl md:rounded-[3rem] flex flex-col items-center justify-center border-4 border-yellow-200 shadow-xl relative overflow-hidden group">
              <img src="/saveindia.jpeg" alt="Environment" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 md:-bottom-6 -right-2 md:-right-6 bg-white p-3 md:p-6 rounded-xl md:rounded-3xl shadow-xl border border-yellow-200 text-center">
              <p className="text-green-600 font-black text-xl md:text-3xl">4.9/5</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-tighter">Community Love</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full max-w-6xl mb-6 md:mb-12 px-3 md:px-4 bento-box delay-5 text-center">
        <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-10 text-slate-900 tracking-tight">Join Our <span className="text-red-400">Waitlist</span></h2>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6 text-left">
          {[
            { n: "Early Access", i: "E", c: "#3b82f6", r: "Founder", t: "Be among the first to experience WayloShare when we launch." },
            { n: "Exclusive Offers", i: "X", c: "#a78bfa", r: "Waitlist", t: "Get special founder benefits and exclusive launch day offers." },
            { n: "Priority Support", i: "P", c: "#86efac", r: "Member", t: "Enjoy priority customer support as a valued early member." }
          ].map((u, i) => (
            <div key={i} className="bg-white p-4 md:p-8 rounded-lg md:rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex text-yellow-400 mb-2 md:mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-slate-700 font-medium italic text-xs md:text-sm mb-3 md:mb-6 leading-relaxed">"{u.t}"</p>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-7 md:w-10 h-7 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-base shadow-md flex-shrink-0" style={{backgroundColor: u.c}}>
                  {u.i}
                </div>
                <div>
                  <p className="font-bold text-xs md:text-sm text-slate-900 tracking-tight">{u.n}</p>
                  <p className="text-xs text-slate-500 font-medium">{u.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full max-w-4xl mb-12 md:mb-24 px-3 md:px-4 bento-box delay-5">
        <h2 className="text-lg md:text-3xl font-black text-center mb-4 md:mb-10 text-slate-900 uppercase tracking-tighter">Questions?</h2>
        <div className="space-y-2 md:space-y-4">
          {[
            { q: "Is carpooling safe with Wayloshare?", a: "Safety is our core promise. Every user is verified via Govt ID. We also provide live tracking and a 24/7 SOS button." },
            { q: "How do payments work?", a: "Everything is digital! You pay securely via UPI or Card inside the app. No more awkward cash conversations." },
            { q: "What if my plans change?", a: "No worries! We have a flexible cancellation policy. Just let us know a few hours ahead for a full refund." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg md:rounded-[2rem] border border-blue-200 overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(idx)} className="w-full p-3 md:p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors">
                <span className="font-bold text-slate-800 tracking-tight text-xs md:text-base">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} size={18} md:size={24} />
              </button>
              <div className={`transition-all duration-300 ${activeFaq === idx ? 'max-h-40 p-3 md:p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-t p-3 md:p-6 pb-0">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
