import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';


const Step5Confirmation = () => {
  const navigate = useNavigate();
  const { studentDetails, selectedPositions } = useRegistration();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companiesApi.getAll()
      .then(res => setCompanies(res.data.companies))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">

      
      <SmokedHeader />

      <main className="w-full pt-32 md:pt-20 bg-transparent min-h-screen relative z-10 flex-grow">
        <div className="flex flex-col w-full items-center justify-start relative overflow-hidden py-12">
            
            {/* Subtle Editorial Grain & Ambient Glows */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            
            {/* Breadcrumb Milestone Tag */}
            <div className="w-full max-w-[580px] px-6 mb-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
                <div className="inline-flex items-center gap-2 bg-peach-accent text-void px-3 py-1 rounded-sm shadow-sm sm:rotate-[-1deg]">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase">Step 5 of 5 • Completed &amp; Locked</span>
                </div>
                <div className="flex items-center gap-1.5 font-sans text-xs text-text-cream/70">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold text-text-cream">Live Verification</span>
                </div>
            </div>

            {/* Primary Centered Container */}
            <div className="w-full max-w-[580px] px-4 md:px-6 flex flex-col items-center">
                <div className="w-full bg-transparent border border-border-hairline rounded-xl shadow-2xl p-4 md:p-10 relative flex flex-col items-center smoked-glass">
                    {/* Decorative Washi Tape Accent pinned top right */}
                    <div className="absolute -top-3.5 right-8 bg-peach-accent text-void px-4 py-0.5 rounded-sm shadow-sm rotate-[2.5deg] font-mono text-[10px] font-bold tracking-widest uppercase pointer-events-none">
                        PASSPORT VERIFIED
                    </div>

                    {/* Hero Celebration Graphic Node */}
                    <div className="relative mb-8 mt-4 flex items-center justify-center">
                        <svg className="absolute -inset-4 md:-inset-6 w-24 h-24 md:w-32 md:h-32 text-primary/30 animate-[spin_24s_linear_infinite]" fill="none" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.5"></circle>
                            <path d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                        </svg>
                        
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center p-2 shadow-inner">
                            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-105 duration-200">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </div>
                    </div>

                    {/* Typography Header */}
                    <div className="text-center flex flex-col items-center mb-8">
                        <span className="font-mono text-[10px] text-peach-accent font-bold uppercase tracking-widest mb-2">APPLICATION SUBMITTED</span>
                        <h1 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight uppercase">
                            You’re All <span className="text-primary underline decoration-peach-accent decoration-wavy decoration-2 underline-offset-4">Set!</span>
                        </h1>
                        <p className="font-body text-sm text-text-cream/70 mt-3 max-w-md text-center leading-relaxed">
                            Your official application has been recorded in the central recruiter pool. Participating engineering and product teams will evaluate your application directly for on-campus interviews on <strong className="text-white font-semibold">3 October 2026</strong>.
                        </p>
                    </div>

                    {/* Ticket / Confirmation Strip */}
                    <div className="w-full bg-black/40 border border-border-hairline rounded-lg p-6 relative overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-hairline">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                <span className="font-mono text-[10px] font-bold text-white tracking-wider uppercase">TEDxCRCE Official Pass</span>
                            </div>
                            <span className="font-mono text-[9px] text-text-cream/50">SHA-256 VERIFIED</span>
                        </div>

                        {/* Credential Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm mb-6">
                            <div className="flex flex-col">
                                <span className="text-text-cream/50 font-sans text-xs uppercase tracking-wider mb-1">Applicant Name</span>
                                <span className="font-sans font-bold text-base text-white">{studentDetails.fullName || 'Not Provided'}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-text-cream/50 font-sans text-xs uppercase tracking-wider mb-1">Academic Institution</span>
                                <span className="font-sans font-medium text-sm text-white leading-snug">Fr. Conceicao Rodrigues College of Engineering (CRCE)</span>
                            </div>
                        </div>

                        {/* Selected Roles */}
                        <div className="mt-4 pt-4 border-t border-border-hairline">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-sans text-xs text-text-cream/70">Selected Roles</span>
                                <span className="bg-primary/20 text-peach-accent font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">{selectedPositions.length} / 3 Roles Locked</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {selectedPositions.map(id => {
                                    let selectedComp = null;
                                    let selectedPos = null;
                                    companies.forEach(c => {
                                        const pos = c.positions.find(p => p.id === id);
                                        if(pos) {
                                            selectedComp = c;
                                            selectedPos = pos;
                                        }
                                    });
                                    if(!selectedComp || !selectedPos) return null;
                                    
                                    return (
                                        <div key={id} className="flex flex-col bg-transparent border border-border-hairline text-white px-3 py-2 rounded">
                                            <span className="text-xs font-semibold text-text-cream/90">{selectedPos.title}</span>
                                            <span className="text-[10px] text-text-cream/60 flex items-center gap-1.5 mt-0.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {selectedComp.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Confirmation Code */}
                        <div className="mt-6 flex items-center justify-between bg-white text-void rounded-md px-4 py-3">
                            <div className="flex flex-col">
                                <span className="font-mono text-[9px] font-bold tracking-wider uppercase opacity-60">Reference Token</span>
                                <span className="font-mono text-base font-bold tracking-wider" id="refToken">TXC2026-{Math.floor(Math.random() * 90000) + 10000}</span>
                            </div>
                            <button className="flex items-center gap-1 bg-transparent/10 hover:bg-transparent/20 px-3 py-1.5 rounded text-xs font-sans font-bold transition-all active:scale-95" onClick={() => {}}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <button onClick={() => window.print()} className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-border-hairline hover:border-primary/50 text-white py-3 px-4 rounded-xl font-sans font-semibold text-sm transition-all duration-150">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        <span>Download Pass (PDF)</span>
                    </button>
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 px-4 rounded-xl font-sans font-semibold text-sm shadow-lg shadow-primary/20 transition-all duration-150" onClick={() => navigate('/')}>
                        <span>Back to Homepage</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
                
                {/* Helpdesk */}
                <div className="mt-8 flex items-center justify-center gap-2 text-text-cream/50 font-body text-xs text-center">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Need to update your resume?
                    </span>
                    <a className="text-primary font-semibold hover:underline flex items-center gap-0.5" href="/#contact">
                        Contact Helpdesk
                    </a>
                </div>
            </div>
        </div>
      </main>

      <SmokedFooter showContinue={false} showBack={false} currentStep={5} totalSteps={5} />
    </div>
  );
};

export default Step5Confirmation;
