import React from 'react';
import tedxLogo from '../../tedx-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';


const Step2ResumeUpload = () => {
  const navigate = useNavigate();
  const { resumeLink, setResumeLink } = useRegistration();

  const handleNext = (e) => {
    e.preventDefault();
    if(resumeLink) {
        if (!resumeLink.toLowerCase().includes('drive.google.com')) {
            alert('Please enter a valid Google Drive link.');
            return;
        }
        navigate('/register/step3');
    }
  };

  return (
    <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col relative">

      
      <SmokedHeader />

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 py-6 mb-20 md:mb-24 w-full">
        <div className="flex flex-col w-full min-w-0 max-w-[820px] mx-auto py-2">
            {/* MAIN APP SMOKED PANEL */}
            <div className="relative w-full rounded-xl smoked-glass border border-border-hairline p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden bg-surface-raised/40 backdrop-blur-sm">
                {/* Background Ambient Glow & Corner Geometric Markers */}
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
                
                {/* Corner Hardware Notches */}
                <div className="absolute top-3 left-3 flex gap-1 items-center opacity-40 select-none">
                    <span className="w-1.5 h-1.5 bg-peach-accent rounded-none"></span>
                    <span className="font-mono text-[9px] text-peach-accent tracking-widest">APP-SEC-02</span>
                </div>
                
                {/* HEADER CLUSTER */}
                <div className="flex flex-col gap-2 mb-8 mt-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded bg-transparent/50 border border-border-hairline text-peach-accent/70 font-mono text-[10px] tracking-wider uppercase">
                                STEP 02 // CANDIDATE PROFILE
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-primary font-mono text-[10px]">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>SECURE INGEST</span>
                        </div>
                    </div>
                    <h1 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-text-cream leading-tight">
                        Upload Your Resume
                    </h1>
                    <p className="font-body text-sm text-text-cream/70 max-w-[620px]">
                        Please provide a public Google Drive link to your resume (PDF). <strong className="text-primary font-semibold">IMPORTANT: Ensure the sharing settings are set to "Anyone with the link can view" or your application will be rejected.</strong>
                    </p>
                </div>
                
                <form onSubmit={handleNext}>
                    <div className="flex flex-col gap-1.5 mb-8">
                      <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-text-cream mb-2" htmlFor="resumeLink">
                        Google Drive URL <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-text-cream/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                            </svg>
                        </div>
                        <input 
                          className="w-full min-w-0 pl-10 pr-4 py-4 bg-transparent text-text-cream font-body text-sm rounded-lg focus:outline-none focus:border-primary border border-border-hairline transition-all placeholder:text-text-cream/30" 
                          id="resumeLink" 

                          name="resumeLink" 
                          placeholder="https://drive.google.com/file/d/..." 
                          required 
                          type="url"
                          value={resumeLink}
                          onChange={(e) => setResumeLink(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    {resumeLink && (
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-3 mb-8">
                        <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div className="flex flex-col">
                          <span className="font-sans font-bold text-sm text-primary-hover">
                            Link captured
                          </span>
                          <p className="font-body text-xs text-text-cream/70 mt-1">
                            Your link has been successfully attached. We will verify access before final submission.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between border-t border-border-hairline pt-6">
                        <button 
                            type="button"
                            onClick={() => navigate('/register/step1')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-text-cream/70 hover:text-text-cream hover:bg-transparent/50 transition-all font-sans text-sm font-semibold border border-transparent hover:border-border-hairline"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            <span>Back</span>
                        </button>
                        
                        <button 
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-sm shadow-lg shadow-primary/20 transition-all"
                        >
                            <span>Continue</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </main>

      <SmokedFooter showContinue={false} showBack={false} currentStep={2} totalSteps={5} />
    </div>
  );
};

export default Step2ResumeUpload;
