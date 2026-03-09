import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Calendar, Search, ShieldCheck, Leaf, Wallet, ArrowRight, Star, Wind, Heart, Globe, TrendingDown, Users, CheckCircle2, MessageSquare, Download, Map as MapIcon, ShieldAlert, Smartphone, QrCode, MapPinned, ChevronDown, UserCheck, PhoneCall, Zap, IndianRupee, Clock, Navigation, Share2, Mail, Bell, Sparkles} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [km, setKm] = useState(20);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const monthlySavings = km * 15 * 22;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
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

      {/* 3. SEARCH BAR */}
      <div className="w-full max-w-5xl bento-box delay-1 mb-8 md:mb-12 px-4">
        <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-3 shadow-lg shadow-blue-200/50 border border-blue-100 flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 w-full bg-blue-50 rounded-xl md:rounded-full p-3 md:p-4 flex items-center gap-2 md:gap-3">
            <MapPin size={20} md:size={24} className="text-blue-400 flex-shrink-0" />
            <input type="text" placeholder="From..." className="bg-transparent outline-none w-full text-sm md:text-base text-slate-800 font-bold placeholder-slate-400" />
          </div>
          <div className="hidden md:block w-px h-8 bg-blue-200"></div>
          <div className="flex-1 w-full bg-yellow-50 rounded-xl md:rounded-full p-3 md:p-4 flex items-center gap-2 md:gap-3">
            <MapPin size={20} md:size={24} className="text-yellow-500 flex-shrink-0" />
            <input type="text" placeholder="To..." className="bg-transparent outline-none w-full text-sm md:text-base text-slate-800 font-bold placeholder-slate-400" />
          </div>
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-xl md:rounded-full py-3 md:py-4 px-6 md:px-12 font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-lg shadow-blue-300/30">Search</button>
        </div>
      </div>

      {/* 4. MAIN BENTO GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px] mb-12 px-4">
        {/* HERO */}
        <div className="bento-box delay-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-blue-200 md:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl -z-10"></div>
          <div className="bg-blue-200/40 text-blue-600 font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full w-fit text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
            <Star size={14} md:size={16} className="fill-blue-600" /> Best Carpooling
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight mb-4 md:mb-6 tracking-tighter">
            Share the <span className="text-blue-500">ride,</span><br/>share the <span className="text-yellow-500">vibe.</span>
          </h1>
          <p className="text-sm md:text-lg text-slate-600 max-w-sm">Join millions traveling smarter and safer.</p>
        </div>

        {/* CALCULATOR */}
        <div className="bento-box delay-3 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 md:col-span-2 text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
          <style>{`
            input[type="range"] {
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              height: 8px;
              border-radius: 5px;
              background: rgba(255,255,255,0.3);
              outline: none;
              cursor: pointer;
            }
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            }
            input[type="range"]::-moz-range-thumb {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: none;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            }
          `}</style>
          <div className="relative z-10">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-90 mb-2">Savings Calculator</h3>
            <div className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Save ₹{monthlySavings.toLocaleString()} / month</div>
            <div className="relative mb-6">
              <input type="range" min="5" max="100" value={km} onChange={(e) => setKm(e.target.value)} className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"/>
              <div className="absolute top-1/2 transform -translate-y-1/2 text-yellow-600 pointer-events-none" style={{left: `calc(${((km - 5) / 95) * 100}% - 12px)`}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-bold opacity-90">
              <span>{km} km Daily</span>
              <span>Based on petrol split</span>
            </div>
          </div>
          <div className="bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-md flex items-center gap-3">
            <div className="bg-white text-orange-500 p-2 rounded-full flex-shrink-0">
              <IndianRupee size={16} />
            </div>
            <p className="text-xs md:text-sm font-bold tracking-tight">Enough for a weekend in Goa!</p>
          </div>
        </div>

        {/* SMALL STATS */}
        <div className="bento-box delay-4 bg-green-100 rounded-2xl md:rounded-[2.5rem] p-4 md:p-6 border border-green-300 flex flex-col items-center justify-center text-center">
          <Leaf size={28} md:size={32} className="text-green-600 mb-2 animate-bounce" />
          <h3 className="font-bold text-sm md:text-base text-slate-900">Eco-Friendly</h3>
        </div>
        <div className="bento-box delay-5 bg-blue-100 rounded-2xl md:rounded-[2.5rem] p-4 md:p-6 border border-blue-300 flex flex-col items-center justify-center text-center">
          <UserCheck size={28} md:size={32} className="text-blue-600 mb-2" />
          <h3 className="font-bold text-sm md:text-base text-slate-900">Verified ID</h3>
        </div>

        {/* DRIVER CTA */}
        <div className="bento-box delay-5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 md:col-span-2 flex items-center justify-between text-white relative overflow-hidden group shadow-lg shadow-purple-300/30">
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl font-bold">Driving Solo?</h2>
            <p className="text-sm md:text-base text-white/90">Cover your fuel costs easily.</p>
          </div>
          <div className="bg-white/20 p-3 md:p-4 rounded-full group-hover:bg-white group-hover:text-purple-500 transition-all flex-shrink-0">
            <ArrowRight size={24} />
          </div>
        </div>

        {/* ANIMATION BOX */}
        <div className="bento-box delay-5 bg-cyan-50 rounded-2xl md:rounded-[2.5rem] p-4 md:p-6 md:col-span-2 border border-cyan-300 relative overflow-hidden flex flex-col justify-end">
          <h3 className="absolute top-4 md:top-6 left-4 md:left-6 font-bold text-blue-600 text-lg md:text-xl">Live Rides</h3>
          <div className="w-full h-10 bg-blue-100 rounded-full relative overflow-hidden mb-2">
            <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-blue-300"></div>
            <div className="absolute top-1 left-0 text-blue-500 animate-car">
              <Car size={32} md:size={36} weight="fill" />
              <Heart size={12} md:size={14} className="text-red-400 absolute -top-2 -right-2" weight="fill" />
            </div>
          </div>
        </div>
      </div>

      {/* --- RE-BUILT: HIGH ACCURACY INDIA MAP SECTION --- */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5">
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl md:rounded-[3rem] p-6 md:p-16 text-slate-900 relative overflow-hidden shadow-2xl border border-blue-200">
          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">
                <Navigation size={18} md:size={20} /> Live Network
              </div>
              <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight tracking-tight">
                Across every state, <br/>we're <span className="text-blue-500">connected.</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">Wayloshare spans from the mountains of the North to the shores of the South.</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/60 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-blue-200 backdrop-blur-md">
                  <div className="text-2xl md:text-3xl font-black text-blue-600">28</div>
                  <p className="text-xs font-bold text-slate-600 uppercase mt-1">States Active</p>
                </div>
                <div className="bg-white/60 p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-cyan-200 backdrop-blur-md">
                  <div className="text-2xl md:text-3xl font-black text-cyan-600">500+</div>
                  <p className="text-xs font-bold text-slate-600 uppercase mt-1">Routes Today</p>
                </div>
              </div>
            </div>

            {/* INDIA MAP SVG */}
            <div className="relative h-64 md:h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-blue-400 shadow-lg shadow-blue-300/50 pointer-events-none"></div>
              <img src="/assets/svg/converted.svg" alt="India Map" className="w-full h-full rounded-2xl md:rounded-3xl object-cover" style={{backgroundColor: '#e0f2fe'}} />
            </div>
          </div>
        </div>
      </div>

      {/* --- MISSION SECTION --- */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5">
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl md:rounded-[3rem] p-6 md:p-12 border border-yellow-300 grid md:grid-cols-2 gap-6 md:gap-12 items-center relative overflow-hidden">
          <div>
            <div className="text-red-500 font-bold text-xs md:text-sm uppercase mb-3 md:mb-4 tracking-widest flex items-center gap-2">
              <Heart size={14} md:size={16} /> Our Core Mission
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
              Making Indian roads <br/><span className="text-green-600">cleaner & smarter.</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-slate-700">
              <div className="flex gap-3 md:gap-4">
                <div className="bg-green-200/40 p-2 md:p-3 rounded-2xl text-green-600 h-fit flex-shrink-0">
                  <TrendingDown size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Less Traffic</h4>
                  <p className="text-xs md:text-sm leading-relaxed">By sharing seats, we effectively remove solo vehicles from our high-traffic metros.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="bg-blue-200/40 p-2 md:p-3 rounded-2xl text-blue-600 h-fit flex-shrink-0">
                  <Users size={20} md:size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Safe Networking</h4>
                  <p className="text-xs md:text-sm leading-relaxed">Travel with people who work or study near you in a trusted, social environment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 md:w-80 aspect-square bg-white rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center border-4 border-yellow-200 shadow-xl relative overflow-hidden group">
              <Globe size={80} md:size={100} className="text-green-200 animate-pulse" />
              <Car size={50} md:size={60} className="text-blue-500 mt-3 md:mt-4" />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-yellow-200 text-center">
              <p className="text-green-600 font-black text-2xl md:text-3xl">4.9/5</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-tighter">Community Love</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 text-center px-4 bento-box delay-5">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-10">Simple as <span className="text-blue-500">1-2-3</span></h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            { icon: <MapIcon />, color: "#06b6d4", title: "1. Search", text: "Find rides to your favorite places." },
            { icon: <CheckCircle2 />, color: "#a78bfa", title: "2. Select", text: "Pick a verified person to ride with." },
            { icon: <Car />, color: "#86efac", title: "3. Share", text: "Ride together, save money, have fun." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-blue-200 shadow-sm group hover:-translate-y-2 transition-all">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transition-transform group-hover:scale-110" style={{backgroundColor: `${step.color}20`, color: step.color}}>
                {step.icon}
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2">{step.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <Link to="/how-it-works" className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-sm md:text-base hover:scale-105 transition-transform shadow-lg shadow-blue-300/30">
          Learn More
        </Link>
      </div>

      {/* APP SHOWCASE */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl md:rounded-[3rem] p-6 md:p-12 border border-purple-200 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-48 md:w-64 h-96 md:h-[500px] bg-slate-900 rounded-2xl md:rounded-[3rem] p-2 md:p-3 shadow-2xl relative overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full rounded-2xl md:rounded-[2.5rem] object-cover"
                style={{backgroundColor: '#ffffff'}}
              >
                <source src="/videos/app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">Your commute, <br/><span className="text-purple-500">reimagined.</span></h2>
            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed italic font-medium text-sm md:text-base">Download the app to get live tracking, UPI payments, and 24/7 SOS.</p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl border border-purple-200">
                <QrCode size={80} md:size={100} className="text-slate-800" />
              </div>
              <div className="space-y-2">
                <div className="bg-black text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone size={14} md:size={16}/> Google Play
                </div>
                <div className="bg-black text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone size={14} md:size={16}/> App Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPULAR ROUTES */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5">
        <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6 flex items-center gap-2 text-slate-900 tracking-tight">
          <MapPinned className="text-purple-500" size={24} md:size={28} /> Fast Routes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            {f:"Delhi",t:"Jaipur",p:"450"},
            {f:"Mumbai",t:"Pune",p:"350"},
            {f:"Bangalore",t:"Mysore",p:"300"},
            {f:"Chandigarh",t:"Delhi",p:"550"}
          ].map((r,i)=>(
            <div key={i} className="bg-white p-4 md:p-6 rounded-xl md:rounded-[2rem] border border-blue-200 hover:border-blue-400 transition-all cursor-pointer shadow-sm group">
              <div className="font-bold text-slate-900 text-xs md:text-sm">{r.f} → {r.t}</div>
              <div className="flex justify-between items-center mt-2 md:mt-3">
                <div className="text-blue-600 font-black text-base md:text-lg">₹{r.p}</div>
                <ArrowRight size={12} md:size={14} className="text-blue-200 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAFETY SECTION */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-2xl md:rounded-[3rem] p-6 md:p-16 text-white grid md:grid-cols-2 gap-6 md:gap-12 items-center shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight text-white tracking-tight">Safety is our <br/>priority #1.</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/30 backdrop-blur-sm">
                <ShieldAlert size={20} md:size={24} className="text-cyan-200 flex-shrink-0" /> <span className="font-bold text-xs md:text-sm">Govt-ID Verified Members</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/30 backdrop-blur-sm">
                <Heart size={20} md:size={24} className="text-red-300 flex-shrink-0" /> <span className="font-bold text-xs md:text-sm">Ladies-Only Ride Option</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4 bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/30 backdrop-blur-sm">
                <Bell size={20} md:size={24} className="text-yellow-200 flex-shrink-0" /> <span className="font-bold text-xs md:text-sm">24/7 Live Support Team</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 text-slate-900 shadow-2xl relative z-10">
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg flex-shrink-0">A</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base">Arjun Mehta</h4>
                <p className="text-green-600 text-xs font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Profile Verified</p>
              </div>
            </div>
            <div className="bg-blue-50 p-3 md:p-4 rounded-xl md:rounded-2xl flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Trust Index</p>
                <p className="text-blue-600 font-black text-lg md:text-xl">9.8 / 10</p>
              </div>
              <div className="flex gap-1 text-yellow-400">
                <Star size={12} md:size={14} weight="fill" />
                <Star size={12} md:size={14} weight="fill" />
                <Star size={12} md:size={14} weight="fill" />
                <Star size={12} md:size={14} weight="fill" />
                <Star size={12} md:size={14} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full max-w-6xl mb-8 md:mb-12 px-4 bento-box delay-5 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-10 text-slate-900 tracking-tight">Community <span className="text-red-400">Voices</span></h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
          {[
            { n: "Priya Sharma", i: "P", c: "#3b82f6", r: "Student", t: "Saves me ₹2,400 monthly on my weekend trips home. Verified drivers always!" },
            { n: "Rahul T.", i: "R", c: "#a78bfa", r: "Driver", t: "Verified profiles make carpooling feel like driving with colleagues. Best for intercity trips." },
            { n: "Aisha Patel", i: "A", c: "#86efac", r: "Professional", t: "The Ladies-Only option is a life-saver for late night office commutes. I feel totally safe." }
          ].map((u, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex text-yellow-400 mb-3 md:mb-4">
                <Star weight="fill" size={14} md:size={16}/>
                <Star weight="fill" size={14} md:size={16}/>
                <Star weight="fill" size={14} md:size={16}/>
                <Star weight="fill" size={14} md:size={16}/>
                <Star weight="fill" size={14} md:size={16}/>
              </div>
              <p className="text-slate-700 font-medium italic text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">"{u.t}"</p>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md flex-shrink-0" style={{backgroundColor: u.c}}>
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
      <div className="w-full max-w-4xl mb-16 md:mb-24 px-4 bento-box delay-5">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-10 text-slate-900 uppercase tracking-tighter">Questions?</h2>
        <div className="space-y-3 md:space-y-4">
          {[
            { q: "Is carpooling safe with Wayloshare?", a: "Safety is our core promise. Every user is verified via Govt ID. We also provide live tracking and a 24/7 SOS button." },
            { q: "How do payments work?", a: "Everything is digital! You pay securely via UPI or Card inside the app. No more awkward cash conversations." },
            { q: "What if my plans change?", a: "No worries! We have a flexible cancellation policy. Just let us know a few hours ahead for a full refund." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl md:rounded-[2rem] border border-blue-200 overflow-hidden shadow-sm">
              <button onClick={() => toggleFaq(idx)} className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors">
                <span className="font-bold text-slate-800 tracking-tight text-sm md:text-base">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} size={20} md:size={24} />
              </button>
              <div className={`transition-all duration-300 ${activeFaq === idx ? 'max-h-40 p-4 md:p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-t p-4 md:p-6 pb-0">{faq.a}</p>
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
