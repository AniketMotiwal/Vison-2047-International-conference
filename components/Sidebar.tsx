

// 'use client';

// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [active, setActive] = useState('#home');

//   const navLinks = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Themes', href: '#themes' },
//     { label: 'Timeline', href: '#timeline' },
//     { label: 'Who Should Attend', href: '#who-should-attend' },
//     { label: 'Patrons', href: '#patrons' },
//     { label: 'Advisory Board', href: '#advisory-board' },
//     { label: 'Organizing Committee', href: '#organizing-committee' }, // Fixed capitalization
//     { label: 'How to Reach', href: '#location' },
//     { label: 'Registration', href: '#registration' }, // Fixed label
//     { label: 'Brochure', href: '#brochure' },
//     { label: 'Contact Us', href: '#contactus' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY + 120;
//       for (const link of navLinks) {
//         const section = document.querySelector(link.href);
//         if (!section) continue;
//         const top = (section as HTMLElement).offsetTop;
//         const height = (section as HTMLElement).offsetHeight;
//         if (scrollPos >= top && scrollPos < top + height) {
//           setActive(link.href);
//           break; // Stop once we find the active section
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleRegisterClick = () => {
//     window.open('https://docs.google.com/forms/d/e/1FAIpQLSe9mnu68W-dQDofoEX9qR_qFh4dlJd3WuLyMEKBXxzu5ixoqA/viewform', '_blank');
//   };

//   const handlePaymentClick = () => {
//     window.open('https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641', '_blank');
//   };

//   // Smooth scroll function for better UX
//   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//       setMobileMenuOpen(false);
//       // Update URL without jumping
//       window.history.pushState(null, '', href);
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">

//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo / Event Name - Mobile */}
//           <Link href="#home" className="lg:hidden font-bold text-sm sm:text-base text-blue-900 truncate max-w-[150px] sm:max-w-none">
//             Vision 2047
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-wrap">
//             {navLinks.map((link) => {
//               const isActive = active === link.href;
//               return (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   onClick={(e) => handleSmoothScroll(e, link.href)}
//                   className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap
//                     ${isActive
//                       ? 'text-blue-900 bg-blue-100 shadow-sm'
//                       : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
//                     }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Action buttons */}
//           <div className="flex items-center gap-2">
//             <Button
//               onClick={handlePaymentClick}
//               size="sm"
//               className="hidden sm:inline-flex text-xs sm:text-sm font-semibold bg-[#FFD124] hover:bg-[#e6bc20] text-black shadow-sm transition-all duration-200"
//             >
//               💳 Payment
//             </Button>

//             <Button
//               onClick={handleRegisterClick}
//               size="sm"
//               className="hidden sm:inline-flex text-xs sm:text-sm font-semibold bg-[#004178] hover:bg-[#003366] text-white shadow-sm transition-all duration-200"
//             >
//               📝 Register
//             </Button>

//             {/* Hamburger menu */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-900 transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {mobileMenuOpen && (
//         <nav className="lg:hidden border-t border-gray-200 bg-white shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top duration-300">
//           <div className="px-4 py-3 space-y-1">
//             {navLinks.map((link) => {
//               const isActive = active === link.href;
//               return (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   onClick={(e) => handleSmoothScroll(e, link.href)}
//                   className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
//                     ${isActive
//                       ? 'bg-blue-100 text-blue-900 border-l-4 border-blue-900'
//                       : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
//                     }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}

//             {/* Divider */}
//             <div className="my-3 border-t border-gray-200" />

//             {/* Mobile action buttons */}
//             <div className="grid grid-cols-2 gap-3 pt-2">
//               <Button
//                 onClick={handlePaymentClick}
//                 className="w-full text-sm font-semibold bg-[#FFD124] hover:bg-[#e6bc20] text-black"
//               >
//                 💳 Payment
//               </Button>
//               <Button
//                 onClick={handleRegisterClick}
//                 className="w-full text-sm font-semibold bg-[#004178] hover:bg-[#003366] text-white"
//               >
//                 📝 Register
//               </Button>
//             </div>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;


'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Themes', href: '#themes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Who Should Attend', href: '#who-should-attend' },
    { label: 'Patrons', href: '#patrons' },
    { label: 'Advisory Board', href: '#advisory-board' },
    { label: 'Organizing Committee', href: '#organizing-committee' },
    { label: 'How to Reach', href: '#location' },
    { label: 'Registration', href: '#registration' },
    { label: 'Brochure', href: '#brochure' },
    { label: 'Contact Us', href: '#contactus' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (!section) continue;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(link.href);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe9mnu68W-dQDofoEX9qR_qFh4dlJd3WuLyMEKBXxzu5ixoqA/viewform', '_blank');
  };

  const handlePaymentClick = () => {
    window.open('https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641', '_blank');
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <div className="flex items-center justify-between h-16 gap-2">


          {/* Desktop Navigation - Scrollable with hidden scrollbar */}
          <div className="hidden lg:flex flex-1 overflow-x-auto scrollbar-hide justify-center">
            <nav className="flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`px-1.5 xl:px-2 py-1.5 text-[10px] xl:text-xs font-medium rounded-md transition-all duration-200 whitespace-nowrap
                      ${isActive
                        ? 'text-blue-900 bg-blue-100 shadow-sm'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      }`}
                  >
                    {link.label === 'Who Should Attend' ? 'Who Attend' : 
                     link.label === 'Organizing Committee' ? 'Org Committee' :
                     link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action buttons - Always visible */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button
              onClick={handlePaymentClick}
              size="sm"
              className="hidden sm:inline-flex text-[10px] sm:text-xs font-semibold bg-[#FFD124] hover:bg-[#e6bc20] text-black shadow-sm px-2 sm:px-3"
            >
              💳 Payment
            </Button>

            <Button
              onClick={handleRegisterClick}
              size="sm"
              className="hidden sm:inline-flex text-[10px] sm:text-xs font-semibold bg-[#004178] hover:bg-[#003366] text-white shadow-sm px-2 sm:px-3"
            >
              📝 Register
            </Button>

            {/* Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-900 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-blue-100 text-blue-900 border-l-4 border-blue-900'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="my-3 border-t border-gray-200" />

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                onClick={handlePaymentClick}
                className="w-full text-sm font-semibold bg-[#FFD124] hover:bg-[#e6bc20] text-black"
              >
                💳 Payment
              </Button>
              <Button
                onClick={handleRegisterClick}
                className="w-full text-sm font-semibold bg-[#004178] hover:bg-[#003366] text-white"
              >
                📝 Register
              </Button>
            </div>
          </div>
        </nav>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Navbar;