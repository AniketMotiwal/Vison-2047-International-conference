'use client';

import Image from 'next/image';



export default function RegistrationSection() {
  return (
    <section id="registration" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration & Payment</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        <Image 
          src="/Registration.png" 
          alt="Registration QR Code"
          width={1000}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}