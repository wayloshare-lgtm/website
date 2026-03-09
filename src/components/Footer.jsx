import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-200 to-cyan-200 rounded-t-2xl md:rounded-[3rem] p-6 md:p-16 text-slate-900 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 shadow-2xl">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center md:justify-start">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-2 rounded-lg text-white shadow-lg flex-shrink-0">
            <Car size={20} className="md:w-6 md:h-6" weight="bold" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase">wayloshare</span>
        </div>
        <p className="text-slate-700 text-xs md:text-sm italic max-w-xs leading-relaxed">"Safar khoobsurat hai, humsafar banaye ise." <br/> Built for India, by Indians.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto">
        <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-black text-sm md:text-base flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform shadow-xl shadow-blue-300/30 w-full md:w-auto justify-center">
          <Download size={18} className="md:w-5 md:h-5" /> Get App Now
        </button>
        <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] md:text-[10px] text-slate-700 font-bold uppercase tracking-widest justify-center md:justify-end">
          <Link to="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <Link to="/safety" className="hover:text-blue-600 transition-colors">Safety Hub</Link>
          <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/cancellation" className="text-blue-600 hover:text-blue-700 transition-colors">Cancellation</Link>
          <Link to="/community-guidelines" className="text-blue-600 hover:text-blue-700 transition-colors">Guidelines</Link>
          <Link to="/careers" className="text-blue-600 hover:text-blue-700 transition-colors">Careers</Link>
        </div>
      </div>
    </footer>
  );
}
