'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#themes', label: 'Themes' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#why-attend', label: 'Why Attend' },
    { href: '#patrons', label: 'Leadership' },
    { href: '#organizing-committee', label: 'Committee' },
    { href: '#association-universities', label: 'Universities' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="relative w-28 h-28 md:w-24 md:h-24">
              <Image 
                src="/iit-logo.png" 
                alt="IIT Roorkee" 
                fill
                priority
                sizes="112px"
                className="object-contain" 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 xl:gap-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#003D7A] font-medium text-xs md:text-sm transition px-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <a
              href="#location"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-5 py-2 rounded-full transition transform hover:scale-105 text-sm"
            >
              How to Reach
            </a>
            <a
              href="#registration"
              className="bg-gradient-to-r from-[#FFB81C] to-[#E6A80C] hover:from-[#E6A80C] hover:to-[#FFB81C] text-[#003D7A] font-bold px-6 py-2 rounded-full transition transform hover:scale-105 text-sm"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#003D7A] font-bold text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#003D7A] font-medium text-base transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-1 pt-2">
              <a
                href="#location"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-2 py-2 rounded-full text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                How to Reach
              </a>
              <a
                href="#registration"
                className="flex-1 bg-gradient-to-r from-[#FFB81C] to-[#E6A80C] text-[#003D7A] font-bold px-2 py-2 rounded-full text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
