import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[hsl(0,0%,8%)] text-[hsl(0,0%,95%)] min-h-screen flex items-center">
      <div className="absolute top-0 right-0 w-16 h-2 bg-[hsl(15,90%,55%)]" />
      <div className="absolute bottom-0 left-0 w-2 h-16 bg-[hsl(0,75%,45%)]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 w-full">
        <p className="text-sm tracking-[0.3em] uppercase text-[hsl(15,90%,55%)] mb-6">
          Welcome
        </p>

        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6">
          Hello, I'm<br />
          <span className="text-[hsl(15,90%,55%)]">Sarah Angwen</span>
        </h1>

        <p className="text-lg md:text-xl font-semibold text-[hsl(0,0%,70%)] mb-4">
          Full-Stack Developer | JavaScript, TypeScript, Node.js, React | Building Scalable Web Apps
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:angwensarahsunday@gmail.com" className="text-[hsl(0,0%,40%)] hover:text-[hsl(15,90%,55%)] transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
