import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-md px-4 md:px-6 py-3 shadow-sm flex items-center justify-between my-4 md:my-6 border border-blue-200 z-50 md:rounded-full md:max-w-6xl md:mx-auto">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/Applauncher.svg" alt="Wayloshare" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-slate-900 tracking-tight text-lg md:text-xl">wayloshare</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/blogs" className="hover:text-blue-500">Blogs</Link>
          <Link to="/safety" className="hover:text-blue-500">Safety</Link>
          <Link to="/privacy" className="hover:text-blue-500">Privacy</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg z-40">
          <div className="flex flex-col gap-4 p-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Home</Link>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Blogs</Link>
            <Link to="/safety" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Safety</Link>
            <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Privacy</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Contact</Link>
            <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">How It Works</Link>
            <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-500 py-2">Careers</Link>
          </div>
        </div>
      )}
    </>
  );
}
