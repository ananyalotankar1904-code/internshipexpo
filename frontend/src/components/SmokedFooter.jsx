import React from 'react';

const SmokedFooter = ({
  currentStep = null,
  totalSteps = 5,
  onBack,
  onContinue,
  continueText = "Continue",
  isContinueDisabled = false,
  showBack = true
}) => {
  return (
    <footer className="smoked-footer sticky bottom-0 z-30 w-full px-12 py-4 flex items-center justify-between mt-auto">
      {/* Progress Section */}
      <div className="flex items-center gap-6">
        {currentStep && currentStep < totalSteps ? (
          <>
            <div className="font-sans text-xs font-semibold text-[rgba(255,244,225,0.4)] uppercase tracking-widest">
              Step {currentStep} <span className="mx-1">/</span> {totalSteps}
            </div>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`w-10 h-1 rounded-full ${
                    index < currentStep ? 'bg-[#B91C1C]' : 'bg-white/10'
                  }`}
                ></div>
              ))}
            </div>
          </>
        ) : (
          <div></div> // Spacer if no progress
        )}
      </div>
      
      {/* Navigation Controls */}
      <div className="flex items-center gap-4">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="px-6 py-2.5 rounded text-sm font-semibold tracking-wide text-[#FFF4E1] hover:bg-white/5 border border-transparent transition-all"
          >
            Back
          </button>
        )}
        <button
          onClick={onContinue}
          disabled={isContinueDisabled}
          className={`px-8 py-2.5 rounded text-white text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(185,28,28,0.4)] ${
            isContinueDisabled ? 'bg-gray-600 opacity-50 cursor-not-allowed' : 'bg-[#B91C1C] hover:bg-[#8C1A1A]'
          }`}
        >
          {continueText}
        </button>
      </div>
    </footer>
  );
};

export default SmokedFooter;
