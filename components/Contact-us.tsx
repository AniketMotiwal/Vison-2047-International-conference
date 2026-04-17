// 'use client';

// import Image from 'next/image';

// interface Professor {
//   name: string;
//   role: string;
//   institution: string;
//   contact: string;
//   email: string;
//   linkedin: string;
//   image: string;
// }

// const professors: Professor[] = [
//   {
//     name: 'Prof. Akshay Dvivedi',
//     role: 'Organising Secretary',
//     institution: 'IIT Roorkee',
//     contact: '+91 94111 76136',
//     email: 'akshaydvivedi@me.iitr.ac.in',
//     linkedin: 'https://iitr.ac.in/~ME/Akshay_Dvivedi',
//     image: '/Untitled design/1.png',
//   },
//   {
//     name: 'Prof. Vikas Kumar Singh',
//     role: 'Dean, Faculty of Vocational Studies (Swadeshi Sansthan)',
//     institution: 'IGNTU',
//     contact: '+91 91315 06848',
//     email: 'vikash.singh@igntu.ac.in',
//     linkedin: '',
//     image: '/Untitled design/2.png',
//   },
// ];

// export default function ContactUs() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 py-20 px-4" id='contactus'>
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <p className="text-yellow-600 tracking-[0.3em] text-xs font-semibold">
//             VISION 2047 · IIT ROORKEE
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
//             Get in <span className="text-yellow-500">Touch</span>
//           </h1>

//           <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
//             Connect with the organising team for conference enquiries.
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-2 gap-12 [perspective:1200px]">

//           {professors.map((prof, i) => (
//             <div
//               key={i}
//               className="group relative rounded-[30px] p-[1.5px] overflow-hidden"
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;

//                 const rotateX = ((y / rect.height) - 0.5) * -12;
//                 const rotateY = ((x / rect.width) - 0.5) * 12;

//                 const el = e.currentTarget.querySelector('.tilt-card') as HTMLElement;

//                 if (el) {
//                   el.style.transform = `
//                     rotateX(${rotateX}deg)
//                     rotateY(${rotateY}deg)
//                     scale(1.04)
//                   `;
//                 }

//                 e.currentTarget.style.setProperty('--x', `${x}px`);
//                 e.currentTarget.style.setProperty('--y', `${y}px`);
//               }}
//               onMouseLeave={(e) => {
//                 const el = e.currentTarget.querySelector('.tilt-card') as HTMLElement;
//                 if (el) {
//                   el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
//                 }
//               }}
//             >

//               {/* GRADIENT BORDER */}
//               <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(120deg,#FFD700,#FFB347,#FFD700)] opacity-70 blur-[10px] group-hover:animate-pulse"></div>

//               {/* CARD */}
//               <div className="tilt-card relative rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/40 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-300 will-change-transform">

//                 {/* GLOSS OVERLAY */}
//                 <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-tr from-white/30 via-transparent to-white/20 opacity-60"></div>

//                 {/* CURSOR GLOW */}
//                 <div
//                   className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition"
//                   style={{
//                     background: `radial-gradient(300px circle at var(--x) var(--y), rgba(255,215,0,0.25), transparent 40%)`
//                   }}
//                 />

//                 {/* GLASS REFLECTION */}
//                 <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
//                   <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/40 blur-xl rotate-12 translate-x-[-100%] group-hover:translate-x-[200%] transition duration-1000"></div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="relative z-10">

//                   {/* TOP */}
//                   <div className="flex items-center gap-5">
//                     <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-md group-hover:scale-105 transition">
//                       <Image
//                         src={prof.image}
//                         alt={prof.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <div>
//                       {/* NAME */}
//                       <h2 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
//                         {prof.name}
//                       </h2>

//                       {/* ROLE */}
//                       <p className="text-yellow-600 text-sm font-semibold mt-1">
//                         {prof.role}
//                       </p>

//                       {/* INSTITUTION */}
//                       <p className="text-gray-500 text-sm font-medium">
//                         {prof.institution}
//                       </p>
//                     </div>
//                   </div>

//                   {/* DIVIDER */}
//                   <div className="h-px bg-gray-200 my-5" />

//                   {/* CONTACT */}
//                   <div className="space-y-3 text-sm">

//                     <a
//                       href={`tel:${prof.contact}`}
//                       className="block font-semibold text-gray-900 hover:text-yellow-600 transition"
//                     >
//                       📞 {prof.contact}
//                     </a>

//                     <a
//                       href={`mailto:${prof.email}`}
//                       className="block font-semibold bg-gradient-to-r from-gray-800 via-yellow-600 to-gray-800 bg-clip-text text-transparent"
//                     >
//                       ✉ {prof.email}
//                     </a>

//                   </div>

//                   {/* ARROW */}
//                   <div className="mt-6 flex justify-end">
//                     <a
//                       href={prof.linkedin}
//                       target="_blank"
//                       className="w-11 h-11 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg font-bold hover:bg-yellow-400 hover:scale-110 transition shadow-md"
//                     >
//                       →
//                     </a>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* EMAIL */}
//         <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 border">
//           <div>
//             <p className="text-gray-500 text-sm">Conference Secretariat</p>
//             <h3 className="text-2xl font-bold text-yellow-600">
//               vision2047@iitr.ac.in
//             </h3>
//           </div>

//           <a
//             href="mailto:vision2047@iitr.ac.in"
//             className="bg-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
//           >
//             Send Enquiry →
//           </a>
//         </div>

