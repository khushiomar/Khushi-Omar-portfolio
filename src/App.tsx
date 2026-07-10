import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import EducationAndCerts from './components/EducationAndCerts';
import ContactForm from './components/ContactForm';
import { ChevronUp, Linkedin, Mail, Heart } from 'lucide-react';
import { resumeData } from './data/resume';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('summary');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const { personal } = resumeData;

  useEffect(() => {
    // Dynamic Active Section Tracker on Scroll using IntersectionObserver
    const sections = ['summary', 'skills', 'experience', 'projects', 'education', 'contact'];
    
    const handleScroll = () => {
      // Show scroll-to-top button
      setShowScrollTop(window.scrollY > 500);

      // Simple viewport checking fallback for active section
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1A1A1A] font-sans selection:bg-[#5A5A40]/10 selection:text-[#1A1A1A]">
      
      {/* Navbar & Hero Section */}
      <Header activeSection={activeSection} />

      {/* Stats Summary Panel */}
      <Stats />

      {/* Main Sections */}
      <main className="relative">
        {/* Subtle decorative grid lines across the background layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,26,26,0.02)_1px,transparent_1px)] bg-[size:100%_4rem] pointer-events-none" />

        {/* Skills Competency Catalog */}
        <Skills />

        {/* Professional Path / Internship */}
        <Experience />

        {/* Case Studies / Projects */}
        <ProjectsSection />

        {/* Credentials & Certifications */}
        <EducationAndCerts />

        {/* Connect & Contact Forms */}
        <ContactForm />
      </main>

      {/* Custom Global Footer */}
      <footer className="bg-[#FCFAF7] border-t border-[#1A1A1A]/10 py-12 text-[#1A1A1A]/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo and Name block */}
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/15 flex items-center justify-center">
                <span className="font-mono font-bold text-[#1A1A1A] text-xs">KO</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-[#1A1A1A]">{personal.name}</span>
                <span className="mx-2 text-[#1A1A1A]/20">|</span>
                <span className="font-mono text-[10px]">Data Portfolio</span>
              </div>
            </div>

            {/* Sub navigation links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#1A1A1A]/70 font-mono text-[10px] uppercase tracking-wider">
              <a href="#summary" className="hover:text-[#5A5A40] transition-colors">Summary</a>
              <a href="#skills" className="hover:text-[#5A5A40] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#5A5A40] transition-colors">Projects</a>
              <a href="#education" className="hover:text-[#5A5A40] transition-colors">Education</a>
              <a href="#contact" className="hover:text-[#5A5A40] transition-colors">Contact</a>
            </div>

            {/* Quick social shortcuts */}
            <div className="flex items-center space-x-4">
              <a 
                id="footer-mail"
                href={`mailto:${personal.email}`}
                className="h-8 w-8 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#5A5A40] hover:border-[#1A1A1A]/35 transition-colors"
                title="Email Me"
              >
                <Mail size={14} />
              </a>
              <a 
                id="footer-linkedin"
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#5A5A40] hover:border-[#1A1A1A]/35 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={14} />
              </a>
            </div>

          </div>

          <div className="border-t border-[#1A1A1A]/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#1A1A1A]/40 font-mono text-[10px]">
            <p>© {new Date().getFullYear()} Khushi Omar. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Made with dedication for high-precision business intelligence</span>
              <Heart size={10} className="text-[#5A5A40]/60 fill-[#5A5A40]/10" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-2.5 bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-[#FCFAF7] border border-[#1A1A1A] rounded-none shadow-md cursor-pointer hover:scale-[1.05] active:scale-95 transition-all z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
          title="Scroll to Top"
        >
          <ChevronUp size={18} />
        </button>
      )}

    </div>
  );
}
