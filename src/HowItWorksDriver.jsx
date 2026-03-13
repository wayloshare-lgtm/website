import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HowItWorksDriver() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full mb-12">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl md:rounded-[3rem] p-8 md:p-24 text-white text-center shadow-2xl min-h-80 md:min-h-96 flex flex-col justify-center">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} /> Back
          </Link>
          <h1 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight tracking-tighter">
            How to Offer <span className="text-yellow-200">Rides</span>
          </h1>
          <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto">
            Share your commute with verified passengers and offset your fuel and vehicle expenses
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-6xl mb-12 px-3 md:px-4 space-y-6 md:space-y-8">
        {/* STEP 1 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-purple-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-purple-600">1</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Register as a Driver</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Download the app and select "Offer Rides" during signup. Provide your vehicle details including make, model, year, and license plate. Upload your driver's license, vehicle registration, and insurance documents. Our verification team reviews your documents within 24 hours. Once approved, you're ready to start offering rides to verified passengers.
              </p>
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-purple-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Quick verification process</p>
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Support for all vehicle types</p>
                <p className="text-xs md:text-sm font-bold text-purple-700">✓ Dedicated driver support team</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-pink-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-pink-600">2</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Create Your Ride Offer</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Enter your starting point and destination. Specify your departure time and how many seats are available. Set your preferred passenger preferences (if any). The app automatically calculates the suggested fare based on distance, time, and current demand. You can adjust the fare if needed. Your ride will be visible to all verified passengers searching for rides on that route.
              </p>
              <div className="bg-pink-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-pink-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-pink-700">✓ Flexible scheduling</p>
                <p className="text-xs md:text-sm font-bold text-pink-700">✓ Dynamic pricing suggestions</p>
                <p className="text-xs md:text-sm font-bold text-pink-700">✓ Recurring ride options</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-orange-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-orange-600">3</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Accept Ride Requests</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                As passengers book your ride, you'll receive notifications with their profile, ratings, and destination details. You can accept or decline based on your preferences. Once you accept, the passenger sees your vehicle details and can track your location in real-time. You can communicate with passengers through the in-app chat to coordinate pickup details or answer any questions they might have.
              </p>
              <div className="bg-orange-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-orange-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-orange-700">✓ Full control over bookings</p>
                <p className="text-xs md:text-sm font-bold text-orange-700">✓ Passenger ratings visible upfront</p>
                <p className="text-xs md:text-sm font-bold text-orange-700">✓ Direct communication channel</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-green-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-green-600">4</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Provide a Great Ride</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Pick up your passengers at the agreed location and time. Follow the optimal route suggested by the app or choose your preferred route. Maintain a clean, comfortable vehicle and provide a pleasant experience. You can play music, offer water, or engage in friendly conversation. The app tracks your route and provides real-time updates to passengers. Ensure safe driving and follow all traffic rules.
              </p>
              <div className="bg-green-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-green-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-green-700">✓ Route optimization</p>
                <p className="text-xs md:text-sm font-bold text-green-700">✓ Real-time passenger updates</p>
                <p className="text-xs md:text-sm font-bold text-green-700">✓ Safety features for drivers</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="bg-white rounded-xl md:rounded-[2.5rem] border border-blue-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-black text-blue-600">5</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3">Receive Payments & Build Reputation</h3>
              <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
                Payment is automatically processed when passengers complete their ride. You receive the full fare amount minus our platform fee (typically 15-20%). Payments are transferred to your bank account within 24 hours. After each ride, passengers rate your service and can leave feedback. Maintain high ratings to attract more bookings and build your reputation as a trusted driver on the platform.
              </p>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-200 space-y-1">
                <p className="text-xs md:text-sm font-bold text-blue-700">✓ Instant payment processing</p>
                <p className="text-xs md:text-sm font-bold text-blue-700">✓ Transparent fee structure</p>
                <p className="text-xs md:text-sm font-bold text-blue-700">✓ Build your driver profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl md:rounded-[3rem] p-6 md:p-12 border border-purple-300">
          <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-6 md:mb-8 text-center">Why Become a WayloShare Driver?</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: '💵', title: 'Offset Costs', desc: 'Cover fuel, maintenance, and vehicle expenses with passenger fares' },
              { icon: '⏱️', title: 'Flexible Hours', desc: 'Choose when and where you want to offer rides' },
              { icon: '🤝', title: 'Build Community', desc: 'Connect with verified passengers and build lasting relationships' },
              { icon: '⭐', title: 'Grow Your Reputation', desc: 'Build a strong profile and attract more bookings' },
              { icon: '📊', title: 'Track Earnings', desc: 'Detailed dashboard showing all your rides and revenue' },
              { icon: '🛡️', title: 'Driver Protection', desc: '24/7 support and insurance coverage for all rides' }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded-lg md:rounded-2xl border border-purple-200">
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
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl md:rounded-[3rem] p-6 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">Ready to Start Earning?</h2>
          <p className="text-sm md:text-lg text-white/95 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join the WayloShare waitlist and be among the first to earn money by sharing your commute
          </p>
          <Link to="/" className="inline-block bg-white text-purple-600 px-6 md:px-10 py-2 md:py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl text-sm md:text-base">
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
