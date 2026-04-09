import Image from 'next/image';

export default function PatronsSection() {
  return (
    <>
      {/* Patrons Section */}
      <section id="patrons" className="py-8 md:py-12 scroll-mt-20">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-8">
          PATRONS
        </h2>
        <div className="w-full">
          <Image
            src="/patrons/Patrons (2).png"
            alt="Conference Patrons"
            width={1920}
            height={1400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Advisory Board Section */}
      <section id="advisory-board" className="py-8 md:py-12 scroll-mt-20">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-8">
          ADVISORY BOARD
        </h2>
        <div className="w-full px-2 md:px-6">
          <Image
            src="/advisory/ADVISORY BOARD .png"
            alt="Advisory Board"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </>
  );
}