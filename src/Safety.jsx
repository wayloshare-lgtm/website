import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ShieldAlert, Heart, Bell, CheckCircle2, Users, Lock, Phone, MapPin, Download } from 'lucide-react';

export default function Safety() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-20">
      {/* NAVBAR */}
      <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm flex items-center justify-between my-6 border border-blue-200 z-50 mx-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/Applauncher.svg" alt="Wayloshare" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-slate-900 tracking-tight text-xl">wayloshare</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/blogs" className="hover:text-blue-500">Blogs</Link>
          <Link to="/safety" className="hover:text-blue-500">Safety</Link>
          <Link to="/privacy" className="hover:text-blue-500">Privacy</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            Safety is Our <span className="text-yellow-200">Priority</span>
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            We're committed to making every ride safe, secure, and trustworthy
          </p>
        </div>
      </div>

      {/* SAFETY FEATURES */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">How We Keep You Safe</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <ShieldAlert size={40} />,
              color: "blue",
              title: "Govt-ID Verification",
              desc: "Every member is verified through government-issued ID. No exceptions."
            },
            {
              icon: <Heart size={40} />,
              color: "red",
              title: "Ladies-Only Rides",
              desc: "Safe, women-only ride options for maximum comfort and security."
            },
            {
              icon: <Bell size={40} />,
              color: "yellow",
              title: "24/7 Support",
              desc: "Our support team is always available to help with any concerns."
            },
            {
              icon: <MapPin size={40} />,
              color: "green",
              title: "Live Tracking",
              desc: "Real-time GPS tracking so you always know where you are."
            },
            {
              icon: <Lock size={40} />,
              color: "purple",
              title: "Secure Payments",
              desc: "All transactions are encrypted and secure via UPI or Card."
            },
            {
              icon: <Phone size={40} />,
              color: "cyan",
              title: "Emergency SOS",
              desc: "One-tap emergency button to alert authorities and contacts."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-lg transition-all">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white ${
                feature.color === 'blue' ? 'bg-blue-400' :
                feature.color === 'red' ? 'bg-red-400' :
                feature.color === 'yellow' ? 'bg-yellow-400' :
                feature.color === 'green' ? 'bg-green-400' :
                feature.color === 'purple' ? 'bg-purple-400' :
                'bg-cyan-400'
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST METRICS */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-green-100 to-cyan-100 rounded-[3rem] p-12 md:p-16 border border-green-300">
          <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Why Trust Wayloshare?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "5M+", label: "Verified Members" },
              { number: "98%", label: "Safety Rating" },
              { number: "0", label: "Incidents" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
                <p className="text-slate-700 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GUIDELINES */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Safety Guidelines</h2>
        <div className="bg-white rounded-[2.5rem] border border-blue-200 p-8 space-y-6">
          {[
            "Always verify the driver's profile and ratings before confirming a ride",
            "Share your ride details with a trusted friend or family member",
            "Keep your emergency contacts updated in the app",
            "Report any suspicious behavior immediately to our support team",
            "Never share personal information like home address upfront",
            "Use the in-app chat for communication, not personal phone numbers"
          ].map((guideline, i) => (
            <div key={i} className="flex gap-4">
              <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-slate-700 text-lg">{guideline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Ready to Ride Safe?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Download the Wayloshare app and join millions of safe, verified riders
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl mx-auto">
            <Download size={20} /> Get App Now
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl bg-gradient-to-r from-blue-200 to-cyan-200 rounded-[3rem] p-10 md:p-16 text-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 mx-4 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/Applauncher.svg" alt="Wayloshare" className="w-8 h-8 rounded-lg" />
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">wayloshare</span>
          </div>
          <p className="text-slate-700 text-sm italic max-w-xs leading-relaxed">"Safar khoobsurat hai, humsafar banaye ise." <br/> Built for India, by Indians.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-blue-300/30">
            <Download size={20} /> Get App Now
          </button>
          <div className="flex gap-8 text-[10px] text-slate-700 font-bold uppercase tracking-widest flex-wrap justify-center md:justify-end">
            <Link to="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
            <Link to="/safety" className="hover:text-blue-600 transition-colors">Safety Hub</Link>
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/cancellation" className="text-blue-600 hover:text-blue-700 transition-colors">Cancellation</Link>
            <Link to="/community-guidelines" className="text-blue-600 hover:text-blue-700 transition-colors">Guidelines</Link>
            <Link to="/careers" className="text-blue-600 hover:text-blue-700 transition-colors">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
