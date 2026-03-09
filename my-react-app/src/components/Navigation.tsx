import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/useTheme';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-[var(--color-bg)] border-b border-[var(--color-border-light)] z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[hsl(15,90%,55%)]">
            My Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">About</a>
            <a href="#skills" className="text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Skills</a>
            <a href="#experience" className="text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Experience</a>
            <a href="#projects" className="text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Projects</a>
            <a href="#contact" className="text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Contact</a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-sm text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] hover:bg-[var(--color-bg-surface)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-sm text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-text-secondary)]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">About</a>
            <a href="#skills" className="block text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Skills</a>
            <a href="#experience" className="block text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Experience</a>
            <a href="#projects" className="block text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Projects</a>
            <a href="#contact" className="block text-[var(--color-text-secondary)] hover:text-[hsl(15,90%,55%)] transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
