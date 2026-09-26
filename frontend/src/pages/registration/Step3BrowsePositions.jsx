import React, { useState, useEffect, useMemo } from 'react';
import tedxLogo from '../../tedx-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';
import { getDomainForCompany } from '../../utils/domainMapping';
import { getExtraInfoForCompany } from '../../utils/jobExtraInfo';
const Step3BrowsePositions = () => {
  const navigate = useNavigate();
  const { selectedPositions, togglePosition } = useRegistration();
  const [companies, setCompanies] = useState([]);
  const [headerHeight, setHeaderHeight] = useState(73);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('All');

  useEffect(() => {
    companiesApi.getAll()
      .then(res => {
        setCompanies(res.data.companies);
      })
      .catch(err => console.error('Failed to fetch companies', err));
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('.smoked-header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Build a position lookup map
  const positionMap = useMemo(() => {
    const map = new Map();
    companies.forEach(company => {
      company.positions.forEach(position => {
        map.set(position.id, { ...position, company });
      });
    });
    return map;
  }, [companies]);

  // Filter positions
  const filteredPositions = useMemo(() => {
    const results = [];
    companies.forEach(company => {
      company.positions.forEach(position => {
        // simple search
        if (searchTerm && !position.title.toLowerCase().includes(searchTerm.toLowerCase()) && !company.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return;
        }
        if (yearFilter !== 'All' && !position.eligibleYears.toString().includes(yearFilter)) return;

        results.push({ ...position, company });
      });
    });
    return results;
  }, [companies, searchTerm, yearFilter]);

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">


      <SmokedHeader />

      {/* STICKY FILTER SUB-HEADER */}
      <div 
        className="w-full bg-black/90 backdrop-blur-md border-b border-border-hairline sticky z-40 py-4 shadow-sm"
        style={{ top: `${headerHeight}px` }}
      >
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
          </div>

          {/* Prominent Sticky Application Counter Chip */}
          <div className="flex flex-col xl:items-end gap-2 mt-2 xl:mt-0 pt-3 xl:pt-0 border-t border-border-hairline xl:border-none relative">
            <div className="flex items-center justify-between w-full xl:w-auto xl:justify-start gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] font-bold tracking-wider uppercase text-text-cream/60">Application Roster</div>
                <div className="text-xs font-semibold text-text-cream">{3 - selectedPositions.length} spots remaining</div>
              </div>

              {/* Highlighted Pill-Shaped Badge in #D96F2B */}
              <div className={`flex items-center gap-2 ${selectedPositions.length === 3 ? 'bg-primary text-white' : 'bg-transparent border border-primary text-primary'} px-4 py-2 rounded-full shadow-md font-sans font-bold text-sm tracking-wide`}>
                {selectedPositions.length === 3 ? (
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                )}
                <span>Applications: {selectedPositions.length}/3</span>
              </div>
            </div>
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
            const extraInfo = getExtraInfoForCompany(company.name, position.title);

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
                          <img src={company.logoUrl} alt={company.name} className="w-full h-full object-contain" loading="lazy" decoding="async" />
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
                    {company.name.toLowerCase() === 'search india' && (
                      <span className="px-2.5 py-1 rounded bg-pink-900/30 text-pink-400 font-sans font-medium text-[11px] border border-pink-500/30 flex items-center gap-1">
                        Female
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-peach-accent font-sans font-medium text-[11px]">
                      {getDomainForCompany(company.name, position.domain)}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-tedx-red/20 text-tedx-red font-sans font-medium text-[11px] border border-tedx-red/20">
                      {extraInfo.type}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 font-sans font-medium text-[11px] border border-blue-500/20">
                      {extraInfo.mode} Interview
                    </span>

                    <span className="px-2.5 py-1 rounded bg-transparent border border-border-hairline text-text-cream/80 font-sans text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Eligible: Year {position.eligibleYears}
                    </span>

                    <span className="px-2 py-1 rounded bg-transparent border border-border-hairline text-text-cream/70 font-mono text-[11px]">
                      {position.duration}
                    </span>

                    {position.isPaid ? (
                      <span className="px-2.5 py-1 rounded bg-green-900/30 border border-green-500/30 text-green-400 font-mono font-medium text-[11px] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Paid
                      </span>
                    ) : (position.stipend?.toLowerCase().includes("incentive") || company.name === "The Kaash Store") ? (
                      <span className="px-2.5 py-1 rounded bg-yellow-900/30 border border-yellow-500/30 text-yellow-400 font-mono font-medium text-[11px] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Based on Incentive
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => togglePosition(position.id)}
                    disabled={isMaxReached}
                    className={`flex-grow py-2.5 px-4 rounded-md font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${isSelected ? 'text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30' : 'text-text-cream bg-transparent border border-border-hairline hover:bg-white/5'} ${isMaxReached ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {isSelected ? (
                      <>
                        <svg className="w-4 h-4 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span>Selected (Click to Remove)</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        <span>{isMaxReached ? 'Max 3 Selected' : 'Apply for Position'}</span>
                      </>
                    )}
                  </button>
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
            onClick={() => {
              if (selectedPositions.length === 0) {
                alert('Please select at least 1 internship position before continuing.');
                return;
              }
              navigate('/register/step4');
            }}
            disabled={selectedPositions.length === 0}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md font-sans font-semibold text-sm shadow-lg transition-all ${selectedPositions.length > 0 ? 'bg-primary hover:bg-primary-hover text-white shadow-primary/20 cursor-pointer' : 'bg-transparent border border-border-hairline text-text-cream/40 cursor-not-allowed'}`}
          >
            <span>Review &amp; Continue ({selectedPositions.length}/3)</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </main>

      <SmokedFooter showContinue={false} showBack={false} currentStep={3} totalSteps={5} />
    </div>
  );
};

export default Step3BrowsePositions;