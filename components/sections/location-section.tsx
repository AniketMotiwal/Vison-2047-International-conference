'use client';

import Image from 'next/image';

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <Image
          src="/how-toreach.png"
          alt="How to Reach IIT Roorkee - QR Code and Event Photo"
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}