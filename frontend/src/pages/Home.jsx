import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tedxLogo from '../tedx-logo.png';
import CompanyDetailModal from '../components/CompanyDetailModal';
import Dither from '../components/Dither';
import ScrollReveal from '../components/animations/ScrollReveal';
import AnimatedContent from '../components/animations/AnimatedContent';
import SpotlightCard from '../components/animations/SpotlightCard';
import { motion } from 'motion/react';
import AiBlob from '../components/animations/AiBlob';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent font-body-md text-on-surface antialiased overflow-x-hidden">
      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 z-[60] bg-deep-navy/95 backdrop-blur-md transform transition-transform duration-300 flex flex-col md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-light-cool-grey/20">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-tedx-red shrink-0" style={{ WebkitMask: `url(${tedxLogo}) no-repeat left center`, WebkitMaskSize: 'contain', mask: `url(${tedxLogo}) no-repeat left center`, maskSize: 'contain' }} aria-label="TEDx Logo" />
            <span className="ml-1 font-headline-sm text-white uppercase tracking-tight leading-none">CRCE</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6 flex-grow">
          <a className="text-2xl font-bold text-white" href="#/" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <a className="text-2xl font-bold text-light-cool-grey hover:text-white transition-colors" href="#about" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}) }}>About</a>
          <a className="text-2xl font-bold text-light-cool-grey hover:text-white transition-colors" href="#companies" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('companies')?.scrollIntoView({behavior: 'smooth'}) }}>Companies</a>
          <a className="text-2xl font-bold text-light-cool-grey hover:text-white transition-colors" href="#event-details" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('event-details')?.scrollIntoView({behavior: 'smooth'}) }}>Event Details</a>
          <a className="text-2xl font-bold text-light-cool-grey hover:text-white transition-colors" href="#contact" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}) }}>Contact</a>
          <button className="mt-8 bg-tedx-red text-white font-bold text-xl py-4 rounded-xl shadow-lg" onClick={() => { setIsMobileMenuOpen(false); navigate('/register'); }}>Register Now</button>
        </nav>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-navy/90 backdrop-blur-md shadow-sm border-b border-light-cool-grey/10">
        <div className="h-16 md:h-20 max-w-[1440px] mx-auto px-4 md:px-margin flex items-center justify-between">
          <div className="flex flex-col justify-center gap-0.5">
            <div className="flex items-center">
              <div className="h-8 md:h-12 w-8 md:w-12 bg-tedx-red shrink-0" style={{ WebkitMask: `url(${tedxLogo}) no-repeat left center`, WebkitMaskSize: 'contain', mask: `url(${tedxLogo}) no-repeat left center`, maskSize: 'contain' }} aria-label="TEDx Logo" />
              <span className="ml-1 md:ml-1.5 font-headline-sm text-lg md:text-headline-sm uppercase tracking-tight text-white leading-none">CRCE</span>
            </div>
            <span className="font-label-badge text-[8px] md:text-[10px] leading-tight uppercase tracking-widest text-tedx-red">Internship Expo 2026</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-space-lg">
            <a aria-current="page" className="transition-colors text-white font-bold" href="#/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
            <a className="font-label-lg text-label-lg text-light-cool-grey hover:text-white transition-colors" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}) }}>About</a>
            <a className="font-label-lg text-label-lg text-light-cool-grey hover:text-white transition-colors" href="#companies" onClick={(e) => { e.preventDefault(); document.getElementById('companies')?.scrollIntoView({behavior: 'smooth'}) }}>Companies</a>
            <a className="font-label-lg text-label-lg text-light-cool-grey hover:text-white transition-colors" href="#event-details" onClick={(e) => { e.preventDefault(); document.getElementById('event-details')?.scrollIntoView({behavior: 'smooth'}) }}>Event Details</a>
            <a className="font-label-lg text-label-lg text-light-cool-grey hover:text-white transition-colors" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}) }}>Contact</a>
          </nav>
          
          <div className="flex items-center gap-4 md:gap-space-md">
            <a className="hidden md:inline-flex items-center justify-center px-space-lg py-space-sm bg-tedx-red text-white font-label-lg text-label-lg rounded-xl shadow-[2px_2px_0px_#080A0D] hover:bg-tedx-red/80 transition-all duration-150" href="#/" onClick={(e) => { e.preventDefault(); navigate('/register'); }}>Register</a>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white p-1">
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="hidden md:flex w-8 h-8 rounded-full bg-tedx-red items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full min-h-screen">
        <div className="flex flex-col w-full font-body-md text-on-surface">
          {/* ========================================================= */}
          {/* SECTION 1: HERO & STAT STRIP                             */}
          {/* ========================================================= */}
          <section className="relative w-full min-h-[100svh] pt-24 md:pt-32 pb-16 overflow-hidden bg-transparent text-white">
            
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-margin">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-gutter items-center min-h-[60vh]">
                {/* Left Column: Typographic Hierarchy */}
                <div className="w-full md:col-span-7 flex flex-col items-start md:pr-4">
                  {/* Eyebrow Badge */}
                  <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-near-black/50 backdrop-blur-sm border border-light-cool-grey/20 text-light-cool-grey mb-6 md:mb-space-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-tedx-red animate-pulse"></span>
                    <span className="font-label-badge text-[10px] md:text-label-badge uppercase tracking-wider font-bold">Ideas Today. Careers Tomorrow.</span>
                  </div>
                  
                  {/* Hero Headline */}
                  <h1 className="font-display-hero text-5xl md:text-display-hero uppercase tracking-tight text-white mb-4 md:mb-space-md leading-[1.05] break-words text-left">
                    TED<span className="text-tedx-red font-extrabold">x</span>CRCE<br/>
                    <span className="text-white relative inline-block">
                      Internship Expo
                      <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full text-electric-blue" fill="none" height="10" viewBox="0 0 340 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7C95 2 245 2 338 7" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                      </svg>
                    </span>
                    <span className="text-light-cool-grey ml-2 block md:inline">2026</span>
                  </h1>
                  
                  {/* One-line subtext */}
                  <p className="font-body-lg text-base md:text-body-lg text-light-cool-grey max-w-xl mb-8 md:mb-space-xl leading-relaxed text-left">
                    A platform for FCRCE students to explore opportunities, connect with leading organizations, and take the definitive next step towards their future.
                  </p>
                  
                  {/* Venue Micro Note */}
                  <div className="mt-8 flex items-center gap-2 md:gap-space-xs font-body-sm text-sm md:text-body-sm text-light-cool-grey">
                    <span className="material-symbols-outlined text-tedx-red text-[20px] md:text-[18px]">location_on</span>
                    <span>Bandra West Campus · Mumbai, Maharashtra</span>
                  </div>
                </div>
                
                {/* Right Column: AI Blob Button */}
                <div className="w-full md:col-span-5 relative flex justify-end items-end mt-12 md:mt-0 h-full">
                  <div className="relative md:mt-32 md:mr-12">
                    <AiBlob text="Register" to="/register" />
                    
                    {/* Annotation Accent */}
                    <div className="hidden lg:flex flex-col items-end gap-1 absolute -left-16 bottom-16 text-electric-blue z-30">
                      <svg className="-rotate-12 scale-x-[-1]" fill="none" height="32" viewBox="0 0 40 28" width="45">
                        <path d="M36 4C24 16 12 18 4 24M4 24L12 24M4 24L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      <span className="font-label-badge text-label-badge uppercase tracking-widest text-electric-blue font-bold text-right leading-tight">Priority<br/>Entry</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Strip below Hero */}
              <div className="w-full mt-16 md:mt-24 bg-near-black/50 backdrop-blur-md rounded-xl p-4 md:p-space-md shadow-lg border border-light-cool-grey/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x divide-light-cool-grey/20">
                  {/* Stat Item 1 */}
                  <div className="flex flex-col items-center justify-center py-2 px-2 md:px-4 text-center">
                    <span className="font-display-section text-4xl md:text-display-section text-tedx-red leading-none">50+</span>
                    <span className="font-label-lg text-sm md:text-label-lg text-white mt-1">Marquee Companies</span>
                    <span className="font-body-sm text-xs md:text-body-sm text-light-cool-grey">Tech, Core &amp; Emerging Tech</span>
                  </div>
                  {/* Stat Item 2 */}
                  <div className="flex flex-col items-center justify-center py-2 px-2 md:px-4 text-center">
                    <span className="font-display-section text-4xl md:text-display-section text-electric-blue leading-none">200+</span>
                    <span className="font-label-lg text-sm md:text-label-lg text-white mt-1">Internship Roles</span>
                    <span className="font-body-sm text-xs md:text-body-sm text-light-cool-grey">Summer &amp; Winter Traineeships</span>
                  </div>
                  {/* Stat Item 3 */}
                  <div className="flex flex-col items-center justify-center py-2 px-2 md:px-4 text-center">
                    <span className="font-display-section text-4xl md:text-display-section text-white leading-none">1</span>
                    <span className="font-label-lg text-sm md:text-label-lg text-white mt-1">High-Impact Day</span>
                    <span className="font-body-sm text-xs md:text-body-sm text-light-cool-grey">On-Campus Interviews &amp; Offers</span>
                  </div>

                </div>
              </div>
            </div>
          </section>

