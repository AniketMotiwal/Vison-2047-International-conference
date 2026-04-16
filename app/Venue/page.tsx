'use client';

import Image from 'next/image';

export default function VenuePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <Image
          src="/venue-bg.jpg" // 👈 apni image yahan daal
          alt="IIT Roorkee Venue"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Venue
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Convocation Hall, IIT Roorkee
          </p>
        </div>
      </section>

      {/* 📍 VENUE DETAILS */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/iit-roorkee.jpg" // 👈 apni image
              alt="Convocation Hall IIT Roorkee"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Convocation Hall
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The conference will be held at the prestigious Convocation Hall of IIT Roorkee,
              known for hosting major academic and international events. The venue offers
              world-class infrastructure and a vibrant academic environment.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p><span className="font-semibold">📍 Location:</span> IIT Roorkee, Uttarakhand, India</p>
              <p><span className="font-semibold">📅 Date:</span> 24–26 April 2026</p>
              <p><span className="font-semibold">🎓 Event:</span> Vision 2047 Conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ MAP SECTION */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://maps.google.com/maps?q=IIT%20Roorkee&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

      {/* ✨ CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Join Us at IIT Roorkee
        </h3>

        <p className="mt-3 text-gray-200 max-w-xl mx-auto">
          Experience a world-class academic environment and connect with global experts.
        </p>

        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
          Register Now
        </button>
      </section>

    </div>
  );
}