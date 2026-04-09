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

  const fullText: string = "April 24 – April 26, 2026";

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
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
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
  }, []);

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
      className="relative overflow-hidden w-full bg-white scroll-mt-20"
      style={{ fontFamily: "'Georgia', serif" }}
    >

      {/* 💣 HIDDEN SEO H1 (Google ke liye) */}
      <h1 className="sr-only">
        Vision 2047 International Conference IIT Roorkee April 24–26 2026
      </h1>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
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
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 relative">
              
              {/* ✅ SEO ALT FIX */}
              <img
                src={img}
                alt="Vision 2047 Conference at IIT Roorkee campus Uttarakhand India"
                className="w-full h-auto block"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* TEXT OVERLAY (UNCHANGED ✅) */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 md:pb-16 lg:pb-20 text-center px-6 sm:px-10 lg:px-20">

                <div
                  className="flex flex-col items-center gap-3 sm:gap-4 px-8 sm:px-12 md:px-16 py-5 sm:py-7 rounded-2xl"
                  style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)' }}
                >
                  <div className="flex items-center justify-center min-h-[40px] sm:min-h-[56px]">
                    <span className="text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-widest drop-shadow-lg">
                      {typedText}
                    </span>
                    {!isTypingComplete && (
                      <span className="ml-1 inline-block w-[3px] h-[1em] bg-white animate-pulse align-middle" />
                    )}
                  </div>

                  <div
                    className={`transition-all duration-700 ${
                      isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="w-24 h-px bg-white/40 mx-auto mb-3" />
                    <p className="text-white/90 text-base sm:text-xl md:text-2xl lg:text-3xl max-w-[800px] mx-auto leading-relaxed font-medium tracking-wide">
                      📍 Indian Institute of Technology, Roorkee, Uttarakhand
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