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
  // Image slider state and images array
  const images: string[] = [
    '/iit.png',

  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto-slide effect for image slider
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

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

    // Init nodes
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
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 140, 200, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(120, 160, 210, 0.55)';
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

  // Scroll parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #f0f5ff 0%, #ffffff 45%, #fffbf0 100%)',
        minHeight: '100vh',
        fontFamily: "'Georgia', 'Times New Roman', serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Constellation Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Soft radial glow blobs */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(173,216,255,0.35) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateX(${mousePos.x * 0.015}px) translateY(${mousePos.y * 0.01}px)`,
        transition: 'transform 0.3s ease-out',
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-60px',
        width: '340px',
        height: '340px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,220,130,0.28) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translateX(${-mousePos.x * 0.01}px)`,
        transition: 'transform 0.3s ease-out',
      }} />

      {/* Cursor particles */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,184,28,0.95), rgba(217,119,6,0.4))',
            boxShadow: '0 0 10px rgba(255,184,28,0.7)',
            pointerEvents: 'none',
            zIndex: 999,
            animation: `floatUp ${p.duration}ms ease-out forwards`,
          }}
        />
      ))}

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '780px',
        margin: '0 auto',
        padding: '48px 24px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>

        {/* Logos Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}>
          {/* IIT Roorkee Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,61,122,0.2)',
              overflow: 'hidden',
            }}>
              <img src="/iit-logo.png" style={{ width: '98%', height: '98%', objectFit: 'contain' }} alt="IIT Roorkee" loading="eager" />
            </div>
            <span style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#003D7A',
              textAlign: 'center',
            }}>IIT ROORKEE</span>
          </div>

          {/* Divider */}
          <div style={{
            width: '1px',
            height: '70px',
            background: 'linear-gradient(to bottom, transparent, #ddd, transparent)',
          }} />

          {/* Swadeshi Logo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(217,119,6,0.2)',
              overflow: 'hidden',
            }}>
              <img src="/swadeshi-logo.png" style={{ width: '98%', height: '98%', objectFit: 'contain' }} alt="Swadeshi" loading="eager" />
            </div>
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#D97706',
              textAlign: 'center',
            }}>स्वदेशी संस्थान</span>
          </div>
        </div>

        {/* "International Conference on" badge */}
        <div style={{
          border: '2px solid #222',
          borderRadius: '4px',
          padding: '6px 28px',
          marginBottom: '24px',
          background: 'rgba(255,255,255,0.7)',
        }}>
          <p style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: '700',
            color: '#111',
            letterSpacing: '0.03em',
            fontFamily: "'Georgia', serif",
          }}>
            International Conference on
          </p>
        </div>

        {/* Main Title */}
        <h1 style={{
          margin: '0 0 16px',
          fontSize: 'clamp(32px, 6vw, 58px)',
          fontWeight: '900',
          color: '#111',
          textAlign: 'center',
          lineHeight: 1.15,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          letterSpacing: '-0.01em',
        }}>
          Vision 2047: Prosperous<br />and Great Bharat 2.0
        </h1>

        {/* Date row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
        }}>
          <div style={{ height: '2px', width: '80px', background: '#222' }} />
          <p style={{
            margin: 0,
            fontSize: '16px',
            color: '#333',
            fontFamily: "'Georgia', serif",
            letterSpacing: '0.04em',
          }}>
            April 24 – April 26, 2026
          </p>
          <div style={{ height: '2px', width: '80px', background: '#222' }} />
        </div>

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '36px',
        }}>
          <span style={{ fontSize: '18px' }}>📍</span>
          <p style={{
            margin: 0,
            fontSize: '16px',
            color: '#444',
            fontFamily: "'Georgia', serif",
            textAlign: 'center',
          }}>
            Indian Institute of Technology,<br />Roorkee, Uttarakhand
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '13px 36px',
              background: 'linear-gradient(135deg, #FFB81C, #E6A80C)',
              color: '#003D7A',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(255,184,28,0.45)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,184,28,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(255,184,28,0.45)';
            }}
          >
            Register Now
          </a>
          <button
            style={{
              padding: '13px 36px',
              border: '2px solid #003D7A',
              color: '#003D7A',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '16px',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#003D7A';
              (e.currentTarget as HTMLElement).style.color = 'white';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = '#003D7A';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* IIT Roorkee Building Image - Bottom */}
    <div style={{
  position: 'relative',
  zIndex: 1,
  width: '100%',
  overflow: 'hidden',
  margin: '0 auto 0',
}}>
  {/* Slides wrapper */}
  <div style={{
    display: 'flex',
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.6s ease-in-out',
    width: '100%',
  }}>
    {images.map((img: string, i: number) => (
      <img
        key={i}
        src={img}
        alt={`Slide ${i + 1}`}
        style={{
          width: '100%',
          height: '420px',
          objectFit: 'cover',
          objectPosition: 'center 55%',
          flexShrink: 0,
        }}
      />
    ))}
  </div>

  {/* Dots */}
  <div style={{
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  }}>
    {images.map((_: string, i: number) => (
      <div
        key={i}
        onClick={() => setCurrentSlide(i)}
        style={{
          width: i === currentSlide ? '20px' : '8px',
          height: '8px',
          borderRadius: '4px',
          background: i === currentSlide ? '#FFB81C' : 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
      />
    ))}
  </div>
</div> 

      <style>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-110px) scale(0); }
        }
        @media (max-width: 600px) {
          #hero h1 { font-size: 28px !important; }
        }
      `}</style>
    </section>
  );
}
