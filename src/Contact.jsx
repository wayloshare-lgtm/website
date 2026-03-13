import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full mb-12">
        <div className="bg-transparent rounded-none p-12 md:p-16 text-slate-900 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mail size={40} />,
              title: "Email",
              info: "support@wayloshare.com",
              color: "blue"
            },
            {
              icon: <Phone size={40} />,
              title: "Phone",
              info: "+91 1800-WAYSAFE",
              color: "purple"
            },
            {
              icon: <MapPin size={40} />,
              title: "Address",
              info: "Bangalore, India",
              color: "green"
            }
          ].map((contact, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-blue-200 p-8 text-center shadow-sm hover:shadow-lg transition-all">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white ${
                contact.color === 'blue' ? 'bg-blue-400' :
                contact.color === 'purple' ? 'bg-purple-400' :
                'bg-green-400'
              }`}>
                {contact.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{contact.title}</h3>
              <p className="text-slate-600 font-bold">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="w-full max-w-2xl mb-12 px-4">
        <div className="bg-white rounded-[2.5rem] border border-blue-200 p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-400 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-400 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-400 transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-4 rounded-full font-black flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What's the best way to contact support?", a: "Email us at support@wayloshare.com or call +91 1800-WAYSAFE. We respond within 24 hours." },
            { q: "Do you have a physical office?", a: "Yes! Visit us in Bangalore. We're open Monday-Friday, 9 AM - 6 PM IST." },
            { q: "How can I report a problem?", a: "Use the in-app support feature or email us directly with details about your issue." }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-blue-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Join Our Community</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Download the app and start your carpooling journey today
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl mx-auto">
            <Download size={20} /> Get App Now
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
