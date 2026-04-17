'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ================= COUNTDOWN ================= */
function useCountdown(targetDate: Date) {
  const targetMs = useRef(targetDate.getTime());

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = targetMs.current - Date.now();

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/* ================= EARTH ================= */
function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  const texture = new THREE.TextureLoader().load(
    'https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg'
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

/* ================= GLOW ================= */
function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshBasicMaterial
        color="#4fa3ff"
        transparent
        opacity={0.2}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ================= HOTSPOTS ================= */
function Marker({ lat, lng }: { lat: number; lng: number }) {
  const radius = 2;

  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial color="orange" emissive="orange" />
    </mesh>
  );
}

/* ================= GLOBE ================= */
function Globe() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />

        <Stars radius={100} depth={50} count={3000} factor={3} />

        <Earth />
        <Atmosphere />

        {/* HOTSPOTS */}
        <Marker lat={28.8295} lng={77.9250} />
        <Marker lat={40.7128} lng={-74.0060} />
        <Marker lat={51.5074} lng={-0.1278} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

/* ================= CARD TILT ================= */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.05)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    }
  };

  return { ref, handleMove, reset };
}

/* ================= MAIN ================= */
export default function Page() {
  const target = new Date('2026-04-24T09:00:00+05:30');
  const { days, hours, minutes, seconds } = useCountdown(target);

  const pad = (n: number) => String(n).padStart(2, '0');

  const card1 = useTilt();
  const card2 = useTilt();
  const card3 = useTilt();

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-orange-400 leading-tight tracking-tight mb-4">
            VISION 2047
            <span className="block text-white mt-2">
              A Prosperous Bharat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-lime-400 font-medium tracking-wide">
            Great Bharat 2.0
          </p>
        </div>
        {/* 🌍 GLOBE */}
        <Globe />

        {/* COUNTDOWN */}
        <div className="flex gap-4 mt-10">
          {[days, hours, minutes, seconds].map((v, i) => {
            const labels = ['Days', 'Hours', 'Min', 'Sec'];
            return (
              <div key={i} className="bg-white/10 px-4 py-2 rounded-lg">
                <div className="text-xl font-bold">{pad(v)}</div>
                <div className="text-xs">{labels[i]}</div>
              </div>
            );
          })}
        </div>

      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div
            ref={card1.ref}
            onMouseMove={card1.handleMove}
            onMouseLeave={card1.reset}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-orange-300">Conference Venue</h3>
            <p className="text-sm mt-2">
              Hosted at IIT Roorkee, bringing innovators together.
            </p>
            <p className="text-sm mt-3 opacity-60">
              स्थान: आईआईटी रुड़की
            </p>
          </div>

          {/* CARD 2 */}
          <div
            ref={card2.ref}
            onMouseMove={card2.handleMove}
            onMouseLeave={card2.reset}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-orange-300">Organized By</h3>
            <p className="text-sm mt-2">
              IIT Roorkee and Swadeshi Shodh Sansthan
            </p>
            <p className="text-sm mt-3 opacity-60">
              आयोजक: आईआईटी रुड़की एवं स्वदेशी शोध संस्थान
            </p>
          </div>

          {/* CARD 3 */}
          <div
            ref={card3.ref}
            onMouseMove={card3.handleMove}
            onMouseLeave={card3.reset}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <h3 className="text-orange-300">Venue Details</h3>
            <p className="text-sm mt-2">
              Convocation Hall and MAC Auditorium
            </p>
            <p className="text-sm mt-3 opacity-60">
              स्थान: दीक्षांत भवन एवं मैक ऑडिटोरियम
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}