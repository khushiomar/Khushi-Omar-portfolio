import React from 'react';
import { Briefcase, Calendar, CheckSquare, Building } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Experience() {
  const { internships } = resumeData;

  return (
    <section id="experience" className="py-20 bg-[#FCFAF7] border-b border-[#1A1A1A]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Professional Path</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
            Internship Experience
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light italic leading-relaxed">
            Hands-on professional immersion translating requirements, structuring tracking tables, and communicating metric updates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {internships.map((intern, idx) => (
            <div key={idx} className="relative group pl-8 sm:pl-10 pb-8 last:pb-0">
              {/* Timeline bar line */}
              <div className="absolute top-1 bottom-0 left-[15px] w-0.5 bg-[#1A1A1A]/10 group-last:hidden" />

              {/* Timeline Node dot */}
              <div className="absolute top-1 left-0 h-8 w-8 rounded-none bg-[#FCFAF7] border border-[#1A1A1A] flex items-center justify-center transition-all">
                <Briefcase size={12} className="text-[#1A1A1A]" />
              </div>

              {/* Main Internship Card */}
              <div className="bg-transparent border border-[#1A1A1A]/10 rounded-none p-6 transition-all duration-300 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] tracking-tight flex items-center gap-2">
                      <span>{intern.role}</span>
                    </h3>
                    <div className="flex items-center space-x-2 text-[#1A1A1A]/60 mt-1 text-xs font-mono">
                      <Building size={12} className="text-[#1A1A1A]/40 shrink-0" />
                      <span className="uppercase tracking-wider">{intern.company}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 text-[10px] text-[#1A1A1A]/80 font-mono px-2.5 py-1 border border-[#1A1A1A]/20 bg-transparent rounded-none self-start sm:self-center uppercase tracking-wider">
                    <Calendar size={10} />
                    <span>{intern.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mt-5">
                  {intern.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start space-x-3 text-[#1A1A1A]/80 text-sm leading-relaxed">
                      <div className="h-5 w-5 rounded-none bg-[#FCFAF7] border border-[#1A1A1A]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#5A5A40]">
                        <CheckSquare size={10} />
                      </div>
                      <span className="font-light">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
