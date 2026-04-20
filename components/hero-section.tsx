


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
      <div className="relative w-full overflow-hidden min-h-[56vh] max-[360px]:min-h-[52vh] sm:min-h-[70vh] md:min-h-0">
        <div
          className="flex w-full transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 relative min-h-[56vh] max-[360px]:min-h-[52vh] sm:min-h-[70vh] md:min-h-0">

              {/* ✅ FINAL BALANCED BRIGHTNESS */}
              <img
                src={img}
                alt="Vision 2047 Conference IIT Roorkee"
                className="w-full h-[56vh] max-[360px]:h-[52vh] sm:h-[70vh] md:h-auto object-cover object-center block"
                // style={{ filter: 'brightness(1.2) contrast(1.1) saturate(1.05)' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-3 max-[360px]:pb-2 sm:pb-8 md:pb-10 text-center px-2 sm:px-4">
                <div className="bg-black/40 backdrop-blur-md px-3 max-[360px]:px-2.5 sm:px-6 py-2.5 max-[360px]:py-2 sm:py-5 rounded-xl sm:rounded-2xl max-w-5xl w-[95%] max-[360px]:w-[97%] sm:w-full">

                  {/* Typing */}
                  <div className="flex justify-center items-center min-h-[32px] max-[360px]:min-h-[28px] sm:min-h-[50px]">
                    <span className="text-white font-bold text-lg max-[360px]:text-base sm:text-2xl md:text-4xl lg:text-5xl leading-tight break-words">
                      {typedText}
                    </span>
                    {!isTypingComplete && (
                      <span className="ml-1 w-[2px] h-[1.2em] bg-white animate-pulse" />
                    )}
                  </div>

                  {/* Location */}
                  <div className={`transition-all duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-14 max-[360px]:w-12 sm:w-20 h-px bg-white/40 mx-auto my-2 max-[360px]:my-1.5 sm:my-3" />
                    <p className="w-full mx-auto overflow-hidden text-ellipsis text-white text-xs max-[360px]:text-[11px] sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-[360px]:leading-snug whitespace-nowrap">
                      📍 Indian Institute of Technology Roorkee, Roorkee, Uttarakhand, India
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