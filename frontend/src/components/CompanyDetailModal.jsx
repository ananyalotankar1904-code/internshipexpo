import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const CompanyDetailModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { hasCompletedDetails, hasUploadedResume, selectedPositions, togglePosition } = useRegistration();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // The 3 positions hardcoded for Razorpay in the design
  const positions = [
    {
      id: 'rzp-1',
      title: 'Full-Stack Platform Engineer',
      company: 'Razorpay Payments',
    },
    {
      id: 'rzp-2',
      title: 'Quantitative Risk & Fraud ML Intern',
      company: 'Razorpay Payments',
    },
    {
      id: 'rzp-3',
      title: 'Developer Experience (DevRel) & API Specialist',
      company: 'Razorpay Payments',
    }
  ];

  const handleApply = (position) => {
    // If not already selected and we have room (or if we are toggling off, but modal only has "Apply/Selected")
    const isSelected = selectedPositions.find(p => p.id === position.id);
    if (!isSelected && selectedPositions.length < 3) {
      togglePosition(position);
    } else if (isSelected) {
      togglePosition(position); // Allow removing
      return; // Don't navigate if just removing
    }

    onClose();
    if (hasCompletedDetails && hasUploadedResume) {
      navigate('/register/step3');
    } else {
      navigate('/register/step1');
    }
  };

  const isPositionSelected = (id) => selectedPositions.some(p => p.id === id);

  return (
    <div aria-labelledby="modal-company-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-white/65 backdrop-blur-[6px] p-4 sm:p-6" role="dialog">
      <div className="relative w-full max-w-[920px] max-h-[88vh] bg-[#FFFDF9] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-tedx-red via-tedx-red to-tedx-red"></div>
        
        {/* Modal Header */}
        <header className="px-7 pt-6 pb-5 bg-[#FFFDF9] border-b border-white/10 flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0 border border-white/30">
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.44 2L4 12.86h6.22L7.6 22 20 9.14h-6.22L16.4 2h-3.96z" fill="#0C2340"></path>
                  <path d="M14.5 2L5 13.5h6l-2.5 8.5L20 8.5h-5.5L16.5 2z" fill="#3395FF"></path>
                  <path d="M9.8 11.8L16.5 2h-3.6L5 13.5h6l-1.2 4.1 6.5-7.8h-4.5z" fill="#02042B" opacity="0.3"></path>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h2 className="font-clash text-2xl sm:text-3xl font-bold tracking-tight text-white" id="modal-company-title">
                    Razorpay Payments
                  </h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-general font-bold bg-tedx-red text-white uppercase tracking-wider">
                    Featured Partner
                  </span>
                </div>
                <p className="text-sm font-inter text-white/80 leading-snug max-w-xl">
                  Powering modern financial infrastructure, neo-banking, and merchant checkout across India & SE Asia
                </p>
              </div>
            </div>
            <button aria-label="Close modal" onClick={onClose} className="p-2 rounded-full border border-white/20 text-white hover:bg-[#FFF4E1]/80 hover:border-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-tedx-red" type="button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-2 text-xs font-general font-medium">
            <span className="px-2.5 py-1 rounded-md bg-tedx-red text-white font-semibold border border-tedx-red/20">
              FinTech & Banking Infrastructure
            </span>
            <span className="px-2.5 py-1 rounded-md bg-tedx-red text-white font-semibold border border-tedx-red/20">
              B2B SaaS / Payments
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#FFF4E1] text-white border border-white/15">
              👥 1,500+ Engineers & Builders
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#FFF4E1] text-white border border-white/15 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-tedx-red" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd"></path>
              </svg>
              HQ: Bengaluru & Mumbai (BKC)
            </span>
            <span className="ml-auto px-3 py-1 rounded-md bg-tedx-red/10 text-tedx-red font-bold border border-tedx-red/25 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tedx-red animate-pulse"></span>
              3 Open Positions at this Expo
            </span>
          </div>
        </header>

        {/* Modal Body */}
        <div className="overflow-y-auto px-7 py-6 space-y-6 flex-grow bg-[#FFFDF9]" style={{ scrollbarWidth: 'thin' }}>
          {/* About */}
          <section>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
              <h3 className="font-clash text-lg font-bold uppercase tracking-tight text-white">
                About Razorpay
              </h3>
            </div>
            <p className="text-sm text-white/85 leading-relaxed font-inter">
              Founded by IIT Roorkee alumni, Razorpay is India's leading full-stack financial services company. From processing millions of seamless API transactions daily to issuing corporate cards and automated payroll, we build mission-critical developer tools that power unicorns and digital enterprises. We are scouting ambitious collegiate engineering talent at TEDxCRCE for on-campus summer internships and pre-placement tracks.
            </p>
          </section>

          {/* Highlights */}
          <section className="bg-tedx-red/30 border border-tedx-red/35 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-tedx-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h4 className="font-general font-bold text-sm text-white tracking-wide uppercase">
                Why Intern with Razorpay at Expo 2026
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="bg-surface-container-lowest/80 p-3.5 rounded-lg border border-tedx-red/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-start gap-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-tedx-red flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    01
                  </div>
                  <h5 className="text-xs font-general font-bold text-white leading-tight">Direct Mentorship</h5>
                </div>
                <p className="text-xs text-white/80 font-inter leading-normal">
                  1-on-1 pairing with Principal Engineers & Staff Architects on live production distributed systems.
                </p>
              </div>
              <div className="bg-surface-container-lowest/80 p-3.5 rounded-lg border border-tedx-red/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-start gap-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-tedx-red flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    02
                  </div>
                  <h5 className="text-xs font-general font-bold text-white leading-tight">Production Scale</h5>
                </div>
                <p className="text-xs text-white/80 font-inter leading-normal">
                  Deploy microservices handling 10,000+ RPS with zero-downtime Go/Rust services in live environments.
                </p>
              </div>
              <div className="bg-surface-container-lowest/80 p-3.5 rounded-lg border border-tedx-red/20 shadow-sm flex flex-col justify-between">
                <div className="flex items-start gap-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-tedx-red flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    03
                  </div>
                  <h5 className="text-xs font-general font-bold text-white leading-tight">PPO Fast-Track</h5>
                </div>
                <p className="text-xs text-white/80 font-inter leading-normal">
                  Top 15% of summer interns receive immediate full-time Pre-Placement Offers (PPOs) for the 2027 cohort.
                </p>
              </div>
            </div>
          </section>

          {/* Positions */}
          <section>
            <div className="flex items-end justify-between mb-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
                  <h3 className="font-clash text-lg font-bold uppercase tracking-tight text-white">
                    Open Positions at this Expo <span className="text-tedx-red font-semibold">(3)</span>
                  </h3>
                </div>
                <p className="text-xs text-white/70 font-inter mt-0.5">
                  Select up to 3 positions across the expo. Tracked in your real-time candidate dossier.
                </p>
              </div>
            </div>
            
            <div className="space-y-3.5">
              {/* Position 1 */}
              <article className={`bg-surface-container-lowest border ${isPositionSelected(positions[0].id) ? 'border-tedx-red border-2 shadow-md' : 'border-white/15 shadow-sm'} rounded-xl p-4.5 transition-all relative overflow-hidden`}>
                {isPositionSelected(positions[0].id) && (
                  <div className="absolute top-0 right-0 bg-tedx-red text-white text-[10px] font-general font-bold px-3 py-0.5 rounded-bl-lg tracking-wider flex items-center gap-1">
                    SELECTED IN DOSSIER
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-general font-bold px-2.5 py-0.5 rounded bg-tedx-red text-white border border-tedx-red/20">Core Platform</span>
                      <span className="text-[11px] font-general font-medium px-2 py-0.5 rounded bg-[#FFF4E1] text-white/90 border border-white/10">Eligible: 3rd & 4th Year</span>
                      <span className="text-[11px] font-inter text-white/70">• 6 Months • Hybrid</span>
                      <span className="text-[11px] font-general font-bold px-2 py-0.5 rounded bg-white text-white border border-white/20">Paid: ₹55,000 / mo</span>
                    </div>
                    <h4 className="font-clash text-lg font-bold text-white">{positions[0].title}</h4>
                    <p className="text-xs text-white/80 font-inter">Build reliable payment gateway integrations, microservices in Go, and merchant developer SDKs.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button onClick={() => handleApply(positions[0])} className={`px-5 py-2.5 font-general font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 ${isPositionSelected(positions[0].id) ? 'bg-tedx-red text-white' : 'bg-tedx-red text-white hover:bg-tedx-red'}`}>
                      {isPositionSelected(positions[0].id) ? 'Selected ✓ (Remove)' : 'Apply to Position +'}
                    </button>
                  </div>
                </div>
              </article>

              {/* Position 2 */}
              <article className={`bg-surface-container-lowest border ${isPositionSelected(positions[1].id) ? 'border-tedx-red border-2 shadow-md' : 'border-white/15 shadow-sm'} rounded-xl p-4.5 transition-all relative overflow-hidden`}>
                {isPositionSelected(positions[1].id) && (
                  <div className="absolute top-0 right-0 bg-tedx-red text-white text-[10px] font-general font-bold px-3 py-0.5 rounded-bl-lg tracking-wider flex items-center gap-1">
                    SELECTED IN DOSSIER
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-general font-bold px-2.5 py-0.5 rounded bg-tedx-red text-white border border-tedx-red/20">FinTech & AI</span>
                      <span className="text-[11px] font-general font-medium px-2 py-0.5 rounded bg-[#FFF4E1] text-white/90 border border-white/10">Eligible: 3rd & 4th Year</span>
                      <span className="text-[11px] font-inter text-white/70">• Summer 2026</span>
                      <span className="text-[11px] font-general font-bold px-2 py-0.5 rounded bg-white text-white border border-white/20">Paid: ₹60,000 / mo</span>
                    </div>
                    <h4 className="font-clash text-lg font-bold text-white">{positions[1].title}</h4>
                    <p className="text-xs text-white/80 font-inter">Train sub-second anomaly detection graph models and fraud prevention classifiers.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button onClick={() => handleApply(positions[1])} className={`px-5 py-2.5 font-general font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 ${isPositionSelected(positions[1].id) ? 'bg-tedx-red text-white' : 'bg-tedx-red text-white hover:bg-tedx-red'}`}>
                      {isPositionSelected(positions[1].id) ? 'Selected ✓ (Remove)' : 'Apply to Position +'}
                    </button>
                  </div>
                </div>
              </article>

              {/* Position 3 */}
              <article className={`bg-surface-container-lowest border ${isPositionSelected(positions[2].id) ? 'border-tedx-red border-2 shadow-md' : 'border-white/15 shadow-sm'} rounded-xl p-4.5 transition-all relative overflow-hidden`}>
                {isPositionSelected(positions[2].id) && (
                  <div className="absolute top-0 right-0 bg-tedx-red text-white text-[10px] font-general font-bold px-3 py-0.5 rounded-bl-lg tracking-wider flex items-center gap-1">
                    SELECTED IN DOSSIER
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-general font-bold px-2.5 py-0.5 rounded bg-tedx-red text-white border border-tedx-red/20">Developer Tools</span>
                      <span className="text-[11px] font-general font-medium px-2 py-0.5 rounded bg-[#FFF4E1] text-white/90 border border-white/10">Eligible: 2nd-4th Year</span>
                      <span className="text-[11px] font-inter text-white/70">• 4 Months • On-site</span>
                      <span className="text-[11px] font-general font-bold px-2 py-0.5 rounded bg-white text-white border border-white/20">Paid: ₹45,000 / mo</span>
                    </div>
                    <h4 className="font-clash text-lg font-bold text-white">{positions[2].title}</h4>
                    <p className="text-xs text-white/80 font-inter">Author developer documentation, maintain open-source client SDKs, and sandbox experiences.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button onClick={() => handleApply(positions[2])} className={`px-5 py-2.5 font-general font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 ${isPositionSelected(positions[2].id) ? 'bg-tedx-red text-white' : 'bg-tedx-red text-white hover:bg-tedx-red'}`}>
                      {isPositionSelected(positions[2].id) ? 'Selected ✓ (Remove)' : 'Apply to Position +'}
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <footer className="bg-[#FFF4E1] border-t border-white/15 px-7 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-tedx-red text-white text-xs font-general font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
                Your Applications: {selectedPositions.length} / 3 Selected
              </span>
            </div>
            <span className="text-xs text-white/70 font-inter hidden md:inline">
              {3 - selectedPositions.length} spots remaining in your TEDxCRCE dossier
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container-lowest border border-white/20 hover:bg-white/5 text-white font-general font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5" type="button">
              <span>Close Modal</span>
              <kbd className="text-[10px] bg-[#FFF4E1] px-1.5 py-0.5 rounded border border-white/20 font-mono">Esc</kbd>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CompanyDetailModal;
