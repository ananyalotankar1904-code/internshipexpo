import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';
import { getDomainForCompany } from '../../utils/domainMapping';


const Step4ApplicationSummary = () => {
  const navigate = useNavigate();
  const { studentDetails, resumeLink, selectedPositions, submitApplication, taskLinks, setTaskLinks, reorderPositions, clearRegistration } = useRegistration();
  const [companies, setCompanies] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    companiesApi.getAll()
      .then(res => setCompanies(res.data.companies))
      .catch(console.error);
  }, []);

  const handleSubmit = async () => {
    if (!confirmed || isSubmitting) return;
    try {
      setIsSubmitting(true);
      await submitApplication();
      navigate('/register/step5', { state: { studentDetails, selectedPositions } });
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message || '';
      
      // Keep technical error in console for developer debugging
      console.error('Application submission error:', error);
      
      // If the application is already marked SUBMITTED in the DB, gracefully send the student to Step 5
      if (typeof errorMsg === 'string' && errorMsg.toLowerCase().includes('already submitted')) {
        navigate('/register/step5', { state: { studentDetails, selectedPositions } });
        return;
      }
      
      if (typeof errorMsg === 'string' && (errorMsg.includes('Foreign key constraint violated') || errorMsg.includes('Application_positionId_fkey'))) {
        alert('Application submission failed. One or more selected positions are no longer available. Please refresh the page, select your positions again, and resubmit.');
      } else if (typeof errorMsg === 'string' && errorMsg.includes('Unique constraint failed')) {
        alert('You have already submitted an application with these details. If you need to make changes, please contact the organizers.');
      } else {
        alert('Application submission failed: ' + errorMsg + '. Please check your details and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">


      <SmokedHeader />

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 pt-4 pb-20 md:pb-28">
        <div className="w-full max-w-[720px] flex flex-col gap-6">

          {/* Header intro statement with retro tag */}
          <div className="flex flex-col gap-1.5 text-left mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-transparent/50 border border-border-hairline text-peach-accent font-mono text-[10px] tracking-widest uppercase">
                  FINAL VERIFICATION // BATCH 2026
                </span>
                <span className="text-[11px] font-mono text-text-cream/40">STEP 04 OF 05</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>ALL FILES ATTACHED</span>
              </div>
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight uppercase mt-1">
              REVIEW YOUR <span className="text-primary">APPLICATION</span>
            </h1>
            <p className="font-sans text-sm text-text-cream/70 leading-relaxed">
              Please cross-examine your student credentials, uploaded resume, and shortlisted internship positions before dispatching to enterprise recruiters.
            </p>
          </div>

          {/* CARD 1: YOUR DETAILS */}
          <div className="smoked-glass border border-border-hairline rounded-xl p-6 md:p-7 shadow-2xl relative overflow-hidden transition-all duration-200">
            {/* Corner notch accent */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
              <div className="absolute transform rotate-45 bg-primary/15 w-16 h-4 -top-1 -right-4"></div>
            </div>

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-transparent flex items-center justify-center text-peach-accent border border-border-hairline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                </div>
                <h2 className="font-display font-bold text-lg uppercase text-white tracking-wide">
                  1. Your Details
                </h2>
              </div>
              <button onClick={() => navigate('/register/step1')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-peach-accent transition-colors py-1 px-2.5 rounded bg-transparent border border-transparent hover:border-primary/40 group">
                <svg className="w-3 h-3 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                <span className="uppercase tracking-wider font-mono text-[11px]">Edit Details</span>
              </button>
            </div>

            {/* 2-Column Key/Value Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">Candidate Name</span>
                <span className="font-sans font-medium text-white mt-0.5 text-base">{studentDetails.fullName || 'Not provided'}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">College Institution</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-sans font-medium text-white">FRCRCE, Bandra</span>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" title="Verified Campus"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">Branch / Department</span>
                <span className="font-sans font-medium text-white mt-0.5">{studentDetails.branch || 'Not provided'}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">Year of Study</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-sans font-semibold text-white">{studentDetails.year || 'Not provided'}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/25 text-peach-accent border border-primary/40">
                    DRIVES ELIGIBILITY
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">College Email Address</span>
                <span className="font-mono text-xs text-text-cream mt-1">{studentDetails.email || 'Not provided'}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-text-cream/50 tracking-wider">Phone / WhatsApp</span>
                <div className="flex items-center gap-1.5 mt-1 font-mono text-xs text-text-cream">
                  <span className="text-emerald-400">●</span>
                  <span>{studentDetails.phone || 'Not provided'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: RESUME */}
          <div className="smoked-glass border border-border-hairline rounded-xl p-6 md:p-7 shadow-2xl relative overflow-hidden transition-all duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-transparent flex items-center justify-center text-peach-accent border border-border-hairline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h2 className="font-display font-bold text-lg uppercase text-white tracking-wide">
                  2. Resume Link
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <a href={resumeLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-peach-accent transition-colors py-1 px-2 rounded bg-transparent border border-transparent hover:border-primary/40">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  <span className="uppercase tracking-wider font-mono text-[11px]">View</span>
                </a>
                <button onClick={() => navigate('/register/step2')} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-peach-accent transition-colors py-1 px-2.5 rounded bg-transparent border border-transparent hover:border-primary/40 group">
                  <svg className="w-3 h-3 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  <span className="uppercase tracking-wider font-mono text-[11px]">Edit</span>
                </button>
              </div>
            </div>

            {/* Link Display */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-transparent border border-border-hairline">
              <div className="flex items-center gap-3.5 overflow-hidden w-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex flex-col items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </div>
                <div className="flex flex-col flex-grow truncate">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-semibold text-sm text-white truncate">{resumeLink || 'No link provided'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <svg className="w-3 h-3 text-emerald-400 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-mono text-[11px] text-emerald-400">Google Drive Link Validated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: SELECTED POSITIONS */}
          <div className="smoked-glass border border-border-hairline rounded-xl p-6 md:p-7 shadow-2xl relative overflow-hidden transition-all duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-transparent flex items-center justify-center text-peach-accent border border-border-hairline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h2 className="font-display font-bold text-lg uppercase text-white tracking-wide">
                  3. Selected Positions
                </h2>
                <div className="px-2.5 py-0.5 rounded-full bg-primary text-white font-mono text-xs font-bold shadow-lg shadow-primary/40">
                  Selected: <span>{selectedPositions.length}</span>/3
                </div>
              </div>
              <button onClick={() => navigate('/register/step3')} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-peach-accent transition-colors py-1 px-2.5 rounded bg-transparent border border-transparent hover:border-primary/40 group">
                <svg className="w-3 h-3 transition-transform group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                <span className="uppercase tracking-wider font-mono text-[11px]">Edit Positions</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {selectedPositions.length === 0 && (
                <p className="text-center py-6 text-xs font-mono text-text-cream/50">
                  No positions selected. Please return to Step 3 to select at least 1 internship position.
                </p>
              )}
              {selectedPositions.map((id, index) => {
                let selectedPos = null;
                let selectedComp = null;
                companies.forEach(company => {
                  const pos = company.positions.find(p => p.id === id);
                  if (pos) {
                    selectedPos = pos;
                    selectedComp = company;
                  }
                });

                if (!selectedPos || !selectedComp) return null;

                return (
                  <div key={id} className="flex flex-col p-3.5 rounded-lg bg-transparent border border-border-hairline hover:border-primary/40 transition-colors group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-transparent border border-border-hairline flex items-center justify-center text-primary font-display font-bold text-sm">
                          {selectedComp.logoUrl ? (
                            <img src={selectedComp.logoUrl} alt={selectedComp.name} className="w-full h-full object-contain" />
                          ) : (
                            <span>{selectedComp.name.substring(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-xs text-text-cream/65 uppercase font-semibold">{selectedComp.name}</span>
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <h3 className="font-sans font-semibold text-sm text-white mt-0.5">
                            {selectedPos.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-primary/20 text-peach-accent text-[10px] font-mono border border-primary/30">
                              {getDomainForCompany(selectedComp.name, selectedPos.domain)}
                            </span>
                            {selectedPos.isPaid && (
                              <span className="px-2 py-0.5 rounded bg-emerald-900/30 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                                Paid
                              </span>
                            )}
                            <span className="text-[10px] font-mono text-white/40">{selectedPos.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Priority Controls */}
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-white bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Priority {index + 1}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={index === 0}
                            onClick={() => {
                              const newOrder = [...selectedPositions];
                              const temp = newOrder[index - 1];
                              newOrder[index - 1] = newOrder[index];
                              newOrder[index] = temp;
                              reorderPositions(newOrder);
                            }}
                            className={`p-1.5 rounded-md border transition-colors ${index === 0 ? 'bg-transparent border-transparent text-white/20 cursor-not-allowed' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white cursor-pointer'}`}
                            title="Move Up"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                          </button>
                          <button
                            type="button"
                            disabled={index === selectedPositions.length - 1}
                            onClick={() => {
                              const newOrder = [...selectedPositions];
                              const temp = newOrder[index + 1];
                              newOrder[index + 1] = newOrder[index];
                              newOrder[index] = temp;
                              reorderPositions(newOrder);
                            }}
                            className={`p-1.5 rounded-md border transition-colors ${index === selectedPositions.length - 1 ? 'bg-transparent border-transparent text-white/20 cursor-not-allowed' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white cursor-pointer'}`}
                            title="Move Down"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {selectedPos.requiresTask && (
                      <div className="mt-3 pt-3 border-t border-border-hairline w-full">
                        <label className="font-sans text-xs font-semibold text-primary flex flex-col gap-1 mb-1.5" htmlFor={`task-${id}`}>
                          <span>Pre-screening Task Link <span className="text-primary">*</span></span>
                          <span className="text-[10px] text-white/50 font-normal normal-case">If using Google Drive, ensure sharing is set to "Anyone with the link can view".</span>
                        </label>
                        <input
                          type="url"
                          required
                          placeholder="e.g. GitHub or Google Drive Link"
                          className="w-full px-3 py-2 bg-black/40 border border-border-hairline text-white text-xs rounded focus:outline-none focus:border-primary"
                          id={`task-${id}`}
                          value={taskLinks[id] || ''}
                          onChange={(e) => setTaskLinks(prev => ({ ...prev, [id]: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CARD 4: FINAL CONFIRMATION CHECKBOX */}
          <div className="smoked-glass rounded-xl p-5 md:p-6 shadow-2xl relative overflow-hidden border border-primary/30 bg-primary/5">
            <label className="flex items-start gap-3.5 cursor-pointer select-none">
              <div className="relative flex items-center pt-0.5">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-primary/50 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-sm text-white leading-snug">
                  I confirm the above information is accurate and authentic
                </span>
                <p className="font-sans text-xs text-text-cream/65 mt-1 leading-relaxed">
                  I understand that submitting this application authorizes TEDxCRCE Placement Coordination Cell to transmit my academic details and verified resume to selected corporate recruiters for interview slotting.
                </p>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t border-border-hairline pt-6 mt-4">
            <button
              type="button"
              onClick={() => navigate('/register/step3')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-md text-text-cream/70 hover:text-text-cream hover:bg-transparent/50 transition-all font-sans text-sm font-semibold border border-transparent hover:border-border-hairline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              <span>Back to Positions</span>
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!confirmed || selectedPositions.length === 0 || isSubmitting}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md font-sans font-semibold text-sm shadow-lg transition-all ${confirmed && selectedPositions.length > 0 && !isSubmitting ? 'bg-primary hover:bg-primary-hover text-white shadow-primary/20 cursor-pointer' : 'bg-transparent border border-border-hairline text-text-cream/30 cursor-not-allowed'}`}
            >
              <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
              {isSubmitting ? (
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              )}
            </button>
          </div>

        </div>
      </main>

      <SmokedFooter showContinue={false} showBack={false} currentStep={4} totalSteps={5} />
    </div>
  );
};

export default Step4ApplicationSummary;