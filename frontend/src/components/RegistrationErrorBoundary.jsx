import React from 'react';

class RegistrationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Registration Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-transparent text-text-cream font-body antialiased min-h-screen flex flex-col items-center justify-center relative px-4">
          <div className="max-w-md w-full smoked-panel rounded-lg p-8 text-center shadow-xl">
            <div className="w-16 h-16 rounded-full bg-red-900/30 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-display font-bold text-white mb-3 tracking-tight">Something went wrong</h2>
            <p className="text-sm text-text-cream/70 mb-8 leading-relaxed">
              An unexpected display error occurred during your registration. Don't worry, your data is safe.
            </p>
            <a 
              href="/register/step1"
              className="inline-flex w-full items-center justify-center px-6 py-3 rounded-md bg-primary hover:bg-red-800 text-white font-sans font-semibold text-sm transition-all"
            >
              Return to Registration Start
            </a>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default RegistrationErrorBoundary;
