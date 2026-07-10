import React, { useState } from 'react';
import { resumeData, Project } from '../data/resume';
import { Terminal, FileSpreadsheet, Eye, ChevronRight, Play, RefreshCw, CheckCircle, Database, LayoutDashboard, Sparkles, Filter } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = resumeData;
  const [activeProject, setActiveProject] = useState<string>(projects[0].id);
  
  // States for Project 1 (E-commerce CSV) Interactive Simulator
  const [csvState, setCsvState] = useState<'raw' | 'cleaning' | 'cleaned'>('raw');
  
  // States for Project 2 (Music Store SQL) Interactive Simulator
  const [selectedQueryId, setSelectedQueryId] = useState<string>('q1');
  const [sqlRunning, setSqlRunning] = useState<boolean>(false);

  const handleRunSQL = () => {
    setSqlRunning(true);
    setTimeout(() => {
      setSqlRunning(false);
    }, 600);
  };

  const handleRunCleaner = () => {
    setCsvState('cleaning');
    setTimeout(() => {
      setCsvState('cleaned');
    }, 1200);
  };

  const handleResetCleaner = () => {
    setCsvState('raw');
  };

  // Find active project object
  const currentProjectObj = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-20 bg-[#FCFAF7] border-b border-[#1A1A1A]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Practical Application</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
            Featured Analytics Projects
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light italic leading-relaxed">
            Interactive case studies demonstrating exploratory data cleaning pipelines and multi-table SQL query optimizations.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Side Menu / Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono text-[#1A1A1A]/50 uppercase tracking-widest block mb-2 px-1">Selected Portfolios</span>
            {projects.map((project) => {
              const isActive = project.id === activeProject;
              return (
                <button
                  key={project.id}
                  id={`project-tab-${project.id}`}
                  onClick={() => {
                    setActiveProject(project.id);
                    // Reset simulator states when switching projects
                    if (project.id === 'ecommerce-cataloging') setCsvState('raw');
                    if (project.id === 'music-store-sql') setSelectedQueryId('q1');
                  }}
                  className={`w-full text-left p-5 rounded-none border transition-all cursor-pointer block relative overflow-hidden group ${
                    isActive
                      ? 'bg-transparent border-[#1A1A1A] shadow-none'
                      : 'bg-transparent border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  {/* Active status indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A1A1A]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono tracking-wider text-[#1A1A1A] bg-[#1A1A1A]/5 px-2 py-0.5 rounded-none border border-[#1A1A1A]/15 uppercase">
                      {project.category.toUpperCase()} PROJECT
                    </span>
                    <div className="text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                      {project.category === 'sql' ? <Terminal size={14} /> : <FileSpreadsheet size={14} />}
                    </div>
                  </div>

                  <h3 className={`font-serif text-base font-normal transition-colors ${
                    isActive ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60 group-hover:text-[#1A1A1A]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50 mt-1 font-light line-clamp-2">
                    {project.subtitle}
                  </p>
                </button>
              );
            })}

            {/* Quick Summary Note */}
            <div className="bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 rounded-none p-4 text-xs text-[#1A1A1A]/60 font-light space-y-2 mt-4">
              <p className="font-semibold text-[#1A1A1A]/80">🔍 Interactive Demonstrations</p>
              <p>Each case study features a live interactive widget on the right. You can simulate the technical data workflow directly inside this browser preview.</p>
            </div>
          </div>

          {/* Active Project Details & Live Simulator */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-transparent border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8">
              
              {/* Project Headers */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A1A1A]/10">
                <div>
                  <span className="text-xs font-mono text-[#5A5A40] uppercase tracking-widest">{currentProjectObj.subtitle}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mt-1">{currentProjectObj.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProjectObj.tools.map((tool, index) => (
                    <span key={index} className="px-2.5 py-1 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A]/70 rounded-none text-xs font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description & Achievements Bullets */}
              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A]/50 tracking-wider mb-2">Scope of Work</h4>
                  <p className="text-[#1A1A1A]/80 font-light leading-relaxed text-sm">
                    {currentProjectObj.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase text-[#1A1A1A]/50 tracking-wider mb-3">Key Project Milestones</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentProjectObj.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-[#1A1A1A]/80 text-sm leading-relaxed">
                        <span className="h-5 w-5 rounded-none bg-[#1A1A1A]/5 text-[#1A1A1A]/70 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono border border-[#1A1A1A]/10">
                          {idx + 1}
                        </span>
                        <span className="font-light">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ---------------- PROJECT 1 INTERACTIVE CONTAINER (CSV Cleaner) ---------------- */}
              {currentProjectObj.id === 'ecommerce-cataloging' && (
                <div className="mt-4 border-t border-[#1A1A1A]/10 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                        <Database className="text-[#5A5A40] h-4 w-4" />
                        <span>CSV Data Integrity & Audit Simulator</span>
                      </h4>
                      <p className="text-xs text-[#1A1A1A]/50 font-light mt-0.5">Explore how anomalous values are audited, validated, and normalized during my QA process.</p>
                    </div>
                    <div className="flex gap-2">
                      {csvState === 'raw' ? (
                        <button
                          id="btn-run-csv-cleaner"
                          onClick={handleRunCleaner}
                          className="px-3.5 py-1.5 bg-[#1A1A1A] text-[#FCFAF7] rounded-none text-xs font-mono uppercase tracking-wider hover:bg-[#1A1A1A]/90 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Play size={10} fill="currentColor" />
                          <span>Run QA Audit</span>
                        </button>
                      ) : csvState === 'cleaned' ? (
                        <button
                          id="btn-reset-csv-cleaner"
                          onClick={handleResetCleaner}
                          className="px-3.5 py-1.5 bg-transparent border border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-none text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <RefreshCw size={10} />
                          <span>Reset Database</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="px-3.5 py-1.5 bg-[#1A1A1A]/5 border border-[#1A1A1A]/15 text-[#1A1A1A]/70 rounded-none text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
                        >
                          <RefreshCw size={10} className="animate-spin" />
                          <span>Auditing Records...</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Simulator Screen */}
                  <div className="bg-transparent rounded-none border border-[#1A1A1A]/15 overflow-hidden text-xs">
                    {/* Simulator Header Tab Bar */}
                    <div className="px-4 py-2.5 bg-[#1A1A1A]/5 border-b border-[#1A1A1A]/10 flex items-center justify-between text-[#1A1A1A]/50 font-mono text-[10px]">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <span className="h-1.5 w-1.5 bg-[#1A1A1A]/20" />
                          <span className="h-1.5 w-1.5 bg-[#1A1A1A]/20" />
                          <span className="h-1.5 w-1.5 bg-[#1A1A1A]/20" />
                        </div>
                        <span className="text-[#1A1A1A]/70">catalog_qa_pipeline.csv</span>
                      </div>
                      <span className="text-[#5A5A40] font-bold uppercase tracking-wider font-mono">
                        {csvState === 'raw' ? '⚠️ 2 Inconsistencies Found' : csvState === 'cleaned' ? '✅ Status: Clean & Healthy' : '⚙️ Processing pipeline'}
                      </span>
                    </div>

                    {/* Table of Records */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#1A1A1A]/15 bg-[#1A1A1A]/5 text-[#1A1A1A]/60 font-mono font-medium">
                            <th className="p-3">SKU</th>
                            <th className="p-3">Product Name</th>
                            <th className="p-3 text-right">Price ($)</th>
                            <th className="p-3 text-right font-mono">Stock</th>
                            <th className="p-3">Img Filename</th>
                            <th className="p-3">Integrity Log</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1A1A1A]/10 font-mono text-[#1A1A1A]">
                          {(csvState === 'cleaned' ? currentProjectObj.interactiveData.cleaned : currentProjectObj.interactiveData.raw).map((row: any, idx: number) => {
                            const isAnomalous = row.status.includes('Error') || row.price.includes('*');
                            const isResolved = row.status.includes('Resolved');
                            return (
                              <tr 
                                key={idx} 
                                className={`transition-colors duration-500 ${
                                  csvState === 'cleaning' && isAnomalous ? 'bg-[#5A5A40]/10 animate-pulse' :
                                  isAnomalous ? 'bg-red-500/5' : 
                                  isResolved ? 'bg-emerald-500/5' : 'hover:bg-[#1A1A1A]/5'
                                }`}
                              >
                                <td className="p-3 text-[#1A1A1A] font-semibold">{row.sku}</td>
                                <td className="p-3 text-[#1A1A1A]/70">{row.name}</td>
                                <td className={`p-3 text-right font-semibold ${isAnomalous ? 'text-red-600' : isResolved ? 'text-[#5A5A40]' : 'text-[#1A1A1A]'}`}>
                                  {row.price}
                                </td>
                                <td className={`p-3 text-right ${row.stock.includes('-') ? 'text-red-600 font-bold' : 'text-[#1A1A1A]/70'}`}>
                                  {row.stock}
                                </td>
                                <td className="p-3 text-[#1A1A1A]/40">{row.img || '[empty]'}</td>
                                <td className="p-3">
                                  <span className={`inline-flex items-center space-x-1 text-[9px] px-1.5 py-0.5 rounded-none font-mono tracking-wider font-bold uppercase ${
                                    isAnomalous 
                                      ? 'bg-red-500/10 text-red-700 border border-red-500/20' 
                                      : isResolved 
                                      ? 'bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/20' 
                                      : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/50 border border-[#1A1A1A]/10'
                                  }`}>
                                    {isAnomalous && <span className="h-1 w-1 bg-red-600 shrink-0" />}
                                    {isResolved && <span className="h-1 w-1 bg-[#5A5A40] shrink-0" />}
                                    <span>{row.status}</span>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Pipeline Log Panel */}
                    <div className="bg-[#1A1A1A]/5 border-t border-[#1A1A1A]/15 p-3 flex items-center justify-between font-mono text-[10px] text-[#1A1A1A]/50">
                      <div>
                        {csvState === 'raw' && <span className="text-amber-700 font-semibold">⚠️ Audit recommendations: SKU-4832 & SKU-7731 have suspicious metrics. Click "Run QA Audit" above.</span>}
                        {csvState === 'cleaning' && <span className="text-[#5A5A40] animate-pulse">⚙️ Recalculating stock inventory thresholds and filtering outlier prices relative to segment median...</span>}
                        {csvState === 'cleaned' && <span className="text-[#5A5A40]">✅ Audit Successful. Corrected negative inventory thresholds and floating decimal positions.</span>}
                      </div>
                      <span className="shrink-0 text-[#1A1A1A]/40">6 Records total</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- PROJECT 2 INTERACTIVE CONTAINER (SQL Query Run) ---------------- */}
              {currentProjectObj.id === 'music-store-sql' && (
                <div className="mt-4 border-t border-[#1A1A1A]/10 pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                        <Terminal className="text-[#5A5A40] h-4 w-4" />
                        <span>Interactive SQL Database Console</span>
                      </h4>
                      <p className="text-xs text-[#1A1A1A]/50 font-light mt-0.5">Choose a pre-set business query targeting my 11-table Music Store database structure to run calculations and render charts.</p>
                    </div>

                    {/* Query Selector Tabs */}
                    <div className="flex flex-wrap gap-2">
                      {currentProjectObj.interactiveData.queries.map((q: any) => (
                        <button
                          key={q.id}
                          id={`btn-sql-q-${q.id}`}
                          onClick={() => {
                            setSelectedQueryId(q.id);
                            // Auto run query on select
                            setSqlRunning(true);
                            setTimeout(() => setSqlRunning(false), 500);
                          }}
                          className={`px-3 py-1.5 border rounded-none text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            selectedQueryId === q.id
                              ? 'bg-[#1A1A1A] text-[#FCFAF7] border-[#1A1A1A]'
                              : 'bg-transparent text-[#1A1A1A]/60 border-[#1A1A1A]/15 hover:border-[#1A1A1A]/35'
                          }`}
                        >
                          {q.title}
                        </button>
                      ))}
                    </div>

                    {/* SQL Editor Frame */}
                    <div className="bg-[#1A1A1A] rounded-none border border-[#1A1A1A] overflow-hidden text-xs">
                      {/* Editor Header */}
                      <div className="px-4 py-2 bg-[#FCFAF7]/5 border-b border-[#FCFAF7]/10 flex items-center justify-between text-[#FCFAF7]/50 font-mono text-[10px]">
                        <span>query_workbench.sql</span>
                        <button
                          id="btn-run-active-sql"
                          onClick={handleRunSQL}
                          disabled={sqlRunning}
                          className="px-2 py-0.5 bg-[#FCFAF7] text-[#1A1A1A] rounded-none font-bold font-mono text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Play size={10} fill="currentColor" />
                          <span>Run Query</span>
                        </button>
                      </div>

                      {/* SQL Code Editor Area */}
                      <div className="p-4 font-mono text-slate-300 bg-[#1A1A1A] overflow-x-auto min-h-[100px] leading-relaxed">
                        <pre className="text-emerald-400/90 font-mono">
                          {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.query}
                        </pre>
                      </div>

                      {/* Output Tab Panel */}
                      <div className="border-t border-[#FCFAF7]/10">
                        <div className="px-4 py-2 bg-[#FCFAF7]/5 border-b border-[#FCFAF7]/10 flex items-center justify-between font-mono text-[10px] text-[#FCFAF7]/40">
                          <span>Output Panel: Query Result</span>
                          <span>MySQL Workbench 8.0</span>
                        </div>

                        {sqlRunning ? (
                          <div className="p-8 text-center text-[#FCFAF7]/60 flex flex-col items-center justify-center gap-2 bg-[#1A1A1A]">
                            <RefreshCw size={20} className="animate-spin text-[#FCFAF7]" />
                            <span className="font-mono text-xs">Executing relational join query...</span>
                          </div>
                        ) : (
                          <div className="p-4 space-y-6 bg-[#FCFAF7] text-[#1A1A1A]">
                            {/* Result Table */}
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse text-[11px]">
                                <thead>
                                  <tr className="border-b border-[#1A1A1A]/15 text-[#1A1A1A]/70 font-mono font-medium">
                                    {Object.keys(currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.results[0]).map((key, i) => (
                                      <th key={i} className="pb-2 pr-3 capitalize font-mono text-[#1A1A1A]/50 font-semibold">{key.replace('_', ' ')}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1A1A1A]/10 font-mono text-[#1A1A1A]/90">
                                  {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.results.map((row: any, rowIdx: number) => (
                                    <tr key={rowIdx}>
                                      {Object.values(row).map((val: any, colIdx: number) => (
                                        <td key={colIdx} className="py-2 pr-3">{val}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            {/* Custom KPI Chart Mockup (Representing Excel dashboard outcome) */}
                            <div className="bg-[#1A1A1A]/5 rounded-none p-4 border border-[#1A1A1A]/10">
                              <h5 className="text-[11px] font-semibold text-[#1A1A1A]/80 mb-3 font-mono flex items-center gap-1.5">
                                <LayoutDashboard size={12} className="text-[#5A5A40]" />
                                <span className="uppercase tracking-wider text-[10px]">Excel Dashboard: {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.title}</span>
                              </h5>

                              {/* SVG Bar Chart */}
                              {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.chartType === 'bar' && (
                                <div className="space-y-3 font-mono">
                                  {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.chartData.map((data: any, idx: number) => {
                                    // Normalize width percentage relative to max value (first value is max)
                                    const maxVal = currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.chartData[0].value;
                                    const percentWidth = (data.value / maxVal) * 100;
                                    return (
                                      <div key={idx} className="space-y-1">
                                        <div className="flex justify-between text-[10px] text-[#1A1A1A]/60">
                                          <span>{data.label}</span>
                                          <span className="font-semibold text-[#1A1A1A]">${data.value.toFixed(2)}</span>
                                        </div>
                                        <div className="h-2 w-full bg-[#1A1A1A]/5 rounded-none overflow-hidden border border-[#1A1A1A]/15">
                                          <div 
                                            className="h-full bg-[#5A5A40] rounded-none transition-all duration-1000" 
                                            style={{ width: `${percentWidth}%` }}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {/* SVG Pie/Distribution Ring */}
                              {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.chartType === 'pie' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                  {/* Center Ring Display */}
                                  <div className="flex justify-center py-2">
                                    <svg className="w-28 h-28 transform -rotate-90">
                                      {/* Prague 29% */}
                                      <circle cx="56" cy="56" r="40" fill="transparent" stroke="#1a1a1a10" strokeWidth="12" />
                                      {/* Standard circles overlaying */}
                                      <circle 
                                        cx="56" cy="56" r="40" 
                                        fill="transparent" 
                                        stroke="#1A1A1A" 
                                        strokeWidth="12" 
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.29)}`}
                                        className="transition-all duration-1000"
                                      />
                                      {/* Mountain View 19% */}
                                      <circle 
                                        cx="56" cy="56" r="40" 
                                        fill="transparent" 
                                        stroke="#5A5A40" 
                                        strokeWidth="12" 
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.19)}`}
                                        transform="rotate(104.4 56 56)"
                                        className="transition-all duration-1000"
                                      />
                                      {/* London 18% */}
                                      <circle 
                                        cx="56" cy="56" r="40" 
                                        fill="transparent" 
                                        stroke="#1a1a1a60" 
                                        strokeWidth="12" 
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.18)}`}
                                        transform="rotate(172.8 56 56)"
                                        className="transition-all duration-1000"
                                      />
                                    </svg>
                                  </div>

                                  {/* Color Legend & Specific Figures */}
                                  <div className="space-y-2 font-mono text-[10px]">
                                    {currentProjectObj.interactiveData.queries.find((q: any) => q.id === selectedQueryId)?.chartData.map((data: any, idx: number) => {
                                      const colors = ['bg-[#1A1A1A]', 'bg-[#5A5A40]', 'bg-[#1A1A1A]/50', 'bg-[#1A1A1A]/30', 'bg-[#1A1A1A]/10'];
                                      return (
                                        <div key={idx} className="flex items-center justify-between">
                                          <div className="flex items-center space-x-1.5">
                                            <span className={`h-2.5 w-2.5 rounded-none ${colors[idx % colors.length]}`} />
                                            <span className="text-[#1A1A1A]/60">{data.label}</span>
                                          </div>
                                          <span className="font-semibold text-[#1A1A1A]">${data.value.toFixed(2)} ({data.percentage}%)</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
