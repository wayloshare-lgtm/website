import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiClock, HiExclamationCircle, HiCheckCircle, HiQuestionMarkCircle } from 'react-icons/hi';

export default function CancellationPolicy() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const policies = [
    {
      title: "Passenger Cancellation Policy",
      icon: "🎫",
      sections: [
        {
          heading: "Before Trip Confirmation",
          content: "Cancel for free with full refund. No charges applied."
        },
        {
          heading: "After Trip Confirmed (0-5 minutes)",
          content: "₹50 cancellation fee deducted. Remaining amount refunded within 24 hours."
        },
        {
          heading: "After Trip Confirmed (5-15 minutes)",
          content: "₹100 cancellation fee deducted. Remaining amount refunded within 24 hours."
        },
        {
          heading: "After Trip Starts",
          content: "₹200 cancellation fee or 50% of trip fare (whichever is higher). Remaining refunded within 24 hours."
        },
        {
          heading: "No-Show (Not Cancelled)",
          content: "Full trip fare charged. No refund issued."
        }
      ]
    },
    {
      title: "Trip Organizer Cancellation Policy",
      icon: "🚙",
      sections: [
        {
          heading: "Before Trip Starts",
          content: "Cancel free. No penalty. Passengers get full refund."
        },
        {
          heading: "After Trip Starts (0-5 minutes)",
          content: "₹100 penalty charged. Passengers get full refund."
        },
        {
          heading: "After Trip Starts (5+ minutes)",
          content: "₹200 penalty charged. Passengers get full refund + ₹50 credit."
        },
        {
          heading: "Multiple Cancellations",
          content: "3+ cancellations in 7 days: Account suspended for 24 hours."
        }
      ]
    }
  ];

  const refundFaqs = [
    {
      question: "How long does a refund take?",
      answer: "Refunds are processed within 24 hours of cancellation. However, it may take 2-3 business days for the amount to appear in your bank account depending on your bank."
    },
    {
      question: "Can I get a refund for a completed trip?",
      answer: "Refunds for completed trips are only issued in case of service issues, overcharging, or technical errors. Contact our support team with proof."
    },
    {
      question: "What if I cancel due to safety concerns?",
      answer: "If you cancel due to safety concerns or other legitimate reasons, you get a full refund regardless of timing. Report the incident to our safety team immediately."
    },
    {
      question: "Are cancellation fees refundable?",
      answer: "Cancellation fees are non-refundable. However, if we find the cancellation was due to our system error, we'll refund the fee."
    },
    {
      question: "What about shared trip cancellations?",
      answer: "For shared trips with multiple passengers, each passenger's cancellation is processed individually. Cancellation fees apply per passenger based on timing."
    },
    {
      question: "Can I cancel and rebook immediately?",
      answer: "Yes, you can cancel and rebook. However, if you cancel multiple times within short intervals, you may face temporary booking restrictions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-20">
      {/* NAVBAR */}
      <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm flex items-center justify-between my-6 border border-blue-200 z-50 mx-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/Applauncher.svg" alt="Wayloshare" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-slate-900 tracking-tight text-xl">wayloshare</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter relative z-10">
            Cancellation & Refund Policy
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto relative z-10">
            Clear, transparent policies for cancellations and refunds. We believe in fairness for all carpoolers.
          </p>
        </div>
      </div>

      {/* POLICIES SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] border border-blue-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-8 text-white">
                <div className="text-5xl mb-3">{policy.icon}</div>
                <h2 className="text-3xl font-black">{policy.title}</h2>
              </div>
              
              <div className="p-8 space-y-6">
                {policy.sections.map((section, i) => (
                  <div key={i} className="border-l-4 border-blue-400 pl-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{section.heading}</h3>
                    <p className="text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KEY POINTS */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Key Points to Remember</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <HiClock size={32} className="text-blue-500" />,
              title: "Timing Matters",
              desc: "Cancellation fees depend on when you cancel relative to trip confirmation and start time."
            },
            {
              icon: <span className="text-4xl">₹</span>,
              title: "Transparent Pricing",
              desc: "All fees are clearly displayed before you confirm cancellation. No hidden charges."
            },
            {
              icon: <HiExclamationCircle size={32} className="text-orange-500" />,
              title: "Safety First",
              desc: "Safety-related cancellations get full refunds. Your safety is our priority."
            },
            {
              icon: <HiCheckCircle size={32} className="text-purple-500" />,
              title: "Fast Refunds",
              desc: "Refunds processed within 24 hours. Bank transfer may take 2-3 business days."
            },
            {
              icon: <HiQuestionMarkCircle size={32} className="text-pink-500" />,
              title: "Dispute Resolution",
              desc: "Disagree with a charge? Contact support within 7 days with proof for review."
            },
            {
              icon: <HiExclamationCircle size={32} className="text-red-500" />,
              title: "Repeated Cancellations",
              desc: "Frequent cancellations may result in temporary account restrictions."
            }
          ].map((point, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all">
              <div className="mb-4">{point.icon}</div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {refundFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-black mb-6">Still Have Questions?</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us anytime for clarification on cancellations and refunds.
          </p>
          <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-black inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
            Contact Support
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-6xl bg-gradient-to-r from-blue-200 to-cyan-200 rounded-[3rem] p-10 md:p-16 text-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 mx-4 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/Applauncher.svg" alt="Wayloshare" className="w-8 h-8 rounded-lg" />
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">wayloshare</span>
          </div>
          <p className="text-slate-700 text-sm italic max-w-xs leading-relaxed">"Safar khoobsurat hai, humsafar banaye ise." <br/> Built for India, by Indians.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <button className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-10 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-blue-300/30">
            Get App Now
          </button>
          <div className="flex gap-8 text-[10px] text-slate-700 font-bold uppercase tracking-widest flex-wrap justify-center md:justify-end">
            <Link to="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
            <Link to="/safety" className="hover:text-blue-600 transition-colors">Safety Hub</Link>
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/cancellation" className="text-blue-600 hover:text-blue-700 transition-colors">Cancellation</Link>
            <Link to="/community-guidelines" className="text-blue-600 hover:text-blue-700 transition-colors">Guidelines</Link>
            <Link to="/careers" className="text-blue-600 hover:text-blue-700 transition-colors">Careers</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
