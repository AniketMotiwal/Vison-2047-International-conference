import Image from 'next/image';

export default function OrganizingCommittee() {
  return (
    <section id="organizing-committee" className="py-8 md:py-12 scroll-mt-20">

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-8">
        ORGANIZING COMMITTEE
      </h2>

      {/* Full Width Image */}
      <div className="w-full">
        <Image
          src="/committee/ORGANISING COMMITTEE Final.png"
          alt="Organising Committee"
          width={1200}
          height={1400}
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}