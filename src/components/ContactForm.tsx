import React, { useState, useEffect } from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, RefreshCw, MessageSquare, ArrowRight } from 'lucide-react';

interface SavedMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactForm() {
  const { personal } = resumeData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([]);

  useEffect(() => {
    // Load sent messages from localStorage
    try {
      const stored = localStorage.getItem('khushi_portfolio_messages');
      if (stored) {
        setSavedMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load local messages", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate real server delivery delay
    setTimeout(() => {
      const newMessage: SavedMessage = {
        ...formData,
        timestamp: new Date().toLocaleString(),
      };
      
      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      try {
        localStorage.setItem('khushi_portfolio_messages', JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save message to local state", e);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#FCFAF7] border-t border-[#1A1A1A]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono text-[#1A1A1A]/50 tracking-widest uppercase block">Inquiries</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light italic leading-relaxed">
            I am currently seeking Data Analyst or Business Analyst opportunities. Get in touch to discuss openings or analytical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-4">Direct Channels</h3>
            
            <a 
              id="link-mail-contact"
              href={`mailto:${personal.email}`}
              className="flex items-start gap-4 p-5 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 rounded-none transition-all duration-300 group cursor-pointer block"
            >
              <div className="h-10 w-10 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest block">Email Address</span>
                <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors mt-1 block">
                  {personal.email}
                </span>
                <span className="text-xs text-[#1A1A1A]/50 font-light mt-1 block font-serif italic">Response within 24 hours</span>
              </div>
            </a>

            <a 
              id="link-phone-contact"
              href={`tel:${personal.phone}`}
              className="flex items-start gap-4 p-5 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 rounded-none transition-all duration-300 group cursor-pointer block"
            >
              <div className="h-10 w-10 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest block">Phone Number</span>
                <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors mt-1 block">
                  +91 {personal.phone}
                </span>
                <span className="text-xs text-[#1A1A1A]/50 font-light mt-1 block font-serif italic">Mon-Sat, 9:00 AM - 6:00 PM IST</span>
              </div>
            </a>

            <a 
              id="link-linkedin-contact"
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 p-5 bg-transparent border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20 hover:bg-[#1A1A1A]/5 rounded-none transition-all duration-300 group cursor-pointer block"
            >
              <div className="h-10 w-10 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center shrink-0">
                <Linkedin size={18} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest block">LinkedIn Business Networking</span>
                <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] transition-colors mt-1 block">
                  {personal.linkedin}
                </span>
                <span className="text-xs text-[#1A1A1A]/50 font-light mt-1 block font-serif italic">Connect for business inquiries</span>
              </div>
            </a>

            <div 
              className="flex items-start gap-4 p-5 bg-transparent border border-[#1A1A1A]/10 rounded-none"
            >
              <div className="h-10 w-10 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#1A1A1A] flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest block">Location base</span>
                <span className="text-sm font-semibold text-[#1A1A1A] mt-1 block">
                  {personal.location}
                </span>
                <span className="text-xs text-[#1A1A1A]/50 font-light mt-1 block font-serif italic">Open to remote & hybrid relocation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-7">
            <div className="bg-transparent border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 relative overflow-hidden">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-6">Send a Message Portal</h3>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="h-12 w-12 rounded-none bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 text-[#5A5A40] flex items-center justify-center mx-auto">
                    <CheckCircle size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-semibold text-[#1A1A1A]">Message Delivered Successfully!</h4>
                    <p className="text-xs text-[#1A1A1A]/50 max-w-sm mx-auto font-serif italic">
                      Thank you for reaching out. The simulated message has been successfully saved to local storage for demonstration.
                    </p>
                  </div>
                  <button
                    id="btn-send-another-message"
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-transparent border border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 text-xs font-mono uppercase tracking-wider rounded-none transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-portal-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border border-[#1A1A1A]/15 focus:border-[#1A1A1A] rounded-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="johndoe@company.com"
                        className="w-full bg-transparent border border-[#1A1A1A]/15 focus:border-[#1A1A1A] rounded-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full bg-transparent border border-[#1A1A1A]/15 focus:border-[#1A1A1A] rounded-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-wider">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Type your message details here..."
                      className="w-full bg-transparent border border-[#1A1A1A]/15 focus:border-[#1A1A1A] rounded-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-message"
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full py-3 bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-[#FCFAF7] font-mono text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={14} className="animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Saved Local Outbox (Interactive verification of local state) */}
              {savedMessages.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#1A1A1A]/15 space-y-3">
                  <h4 className="text-[10px] font-mono text-[#1A1A1A]/50 uppercase tracking-widest flex items-center gap-1.5">
                    <MessageSquare size={12} className="text-[#5A5A40]" />
                    <span>Your Sent Message Outbox ({savedMessages.length})</span>
                  </h4>
                  <div className="max-h-36 overflow-y-auto space-y-2.5 pr-2">
                    {savedMessages.map((msg, i) => (
                      <div key={i} className="bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 rounded-none p-3 text-xs space-y-1.5 relative overflow-hidden">
                        <div className="flex justify-between items-center text-[9px] font-mono text-[#1A1A1A]/50">
                          <span className="text-[#1A1A1A]/70 font-semibold">{msg.name} ({msg.email})</span>
                          <span>{msg.timestamp}</span>
                        </div>
                        <p className="text-[#1A1A1A] font-semibold font-serif">{msg.subject || 'No Subject'}</p>
                        <p className="text-[#1A1A1A]/70 leading-normal font-light italic">"{msg.message}"</p>
                      </div>
                    ))}
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
