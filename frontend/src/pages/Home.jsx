import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CrimsonDither from '../components/CrimsonDither';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-void text-text-cream font-body antialiased selection:bg-primary selection:text-text-cream overflow-x-hidden w-full max-w-[1440px] mx-auto min-h-screen relative">
      {/* The converted HTML content */}
      
{/* ========================================================================= */}
{/* STICKY TOP NAVBAR */}
{/* ========================================================================= */}
<header className="sticky top-0 z-50 w-full bg-black/75 backdrop-blur-md border-b border-border-hairline transition-all duration-300">
<div className="w-full px-10 h-20 flex items-center justify-between">
{/* TEDxCRCE Brand Logo */}
<a className="flex items-center gap-3 group" href="#hero">
<div className="flex items-center tracking-tighter text-xl font-display font-bold text-text-cream">
<span>TED</span><span className="text-primary text-2xl font-extrabold mx-[1px]">x</span><span>CRCE</span>
</div>
<div className="h-4 w-[1px] bg-text-cream/20"></div>
<span className="font-sans text-xs tracking-widest text-text-cream/60 uppercase font-medium">Internship Expo '26</span>
</a>
{/* Navigation Links (Center) */}
<nav className="flex items-center space-x-9 font-sans text-sm font-medium tracking-wide">
<a className="text-text-cream/80 hover:text-text-cream transition-colors duration-200" href="#hero">Home</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#about">About</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#companies">Companies</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#sponsors">Sponsors</a>
<a className="text-text-cream/70 hover:text-text-cream transition-colors duration-200" href="#event-info">Contact &amp; Info</a>
</nav>
{/* CTA Register Button (Far Right) */}
<div className="flex items-center gap-4">
<span className="text-xs font-sans text-peach-accent bg-peach-accent/10 px-3 py-1 rounded-full border border-peach-accent/20 hidden lg:inline-block">
          3 Oct 2026 · Bandra
        </span>
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

<CrimsonDither />
</div>
{/* Scrim Gradient Overlay (Solid black left fade to clear right dither) */}
<div className="absolute inset-0 z-[1] bg-gradient-to-r from-void via-void/90 via-55% to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-void to-transparent pointer-events-none"></div>
{/* Hero Content Container (z-index 10) */}
<div className="relative z-10 w-full px-12 pt-20 flex-1 flex items-center justify-between">
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
<h1 className="font-display font-bold text-[72px] leading-[0.96] tracking-tight uppercase text-text-cream">
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
<div className="pt-4 flex items-center gap-6 relative">
<a className="bg-primary hover:bg-primary-hover text-text-cream font-sans font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 shadow-xl shadow-primary/30 flex items-center gap-3 group" href="#companies">
<span>Explore Opportunities</span>
<svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
</a>
<Link className="border border-text-cream/30 hover:border-text-cream text-text-cream font-sans font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 bg-void/40 hover:bg-surface-raised" to="/register">
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
<div className="relative flex flex-col items-end justify-center pr-6">
{/* Taped Peach Sticky-Note Style Badge */}
<div className="relative bg-peach-accent text-void p-5 rounded-sm shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 w-64 border border-peach-accent/80 group cursor-default">
{/* Tape effect */}
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-text-cream/40 backdrop-blur-sm rotate-2 border-t border-b border-void/10"></div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-sans text-[11px] font-bold tracking-widest uppercase text-void/80">CONFIRMED DATE</span>
</div>
<p className="font-display font-bold text-xl leading-tight text-void">
            3 OCT 2026
          </p>
<p className="font-sans text-xs font-semibold text-void/90 mt-1 uppercase tracking-wide">
            FCRCE · Bandra, Mumbai
          </p>
