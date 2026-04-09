'use client';

import Image from 'next/image';

export default function LocationSection() {
  return (
    <section id="location" className="w-screen overflow-hidden scroll-mt-20">
      <Image
        src="/HOW TO REACH IIT ROORKEE (1).png"
        alt="How to Reach IIT Roorkee"
        width={1920}
        height={800}
        className="w-screen h-auto object-cover"
        priority
      />
    </section>
  );
}