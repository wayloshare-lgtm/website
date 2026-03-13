import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiUsers, HiHeart, HiShieldCheck, HiExclamationCircle, HiCheckCircle, HiSparkles } from 'react-icons/hi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function CommunityGuidelines() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const guidelines = [
    {
      title: "Respect & Courtesy",
      icon: "🤝",
      rules: [
        "Treat all carpoolers with respect and kindness",
        "Be punctual - arrive on time for pickups and drop-offs",
        "Maintain a clean and pleasant demeanor",
        "Avoid offensive language or behavior",
        "Respect personal space and boundaries",
        "No discrimination based on caste, religion, gender, or background"
      ]
    },
    {
      title: "Safety & Security",
      icon: "🛡️",
      rules: [
        "Share accurate personal information during registration",
        "Verify trip details before confirming",
        "Never share your password or OTP with anyone",
        "Report suspicious activity immediately",
        "Follow traffic rules and safe driving practices",
        "Keep valuables secure and don't leave items unattended"
      ]
    },
    {
      title: "Communication",
      icon: "💬",
      rules: [
        "Communicate clearly about trip details and changes",
        "Respond to messages promptly and professionally",
        "Use the app's messaging system for all communication",
        "Avoid sharing personal contact details unnecessarily",
        "Be honest about your location and availability",
        "Inform others of any delays as soon as possible"
      ]
    },
    {
      title: "Vehicle & Hygiene",
      icon: "🚗",
      rules: [
        "Keep your vehicle clean and well-maintained",
        "Ensure proper ventilation in the vehicle",
        "No eating or drinking inside the vehicle (except water)",
        "No smoking or vaping inside the vehicle",
        "Respect the vehicle owner's rules and preferences",
        "Report any damage or issues immediately"
      ]
    },
    {
      title: "Conduct & Behavior",
      icon: "✨",
      rules: [
        "No loud music or excessive noise",
        "Keep phone usage to a minimum during trips",
        "No unauthorized photography or recording",
        "Respect the vehicle's temperature and comfort settings",
        "Don't invite unauthorized passengers",
        "Follow all local laws and regulations"
      ]
    },
    {
      title: "Accountability",
      icon: "📋",
      rules: [
        "Rate and review trips honestly and fairly",
        "Provide constructive feedback to improve the community",
        "Accept responsibility for your actions",
        "Cooperate with Wayloshare support team",
        "Don't engage in fraudulent activities",
        "Report violations of community guidelines"
      ]
    }
  ];

  const faqs = [
    {
      question: "What happens if I violate community guidelines?",
      answer: "Violations are taken seriously. Depending on severity, actions may include warnings, temporary suspension, or permanent removal from the platform. Repeated violations will result in account termination."
    },
    {
      question: "Can I report another user for guideline violations?",
      answer: "Yes, absolutely. Use the 'Report' feature in the app to report any violations. Provide details and evidence if possible. Our team will investigate and take appropriate action."
    },
    {
      question: "What if I disagree with a guideline?",
      answer: "We welcome feedback on our guidelines. Contact our community team at community@wayloshare.com with your suggestions. We continuously review and update guidelines based on community input."
    },
    {
      question: "Are guidelines the same for all users?",
      answer: "Yes, all community guidelines apply equally to everyone on Wayloshare - whether you're offering a trip or booking a spot. Fairness and equality are core to our community."
    },
    {
      question: "What if someone harasses me?",
      answer: "Harassment is strictly prohibited. Report it immediately using the in-app reporting feature. Our safety team will investigate and take action. You can also contact safety@wayloshare.com for urgent concerns."
    },
    {
      question: "Can guidelines be updated?",
      answer: "Yes, we may update guidelines to ensure community safety and improve experience. We'll notify users of significant changes. Continued use of the platform means acceptance of updated guidelines."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter relative z-10">
            Community <span className="text-yellow-200">Guidelines</span>
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto relative z-10">
            Our community thrives on respect, safety, and mutual trust. These guidelines help us maintain a positive environment for everyone.
          </p>
        </div>
      </div>

      {/* GUIDELINES GRID */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {guidelines.map((guideline, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-blue-200 shadow-sm overflow-hidden hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-green-400 to-teal-400 p-8 text-white">
                <div className="text-5xl mb-3">{guideline.icon}</div>
                <h2 className="text-2xl font-black">{guideline.title}</h2>
              </div>
              
              <div className="p-8 space-y-4">
                {guideline.rules.map((rule, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <HiCheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KEY PRINCIPLES */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Our Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <HiHeart size={32} className="text-red-500" />,
              title: "Respect",
              desc: "We value every member of our community and treat each other with dignity and kindness."
            },
            {
              icon: <HiShieldCheck size={32} className="text-blue-500" />,
              title: "Safety",
              desc: "Everyone's safety and security is our top priority. We maintain strict safety standards."
            },
            {
              icon: <HiUsers size={32} className="text-purple-500" />,
              title: "Inclusivity",
              desc: "We welcome everyone regardless of background. Discrimination has no place here."
            },
            {
              icon: <HiSparkles size={32} className="text-yellow-500" />,
              title: "Accountability",
              desc: "We hold ourselves and each other accountable for our actions and words."
            },
            {
              icon: <HiExclamationCircle size={32} className="text-orange-500" />,
              title: "Transparency",
              desc: "We're open about our policies and how we enforce community guidelines."
            },
            {
              icon: <HiCheckCircle size={32} className="text-green-500" />,
              title: "Fairness",
              desc: "We apply guidelines consistently and fairly to all members of our community."
            }
          ].map((principle, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all">
              <div className="mb-4">{principle.icon}</div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">{principle.title}</h3>
              <p className="text-slate-600">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONSEQUENCES */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-[3rem] p-12 md:p-16 border border-red-300">
          <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">Consequences of Violations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { level: "Warning", desc: "First minor violation - receive a warning and opportunity to correct behavior" },
              { level: "Temporary Suspension", desc: "Repeated violations - account suspended for 7-30 days" },
              { level: "Restricted Access", desc: "Serious violations - limited access to certain features" },
              { level: "Permanent Ban", desc: "Severe or repeated violations - permanent removal from platform" }
            ].map((consequence, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-red-200">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{consequence.level}</h3>
                <p className="text-slate-600">{consequence.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[2rem] border border-blue-200 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-bold text-lg text-slate-900 text-left">{faq.question}</h3>
                <HiChevronDown
                  size={24}
                  className={`text-blue-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 border-t border-blue-200 pt-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Questions About Guidelines?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Our community team is here to help. Reach out with any questions or concerns about our guidelines.
          </p>
          <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-black inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
            Contact Community Team
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
