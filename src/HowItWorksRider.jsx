import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HowItWorksRider() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full mb-12">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-xl md:rounded-[3rem] p-8 md:p-24 text-white text-center shadow-2xl min-h-80 md:min-h-96 flex flex-col justify-center">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} /> Back
          </Link>
          <h1 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tighter">
            How to Book a <span className="text-yellow-200">Ride</span>
          </h1>
          <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto">
            Get from point A to point B while saving money and meeting new people in your community
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-6xl mb-12 px-3 md:px-4 space-y-6 md:space-y-8">
        {/* STEP 1 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-blue-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-blue-600">1</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Download & Sign Up</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Download the WayloShare app from Google Play or App Store. Create your account using your phone number and verify your identity with a government-issued ID. This ensures everyone on the platform is verified and trustworthy. The entire process takes less than 5 minutes.
              </p>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-blue-700">✓ Secure verification process</p>
                <p className="text-xs md:text-sm font-bold text-blue-700">✓ Multiple payment methods supported</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-cyan-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-cyan-600">2</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Search for Your Ride</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Enter your pickup location and destination. Specify your preferred travel date and time. The app will show you all available rides from verified drivers heading in your direction. You can see the driver's profile, vehicle details, ratings from other riders, and the exact fare before confirming.
              </p>
              <div className="bg-cyan-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-cyan-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-cyan-700">✓ Real-time ride availability</p>
                <p className="text-xs md:text-sm font-bold text-cyan-700">✓ Transparent pricing with no hidden charges</p>
                <p className="text-xs md:text-sm font-bold text-cyan-700">✓ Filter by driver ratings and vehicle type</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-green-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-green-600">3</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Book & Confirm Your Ride</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Select your preferred ride and tap "Book Now". You'll receive instant confirmation with the driver's details, vehicle information, and live tracking. The driver will also see your profile and can accept or decline based on their preferences. Once confirmed, you can chat with the driver through the app to coordinate pickup details.
              </p>
              <div className="bg-green-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-green-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-green-700">✓ Instant booking confirmation</p>
                <p className="text-xs md:text-sm font-bold text-green-700">✓ In-app communication with driver</p>
                <p className="text-xs md:text-sm font-bold text-green-700">✓ Share ride details with emergency contacts</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-yellow-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-yellow-600">4</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Track & Enjoy Your Ride</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Watch the driver's real-time location as they approach your pickup point. You'll receive notifications when they're 5 minutes away. During the ride, you can track your route, see the estimated arrival time, and access the emergency SOS button if needed. The driver follows the optimal route to get you to your destination safely and efficiently.
              </p>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-yellow-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-yellow-700">✓ Live GPS tracking</p>
                <p className="text-xs md:text-sm font-bold text-yellow-700">✓ 24/7 emergency support</p>
                <p className="text-xs md:text-sm font-bold text-yellow-700">✓ Ride safety features enabled</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-purple-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-purple-600">5</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Pay & Rate Your Experience</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Upon arrival, payment is processed automatically through your preferred method (UPI, card, or wallet). You'll receive an itemized receipt showing the base fare, distance, time, and any applicable charges. After the ride, you can rate the driver and leave feedback. Your ratings help maintain quality standards and help other riders make informed choices.
              </p>
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-purple-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Secure digital payment</p>
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Detailed receipt for every ride</p>
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Contribute to community ratings</p>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl md:rounded-[3rem] p-6 md:p-12 border border-blue-300">
          <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-6 md:mb-8 text-center">Why Choose WayloShare as a Rider?</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: '💰', title: 'Save Money', desc: 'Reduce your commute costs by up to 75% compared to solo travel' },
              { icon: '🛡️', title: 'Stay Safe', desc: 'All drivers verified with government ID and real-time tracking' },
              { icon: '🌍', title: 'Meet People', desc: 'Connect with verified community members in your area' },
              { icon: '♻️', title: 'Help Environment', desc: 'Reduce carbon footprint by sharing rides' },
              { icon: '⏰', title: 'Flexible Scheduling', desc: 'Choose rides that match your schedule perfectly' },
              { icon: '📱', title: 'Easy to Use', desc: 'Simple app interface designed for everyone' }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded-lg md:rounded-2xl border border-blue-200">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-sm md:text-lg text-slate-900 mb-1 md:mb-2">{benefit.title}</h4>
                <p className="text-xs md:text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-3 md:px-4">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-xl md:rounded-[3rem] p-6 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">Ready to Book Your First Ride?</h2>
          <p className="text-sm md:text-lg text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join the WayloShare waitlist and be among the first to save money with our carpooling platform
          </p>
          <Link to="/" className="inline-block bg-white text-blue-600 px-6 md:px-10 py-2 md:py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl text-sm md:text-base">
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