<div className="mt-3 pt-2 border-t border-void/20 flex justify-between items-center text-[10px] font-mono uppercase text-void/70">
<span>Main Campus Auditorium</span>
<span>9:00 AM IST</span>
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
<div className="relative z-10 w-full px-12 pb-6">
<div className="smoked-glass rounded-lg py-5 px-8 grid grid-cols-4 divide-x divide-border-hairline shadow-2xl">
<div className="px-6 flex flex-col">
<span className="font-display font-bold text-3xl text-text-cream">50+</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Companies Participating</span>
</div>
<div className="px-6 flex flex-col">
<span className="font-display font-bold text-3xl text-text-cream">200+</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Stipend Opportunities</span>
</div>
<div className="px-6 flex flex-col">
<span className="font-display font-bold text-3xl text-primary">1</span>
<span className="font-sans text-xs tracking-wider uppercase text-text-cream/60 mt-1">Powerful Transformative Day</span>
</div>
<div className="px-6 flex flex-col justify-center">
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
<section className="w-full bg-void py-28 px-12 border-b border-border-hairline relative" id="about">
<div className="max-w-[1320px] mx-auto grid grid-cols-12 gap-16 items-center">
{/* Left Column: About Narrative */}
<div className="col-span-7 space-y-6">
<div className="inline-flex items-center gap-2">
<span className="h-[2px] w-6 bg-secondary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Context &amp; Purpose</span>
</div>
<h2 className="font-display font-bold text-5xl uppercase tracking-tight text-text-cream">
          What is the <span className="text-primary">Expo?</span>
</h2>
<div className="space-y-5 text-text-cream/80 text-lg leading-relaxed font-body">
<p>
            The <strong className="text-text-cream font-semibold">TEDxCRCE Internship Expo 2026</strong> bridges academic excellence with industry innovation at Fr. Conceicao Rodrigues College of Engineering in Bandra. Designed to unlock direct career avenues, the fair gives emerging engineers and creative thinkers face-to-face access to dynamic organizations.
          </p>
<p>
            Whether you are pursuing roles in software architecture, AI research, product design, robotics, or high-growth tech ventures, the Expo creates a friction-free ecosystem for student-recruiter conversations, rapid resume reviews, and direct interview shortlists.
          </p>
</div>
<div className="pt-4 grid grid-cols-3 gap-4">
<div className="p-4 rounded-md bg-surface-raised border border-border-hairline">
<span className="text-secondary font-display font-bold text-xl block mb-1">01</span>
<h4 className="font-sans text-sm font-semibold text-text-cream">Direct Hiring</h4>
<p className="font-body text-xs text-text-cream/60 mt-1">Fast-track interview pipelines for summer &amp; winter cohorts.</p>
</div>
<div className="p-4 rounded-md bg-surface-raised border border-border-hairline">
<span className="text-primary font-display font-bold text-xl block mb-1">02</span>
<h4 className="font-sans text-sm font-semibold text-text-cream">Exclusive Access</h4>
<p className="font-body text-xs text-text-cream/60 mt-1">Meet founders, engineering leads, and talent strategists.</p>
</div>
<div className="p-4 rounded-md bg-surface-raised border border-border-hairline">
<span className="text-peach-accent font-display font-bold text-xl block mb-1">03</span>
<h4 className="font-sans text-sm font-semibold text-text-cream">Portfolio Reviews</h4>
<p className="font-body text-xs text-text-cream/60 mt-1">Instant critique and resume feedback from seasoned pros.</p>
</div>
</div>
</div>
{/* Right Column: Stippled Dithered Crimson Abstract Graphic Container */}
<div className="col-span-5 flex justify-center">
<div className="w-full aspect-square rounded-xl p-3 bg-surface-raised border border-border-hairline shadow-2xl relative overflow-hidden group">
{/* Inner SVG Graphic with Stippled Halftone Dither Nodes */}
<div className="w-full h-full rounded-lg bg-void border border-border-hairline/60 p-6 flex flex-col justify-between relative overflow-hidden">
{/* Halftone / Bayer Matrix Pattern Overlay */}
<svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="16" id="bayerGrid" patternUnits="userSpaceOnUse" width="16">
<circle cx="2" cy="2" fill="#8C1A1A" r="1" />
<circle cx="10" cy="2" fill="#B91C1C" r="1.5" />
<circle cx="6" cy="6" fill="#8C1A1A" r="0.8" />
<circle cx="14" cy="6" fill="#D96F2B" r="1.2" />
<circle cx="2" cy="10" fill="#8C1A1A" r="1.4" />
<circle cx="10" cy="10" fill="#8C1A1A" r="1" />
<circle cx="6" cy="14" fill="#B91C1C" r="1.8" />
<circle cx="14" cy="14" fill="#8C1A1A" r="0.6" />
</pattern>
<linearGradient id="crimsonGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#B91C1C" stopOpacity="0.9" />
<stop offset="60%" stopColor="#8C1A1A" stopOpacity="0.4" />
<stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
</linearGradient>
</defs>
<rect fill="url(#bayerGrid)" height="100%" width="100%" />
{/* Abstract dynamic wave contours */}
<path d="M -20 220 C 80 140, 160 300, 260 180 S 380 90, 480 200 L 480 400 L -20 400 Z" fill="url(#crimsonGradient)" />
<path d="M 0 160 C 120 80, 200 240, 320 140 S 420 60, 500 120" fill="none" opacity="0.4" stroke="#FFF4E1" strokeDasharray="4 6" strokeWidth="1.5" />
</svg>
{/* Card Header Badge inside frame */}
<div className="relative z-10 flex justify-between items-center">
<span className="font-mono text-xs text-text-cream/50 uppercase tracking-wider">Fig. 01 // Convergence</span>
<span className="px-2 py-0.5 rounded text-[10px] font-mono bg-wave-crimson/30 text-peach-accent border border-wave-crimson/50">
                CAMPUS ARCHIVE
              </span>
