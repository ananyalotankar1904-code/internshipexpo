import React from 'react';
import tedxLogo from '../../tedx-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';


const Step1StudentDetails = () => {
  const navigate = useNavigate();
  const { studentDetails, updateStudentDetails } = useRegistration();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/register/step2');
  };

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">

      
      <SmokedHeader />

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 py-6 mb-20 md:mb-24">
        <div className="w-full max-w-[620px] smoked-glass rounded-xl p-6 sm:p-9 shadow-2xl border border-border-hairline relative bg-surface-raised/40 backdrop-blur-sm">
          {/* Top Accent Tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-peach-accent/10 border border-peach-accent/20 text-peach-accent text-[11px] font-mono uppercase tracking-wider font-semibold">
              Step 01 // Baseline Profile
            </span>
            <span className="text-[11px] font-mono text-text-cream/40">
              FRCRCE STUDENT PORTAL
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-text-cream leading-tight">
            Tell us about yourself
          </h1>
          <p className="font-body text-sm text-text-cream/70 mt-2 mb-8 leading-relaxed">
            This information will be shared with companies you apply to during the expo screening rounds.
          </p>

          {/* FORM FIELDS */}
          <form className="space-y-5" onSubmit={handleNext}>
            {/* Field 1: Full Name */}
            <div>
              <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input 
                className="w-full px-4 py-3 rounded-md bg-transparent text-text-cream placeholder-text-cream/30 border border-border-hairline text-sm font-body transition-all focus:border-primary focus:outline-none" 
                placeholder="e.g. Aarav Sharma" 
                required
                type="text" 
                value={studentDetails.fullName}
                onChange={(e) => updateStudentDetails({fullName: e.target.value})}
              />
            </div>

            {/* Field 2: College (Pre-filled & Disabled) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream">
                  College
                </label>
                <span className="text-[10px] font-mono text-peach-accent uppercase tracking-wider">Verified Institution</span>
              </div>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 rounded-md bg-transparent/50 text-text-cream/50 border border-border-hairline text-sm font-body cursor-not-allowed select-none pl-10" 
                  disabled 
                  type="text" 
                  value="Fr. Conceicao Rodrigues College of Engineering (CRCE), Bandra"
                />
                <svg className="w-4 h-4 text-text-cream/40 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Two Column Grid for Branch and Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Field 3: Branch / Department */}
                <div>
                  <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2">
                    Branch / Department <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full px-4 py-3 rounded-md bg-black text-text-cream border border-border-hairline text-sm font-body appearance-none cursor-pointer pr-10 transition-all focus:border-primary focus:outline-none"
                      value={studentDetails.branch}
                      required
                      onChange={(e) => updateStudentDetails({branch: e.target.value})}
                    >
                      <option disabled value="">Select Department</option>
                      <option value="comps">Computer Engineering (COMPS)</option>
                      <option value="cse">Computer Science Engineering (CSE)</option>
                      <option value="mech">Mechanical Engineering (MECH)</option>
                      <option value="ecs">Electronics & Computer Science Engineering (ECS)</option>
                      <option value="aids">Artificial Intelligence and Data Science (AI DS)</option>
                    </select>
                  </div>
                </div>

                {/* Field 4: Year of Study */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream">
                      Year of Study <span className="text-primary">*</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-transparent border border-border-hairline">
                    {[2, 3, 4].map((year) => (
                      <button 
                        key={year}
                        type="button"
                        onClick={() => updateStudentDetails({year: year.toString()})}
                        className={`py-2 px-1 rounded text-center text-[10px] sm:text-xs font-sans transition-all ${
                          studentDetails.year === year.toString()
                            ? 'font-bold bg-primary text-white shadow-lg border border-primary/50'
                            : 'font-medium text-text-cream/60 hover:bg-surface-raised hover:text-text-cream'
                        }`}
                      >
                        {year === 2 ? 'SE' : year === 3 ? 'TE' : 'BE'}
                      </button>
                    ))}
                  </div>
                </div>
            </div>

            {/* Added Fields: Class and Division */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2">
                  Division <span className="text-primary">*</span>
                </label>
                <input 
                  className="w-full px-4 py-3 rounded-md bg-transparent text-text-cream placeholder-text-cream/30 border border-border-hairline text-sm font-body transition-all focus:border-primary focus:outline-none" 
                  placeholder="e.g. A" 
                  required
                  type="text" 
                  value={studentDetails.division}
                  onChange={(e) => updateStudentDetails({division: e.target.value})}
                />
              </div>
            </div>

            {/* Field 5: Email Address */}
            <div>
              <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2">
                Email Address <span className="text-primary">*</span>
              </label>
              <input 
                className="w-full px-4 py-3 rounded-md bg-transparent text-text-cream placeholder-text-cream/30 border border-border-hairline text-sm font-body transition-all focus:border-primary focus:outline-none" 
                placeholder="name@frcrce.ac.in" 
                required
                type="email" 
                value={studentDetails.email}
                onChange={(e) => updateStudentDetails({email: e.target.value})}
              />
              <p className="text-[11px] text-text-cream/50 font-body mt-1.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-peach-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Interview invitations & shortlists will be sent to this email.
              </p>
            </div>

            {/* Field 6: Phone / WhatsApp Number */}
            <div>
              <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2">
                WhatsApp Contact <span className="text-primary">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 flex items-center gap-2 pr-2 border-r border-border-hairline">
                  <span className="text-xs font-mono text-text-cream/70">+91</span>
                </div>
                <input 
                  className="w-full pl-16 pr-4 py-3 rounded-md bg-transparent text-text-cream placeholder-text-cream/30 border border-border-hairline text-sm font-body tracking-wider transition-all focus:border-primary focus:outline-none" 
                  placeholder="98765 43210" 
                  required
                  type="tel" 
                  value={studentDetails.phone}
                  onChange={(e) => updateStudentDetails({phone: e.target.value})}
                />
              </div>
              <p className="text-[11px] text-text-cream/50 font-body mt-1.5">
                You'll receive quick WhatsApp alerts for live booth slot invites on fair day.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-border-hairline flex items-center justify-between">
              <span className="text-[11px] font-mono text-text-cream/40 hidden sm:block">ALL DATA ENCRYPTED</span>
              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-sm shadow-lg shadow-primary/20 transition-all"
              >
                <span>Continue</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <SmokedFooter showContinue={false} showBack={false} currentStep={1} totalSteps={5} />
    </div>
  );
};

export default Step1StudentDetails;
