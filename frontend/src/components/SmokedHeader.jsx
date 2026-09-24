import React from 'react';
import { Link } from 'react-router-dom';
import tedxLogo from '../tedx-logo.png';

const SmokedHeader = () => {
  return (
    <header className="smoked-header sticky top-0 z-30 w-full px-4 md:px-12 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center tracking-tight font-display font-bold text-xl text-[#FFF4E1]">
          <img src={tedxLogo} alt="TEDx" className="h-10 object-contain mr-0.5 -mt-1" /><span>CRCE</span>
        </Link>
        <div className="h-4 w-[1px] bg-white/20"></div>
        <span className="hidden sm:inline font-mono text-[11px] tracking-widest text-[#FFC9A9] uppercase">Internship Expo 2026</span>
      </div>
      {/* Center Context Pill */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E1010] border border-[rgba(255,244,225,0.12)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-pulse"></span>
        <span className="text-xs font-medium text-[rgba(255,244,225,0.75)] tracking-wide">Candidate Registration</span>
      </div>
      {/* Right Action: Save & Exit */}
      <div className="flex items-center gap-4">
        <Link to="/admin/login" className="font-sans text-xs font-semibold tracking-wider uppercase text-[#FFF4E1] hover:text-[#FFC9A9] transition-colors flex items-center gap-2 px-3 py-1.5 rounded border border-transparent hover:border-hairline">
          <span className="hidden sm:inline">Admin</span>
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </Link>
        <Link to="/" className="font-sans text-xs font-semibold tracking-wider uppercase text-[#FFF4E1] hover:text-[#FFC9A9] transition-colors flex items-center gap-2 px-3 py-1.5 rounded border border-transparent hover:border-hairline">
          <span className="hidden sm:inline">Save &amp; Exit</span>
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default SmokedHeader;
