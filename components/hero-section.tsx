
// 'use client';

// import { useEffect, useState, useRef } from 'react';

// interface Particle {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   duration: number;
// }

// interface Node {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
// }

// export default function HeroSection() {
//   const images: string[] = ['/IIT-Roorkee.jpg'];

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [typedText, setTypedText] = useState<string>('');
//   const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const fullText: string = "April 24 – April 26, 2026";

//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Typing effect
//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= fullText.length) {
//         setTypedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//         setIsTypingComplete(true);
//       }
//     }, 70);
//     return () => clearInterval(timer);
//   }, []);

//   // Slider auto-play
//   useEffect(() => {
//     if (images.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % images.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const nodesRef = useRef<Node[]>([]);
//   const animRef = useRef<number>(0);
//   const [particles, setParticles] = useState<Particle[]>([]);

//   // Canvas effect (disable on mobile for performance)
//   useEffect(() => {
//     if (isMobile) return; // 🚀 Mobile pe canvas band

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     nodesRef.current = Array.from({ length: 30 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.2,
//       vy: (Math.random() - 0.5) * 0.2,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       const nodes = nodesRef.current;

//       nodes.forEach(n => {
//         n.x += n.vx;
//         n.y += n.vy;
//         if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
//         if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
//       });

//       for (let i = 0; i < nodes.length; i++) {
//         for (let j = i + 1; j < nodes.length; j++) {
//           const dx = nodes[i].x - nodes[j].x;
//           const dy = nodes[i].y - nodes[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(nodes[i].x, nodes[i].y);
//             ctx.lineTo(nodes[j].x, nodes[j].y);
//             ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
//             ctx.stroke();
//           }
//         }
//       }

//       nodes.forEach(n => {
//         ctx.beginPath();
//         ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(255,255,255,0.2)';
//         ctx.fill();
//       });

//       animRef.current = requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(animRef.current);
//     };
//   }, [isMobile]);

//   // Mouse particles (disable on mobile)
//   useEffect(() => {
//     if (isMobile) return;

//     const handleMove = (e: MouseEvent) => {
//       if (Math.random() > 0.9) {
//         const p: Particle = {
//           id: Math.random(),
//           x: e.clientX,
//           y: e.clientY,
//           size: Math.random() * 5 + 2,
//           duration: Math.random() * 700 + 500,
//         };
//         setParticles(prev => [...prev, p]);
//         setTimeout(() => {
//           setParticles(prev => prev.filter(x => x.id !== p.id));
//         }, p.duration);
//       }
//     };
//     window.addEventListener('mousemove', handleMove);
//     return () => window.removeEventListener('mousemove', handleMove);
//   }, [isMobile]);

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden w-full bg-white scroll-mt-20"
//       style={{ fontFamily: "'Georgia', serif" }}
//     >
//       <h1 className="sr-only">
//         Vision 2047 International Conference IIT Roorkee April 24–26 2026
//       </h1>

//       {/* Canvas - Mobile pe hide */}
//       {!isMobile && (
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 w-full h-full pointer-events-none z-10"
//         />
//       )}

//       {/* Mouse particles - Mobile pe hide */}
//       {!isMobile &&
//         particles.map(p => (
//           <div
//             key={p.id}
//             className="fixed rounded-full pointer-events-none z-50"
//             style={{
//               left: p.x,
//               top: p.y,
//               width: p.size,
//               height: p.size,
//               background: 'gold',
//               animation: `floatUp ${p.duration}ms ease-out forwards`,
//             }}
//           />
//         ))}

//       {/* Slider */}
//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex w-full transition-transform duration-700"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {images.map((img, i) => (
//             <div key={i} className="w-full flex-shrink-0 relative">
//               <img
//                 src={img}
//                 alt="Vision 2047 Conference at IIT Roorkee campus Uttarakhand India"
//                 className="w-full h-auto block"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

//               {/* ✅ MOBILE-FRIENDLY TEXT OVERLAY */}
//               <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-6 sm:pb-10 md:pb-16 lg:pb-20 text-center px-4 sm:px-6 md:px-10 lg:px-20">
//                 <div
//                   className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-12 py-3 sm:py-5 rounded-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%]"
//                   style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
//                 >
//                   {/* Typing text */}
//                   <div className="flex items-center justify-center flex-wrap min-h-[44px] sm:min-h-[56px]">
//                     <span className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide drop-shadow-lg text-center">
//                       {typedText}
//                     </span>
//                     {!isTypingComplete && (
//                       <span className="ml-1 inline-block w-[2px] h-[1.2em] bg-white animate-pulse align-middle" />
//                     )}
//                   </div>

//                   {/* Location text */}
//                   <div
//                     className={`transition-all duration-700 ${
//                       isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                     } w-full`}
//                   >
//                     <div className="w-16 sm:w-24 h-px bg-white/40 mx-auto mb-2 sm:mb-3" />
//                     <p className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-[90%] mx-auto leading-relaxed font-medium tracking-wide">
//                       📍 IIT Roorkee, Uttarakhand
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes floatUp {
//           0% { opacity: 1; transform: translateY(0); }
//           100% { opacity: 0; transform: translateY(-80px); }
//         }
//       `}</style>
//     </section>
//   );
// }



'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function HeroSection() {
  const images: string[] = ['/IIT-Roorkee.jpg'];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const fullText: string = "April 24 – April 26, 2026";

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 70);
    return () => clearInterval(timer);
  }, []);

  // Slider autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Canvas animation (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    nodesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [isMobile]);

  // Mouse particles
  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        const p: Particle = {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2,
          duration: Math.random() * 700 + 500,
        };
        setParticles(prev => [...prev, p]);
        setTimeout(() => {
          setParticles(prev => prev.filter(x => x.id !== p.id));
        }, p.duration);
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative overflow-hidden w-full bg-white scroll-mt-20"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Canvas */}
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      )}

      {/* Mouse particles */}
      {!isMobile &&
        particles.map(p => (
          <div
            key={p.id}
            className="fixed rounded-full pointer-events-none z-50"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: 'gold',
              animation: `floatUp ${p.duration}ms ease-out forwards`,
            }}
          />
        ))}

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 relative">

              {/* ✅ FINAL BALANCED BRIGHTNESS */}
              <img
                src={img}
                alt="Vision 2047 Conference IIT Roorkee"
                className="w-full h-auto block"
                style={{ filter: 'brightness(1.2) contrast(1.1) saturate(1.05)' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 text-center px-4">
                <div className="bg-black/40 backdrop-blur-md px-6 py-5 rounded-2xl max-w-3xl w-full">

                  {/* Typing */}
                  <div className="flex justify-center items-center min-h-[50px]">
                    <span className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
                      {typedText}
                    </span>
                    {!isTypingComplete && (
                      <span className="ml-1 w-[2px] h-[1.2em] bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Location */}
                  <div className={`transition-all duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-20 h-px bg-white/40 mx-auto my-3" />
                    <p className="text-white text-lg md:text-xl">
                      📍Indian Institute of Technology Roorkee, Roorkee, Uttarakhand, India
                    </p>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-80px); }
        }
      `}</style>
    </section>
  );
}