'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ isLoading = true }: { isLoading?: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 25;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#003D7A] via-[#004A9E] to-[#D97706] z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, rgba(255,184,28,0.6) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15" style={{
          background: 'radial-gradient(circle, rgba(217,119,6,0.5) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10" style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite'
        }} />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl w-full px-4">
        {/* Dual Logos */}
        <div className="flex items-center justify-center gap-8 md:gap-20 w-full">
          {/* IIT Roorkee Logo */}
          <div className="relative" style={{
            animation: 'float 5s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-2xl" />
            <img 
              src="/iit-logo.png" 
              alt="IIT Roorkee" 
              className="w-48 md:w-56 h-48 md:h-56 object-contain drop-shadow-2xl relative z-10"
            />
          </div>

          {/* Swadeshi Logo */}
          <div className="relative" style={{
            animation: 'float 5s ease-in-out infinite reverse'
          }}>
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-2xl" />
            <img 
              src="/swadeshi-logo.png" 
              alt="Swadeshi Shodh Sansthan" 
              className="w-48 md:w-56 h-48 md:h-56 object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Main Text */}
        <div className="text-center space-y-3">
          <p className="text-lg md:text-2xl text-[#FFB81C] font-bold drop-shadow-md tracking-widest">
            2nd Annual International Conference
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Vision 2047
          </h1>
          <p className="text-2xl md:text-3xl text-[#FFB81C] font-semibold drop-shadow-md">
            Prosperous and Great Bharat 2.0
          </p>
          <p className="text-white/90 text-base md:text-lg tracking-widest font-light">
            International Conference at IIT Roorkee
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md space-y-3">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-[#FFB81C] via-[#D97706] to-[#FFB81C] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-center text-white/80 text-sm font-medium">
            Loading... {Math.min(Math.round(progress), 100)}%
          </div>
        </div>

        {/* Loading indicator dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              style={{
                animation: `pulse 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
