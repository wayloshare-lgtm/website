import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import App from './App';
import Blog from './Blog';
import Safety from './Safety';
import Privacy from './Privacy';
import Contact from './Contact';
import HowItWorks from './HowItWorks';
import HowItWorksRider from './HowItWorksRider';
import HowItWorksDriver from './HowItWorksDriver';
import Careers from './Careers';
import CancellationPolicy from './CancellationPolicy';
import CommunityGuidelines from './CommunityGuidelines';

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/how-it-works/rider" element={<HowItWorksRider />} />
        <Route path="/how-it-works/driver" element={<HowItWorksDriver />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cancellation" element={<CancellationPolicy />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
      </Routes>
    </Router>
  );
}
