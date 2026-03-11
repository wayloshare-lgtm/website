import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-12 mb-8 md:mb-16">
          {/* LEFT - LOGO & SOCIALS */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img src="/Applauncher.svg" alt="WayloShare" className="w-6 md:w-8 h-6 md:h-8 rounded-lg flex-shrink-0" />
              <span className="text-lg md:text-2xl font-black text-slate-900">WayloShare</span>
            </div>
            <div className="flex gap-4 mb-4 md:mb-6">
              <a href="https://www.instagram.com/wayloshare?igsh=MTJ3cThsMXRod3FnbA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/wayloshare-private-limited/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <select className="border border-slate-300 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-slate-700 bg-white hover:border-slate-400 transition-colors w-full md:w-auto">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* COLUMN 1 */}
          <div>
            <Link to="/careers" className="font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base hover:text-blue-600 transition-colors">
              🎯 We're hiring!
            </Link>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/careers" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Download our app
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <Link to="/how-it-works" className="font-bold text-slate-900 mb-3 md:mb-4 text-sm md:text-base hover:text-blue-600 transition-colors block">How it works</Link>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/how-it-works/rider" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Passengers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works/driver" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Drivers
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 md:mb-4 text-sm md:text-base">For students</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/blogs" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Events & festivals
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 md:mb-4 text-sm md:text-base">About</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-slate-200 pt-6 md:pt-12">
          <p className="text-xs text-slate-500 mb-6 md:mb-8">
            © WayloShare 2026 | 
            <Link to="/privacy" className="hover:text-blue-600 transition-colors ml-1">Privacy</Link> | 
            <Link to="/community-guidelines" className="hover:text-blue-600 transition-colors ml-1">Terms</Link>
          </p>

          {/* PROUDLY MADE IN INDIA */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center">
            <div className="w-28 md:w-32 h-20 md:h-24 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <div className="text-xl md:text-2xl mb-1">🇮🇳</div>
                <p className="text-xs font-bold text-slate-700">Made in India</p>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Proudly Made in India</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                We acknowledge that WayloShare operates on the traditional, ancestral and unceded territories of the Indian subcontinent. 
                <a href="#" className="text-blue-600 hover:underline ml-1">More info</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
