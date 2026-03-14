import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, Zap, Heart, Globe, TrendingUp, ChevronRight, MapPin, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [rotateCard, setRotateCard] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Community Manager",
      department: "Community & Growth",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹6-10 LPA",
      description: "Build and nurture our community of riders and drivers. Organize events, manage social media, and create engaging content.",
      requirements: ["2+ years community management", "Social media expertise", "Event planning experience", "Passion for carpooling"],
      perks: ["Flexible hours", "Remote work", "Community events", "Learning budget"]
    },
    {
      id: 2,
      title: "Safety & Compliance Officer",
      department: "Safety & Trust",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      description: "Ensure platform safety and regulatory compliance. Develop safety protocols and manage user verification processes.",
      requirements: ["3+ years in safety/compliance", "Knowledge of transportation regulations", "Strong analytical skills", "Attention to detail"],
      perks: ["Health insurance", "Professional development", "Flexible schedule", "Remote options"]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Product & Design",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹7-11 LPA",
      description: "Design intuitive user experiences for our mobile app. Create wireframes, prototypes, and conduct user research.",
      requirements: ["3+ years UI/UX design", "Figma proficiency", "Mobile app design experience", "User research skills"],
      perks: ["Creative freedom", "Latest design tools", "Collaborative team", "Design conferences"]
    },
    {
      id: 4,
      title: "Backend Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹10-16 LPA",
      description: "Build scalable backend systems for our platform. Work with APIs, databases, and cloud infrastructure.",
      requirements: ["3+ years backend development", "Node.js/Python expertise", "Database design", "Cloud platforms (AWS/GCP)"],
      perks: ["Competitive salary", "Stock options", "Tech stack freedom", "Learning opportunities"]
    },
    {
      id: 5,
      title: "Customer Support Specialist",
      department: "Customer Success",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹3-5 LPA",
      description: "Provide exceptional support to our users. Handle inquiries, resolve issues, and gather user feedback.",
      requirements: ["1+ years customer support", "Excellent communication", "Problem-solving skills", "Patience and empathy"],
      perks: ["Training provided", "Performance bonus", "Flexible shifts", "Career growth"]
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing & Growth",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹6-9 LPA",
      description: "Drive user acquisition and brand awareness. Plan campaigns, manage partnerships, and analyze metrics.",
      requirements: ["3+ years marketing experience", "Digital marketing expertise", "Analytics knowledge", "Campaign management"],
      perks: ["Creative projects", "Marketing budget", "Team collaboration", "Growth opportunities"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO WITH TWIST */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="relative bg-transparent rounded-[3rem] p-12 md:p-16 text-slate-900 text-center shadow-none overflow-hidden">
          {/* Animated background elements - removed for transparent background */}
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter relative z-10">
            Join Our <span className="text-blue-600">Twisty</span> Team
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto relative z-10 mb-8">
            We're building the future of carpooling in India. Help us revolutionize how people commute!
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-2xl mx-auto">
            {[
              { number: "50+", label: "Team Members" },
              { number: "5M+", label: "Users Served" },
              { number: "10+", label: "Open Positions" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="text-3xl font-black text-blue-600">{stat.number}</div>
                <p className="text-sm font-bold text-slate-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY JOIN US */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Why Join Wayloshare?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🚀', title: 'Impact', desc: 'Work on a mission that changes how millions commute' },
            { icon: '🌍', title: 'Diversity', desc: 'Join a diverse, inclusive team from across India' },
            { icon: '💡', title: 'Innovation', desc: 'Build cutting-edge solutions for real problems' },
            { icon: '📈', title: 'Growth', desc: 'Grow your skills and career with us' },
            { icon: '🤝', title: 'Culture', desc: 'Work in a collaborative, supportive environment' },
            { icon: '⚡', title: 'Flexibility', desc: 'Flexible work arrangements and remote options' }
          ].map((reason, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OPEN POSITIONS */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Open Positions</h2>
        
        {/* Job Cards with Flip Animation */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="cursor-pointer perspective h-full"
              onMouseEnter={() => setRotateCard(job.id)}
              onMouseLeave={() => setRotateCard(null)}
            >
              <div
                className="relative w-full transition-transform duration-500 min-h-96"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: rotateCard === job.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full bg-white rounded-[2.5rem] border border-blue-200 p-8 shadow-sm"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{job.title}</h3>
                      <p className="text-blue-600 font-bold text-sm">{job.department}</p>
                    </div>
                    <ChevronRight size={24} className="text-blue-400 flex-shrink-0" />
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase size={16} />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="text-lg font-bold text-green-600">₹</span>
                      <span className="text-sm font-bold">{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-12">{job.description}</p>
                  
                  <div className="text-center text-xs text-blue-500 font-bold">
                    Hover to see more →
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-[2.5rem] p-8 shadow-sm text-white overflow-y-auto"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', maxHeight: '24rem' }}
                >
                  <h4 className="font-bold text-lg mb-3">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-yellow-200 font-bold flex-shrink-0">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-bold text-lg mb-3">Perks:</h4>
                  <ul className="space-y-1">
                    {job.perks.map((perk, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-yellow-200 flex-shrink-0">•</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg">
            View All Positions & Apply
          </button>
        </div>
      </div>

      {/* CULTURE SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-green-100 to-cyan-100 rounded-[3rem] p-12 md:p-16 border border-green-300">
          <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">We Believe In:</h3>
              <ul className="space-y-3">
                {[
                  'Making a real impact on society',
                  'Diversity and inclusion',
                  'Continuous learning and growth',
                  'Work-life balance',
                  'Transparent communication',
                  'Celebrating wins together'
                ].map((belief, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="font-bold">{belief}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Team Perks</h3>
              <ul className="space-y-3">
                {[
                  '🏥 Comprehensive health insurance',
                  '🎓 Learning & development budget',
                  '🏠 Remote work flexibility',
                  '🎉 Team outings & events',
                  '📱 Latest tech & tools',
                  '🚀 Career growth opportunities'
                ].map((perk, i) => (
                  <li key={i} className="text-slate-700 font-bold">{perk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join the WayloShare waitlist and be part of our team when we launch
          </p>
          <Link to="/" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
