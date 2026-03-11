import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HowItWorks() {

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full max-w-6xl mb-12 px-3 md:px-4 mt-8 md:mt-12">
        <div className="text-center">
          {/* ICONS */}
          <div className="flex justify-center gap-2 mb-6 md:mb-8">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg md:text-2xl">
              👤
            </div>
            <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-100 rounded-full flex items-center justify-center text-lg md:text-2xl">
              👨‍💼
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4 leading-tight tracking-tight">
            How it works
          </h1>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            Carpooling between cities is easy, safe and convenient.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-6xl mb-12 px-3 md:px-4">
        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* PASSENGER CARD */}
          <Link to="/how-it-works/rider" className="group bg-red-100/40 rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-md transition-all text-center">
            {/* FREE SIGNUP BADGE */}
            <div className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8">
              FREE SIGNUP
            </div>
            
            {/* ICON */}
            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm">
              <span className="text-3xl md:text-4xl">👤</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4">For passengers</h3>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              Find a ride, book and go.<br/>It's affordable and convenient.
            </p>
            <button className="w-full bg-slate-900 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors text-sm md:text-base mb-4 md:mb-6">
              Find a ride
            </button>
            <Link to="/how-it-works/rider" className="inline-block text-slate-700 font-bold text-sm md:text-base hover:text-slate-900 transition-colors">
              Find out more
            </Link>
          </Link>

          {/* DRIVER CARD */}
          <Link to="/how-it-works/driver" className="group bg-yellow-100/50 rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-md transition-all text-center">
            {/* FREE SIGNUP BADGE */}
            <div className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8">
              FREE SIGNUP
            </div>
            
            {/* ICON */}
            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm">
              <span className="text-3xl md:text-4xl">👨‍💼</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4">For drivers</h3>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              Fill your seats with friendly<br/>passengers to cover your costs.
            </p>
            <button className="w-full bg-slate-900 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors text-sm md:text-base mb-4 md:mb-6">
              Post a trip
            </button>
            <Link to="/how-it-works/driver" className="inline-block text-slate-700 font-bold text-sm md:text-base hover:text-slate-900 transition-colors">
              Find out more
            </Link>
          </Link>
        </div>
      </div>

      {/* SECTION 1: COST SAVINGS */}
      <div className="w-full max-w-6xl mb-12 md:mb-16 px-3 md:px-4 pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-lg text-slate-700">
            Drivers and passengers <span className="font-black text-slate-900">reduce their travel costs by over 50%</span>
          </p>
          <p className="text-xs md:text-base text-slate-600 mt-2">
            when sharing rides on WayloShare.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/travelling.svg" alt="Travel savings illustration" className="w-full max-w-md h-auto" />
        </div>
      </div>

      {/* SECTION 2: EASY TO USE */}
      <div className="w-full max-w-6xl mb-12 md:mb-16 px-3 md:px-4 pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <img src="/car.svg" alt="Easy to use illustration" className="w-full max-w-sm h-auto" />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">
              It's super easy to use
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">
              Post and book trips anytime, anywhere, through the WayloShare website or app.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              Pay, receive money online and review your driver or passengers after each trip.
            </p>
            <a href="#" className="inline-block text-blue-600 font-bold text-sm md:text-base hover:text-blue-700 hover:underline transition-colors">
              Download our app →
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 3: SAFETY */}
      <div className="w-full max-w-6xl mb-12 md:mb-16 px-3 md:px-4 pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">
              Your safety comes first
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">
              Drivers are verified and you can check profiles before you travel.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">
              You can block or report members, and our systems help detect harmful behaviour early.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              Our Support Team is here to help 7 days a week.
            </p>
            <a href="/safety" className="inline-block text-blue-600 font-bold text-sm md:text-base hover:text-blue-700 hover:underline transition-colors">
              How we keep your safe →
            </a>
          </div>
          <div className="flex justify-center">
            <img src="/laughing.png" alt="Safety illustration" className="w-full max-w-sm h-auto" />
          </div>
        </div>
      </div>

      {/* SECTION 4: PAYMENTS */}
      <div className="w-full max-w-6xl mb-12 md:mb-16 px-3 md:px-4 pt-12 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img src="/payment.svg" alt="Payment illustration" className="w-full max-w-sm h-auto" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">
              Secure and verified payments
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">
              All payments are verified, with anti-fraud measures in place to protect our community.
            </p>
            <p className="text-sm md:text-base text-slate-700 mb-6 md:mb-8 leading-relaxed">
              Passengers pay in advance through our secure platform, powered by Stripe.
            </p>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Drivers receive their payment after the trip, through a verified bank account or UPI.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
