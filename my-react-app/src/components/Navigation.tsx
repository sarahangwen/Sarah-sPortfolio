import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[hsl(0,0%,8%)] border-b border-[hsl(0,0%,15%)] z-50">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[hsl(15,90%,55%)]">
            My Portfolio
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">About</a>
            <a href="#skills" className="text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Skills</a>
            <a href="#experience" className="text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Experience</a>
            <a href="#projects" className="text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Projects</a>
            <a href="#contact" className="text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[hsl(0,0%,70%)]">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">About</a>
            <a href="#skills" className="block text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Skills</a>
            <a href="#experience" className="block text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Experience</a>
            <a href="#projects" className="block text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Projects</a>
            <a href="#contact" className="block text-[hsl(0,0%,70%)] hover:text-[hsl(15,90%,55%)] transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
