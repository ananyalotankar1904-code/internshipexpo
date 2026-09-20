import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';

const Step4ApplicationSummary = () => {
  const navigate = useNavigate();
  const { studentDetails, resumeLink, selectedPositions, submitApplication } = useRegistration();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Original Body Content */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-lg"><span className="font-headline-sm text-headline-sm font-bold text-on-surface">TEDx<span className="text-primary">CRCE</span></span><div className="hidden sm:flex flex-col"><span className="font-label-lg text-label-lg tracking-wide uppercase text-on-surface font-bold">Internship Expo 2026</span><span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Student Candidate Portal</span></div></div><nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors uppercase tracking-wider text-primary font-bold" data-path="candidate-overview" href="/">Overview</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-guidelines" href="/#about">Guidelines</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="partner-companies" href="/#companies">Companies</a><a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors uppercase tracking-wider" data-path="application-faq" href="/#contact">Support &amp; FAQ</a></nav><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button"><span className="material-symbols-outlined text-[18px] text-on-surface-variant">bookmark_border</span><span>Save &amp; Exit</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full max-w-[1440px] mx-auto px-margin pt-20 flex-1"><div className="flex flex-col w-full pb-36">
{/* Top Application Flow Stepper */}
<section className="w-full py-space-xl overflow-x-auto hide-scrollbar">
<div className="relative flex items-center justify-between max-w-[840px] mx-auto px-4 min-w-[600px]">
{/* Continuous connecting track bar */}
<div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] bg-surface-container-highest z-0"></div>
<div className="absolute top-1/2 left-0 w-3/4 -translate-y-1/2 h-[3px] bg-primary z-0 transition-all duration-500"></div>
{/* Step 1: Completed */}
<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[20px]" style={{}} /* font-variation-settings: 'FILL' 1; */>check</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface">Candidate Info</span>
<span className="font-label-badge text-label-badge text-primary uppercase">Completed</span>
</div>
{/* Step 2: Completed */}
<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[20px]" style={{}} /* font-variation-settings: 'FILL' 1; */>check</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface">Credentials</span>
<span className="font-label-badge text-label-badge text-primary uppercase">Completed</span>
</div>
{/* Step 3: Completed */}
<div className="relative z-10 flex flex-col items-center group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[20px]" style={{}} /* font-variation-settings: 'FILL' 1; */>check</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface">Role Selections</span>
<span className="font-label-badge text-label-badge text-primary uppercase">Completed</span>
</div>
{/* Step 4: Active */}
<div className="relative z-10 flex flex-col items-center">
<div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg ring-4 ring-primary-fixed">
<span className="font-headline-sm text-headline-sm font-bold text-on-primary">4</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-primary font-bold">Verification</span>
<span className="font-label-badge text-label-badge bg-primary text-on-primary px-2 py-0.5 rounded-full uppercase tracking-wider mt-0.5 shadow-sm">In Progress</span>
</div>
{/* Step 5: Locked */}
<div className="relative z-10 flex flex-col items-center opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<span className="mt-space-xs font-label-md text-label-md text-on-surface-variant">Confirmed</span>
<span className="font-label-badge text-label-badge text-outline uppercase">Locked</span>
</div>
</div>
</section>
{/* Editorial Main Review Layout (Centered Column) */}
<div className="w-full max-w-[780px] mx-auto px-4 md:px-0 flex flex-col gap-space-lg">
{/* Title & Eyebrow Module */}
<header className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-primary inline-block animate-pulse"></span>
<span className="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">Application Phase 4 • Pre-Submission Verification</span>
</div>
<h1 className="font-display-section text-display-section text-on-surface tracking-tight leading-none">
        Review Your Application
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs max-w-2xl">
        Please carefully inspect all verified academic details and selected placement tracks prior to irreversible credential generation.
      </p>