//         {/* CTA */}
//         <div className="mt-12 relative">

//           <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 blur-3xl opacity-40 rounded-[40px]" />

//           <div className="relative bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-[32px] p-8 md:p-10 shadow-[0_20px_60px_rgba(255,200,0,0.25)]">

//             <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center leading-relaxed tracking-wide">
//               For Abstract and Paper Submission Queries Please Contact:
//             </h3>
//             <p className="text-lg md:text-xl font-semibold text-yellow-700 text-center mt-3">
//               Ms. Shinjinee Mishra
//             </p>

//             <div className="mt-5 flex justify-center">
//               <a
//                 href="tel:8537399804"
//                 className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition"
//               >
//                 8537399804
//               </a>
//             </div>

//             <p className="text-center text-gray-500 text-sm mt-4">
//               Available for assistance regarding submissions & guidelines
//             </p>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';

interface Professor {
  name: string;
  role: string;
  institution: string;
  contact: string;
  email: string;
  linkedin: string;
  image: string;
}

const professors: Professor[] = [
  {
    name: 'Prof. Akshay Dvivedi',
    role: 'Organising Secretary',
    institution: 'IIT Roorkee',
    contact: '+91 94111 76136',
    email: 'akshaydvivedi@me.iitr.ac.in',
    linkedin: 'https://iitr.ac.in/~ME/Akshay_Dvivedi',
    image: '/Untitled design/1.png',
  },
  {
    name: 'Prof. Vikas Kumar Singh',
    role: 'Dean, Faculty of Vocational Studies (Swadeshi Sansthan)',
    institution: 'IGNTU',
    contact: '+91 91315 06848',
    email: 'vikash.singh@igntu.ac.in',
    linkedin: '',
    image: '/Untitled design/2.png',
  },
];

export default function ContactUs() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-yellow-50 py-20 px-4"
      id="contactus"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-yellow-600 tracking-[0.3em] text-xs font-semibold">
            VISION 2047 · IIT ROORKEE
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Connect with the organising team for conference enquiries.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-12 [perspective:1200px]">
          {professors.map((prof, i) => (
            <div
              key={i}
              className="group relative rounded-[30px] p-[1.5px] overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = ((y / rect.height) - 0.5) * -12;
                const rotateY = ((x / rect.width) - 0.5) * 12;

                const el = e.currentTarget.querySelector('.tilt-card') as HTMLElement;

                if (el) {
                  el.style.transform = `
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.04)
                  `;
                }

                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector('.tilt-card') as HTMLElement;
                if (el) {
                  el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                }
              }}
            >

              {/* GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(120deg,#FFD700,#FFB347,#FFD700)] opacity-70 blur-[10px] group-hover:animate-pulse"></div>

              {/* CARD */}
              <div className="tilt-card relative rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/40 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-300 will-change-transform">

                {/* GLOSS */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-tr from-white/30 via-transparent to-white/20 opacity-60"></div>

                {/* CURSOR GLOW */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background: `radial-gradient(300px circle at var(--x) var(--y), rgba(255,215,0,0.25), transparent 40%)`
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* TOP */}
                  <div className="flex items-center gap-5">

                    <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-md group-hover:scale-105 transition">
                      <Image
                        src={prof.image}
                        alt={prof.name}
                        fill
                        priority={i === 0}
                        loading={i === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 150px"
                        className="object-cover"
                        decoding="async"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
                        {prof.name}
                      </h2>

                      <p className="text-yellow-600 text-sm font-semibold mt-1">
                        {prof.role}
                      </p>

                      <p className="text-gray-500 text-sm font-medium">
                        {prof.institution}
                      </p>
                    </div>

                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gray-200 my-5" />

                  {/* CONTACT */}
                  <div className="space-y-3 text-sm">

                    <a
                      href={`tel:${prof.contact}`}
                      className="block font-semibold text-gray-900 hover:text-yellow-600 transition"
                    >
                      📞 {prof.contact}
                    </a>

                    <a
                      href={`mailto:${prof.email}`}
                      className="block font-semibold bg-gradient-to-r from-gray-800 via-yellow-600 to-gray-800 bg-clip-text text-transparent"
                    >
                      ✉ {prof.email}
                    </a>

                  </div>

                  {/* LINK */}
                  <div className="mt-6 flex justify-end">
                    <a
                      href={prof.linkedin}
                      target="_blank"
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg font-bold hover:bg-yellow-400 hover:scale-110 transition shadow-md"
                    >
                      →
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMAIL BOX */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 border">

          <div>
            <p className="text-gray-500 text-sm">Conference Secretariat</p>
            <h3 className="text-2xl font-bold text-yellow-600">
              vision2047@iitr.ac.in
            </h3>
          </div>

          <a
            href="mailto:vision2047@iitr.ac.in"
            className="bg-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Send Enquiry →
          </a>
        </div>

        {/* CTA */}
        <div className="mt-12 relative">

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 blur-3xl opacity-40 rounded-[40px]" />

          <div className="relative bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-[32px] p-8 md:p-10 shadow-[0_20px_60px_rgba(255,200,0,0.25)]">

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
              For Abstract and Paper Submission Queries Please Contact:
            </h3>

            <p className="text-lg md:text-xl font-semibold text-yellow-700 text-center mt-3">
              Ms. Shinjinee Mishra
            </p>

            <div className="mt-5 flex justify-center">
              <a
                href="tel:8537399804"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition"
              >
                8527399804
              </a>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              Available for assistance regarding submissions & guidelines
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}