import Image from 'next/image';

export default function PatronsSection() {
  return (
    <section id="patrons" className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Patrons Screenshot Image */}
        <div className="relative w-full md:w-[78%] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <Image
            src="/patrons/Patrons.png"
            alt="Conference Patrons - Distinguished leaders and academics"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain brightness-105 contrast-105"
            priority
          />
        </div>

        {/* Advisory Board Screenshot Image */}
        <div className="relative w-full md:w-[78%] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <Image
            src="/advisory/Advisory.png"
            alt="Advisory Board - Conference advisors and committee members"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain brightness-105 contrast-105"
          />
        </div>
      </div>
    </section>
  );
}
