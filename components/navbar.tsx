'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#themes', label: 'Themes' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#who-should-attend', label: 'Who Should Attend' },
    { href: '#patrons', label: 'Leadership' },
    { href: '#organizing-committee', label: 'Committee' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6, #1E40AF);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 2px;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link:hover {
          color: #003D7A;
          transform: translateY(-2px);
        }
        
        .btn-primary {
          animation: slideDown 0.6s ease-out 0.3s both;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary {
          animation: slideDown 0.6s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-secondary:hover::before {
          left: 100%;
        }
        
        .btn-secondary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 184, 28, 0.4);
        }
        
        .logo-hover {
          animation: slideDown 0.6s ease-out both;
          transition: transform 0.3s ease;
        }
        
        .logo-hover:hover {
          transform: scale(1.08) rotateY(5deg);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <a href="#hero" className="logo-hover flex items-center gap-2 group">
            <div className="relative w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></div>
              <Image 
                src="/iit-logo.png" 
                alt="IIT Roorkee Logo" 
                fill
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain relative z-10" 
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 whitespace-nowrap mx-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-700 font-medium text-sm lg:text-base px-2 py-2 transition-colors duration-300 hover:text-[#003D7A]"
                style={{
                  animation: `slideDown 0.5s ease-out ${0.1 + idx * 0.05}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <a
              href="#location"
              className="btn-primary bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm shadow-md border border-blue-500/30"
            >
              How to Reach
            </a>
            <a
              href="https://forms.gle/Pr1dqxjeK84TAhf36"
              className="btn-secondary bg-gradient-to-r from-[#FFB81C] via-yellow-400 to-[#E6A80C] hover:from-[#E6A80C] hover:via-yellow-300 hover:to-[#FFB81C] text-[#003D7A] font-bold px-6 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm shadow-md border border-yellow-400/30"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#003D7A] font-bold text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative z-50"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-gray-200 pt-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link block py-3 px-3 text-gray-700 hover:text-[#003D7A] font-semibold text-base rounded-lg transition-all duration-300 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: `slideDown 0.3s ease-out ${idx * 0.05}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              <a
                href="#location"
                className="flex-1 btn-primary bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-3 py-3 rounded-full text-center text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                How to Reach
              </a>
              <a
                href="https://forms.gle/Pr1dqxjeK84TAhf36"
                className="flex-1 btn-secondary bg-gradient-to-r from-[#FFB81C] to-[#E6A80C] text-[#003D7A] font-bold px-3 py-3 rounded-full text-center text-sm shadow-md transition-all duration-300 hover:shadow-lg"
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
