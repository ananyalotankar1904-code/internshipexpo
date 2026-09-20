import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';

const Step3BrowsePositions = () => {
  const navigate = useNavigate();
  const { selectedPositions, togglePosition } = useRegistration();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    companiesApi.getAll()
      .then(res => {
        setCompanies(res.data.companies);
        console.log('Fetched companies:', res.data.companies);
      })
      .catch(err => console.error('Failed to fetch companies', err));
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      {/* Original Body Content */}
      

  {/* TOP HEADER (Matching Step 1, 2, 4 styling) */}
  <header className="w-full bg-[#FFF4E1] border-b border-white/10 sticky top-0 z-50">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-0 h-auto md:h-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      {/* TEDxCRCE Logo & Subtitle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center tracking-tight">
          <span className="text-tedx-red font-clash text-2xl font-black">TEDx</span><span className="text-white font-clash text-2xl font-bold">CRCE</span>
        </div>
        <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
        <div>
          <div className="font-general font-bold text-xs uppercase tracking-wider text-white">Internship Expo 2026</div>
          <div className="text-[10px] text-white/60 font-medium tracking-wide uppercase">Student Candidate Portal</div>
        </div>
      </div>

      {/* Navigation Links & Save/Exit */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <nav className="flex items-center gap-6 text-xs font-general font-semibold tracking-wider uppercase text-white/70">
          <span className="text-tedx-red font-bold">Overview</span>
          <span className="hover:text-white cursor-pointer transition-colors">Guidelines</span>
          <span className="hover:text-white cursor-pointer transition-colors">Companies</span>
          <span className="hover:text-white cursor-pointer transition-colors">Support & FAQ</span>
        </nav>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-white/20 rounded px-3.5 py-1.5 text-xs font-general font-medium text-white hover:bg-white/5 transition">
            <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
            Save & Exit
          </button>
          
          <div className="w-8 h-8 rounded-full bg-tedx-red text-white flex items-center justify-center font-general font-bold text-xs shadow-sm">
            NF
          </div>
        </div>
      </div>
    </div>
  </header>

  {/* 5-STEP HORIZONTAL PROGRESS BAR */}
  <div className="w-full bg-[#FFF4E1] border-b border-white/10 pt-6 pb-6 overflow-x-auto hide-scrollbar">
    <div className="max-w-[880px] mx-auto px-4 min-w-[600px]">
      <div className="relative flex items-center justify-between">
        {/* Connecting Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/15 -translate-y-1/2 z-0"></div>
        {/* Active Progress Line: Steps 1 to 3 completed/active (approx 50%) */}
        <div className="absolute top-1/2 left-0 w-[50%] h-[2px] bg-tedx-red -translate-y-1/2 z-0"></div>

        {/* Step 1: Completed */}
        <div className="relative z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-tedx-red text-white flex items-center justify-center shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div className="mt-2 text-center">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-tedx-red">Completed</span>
            <span className="block text-xs font-general font-bold text-white">1. Student Details</span>
          </div>
        </div>

        {/* Step 2: Completed */}
        <div className="relative z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-tedx-red text-white flex items-center justify-center shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div className="mt-2 text-center">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-tedx-red">Completed</span>
            <span className="block text-xs font-general font-bold text-white">2. Resume Upload</span>
          </div>
        </div>

        {/* Step 3: Active / In Progress */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-tedx-red text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-tedx-red">
            3
          </div>
          <div className="mt-2 text-center">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-tedx-red">In Progress</span>
            <span className="block text-xs font-general font-bold text-white">3. Positions</span>
          </div>
        </div>

        {/* Step 4: Pending */}
        <div className="relative z-10 flex flex-col items-center opacity-60">
          <div className="w-9 h-9 rounded-full bg-surface-container-lowest border-2 border-white/30 text-white/60 flex items-center justify-center font-semibold text-xs">
            4
          </div>
          <div className="mt-2 text-center">
            <span className="block text-[10px] font-medium tracking-wider uppercase text-white/50">Pending</span>
            <span className="block text-xs font-general font-medium text-white">4. Summary</span>
          </div>
        </div>

        {/* Step 5: Locked */}
        <div className="relative z-10 flex flex-col items-center opacity-60">
          <div className="w-9 h-9 rounded-full bg-surface-container-lowest border-2 border-white/30 text-white/60 flex items-center justify-center font-semibold text-xs">
            <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="mt-2 text-center">
            <span className="block text-[10px] font-medium tracking-wider uppercase text-white/50">Locked</span>
            <span className="block text-xs font-general font-medium text-white">5. Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* STICKY FILTER SUB-HEADER (Persists with prominent 1/3 Applications Counter) */}
  <div className="w-full bg-[#FFF4E1]/95 backdrop-blur-md border-b border-white/15 sticky top-auto md:top-20 z-40 py-4 shadow-sm">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
      
      {/* Filter Controls Left/Center */}
      <div className="flex flex-wrap items-center gap-3 flex-1 w-full xl:max-w-[920px]">
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <input type="text" placeholder="Search roles, companies, stacks..." value="" className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest rounded-md border border-white/20 text-xs font-medium text-white placeholder-white/40 focus:outline-none focus:border-tedx-red focus:ring-1 focus:ring-tedx-red" />
        </div>

        {/* Filter: Year Dropdown */}
        <div className="relative">
          <select className="appearance-none bg-surface-container-lowest border border-white/20 rounded-md px-3.5 py-2 pr-8 text-xs font-general font-medium text-white hover:border-white/40 focus:outline-none focus:border-tedx-red cursor-pointer">
            <option>Year: 3rd Year (TE - Your Cohort)</option>
            <option>All Years</option>
            <option>1st Year (FE)</option>
            <option>2nd Year (SE)</option>
            <option>4th Year (BE)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>

        {/* Filter: Domain Dropdown */}
        <div className="relative">
          <select className="appearance-none bg-surface-container-lowest border border-white/20 rounded-md px-3.5 py-2 pr-8 text-xs font-general font-medium text-white hover:border-white/40 focus:outline-none focus:border-tedx-red cursor-pointer">
            <option>Domain: All Domains (6)</option>
            <option>Cloud & Systems</option>
            <option>AI / Machine Learning</option>
            <option>Fintech & Quantitative</option>
            <option>Product & UI/UX</option>
            <option>Robotics & Embedded</option>
            <option>Marketing & Operations</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>

        {/* Filter: Paid / Unpaid Dropdown */}
        <div className="relative">
          <select className="appearance-none bg-surface-container-lowest border border-white/20 rounded-md px-3.5 py-2 pr-8 text-xs font-general font-medium text-white hover:border-white/40 focus:outline-none focus:border-tedx-red cursor-pointer">
            <option>Stipend: All (Paid & Unpaid)</option>
            <option>Paid Only (with Stipend)</option>
            <option>Unpaid (Academic Credit)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </div>

        {/* Reset Tag / Active Filter Indicator */}
        <span className="inline-flex items-center gap-1.5 bg-tedx-red/70 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-tedx-red/30">
          <span>TE Filter Active</span>
          <svg className="w-3 h-3 text-white/60 cursor-pointer hover:text-tedx-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </span>
      </div>

      {/* Prominent Sticky Application Counter Chip */}
      <div className="flex items-center gap-3 self-end xl:self-auto">
        <div className="text-right">
          <div className="text-[10px] font-bold tracking-wider uppercase text-white/60">Application Roster</div>
          <div className="text-xs font-semibold text-white">2 spots remaining</div>
        </div>

        {/* Highlighted Pill-Shaped Badge in #B91C1C with Applications: 1/3 */}
        <div className="flex items-center gap-2 bg-tedx-red text-white px-4 py-2 rounded-full shadow-md font-general font-bold text-sm tracking-wide border border-tedx-red">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Applications: 1/3</span>
        </div>
      </div>

    </div>
  </div>

  {/* MAIN PAGE CONTENT (1440px Canvas Centered Layout) */}
  <main className="max-w-[1440px] mx-auto px-4 md:px-10 py-8 flex-1 w-full">
    
    {/* Title & Guidance Banner */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4 md:gap-0">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tedx-red mb-1">
          <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
          <span>Opportunity Matchmaker • Cohort 2026</span>
        </div>
        <h1 className="text-3xl font-clash text-white">Browse Internship Positions</h1>
        <p className="text-sm text-white/70 mt-1 max-w-2xl font-normal">
          Select up to <strong className="text-white font-semibold">3 internship positions</strong> that match your career goals and technical strengths. Selected roles are compiled into your interview docket.
        </p>
      </div>

      {/* Quick Guidance & Quota Notice */}
      <div className="flex items-center gap-4 bg-surface-container-lowest border border-white/15 rounded-lg px-4 py-2.5 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-tedx-red/50 flex items-center justify-center text-tedx-red">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
        </div>
        <div className="text-xs">
          <div className="font-general font-bold text-white">Candidate Year: 3rd Year (Computer Eng)</div>
          <div className="text-white/60 text-[11px]">Ineligible positions are marked with reason &amp; non-selectable.</div>
        </div>
      </div>
    </div>

    {/* 3-COLUMN INTERNSHIP POSITION CARDS GRID */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {companies.map(company => (
        company.positions.map(position => {
          const isSelected = selectedPositions.includes(position.id);
          return (
            <div key={position.id} className={`bg-surface-container-lowest rounded-lg border-2 ${isSelected ? 'border-tedx-red' : 'border-white/15'} p-5 card-shadow flex flex-col justify-between relative transition-all duration-200`}>
              {isSelected && (
                <div className="absolute -top-3 right-4 bg-tedx-red text-white text-[10px] font-general font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                  Selected in Dossier
                </div>
              )}
              <div>
                <div className="flex items-start justify-between mb-3 pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#FFF4E1] border border-white/15 flex items-center justify-center p-2 shadow-sm">
                      {company.logoUrl ? (
                         <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                      ) : (
                         <span className="font-clash text-xs font-bold">{company.name.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-general">{company.name}</div>
                      <div className="text-[11px] text-white/60 flex items-center gap-1">
                        <svg className="w-3 h-3 text-white/40" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                        Multiple Locations
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="font-general font-bold text-lg text-white mb-2 leading-snug">{position.title}</h2>
                <p className="text-xs text-white/70 mb-3 line-clamp-2">{company.description}</p>
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="badge-peach text-[11px] font-semibold px-2 py-0.5 rounded">{position.domain}</span>
                  <span className="bg-white/5 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-white/10">Eligible: Year {position.eligibleYears}</span>
                  <span className="bg-white/5 text-white text-[11px] font-medium px-2 py-0.5 rounded border border-white/10">{position.duration}</span>
                  {position.isPaid && (
                    <span className="badge-stipend text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      Paid
                    </span>
                  )}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 mt-2">
                <button onClick={() => togglePosition(position.id)} className={`w-full py-2.5 px-4 rounded font-general font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-sm transition-colors ${isSelected ? 'bg-tedx-red hover:bg-tedx-red' : 'bg-tedx-red hover:bg-tedx-red'}`}>
                  {isSelected ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                      <span>Selected ✓ (Click to Remove)</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                      <span>Apply to Position</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })
      ))}
    </div>
  
  </main>

  {/* STICKY FOOTER ACTION BAR (With Enabled "Review & Continue" Button) */}
  <footer className="w-full bg-[#FFF4E1] border-t border-white/15 sticky bottom-0 z-50 py-4 shadow-[0_-4px_16px_rgba(47,47,47,0.06)]">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      {/* Back Button to Step 2 (Outlined, Active) */}
      <button className="w-full md:w-auto justify-center flex items-center gap-2 border border-white/30 bg-surface-container-lowest hover:bg-white/5 text-white px-5 py-2.5 rounded font-general font-semibold text-xs transition" onClick={() => navigate('/register/step2')}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        <span>Back to Resume Upload</span>
      </button>

      {/* Center Status Information */}
      <div className="hidden md:flex items-center gap-2 text-xs font-medium text-white/70">
        <span className="w-2 h-2 rounded-full bg-tedx-red"></span>
        <span>Step 3 of 5 • <strong>1 / 3 Positions Chosen</strong> (Google Cloud India)</span>
      </div>

      {/* Primary Action CTA: Review & Continue (Filled #B91C1C, Enabled because 1 is selected) */}
      <button className="w-full md:w-auto justify-center flex items-center gap-2 bg-tedx-red hover:bg-tedx-red text-white px-7 py-2.5 rounded font-general font-bold text-xs uppercase tracking-wider shadow-md transition-all" onClick={() => navigate('/register/step4')}>
        <span>Review &amp; Continue to Summary</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    </div>
  </footer>

  {/* BOTTOM LEGAL FOOTER (TEDxCRCE Compliance) */}
  <div className="w-full bg-[#FFF4E1] border-t border-white/10 py-6">
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
      <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
        <div className="flex items-center gap-1">
          <span className="font-bold text-tedx-red">TEDx</span><span className="font-bold text-white">CRCE</span>
        </div>
        <span className="text-[11px]">This independent TEDx event is operated under license from TED.</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[11px] text-center md:text-left">
        <span>© 2026 TEDxCRCE Internship Expo. All rights reserved.</span>
        <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Session Verified &amp; Encrypted
        </span>
      </div>
    </div>
  </div>


    </div>
  );
};

export default Step3BrowsePositions;
