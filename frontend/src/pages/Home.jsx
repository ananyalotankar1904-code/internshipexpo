import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { companiesApi } from '../api/client';
import Carousel from '../components/Carousel';
import { FiBriefcase, FiUsers, FiFileText, FiUser } from 'react-icons/fi';
import CompanyDetailModal from '../components/CompanyDetailModal';
import tedxLogo from '../tedx-logo.png';

const expoSteps = [
  {
    title: '01 Direct Hiring',
    description: 'Fast-track interview pipelines for summer & winter cohorts.',
    id: 1,
    icon: <FiBriefcase className="carousel-icon" />
  },
  {
    title: '02 Exclusive Access',
    description: 'Meet founders, engineering leads, and talent strategists.',
    id: 2,
    icon: <FiUsers className="carousel-icon" />
  },
  {
    title: '03 Portfolio Reviews',
    description: 'Instant critique and resume feedback from seasoned pros.',
    id: 3,
    icon: <FiFileText className="carousel-icon" />
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    companiesApi.getAll()
      .then(res => setCompanies(res.data.companies))
      .catch(console.error);
  }, []);

  const handleOpenModal = (company) => {
    setSelectedCompany(company);
    setIsCompanyModalOpen(true);
  };

  return (
    <div className="bg-transparent text-text-cream font-body antialiased selection:bg-primary selection:text-text-cream w-full max-w-[1440px] mx-auto min-h-screen relative">
      <CompanyDetailModal isOpen={isCompanyModalOpen} onClose={() => setIsCompanyModalOpen(false)} company={selectedCompany} />
      {/* The converted HTML content */}
      
{/* ========================================================================= */}
{/* STICKY TOP NAVBAR */}
{/* ========================================================================= */}
<header className="sticky top-0 z-50 w-full bg-black/75 backdrop-blur-md border-b border-border-hairline transition-all duration-300">
<div className="w-full px-4 md:px-10 h-20 flex items-center justify-between">
{/* TEDxCRCE Brand Logo */}
<a className="flex items-center gap-2 md:gap-3 group" href="#hero">
<div className="flex items-center tracking-tighter text-lg md:text-xl font-display font-bold text-text-cream">
<img src={tedxLogo} alt="TEDx" className="h-10 md:h-12 object-contain mr-0.5 -mt-1" /><span>CRCE</span>
</div>
<div className="hidden sm:block h-4 w-[1px] bg-text-cream/20"></div>
<span className="hidden sm:inline font-sans text-xs tracking-widest text-text-cream/60 uppercase font-medium">Internship Expo '26</span>
</a>
{/* Navigation Links (Center) */}
<nav className="hidden lg:flex items-center space-x-9 font-sans text-sm font-medium tracking-wide">
<a className="text-text-cream/80 hover:text-text-cream transition-colors duration-200" href="#hero">Home</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#about">About</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#companies">Companies</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#sponsors">Sponsors</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#event-info">Contact &amp; Info</a>
</nav>
{/* CTA Register Button (Far Right) */}
<div className="flex items-center gap-3">
<Link className="text-text-cream/70 hover:text-text-cream font-sans font-medium text-xs px-3 py-1.5 border border-text-cream/20 hover:border-text-cream/50 rounded-md transition-all duration-200 flex items-center gap-1.5" to="/admin/login">
  <FiUser className="w-3.5 h-3.5" /> Admin
</Link>
<Link className="bg-primary hover:bg-primary-hover text-text-cream font-sans font-semibold text-sm px-6 py-2.5 rounded-md transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]" to="/register">
          Register
        </Link>
</div>
</div>
</header>
{/* ========================================================================= */}
{/* SECTION 1 — HERO SECTION (Full Viewport Height with Bayer Dither Shader) */}
{/* ========================================================================= */}
<section className="relative w-full h-[900px] flex flex-col justify-between overflow-hidden border-b border-border-hairline" id="hero">
{/* Procedural Bayer Ordered-Dither Shader Canvas Layer (z-index 0) */}
<div className="absolute inset-0 z-0 pointer-events-none">

</div>
{/* Scrim Gradient Overlay (Solid black left fade to clear right dither) */}
<div className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-transparent via-55% to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-transparent to-transparent pointer-events-none"></div>
{/* Hero Content Container (z-index 10) */}
<div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-10 md:pt-0 flex-1 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
{/* Left Column: Typographic Statements & CTAs */}
<div className="max-w-[760px] flex flex-col items-start space-y-7">
{/* Eyebrow Tag */}
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-raised/80 border border-border-hairline">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-peach-accent font-sans text-xs font-semibold tracking-[0.2em] uppercase">
            IDEAS TODAY. CAREERS TOMORROW.
          </span>
</div>
{/* Oversized Clash Display Headline */}
<h1 className="font-display font-bold text-5xl md:text-[72px] leading-[1.1] md:leading-[0.96] tracking-tight uppercase text-text-cream">
          TEDxCRCE<br/>
<span className="text-primary inline-block relative">
            INTERNSHIP EXPO
            {/* Decorative Thin Underline Graphic */}
<svg className="absolute -bottom-3 left-0 w-full h-3 text-secondary" fill="none" viewBox="0 0 340 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7C80 2 240 1 338 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    </span><br/>
    2026
  </h1>
{/* One-line subtext */}
<p className="font-body text-text-cream/80 text-lg leading-relaxed max-w-[620px] pt-2">
          A platform for FCRCE students to explore opportunities, connect with leading organizations and take the next step towards their future.
        </p>
{/* CTAs with Hand-Drawn Arrow */}
<div className="pt-4 flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative w-full sm:w-auto">
<a className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-text-cream font-sans font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-md transition-all duration-200 shadow-xl shadow-primary/30 flex items-center justify-center gap-3 group" href="#companies">
<span>Explore Opportunities</span>
<svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</a>
<Link className="w-full sm:w-auto text-center border border-text-cream/30 hover:border-text-cream text-text-cream font-sans font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-md transition-all duration-200 bg-transparent/40 hover:bg-surface-raised" to="/register">
            Register Now
          </Link>
{/* Creative Hand-drawn Arrow pointing to CTA */}
<div className="absolute -right-36 -top-5 hidden xl:flex flex-col items-center pointer-events-none">
<span className="font-display text-peach-accent text-xs tracking-wider uppercase rotate-6 mb-1">Secure your spot</span>
<svg className="w-16 h-12 text-peach-accent transform -rotate-12" fill="none" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
<path d="M48 4C38 18 20 28 8 32M8 32L18 24M8 32L16 38" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
</svg>
</div>
</div>
</div>
{/* Right Column: Hero Visual Anchor & Taped Sticky-Note Badge */}
<div className="relative flex flex-col items-center md:items-end justify-center pr-0 md:pr-6 mt-10 md:mt-0">
{/* Pinned Note Badge */}
<div className="relative bg-red-50 text-red-950 p-6 rounded shadow-[2px_4px_16px_rgba(0,0,0,0.5)] transform rotate-3 hover:rotate-1 transition-transform duration-300 w-72 border border-red-200 group cursor-default backdrop-blur-none">
{/* Push Pin effect */}
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-red-600 shadow-[0_4px_6px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-red-800 z-10 flex items-center justify-center">
  <div className="w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px] -mt-1 -ml-1"></div>
</div>
{/* Pin shadow on paper */}
<div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-black/40 rounded-full blur-[2px]"></div>

<div className="flex items-center justify-center gap-2 mb-4 border-b border-red-900/10 pb-3">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
<span className="font-sans text-[10px] font-bold tracking-widest uppercase text-red-900/60">CONFIRMED DATE</span>
</div>

<div className="flex flex-col items-center justify-center py-2">
  <p className="font-display font-black text-6xl tracking-tighter text-black">
    3rd OCT
  </p>
  <p className="font-display font-bold text-xl tracking-[0.3em] text-red-700 mt-1 pl-2">
    2026
  </p>
</div>

<div className="mt-5 pt-3 border-t border-red-900/10 flex flex-col items-center gap-1.5 text-[10px] font-sans font-bold uppercase text-red-900/80 text-center tracking-wider">
  <span>FCRCE · Bandra, Mumbai</span>
  <span className="text-red-700/90 font-semibold">Auditorium @ 9:00 AM IST</span>
</div>
</div>
{/* Fine Reticle / Coordinates Label */}
<div className="mt-8 font-mono text-[11px] text-text-cream/40 tracking-widest uppercase flex items-center gap-3">
<span className="inline-block w-2 h-2 border border-wave-crimson bg-primary/40"></span>
<span>19.0448° N, 72.8205° E · CRCE_VENUE</span>
</div>
</div>
</div>
{/* Smoked Glass Stat Strip (Bottom of Hero) */}
<div className="relative z-10 w-full px-4 md:px-12 pb-6">
<div className="smoked-glass rounded-lg py-5 px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border-hairline shadow-2xl">
<div className="md:px-6 flex flex-col">
<span className="font-display font-bold text-3xl text-text-cream">50+</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Companies Participating</span>
</div>
<div className="md:px-6 flex flex-col border-l border-border-hairline md:border-none pl-4 md:pl-0">
<span className="font-display font-bold text-2xl md:text-3xl text-text-cream">200+</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Stipend Opportunities</span>
</div>
<div className="md:px-6 flex flex-col">
<span className="font-display font-bold text-2xl md:text-3xl text-primary">1</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Powerful Transformative Day</span>
</div>
<div className="md:px-6 flex flex-col justify-center border-l border-border-hairline md:border-none pl-4 md:pl-0">
<div className="flex items-center gap-2 text-peach-accent text-xs font-mono font-medium tracking-tight">
<span>Students</span>
<span className="text-text-cream/30">·</span>
<span>Ideas</span>
<span className="text-text-cream/30">·</span>
<span>Networks</span>
</div>
<span className="font-display font-semibold text-sm text-text-cream/90 mt-1">What's Next For You.</span>
</div>
</div>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 2 — ABOUT SECTION (Solid #000000, Dither Fades Out) */}
{/* ========================================================================= */}
<section className="w-full bg-transparent py-20 md:py-28 px-6 md:px-12 border-b border-border-hairline relative" id="about">
<div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
{/* Left Column: About Narrative */}
<div className="col-span-1 md:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2">
<span className="h-[2px] w-6 bg-secondary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Context &amp; Purpose</span>
</div>
<h2 className="font-display font-bold text-5xl uppercase tracking-tight text-text-cream">
          What is the <span className="text-primary">Expo?</span>
</h2>
<div className="space-y-5 text-text-cream/80 text-lg leading-relaxed font-body">
<p>
  The <strong className="text-text-cream font-semibold">TEDxCRCE Internship Expo 2026</strong> directly connects ambitious students with leading organizations. Skip the traditional application process with face-to-face recruiter conversations, rapid resume reviews, and on-the-spot interview shortlists to kickstart your career.
</p>
</div>
</div>
{/* Right Column: Carousel for the 3 steps */}
<div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center w-full">
<div className="w-full max-w-[400px] flex flex-col items-center">
  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
    <Carousel
      items={expoSteps}
      baseWidth={320}
      autoplay={true}
      autoplayDelay={3000}
      pauseOnHover={true}
      loop={true}
      round={false}
    />
  </div>
  <p className="mt-6 font-mono text-[10px] text-text-cream/50 uppercase tracking-widest text-center">
    Drag the card to view next step <br/>or wait for auto-scroll
  </p>
</div>
</div>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 3 — COMPANIES SECTION (4-Column Grid with Modal Triggers) */}
{/* ========================================================================= */}
<section className="w-full bg-transparent py-28 px-12 border-b border-border-hairline relative" id="companies">
<div className="max-w-[1320px] mx-auto">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="h-[2px] w-6 bg-primary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Career Pathways</span>
</div>
<h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-text-cream break-words">
            Participating <span className="text-primary">Companies</span>
</h2>
</div>
<p className="font-sans text-text-cream/60 text-sm max-w-sm mt-4 md:mt-0 text-left md:text-right">
          Click any company tile to review eligibility criteria, open internship roles, and interview formats.
        </p>
</div>
{/* Dynamic Grid of Logo Cards */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
  {(companies || []).map(company => (
    <div key={company.id} onClick={() => handleOpenModal(company)} className="group cursor-pointer smoked-glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col items-center justify-center aspect-square h-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="w-24 h-24 md:w-[190px] md:h-[190px] flex items-center justify-center relative z-10">
        {company.logoUrl ? (
           <img src={company.logoUrl} alt={company.name} className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
        ) : (
           <span className="font-display font-bold text-4xl text-text-cream/50 group-hover:text-primary transition-colors duration-300">
             {company.name.substring(0, 2).toUpperCase()}
           </span>
        )}
      </div>
      
      {/* Label appearing on hover */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
        <span className="text-[10px] font-mono font-medium text-peach-accent tracking-widest uppercase bg-black/60 px-2 py-1 rounded">View Details</span>
      </div>
    </div>
  ))}
</div>
{/* Footer Note under Grid */}
<div className="mt-10 flex items-center justify-between p-4 rounded bg-surface-raised/60 border border-border-hairline">
<span className="font-mono text-xs text-text-cream/60">
          Showing 12 highlighted partner companies. Complete directory of 50+ firms will be available on physical event badges.
        </span>
<button className="font-sans text-xs font-semibold text-peach-accent hover:text-text-cream flex items-center gap-1">
<span>Filter by Dept</span> <span>↓</span>
</button>
</div>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 4 — SPONSORS SECTION (Cream-tinted grayscale logos, Dither top edge) */}
{/* ========================================================================= */}
<section className="w-full bg-transparent py-16 md:py-24 px-6 md:px-12 border-b border-border-hairline relative" id="sponsors">
{/* Thin Dithered Crimson Edge along top border for visual variety */}
<div className="absolute top-0 inset-x-0 h-1 dither-strip-top"></div>
<div className="max-w-[1320px] mx-auto">
{/* Heading */}
<div className="flex items-center justify-between mb-12">
<div>
<div className="inline-flex items-center gap-2 mb-1">
<span className="h-[2px] w-6 bg-secondary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Institutional Partners</span>
</div>
<h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-text-cream">
            Our <span className="text-primary">Sponsors</span>
</h2>
</div>
<span className="font-mono text-[10px] md:text-xs text-text-cream/40 uppercase">2026 Edition Patrons</span>
</div>
{/* Single-row logo strip on lighter #140A0A smoked-glass band */}
<div className="w-full smoked-glass rounded-lg py-6 md:py-8 px-4 md:px-10 border border-border-hairline">
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
{/* Sponsor 1 */}
<div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer">
<div className="font-display font-bold text-xl tracking-tighter text-text-cream/50 grayscale group-hover:grayscale-0 group-hover:text-primary transition-all">
              AGNILABS
            </div>
<span className="font-mono text-[10px] text-text-cream/40 mt-1 uppercase group-hover:text-peach-accent transition-colors">
              Title Sponsor
            </span>
</div>
{/* Sponsor 2 */}
<div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer">
<div className="font-display font-bold text-xl tracking-tighter text-text-cream/50 grayscale group-hover:grayscale-0 group-hover:text-secondary transition-all">
              BANDRA TECH HUB
            </div>
<span className="font-mono text-[10px] text-text-cream/40 mt-1 uppercase group-hover:text-peach-accent transition-colors">
              Ecosystem Partner
            </span>
</div>
{/* Sponsor 3 */}
<div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer">
<div className="font-display font-bold text-xl tracking-tighter text-text-cream/50 grayscale group-hover:grayscale-0 group-hover:text-text-cream transition-all">
              DEVCOMMUNITY
            </div>
<span className="font-mono text-[10px] text-text-cream/40 mt-1 uppercase group-hover:text-peach-accent transition-colors">
              Student Outreach
            </span>
</div>
</div>
</div>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 5 — EVENT INFO / CONTACT / FOOTER */}
{/* ========================================================================= */}
<section className="w-full bg-transparent pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden" id="event-info">
{/* Subtle dither glow anchor on bottom edge */}
<div className="absolute bottom-0 right-0 w-96 h-96 bg-wave-crimson/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1320px] mx-auto">
{/* 3 Info Blocks on Smoked Glass */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-20">
{/* Block 1: Event Date */}
<div className="smoked-glass rounded-lg p-6 flex flex-col justify-between border border-border-hairline">
<div>
<span className="font-mono text-[10px] text-peach-accent uppercase tracking-widest block mb-1">Calendar Schedule</span>
<h3 className="font-display font-bold text-2xl text-text-cream">3 Oct 2026</h3>
</div>
<div className="pt-4 mt-4 border-t border-border-hairline flex items-center justify-between text-xs text-text-cream/70 font-mono">
<span>Doors Open: 08:30 AM</span>
<span className="text-primary font-bold">Day 01</span>
</div>
</div>
{/* Block 2: Venue */}
<div className="smoked-glass rounded-lg p-6 flex flex-col justify-between border border-border-hairline">
<div>
<span className="font-mono text-[10px] text-peach-accent uppercase tracking-widest block mb-1">Location Campus</span>
<h3 className="font-display font-bold text-2xl text-text-cream">FCRCE, Bandra</h3>
</div>
<div className="pt-4 mt-4 border-t border-border-hairline text-xs text-text-cream/70 font-mono truncate">
            Sam Claude Rd, Bandstand, Mumbai
          </div>
</div>
{/* Block 3: Updates */}
<div className="smoked-glass rounded-lg p-6 flex flex-col justify-between border border-border-hairline">
<div>
<span className="font-mono text-[10px] text-peach-accent uppercase tracking-widest block mb-1">Live Updates</span>
<h3 className="font-display font-bold text-xl text-text-cream">Interview Rooms</h3>
</div>
<div className="pt-4 mt-4 border-t border-border-hairline text-xs text-text-cream/70 font-mono leading-relaxed">
The interview rooms will be posted on the WhatsApp community.
</div>
</div>
</div>
{/* Contact Block & Simple Contact Form */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 bg-surface-solid rounded-xl p-6 md:p-10 border border-border-hairline relative">
{/* Left Contact Info Details */}
<div className="col-span-1 md:col-span-5 flex flex-col justify-start space-y-6">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="h-[2px] w-6 bg-primary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Get In Touch</span>
</div>
<h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-text-cream">
              Queries
</h2>
<p className="font-body text-text-cream/70 text-sm mt-4 leading-relaxed">
              Reach out to our student coordination council or placement cell representatives. We are here to answer booth queries, schedule clearances, and student verification passes.
            </p>
</div>
<div className="space-y-4 font-mono text-xs text-text-cream/80">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-surface-raised border border-border-hairline flex items-center justify-center text-primary">@</span>
<div>
<p className="text-[10px] uppercase text-text-cream/40 font-sans">Official Email</p>
<p className="font-semibold text-text-cream">tedxcrce.expo@gmail.com</p>
</div>
</div>
</div>
<div className="pt-4 border-t border-border-hairline text-xs font-body text-text-cream/50">
            FCRCE Placement Cell · Fr. Agnel Ashram, Bandra West, Mumbai 400050
          </div>
</div>
{/* Right Contact Form */}
<div className="col-span-1 md:col-span-7 pl-0 md:pl-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-border-hairline">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block font-sans text-xs font-medium text-text-cream/80 uppercase tracking-wider mb-2">Your Name</label>
<input className="w-full bg-surface-raised border border-border-hairline focus:border-primary focus:outline-none text-text-cream text-sm px-4 py-3 rounded transition-colors placeholder:text-text-cream/30" placeholder="Aarav Sharma" required="" type="text"/>
</div>
<div>
<label className="block font-sans text-xs font-medium text-text-cream/80 uppercase tracking-wider mb-2">College Roll No / Org</label>
<input className="w-full bg-surface-raised border border-border-hairline focus:border-primary focus:outline-none text-text-cream text-sm px-4 py-3 rounded transition-colors placeholder:text-text-cream/30" placeholder="e.g. 9842 / Recruiter" required="" type="text"/>
</div>
</div>
<div>
<label className="block font-sans text-xs font-medium text-text-cream/80 uppercase tracking-wider mb-2">Email Address</label>
<input className="w-full bg-surface-raised border border-border-hairline focus:border-primary focus:outline-none text-text-cream text-sm px-4 py-3 rounded transition-colors placeholder:text-text-cream/30" placeholder="aarav.crce@gmail.com" required="" type="email"/>
</div>
<div>
<label className="block font-sans text-xs font-medium text-text-cream/80 uppercase tracking-wider mb-2">Inquiry / Message</label>
<textarea className="w-full bg-surface-raised border border-border-hairline focus:border-primary focus:outline-none text-text-cream text-sm px-4 py-3 rounded transition-colors placeholder:text-text-cream/30 resize-none" placeholder="State your query regarding eligibility, resume upload, or recruitment slot..." required="" rows="3"></textarea>
</div>
<button className="w-full bg-primary hover:bg-primary-hover text-text-cream font-sans font-semibold text-sm py-3.5 rounded transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.005]" type="submit">
              Send Message &amp; Register Interest
            </button>
<div className="hidden text-center text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 py-2 rounded" id="formSuccessMessage">
              ✓ Your message has been routed to the TEDxCRCE Coordination Desk.
            </div>
</form>
</div>
</div>
{/* Footer Bar */}
<footer className="mt-16 md:mt-24 pt-8 border-t border-border-hairline relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
{/* Fading Dither Strip along top edge of footer */}
<div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-wave-crimson to-transparent"></div>
{/* Left Logo */}
<div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
<div className="flex items-center tracking-tighter text-lg font-display font-bold text-text-cream">
<img src={tedxLogo} alt="TEDx" className="h-10 object-contain mr-0.5 -mt-1" /><span>CRCE</span>
</div>
<span className="font-mono text-[10px] md:text-[11px] text-text-cream/40 max-w-[250px] md:max-w-none">
            © 2026 This independent TEDx event is operated under license from TED.
          </span>
</div>
{/* Quick Links */}
<div className="flex flex-wrap items-center justify-center gap-4 md:space-x-6 font-sans text-xs text-text-cream/60">
<a className="hover:text-text-cream transition-colors" href="#hero">Privacy Policy</a>
<a className="hover:text-text-cream transition-colors" href="#about">Terms of Entry</a>
<a className="hover:text-text-cream transition-colors" href="#companies">Code of Conduct</a>
<a className="hover:text-text-cream transition-colors" href="#event-info">Press &amp; Media</a>
<Link className="hover:text-text-cream transition-colors flex items-center gap-1" to="/admin/login"><FiUser /> Admin Login</Link>
</div>
{/* Cream Social Icons */}
<div className="flex items-center space-x-4">
<a className="w-8 h-8 rounded bg-surface-raised border border-border-hairline flex items-center justify-center text-text-cream/70 hover:text-text-cream hover:border-text-cream transition-all" href="#event-info">
<span className="text-xs font-mono font-bold">𝕏</span>
</a>
<a className="w-8 h-8 rounded bg-surface-raised border border-border-hairline flex items-center justify-center text-text-cream/70 hover:text-text-cream hover:border-text-cream transition-all" href="#event-info">
<span className="text-xs font-mono font-bold">in</span>
</a>
<a className="w-8 h-8 rounded bg-surface-raised border border-border-hairline flex items-center justify-center text-text-cream/70 hover:text-text-cream hover:border-text-cream transition-all" href="#event-info">
<span className="text-xs font-mono font-bold">ig</span>
</a>
</div>
</footer>
</div>
</section>
{/* ========================================================================= */}
{/* MODAL: COMPANY DETAIL MODAL (Overlay) */}
{/* ========================================================================= */}
<div className="fixed inset-0 z-50 modal-backdrop hidden items-center justify-center p-6" id="companyModal">
<div className="bg-surface-solid border border-border-subtle rounded-xl max-w-2xl w-full p-8 shadow-2xl relative animate-fade-in text-text-cream">
{/* Close Button */}
<button className="absolute top-6 right-6 text-text-cream/50 hover:text-text-cream transition-colors font-mono text-xl">
        ✕
      </button>
{/* Modal Header */}
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-lg bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-2xl text-primary" id="modalLogoInitials">
          RZ
        </div>
<div>
<h3 className="font-display font-bold text-3xl uppercase tracking-tight text-text-cream" id="modalCompanyName">
            Razorpay
          </h3>
<p className="font-sans text-sm text-peach-accent" id="modalCompanyDomain">
            Fintech &amp; Payments
          </p>
</div>
</div>
{/* Detail Grid */}
<div className="space-y-4 text-sm font-body border-t border-b border-border-hairline py-5 my-4">
<div>
<span className="font-mono text-xs uppercase text-text-cream/40 block mb-1">About Organization</span>
<p className="text-text-cream/80 text-sm leading-relaxed" id="modalCompanyDesc">
            Company description will populate here.
          </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="p-3 bg-surface-raised rounded border border-border-hairline">
<span className="font-mono text-[10px] uppercase text-text-cream/40 block">Open Roles</span>
<p className="font-semibold text-text-cream text-xs mt-0.5" id="modalCompanyRoles">Full Stack, Mobile</p>
</div>
<div className="p-3 bg-surface-raised rounded border border-border-hairline">
<span className="font-mono text-[10px] uppercase text-text-cream/40 block">Stipend Range</span>
<p className="font-semibold text-emerald-400 text-xs mt-0.5" id="modalCompanyStipend">₹50,000 / month</p>
</div>
<div className="p-3 bg-surface-raised rounded border border-border-hairline">
<span className="font-mono text-[10px] uppercase text-text-cream/40 block">Location</span>
<p className="font-semibold text-text-cream text-xs mt-0.5" id="modalCompanyLocation">Mumbai / Hybrid</p>
</div>
<div className="p-3 bg-surface-raised rounded border border-border-hairline">
<span className="font-mono text-[10px] uppercase text-text-cream/40 block">Eligibility</span>
<p className="font-semibold text-text-cream text-xs mt-0.5" id="modalCompanyEligibility">Min 7.5 CGPA</p>
</div>
</div>
</div>
{/* Action Buttons */}
<div className="flex items-center justify-end gap-3 mt-6">
<button className="px-5 py-2.5 rounded border border-border-hairline text-text-cream/80 hover:text-text-cream hover:bg-surface-raised font-sans text-sm">
          Close
        </button>
<button className="px-6 py-2.5 rounded bg-primary hover:bg-primary-hover text-text-cream font-sans font-semibold text-sm shadow-lg shadow-primary/20">
          Book Interview Slot
        </button>
</div>
</div>
</div>


    </div>
  );
};

export default Home;
