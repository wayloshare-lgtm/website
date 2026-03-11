import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, LogIn, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm py-2 md:py-4 px-4 md:px-6 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Find a ride & Post a trip */}
          <div className="hidden md:flex gap-4 lg:gap-6 text-xs lg:text-sm font-bold text-slate-700">
            <Link to="/" className="flex items-center gap-1 lg:gap-2 hover:text-blue-600 transition-colors">
              <span className="text-base">🔍</span>
              <span className="hidden lg:inline">Find a ride</span>
            </Link>
            <Link to="/" className="flex items-center gap-1 lg:gap-2 hover:text-blue-600 transition-colors">
              📝 <span className="hidden lg:inline">Post a trip</span>
            </Link>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity mx-auto md:mx-0">
            <img src="/Applauncher.svg" alt="WayloShare" className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 rounded-lg" />
            <span className="text-base md:text-lg lg:text-2xl font-black text-slate-900 tracking-tight">WayloShare</span>
          </Link>

          {/* Right - Navigation & Sign in */}
          <div className="hidden md:flex gap-4 lg:gap-6 items-center text-xs lg:text-sm font-bold text-slate-700">
            {/* How it works Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors hidden lg:flex">
                How it works
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/how-it-works/rider" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-bold first:rounded-t-lg">
                  For passengers
                </Link>
                <Link to="/how-it-works/driver" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-bold">
                  For drivers
                </Link>
                <Link to="/safety" className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-bold last:rounded-b-lg">
                  Trust & Safety
                </Link>
              </div>
            </div>
            <button className="flex items-center gap-1 lg:gap-2 hover:text-blue-600 transition-colors">
              <span className="text-base">🔐</span>
              <span className="hidden lg:inline">Sign in</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b border-slate-200 shadow-lg z-40">
          <div className="flex flex-col gap-3 p-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-600 py-2 flex items-center gap-2 text-sm">
              🔍 Find a ride
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">
              📝 Post a trip
            </Link>
            
            {/* Mobile How it works Dropdown */}
            <div>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm flex items-center gap-2 w-full"
              >
                How it works
                <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="flex flex-col gap-2 pl-4 mt-2 border-l-2 border-blue-200">
                  <Link to="/how-it-works/rider" onClick={() => { setMobileMenuOpen(false); setDropdownOpen(false); }} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">
                    For passengers
                  </Link>
                  <Link to="/how-it-works/driver" onClick={() => { setMobileMenuOpen(false); setDropdownOpen(false); }} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">
                    For drivers
                  </Link>
                  <Link to="/safety" onClick={() => { setMobileMenuOpen(false); setDropdownOpen(false); }} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">
                    Trust & Safety
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">Blogs</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-700 hover:text-blue-600 py-2 text-sm">Contact</Link>
            <button className="font-bold text-slate-700 hover:text-blue-600 py-2 flex items-center gap-2 text-sm">
              🔐 Sign in
            </button>
          </div>
        </div>
      )}
    </>
  );
}
