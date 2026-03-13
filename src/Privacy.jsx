import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiEye, HiShieldCheck, HiLockClosed } from 'react-icons/hi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            Your Privacy <span className="text-yellow-200">Matters</span>
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            We're transparent about how we collect, use, and protect your data
          </p>
        </div>
      </div>

      {/* PRIVACY SECTIONS */}
      <div className="w-full max-w-4xl mb-12 px-4 space-y-8">
        {[
          {
            title: "Data We Collect",
            icon: <HiEye size={32} />,
            content: "We collect information you provide directly (name, email, phone) and data about your trips (location, time, distance). This helps us improve our service and ensure safety."
          },
          {
            title: "How We Use Your Data",
            icon: <HiShieldCheck size={32} />,
            content: "Your data is used to facilitate trips, process payments, improve our app, and ensure safety. We never sell your personal information to third parties."
          },
          {
            title: "Data Security",
            icon: <HiLockClosed size={32} />,
            content: "We use industry-standard encryption and security measures to protect your data. Your payment information is handled by secure, PCI-compliant processors."
          }
        ].map((section, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] border border-blue-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-500">{section.icon}</div>
              <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      {/* RIGHTS */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-green-100 to-cyan-100 rounded-[3rem] p-12 md:p-16 border border-green-300">
          <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">Your Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Access your personal data anytime",
              "Request correction of inaccurate data",
              "Delete your account and associated data",
              "Opt-out of marketing communications",
              "Export your data in a portable format",
              "File a complaint with data protection authorities"
            ].map((right, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-green-200">
                <p className="text-slate-700 font-bold text-lg">✓ {right}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Privacy Questions?</h2>
          <p className="text-lg text-white/95 mb-8">
            Contact our privacy team at privacy@wayloshare.com
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
            Contact Us
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
