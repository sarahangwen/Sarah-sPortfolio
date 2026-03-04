import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/sarah2.jpg';

export default function Home() {
  return (
    <section className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />
      <div className="absolute bottom-0 left-0 w-2 h-16 bg-[hsl(0,75%,45%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[hsl(15,90%,55%)] mb-6">
              Welcome
            </p>

            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6">
              Hello, I'm<br />
              <span className="text-[hsl(15,90%,55%)]">Ms Sarah Angwen</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-[hsl(0,0%,70%)] mb-4">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>

            <p className="text-sm text-[hsl(0,0%,50%)] max-w-xl leading-relaxed mb-10">
              Building scalable web applications and turning ideas into reality with clean, efficient code.
            </p>

            <div className="w-24 h-[3px] bg-[hsl(0,75%,45%)] mb-10" />

            <div className="flex gap-4 mb-12">
              <a href="#contact" className="bg-[hsl(15,90%,55%)] text-[hsl(0,0%,5%)] px-8 py-3 rounded-sm font-semibold hover:bg-[hsl(15,90%,45%)] transition-colors">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-[hsl(0,0%,30%)] text-[hsl(0,0%,80%)] px-8 py-3 rounded-sm font-semibold hover:border-[hsl(15,90%,55%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                View Projects
              </a>
            </div>

            <div className="flex gap-5">
              <a href="https://github.com/sarahangwen" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sarah-angwen-0594a7223/" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:angwensarahsunday@gmail.com" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={profileImage}
                alt="Sarah Angwen"
                className="w-full h-auto object-cover rounded-sm"
              />
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[hsl(15,90%,55%)]" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[hsl(15,90%,55%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
