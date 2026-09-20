import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step5Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Original Body Content */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-auto md:h-20 py-4 md:py-0 max-w-[1440px] mx-auto px-4 md:px-margin flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"><div className="flex items-center gap-space-md"><span className="font-headline-sm text-headline-sm font-bold text-on-surface">TEDx<span className="text-primary">CRCE</span></span><div className="flex flex-col"><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary">Internship Expo 2026</span></div></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a aria-current="page" className="transition-colors text-primary font-bold" data-path="home" href="/">Home</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="about" href="/#about">About</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="companies" href="/#companies">Companies</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="sponsors" href="/#sponsors">Sponsors</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" data-path="contact" href="/#contact">Contact</a></nav><div className="flex items-center gap-space-md"><a className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-[2px_2px_0px_rgba(48,48,48,0.2)] hover:bg-primary transition-all duration-150" data-path="registration" href="/register">Register</a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-32 md:pt-20 bg-surface min-h-screen"><div className="flex flex-col w-full items-center justify-start relative overflow-hidden py-space-xl">
{/* Subtle Editorial Grain & Ambient Glows */}
<div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-tertiary-fixed/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-80 right-[15%] w-72 h-72 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none -z-10"></div>
{/* Breadcrumb Milestone Tag (Editorial Collage Style) */}
<div className="w-full max-w-[580px] px-space-md mb-space-md flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
<div className="inline-flex items-center gap-space-xs bg-tertiary-fixed text-on-tertiary-fixed px-space-sm py-1 rounded-sm shadow-sm sm:rotate-[-1deg]">
<span className="material-symbols-outlined text-[16px] text-primary" style={{}} /* font-variation-settings: 'FILL' 1; */>verified</span>
<span className="font-label-badge text-label-badge tracking-wider uppercase">Step 5 of 5 • Completed &amp; Locked</span>
</div>
<div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-semibold text-on-surface">Live Verification</span>
</div>
</div>
{/* Primary Centered Dossier Container */}
<div className="w-full max-w-[580px] px-4 md:px-space-md flex flex-col items-center">
<div className="w-full bg-surface-container-lowest rounded-xl shadow-[6px_6px_0px_rgba(48,48,48,0.12)] p-4 md:p-space-xl relative flex flex-col items-center">
{/* Decorative Washi Tape Accent pinned top right */}
<div className="absolute -top-3.5 right-8 bg-secondary-fixed text-on-secondary-fixed px-space-md py-0.5 rounded-sm shadow-sm rotate-[2.5deg] font-label-badge text-label-badge tracking-widest uppercase pointer-events-none">
        PASSPORT VERIFIED
      </div>
{/* Hero Celebration Graphic Node */}
<div className="relative mb-space-lg mt-space-xs flex items-center justify-center">
{/* Radial Starburst / Kinetic SVG Elements */}
<svg className="absolute -inset-6 w-32 h-32 text-secondary/30 animate-[spin_24s_linear_infinite]" fill="none" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="46" stroke="currentColor" stroke-dasharray="4 6" strokeWidth="1.5"></circle>
<path d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
</svg>
{/* Glowing Halo Ring */}
<div className="w-24 h-24 rounded-full bg-tertiary-fixed flex items-center justify-center p-2 shadow-inner">
<div className="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_4px_14px_rgba(185,28,28,0.35)] transition-transform hover:scale-105 duration-200">
<span className="material-symbols-outlined text-[44px]" style={{}} /* font-variation-settings: 'wght' 700; */>done_all</span>
</div>
</div>
{/* Floating Sparkle Accents */}
<span className="material-symbols-outlined text-secondary text-[22px] absolute -top-1 -right-2 rotate-12" style={{}} /* font-variation-settings: 'FILL' 1; */>auto_awesome</span>
<span className="material-symbols-outlined text-primary text-[18px] absolute -bottom-1 -left-2 -rotate-12" style={{}} /* font-variation-settings: 'FILL' 1; */>star</span>
</div>
{/* Typography Header */}
<div className="text-center flex flex-col items-center mb-space-lg">
<span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest mb-space-xs">CANDIDATE DOSSIER DISPATCHED</span>
<h1 className="font-display-section text-display-section text-on-surface tracking-tight leading-tight">
          You’re All <span className="text-primary underline decoration-secondary decoration-wavy decoration-2 underline-offset-4">Set!</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-md text-center leading-relaxed">
          Your official application has been recorded in the central recruiter pool. Participating engineering and product teams will evaluate your dossier directly for on-campus interviews on <strong className="text-on-surface font-semibold">3 October 2026</strong>.
        </p>
</div>
{/* Ticket / Dossier Confirmation Strip with Perforated Layout */}
<div className="w-full bg-surface-container-low rounded-lg p-space-md relative overflow-hidden shadow-sm">
{/* Top Receipt Tab Indicator */}
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-high/40 -mx-space-md -mt-space-md px-space-md py-space-xs">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>
<span className="font-label-badge text-label-badge text-on-surface tracking-wider uppercase">TEDxCRCE Official Pass</span>
</div>
<span className="font-label-badge text-label-badge text-on-surface-variant">SHA-256 VERIFIED</span>
</div>
{/* Credential Fields Grid */}
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-space-sm font-body-sm text-body-sm">
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-md text-label-md">Applicant Name</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Neil Fernandes</span>
</div>
<div className="flex flex-col">
<span className="text-on-surface-variant font-label-md text-label-md">Academic Institution</span>
<span className="font-body-md text-body-md font-medium text-on-surface leading-snug">Fr. Conceicao Rodrigues College of Engineering (CRCE)</span>
</div>
</div>
{/* Selected Roles Badge Cluster */}
<div className="mt-space-md pt-space-sm bg-surface-container-lowest/80 rounded-md p-space-sm">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant">Selected Roles</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full font-bold">3 / 3 Roles Locked</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2.5 py-1 rounded text-body-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Google Cloud
            </span>
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2.5 py-1 rounded text-body-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Morgan Stanley
            </span>
