import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const CompanyDetailModal = ({ isOpen, onClose, company }) => {
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

  if (!isOpen || !company) return null;

  const positions = company.positions || [];

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
    <div aria-labelledby="modal-company-title" aria-modal="true" className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/65 backdrop-blur-[6px] p-2 sm:p-6 overflow-y-auto" role="dialog">
      <div className="relative w-full max-w-[920px] max-h-[95vh] sm:max-h-[88vh] mt-4 sm:mt-0 bg-[#050505] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-tedx-red via-tedx-red to-tedx-red"></div>
        
        {/* Modal Header */}
        <header className="px-5 sm:px-7 pt-4 sm:pt-6 pb-4 sm:pb-5 bg-[#050505] border-b border-white/10 flex-shrink-0">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0 border border-white/30 overflow-hidden mt-1 sm:mt-0">
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain p-1 sm:p-2" />
                ) : (
                  <span className="font-bold text-lg sm:text-2xl text-tedx-red">{company.name.substring(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 mb-1">
                  <h2 className="font-clash text-[1.1rem] sm:text-3xl font-bold tracking-tight text-white leading-tight" id="modal-company-title">
                    {company.name}
                  </h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-general font-bold bg-tedx-red text-white uppercase tracking-wider">
                    Featured Partner
                  </span>
                </div>
              </div>
            </div>
            <button aria-label="Close modal" onClick={onClose} className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-tedx-red" type="button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-2 text-xs font-general font-medium">
            {company.tags && company.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-tedx-red text-white font-semibold border border-tedx-red/20">
                {tag}
              </span>
            ))}
            <span className="ml-auto px-3 py-1 rounded-md bg-tedx-red/10 text-tedx-red font-bold border border-tedx-red/25 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tedx-red animate-pulse"></span>
              {positions.length} Open Positions at this Expo
            </span>
          </div>
        </header>

        {/* Modal Body */}
        <div className="overflow-y-auto px-7 py-6 space-y-6 flex-grow bg-[#050505]" style={{ scrollbarWidth: 'thin' }}>
          {/* About */}
          <section>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
              <h3 className="font-clash text-lg font-bold uppercase tracking-tight text-white">
                About {company.name}
              </h3>
            </div>
            {company.websiteUrl ? (
              <a href={company.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-tedx-red/10 text-tedx-red font-semibold rounded hover:bg-tedx-red hover:text-white transition-colors text-sm">
                Visit Company Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
            ) : (
              <p className="text-sm text-white/80">No website available.</p>
            )}
          </section>



          {/* Positions */}
          <section>
            <div className="flex items-end justify-between mb-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
                  <h3 className="font-clash text-lg font-bold uppercase tracking-tight text-white">
                    Open Positions at this Expo <span className="text-tedx-red font-semibold">({positions.length})</span>
                  </h3>
                </div>
                <p className="text-xs text-white/70 font-inter mt-0.5">
                  Select up to 3 positions across the expo. Tracked in your real-time candidate profile.
                </p>
              </div>
            </div>
            
            <div className="space-y-3.5">
              {positions.map((pos) => (
                <article key={pos.id} className={`bg-[#0A0A0A] border ${isPositionSelected(pos.id) ? 'border-tedx-red border-2 shadow-md' : 'border-white/10 shadow-sm'} rounded-xl p-4.5 transition-all relative overflow-hidden`}>
                  {isPositionSelected(pos.id) && (
                    <div className="absolute top-0 right-0 bg-tedx-red text-white text-[10px] font-general font-bold px-3 py-0.5 rounded-bl-lg tracking-wider flex items-center gap-1">
                      SELECTED
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-general font-bold px-2.5 py-0.5 rounded bg-tedx-red text-white border border-tedx-red/20">{pos.domain}</span>
                        <span className="text-[11px] font-general font-medium px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">Eligible: {pos.eligibleYears} Year</span>
                        <span className="text-[11px] font-inter text-white/70">• {pos.duration}</span>
                        {(pos.isPaid || pos.stipend) && (
                           <span className="text-[11px] font-general font-bold px-2 py-0.5 rounded bg-white text-black border border-transparent">Paid: {pos.stipend || 'Yes'}</span>
                        )}
                      </div>
                      <h4 className="font-clash text-lg font-bold text-white">{pos.title}</h4>
                      <p className="text-xs text-white/80 font-inter">{pos.description || `Role in ${pos.domain} at ${company.name}`}</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0 w-full md:w-auto">
                      <button onClick={() => handleApply(pos)} className={`w-full md:w-auto px-5 py-3 md:py-2.5 font-general font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 ${isPositionSelected(pos.id) ? 'bg-transparent text-tedx-red border-2 border-tedx-red' : 'bg-tedx-red text-white hover:bg-white hover:text-black'}`}>
                        {isPositionSelected(pos.id) ? 'Selected ✓ (Remove)' : 'Apply to Position +'}
                      </button>
                      {pos.jobDescriptionPdfUrl && (
                        <a href={pos.jobDescriptionPdfUrl} target="_blank" rel="noreferrer" className="w-full md:w-auto px-5 py-2.5 md:py-2 font-general font-bold text-[11px] uppercase tracking-wider rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5">
                          📄 View JD
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <footer className="bg-white/5 border-t border-white/10 px-7 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-tedx-red text-white text-xs font-general font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#050505]"></span>
                Your Applications: {selectedPositions.length} / 3 Selected
              </span>
            </div>
            <span className="text-xs text-white/70 font-inter hidden md:inline">
              {3 - selectedPositions.length} spots remaining in your application
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-transparent border border-white/20 hover:bg-white/10 text-white font-general font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5" type="button">
              <span>Close Modal</span>
              <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/20 font-mono">Esc</kbd>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CompanyDetailModal;
