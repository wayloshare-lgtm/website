import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 md:py-20 px-4 md:px-6 mb-0 pb-0">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* BRAND SECTION */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/Applauncher.svg" alt="WayloShare" className="w-8 h-8 rounded-lg flex-shrink-0" />
              <span className="text-2xl font-black">WayloShare</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Revolutionizing commute in India with safe, affordable, and eco-friendly carpooling.
            </p>
            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/wayloshare?igsh=MTJ3cThsMXRod3FnbA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/WayloShareApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.732-8.835L1.227 2.25h6.836l4.702 6.217 5.447-6.217zM17.15 18.75h1.828L6.122 3.97H4.231l12.919 14.78z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/wayloshare-private-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works/rider" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  For Passengers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works/driver" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  For Drivers
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Safety Features
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:support@wayloshare.com" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  info@wayloshare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-8 md:my-12"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LEFT - COPYRIGHT */}
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">
              © 2026 WayloShare. All rights reserved. | 
              <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors ml-2">Privacy</Link> | 
              <Link to="/community-guidelines" className="text-emerald-400 hover:text-emerald-300 transition-colors ml-2">Terms</Link>
            </p>
          </div>

          {/* RIGHT - MADE IN INDIA */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">Proudly Made in</span>
            <div className="w-12 h-8 rounded-lg overflow-hidden bg-white p-1">
              <img src="/footer.jpeg" alt="Made in India" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
