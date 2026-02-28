import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface NavigationProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home',       page: 'home' },
  { label: 'About',      page: 'about' },
  { label: 'Skills',     page: 'skills' },
  { label: 'Experience', page: 'experience' },
  { label: 'Projects',   page: 'projects' },
  { label: 'Contact',    page: 'contact' },
];

export default function Navigation({ activePage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => handleNav('home')} className="text-2xl font-bold text-blue-600">
            Portfolio
          </button>

          <div className="hidden md:flex space-x-8">
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`transition ${activePage === page ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {links.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`block w-full text-left transition ${activePage === page ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
