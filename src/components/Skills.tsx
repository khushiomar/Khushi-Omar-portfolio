import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import { FileSpreadsheet, Database, Cpu, Check, HelpCircle } from 'lucide-react';

export default function Skills() {
  const { skills } = resumeData;
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [
    <FileSpreadsheet className="h-4 w-4 text-[#5A5A40]" />,
    <Database className="h-4 w-4 text-[#5A5A40]" />,
    <Cpu className="h-4 w-4 text-[#5A5A40]" />
  ];

  return (
    <section id="skills" className="py-20 bg-[#FCFAF7] border-b border-[#1A1A1A]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Competencies</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
            Technical Arsenal & Analytical Skillset
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light italic leading-relaxed">
            My structured expertise spans exploratory analytics, query orchestration, database mapping, and commercial translation.
          </p>
        </div>

        {/* Tab Selection (Desktop) & Accordion Buttons (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0 scrollbar-none border-b border-[#1A1A1A]/10 lg:border-none">
            {skills.map((category, idx) => (
              <button
                key={idx}
                id={`skill-cat-${idx}`}
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-none text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer text-left w-full border ${
                  selectedCategory === idx
                    ? 'bg-[#1A1A1A] text-[#FCFAF7] border-[#1A1A1A]'
                    : 'text-[#1A1A1A]/60 border-[#1A1A1A]/10 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                }`}
              >
                <div className={`p-1.5 rounded-none transition-colors ${
                  selectedCategory === idx ? 'bg-[#FCFAF7]/20 text-[#FCFAF7]' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/60'
                }`}>
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <span>{category.category}</span>
              </button>
            ))}
          </div>

          {/* Active Category Skills Grid */}
          <div className="lg:col-span-3">
            <div className="bg-transparent border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 relative">
              <h3 className="font-serif text-xl font-normal text-[#1A1A1A] mb-6 flex items-center space-x-2">
                <span className="text-[#5A5A40]">/</span>
                <span>{skills[selectedCategory].category}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills[selectedCategory].items.map((skill, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-transparent hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 p-4 rounded-none transition-all duration-300 flex items-start space-x-3 group"
                  >
                    <div className="h-5 w-5 rounded-none bg-[#5A5A40]/10 text-[#5A5A40] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded-none border border-[#1A1A1A]/20 text-[#1A1A1A]/70 uppercase">
                          {skill.level}
                        </span>
                      </div>
                      {skill.desc && (
                        <p className="text-xs text-[#1A1A1A]/60 font-light leading-relaxed">
                          {skill.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical confidence tag footer */}
              <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-[#1A1A1A]/50 gap-4">
                <p className="flex items-center space-x-1.5">
                  <HelpCircle size={12} className="text-[#1A1A1A]/40" />
                  <span>Focused academic mastery & robust hands-on project application.</span>
                </p>
                <div className="flex space-x-4">
                  <span className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-[#1A1A1A]" />
                    <span>EXPERT</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-[#5A5A40]" />
                    <span>ADVANCED</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-[#1A1A1A]/40" />
                    <span>INTERMEDIATE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
