import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import {
  Mail,
  Copy,
  Check,
  Send,
  Download,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = personalInfo.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim input fields to prevent empty whitespace submissions
    const cleanName = formState.name.trim();
    const cleanEmail = formState.email.trim();
    const cleanSubject = formState.subject.trim();
    const cleanMessage = formState.message.trim();

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return;
    }

    const mailtoUrl = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodeURIComponent(
      cleanSubject || `Inquiry from ${cleanName}`
    )}&body=${encodeURIComponent(
      `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`
    )}`;

    window.open(mailtoUrl, '_self');
    setSent(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Section Heading */}
        <SectionHeading
          number="06"
          category="CONTACT"
          title="Get In Touch"
          description="Open for high-impact AI/ML engineering roles, frontier research collaborations, and full-stack software development. Feel free to send a message or connect directly."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-crimson-400 uppercase tracking-wider mb-2">
                <Mail className="w-4 h-4 text-crimson-accent" />
                <span>Direct Email</span>
              </div>

              <div className="text-base sm:text-lg font-semibold text-white mb-2 break-all">
                {personalInfo.email}
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Response time is typically within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-700 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>
                    {copied
                      ? 'Copied to Clipboard'
                      : copyError
                      ? 'Copy Failed'
                      : 'Copy Address'}
                  </span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-crimson-accent hover:bg-crimson-bright text-white text-xs font-semibold rounded-lg transition-all shadow-md"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="p-6 sm:p-8 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-2">
                <Download className="w-4 h-4 text-crimson-accent" />
                <span>Curriculum Vitae</span>
              </div>

              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                Detailed experience, research publications, awards, and technical background.
              </p>

              <a
                href={personalInfo.resumeUrl}
                download="Pratyush_AI_ML_Engineer_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-semibold border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all"
              >
                <Download className="w-4 h-4 text-crimson-accent" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Connect Elsewhere
              </div>
              <div className="grid grid-cols-2 gap-2">
                {personalInfo.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between text-xs rounded-lg transition-colors group"
                  >
                    <span>{soc.platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-crimson-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-xl backdrop-blur-sm">
            
            <div className="pb-4 mb-6 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white">Send a Message</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill out the form below to initiate an email directly from your mail app.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-zinc-300 font-medium block">
                    Your Name <span className="text-crimson-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-zinc-300 font-medium block">
                    Your Email <span className="text-crimson-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-zinc-300 font-medium block">
                  Subject <span className="text-crimson-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-zinc-300 font-medium block">
                  Message <span className="text-crimson-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-crimson-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-crimson-accent hover:bg-crimson-bright text-white text-xs font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

              {sent && (
                <div className="p-3 bg-zinc-800/80 border border-emerald-500/40 text-emerald-400 text-center rounded-lg text-xs font-medium">
                  Opening your default mail client...
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

