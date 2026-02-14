import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">Portfolio</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#experience" className="block text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
