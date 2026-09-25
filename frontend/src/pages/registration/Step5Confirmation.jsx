import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRegistration } from '../../context/RegistrationContext';
import { companiesApi } from '../../api/client';
import SmokedHeader from '../../components/SmokedHeader';
import SmokedFooter from '../../components/SmokedFooter';
import jsPDF from 'jspdf';


const Step5Confirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { studentDetails, selectedPositions } = location.state || { studentDetails: {}, selectedPositions: [] };
    const { clearRegistration } = useRegistration();
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        companiesApi.getAll()
            .then(res => setCompanies(res.data.companies))
            .catch(console.error);
    }, []);

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("TEDxCRCE Internship Expo 2026", 105, 20, { align: "center" });

        // Subheader
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Official Application Pass", 105, 30, { align: "center" });

        // Divider
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // Application Successful
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(34, 197, 94); // Green
        doc.text("Application Successful!", 105, 50, { align: "center" });
        doc.setTextColor(0, 0, 0);

        // Details
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Applicant Details:", 20, 70);
        doc.setFont("helvetica", "normal");
        doc.text(`Name: ${studentDetails.fullName || 'N/A'}`, 20, 80);
        doc.text(`Institution: Fr. Conceicao Rodrigues College of Engineering`, 20, 90);

        doc.text(`Email: ${studentDetails.email || 'N/A'}`, 20, 100);
        doc.text(`Phone: +91 ${studentDetails.phone || 'N/A'}`, 20, 110);

        let yearStr = studentDetails.year === '2' ? 'SE' : studentDetails.year === '3' ? 'TE' : studentDetails.year === '4' ? 'BE' : studentDetails.year || 'N/A';
        doc.text(`Class/Branch: ${yearStr} - ${studentDetails.branch?.toUpperCase() || 'N/A'} (Div: ${studentDetails.division || 'N/A'}, Roll: ${studentDetails.rollNo || 'N/A'})`, 20, 120);

        // Use the existing token logic or generic one
        const refToken = document.getElementById("refToken")?.innerText || `TXC2026-${Math.floor(Math.random() * 90000) + 10000}`;
        doc.text(`Reference Token: ${refToken}`, 20, 130);

        // Selected Roles
        doc.setFont("helvetica", "bold");
        doc.text(`Selected Roles (${selectedPositions.length}):`, 20, 150);

        doc.setFont("helvetica", "normal");
        let yPos = 160;

        selectedPositions.forEach((id) => {
            let selectedComp = null;
            let selectedPos = null;
            companies.forEach(c => {
                const pos = c.positions.find(p => p.id === id);
                if (pos) {
                    selectedComp = c;
                    selectedPos = pos;
                }
            });
            if (selectedComp && selectedPos) {
                // Break text if it's too long
                const text = `• ${selectedPos.title} at ${selectedComp.name}`;
                const splitText = doc.splitTextToSize(text, 160);
                doc.text(splitText, 25, yPos);
                yPos += (10 * splitText.length);
            }
        });

        // Footer
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(100, 100, 100);
        doc.text("Please keep this pass for your records. See you at the Expo!", 105, 280, { align: "center" });

        doc.save("TEDxCRCE_Internship_Pass.pdf");
    };

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
                                                if (pos) {
                                                    selectedComp = c;
                                                    selectedPos = pos;
                                                }
                                            });
                                            if (!selectedComp || !selectedPos) return null;

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
                                    <button className="flex items-center gap-1 bg-transparent/10 hover:bg-transparent/20 px-3 py-1.5 rounded text-xs font-sans font-bold transition-all active:scale-95" onClick={() => { }}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        <span>Copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="w-full flex flex-col gap-4 mt-8">
                            {/* WhatsApp Community Button */}
                            <a href="https://chat.whatsapp.com/JKkGj3cE7SmLUtvwP5tZOZ" target="_blank" rel="noreferrer" className="w-full inline-flex flex-col items-center justify-center gap-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-xl font-sans shadow-lg shadow-[#25D366]/20 transition-all duration-150">
                                <div className="flex items-center gap-2 font-bold text-base">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                                    Join Community
                                </div>
                                <span className="text-[11px] font-medium opacity-90 text-white/90 text-center">For schedule details & latest updates</span>
                            </a>

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button onClick={handleDownloadPDF} className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-border-hairline hover:border-primary/50 text-white py-3 px-4 rounded-xl font-sans font-semibold text-sm transition-all duration-150">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    <span>Download Pass (PDF)</span>
                                </button>
                                <button className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 px-4 rounded-xl font-sans font-semibold text-sm shadow-lg shadow-primary/20 transition-all duration-150" onClick={() => { clearRegistration(); navigate('/'); }}>
                                    <span>Back to Homepage</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
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