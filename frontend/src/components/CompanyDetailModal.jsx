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
    const isSelected = selectedPositions.includes(position.id);
    if (!isSelected && selectedPositions.length < 3) {
      togglePosition(position.id);
    } else if (isSelected) {
      togglePosition(position.id); // Allow removing
      return; // Don't navigate if just removing
    }

    onClose();
    if (hasCompletedDetails && hasUploadedResume) {
      navigate('/register/step3');
    } else {
      navigate('/register/step1');
    }
  };

  const isPositionSelected = (id) => selectedPositions.includes(id);

  return (
    <div aria-labelledby="modal-company-title" aria-modal="true" className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-6 overflow-y-auto" role="dialog">
      <div className="relative w-full max-w-[1024px] max-h-[95vh] sm:max-h-[88vh] mt-4 sm:mt-0 bg-[#050505] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <header className="px-5 sm:px-10 pt-8 pb-6 bg-[#050505] border-b border-white/10 flex-shrink-0 relative flex flex-col items-center text-center">
          <button aria-label="Close modal" onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none" type="button">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-white/20 overflow-hidden mb-4">
            {company.logoUrl ? (
              <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain p-2" />
            ) : (
              <span className="font-bold text-3xl text-tedx-red">{company.name.substring(0, 2).toUpperCase()}</span>
            )}
          </div>
          
          <h2 className="font-clash text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase mb-2" id="modal-company-title">
            {company.name}
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-2 mt-2 text-xs font-general font-medium">
            {company.tags && company.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-10 py-8 flex-grow bg-[#050505]" style={{ scrollbarWidth: 'thin' }}>
          
          {company.websiteUrl && (
            <div className="flex justify-center mb-8">
              <a href={company.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 text-white/80 font-semibold rounded-full hover:bg-white/10 hover:text-white transition-colors text-xs border border-white/10">
                Visit Company Website
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {positions.map((pos) => (
              <article key={pos.id} className={`bg-[#0A0A0A] border ${isPositionSelected(pos.id) ? 'border-tedx-red shadow-[0_0_15px_rgba(235,0,40,0.2)]' : 'border-white/10'} rounded-xl p-6 transition-all relative flex flex-col h-full`}>
                {isPositionSelected(pos.id) && (
                  <div className="absolute top-0 right-0 bg-tedx-red text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Selected
                  </div>
                )}
                
                <h4 className="font-clash text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-1.5">{pos.title}</h4>
                
                <p className="text-white/70 text-xs font-semibold mb-4 tracking-wide uppercase">
                  {pos.domain} | {pos.duration} | Eligible: {pos.eligibleYears} Year
                </p>

                <div className={`w-full text-center py-2.5 rounded border border-white/5 font-bold text-xs mb-6 ${pos.isPaid ? 'bg-tedx-red/10 text-tedx-red' : 'bg-white/5 text-white/60'}`}>
                  {pos.isPaid ? `Stipend: ${pos.stipend || 'Paid'}` : 'Unpaid Position'}
                </div>

                <div className="flex-grow space-y-4">
                  <div>
                    <h5 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2 opacity-90">About the Role</h5>
                    <p className="text-white/70 text-xs font-inter leading-relaxed whitespace-pre-wrap">
                      {pos.description || `Join ${company.name} as a ${pos.title} in the ${pos.domain} department.`}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex gap-3">
                  <button onClick={() => handleApply(pos)} className={`flex-1 py-2.5 font-bold text-xs uppercase tracking-wider rounded-lg transition-all ${isPositionSelected(pos.id) ? 'bg-transparent text-tedx-red border border-tedx-red hover:bg-tedx-red/10' : 'bg-tedx-red text-white hover:bg-white hover:text-black'}`}>
                    {isPositionSelected(pos.id) ? 'Selected ✓' : 'Apply to Position'}
                  </button>
                  {pos.jobDescriptionPdfUrl && (
                    <a href={pos.jobDescriptionPdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2.5 font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center whitespace-nowrap">
                      📄 Job Description
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <footer className="bg-[#050505] border-t border-white/10 px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-general font-bold tracking-wide flex items-center gap-2 shadow-sm border border-white/5">
              <span className={`w-2 h-2 rounded-full ${selectedPositions.length > 0 ? 'bg-green-400' : 'bg-gray-500'}`}></span>
              Applications: {selectedPositions.length} / 3 Selected
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button onClick={onClose} className="px-5 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-general font-semibold text-xs rounded-lg transition-colors flex items-center gap-2" type="button">
              <span>Close</span>
              <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/20 font-mono">Esc</kbd>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CompanyDetailModal;