</div>
{/* Card Center Icon Graphic */}
<div className="relative z-10 flex flex-col items-center justify-center my-auto">
<div className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center bg-void/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/20">
<svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
</svg>
</div>
<p className="font-display font-bold text-lg text-text-cream mt-4 tracking-wide uppercase">
                CRCE Innovation Cell
              </p>
<p className="font-mono text-xs text-text-cream/60">Fr. Agnel Ashram · Bandra West</p>
</div>
{/* Card Footer details */}
<div className="relative z-10 pt-4 border-t border-border-hairline flex justify-between text-xs font-mono text-text-cream/60">
<span>STATUS: ADMISSION OPEN</span>
<span className="text-peach-accent">OCTOBER 03</span>
</div>
</div>
</SpotlightCard>
</AnimatedContent>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 3 — COMPANIES SECTION (4-Column Grid with Modal Triggers) */}
{/* ========================================================================= */}
<section className="w-full bg-void py-28 px-12 border-b border-border-hairline relative" id="companies">
<div className="max-w-[1320px] mx-auto">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="h-[2px] w-6 bg-primary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Career Pathways</span>
</div>
<h2 className="font-display font-bold text-5xl uppercase tracking-tight text-text-cream">
            Participating <span className="text-primary">Companies</span>
</h2>
</div>
<p className="font-sans text-text-cream/60 text-sm max-w-sm mt-4 md:mt-0 text-left md:text-right">
          Click any company tile to review eligibility criteria, open internship roles, and interview formats.
        </p>
