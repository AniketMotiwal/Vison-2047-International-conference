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
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "April 24 – April 26, 2026";

  // ✅ Typing effect
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

  // ✅ Slider
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

  // ✅ Canvas animation
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

    nodesRef.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
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

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(30,85,140,${0.12 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(30,85,140,0.4)';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // ✅ Mouse particles
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) {
        const p: Particle = {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 6 + 2,
          duration: Math.random() * 800 + 600,
        };

        setParticles(prev => [...prev, p]);

        setTimeout(() => {
          setParticles(prev => prev.filter(x => x.id !== p.id));
        }, p.duration);
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden h-[100dvh] bg-white scroll-mt-20"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Mouse particles */}
      {particles.map(p => (
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
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              <img
                src={img}
                alt="slide"
                className="w-full h-full object-cover"
              />

              {/* 🔥 TEXT OVERLAY (FIXED) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-36 md:translate-y-44 lg:translate-y-52 text-center px-6 sm:px-10 lg:px-20">

                {/* DATE */}
                <div className="mb-4 md:mb-6 min-h-[60px] md:min-h-[100px] flex items-center justify-center w-full">
                  <div className="w-full flex justify-center">
                    <span className="text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wide max-w-[1000px]">
                      {typedText}
                    </span>
                  </div>

                  {!isTypingComplete && (
                    <span className="ml-2 w-[3px] h-[1em] bg-white animate-pulse" />
                  )}
                </div>

                {/* LOCATION */}
                <div
                  className={`transition-all duration-700 ${
                    isTypingComplete
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                 <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 md:mt-5 max-w-[900px] mx-auto leading-relaxed font-medium">
                    📍 Indian Institute of Technology, Roorkee, Uttarakhand
                  </p>
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