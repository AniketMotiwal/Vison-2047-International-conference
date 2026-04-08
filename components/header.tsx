// 'use client';

// import Image from 'next/image';

// const Header = () => {
//   return (
//     <header
//       className="relative flex items-stretch justify-between bg-white text-black shadow-lg border border-gray-300"
//       style={{ minHeight: '120px' }}
//     >
//       {/* Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 opacity-40 z-[-1]" />

//       {/* Left Logo */}
//       <div className="flex-shrink-0 flex items-center px-3 sm:px-4">
//         <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
//           <Image
//             src="/iit_logo.webp"
//             alt="IIT Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>

//       {/* Center Content */}
//       <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center py-2 px-1">
//         <p className="font-bold text-blue-900 text-[clamp(9px,1.5vw,22px)] whitespace-nowrap">
//           INTERNATIONAL CONFERENCE ON
//         </p>
//         <h1 className="font-extrabold text-orange-500 leading-tight text-[clamp(18px,4vw,58px)] break-words w-full">
//           Vision 2047: Prosperous and Great Bharat 2.0
//         </h1>
//       </div>

//       {/* Right Logo */}
//       <div className="flex-shrink-0 flex items-center px-3 sm:px-4">
//         <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
//           <Image
//             src="/swadesheade.webp"
//             alt="Swadeshi Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header
      className="relative flex items-stretch justify-between bg-white text-black shadow-lg border border-gray-300"
      style={{ minHeight: '60px' }}
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-300 opacity-40 z-[-1]" />

      {/* Left Logo */}
      <div className="flex-shrink-0 flex items-center px-1.5 sm:px-3 md:px-4">
        <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <Image
            src="/iit_logo.webp"
            alt="IIT Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center py-1 sm:py-2 px-1">
        <p className="font-bold text-blue-900 text-[clamp(6px,2vw,22px)] whitespace-nowrap">
          INTERNATIONAL CONFERENCE ON
        </p>
        <h1 className="font-extrabold text-orange-500 leading-tight text-[clamp(10px,3.5vw,58px)] w-full"
          style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
          Vision 2047: Prosperous and Great Bharat 2.0
        </h1>
      </div>

      {/* Right Logo */}
      <div className="flex-shrink-0 flex items-center px-1.5 sm:px-3 md:px-4">
        <div className="relative w-14 h-14 xs:w-16 xs:h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
          <Image
            src="/swadesheade.webp"
            alt="Swadeshi Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;