import React from 'react';
import { resumeData } from '../data/resume';
import { Database, Terminal, FileSpreadsheet, TrendingUp } from 'lucide-react';

export default function Stats() {
  const { stats } = resumeData;

  const icons = [
    <Database className="h-4 w-4 text-[#5A5A40]" />,
    <Terminal className="h-4 w-4 text-[#5A5A40]" />,
    <FileSpreadsheet className="h-4 w-4 text-[#5A5A40]" />,
    <TrendingUp className="h-4 w-4 text-[#5A5A40]" />
  ];

  return (
    <section id="summary" className="py-16 bg-[#FCFAF7] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic summary text and stats grid in one elegant section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-1 space-y-3">
            <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Professional Summary</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight leading-tight">
              Transforming raw columns into strategic decisions
            </h2>
            <div className="h-[1px] w-16 bg-[#1A1A1A]" />
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#1A1A1A]/70 font-serif italic text-base sm:text-lg leading-relaxed">
              {resumeData.summary}
            </p>
          </div>
        </div>

        {/* Stats Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-transparent hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 p-5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-[#1A1A1A]/50 group-hover:text-[#1A1A1A]/80 transition-colors uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="h-7 w-7 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center">
                  {icons[idx % icons.length]}
                </div>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors block">
                  {stat.value}
                </span>
                <p className="text-xs text-[#1A1A1A]/60 mt-1 leading-normal font-light">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
