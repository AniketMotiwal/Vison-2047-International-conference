import Image from 'next/image';

export default function PatronsPage() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <section className="w-full px-4 md:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-12">
          PATRONS
        </h1>
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
    </div>
  );
}
