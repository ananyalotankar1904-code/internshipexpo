import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';

const Step1StudentDetails = () => {
  const navigate = useNavigate();
  const { studentDetails, updateStudentDetails } = useRegistration();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Original Body Content */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-lg"><img alt="TEDxCRCE wordmark logo featuring bold TEDx in red and CRCE in dark charcoal with sleek collegiate typographic mark. Brand logo. - Primary color: #b91c1c
- Font: syne
- Mode: light
- Roundness: rounded-sm
" className="h-8 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AEtjO1Wv17fPGZaLmQXq7a6amA4WbWcLH5hhV1oOotGWaoJyu7BBK5QpPXRJVVHyUfqU6hlIRA0KgAXweESkb3tTpGbayr8SEhKEjGHVX16vdNMfTTCwMS3JQHPJJzYqXqBYYPiH4h88wEZWanWCB3hY9QFIypC9rtQbra8GBwzAaR5WoJTupcm3yuMxbo_ucCmW4oBpaYB2Kkbg35Mx8NCnVsTkKkSWKH66aoTVzSwA5hSN8ZCvCX-noY28eCs"/><div className="hidden sm:flex flex-col"><span className="font-label-lg text-label-lg tracking-wide uppercase text-on-surface font-bold">Internship Expo 2026</span><span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Student Candidate Portal</span></div></div><nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors uppercase tracking-wider text-primary font-bold" data-path="candidate-overview" href="#">Overview</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-guidelines" href="#">Guidelines</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="partner-companies" href="#">Companies</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-faq" href="#">Support &amp; FAQ</a></nav><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button"><span className="material-symbols-outlined text-[18px] text-on-surface-variant">bookmark_border</span><span>Save &amp; Exit</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full max-w-[1440px] mx-auto px-margin pt-20 flex-1"><div className="flex flex-col w-full">
{/* Progress Stepper Indicator (Fixed Desktop Grid) */}
<section className="w-full max-w-[1020px] mx-auto pt-6 pb-10">
<div className="relative flex items-center justify-between w-full">
{/* Background Connecting Line Track */}
<div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-surface-container-highest z-0"></div>
{/* Step 1: Active */}
<div className="relative z-10 flex items-center gap-space-sm bg-background pr-space-md">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-[0_2px_8px_rgba(185,28,28,0.25)] ring-4 ring-primary-fixed">
          1
        </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Step 01</span>
<span className="font-headline-sm text-label-lg font-bold text-on-surface whitespace-nowrap">Student Details</span>
</div>
</div>
{/* Step 2: Inactive */}
<div className="relative z-10 flex items-center gap-space-sm bg-background px-space-md">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
          2
        </div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge uppercase tracking-wider text-outline font-semibold">Step 02</span>
<span className="font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap">Resume Upload</span>
</div>
</div>
{/* Step 3: Inactive */}
<div className="relative z-10 flex items-center gap-space-sm bg-background px-space-md">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
          3
        </div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge uppercase tracking-wider text-outline font-semibold">Step 03</span>
<span className="font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap">Positions</span>
</div>
</div>
{/* Step 4: Inactive */}
<div className="relative z-10 flex items-center gap-space-sm bg-background px-space-md">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
          4
        </div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge uppercase tracking-wider text-outline font-semibold">Step 04</span>
<span className="font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap">Summary</span>
</div>
</div>
{/* Step 5: Inactive */}
<div className="relative z-10 flex items-center gap-space-sm bg-background pl-space-md">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md font-semibold">
          5
        </div>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge uppercase tracking-wider text-outline font-semibold">Step 05</span>
<span className="font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap">Confirmation</span>
</div>
</div>
</div>
</section>
{/* Editorial Collage Main Stage */}
<div className="relative w-full max-w-[1312px] mx-auto pb-32">
{/* Tactile Background Accent Elements */}
<div className="absolute -top-6 -left-6 w-56 h-56 bg-secondary-fixed opacity-30 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/3 -right-8 w-64 h-64 bg-primary-fixed opacity-40 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
{/* Left Column: Editorial Information & Verified Student Snapshot */}
<aside className="xl:col-span-4 flex flex-col gap-space-lg sticky top-28">
{/* Tape Badge Note Card */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-[4px_4px_0px_rgba(27,28,28,0.08)] overflow-visible">
{/* Physical Washi Tape Accent */}
<div className="absolute -top-3.5 left-6 bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-widest px-3 py-1 shadow-[0_1px_3px_rgba(47,47,47,0.15)] -rotate-1 select-none">
            ◆ TEDxCRCE Accreditation
          </div>
<div className="flex flex-col gap-space-sm mt-space-xs">
<span className="font-label-badge text-label-badge uppercase text-secondary font-bold tracking-wider">Cohort 2026</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-bold">Fast-track your recruiter screening.</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              TEDxCRCE partners directly with tech unicorns, design houses, and hardware laboratories. Profiles with complete credentials receive priority slot matching on Expo Day.
            </p>
</div>
{/* Mini Checklist Stat */}
<div className="mt-space-md pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]" style={{}} /* font-variation-settings: 'FILL' 1; */>verified</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Campus Eligibility</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fr. CRCE, Bandra (West)</span>
</div>
</div>
<span className="font-label-badge text-label-badge text-primary bg-primary-fixed px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
</div>
</div>
{/* Recruiting Partners Ticker Pill */}
<div className="bg-inverse-surface text-inverse-on-surface p-space-lg rounded-xl shadow-[4px_4px_0px_rgba(27,28,28,0.12)]">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-container font-bold">Hiring On-Campus</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
</span>
</div>
<p className="font-headline-sm text-headline-sm text-inverse-on-surface font-bold mb-space-xs">38+ Engineering &amp; Design Roles</p>
<p className="font-body-sm text-body-sm text-white">
            Roles mapped across AI Research, Full-Stack, Robotics, Embedded Systems, and Product Strategy.
          </p>
{/* Metric spark row */}
<div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="bg-surface-variant/20 p-space-sm rounded-md">
<div className="font-headline-md text-headline-md font-bold text-white">₹45k/mo</div>
<div className="font-label-badge text-label-badge text-white uppercase">Avg. Stipend</div>
</div>
<div className="bg-surface-variant/20 p-space-sm rounded-md">
<div className="font-headline-md text-headline-md font-bold text-white">100%</div>
<div className="font-label-badge text-label-badge text-white uppercase">Verified Desks</div>
</div>
</div>
</div>
</aside>
{/* Right Column: Step 1 Main Form Card */}
<main className="xl:col-span-8">
<div className="relative bg-surface-container-lowest p-10 rounded-xl shadow-[4px_4px_0px_rgba(27,28,28,0.08)]">
{/* Sticky Visual Label Tag */}
<div className="absolute -top-3.5 right-10 bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge uppercase font-bold tracking-widest px-3.5 py-1 shadow-[0_1px_3px_rgba(47,47,47,0.12)] rotate-1">
            Application Phase 1 • Personal Profile
          </div>
{/* Form Card Header */}
<div className="flex flex-col mb-8">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="inline-block w-2.5 h-2.5 bg-primary rounded-full"></span>
<span className="font-label-badge text-label-badge text-primary uppercase font-bold tracking-widest">Candidate Onboarding</span>
</div>
<h1 className="font-display-section text-display-section text-on-surface font-bold tracking-tight">Tell us about yourself</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              This foundational info will be synchronized directly into the company interview rosters.
            </p>
</div>
{/* Input Fields Layout */}
<form className="flex flex-col gap-6" id="candidateStep1Form" onSubmit={(e) => e.preventDefault()}>
{/* 1. Full Legal Name */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
</label>
<span className="font-label-badge text-label-badge text-outline">As per College ID Card</span>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]">badge</span>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" id="fullName" name="fullName" placeholder="e.g. Neil Fernandes" required="" type="text" value={studentDetails.fullName} onChange={(e) => updateStudentDetails({fullName: e.target.value})}/>
</div>
</div>
{/* 2. College Verification (Pre-locked for Verified Partner) */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="collegeName">
                  Institutional Affiliation <span className="text-primary">*</span>
</label>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge uppercase font-bold">
<span className="material-symbols-outlined text-[14px]">verified</span> Verified Host Institution
                </span>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]">account_balance</span>
</div>
<input className="w-full pl-10 pr-10 py-3 bg-surface-container-high text-on-surface/80 font-body-md text-body-md rounded-lg cursor-not-allowed select-none" disabled="" id="collegeName" name="collegeName" type="text" value="Fr. Conceicao Rodrigues College of Engineering (CRCE), Bandra"/>
<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[18px]">lock</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-outline">Direct campus validation enabled. CRCE students bypass external screening fees.</p>
</div>
{/* Two-Column Row: Branch + Academic Year */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{/* 3. Branch / Department Select */}
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="branchSelect">
                  Department / Major <span className="text-primary">*</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]">school</span>
</div>
<select className="w-full pl-10 pr-10 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg appearance-none focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer" id="branchSelect" name="branchSelect" required="" value={studentDetails.branch} onChange={(e) => updateStudentDetails({branch: e.target.value})}>
<option disabled="" value="">Select Department</option>
<option selected="" value="comps">Computer Engineering</option>
<option value="aids">Artificial Intelligence &amp; Data Science (AI-DS)</option>
<option value="ecs">Electronics &amp; Computer Science (ECS)</option>
<option value="mech">Mechanical Engineering</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]">expand_more</span>
</div>
</div>
</div>
{/* 4. Academic Year Selection Pill Cards */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1">
                    Year of Study <span className="text-primary">*</span>
</label>
<div className="group relative flex items-center cursor-help">
<span className="material-symbols-outlined text-outline text-[16px]">info</span>
<div className="absolute bottom-full right-0 mb-1.5 hidden group-hover:block w-48 p-2 bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm rounded-lg shadow-lg z-30">
                      Determines internship role eligibility matrix.
                    </div>
</div>
</div>
{/* Segmented Control Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 bg-surface-container-low p-1 rounded-lg" id="yearSelector">
<button className="py-2.5 rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-all text-center" data-year="1" onClick={() => updateStudentDetails({year: "1"})} type="button">FE</button>
<button className="py-2.5 rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-all text-center" data-year="2" onClick={() => updateStudentDetails({year: "2"})} type="button">SE</button>
<button className="py-2.5 rounded-md font-label-md text-label-md bg-primary text-on-primary font-bold shadow-sm transition-all text-center" data-year="3" onClick={() => updateStudentDetails({year: "3"})} type="button">TE</button>
<button className="py-2.5 rounded-md font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-all text-center" data-year="4" onClick={() => updateStudentDetails({year: "4"})} type="button">BE</button>
</div>
</div>
</div>
{/* Two-Column Row: Institutional Email + WhatsApp Alerts */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{/* 5. Email Address */}
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="emailAddress">
                  Email Address <span className="text-primary">*</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-[20px]">alternate_email</span>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" id="emailAddress" name="emailAddress" placeholder="student.id@crce.ac.in" required="" type="email" value={studentDetails.email} onChange={(e) => updateStudentDetails({email: e.target.value})}/>
</div>
<div className="flex items-center gap-1 text-outline font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span>
<span>Institutional domain matched (@crce.ac.in)</span>
</div>
</div>
{/* 6. Phone / WhatsApp Number */}
<div className="flex flex-col gap-1.5">
<label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="phoneNumber">
                  WhatsApp Contact <span className="text-primary">*</span>
</label>
<div className="relative flex">
{/* Country Prefix Pill */}
<div className="inline-flex items-center gap-1 px-3 py-3 bg-surface-container-high text-on-surface font-label-md text-label-md rounded-l-lg select-none">
<span>🇮🇳</span>
<span>+91</span>
</div>
<input className="w-full pl-3.5 pr-10 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-r-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" id="phoneNumber" name="phoneNumber" placeholder="98765 43210" required="" type="tel" value={studentDetails.phone} onChange={(e) => updateStudentDetails({phone: e.target.value})}/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
{/* WhatsApp Green Check Badge */}
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold" title="Verified for WhatsApp dispatch">
                      ✓
                    </span>
</div>
</div>
<span className="font-body-sm text-body-sm text-outline">Instant notifications for schedule changes &amp; interview calls.</span>
</div>
</div>
{/* Data Consent Agreement Callout Box */}
<div className="mt-2 bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-md">
<input checked="" className="mt-1 h-4 w-4 rounded accent-primary text-primary focus:ring-primary cursor-pointer" id="consentCheck" type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="consentCheck">
                I authorize <strong className="text-on-surface font-semibold">TEDxCRCE 2026 Career Cell</strong> to share my contact records, academic marks, and upcoming technical resumes directly with accredited hiring partners for internship scheduling.
              </label>
</div>
</form>
</div>
</main>
</div>
</div>
{/* Docked Desktop Bottom Navigation Bar */}
<footer className="sticky bottom-0 left-0 right-0 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-40">
<div className="max-w-[1312px] mx-auto px-4 md:px-margin py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
{/* Back Action (Step 1 Disabled) */}
<button className="w-full md:w-auto inline-flex items-center justify-center gap-space-xs px-5 py-2.5 rounded-lg bg-surface-container-high text-outline cursor-not-allowed opacity-60 font-label-lg text-label-lg transition-all" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Previous Step</span>
</button>
{/* Center Auto-Save State */}
<div className="hidden md:flex items-center gap-space-sm font-label-md text-label-md text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
<span>Step 1 of 5 • Autosaved to candidate profile</span>
</div>
{/* Forward Action (Proceed to Step 2) */}
<button className="w-full md:w-auto inline-flex items-center justify-center gap-space-sm px-7 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-[2px_2px_0px_rgba(27,28,28,0.3)] hover:shadow-[4px_4px_0px_rgba(27,28,28,0.4)] active:translate-x-0.5 active:translate-y-0.5 transition-all group" id="continueBtn" onClick={() => navigate('/register/step2')} type="button">
<span>Continue to Resume Upload</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</footer>
</div>
</main><footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)]"><div className="max-w-[1440px] mx-auto px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-bold">TEDx<span className="text-on-surface">CRCE</span></span><span className="font-body-sm text-body-sm text-on-surface-variant">This independent TEDx event is operated under license from TED.</span></div><div className="flex items-center gap-space-lg"><span className="font-body-sm text-body-sm text-on-surface-variant">© 2026 TEDxCRCE Internship Expo. All rights reserved.</span><div className="flex items-center gap-space-sm text-on-surface-variant font-label-badge text-label-badge uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>Session Secured</div></div></div></footer>
    </div>
  );
};

export default Step1StudentDetails;
