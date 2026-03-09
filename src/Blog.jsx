import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight, Calendar, User, Search, ChevronRight, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Blog() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const blogPosts = [
    {
      id: 1,
      title: "5 Ways Carpooling Saves You Money This Year",
      excerpt: "Discover how sharing rides can cut your commute costs by up to 75% and help you save for your dreams.",
      category: "Money Tips",
      author: "Priya Sharma",
      date: "Mar 5, 2026",
      image: "bg-gradient-to-br from-[#00BCD4] to-[#1976D2]",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Safety First: Our Verification Process Explained",
      excerpt: "Learn how we ensure every member is verified and trusted. Your safety is our top priority.",
      category: "Safety",
      author: "Arjun Mehta",
      date: "Mar 3, 2026",
      image: "bg-gradient-to-br from-[#4CAF50] to-[#00BCD4]",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Meet Our Community: Stories from Real Riders",
      excerpt: "Inspiring stories from carpoolers who've made new friends, saved money, and changed their commute.",
      category: "Community",
      author: "Aisha Patel",
      date: "Feb 28, 2026",
      image: "bg-gradient-to-br from-[#7C4DFF] to-[#1976D2]",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Eco-Friendly Commuting: Your Impact Matters",
      excerpt: "Every shared ride removes a car from the road. See how carpooling is making Indian cities greener.",
      category: "Environment",
      author: "Rahul T.",
      date: "Feb 25, 2026",
      image: "bg-gradient-to-br from-[#4CAF50] to-[#7C4DFF]",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Ladies-Only Rides: Empowering Women Commuters",
      excerpt: "How our women-focused ride option is creating safer, more comfortable commuting experiences.",
      category: "Women Safety",
      author: "Priya Sharma",
      date: "Feb 20, 2026",
      image: "bg-gradient-to-br from-[#F44336] to-[#7C4DFF]",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Intercity Carpooling: Travel Smarter, Not Harder",
      excerpt: "Tips and tricks for making the most of long-distance carpooling between major Indian cities.",
      category: "Travel",
      author: "Arjun Mehta",
      date: "Feb 18, 2026",
      image: "bg-gradient-to-br from-[#1976D2] to-[#00BCD4]",
      readTime: "7 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-purple-50 font-sans text-slate-800 flex flex-col items-center overflow-x-hidden pb-12 md:pb-20">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
            Wayloshare <span className="text-yellow-200">Stories</span>
          </h1>
          <p className="text-lg text-white/95 max-w-2xl mx-auto mb-8">
            Tips, stories, and insights from our community of smart commuters
          </p>
          
          {/* SEARCH BAR */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-full p-4 flex items-center gap-3 backdrop-blur-md border border-white/30">
              <Search size={24} className="text-white/70" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-white/70 font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="w-full max-w-6xl mb-12 px-4">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                {/* IMAGE */}
                <div className={`h-48 ${post.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#1976D2] bg-[#1976D2]/10 px-3 py-1 rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-[#1976D2] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* META */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#1976D2]">{post.readTime}</span>
                  </div>

                  {/* AUTHOR */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-[#1976D2] flex items-center justify-center text-white text-xs font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                </div>

                {/* READ MORE */}
                <div className="px-6 pb-6">
                  <button className="w-full bg-[#1976D2]/10 text-[#1976D2] py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#1976D2] hover:text-white transition-all">
                    Read Article
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-500 font-bold">No articles found matching your search.</p>
          </div>
        )}
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="w-full max-w-6xl mb-12 px-4">
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-4">Stay Updated</h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Get the latest carpooling tips and community stories delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/20 border border-white/40 rounded-full px-6 py-3 text-white placeholder-white/70 outline-none focus:border-white/70 transition-all"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-black hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
