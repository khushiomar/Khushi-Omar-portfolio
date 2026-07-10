import React from 'react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function EducationAndCerts() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-20 bg-[#FCFAF7] border-b border-[#1A1A1A]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Credentials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light italic leading-relaxed">
            My academic foundation and professional credentials aligning analytical capability with business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education Block */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] flex items-center space-x-2.5 mb-2">
              <div className="p-2 bg-[#1A1A1A]/5 text-[#1A1A1A] rounded-none border border-[#1A1A1A]/10">
                <GraduationCap size={18} />
              </div>
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="bg-transparent hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 rounded-none p-6 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="font-serif text-base font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center space-x-1.5 text-xs text-[#1A1A1A]/50 font-mono self-start sm:self-center">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </span>
                  </div>

                  <p className="text-sm text-[#1A1A1A]/70 font-medium">{edu.institution}</p>
                  
                  {edu.details && (
                    <p className="text-xs text-[#1A1A1A]/60 mt-3 font-light leading-relaxed border-t border-[#1A1A1A]/10 pt-3 italic">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] flex items-center space-x-2.5 mb-2">
              <div className="p-2 bg-[#1A1A1A]/5 text-[#1A1A1A] rounded-none border border-[#1A1A1A]/10">
                <Award size={18} />
              </div>
              <span>Achievements & Certifications</span>
            </h3>

            <div className="bg-transparent border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 space-y-5 relative overflow-hidden">
              <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed mb-4 italic">
                Verified industry-recognized credentials verifying specialized capability in data systems, querying, metrics exploration, and stakeholder interaction.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 p-4 rounded-none transition-all duration-350 flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-7 w-7 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#5A5A40] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors">
                        {cert}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-[#1A1A1A]/50 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-2 py-0.5 rounded-none tracking-wider font-bold">
                      VERIFIED
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary note */}
              <div className="border-t border-[#1A1A1A]/10 pt-4 mt-6 text-xs text-[#1A1A1A]/60 font-light leading-normal flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-none bg-[#5A5A40] mt-1.5 shrink-0" />
                <span>Competencies aligned with international educational and technical standards, focusing on high-accuracy metrics and analytical storytelling.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
