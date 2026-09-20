import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';

const Step2ResumeUpload = () => {
  const navigate = useNavigate();
  const { resumeLink, setResumeLink } = useRegistration();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Original Body Content */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-lg"><span className="font-headline-sm text-headline-sm font-bold text-on-surface">TEDx<span className="text-primary">CRCE</span></span><div className="hidden sm:flex flex-col"><span className="font-label-lg text-label-lg tracking-wide uppercase text-on-surface font-bold">Internship Expo 2026</span><span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Student Candidate Portal</span></div></div><nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors uppercase tracking-wider text-primary font-bold" data-path="candidate-overview" href="/">Overview</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-guidelines" href="/#about">Guidelines</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="partner-companies" href="/#companies">Companies</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-faq" href="/#contact">Support &amp; FAQ</a></nav><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button"><span className="material-symbols-outlined text-[18px] text-on-surface-variant">bookmark_border</span><span>Save &amp; Exit</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full max-w-[1440px] mx-auto px-margin pt-20 flex-1"><div className="flex flex-col w-full">
{/* Top 5-Step Horizontal Stepper Tracker */}
<section className="w-full pb-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-4 md:p-space-lg shadow-sm overflow-x-auto hide-scrollbar">
<div className="relative flex items-center justify-between max-w-5xl mx-auto px-2 md:px-space-md min-w-[600px]">
{/* Background Track Segments */}
<div className="absolute left-12 right-12 top-5 h-[3px] bg-surface-container-high -z-0"></div>
{/* Active Track Line Segment 1 to 2 */}
<div className="absolute left-12 w-1/4 top-5 h-[3px] bg-primary -z-0"></div>
{/* Step 1: Completed */}
<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[2px_2px_0px_#1b1c1c]">
<span className="material-symbols-outlined text-[20px]" style={{}} /* font-variation-settings: 'FILL' 1; */>check</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface font-bold">1. Student Details</span>
<span className="font-label-badge text-label-badge text-primary uppercase tracking-wider">Completed</span>
</div>
{/* Step 2: Active */}
<div className="relative z-10 flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[3px_3px_0px_#1b1c1c] scale-110">
<span className="font-headline-sm text-headline-sm font-bold leading-none">2</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-primary font-bold">2. Resume Upload</span>
<span className="font-label-badge text-label-badge text-secondary font-bold uppercase tracking-wider">In Progress</span>
</div>
{/* Step 3: Inactive */}
<div className="relative z-10 flex flex-col items-center opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface-variant">3</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">3. Positions</span>
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Pending</span>
</div>
{/* Step 4: Inactive */}
<div className="relative z-10 flex flex-col items-center opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface-variant">4</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">4. Summary</span>
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Pending</span>
</div>
{/* Step 5: Inactive */}
<div className="relative z-10 flex flex-col items-center opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface-variant">5</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">5. Confirmation</span>
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Locked</span>
</div>
</div>
</div>
</section>
{/* Two-Column Editorial Collage Workspace (Desktop Fixed 12-Col Layout) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start pb-space-xl">
{/* LEFT COLUMN: Guidance & Recruiter Telemetry (4 Cols) */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/* Card 1: Resume Benchmarking with Tactile Tape Accent */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
{/* Washi Tape Pin Accent */}
<div className="absolute -top-3 left-6 px-3 py-0.5 bg-secondary-fixed text-on-secondary-fixed text-label-badge font-label-badge font-bold uppercase tracking-wider -rotate-2 shadow-sm">
          Recruiter Screening Protocol
        </div>
<div className="pt-2 flex items-center gap-space-sm mb-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]" style={{}} /* font-variation-settings: 'FILL' 1; */>verified</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Resume Benchmark</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
          TEDxCRCE automated parsing scans your resume for core technical competencies, verified GitHub repos, project impact, and academic transcripts relevant to 50+ recruiting partners.
        </p>
{/* Formatting Checklist */}
<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">One-page standard PDF format</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">Standard readable ATS typography</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-body-sm text-body-sm font-medium text-on-surface">Direct HTTPS link to portfolio &amp; code</span>
</div>
</div>
{/* Micro Illustration Badge */}
<div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">lightbulb</span>
<span className="font-label-md text-label-md font-semibold text-secondary">Tip: Quantify your results</span>
</div>
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">v2.6 Engine</span>
</div>
</div>
{/* Card 2: Contrast Feature Card (Dark Charcoal Bento Tile) */}
<div className="bg-inverse-surface text-inverse-on-surface p-space-lg rounded-xl shadow-md relative overflow-hidden">
{/* Visual Background Circuit Accent (Inline Vector) */}
<div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="4 4" strokeWidth="2"></circle>
<path d="M10 50 H90 M50 10 V90" strokeWidth="1.5" />
</svg>
</div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-badge text-label-badge uppercase tracking-widest text-secondary-container font-bold">
            Live Diagnostics
          </span>
<span className="flex h-2 w-2 rounded-full bg-secondary-container animate-pulse"></span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white font-bold mb-space-xs">
          AI Resume Parser Active
        </h3>
<p className="font-body-sm text-body-sm text-white mb-space-md">
          Parsed profiles are indexed directly for tier-1 partner shortlists within 48 seconds of upload.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="bg-surface-container-highest/10 rounded-lg p-space-sm">
<span className="block font-headline-md text-headline-md text-white font-bold">94%</span>
<span className="font-label-badge text-label-badge text-white uppercase">ATS Parse Index</span>
</div>
<div className="bg-surface-container-highest/10 rounded-lg p-space-sm">
<span className="block font-headline-md text-headline-md text-secondary-container font-bold">PDF Only</span>
<span className="font-label-badge text-label-badge text-white uppercase">Strict Format</span>
</div>
</div>
</div>
{/* Card 3: Photo Vignette of Recruiter Review Session */}
<div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm p-space-md">
<div className="relative h-32 w-full rounded-lg overflow-hidden mb-space-sm">
<img className="w-full h-full object-cover" data-alt="Modern candid editorial photograph of corporate and tech recruiters reviewing collegiate engineering candidate resumes on dual monitor displays during the TEDxCRCE Career Expo, warm natural lighting, deep shadows, authentic workplace atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdPkSgHob267F0UPNYEQbKm0mN4IhNmTlFX4O4bM5YbdYq-hTDXc2SEfJyYB3SGTL378cEHwnAJuoig1hrf5wf7FWvI5UOvNNPca6oaItObTWxKALTMJ7OjHWgp7IsRosnS_GVfC7ZKS1L3gv7XqGBkNZPFE35K7F-7lRYZggi6w5FJ8xykgtUbkx1ly0mv64yip0OtCsJlCKxCamynpzm4l3Yq2SKJmY8Lesu3EN5JAkKjmdCsNQu"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
<span className="absolute bottom-2 left-2 text-white font-label-badge text-label-badge uppercase tracking-wider font-bold">
            50+ Actively Hiring Partners
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          "Resumes with clean structure and immediate project impact metrics receive 3x higher interview conversion rates."
        </p>
</div>
</div>
{/* RIGHT COLUMN: Core Document Upload Workspace & Interactive States (8 Cols) */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/* Primary Form Shell Card */}
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md relative">
{/* Header Eyebrow & Title */}
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-badge text-label-badge text-primary font-bold uppercase tracking-widest">
            Application Phase 2 • Document Verification
          </span>
<span className="font-label-md text-label-md text-on-surface-variant">
            CRCE ID: <strong className="text-on-surface">2026-ENG-8841</strong>
</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs">
          Provide your Resume Link
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
          Please provide a public Google Drive link to your resume (PDF). Ensure the sharing settings are set to "Anyone with the link can view".
        </p>

<div className="flex flex-col gap-1.5 mb-space-lg">
  <label className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-1" htmlFor="resumeLink">
    Google Drive URL <span className="text-primary">*</span>
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
      <span className="material-symbols-outlined text-outline text-[20px]">link</span>
    </div>
    <input 
      className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline" 
      id="resumeLink" 
      name="resumeLink" 
      placeholder="https://drive.google.com/file/d/..." 
      required 
      type="url"
      value={resumeLink}
      onChange={(e) => setResumeLink(e.target.value)}
    />
  </div>
</div>

{resumeLink && (
  <div className="p-space-md bg-secondary-fixed/40 rounded-lg flex items-start gap-space-md">
    <span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">check_circle</span>
    <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-secondary-container font-bold text-sm">
        Link captured
      </span>
      <p className="font-body-sm text-body-sm text-on-secondary-container mt-0.5">
        Your link has been successfully attached. We will verify access before final submission.
      </p>
    </div>
  </div>
)}
</div>
</div>
</div>
{/* Sticky Bottom Action Dock (Standard Fixed Canvas Navigation) */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md mb-space-xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
{/* Back to Step 1 Action */}
<button className="w-full md:w-auto justify-center inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold transition-all" onClick={() => navigate('/register/step1')}>
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
<span>Back to Student Details</span>
</button>
{/* Middle Step Status Telemetry */}
<div className="hidden md:flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
<span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
<span>Step 2 of 5 • <strong className="text-on-surface">{resumeLink ? 'Resume Link Ready' : 'Awaiting Link'}</strong></span>
</div>
{/* Next Step Primary Red CTA */}
<button className="w-full md:w-auto justify-center inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-[2px_2px_0px_#1b1c1c] transition-all active:translate-x-0.5 active:translate-y-0.5" onClick={() => navigate('/register/step3')}>
<span>Continue to Positions</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
</main><footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)]"><div className="max-w-[1440px] mx-auto px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-bold">TEDx<span className="text-on-surface">CRCE</span></span><span className="font-body-sm text-body-sm text-on-surface-variant">This independent TEDx event is operated under license from TED.</span></div><div className="flex items-center gap-space-lg"><span className="font-body-sm text-body-sm text-on-surface-variant">© 2026 TEDxCRCE Internship Expo. All rights reserved.</span><div className="flex items-center gap-space-sm text-on-surface-variant font-label-badge text-label-badge uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>Session Secured</div></div></div></footer>
    </div>
  );
};

export default Step2ResumeUpload;