</header>
{/* CARD 1: Candidate Profile & Academic Details */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-label-md text-label-md font-bold">1</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Candidate Profile &amp; Details</h2>
</div>
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors uppercase tracking-wider" onClick={() => navigate('/register/step1')} type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Step 1</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Full Legal Name</span>
<span className="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">Neil Fernandes</span>
<div className="flex items-center gap-1.5 mt-2 text-primary font-label-badge text-label-badge">
<span className="material-symbols-outlined text-[14px]">verified_user</span>
<span>CRCE Candidate Identity Validated</span>
</div>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Academic Institution</span>
<span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Fr. Conceicao Rodrigues College of Engineering</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bandra West, Mumbai</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Department &amp; Cohort</span>
<span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Computer Engineering (TE)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">3rd Year • Semester VI Matriculated</span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Recruiting Clearance</span>
<span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Tier-1 Institutional Track</span>
<div className="inline-flex items-center gap-1 mt-1 text-on-tertiary-fixed font-label-badge text-label-badge">
<span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
<span>Unrestricted Campus Expo Access</span>
</div>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Verified Institutional Email</span>
<span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">neil.fernandes@crce.ac.in</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
            Institutional Domain Active
          </span>
</div>
<div className="flex flex-col bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Direct WhatsApp / Telephony</span>
<span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">+91 98201 23456</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-primary">notifications_active</span>
            Interview Alerts Enabled
          </span>
</div>
</div>
</article>
{/* CARD 2: Resume & Portfolio Verification */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-label-md text-label-md font-bold">2</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Resume Verification &amp; ATS Parsing</h2>
</div>
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors uppercase tracking-wider" onClick={() => navigate('/register/step2')} type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Step 2</span>
</button>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md">
<div className="flex items-start justify-between">
<div className="flex flex-col md:flex-row md:items-center gap-space-md">
<div className="w-12 h-14 rounded-lg bg-primary-fixed flex flex-col items-center justify-center text-primary shadow-sm flex-shrink-0 self-start md:self-auto">
<span className="material-symbols-outlined text-[24px]">description</span>
<span className="font-label-badge text-[9px] uppercase font-bold tracking-tight">PDF</span>
</div>
<div className="flex flex-col items-start overflow-hidden">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Neil_Fernandes_Resume.pdf</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge">
<span className="material-symbols-outlined text-[13px] text-secondary">verified</span>
                  ATS Validated
                </span>
</div>
<div className="flex flex-wrap items-center gap-2 mt-2 text-on-surface-variant font-body-sm text-body-sm">
<span>2.4 MB</span>
<span>•</span>
<span>Uploaded Today at 14:22 IST</span>
<span>•</span>
<span className="text-primary font-semibold">100% Parsing Integrity</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="inline-flex items-center gap-1 px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Inspect Preview</span>
</button>
<button className="inline-flex items-center gap-1 px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-secondary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">sync</span>
<span>Replace</span>
</button>
</div>
</div>
{/* ATS Extracted Competencies Micro-Bar */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
<div className="flex items-start md:items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>12 Extracted Skills:</strong> Go, C++, Kubernetes, PyTorch, Distributed Systems, Terraform, Docker</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-label-badge text-label-badge uppercase">
<span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>GitHub Verified</span>
<span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>LinkedIn Active</span>
</div>
</div>
</div>
</article>
{/* CARD 3: Selected Positions Module */}
<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-surface-container-high text-primary flex items-center justify-center font-label-md text-label-md font-bold">3</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Selected Internship Positions</h2>
</div>
<div className="flex items-center gap-space-md">
<span className="px-space-md py-1 rounded-full bg-primary text-on-primary font-label-badge text-label-badge uppercase tracking-wider font-bold shadow-sm">
            Selected: 3 / 3 Max Roles
          </span>
<button className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:text-on-secondary-container transition-colors uppercase tracking-wider" onClick={() => navigate('/register/step3')} type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Step 3</span>
</button>
</div>
</div>
<div className="flex flex-col gap-space-sm">
{/* Role 1: Google Cloud */}
<div className="flex flex-col md:flex-row md:items-center justify-between bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors group gap-3 md:gap-0">
<div className="flex items-start md:items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center p-2 shadow-sm">
<span className="material-symbols-outlined text-[28px] text-primary">cloud</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Google Cloud</span>
<span className="text-on-surface-variant">•</span>
<span className="font-body-md text-sm md:text-body-md text-on-surface font-medium">Cloud Solutions &amp; SRE Intern</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm mt-2 md:mt-1">
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge">Cloud &amp; Infrastructure</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-badge text-label-badge font-semibold">₹45,000 / month</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">3 Months Duration • Hybrid (BKC)</span>
</div>
</div>
</div>
<button className="text-on-surface-variant hover:text-error p-space-xs rounded-lg hover:bg-surface-container-high transition-colors" title="Remove application slot" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/* Role 2: Morgan Stanley */}
<div className="flex flex-col md:flex-row md:items-center justify-between bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors group gap-3 md:gap-0">
<div className="flex items-start md:items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center p-2 shadow-sm">
<span className="material-symbols-outlined text-[28px] text-secondary">trending_up</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Morgan Stanley</span>
<span className="text-on-surface-variant">•</span>
<span className="font-body-md text-sm md:text-body-md text-on-surface font-medium">Quantitative Tech &amp; DevOps Intern</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm mt-2 md:mt-1">
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge">Fintech &amp; High-Frequency</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-badge text-label-badge font-semibold">₹65,000 / month</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">6 Months Duration • On-site (NESCO)</span>
</div>
</div>
</div>
<button className="text-on-surface-variant hover:text-error p-space-xs rounded-lg hover:bg-surface-container-high transition-colors" title="Remove application slot" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/* Role 3: NVIDIA */}
<div className="flex flex-col md:flex-row md:items-center justify-between bg-surface-container-low p-space-md rounded-xl hover:bg-surface-container transition-colors group gap-3 md:gap-0">
<div className="flex items-start md:items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center p-2 shadow-sm">
<span className="material-symbols-outlined text-[28px] text-primary">memory</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Nvidia</span>
<span className="text-on-surface-variant">•</span>
<span className="font-body-md text-sm md:text-body-md text-on-surface font-medium">CUDA &amp; Graphics Pipeline Intern</span>
</div>
<div className="flex flex-wrap items-center gap-space-sm mt-2 md:mt-1">
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge">Hardware &amp; AI Systems</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-badge text-label-badge font-semibold">₹50,000 / month</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Summer 2026 • Pune Campus</span>
</div>
</div>
</div>
<button className="text-on-surface-variant hover:text-error p-space-xs rounded-lg hover:bg-surface-container-high transition-colors" title="Remove application slot" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
<div className="mt-space-md p-space-md bg-surface-container-low rounded-lg flex items-center gap-space-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[20px] text-primary flex-shrink-0">event_available</span>
<p className="font-body-sm text-body-sm">
<strong>Non-conflicting scheduling:</strong> You have utilized all 3 allocated application credits. In-person interviews on 3 October 2026 will automatically stagger to prevent timetable clashes.
        </p>
</div>
</article>
{/* Verification Legal Acknowledgement Callout */}
<section className="bg-secondary-fixed/50 rounded-xl p-space-lg shadow-sm">
<label className="flex items-start gap-space-md cursor-pointer select-none">
<input checked="" className="w-5 h-5 mt-0.5 accent-primary rounded cursor-pointer" id="termsCheckbox" type="checkbox"/>
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">
            I confirm all above information is authentic and authorize the TEDxCRCE Career Placement Cell to broadcast my verified dossier to interview panels.
          </span>
<div className="flex items-center gap-space-md mt-2">
<span className="font-label-badge text-label-badge text-outline uppercase tracking-wider">Digital Hash Verification</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">CRCE-ENG-2026-8841-AUTH-OK</span>
</div>
</div>
</label>
</section>
</div>
{/* Sticky Bottom Submission Bar (Pinned Footer Action) */}
<aside className="fixed bottom-0 left-0 right-0 w-full bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.08)] z-40">
<div className="max-w-[1440px] mx-auto px-4 md:px-margin py-4 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
{/* Back Button */}
<button className="w-full md:w-auto justify-center inline-flex items-center gap-space-sm px-space-lg py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors" onClick={() => navigate('/register/step3')} type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Positions</span>
</button>
{/* Center Status Pill */}
<div className="hidden md:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
<span className="font-label-badge text-label-badge uppercase tracking-wider font-semibold">3 Steps Verified • Final Roster Ready</span>
</div>
{/* Final Submission Action Group */}
<div className="w-full md:w-auto flex flex-col items-center md:items-end">
<button className="w-full md:w-auto justify-center inline-flex items-center gap-space-sm px-space-xl py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md transition-all hover:scale-[1.02]" id="submitBtn" onClick={async () => { await submitApplication(); navigate('/register/step5'); }} type="button">
<span>Submit Application</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<span className="font-body-sm text-[11px] text-on-surface-variant mt-1 text-center md:text-right">Application locks permanently upon submission</span>
</div>
</div>
</aside>
</div>
</main><footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.03)]"><div className="max-w-[1440px] mx-auto px-margin py-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm text-primary font-bold">TEDx<span className="text-on-surface">CRCE</span></span><span className="font-body-sm text-body-sm text-on-surface-variant">This independent TEDx event is operated under license from TED.</span></div><div className="flex items-center gap-space-lg"><span className="font-body-sm text-body-sm text-on-surface-variant">© 2026 TEDxCRCE Internship Expo. All rights reserved.</span><div className="flex items-center gap-space-sm text-on-surface-variant font-label-badge text-label-badge uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>Session Secured</div></div></div></footer>
    </div>
  );
};

export default Step4ApplicationSummary;
