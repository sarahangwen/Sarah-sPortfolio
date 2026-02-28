import { Github, Linkedin, Mail } from 'lucide-react';

type Page = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Engineer Sarah Angwen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Building scalable web applications and turning ideas into reality with clean, efficient code.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => onNavigate('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get In Touch
          </button>
          <button onClick={() => onNavigate('projects')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            View Projects
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