</div>
{/* 4-Column Grid of Smoked-Glass Cards */}
<div className="grid grid-cols-4 gap-5">
{/* Company 1: Razorpay */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-primary text-base">
              RZ
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream group-hover:text-text-cream">Razorpay</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Fintech &amp; Payments</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">3 Roles</span>
<span className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-[10px] text-peach-accent font-mono">High Stipend</span>
</div>
</div>
</div>
{/* Company 2: Morgan Stanley */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-text-cream text-base">
              MS
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Morgan Stanley</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Investment Banking &amp; Tech</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
<span className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-[10px] text-peach-accent font-mono">Tier 1</span>
</div>
</div>
</div>
{/* Company 3: Larsen & Toubro Infotech */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-secondary text-base">
              LT
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">L&amp;T Tech Services</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Engineering R&amp;D &amp; IoT</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">4 Roles</span>
</div>
</div>
</div>
{/* Company 4: Fractal Analytics */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-primary text-base">
              FA
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Fractal Analytics</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Artificial Intelligence</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
<span className="px-2 py-0.5 bg-peach-accent/10 border border-peach-accent/30 rounded text-[10px] text-peach-accent font-mono">GenAI</span>
</div>
</div>
</div>
{/* Company 5: Zepto */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-secondary text-base">
              ZP
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Zepto</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Quick Commerce Tech</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">3 Roles</span>
</div>
</div>
</div>
{/* Company 6: Jio Platforms */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-primary text-base">
              JIO
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Jio Platforms</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Cloud &amp; Telecom</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">5 Roles</span>
</div>
</div>
</div>
{/* Company 7: Tata Elxsi */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-text-cream text-base">
              TE
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Tata Elxsi</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Automotive Tech &amp; Design</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
</div>
</div>
</div>
{/* Company 8: BrowserStack */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-primary text-base">
              BS
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">BrowserStack</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Developer Cloud</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
<span className="px-2 py-0.5 bg-primary/10 border border-primary/30 rounded text-[10px] text-peach-accent font-mono">SaaS</span>
</div>
</div>
</div>
{/* Company 9: HDFC Bank Digital */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-secondary text-base">
              HD
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">HDFC Digital</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Banking &amp; Cybersec</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">3 Roles</span>
</div>
</div>
</div>
{/* Company 10: Ather Energy */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-text-cream text-base">
              AT
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Ather Energy</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">CleanTech &amp; EV Hardware</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
</div>
</div>
</div>
{/* Company 11: Nykaa */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-primary text-base">
              NY
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Nykaa Tech</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">E-Commerce &amp; Mobile</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">3 Roles</span>
</div>
</div>
</div>
{/* Company 12: Godrej Infotech */}
<div className="group cursor-pointer smoked-glass rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
<div className="absolute inset-0 bg-gradient-to-br from-wave-crimson/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between relative z-10">
<div className="w-10 h-10 rounded bg-surface-raised border border-border-hairline flex items-center justify-center font-display font-bold text-secondary text-base">
              GD
            </div>
<span className="text-[11px] font-mono text-peach-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              View Details →
            </span>
</div>
<div className="relative z-10 mt-4">
<h3 className="font-sans font-bold text-base text-text-cream">Godrej Industry</h3>
<p className="font-body text-xs text-text-cream/60 mt-0.5">Smart Automation &amp; Robotics</p>
<div className="mt-2.5 flex items-center gap-1.5">
<span className="px-2 py-0.5 bg-surface-raised border border-border-hairline rounded text-[10px] text-text-cream/70 font-mono">2 Roles</span>
</div>
</div>
</div>
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
<section className="w-full bg-void py-24 px-12 border-b border-border-hairline relative" id="sponsors">
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
<h2 className="font-display font-bold text-4xl uppercase tracking-tight text-text-cream">
            Our <span className="text-primary">Sponsors</span>
</h2>
</div>
<span className="font-mono text-xs text-text-cream/40 uppercase">2026 Edition Patrons</span>
</div>
{/* Single-row logo strip on lighter #140A0A smoked-glass band */}
<div className="w-full smoked-glass rounded-lg py-8 px-10 border border-border-hairline">
<div className="grid grid-cols-5 gap-8 items-center justify-items-center">
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
{/* Sponsor 4 */}
<div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer">
<div className="font-display font-bold text-xl tracking-tighter text-text-cream/50 grayscale group-hover:grayscale-0 group-hover:text-primary transition-all">
              MAHARASHTRA AI
            </div>
<span className="font-mono text-[10px] text-text-cream/40 mt-1 uppercase group-hover:text-peach-accent transition-colors">
              Knowledge Patron
            </span>
</div>
{/* Sponsor 5 */}
<div className="group flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer">
<div className="font-display font-bold text-xl tracking-tighter text-text-cream/50 grayscale group-hover:grayscale-0 group-hover:text-secondary transition-all">
              CRCE ALUMNI FUND
            </div>
<span className="font-mono text-[10px] text-text-cream/40 mt-1 uppercase group-hover:text-peach-accent transition-colors">
              Grant Support
            </span>
</div>
</div>
</div>
</div>
</section>
{/* ========================================================================= */}
{/* SECTION 5 — EVENT INFO / CONTACT / FOOTER */}
{/* ========================================================================= */}
<section className="w-full bg-void pt-24 pb-12 px-12 relative overflow-hidden" id="event-info">
{/* Subtle dither glow anchor on bottom edge */}
<div className="absolute bottom-0 right-0 w-96 h-96 bg-wave-crimson/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1320px] mx-auto">
{/* 4 Info Blocks on Smoked Glass */}
<div className="grid grid-cols-4 gap-6 mb-20">
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
{/* Block 3: Download Brochure Button */}
<div className="smoked-glass rounded-lg p-6 flex flex-col justify-between border border-border-hairline">
<div>
<span className="font-mono text-[10px] text-peach-accent uppercase tracking-widest block mb-1">Resources</span>
<h3 className="font-display font-bold text-xl text-text-cream">Official Guidebook</h3>
</div>
<div className="pt-4 mt-4 border-t border-border-hairline">
<a className="w-full inline-flex items-center justify-center gap-2 border border-secondary hover:bg-secondary text-secondary hover:text-void font-sans font-semibold text-xs px-4 py-2.5 rounded transition-colors duration-200" href="#event-info">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
<span>Download Brochure</span>
</a>
</div>
</div>
{/* Block 4: View Schedule Link */}
<div className="smoked-glass rounded-lg p-6 flex flex-col justify-between border border-border-hairline">
<div>
<span className="font-mono text-[10px] text-peach-accent uppercase tracking-widest block mb-1">Time Table</span>
<h3 className="font-display font-bold text-xl text-text-cream">Master Timeline</h3>
</div>
<div className="pt-4 mt-4 border-t border-border-hairline flex items-center justify-between">
<a className="text-text-cream hover:text-peach-accent font-sans font-semibold text-xs inline-flex items-center gap-1.5 transition-colors" href="#event-info">
<span>View Full Schedule</span>
<span>→</span>
</a>
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
</div>
</div>
</div>
{/* Contact Block & Simple Contact Form */}
<div className="grid grid-cols-12 gap-12 bg-surface-solid rounded-xl p-10 border border-border-hairline relative">
{/* Left Contact Info Details */}
<div className="col-span-5 flex flex-col justify-between space-y-8">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="h-[2px] w-6 bg-primary"></span>
<span className="font-sans text-xs font-semibold tracking-widest text-peach-accent uppercase">Get In Touch</span>
</div>
<h2 className="font-display font-bold text-4xl uppercase tracking-tight text-text-cream">
              Questions About <br/>The <span className="text-primary">Internship Fair?</span>
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
<p className="font-semibold text-text-cream">tedxcrce@frcrce.ac.in</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-surface-raised border border-border-hairline flex items-center justify-center text-secondary">#</span>
<div>
<p className="text-[10px] uppercase text-text-cream/40 font-sans">Campus Helpline</p>
<p className="font-semibold text-text-cream">+91 22 6711 4000 / Ext: 2026</p>
</div>
</div>
</div>
<div className="pt-4 border-t border-border-hairline text-xs font-body text-text-cream/50">
            FCRCE Placement Cell · Fr. Agnel Ashram, Bandra West, Mumbai 400050
          </div>
</div>
{/* Right Contact Form */}
<div className="col-span-7 pl-6 border-l border-border-hairline">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
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
<footer className="mt-24 pt-8 border-t border-border-hairline relative flex items-center justify-between">
{/* Fading Dither Strip along top edge of footer */}
<div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-wave-crimson to-transparent"></div>
{/* Left Logo */}
<div className="flex items-center gap-3">
<div className="flex items-center tracking-tighter text-lg font-display font-bold text-text-cream">
<span>TED</span><span className="text-primary text-xl font-extrabold mx-[1px]">x</span><span>CRCE</span>
</div>
<span className="font-mono text-[11px] text-text-cream/40">
            © 2026 This independent TEDx event is operated under license from TED.
          </span>
</div>
{/* Quick Links */}
<div className="flex items-center space-x-6 font-sans text-xs text-text-cream/60">
<a className="hover:text-text-cream transition-colors" href="#hero">Privacy Policy</a>
<a className="hover:text-text-cream transition-colors" href="#about">Terms of Entry</a>
<a className="hover:text-text-cream transition-colors" href="#companies">Code of Conduct</a>
<a className="hover:text-text-cream transition-colors" href="#event-info">Press &amp; Media</a>
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
