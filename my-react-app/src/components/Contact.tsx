import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import resumePDF from '@/assets/sarah-resume.pdf';

const SERVICE_ID  = 'service_zbhi0m8';
const TEMPLATE_ID = 'template_e597mwl';
const PUBLIC_KEY  = 'gZwxPHGOB0N-DauvR';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[var(--color-bg)] text-[var(--color-text-primary)] py-24 transition-colors duration-200">
      <div className="absolute top-0 right-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.9] tracking-tight mb-12">
          CONTACT.
        </h2>

        <div className="w-full h-[3px] bg-[hsl(0,75%,45%)] mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-text-primary)]">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[hsl(15,90%,55%)]" />
                <span className="text-[var(--color-text-muted)]">angwensarahsunday@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[hsl(15,90%,55%)]" />
                <span className="text-[var(--color-text-muted)]">+256785093196</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[hsl(15,90%,55%)]" />
                <span className="text-[var(--color-text-muted)]">Kampala, Uganda</span>
              </div>
            </div>

            <a
              href={resumePDF}
              download="Sarah_Angwen_CV.pdf"
              className="inline-flex items-center gap-2 mt-8 bg-[hsl(15,90%,55%)] text-[hsl(0,0%,8%)] px-6 py-3 rounded-sm hover:bg-[hsl(15,90%,45%)] transition font-semibold"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[hsl(15,90%,55%)]"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[hsl(15,90%,55%)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[hsl(15,90%,55%)]"
            ></textarea>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500">
                <AlertCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-[hsl(15,90%,55%)] text-[hsl(0,0%,8%)] py-3 rounded-sm hover:bg-[hsl(15,90%,45%)] transition disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
            >
              <Send className="w-4 h-4" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
