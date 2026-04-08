import Image from 'next/image';

export default function PatronsSection() {
  return (
    <section id="patrons" className="py-8 md:py-12">

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-8">
        PATRONS
      </h2>

      {/* Full Width Image (Responsive) */}
      <div className="w-full">
        <Image
          src="/patrons/Patrons2.png"
          alt="Conference Patrons"
          width={1920}
          height={1400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mt-12 mb-8">
        ADVISORY BOARD
      </h2>
      {/* Advisory Section */}
      <div className="w-full mt-8 px-2 md:px-6">
        <Image
          src="/advisory/ADVISORY BOARD .png"
          alt="Advisory Board"
          width={1200}
          height={1400}
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}