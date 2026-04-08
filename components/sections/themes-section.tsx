// 'use client';

// import { conferenceData } from '@/lib/conference-data';

// export default function ThemesSection() {
//   return (
//     <section id="themes" className="py-16 bg-white">

//       {/* Heading */}
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-[#003D7A]">
//           Conference Themes
//         </h2>
//       </div>

//       {/* Grid */}
//       <div className="w-full px-3 md:px-6">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">

//           {conferenceData.themes.map((theme, index) => (
            
//             <div
//               key={theme.id}
//               className="
//                 relative group
//                 rounded-2xl
//                 aspect-square
//                 p-[2px]
//                 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500
//                 hover:scale-105 transition-all duration-300
//               "
//             >

//               {/* Inner Card */}
//               <div className="
//                 relative h-full w-full
//                 rounded-2xl
//                 bg-white
//                 flex items-center justify-center
//                 p-5
//                 overflow-hidden
//               ">

//                 {/* Shimmer */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
//                   <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
//                 </div>

//                 {/* Hover Fill */}
//                 <div className="
//                   absolute inset-0
//                   bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
//                   opacity-0 group-hover:opacity-10
//                   transition duration-500
//                 " />

//                 {/* Text */}
//                 <h3 className="
//                   relative z-10
//                   text-center
//                   font-bold
//                   text-gray-800
//                   text-sm sm:text-base md:text-lg
//                   leading-snug
//                   line-clamp-2
//                   break-words
//                   group-hover:text-blue-600
//                   transition
//                 ">
//                   {theme.title}
//                 </h3>

//               </div>
//             </div>

//           ))}

//         </div>
//       </div>

//     </section>
//   );
// }


'use client';

import { conferenceData } from '@/lib/conference-data';

export default function ThemesSection() {
  return (
    <section id="themes" className="py-16 bg-white">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#003D7A]">
          Conference Themes
        </h2>
      </div>

      {/* Grid */}
      <div className="w-full px-3 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">

          {conferenceData.themes.map((theme, index) => (
            
            <div
              key={theme.id}
              className="
                relative group
                rounded-2xl
                overflow-hidden
                bg-white
                border border-gray-200
                shadow-md
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
              "
            >

              {/* 🔥 Animated Top Bar */}
              <div className="
                h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                group-hover:w-full transition-all duration-500
              " />

              {/* 🔥 Background Fill on Hover */}
              <div className="
                absolute inset-0 
                bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                opacity-0 group-hover:opacity-10
                transition duration-500
              " />

              {/* 🔥 Content */}
              <div className="relative p-6 flex flex-col items-center justify-center text-center gap-3">

                {/* 🔥 Icon Circle */}
                <div className="
                  w-12 h-12 rounded-full
                  bg-gradient-to-br from-blue-500 to-purple-500
                  flex items-center justify-center
                  text-white font-bold text-lg
                  group-hover:scale-110 transition
                ">
                  {index + 1}
                </div>

                {/* 🔥 Text */}
                <h3 className="
                  font-semibold
                  text-gray-800
                  text-sm md:text-base
                  leading-snug
                  line-clamp-2
                  group-hover:text-blue-600
                  transition
                ">
                  {theme.title}
                </h3>

              </div>

            </div>

          ))}

        </div>
      </div>

    </section>
  );
}