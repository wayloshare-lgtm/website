import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, MapPin, Clock, Shield, Download, ChevronDown, CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('rider');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            How <span className="text-yellow-200">Wayloshare</span> Works
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            Whether you're looking for a ride or offering one, we've made it simple and transparent
          </p>
        </div>
      </div>

      {/* TAB SELECTOR */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setActiveTab('rider')}
            className={`px-8 py-4 rounded-full font-black text-lg transition-all ${
              activeTab === 'rider'
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-lg'
                : 'bg-white border-2 border-blue-200 text-slate-900 hover:border-blue-400'
            }`}
          >
            <Users size={20} className="inline mr-2" />
            For Riders
          </button>
          <button
            onClick={() => setActiveTab('driver')}
            className={`px-8 py-4 rounded-full font-black text-lg transition-all ${
              activeTab === 'driver'
                ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg'
                : 'bg-white border-2 border-purple-200 text-slate-900 hover:border-purple-400'
            }`}
          >
            <Car size={20} className="inline mr-2" />
            For Drivers
          </button>
        </div>
      </div>

      {/* RIDERS SECTION */}
      {activeTab === 'rider' && (
        <div className="w-full max-w-6xl mb-12 px-4 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Taking a Ride Made Easy</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get from point A to point B while saving money and meeting new people in your community
            </p>
          </div>

          {/* STEP 1 */}
          <div className="bg-white rounded-[2.5rem] border border-blue-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Download & Sign Up</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Download the Wayloshare app from Google Play or App Store. Create your account using your phone number and verify your identity with a government-issued ID. This ensures everyone on the platform is verified and trustworthy. The entire process takes less than 5 minutes.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm font-bold text-blue-700">✓ Secure verification process</p>
                  <p className="text-sm font-bold text-blue-700">✓ Multiple payment methods supported</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-[2.5rem] border border-cyan-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-cyan-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Search for Your Ride</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Enter your pickup location and destination. Specify your preferred travel date and time. The app will show you all available rides from verified drivers heading in your direction. You can see the driver's profile, vehicle details, ratings from other riders, and the exact fare before confirming.
                </p>
                <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
                  <p className="text-sm font-bold text-cyan-700">✓ Real-time ride availability</p>
                  <p className="text-sm font-bold text-cyan-700">✓ Transparent pricing with no hidden charges</p>
                  <p className="text-sm font-bold text-cyan-700">✓ Filter by driver ratings and vehicle type</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-[2.5rem] border border-green-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-green-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Book & Confirm Your Ride</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Select your preferred ride and tap "Book Now". You'll receive instant confirmation with the driver's details, vehicle information, and live tracking. The driver will also see your profile and can accept or decline based on their preferences. Once confirmed, you can chat with the driver through the app to coordinate pickup details.
                </p>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="text-sm font-bold text-green-700">✓ Instant booking confirmation</p>
                  <p className="text-sm font-bold text-green-700">✓ In-app communication with driver</p>
                  <p className="text-sm font-bold text-green-700">✓ Share ride details with emergency contacts</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="bg-white rounded-[2.5rem] border border-yellow-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-yellow-600">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Track & Enjoy Your Ride</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Watch the driver's real-time location as they approach your pickup point. You'll receive notifications when they're 5 minutes away. During the ride, you can track your route, see the estimated arrival time, and access the emergency SOS button if needed. The driver follows the optimal route to get you to your destination safely and efficiently.
                </p>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <p className="text-sm font-bold text-yellow-700">✓ Live GPS tracking</p>
                  <p className="text-sm font-bold text-yellow-700">✓ 24/7 emergency support</p>
                  <p className="text-sm font-bold text-yellow-700">✓ Ride safety features enabled</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="bg-white rounded-[2.5rem] border border-purple-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-purple-600">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Pay & Rate Your Experience</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Upon arrival, payment is processed automatically through your preferred method (UPI, card, or wallet). You'll receive an itemized receipt showing the base fare, distance, time, and any applicable charges. After the ride, you can rate the driver and leave feedback. Your ratings help maintain quality standards and help other riders make informed choices.
                </p>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <p className="text-sm font-bold text-purple-700">✓ Secure digital payment</p>
                  <p className="text-sm font-bold text-purple-700">✓ Detailed receipt for every ride</p>
                  <p className="text-sm font-bold text-purple-700">✓ Contribute to community ratings</p>
                </div>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[3rem] p-12 border border-blue-300">
            <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">Why Choose Wayloshare as a Rider?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '💰', title: 'Save Money', desc: 'Reduce your commute costs by up to 75% compared to solo travel' },
                { icon: '🛡️', title: 'Stay Safe', desc: 'All drivers verified with government ID and real-time tracking' },
                { icon: '🌍', title: 'Meet People', desc: 'Connect with verified community members in your area' },
                { icon: '♻️', title: 'Help Environment', desc: 'Reduce carbon footprint by sharing rides' },
                { icon: '⏰', title: 'Flexible Scheduling', desc: 'Choose rides that match your schedule perfectly' },
                { icon: '📱', title: 'Easy to Use', desc: 'Simple app interface designed for everyone' }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-blue-200">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DRIVERS SECTION */}
      {activeTab === 'driver' && (
        <div className="w-full max-w-6xl mb-12 px-4 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Offer Rides & Cover Your Costs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Share your commute with verified passengers and offset your fuel and vehicle expenses
            </p>
          </div>

          {/* STEP 1 */}
          <div className="bg-white rounded-[2.5rem] border border-purple-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-purple-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Register as a Driver</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Download the app and select "Offer Rides" during signup. Provide your vehicle details including make, model, year, and license plate. Upload your driver's license, vehicle registration, and insurance documents. Our verification team reviews your documents within 24 hours. Once approved, you're ready to start offering rides to verified passengers.
                </p>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <p className="text-sm font-bold text-purple-700">✓ Quick verification process</p>
                  <p className="text-sm font-bold text-purple-700">✓ Support for all vehicle types</p>
                  <p className="text-sm font-bold text-purple-700">✓ Dedicated driver support team</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-[2.5rem] border border-pink-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-pink-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Create Your Ride Offer</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Enter your starting point and destination. Specify your departure time and how many seats are available. Set your preferred passenger preferences (if any). The app automatically calculates the suggested fare based on distance, time, and current demand. You can adjust the fare if needed. Your ride will be visible to all verified passengers searching for rides on that route.
                </p>
                <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
                  <p className="text-sm font-bold text-pink-700">✓ Flexible scheduling</p>
                  <p className="text-sm font-bold text-pink-700">✓ Dynamic pricing suggestions</p>
                  <p className="text-sm font-bold text-pink-700">✓ Recurring ride options</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-[2.5rem] border border-orange-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-orange-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Accept Ride Requests</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  As passengers book your ride, you'll receive notifications with their profile, ratings, and destination details. You can accept or decline based on your preferences. Once you accept, the passenger sees your vehicle details and can track your location in real-time. You can communicate with passengers through the in-app chat to coordinate pickup details or answer any questions they might have.
                </p>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <p className="text-sm font-bold text-orange-700">✓ Full control over bookings</p>
                  <p className="text-sm font-bold text-orange-700">✓ Passenger ratings visible upfront</p>
                  <p className="text-sm font-bold text-orange-700">✓ Direct communication channel</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="bg-white rounded-[2.5rem] border border-green-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-green-600">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Provide a Great Ride</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Pick up your passengers at the agreed location and time. Follow the optimal route suggested by the app or choose your preferred route. Maintain a clean, comfortable vehicle and provide a pleasant experience. You can play music, offer water, or engage in friendly conversation. The app tracks your route and provides real-time updates to passengers. Ensure safe driving and follow all traffic rules.
                </p>
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <p className="text-sm font-bold text-green-700">✓ Route optimization</p>
                  <p className="text-sm font-bold text-green-700">✓ Real-time passenger updates</p>
                  <p className="text-sm font-bold text-green-700">✓ Safety features for drivers</p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="bg-white rounded-[2.5rem] border border-blue-200 p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-blue-600">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Receive Payments & Build Reputation</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Payment is automatically processed when passengers complete their ride. You receive the full fare amount minus our platform fee (typically 15-20%). Payments are transferred to your bank account within 24 hours. After each ride, passengers rate your service and can leave feedback. Maintain high ratings to attract more bookings and build your reputation as a trusted driver on the platform.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm font-bold text-blue-700">✓ Instant payment processing</p>
                  <p className="text-sm font-bold text-blue-700">✓ Transparent fee structure</p>
                  <p className="text-sm font-bold text-blue-700">✓ Build your driver profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-[3rem] p-12 border border-purple-300">
            <h3 className="text-3xl font-black text-slate-900 mb-8 text-center">Why Become a Wayloshare Driver?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '💵', title: 'Offset Costs', desc: 'Cover fuel, maintenance, and vehicle expenses with passenger fares' },
                { icon: '⏱️', title: 'Flexible Hours', desc: 'Choose when and where you want to offer rides' },
                { icon: '🤝', title: 'Build Community', desc: 'Connect with verified passengers and build lasting relationships' },
                { icon: '⭐', title: 'Grow Your Reputation', desc: 'Build a strong profile and attract more bookings' },
                { icon: '📊', title: 'Track Earnings', desc: 'Detailed dashboard showing all your rides and revenue' },
                { icon: '🛡️', title: 'Driver Protection', desc: '24/7 support and insurance coverage for all rides' }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-purple-200">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-300 to-cyan-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join thousands of verified users already using Wayloshare to save money and build community
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl mx-auto">
            <Download size={20} /> Download App Now
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
