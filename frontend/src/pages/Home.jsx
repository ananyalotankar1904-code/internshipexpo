import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tedxLogo from '../tedx-logo.png';
import CompanyDetailModal from '../components/CompanyDetailModal';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      {/* Original Body Content */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="TEDxCRCE Logo" className="h-8 w-auto object-contain" src={tedxLogo}/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">TEDxCRCE</span><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary">Internship Expo 2026</span></div></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors text-primary font-bold" data-path="home" href="#/" onClick={(e) => e.preventDefault()}>Home</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="about" href="#/" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'}) }}>About</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="companies" href="#/" onClick={(e) => { e.preventDefault(); document.getElementById('companies')?.scrollIntoView({behavior: 'smooth'}) }}>Companies</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="sponsors" href="#/" onClick={(e) => { e.preventDefault(); document.getElementById('sponsors')?.scrollIntoView({behavior: 'smooth'}) }}>Sponsors</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="contact" href="#/" onClick={(e) => e.preventDefault()}>Contact</a></nav><div className="flex items-center gap-space-md"><a className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-[2px_2px_0px_rgba(48,48,48,0.2)] hover:bg-primary transition-all duration-150" data-path="registration" href="#/" onClick={(e) => { e.preventDefault(); navigate('/register'); }}>Register</a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full font-body-md text-on-surface">
{/* ========================================================= */}
{/* SECTION 1: HERO & STAT STRIP                             */}
{/* ========================================================= */}
<section className="relative w-full max-w-[1440px] mx-auto px-margin pt-12 pb-16 overflow-hidden">
{/* Atmospheric background geometric accent */}
<div className="absolute -top-16 -right-24 w-[480px] h-[480px] rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/2 left-0 w-[360px] h-[360px] rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none -z-10"></div>
<div className="grid grid-cols-12 gap-gutter items-center">
{/* Left Column: Typographic Hierarchy */}
<div className="col-span-7 flex flex-col items-start pr-4">
{/* Eyebrow Badge */}
<div className="inline-flex items-center gap-space-xs px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed mb-space-md shadow-[2px_2px_0px_rgba(48,48,48,0.12)]">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-bold">Ideas Today. Careers Tomorrow.</span>
</div>
{/* Hero Headline */}
<h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface mb-space-md leading-[1.05]">
          TED<span className="text-primary font-extrabold">x</span>CRCE<br/>
<span className="text-primary-container relative inline-block">
            Internship Expo
            {/* Artistic underline decoration */}
<svg className="absolute -bottom-2 left-0 w-full text-secondary" fill="none" height="10" viewBox="0 0 340 10" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7C95 2 245 2 338 7" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
</svg>
</span>
<span className="text-on-surface ml-2">2026</span>
</h1>
{/* One-line subtext */}
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-xl">
          A platform for FCRCE students to explore opportunities, connect with leading organizations, and take the definitive next step towards their future.
        </p>
{/* CTA Action Buttons */}
<div className="flex items-center gap-space-md relative">
{/* Primary CTA Button */}
<a className="relative group inline-flex items-center gap-space-xs px-8 py-3.5 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-[3px_3px_0px_#1b1c1c] hover:bg-primary transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#1b1c1c]" href="#companies">
<span>Explore Opportunities</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
{/* Secondary Outlined CTA Button */}
<a className="inline-flex items-center px-7 py-3.5 bg-surface text-on-surface font-label-lg text-label-lg rounded-xl shadow-[2px_2px_0px_#8f6f6c] hover:bg-inverse-surface hover:text-surface-bright transition-all duration-150" href="#/" onClick={(e) => { e.preventDefault(); navigate('/register'); }}>
            Register Now
          </a>
{/* Annotation Accent */}
<div className="hidden lg:flex items-center gap-1.5 absolute -right-44 top-1 text-secondary">
<svg className="-rotate-12" fill="none" height="24" viewBox="0 0 40 28" width="34">
<path d="M36 4C24 16 12 18 4 24M4 24L12 24M4 24L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
</svg>
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary font-bold">Priority Entry</span>
</div>
</div>
{/* Venue Micro Note */}
<div className="mt-space-lg flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span>Bandra West Campus · Mumbai, Maharashtra</span>
</div>
</div>
{/* Right Column: Layered Editorial Collage */}
<div className="col-span-5 relative flex justify-center items-center">
{/* Background Polaroid shadow shape */}
<div className="w-full max-w-[430px] p-4 bg-surface-container-lowest rounded-xl shadow-[6px_6px_0px_rgba(48,48,48,0.16)] -rotate-2 transform transition-transform hover:rotate-0 duration-300 relative group">
{/* Faux Masking Washi Tape Top Corner */}
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-4 py-1 bg-secondary-fixed text-on-secondary-fixed text-label-badge font-label-badge tracking-widest uppercase shadow-[0_1px_4px_rgba(0,0,0,0.12)] rotate-1">
            TEDxCRCE Official Expo
          </div>
{/* Image Container with Campus Visual */}
<div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Stunning aerial seaside perspective of the Father Conceicao Rodrigues College of Engineering campus building on Bandstand in Bandra Mumbai, overlooking the Arabian Sea with students walking in sunny daylight, architectural brutalist modernism" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmWzzYWDBdiwkiUlJsXyX4mLn-qwpZ1Pvn0K1K2cHSVaC17rjYQS5kqgUiABvtQ8yREwSutq-dx9diZiPTq6gceUMQtGr6nhmobkb6jWkefSP6YzYvq8Y1uO7lTBApSPWiqEilcIVQ8-I1ujgldHlcrfGQ2nxdrmsWqBOTAbSBCv8E1ZYhWi8KxOkglvogzjuzFfmGhNqCXayNt_LfdDieUQY7pmrmCDstFhrU34l28uoPYxAgpMPE"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 text-surface-bright font-label-md text-label-md">
              FCRCE Campus · Bandstand, Mumbai
            </div>
</div>
{/* Sticky Note Badge pinned at bottom-right corner */}
<div className="absolute -bottom-6 -right-6 z-20 bg-secondary-fixed text-on-secondary-fixed p-3.5 rounded-lg shadow-[4px_4px_0px_rgba(48,48,48,0.2)] rotate-3 max-w-[210px]">
<div className="flex items-center gap-1 text-primary font-bold text-label-badge uppercase tracking-wider mb-0.5">
<span className="material-symbols-outlined text-[15px]">event</span>
<span>Mark The Date</span>
</div>
<p className="font-headline-sm text-headline-sm leading-tight text-on-secondary-container">
              3 OCT 2026
            </p>
<p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mt-0.5">
              FCRCE Bandra, Mumbai
            </p>
</div>
</div>
</div>
</div>
{/* Stat Strip below Hero */}
<div className="w-full mt-14 bg-surface-container-low rounded-xl p-space-md shadow-[3px_3px_0px_rgba(48,48,48,0.08)]">
<div className="grid grid-cols-4 divide-x divide-outline-variant/50">
{/* Stat Item 1 */}
<div className="flex flex-col items-center justify-center py-2 px-4 text-center">
<span className="font-display-section text-display-section text-primary-container leading-none">50+</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1">Marquee Companies</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tech, Core &amp; Emerging Tech</span>
</div>
{/* Stat Item 2 */}
<div className="flex flex-col items-center justify-center py-2 px-4 text-center">
<span className="font-display-section text-display-section text-secondary leading-none">200+</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1">Internship Roles</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Summer &amp; Winter Traineeships</span>
</div>
{/* Stat Item 3 */}
<div className="flex flex-col items-center justify-center py-2 px-4 text-center">
<span className="font-display-section text-display-section text-on-surface leading-none">1</span>
<span className="font-label-lg text-label-lg text-on-surface mt-1">High-Impact Day</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">On-Campus Interviews &amp; Offers</span>
</div>
{/* Stat Item 4 */}
<div className="flex flex-col items-center justify-center py-2 px-4 text-center">
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[26px]">connect_without_contact</span>
</div>
<span className="font-label-lg text-label-lg text-on-surface mt-1 uppercase tracking-tight">Students · Ideas · Networks</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium text-secondary">Discover What's Next</span>
</div>
</div>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 2: ABOUT THE EXPO                                */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-margin py-20 bg-surface" id="about">
<div className="grid grid-cols-12 gap-gutter items-start">
{/* Left: Narrative & Mission */}
<div className="col-span-5 flex flex-col pr-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-[2px] bg-secondary"></span>
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary font-bold">Curated Ambition</span>
</div>
<h2 className="font-display-section text-display-section text-on-surface leading-tight mb-space-md">
          What is <br/>the Expo?
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md">
          The TEDxCRCE Internship Expo 2026 is Bandra’s signature collegiate career convergence. We connect high-caliber engineering, AI, data science, and design undergraduates directly with forward-looking industry pioneers.
        </p>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
          Rooted in the TED ethos of “ideas worth spreading,” our format strips away traditional placement bureaucracy to cultivate authentic technical dialogue, live technical showcases, and instant offer letters.
        </p>
{/* Quote Tag */}
<div className="p-space-md bg-secondary-fixed/50 rounded-lg shadow-[2px_2px_0px_rgba(48,48,48,0.1)] relative">
<div className="font-label-badge text-label-badge uppercase tracking-wider text-on-secondary-fixed mb-1 font-bold">The CRCE Edge</div>
<p className="font-body-md text-body-md text-on-secondary-container italic">
            “Bridging intellectual classroom theory with immediate engineering execution across India's industrial capitals.”
          </p>
</div>
</div>
{/* Right: Three Structured Pillar Cards */}
<div className="col-span-7 grid grid-cols-1 gap-space-md">
{/* Pillar 1 */}
<div className="group p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] hover:-translate-y-1 transition-all duration-200 flex items-start gap-space-md">
<div className="w-14 h-14 shrink-0 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm mb-1">
<h3 className="font-headline-md text-headline-md text-on-surface">Direct Placement &amp; Internship Interviews</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge font-bold">Fast-Track</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Engage directly with HR leaders, engineering directors, and product teams on-site at FCRCE. Complete on-spot assessments and secure accredited internship roles for 2026/2027 academic terms.
            </p>
</div>
</div>
{/* Pillar 2 */}
<div className="group p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] hover:-translate-y-1 transition-all duration-200 flex items-start gap-space-md">
<div className="w-14 h-14 shrink-0 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm mb-1">
<h3 className="font-headline-md text-headline-md text-on-surface">Industry Mentorship &amp; Portfolio Reviews</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge font-bold">1-on-1 Access</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Receive live feedback on GitHub repositories, UX design dossiers, and robotics prototypes from veteran senior architects and technology consultants before your final evaluations.
            </p>
</div>
</div>
{/* Pillar 3 */}
<div className="group p-space-lg rounded-xl bg-surface-container-lowest shadow-[3px_3px_0px_rgba(48,48,48,0.08)] hover:shadow-[5px_5px_0px_rgba(48,48,48,0.14)] hover:-translate-y-1 transition-all duration-200 flex items-start gap-space-md">
<div className="w-14 h-14 shrink-0 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-3xl">hub</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm mb-1">
<h3 className="font-headline-md text-headline-md text-on-surface">Future-Ready Domain Opportunities</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge font-bold">Cutting Edge</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Targeted openings across Artificial Intelligence, Web3 Infrastructure, Embedded Electronics, Cloud Compute, Fintech Engineering, and Sustainable CleanTech Systems.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 3: PARTICIPATING COMPANIES                       */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-margin py-20 bg-surface-container-low rounded-xl my-4" id="companies">
{/* Header row */}
<div className="flex items-end justify-between mb-12">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary font-bold">Scouting Bandra Campus</span>
</div>
<h2 className="font-display-section text-display-section text-on-surface leading-tight">
          Participating Companies
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Over 50 industry pioneers scouting engineering and tech talent directly at the Father Conceicao Rodrigues campus.
        </p>
</div>
{/* Filter / Category Pill strip */}
<div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-lg shadow-sm">
<button className="px-3.5 py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md font-medium shadow-[1px_1px_0px_#1b1c1c]">All Tracks (50+)</button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-medium transition-colors">Core Software</button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-medium transition-colors">Fintech &amp; Banking</button>
<button className="px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-medium transition-colors">Cloud &amp; AI</button>
</div>
</div>
{/* 24 Structured Typographic Company Tiles (4 Columns x 6 Rows) */}
<div className="grid grid-cols-4 gap-gutter">
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
<section className="w-full bg-inverse-surface text-inverse-on-surface py-20 my-8 relative overflow-hidden" id="sponsors">
<div className="max-w-[1440px] mx-auto px-margin flex flex-col">
{/* Section Header */}
<div className="flex flex-col items-center text-center mb-12">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-badge text-label-badge uppercase tracking-widest font-bold mb-2">
          Corporate &amp; Innovation Alliances
        </div>
<h2 className="font-display-section text-display-section text-surface-bright leading-tight">
          Our Sponsors
        </h2>
<p className="font-body-md text-body-md text-surface-variant max-w-lg mt-2">
          Proudly supported by our institutional, technology, and ecosystem champions who believe in fostering undergraduate innovation.
        </p>
</div>
{/* Single-Row Horizontal 6-Sponsor Grid */}
<div className="grid grid-cols-6 gap-gutter items-stretch">
{/* Sponsor 1: Title */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed font-semibold mb-2">Title Sponsor</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-primary-fixed-dim transition-colors">TATA TRUSTS</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Philanthropy &amp; Tech</span>
</div>
{/* Sponsor 2: Powered By */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-fixed font-semibold mb-2">Powered By</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-secondary-fixed transition-colors">AWS EDU</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Cloud Infrastructure</span>
</div>
{/* Sponsor 3: Tech Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-tertiary-fixed font-semibold mb-2">Tech Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-tertiary-fixed transition-colors">GITHUB</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Developer Pack</span>
</div>
{/* Sponsor 4: Student Ecosystem */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed font-semibold mb-2">Ecosystem Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-primary-fixed transition-colors">DEVPOST</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Talent Platform</span>
</div>
{/* Sponsor 5: Beverage Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-fixed font-semibold mb-2">Beverage Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-secondary-fixed transition-colors">RED BULL</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Energy &amp; Focus</span>
</div>
{/* Sponsor 6: Media Partner */}
<div className="group bg-surface-dim/10 hover:bg-surface-dim/20 p-5 rounded-xl transition-all duration-200 flex flex-col items-center justify-between text-center shadow-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-tertiary-fixed font-semibold mb-2">Media Partner</span>
<div className="my-auto py-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-surface-bright group-hover:text-tertiary-fixed transition-colors">YOURSTORY</span>
</div>
<span className="font-body-sm text-body-sm text-surface-variant">Startup Journalism</span>
</div>
</div>
</div>
</section>
{/* ========================================================= */}
{/* SECTION 5: EVENT INFO & CONTACT                          */}
{/* ========================================================= */}
<section className="w-full max-w-[1440px] mx-auto px-margin py-20 bg-surface" id="contact">
{/* 4 Structured Event Info Blocks */}
<div className="grid grid-cols-4 gap-gutter mb-20">
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
<div className="grid grid-cols-12 gap-gutter items-stretch bg-surface-container-low p-space-xl rounded-xl shadow-[4px_4px_0px_rgba(48,48,48,0.08)]" id="register">
{/* Left: Contact & Institutional Info */}
<div className="col-span-5 flex flex-col justify-between pr-6">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-badge text-label-badge uppercase tracking-widest text-primary font-bold">Direct Coordination</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight mb-space-md">
            Get in Touch with the Organizers
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
            Have queries regarding company booth allocations, candidate eligibility, or day-of logistics? Reach out to the student organizing team or visit the campus office.
          </p>
{/* Contact details list */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Official Correspondence</span>
<a className="font-label-lg text-label-lg text-on-surface hover:text-primary font-medium" href="mailto:expo2026@crce.ac.in">expo2026@crce.ac.in</a>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge text-on-surface-variant uppercase">College Campus Helpline</span>
<span className="font-label-lg text-label-lg text-on-surface font-medium">+91 22 6711 4000</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Institution</span>
<span className="font-label-lg text-label-lg text-on-surface font-medium">TEDxCRCE Chapter, Fr. Agnel CRCE</span>
</div>
</div>
</div>
</div>
{/* Little Taped Card Accent */}
<div className="mt-8 p-3.5 bg-secondary-fixed text-on-secondary-fixed rounded shadow-sm relative">
<p className="font-body-sm text-body-sm font-medium">
            Student volunteers will be stationed at the Bandstand entrance gates from 8:00 AM onwards to assist visiting corporate delegates.
          </p>
</div>
</div>
{/* Right: Inquiry / Registration Form */}
<div className="col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-[3px_3px_0px_rgba(48,48,48,0.06)] flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Send a Message or Register Interest</h3>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">Fast Response</span>
</div>
<form className="flex flex-col gap-space-md" onsubmit="event.preventDefault(); alert('Thank you for registering your interest. The TEDxCRCE committee will reach out to you within 24 hours.');">
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase">Full Name *</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. Neil Fernandes" required="" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase">Email Address *</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. student@crce.ac.in" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase">Category</label>
<select className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm">
<option>FCRCE Undergraduate Student</option>
<option>External Visiting Student</option>
<option>Corporate Recruiter / Company</option>
<option>Alumni / Speaker</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase">Engineering Branch / Company</label>
<input className="w-full px-3.5 py-2.5 rounded bg-surface text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest shadow-sm placeholder:text-on-surface-variant/40" placeholder="e.g. Computer Engineering / FinTech" type="text"/>
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
<button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-[3px_3px_0px_#1b1c1c] hover:bg-primary transition-all duration-150 hover:-translate-y-0.5" type="submit">
<span>Send Message</span>
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl"><div className="max-w-[1440px] mx-auto px-margin flex flex-col gap-space-xl"><div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"><div className="md:col-span-5 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><img alt="TEDxCRCE Logo" className="h-8 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AEtjO1Wv17fPGZaLmQXq7a6amA4WbWcLH5hhV1oOotGWaoJyu7BBK5QpPXRJVVHyUfqU6hlIRA0KgAXweESkb3tTpGbayr8SEhKEjGHVX16vdNMfTTCwMS3JQHPJJzYqXqBYYPiH4h88wEZWanWCB3hY9QFIypC9rtQbra8GBwzAaR5WoJTupcm3yuMxbo_ucCmW4oBpaYB2Kkbg35Mx8NCnVsTkKkSWKH66aoTVzSwA5hSN8ZCvCX-noY28eCs"/><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-surface-bright">TEDxCRCE</span></div><p className="font-body-md text-body-md text-surface-variant max-w-sm">Internship Expo 2026. Empowering collegiate talent, intellectual curiosity, and high-growth opportunities under the spirit of ideas worth spreading.</p></div><div className="md:col-span-4 flex flex-col gap-space-sm"><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed">Quick Navigation</span><div className="flex flex-col gap-space-xs"><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" data-path="home" href="#/" onClick={(e) => e.preventDefault()}>Home</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" data-path="about" href="#/" onClick={(e) => e.preventDefault()}>About the Summit</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" data-path="companies" href="#/" onClick={(e) => e.preventDefault()}>Participating Companies</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" data-path="sponsors" href="#/" onClick={(e) => e.preventDefault()}>Our Sponsors</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" data-path="contact" href="#/" onClick={(e) => e.preventDefault()}>Get In Touch</a></div></div><div className="md:col-span-3 flex flex-col gap-space-sm"><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed">Connect &amp; Follow</span><div className="flex flex-col gap-space-xs"><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" href="#/" onClick={(e) => e.preventDefault()}>LinkedIn Official</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" href="#/" onClick={(e) => e.preventDefault()}>Instagram Community</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" href="#/" onClick={(e) => e.preventDefault()}>YouTube Channel</a><a className="font-body-md text-body-md text-surface-variant hover:text-surface-bright transition-colors" href="#/" onClick={(e) => e.preventDefault()}>Student Portal</a></div></div></div><div className="pt-space-md border-t border-inverse-surface/40 flex flex-col md:flex-row justify-between items-center gap-space-sm font-body-sm text-body-sm text-surface-dim"><span>This independent TEDx event is operated under license from TED.</span><span>© 2026 TEDxCRCE Internship Expo. All rights reserved.</span></div></div></footer>
      <CompanyDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
