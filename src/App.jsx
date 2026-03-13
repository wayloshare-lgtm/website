import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, ArrowRight, Heart, TrendingDown, Users, CheckCircle2, Map as MapIcon, ShieldAlert, Smartphone, QrCode, MapPinned, ChevronDown, Zap, Clock, Navigation, Sparkles} from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
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

      {/* 1. TOP MARQUEE (Live Activity) */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 py-1.5 md:py-2 overflow-hidden relative z-[60]">
        <div className="flex whitespace-nowrap animate-marquee text-white/90 text-[8px] md:text-xs font-bold uppercase tracking-widest">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 px-3 md:px-4">
              <span className="flex items-center gap-1 md:gap-2"><Zap size={12} md:size={14} className="text-[#00BCD4]" /> Rohan offered: Delhi to Jaipur</span>
              <span className="flex items-center gap-1 md:gap-2"><Clock size={12} md:size={14} className="text-[#4CAF50]" /> New booking in Mumbai: 1 min ago</span>
              <span className="flex items-center gap-1 md:gap-2"><Users size={12} md:size={14} className="text-[#7C4DFF]" /> 3,200 riders live now</span>
              <span className="flex items-center gap-1 md:gap-2"><Sparkles size={12} md:size={14} className="text-yellow-400" /> Save 75% on intercity rides</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. NAVBAR */}
      <Navbar />

      {/* 3. HERO SECTION - CLEAN DESIGN */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-3 md:px-4 bento-box delay-2">
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl md:rounded-[2.5rem] p-4 md:p-12 border border-blue-200 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center mb-6 md:mb-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight mb-3 md:mb-6 tracking-tighter">
                Why Go Solo?
              </h1>
              <p className="text-xs md:text-lg text-slate-700 mb-4 md:mb-8 leading-relaxed">
                Join thousands of smart commuters saving money and making connections.
              </p>
              
              {/* APP RATINGS */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-blue-200 flex items-center gap-2">
                  <div className="text-xs md:text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs md:text-sm">Coming Soon</span>
                    </div>
                    <div className="text-xs text-slate-500">Join the waitlist</div>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-blue-200 flex items-center gap-2">
                  <div className="text-xs md:text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs md:text-sm">Be First</span>
                    </div>
                    <div className="text-xs text-slate-500">Get early access</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-48 md:h-96 flex items-center justify-center rounded-3xl overflow-hidden bg-white">
              <img src="/hero.svg" alt="WayloShare Community" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* BOTTOM SEARCH BAR */}
          <div className="bg-white rounded-full p-2 md:p-3 shadow-lg shadow-blue-200/50 border border-blue-100 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full bg-blue-50 rounded-full p-2 md:p-4 flex items-center gap-2 md:gap-3">
              <MapPin size={18} md:size={24} className="text-blue-400 flex-shrink-0" />
              <input type="text" placeholder="From..." className="bg-transparent outline-none w-full text-xs md:text-base text-slate-800 font-bold placeholder-slate-400" />
            </div>
            <div className="hidden md:block w-px h-8 bg-blue-200"></div>
            <div className="flex-1 w-full bg-yellow-50 rounded-full p-2 md:p-4 flex items-center gap-2 md:gap-3">
              <MapPin size={18} md:size={24} className="text-yellow-500 flex-shrink-0" />
              <input type="text" placeholder="To..." className="bg-transparent outline-none w-full text-xs md:text-base text-slate-800 font-bold placeholder-slate-400" />
            </div>
            <button onClick={() => setShowWaitlist(true)} className="w-full md:w-auto bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full py-2 md:py-4 px-4 md:px-12 font-bold text-xs md:text-base hover:scale-105 transition-transform shadow-lg shadow-blue-300/30">Search</button>
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
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">Be a driver.</h2>
          <p className="text-sm md:text-lg text-slate-700 mb-6 md:mb-12 max-w-2xl mx-auto">
            Drivers save an average of <span className="font-black">₹8,000 every year</span> by carpooling with WayloShare.
          </p>
          
          {/* TRAVEL SVG */}
          <div className="flex justify-center mb-6 md:mb-12">
            <img src="/travel.svg" alt="Travel illustration" className="w-full max-w-xs md:max-w-md h-auto" />
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

      {/* --- RE-BUILT: HIGH ACCURACY INDIA MAP SECTION --- */}
      <div className="w-full mb-6 md:mb-12 bento-box delay-5">
        <div className="bg-transparent rounded-none md:rounded-[3rem] p-4 md:p-16 text-slate-900 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">
                <Navigation size={16} md:size={20} /> Live Network
              </div>
              <h2 className="text-xl md:text-5xl font-black mb-3 md:mb-6 leading-tight tracking-tight">
                Across every state, <br/>we're <span className="text-blue-500">connected.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-lg mb-4 md:mb-8 leading-relaxed">Wayloshare spans from the mountains of the North to the shores of the South.</p>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-blue-50 p-3 md:p-6 rounded-xl md:rounded-[2rem] border border-blue-200">
                  <div className="text-xl md:text-3xl font-black text-blue-600">28</div>
                  <p className="text-xs font-bold text-slate-600 uppercase mt-1">States Active</p>
                </div>
                <div className="bg-blue-50 p-3 md:p-6 rounded-xl md:rounded-[2rem] border border-cyan-200">
                  <div className="text-xl md:text-3xl font-black text-cyan-600">500+</div>
                  <p className="text-xs font-bold text-slate-600 uppercase mt-1">Routes Today</p>
                </div>
              </div>
            </div>

            {/* INDIA MAP SVG */}
            <div className="relative h-56 md:h-[500px] flex items-center justify-center">
              <img src="/assets/svg/converted.svg" alt="India Map" className="w-full h-full object-contain" />
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
              <img src="/environment.svg" alt="Environment" className="w-full h-full object-contain p-4 md:p-8" />
            </div>
            <div className="absolute -bottom-2 md:-bottom-6 -right-2 md:-right-6 bg-white p-3 md:p-6 rounded-xl md:rounded-3xl shadow-xl border border-yellow-200 text-center">
              <p className="text-green-600 font-black text-xl md:text-3xl">4.9/5</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-tighter">Community Love</p>
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

      {/* POPULAR ROUTES */}
      <div className="w-full max-w-6xl mb-6 md:mb-12 px-3 md:px-4 bento-box delay-5">
        <h2 className="text-base md:text-2xl font-black mb-3 md:mb-6 flex items-center gap-2 text-slate-900 tracking-tight">
          <MapPinned className="text-purple-500" size={20} md:size={28} /> Fast Routes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {[
            {f:"Delhi",t:"Jaipur",p:"450"},
            {f:"Mumbai",t:"Pune",p:"350"},
            {f:"Bangalore",t:"Mysore",p:"300"},
            {f:"Chandigarh",t:"Delhi",p:"550"}
          ].map((r,i)=>(
            <div key={i} className="bg-white p-3 md:p-6 rounded-lg md:rounded-[2rem] border border-blue-200 hover:border-blue-400 transition-all cursor-pointer shadow-sm group">
              <div className="font-bold text-slate-900 text-xs md:text-sm">{r.f} → {r.t}</div>
              <div className="flex justify-between items-center mt-2 md:mt-3">
                <div className="text-blue-600 font-black text-sm md:text-lg">₹{r.p}</div>
                <ArrowRight size={12} md:size={14} className="text-blue-200 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAFETY SECTION */}
      <div className="w-full mb-6 md:mb-12 bento-box delay-5">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-none md:rounded-[3rem] p-6 md:p-12 text-slate-900 grid md:grid-cols-2 gap-6 md:gap-12 items-center overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="safety-left">
            <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
              Your safety <br/>is our priority.
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              WayloShare is designed to ensure your safety at all times. Every ride is protected by our comprehensive verification system and 24/7 support.
            </p>
            <Link to="/safety" className="inline-block text-blue-600 font-bold text-sm md:text-base hover:text-blue-700 hover:underline transition-colors">
              How we keep you safe →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="safety-right relative h-48 md:h-64 flex items-center justify-center">
            <div className="absolute -top-4 -right-4 w-16 md:w-20 h-16 md:h-20 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-lg z-10">
              ✓
            </div>
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img src="/laughing.png" alt="Safe Community" className="w-full h-full object-contain" />
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
