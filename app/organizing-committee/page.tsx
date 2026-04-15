import Image from 'next/image';

export default function OrganizingCommitteePage() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <section className="w-full px-4 md:px-8">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-12">
          ORGANIZING COMMITTEE
        </h1>
        <div className="w-full">
          <Image
            src="/committee/ORGANISING COMMITTEE Final.png"
            alt="Organizing Committee"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>
    </div>
  );
}
