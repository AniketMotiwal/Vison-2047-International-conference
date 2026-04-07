


'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' }, // ✅ added
    { href: '#about', label: 'About' },
    { href: '#themes', label: 'Themes' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#who-should-attend', label: 'Who Should Attend' },
    { href: '#patrons', label: 'Leadership' },
    { href: '#organizing-committee', label: 'Committee' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 bg-white/90 backdrop-blur-lg border-r border-gray-200 shadow-xl transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      {/* Toggle Button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-gray-800 hover:text-blue-900 transition-all duration-200 p-1 rounded-full hover:bg-blue-50 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <ChevronRight
          size={28}
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Sidebar Content */}
      {isOpen && (
        <div
          className="h-full flex flex-col"
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Header */}
          <div className="p-4 border-b">
            <span className="font-bold text-blue-900 text-lg">Menu</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 p-2 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // ✅ auto close
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-all duration-300"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Bottom Buttons */}
          <div className="mt-auto p-2 flex flex-col gap-2">
            <a
              href="#location"
              className="bg-blue-600 text-white text-center py-2 rounded-full text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              How to Reach
            </a>
            <a
              href="https://forms.gle/Pr1dqxjeK84TAhf36"
              className="bg-yellow-400 text-blue-900 text-center py-2 rounded-full text-sm hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}