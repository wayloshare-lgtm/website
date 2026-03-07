# Wayloshare - Carpooling Platform

A modern, user-friendly carpooling platform built with React and Vite. Wayloshare connects people who share similar commute routes, helping them save money, reduce carbon emissions, and build community.

## 🚗 About Wayloshare

Wayloshare is a carpooling solution designed for India, making shared commuting accessible, safe, and affordable. Whether you're looking to offset commute costs or connect with fellow travelers, Wayloshare makes it simple.

**Tagline:** "Safar khoobsurat hai, humsafar banaye ise." (The journey is beautiful, make it with companions.)

## ✨ Features

### Core Features
- **Find & Offer Rides** - Browse available trips or post your own journey
- **Smart Matching** - Connect with compatible carpoolers on your route
- **Safety First** - Verified profiles, ratings, and safety guidelines
- **Cost Calculator** - See how much you can save monthly
- **Real-time Updates** - Live activity feed showing active trips

### Pages & Sections
- **Home** - Landing page with search, calculator, and trip showcase
- **How It Works** - Detailed guides for passengers and trip organizers
- **Safety Hub** - Safety features, verification process, and guidelines
- **Community Guidelines** - Rules and expectations for all users
- **Cancellation & Refund Policy** - Clear policies for trip cancellations
- **Privacy Policy** - Data protection and user rights
- **Careers** - Join our team (with 3D flip animations on job cards)
- **Blog** - Articles and tips about carpooling
- **Contact** - Get in touch with our support team

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons (Heroicons)
- **Routing:** React Router v6
- **Package Manager:** npm

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/wayloshare-lgtm/website.git
   cd website/wayloshare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5174`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

### Color Palette
- **Primary:** Light Blue (#3b82f6)
- **Secondary:** Cyan (#06b6d4)
- **Accent:** Yellow (#fbbf24), Purple (#a855f7), Pink (#ec4899)
- **Background:** Gradient from blue-50 to purple-50

### Typography
- **Font:** System fonts (sans-serif)
- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, slate-700

### Components
- Rounded corners (2.5rem - 3rem for major sections)
- Smooth transitions and hover effects
- Responsive grid layouts
- Glassmorphism effects (backdrop blur)

## 📱 Responsive Design

- **Mobile First** - Optimized for all screen sizes
- **Breakpoints:** md (768px) for tablet and desktop
- **Flexible Layouts** - Grid and flex-based responsive design

## 🔄 Key Features Explained

### Savings Calculator
- Adjustable distance slider (5-100 km)
- Real-time calculation of monthly savings
- Based on ₹15 per km rate

### 3D Flip Animations
- Job cards on Careers page flip on hover
- Smooth CSS 3D transforms
- Shows requirements and perks on flip

### Auto Scroll to Top
- Automatic scroll to top when navigating between pages
- Smooth user experience across all routes

### Consistent Navigation
- Minimal headers on all pages
- Unified footer with all important links
- Footer-only access for policy pages

## 📄 Pages Overview

| Page | Route | Access | Purpose |
|------|-------|--------|---------|
| Home | `/` | Header | Main landing page |
| Blog | `/blogs` | Footer | Articles and tips |
| Safety Hub | `/safety` | Footer | Safety information |
| Privacy | `/privacy` | Footer | Data privacy policy |
| Contact | `/contact` | Footer | Support & inquiries |
| How It Works | `/how-it-works` | Home CTA | Usage guide |
| Careers | `/careers` | Footer | Job opportunities |
| Cancellation | `/cancellation` | Footer | Refund policies |
| Guidelines | `/community-guidelines` | Footer | Community rules |

## 🚀 Deployment

### Deploy on Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the GitHub repository
4. Click Deploy
5. Your site goes live instantly!

### Environment Variables
No environment variables required for basic deployment.

## 📊 Project Structure

```
wayloshare/
├── src/
│   ├── App.jsx                 # Main landing page
│   ├── AppRouter.jsx           # Route configuration
│   ├── ScrollToTop.jsx         # Auto scroll component
│   ├── Blog.jsx                # Blog page
│   ├── Safety.jsx              # Safety hub
│   ├── Privacy.jsx             # Privacy policy
│   ├── Contact.jsx             # Contact page
│   ├── HowItWorks.jsx          # How it works guide
│   ├── Careers.jsx             # Careers page
│   ├── CancellationPolicy.jsx  # Cancellation policy
│   ├── CommunityGuidelines.jsx # Community guidelines
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App styles
├── public/
│   ├── Applauncher.svg         # Brand logo
│   ├── assets/svg/             # SVG assets
│   └── videos/                 # Demo videos
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Metrics

- **Pages:** 9 fully functional pages
- **Components:** Reusable, modular React components
- **Animations:** Smooth transitions, 3D effects, hover states
- **Performance:** Optimized with Vite
- **Accessibility:** Semantic HTML, proper contrast ratios

## 🔐 Security & Privacy

- No sensitive data stored locally
- HTTPS enforced on production
- Privacy policy clearly outlined
- User data protection guidelines
- Community guidelines for safe interactions

## 📞 Support

For issues, questions, or suggestions:
- **Email:** support@wayloshare.com
- **Contact Page:** Available in the app
- **GitHub Issues:** Report bugs on GitHub

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons from React Icons (Heroicons)
- Inspired by modern carpooling platforms

---

**Design and Developed by Arush**

*Making commutes better, one ride at a time.*
