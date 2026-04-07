
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
        
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(59, 130, 246, 0.4);
            box-shadow: inset 0 0 10px rgba(59, 130, 246, 0.2);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.7);
            box-shadow: inset 0 0 15px rgba(59, 130, 246, 0.4);
          }
        }
        
        @keyframes borderGlowYellow {
          0%, 100% {
            border-color: rgba(255, 184, 28, 0.4);
            box-shadow: inset 0 0 10px rgba(255, 184, 28, 0.2);
          }
          50% {
            border-color: rgba(255, 184, 28, 0.8);
            box-shadow: inset 0 0 15px rgba(255, 184, 28, 0.4);
          }
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 8px;
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
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-primary {
          animation: slideDown 0.6s ease-out 0.3s both;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          padding: 12px 28px;
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
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
        }
        
        .btn-secondary {
          animation: slideDown 0.6s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          padding: 12px 28px;
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
          box-shadow: 0 10px 25px rgba(255, 184, 28, 0.5);
        }
        
        .logo-hover {
          animation: slideDown 0.6s ease-out both;
          transition: transform 0.3s ease;
        }
        
        .logo-hover:hover {
          transform: scale(1.08) rotateY(5deg);
        }
        
        @keyframes verticalScrollColor {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }
        
        @keyframes colorFlowVertical {
          0% {
            background: linear-gradient(180deg, 
              rgba(59, 130, 246, 0.3) 0%,
              rgba(147, 51, 234, 0.4) 25%,
              rgba(6, 182, 212, 0.4) 50%,
              rgba(59, 130, 246, 0.3) 75%,
              rgba(147, 51, 234, 0.3) 100%);
            background-position: 0% 0%;
          }
          100% {
            background: linear-gradient(180deg, 
              rgba(147, 51, 234, 0.3) 0%,
              rgba(6, 182, 212, 0.4) 25%,
              rgba(59, 130, 246, 0.4) 50%,
              rgba(147, 51, 234, 0.3) 75%,
              rgba(6, 182, 212, 0.3) 100%);
            background-position: 0% 100%;
          }
        }
        
        @keyframes glowScrolling {
          0%, 100% {
            box-shadow: 
              -4px 0 0 -2px rgba(59, 130, 246, 0.5),
              4px 0 0 -2px rgba(59, 130, 246, 0.5),
              0 0 20px rgba(59, 130, 246, 0.5),
              inset 0 -8px 16px rgba(59, 130, 246, 0.3);
          }
          33% {
            box-shadow: 
              -4px 0 0 -2px rgba(147, 51, 234, 0.7),
              4px 0 0 -2px rgba(147, 51, 234, 0.7),
              0 0 25px rgba(147, 51, 234, 0.6),
              inset 0 -8px 20px rgba(147, 51, 234, 0.4);
          }
          66% {
            box-shadow: 
              -4px 0 0 -2px rgba(6, 182, 212, 0.7),
              4px 0 0 -2px rgba(6, 182, 212, 0.7),
              0 0 25px rgba(6, 182, 212, 0.6),
              inset 0 -8px 20px rgba(6, 182, 212, 0.4);
          }
        }
        
        @keyframes navLinkColorFlow {
          0% {
            border-color: rgba(59, 130, 246, 0.4);
          }
          33% {
            border-color: rgba(147, 51, 234, 0.6);
          }
          66% {
            border-color: rgba(6, 182, 212, 0.6);
          }
          100% {
            border-color: rgba(59, 130, 246, 0.4);
          }
        }
        
        @keyframes buttonPrimaryColorFlow {
          0% {
            border-color: rgba(59, 130, 246, 0.5);
          }
          33% {
            border-color: rgba(147, 51, 234, 0.7);
          }
          66% {
            border-color: rgba(6, 182, 212, 0.7);
          }
          100% {
            border-color: rgba(59, 130, 246, 0.5);
          }
        }
        
        .vertical-divider {
          display: none;
        }
        
        .vertical-divider::before {
          display: none;
        }
        
        .vertical-divider::after {
          display: none;
        }
      `}</style>

      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between gap-6 lg:gap-12">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center gap-3 lg:gap-10 whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-600 font-semibold text-sm lg:text-base px-4 py-3 transition-colors duration-300 hover:text-[#003D7A]"
                style={{
                  animation: `slideDown 0.5s ease-out ${0.1 + idx * 0.05}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Spacer for desktop - pushes buttons to the right */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="vertical-divider" />
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden sm:flex items-center gap-5 lg:gap-8 flex-shrink-0 mx-2 lg:mx-6">
            <a
              href="#location"
              className="btn-primary bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-bold px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl"
            >
              How to Reach
            </a>
            <a
              href="https://forms.gle/Pr1dqxjeK84TAhf36"
              className="btn-secondary bg-gradient-to-r from-[#FFB81C] via-yellow-400 to-[#E6A80C] hover:from-[#E6A80C] hover:via-yellow-300 hover:to-[#FFB81C] text-[#003D7A] font-bold px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl"
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