<span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface px-2.5 py-1 rounded text-body-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> NVIDIA Research
            </span>
</div>
</div>
{/* Confirmation Code Key & Copy Row */}
<div className="mt-space-md flex items-center justify-between bg-inverse-surface text-inverse-on-surface rounded-md px-space-md py-space-sm">
<div className="flex flex-col">
<span className="font-label-badge text-label-badge text-white tracking-wider uppercase">Reference Token</span>
<span className="font-mono text-body-lg font-bold tracking-wider text-tertiary-fixed" id="refToken">TXC2026-00214</span>
</div>
<button className="flex items-center gap-1 bg-surface-variant/20 hover:bg-surface-variant/40 text-inverse-on-surface px-space-sm py-1 rounded text-label-md font-label-md transition-all active:scale-95" id="copyBtn" onClick={() => navigator.clipboard.writeText('TXC2026-00214')} title="Copy to clipboard">
<span className="material-symbols-outlined text-[16px]" id="copyIcon">content_copy</span>
<span id="copyText">Copy</span>
</button>
</div>
{/* Timestamp & Digital Seal */}
<div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
<span>24 Feb 2026 • 16:42 IST</span>
</div>
<div className="flex items-center gap-1 font-label-badge text-label-badge text-primary uppercase">
<span className="material-symbols-outlined text-[14px]">lock</span> Encrypted Vault
          </div>
</div>
</div>
{/* Action Buttons Container */}
<div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-space-sm mt-space-lg">
{/* PDF Download CTA */}
<button className="w-full inline-flex items-center justify-center gap-space-xs bg-inverse-surface text-inverse-on-surface hover:bg-on-surface py-3 px-space-md rounded-xl font-label-lg text-label-lg shadow-[2px_2px_0px_rgba(48,48,48,0.2)] transition-all active:translate-y-0.5 duration-150" onClick={() => alert('Downloading...')}>
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Download Dossier (PDF)</span>
</button>
{/* Homepage Route */}
<button className="w-full inline-flex items-center justify-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-secondary py-3 px-space-md rounded-xl font-label-lg text-label-lg shadow-[2px_2px_0px_rgba(48,48,48,0.08)] transition-all active:translate-y-0.5 duration-150" onClick={() => navigate('/')}>
<span>Back to Homepage</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
{/* Post-Submission Information Box */}
<div className="w-full mt-space-lg bg-tertiary-fixed/40 rounded-xl p-space-md flex items-start gap-space-sm text-left">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">mark_email_read</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Confirmation Dispatch Dispatched</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            A confirmation receipt and student dossier copy have been emailed to <strong className="text-on-surface">neil.fernandes@crce.ac.in</strong>. Check your inbox and spam folder for schedule bulletins.
          </p>
</div>
</div>
</div>
{/* Quick Help & Support Inquiries Floating Footnote */}
<div className="mt-space-lg flex items-center justify-center gap-space-md text-on-surface-variant font-body-sm text-body-sm text-center">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">help_outline</span>
        Need to update your resume?
      </span>
<a className="text-primary font-semibold hover:underline flex items-center gap-0.5" data-path="contact" href="/#contact">
        Contact Helpdesk
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</a>
</div>
</div>
{/* Interactive Scripts for Copy and Download Feedback */}

</div></main><footer className="w-full bg-inverse-surface text-inverse-on-surface py-space-xl"><div className="max-w-[1440px] mx-auto px-margin flex flex-col gap-space-xl"><div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-8 items-start"><div className="md:col-span-5 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><span className="font-headline-sm text-headline-sm font-bold text-on-surface">TEDx<span className="text-primary">CRCE</span></span><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-white">TEDxCRCE</span></div><p className="font-body-md text-body-md text-white max-w-sm">Internship Expo 2026. Empowering collegiate talent, intellectual curiosity, and high-growth opportunities under the spirit of ideas worth spreading.</p></div><div className="md:xl:col-span-4 flex flex-col gap-space-sm"><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed">Quick Navigation</span><div className="flex flex-col gap-space-xs"><a className="font-body-md text-body-md text-white hover:text-white transition-colors" data-path="home" href="/">Home</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" data-path="about" href="/#about">About the Summit</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" data-path="companies" href="/#companies">Participating Companies</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" data-path="sponsors" href="/#sponsors">Our Sponsors</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" data-path="contact" href="/#contact">Get In Touch</a></div></div><div className="md:xl:col-span-3 flex flex-col gap-space-sm"><span className="font-label-badge text-label-badge uppercase tracking-widest text-primary-fixed">Connect &amp; Follow</span><div className="flex flex-col gap-space-xs"><a className="font-body-md text-body-md text-white hover:text-white transition-colors" href="#">LinkedIn Official</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" href="#">Instagram Community</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" href="#">YouTube Channel</a><a className="font-body-md text-body-md text-white hover:text-white transition-colors" href="#">Student Portal</a></div></div></div><div className="pt-space-md border-t border-inverse-surface/40 flex flex-col md:flex-row justify-between items-center gap-space-sm font-body-sm text-body-sm text-white"><span>This independent TEDx event is operated under license from TED.</span><span>© 2026 TEDxCRCE Internship Expo. All rights reserved.</span></div></div></footer>
    </div>
  );
};

export default Step5Confirmation;
