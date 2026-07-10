import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Briefcase, Award, GraduationCap, ChevronRight, Menu, X } from 'lucide-react';
import { resumeData } from '../data/resume';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = resumeData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="h-8 w-8 rounded-none bg-[#1A1A1A] flex items-center justify-center">
                <span className="font-serif italic font-semibold text-[#FCFAF7] text-base">K</span>
              </div>
              <div>
                <span className="font-serif font-bold text-[#1A1A1A] text-lg tracking-tight">
                  {personal.name}
                </span>
                <span className="hidden sm:inline-block ml-3 text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-widest px-2 py-0.5 bg-[#1A1A1A]/5 rounded-sm">
                  Data Analyst
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A]'
                      : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:border-b-2 hover:border-[#1A1A1A]/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="cta-nav-contact"
                onClick={() => scrollToSection('contact')}
                className="ml-4 px-4 py-2 bg-[#1A1A1A] text-[#FCFAF7] text-xs font-mono uppercase tracking-widest hover:bg-[#1A1A1A]/85 transition-all cursor-pointer"
              >
                Connect
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FCFAF7] border-b border-[#1A1A1A]/10 px-4 pt-2 pb-4 space-y-1 shadow-md animate-in fade-in duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-btn-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-xs font-mono uppercase tracking-widest ${
                  activeSection === item.id
                    ? 'text-[#1A1A1A] font-bold bg-[#1A1A1A]/5'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-cta-contact"
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center px-4 py-2 mt-4 bg-[#1A1A1A] text-[#FCFAF7] text-xs font-mono uppercase tracking-widest hover:bg-[#1A1A1A]/90 transition-all"
            >
              Connect
            </button>
          </div>
        )}
      </nav>

      {/* Hero Header Section */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#1A1A1A]/10 bg-[#FCFAF7]">
        {/* Subtle decorative grid lines across background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a05_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a05_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            
            {/* Left Column: Title & Bio */}
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 rounded-none text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/80">
                <span className="flex h-1.5 w-1.5 bg-[#5A5A40]" />
                <span>Immediate Availability — Data Analyst Role Focus</span>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-[#1A1A1A]/50 block">DR. BHIMRAO AMBEDKAR UNIVERSITY, AGRA</span>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7.5xl font-normal leading-[1.05] text-[#1A1A1A] tracking-tight">
                  Hi, I'm <span className="italic font-light text-[#5A5A40] block sm:inline">{personal.name}</span>
                </h1>
                <p className="font-serif text-2xl sm:text-3xl text-[#1A1A1A]/80 italic font-light tracking-tight">
                  {personal.role}
                </p>
              </div>

              <p className="text-[#1A1A1A]/70 text-base sm:text-lg max-w-2xl font-light leading-relaxed italic">
                “Detail-oriented and commercially minded. I specialize in exploratory data analysis, large dataset cleaning, and SQL database querying. I build dashboards that translate raw data points into clear operational decisions.”
              </p>

              {/* Direct Quick Contact Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  id="contact-badge-email"
                  href={`mailto:${personal.email}`} 
                  className="flex items-center space-x-2 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 px-3 py-1.5 text-xs text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors"
                >
                  <Mail size={13} className="text-[#5A5A40]" />
                  <span className="font-mono">{personal.email}</span>
                </a>
                <a 
                  id="contact-badge-phone"
                  href={`tel:${personal.phone}`} 
                  className="flex items-center space-x-2 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 px-3 py-1.5 text-xs text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors"
                >
                  <Phone size={13} className="text-[#5A5A40]" />
                  <span className="font-mono">+91 {personal.phone}</span>
                </a>
                <div 
                  className="flex items-center space-x-2 bg-transparent border border-[#1A1A1A]/5 px-3 py-1.5 text-xs text-[#1A1A1A]/70"
                >
                  <MapPin size={13} className="text-[#5A5A40]" />
                  <span className="font-mono">{personal.location}</span>
                </div>
                <a 
                  id="contact-badge-linkedin"
                  href={personal.linkedinUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-2 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 px-3 py-1.5 text-xs text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors"
                >
                  <Linkedin size={13} className="text-[#5A5A40]" />
                  <span className="font-mono">linkedin.com/in/khushi-omar</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="hero-view-projects"
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3.5 bg-[#1A1A1A] text-[#FCFAF7] font-mono text-xs uppercase tracking-widest hover:bg-[#1A1A1A]/90 transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Selected Case Studies</span>
                  <ChevronRight size={14} />
                </button>
                <button
                  id="hero-contact-me"
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3.5 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/5 font-mono text-xs uppercase tracking-widest transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Connect Portal</span>
                </button>
              </div>
            </div>

            {/* Right Column: Profile Summary Panel (The Snapshot card styled in elegant print style) */}
            <div className="w-full lg:w-80 border border-[#1A1A1A]/10 bg-transparent p-6 sm:p-8 relative">
              {/* Subtle top decorative ribbon */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-[0.2em] block">Data Briefing</span>
                  <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mt-1">Focus & Expertise</h3>
                </div>
                <Award size={18} className="text-[#5A5A40]" />
              </div>

              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-[#1A1A1A]">Data Exploration (EDA)</span>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/40">01</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                    Meticulous cleaning of business datasets, outlier detection, and pattern aggregation.
                  </p>
                </div>

                <div className="h-[1px] bg-[#1A1A1A]/10" />

                <div className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-[#1A1A1A]">Structured SQL Joins</span>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/40">02</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                    Multi-table querying with subqueries, aggregate grouping, and robust dataset slicing.
                  </p>
                </div>

                <div className="h-[1px] bg-[#1A1A1A]/10" />

                <div className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-[#1A1A1A]">KPI Dashboard Designs</span>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/40">03</span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                    Transforming messy metrics into clean corporate layouts with pivot tables and charts.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#1A1A1A]/15 mt-6 pt-4 flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]/50">
                <span className="flex items-center gap-1">
                  <span className="h-1 w-1 bg-[#5A5A40]" />
                  EXCEL EXPERT
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1 w-1 bg-[#5A5A40]" />
                  SQL PROFICIENT
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
