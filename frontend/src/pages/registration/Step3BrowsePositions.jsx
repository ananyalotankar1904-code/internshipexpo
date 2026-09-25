import React, { useState, useEffect } from 'react';
import tedxLogo from '../../tedx-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';


const Step3BrowsePositions = () => {
  const navigate = useNavigate();
  const { selectedPositions, togglePosition } = useRegistration();
  const [companies, setCompanies] = useState([]);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [stipendFilter, setStipendFilter] = useState('All');

  useEffect(() => {
    companiesApi.getAll()
      .then(res => {
        setCompanies(res.data.companies);
      })
      .catch(err => console.error('Failed to fetch companies', err));
  }, []);

  // Filter positions
  const filteredPositions = [];
  companies.forEach(company => {
    company.positions.forEach(position => {
      // simple search
      if (searchTerm && !position.title.toLowerCase().includes(searchTerm.toLowerCase()) && !company.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return;
      }
      if (domainFilter !== 'All' && position.domain !== domainFilter) return;
      if (yearFilter !== 'All' && !position.eligibleYears.toString().includes(yearFilter)) return;
      if (stipendFilter === 'Paid Only' && !position.isPaid) return;
      if (stipendFilter === 'Unpaid Only' && position.isPaid) return;

      filteredPositions.push({ ...position, company });
    });
  });

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">


      <SmokedHeader />

      {/* STICKY FILTER SUB-HEADER */}
      <div className="w-full smoked-glass border-b border-border-hairline sticky top-[73px] z-40 py-4 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">

          {/* Filter Controls Left/Center */}
          <div className="flex flex-wrap items-center gap-3 flex-1 w-full xl:max-w-[920px]">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-text-cream/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search roles, companies..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-transparent rounded-md border border-border-hairline text-xs font-medium text-text-cream placeholder-text-cream/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Filter: Domain Dropdown */}
            <div className="relative w-full sm:w-auto flex-grow sm:flex-grow-0">
              <select
                value={domainFilter}
                onChange={e => setDomainFilter(e.target.value)}
                className="w-full appearance-none bg-transparent border border-border-hairline rounded-md px-3.5 py-2 pr-8 text-xs font-sans font-medium text-text-cream hover:border-text-cream/40 focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="All" className="bg-[#140a0a] text-[#FFF4E1]">Domain: All Domains</option>
                <option value="Software Engineering" className="bg-[#140a0a] text-[#FFF4E1]">Software Engineering</option>
                <option value="Data Science" className="bg-[#140a0a] text-[#FFF4E1]">Data Science</option>
                <option value="Product Management" className="bg-[#140a0a] text-[#FFF4E1]">Product Management</option>
                <option value="Design" className="bg-[#140a0a] text-[#FFF4E1]">Design</option>
              </select>
            </div>

            {/* Filter: Paid / Unpaid Dropdown */}
            <div className="relative w-full sm:w-auto flex-grow sm:flex-grow-0">
              <select
                value={stipendFilter}
                onChange={e => setStipendFilter(e.target.value)}
                className="w-full appearance-none bg-transparent border border-border-hairline rounded-md px-3.5 py-2 pr-8 text-xs font-sans font-medium text-text-cream hover:border-text-cream/40 focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="All" className="bg-[#140a0a] text-[#FFF4E1]">Stipend: All</option>
                <option value="Paid Only" className="bg-[#140a0a] text-[#FFF4E1]">Paid Only</option>
                <option value="Unpaid Only" className="bg-[#140a0a] text-[#FFF4E1]">Unpaid Only</option>
              </select>
            </div>
          </div>

          {/* Prominent Sticky Application Counter Chip */}
          <div className="flex flex-col xl:items-end gap-2 mt-2 xl:mt-0 pt-3 xl:pt-0 border-t border-border-hairline xl:border-none relative group">
            <div className="flex items-center justify-between w-full xl:w-auto xl:justify-start gap-3">
              <div className="text-right">
                <div className="text-[10px] font-bold tracking-wider uppercase text-text-cream/60">Application Roster</div>
                <div className="text-xs font-semibold text-text-cream">{3 - selectedPositions.length} spots remaining</div>
              </div>

              {/* Highlighted Pill-Shaped Badge in #D96F2B */}
              <div className={`flex items-center gap-2 ${selectedPositions.length === 3 ? 'bg-primary text-white' : 'bg-transparent border border-primary text-primary'} px-4 py-2 rounded-full shadow-md font-sans font-bold text-sm tracking-wide cursor-pointer`}>
                {selectedPositions.length === 3 ? (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                )}
                <span>Applications: {selectedPositions.length}/3</span>
              </div>
            </div>

            {/* Tooltip/Dropdown showing selected positions */}
            {selectedPositions.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-surface-solid border border-border-hairline rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-3">
                <div className="text-[10px] uppercase tracking-wider text-text-cream/50 mb-2">Currently Selected</div>
                <div className="flex flex-col gap-2">
                  {selectedPositions.map(item => {
                    const actualId = (typeof item === 'object' && item !== null) ? item.id : item;
                    let posTitle = 'Unknown';
                    let compName = 'Unknown';
                    companies.forEach(c => {
                      const p = c.positions.find(pos => pos.id === actualId);
                      if (p) { posTitle = p.title; compName = c.name; }
                    });
                    return (
                      <div key={actualId} className="text-xs bg-surface-raised p-2 rounded border border-border-hairline">
                        <div className="font-bold text-text-cream truncate">{compName}</div>
                        <div className="text-text-cream/70 truncate">{posTitle}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <main className="relative z-10 flex-grow max-w-[1440px] w-full mx-auto px-4 md:px-10 py-8 mb-24">

        {/* Title & Guidance Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border-hairline gap-4 md:gap-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Opportunity Matchmaker • Cohort 2026</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white uppercase">Browse Internship Positions</h1>
            <p className="text-sm text-text-cream/70 mt-1 max-w-2xl font-normal">
              Select up to <strong className="text-white font-semibold">3 internship positions</strong> that match your career goals and technical strengths.
            </p>
          </div>
        </div>

        {/* 3-COLUMN INTERNSHIP POSITION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPositions.map(position => {
            const isSelected = selectedPositions.includes(position.id);
            const isMaxReached = selectedPositions.length >= 3 && !isSelected;
            const company = position.company;

            return (
              <div key={position.id} className={`smoked-panel rounded-lg p-6 flex flex-col justify-between relative transition-all duration-200 ${isSelected ? 'border-primary ring-1 ring-primary/50' : 'border-border-hairline'} ${isMaxReached ? 'opacity-60' : ''}`}>
                {isSelected && (
                  <div className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    Selected in Profile
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-transparent border border-border-hairline flex items-center justify-center p-2 shadow-sm text-primary font-display font-bold text-lg">
                        {company.logoUrl ? (
                          <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" />
                        ) : (
                          <span>{company.name.substring(0, 2).toUpperCase()}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-semibold text-sm text-white flex items-center gap-1.5">
                          {company.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-cream/50 uppercase">{company.industry}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-white tracking-tight leading-snug mb-2">
                    {position.title}
                  </h3>

                  <p className="font-body text-xs text-text-cream/70 leading-relaxed mb-4 line-clamp-2">
                    {position.description || company.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-peach-accent font-sans font-medium text-[11px]">
                      {position.domain}
                    </span>

                    <span className="px-2.5 py-1 rounded bg-transparent border border-border-hairline text-text-cream/80 font-sans text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Eligible: Year {position.eligibleYears}
                    </span>

                    <span className="px-2 py-1 rounded bg-transparent border border-border-hairline text-text-cream/70 font-mono text-[11px]">
                      {position.duration}
                    </span>

                    {position.isPaid && (
                      <span className="px-2.5 py-1 rounded bg-green-900/30 border border-green-500/30 text-green-400 font-mono font-medium text-[11px] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Paid
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => togglePosition(position.id)}
                    disabled={isMaxReached}
                    className={`flex-1 py-2.5 px-4 rounded-md font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${isSelected ? 'text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30' : 'text-text-cream bg-transparent border border-border-hairline hover:bg-white/5'} ${isMaxReached ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {isSelected ? (
                      <>
                        <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Selected</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        <span>{isMaxReached ? 'Max 3 Selected' : 'Apply'}</span>
                      </>
                    )}
                  </button>
                  {position.jobDescriptionPdfUrl && (
                    <a href={position.jobDescriptionPdfUrl} target="_blank" rel="noreferrer" className="px-3 py-2.5 font-sans font-semibold text-xs uppercase tracking-wider rounded-md border border-border-hairline text-text-cream hover:bg-white/5 transition-all flex items-center justify-center whitespace-nowrap">
                      📄 Job Description
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t border-border-hairline pt-6">
          <button
            type="button"
            onClick={() => navigate('/register/step2')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-md text-text-cream/70 hover:text-text-cream hover:bg-transparent/50 transition-all font-sans text-sm font-semibold border border-transparent hover:border-border-hairline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/register/step4')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-sm shadow-lg shadow-primary/20 transition-all"
          >
            <span>Review &amp; Continue</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </main>

      <SmokedFooter showContinue={false} showBack={false} currentStep={3} totalSteps={5} />
    </div>
  );
};

export default Step3BrowsePositions;