{/* ========================================================= */}
{/* SECTION 2: ABOUT THE EXPO                                */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-4 md:px-margin py-12 md:py-20 bg-surface" id="about">
<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-gutter items-start">
{/* Left: Narrative & Mission */}
<ScrollReveal className="w-full md:col-span-5 flex flex-col md:pr-6" staggerDelay={0.15}>
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-[2px] bg-secondary"></span>
<span className="font-label-badge text-[10px] md:text-label-badge uppercase tracking-widest text-secondary font-bold">Curated Ambition</span>
</div>
<h2 className="font-display-section text-4xl md:text-display-section text-on-surface leading-tight mb-4 md:mb-space-md">
          What is <br className="hidden md:block"/>the Expo?
        </h2>
<p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-4 md:mb-space-md">
          The TEDxCRCE Internship Expo 2026 is Bandra’s signature collegiate career convergence. We connect high-caliber engineering, AI, data science, and design undergraduates directly with forward-looking industry pioneers.
        </p>
</ScrollReveal>
{/* Right: Three Structured Pillar Cards */}
<AnimatedContent className="w-full md:col-span-7 grid grid-cols-1 gap-4 md:gap-space-md mt-8 md:mt-0" staggerDelay={0.12}>
{/* Pillar 1 */}
<SpotlightCard className="group p-4 md:p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] transition-all duration-200 flex flex-col sm:flex-row items-start gap-4 md:gap-space-md">
<div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-2xl md:text-3xl">psychology</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2 sm:mb-1">
<h3 className="font-headline-md text-lg md:text-headline-md text-on-surface">Direct Placement &amp; Internship Interviews</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-[10px] md:text-label-badge font-bold shrink-0">Fast-Track</span>
</div>
<p className="font-body-md text-sm md:text-body-md text-on-surface-variant">
              Complete on-spot assessments and secure accredited internship roles.
            </p>
</div>
</SpotlightCard>
{/* Pillar 2 */}
<SpotlightCard className="group p-4 md:p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] transition-all duration-200 flex flex-col sm:flex-row items-start gap-4 md:gap-space-md">
<div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-2xl md:text-3xl">rocket_launch</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2 sm:mb-1">
<h3 className="font-headline-md text-lg md:text-headline-md text-on-surface">Industry Mentorship &amp; Portfolio Reviews</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-[10px] md:text-label-badge font-bold shrink-0">1-on-1 Access</span>
</div>
<p className="font-body-md text-sm md:text-body-md text-on-surface-variant">
              Receive live feedback from veteran senior architects and technology consultants.
            </p>
</div>
</SpotlightCard>
{/* Pillar 3 */}
<SpotlightCard className="group p-4 md:p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] transition-all duration-200 flex flex-col sm:flex-row items-start gap-4 md:gap-space-md">
<div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-2xl md:text-3xl">hub</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2 sm:mb-1">
<h3 className="font-headline-md text-lg md:text-headline-md text-on-surface">Future-Ready Domain Opportunities</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-[10px] md:text-label-badge font-bold shrink-0">Cutting Edge</span>
</div>
<p className="font-body-md text-sm md:text-body-md text-on-surface-variant">
              Targeted openings across emerging technology domains.
            </p>
</div>
</SpotlightCard>
</AnimatedContent>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 3: PARTICIPATING COMPANIES                       */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-4 md:px-margin py-12 md:py-20 bg-surface-container-low rounded-none md:rounded-xl my-0 md:my-4" id="companies">
{/* Header row */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 md:mb-12 gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-badge text-[10px] md:text-label-badge uppercase tracking-widest text-primary font-bold">Scouting Bandra Campus</span>
</div>
<h2 className="font-display-section text-4xl md:text-display-section text-on-surface leading-tight">
          Participating Companies
        </h2>
<p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mt-2">
          Over 50 industry pioneers scouting engineering and tech talent directly at the Father Conceicao Rodrigues campus.
        </p>
</div>
{/* Filter / Category Pill strip */}
<div className="w-full overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
<div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-lg shadow-sm min-w-max">
<button className="px-3 md:px-3.5 py-1.5 rounded bg-primary-container text-on-primary font-label-md text-[10px] md:text-label-md font-medium shadow-[1px_1px_0px_#1b1c1c] whitespace-nowrap">All Tracks (50+)</button>
<button className="px-3 md:px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-[10px] md:text-label-md font-medium transition-colors whitespace-nowrap">Core Software</button>
<button className="px-3 md:px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-[10px] md:text-label-md font-medium transition-colors whitespace-nowrap">Fintech &amp; Banking</button>
<button className="px-3 md:px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-[10px] md:text-label-md font-medium transition-colors whitespace-nowrap">Cloud &amp; AI</button>
</div>
</div>
</div>
{/* 24 Structured Typographic Company Tiles (4 Columns x 6 Rows) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
{/* Tile 1 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Google Cloud</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Cloud/AI</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Solutions &amp; SRE Interns</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">8 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 2 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Morgan Stanley</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Fintech</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Quantitative Tech &amp; DevOps</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">12 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 3 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Microsoft</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Big Tech</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Systems Software Engineering</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">6 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 4 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Razorpay</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Fintech</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Payments Infra &amp; Backend</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">10 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 5 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">L&amp;T Infotech</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Enterprise</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">IoT &amp; Automation Systems</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">15 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 6 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Nvidia</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Hardware/AI</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">CUDA &amp; Graphics Pipeline</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">4 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 7 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Zerodha</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Trading/Core</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Low-Latency Golang Backend</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">5 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 8 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">TCS Research</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Consulting</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Deep Learning &amp; Robotics</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">18 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 9 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Jio Platforms</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Telecom/5G</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">5G Core Protocol Engineering</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">14 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 10 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Goldman Sachs</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Investment</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Risk Operations &amp; Algorithmic</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">7 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 11 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Zomato</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Consumer Tech</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Logistics Routing &amp; Fullstack</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">9 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 12 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Siemens</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Industrial</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Automation &amp; Embedded C++</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">11 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 13 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">BrowserStack</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Developer Tools</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Virtual Cloud Infrastructure</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">5 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 14 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">CRED</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Fintech/UX</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Product Design &amp; iOS Native</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">4 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 15 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Amazon AWS</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Cloud/Dev</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Cloud Support &amp; Database Eng</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">9 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 16 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Cisco</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Networking</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Cybersecurity &amp; SDN Systems</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">8 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 17 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Swiggy</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Quick Commerce</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Distributed Backend &amp; Data</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">6 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 18 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Barclays</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Global Bank</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Core Payments &amp; Security</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">11 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 19 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Mahindra Tech</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Automotive</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">EV Firmware &amp; Telematics</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">7 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 20 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">JP Morgan</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Finance Tech</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Quantitative Research &amp; Cloud</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">10 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 21 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Accolite</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Digital</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Microservices &amp; Spring Boot</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">8 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 22 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Infosys Finacle</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Core IT</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Banking API Architecture</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">16 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 23 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Capgemini</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Engineering</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Applied AI &amp; Quality Engineering</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">12 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
{/* Tile 24 */}
<div onClick={() => setIsModalOpen(true)} className="cursor-pointer group bg-surface-container-lowest p-5 rounded-lg shadow-[3px_3px_0px_rgba(48,48,48,0.06)] hover:shadow-[5px_5px_0px_#b91c1c] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between h-36">
<div className="flex items-start justify-between">
<span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">Reliance Digital</span>
<span className="font-label-badge text-label-badge px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">Conglomerate</span>
</div>
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Big Data Analytics &amp; Edge</span>
<span className="font-label-md text-label-md text-secondary font-semibold mt-0.5 inline-flex items-center gap-1">14 Roles Open <span className="material-symbols-outlined text-[14px]">arrow_outward</span></span>
</div>
</div>
</div>
{/* Company Grid Bottom Accent */}
<div className="mt-8 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-4">
<span>+ 28 additional boutique startups &amp; research labs participating on-campus</span>
<a className="inline-flex items-center gap-1 text-primary font-label-lg text-label-lg font-bold hover:underline" href="#register">
        Get the Full Company Dossier &amp; Job Descriptions
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 4: SPONSORS (DARK CONTRAST BAND)                 */}
{/* ========================================================= */}
<section className="w-full bg-transparent text-inverse-on-surface py-12 md:py-20 my-0 md:my-8 relative overflow-hidden" id="sponsors">
<div className="max-w-[1440px] mx-auto px-4 md:px-margin flex flex-col">
{/* Section Header */}
<div className="flex flex-col items-center text-center mb-8 md:mb-12">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-badge text-[10px] md:text-label-badge uppercase tracking-widest font-bold mb-2">
          Corporate &amp; Innovation Alliances
        </div>
<h2 className="font-display-section text-4xl md:text-display-section text-white leading-tight">
          Our Sponsors
        </h2>
<p className="font-body-md text-sm md:text-body-md text-white max-w-lg mt-2">
          Proudly supported by our institutional, technology, and ecosystem champions who believe in fostering undergraduate innovation.
        </p>
</div>
{/* Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-gutter items-stretch">
{/* Sponsor 1: Title */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed font-semibold mb-2">Title Sponsor</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-primary-fixed-dim transition-colors">TATA TRUSTS</span>
</div>
<span className="font-body-sm text-body-sm text-white">Philanthropy &amp; Tech</span>
</div>
{/* Sponsor 2: Powered By */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-fixed font-semibold mb-2">Powered By</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-secondary-fixed transition-colors">AWS EDU</span>
</div>
<span className="font-body-sm text-body-sm text-white">Cloud Infrastructure</span>
</div>
{/* Sponsor 3: Tech Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-tertiary-fixed font-semibold mb-2">Tech Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-tertiary-fixed transition-colors">GITHUB</span>
</div>
<span className="font-body-sm text-body-sm text-white">Developer Pack</span>
</div>
{/* Sponsor 4: Student Ecosystem */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed font-semibold mb-2">Ecosystem Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-primary-fixed transition-colors">DEVPOST</span>
</div>
<span className="font-body-sm text-body-sm text-white">Talent Platform</span>
</div>
{/* Sponsor 5: Beverage Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-fixed font-semibold mb-2">Beverage Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-secondary-fixed transition-colors">RED BULL</span>
</div>
<span className="font-body-sm text-body-sm text-white">Energy &amp; Focus</span>
</div>
{/* Sponsor 6: Media Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-tertiary-fixed font-semibold mb-2">Media Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-white group-hover:text-tertiary-fixed transition-colors">YOURSTORY</span>
</div>
<span className="font-body-sm text-body-sm text-white">Startup Journalism</span>
</div>
</div>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 5: EVENT INFO & CONTACT                          */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-4 md:px-margin py-12 md:py-20 bg-surface" id="event-details">
<div className="flex flex-col mb-8 md:mb-12">
<h2 className="font-display-section text-4xl md:text-display-section text-on-surface leading-tight">
          Event Details
        </h2>
</div>
{/* 4 Structured Event Info Blocks */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter mb-12 md:mb-20">
{/* Block 1: Event Date */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">calendar_month</span>
</div>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">Event Timing</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Saturday, 3 Oct 2026</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">9:00 AM – 6:00 PM IST<br/>Registration desk opens 8:15 AM</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30 text-primary font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Full Day In-Person
        </div>
</div>
{/* Block 2: Venue */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">pin_drop</span>
</div>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">Campus Venue</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Fr. Agnel CRCE</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Bandstand Promenade, Bandra (West), Mumbai 400050</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30 text-secondary font-label-md text-label-md font-semibold inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">navigation</span>
          Main Quadrangle &amp; Seminars
        </div>
</div>
{/* Block 3: Action Resource */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">download_for_offline</span>
</div>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">Attendee Resource</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Student Brochure</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Complete syllabus, recruiter eligibility criteria, and dress code guidelines.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<a className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-[2px_2px_0px_rgba(48,48,48,0.1)] hover:bg-secondary-container hover:text-on-secondary-container transition-all" href="#/" onClick={(e) => e.preventDefault()}>
<span className="material-symbols-outlined text-[16px]">download</span>
            Download Brochure (PDF)
          </a>
</div>
</div>
{/* Block 4: Schedule */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-sm">
<span className="material-symbols-outlined text-[22px]">view_timeline</span>
</div>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">Rundown Plan</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Day Schedule</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Keynote pitches, group hack sprints, speed-networking, and one-on-one reviews.</p>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/30">
<a className="inline-flex items-center justify-between w-full text-primary font-label-md text-label-md font-bold hover:underline" href="#/" onClick={(e) => e.preventDefault()}>
<span>View Detailed Day Schedule</span>
<span className="material-symbols-outlined text-[18px]">east</span>
</a>
</div>
</div>
</div>
{/* Integrated Contact & Registration Layout */}
<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-gutter items-stretch bg-surface-container-low p-6 md:p-space-xl rounded-xl shadow-[4px_4px_0px_rgba(48,48,48,0.08)]" id="contact">
{/* Left: Contact & Institutional Info */}
<div className="w-full md:col-span-5 flex flex-col justify-between md:pr-6">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-badge text-[10px] md:text-label-badge uppercase tracking-widest text-primary font-bold">Direct Coordination</span>
</div>
<h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface leading-tight mb-4 md:mb-space-md">
            Get in Touch with the Organizers
          </h2>

{/* Contact details list */}
<div className="flex flex-col gap-4 md:gap-space-md">
<div className="flex items-center gap-3 md:gap-space-sm">
<div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div className="flex flex-col overflow-hidden">
<span className="font-label-badge text-[9px] md:text-label-badge text-on-surface-variant uppercase truncate">Official Correspondence</span>
<a className="font-label-lg text-sm md:text-label-lg text-on-surface hover:text-primary font-medium truncate" href="mailto:expo2026@crce.ac.in">expo2026@crce.ac.in</a>
</div>
</div>
<div className="flex items-center gap-3 md:gap-space-sm">
<div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div className="flex flex-col overflow-hidden">
<span className="font-label-badge text-[9px] md:text-label-badge text-on-surface-variant uppercase truncate">College Campus Helpline</span>
<span className="font-label-lg text-sm md:text-label-lg text-on-surface font-medium truncate">+91 22 6711 4000</span>
</div>
</div>
<div className="flex items-center gap-3 md:gap-space-sm">
<div className="w-10 h-10 shrink-0 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<div className="flex flex-col overflow-hidden">
<span className="font-label-badge text-[9px] md:text-label-badge text-on-surface-variant uppercase truncate">Institution</span>
<span className="font-label-lg text-sm md:text-label-lg text-on-surface font-medium break-words">TEDxCRCE Chapter, Fr. Agnel CRCE</span>
</div>
</div>
</div>
</div>

</div>
{/* Right: Inquiry / Registration Form */}
<div className="w-full md:col-span-7 bg-surface-container-lowest p-5 md:p-space-xl rounded-xl shadow-[3px_3px_0px_rgba(48,48,48,0.06)] flex flex-col justify-between mt-8 md:mt-0">
<div>
<div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-space-md gap-2">
<h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Send a Message or Register Interest</h3>
<span className="font-label-badge text-[10px] md:text-label-badge uppercase tracking-wider text-secondary font-bold self-start md:self-auto">Fast Response</span>
</div>
<form className="flex flex-col gap-4 md:gap-space-md" onsubmit="event.preventDefault(); alert('Thank you for registering your interest. The TEDxCRCE committee will reach out to you within 24 hours.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-[10px] md:text-label-md text-on-surface-variant uppercase">Full Name *</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-sm md:text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. Neil Fernandes" required="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-[10px] md:text-label-md text-on-surface-variant uppercase">Email Address *</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-sm md:text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. student@crce.ac.in" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-[10px] md:text-label-md text-on-surface-variant uppercase">Category</label>
<select className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-sm md:text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
<option>FCRCE Undergraduate Student</option>
<option>External Visiting Student</option>
<option>Corporate Recruiter / Company</option>
<option>Alumni / Speaker</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-[10px] md:text-label-md text-on-surface-variant uppercase">Engineering Branch / Company</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-sm md:text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. Computer Engineering / FinTech" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase">Message / Specific Role Inquiry</label>
<textarea className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="Mention your primary interest, GitHub portfolio, or recruiting needs..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2">
<input checked="" className="accent-primary w-4 h-4 rounded" id="consent" type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface-variant" for="consent">Notify me about pre-expo workshops and slot updates.</label>
</div>
<button className="inline-flex items-center gap-2 px-8 py-3 bg-tedx-red text-white font-label-lg text-label-lg rounded-xl shadow-[3px_3px_0px_#1b1c1c] hover:bg-tedx-red/80 transition-all duration-150 hover:-translate-y-0.5" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</div></main>      <footer className="w-full bg-transparent text-inverse-on-surface py-space-xl pt-16 md:pt-24 border-t border-light-cool-grey/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-margin flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-start">
            {/* Logo and Description */}
            <div className="md:col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <img src={tedxLogo} alt="TEDx Logo" className="h-12 md:h-16 w-auto object-contain" />
                <span className="font-[Helvetica,Arial,sans-serif] text-[40px] uppercase tracking-tighter text-white font-bold leading-none">CRCE</span>
              </div>
              <p className="font-body-md text-body-md text-light-cool-grey max-w-sm mt-2">
                Internship Expo 2026. Empowering collegiate talent, intellectual curiosity, and high-growth opportunities under the spirit of ideas worth spreading.
              </p>
            </div>
            
            {/* Quick Navigation */}
            <div className="md:col-span-4 flex flex-col gap-space-sm mt-8 md:mt-0">
              <span className="font-label-badge text-label-badge uppercase tracking-widest text-light-cool-grey font-bold">Quick Navigation</span>
              <div className="flex flex-col gap-3 mt-2">
                <a className="font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
                <a className="font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}) }}>About</a>
                <a className="font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#companies" onClick={(e) => { e.preventDefault(); document.getElementById('companies')?.scrollIntoView({behavior: 'smooth'}) }}>Companies</a>
                <a className="font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#event-details" onClick={(e) => { e.preventDefault(); document.getElementById('event-details')?.scrollIntoView({behavior: 'smooth'}) }}>Event Details</a>
                <a className="font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}) }}>Contact</a>
              </div>
            </div>
            
            {/* Connect & Follow */}
            <div className="md:col-span-3 flex flex-col gap-space-sm mt-8 md:mt-0">
              <span className="font-label-badge text-label-badge uppercase tracking-widest text-light-cool-grey font-bold">Connect & Follow</span>
              <div className="flex flex-col gap-4 mt-2">
                <a className="flex items-center gap-3 font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#/" onClick={(e) => e.preventDefault()}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
                <a className="flex items-center gap-3 font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="#/" onClick={(e) => e.preventDefault()}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
                <a className="flex items-center gap-3 font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="mailto:contact@tedxcrce.com">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  contact@tedxcrce.com
                </a>
                <a className="flex items-center gap-3 font-body-md text-body-md text-white hover:text-tedx-red transition-colors" href="https://tedxcrce.com" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-[20px]">language</span>
                  tedxcrce.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-light-cool-grey/20 flex flex-col md:flex-row justify-between items-center gap-4 font-body-sm text-sm text-light-cool-grey mt-8">
            <span>This independent TEDx event is operated under license from TED.</span>
            <span>© 2026 TEDxCRCE Internship Expo. All rights reserved.</span>
          </div>
        </div>
      </footer>
      <CompanyDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
