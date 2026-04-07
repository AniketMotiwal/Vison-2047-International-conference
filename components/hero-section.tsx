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
  const images: string[] = ['/iit.png'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  // Constellation canvas animation
  useEffect(() => {
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

    const count = 60;
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[j].x);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(30, 85, 140, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30, 85, 140, 0.4)';
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Mouse particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.87) {
        const p: Particle = {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 7 + 2,
          duration: Math.random() * 1000 + 700,
        };
        setParticles(prev => [...prev, p]);
        setTimeout(() => setParticles(prev => prev.filter(x => x.id !== p.id)), p.duration);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white min-h-screen flex flex-col"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Soft radial glow blobs */}
      <div 
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(30,85,140,0.15) 0%, transparent 70%)',
          transform: `translateX(${mousePos.x * 0.015}px) translateY(${mousePos.y * 0.01}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute top-1/4 -right-16 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(30,85,140,0.1) 0%, transparent 70%)',
          transform: `translateX(${-mousePos.x * 0.01}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Cursor particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed rounded-full pointer-events-none z-50"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle, rgba(255,184,28,0.95), rgba(217,119,6,0.4))',
            boxShadow: '0 0 10px rgba(255,184,28,0.7)',
            animation: `floatUp ${p.duration}ms ease-out forwards`,
          }}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col items-center w-full flex-1">



        {/* Main Title */}
        <h1 className="m-0 mb-3 sm:mb-4 lg:mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-tight lg:leading-tight animated-title" style={{ letterSpacing: '-0.01em' }}>
          <span className="inline-block animate-pulse">VISION 2047: PROSPEROUS</span> <br className="hidden sm:inline"/>
          <span className="inline-block text-gray-900 mx-1 sm:mx-2 animate-bounce" style={{animationDelay: '0.1s'}}>AND</span>
          <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>GREAT BHARAT 2.0</span>
        </h1>

        {/* Date row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 flex-wrap">
          <div className="h-0.5 w-12 sm:w-16 lg:w-20 bg-gray-900" />
          <p className="m-0 text-sm sm:text-base text-gray-600 tracking-wider whitespace-nowrap">
            April 24 – April 26, 2026
          </p>
          <div className="h-0.5 w-12 sm:w-16 lg:w-20 bg-gray-900" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
          <span className="text-lg sm:text-xl">📍</span>
          <p className="m-0 text-sm sm:text-base text-gray-700 text-center">
            Indian Institute of Technology,<br className="block sm:inline" />
            <span className="block sm:inline"> Roorkee, Uttarakhand</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center mb-8 sm:mb-10 lg:mb-12">
          <a
            href="https://forms.gle/Pr1dqxjeK84TAhf36"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-full font-bold text-sm sm:text-base no-underline shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 inline-block"
          >
            Register Now
          </a>
          <button
            className="px-6 sm:px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-bold text-sm sm:text-base bg-transparent cursor-pointer transition-all duration-200 hover:bg-blue-900 hover:text-white hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* IIT Building Image Slider - Bottom */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Slides wrapper */}
        <div
          className="flex w-full transition-transform duration-600 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-auto lg:h-screen object-cover flex-shrink-0 shadow-2xl"
              style={{ objectPosition: 'center 40%', minHeight: '400px' }}
            />
          ))}
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
          {images.map((_: string, i: number) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="rounded-full cursor-pointer transition-all duration-300 hover:scale-125"
              style={{
                width: i === currentSlide ? '24px' : '10px',
                height: '10px',
                background: i === currentSlide ? '#FFB81C' : 'rgba(255,255,255,0.7)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark Blue Info Section - Bottom */}
      <div className="relative z-10 w-full bg-gradient-to-r from-blue-950 to-blue-900 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Dates */}
          <h2 className="text-white text-center font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-7 lg:mb-8 tracking-wide">
            APRIL 24 - APRIL 26, 2026
          </h2>
          
          {/* Location with icon */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="text-red-500 text-2xl sm:text-3xl lg:text-4xl flex-shrink-0">📍</div>
            <p className="text-white text-center text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              Indian Institute of Technology Roorkee<br className="hidden sm:block" />
              <span className="block sm:inline">Roorkee, Uttarakhand</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-110px) scale(0); }
        }
        
        @keyframes colorShift {
          0% { color: #1F2937; }
          50% { color: #1E40AF; }
          100% { color: #1F2937; }
        }
        
        .animated-title span {
          color: #1F2937;
          animation: colorShift 3s ease-in-out infinite;
        }
        
        .animated-title span:nth-child(2) {
          animation: colorShift 3s ease-in-out infinite 0.5s;
        }
        
        .animated-title span:nth-child(3) {
          animation: colorShift 3s ease-in-out infinite 1s;
        }
        
        @media (max-width: 640px) {
          h1 {
            font-size: clamp(24px, 6vw, 32px);
          }
        }
      `}</style>
    </section>
  );
}
