import Image from 'next/image';

export default function OrganizingCommittee() {
  return (
    <section id="organizing-committee" className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto flex justify-center">
        {/* Organising Committee Screenshot Image */}
        <div className="relative w-full md:w-[78%] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202026-04-01%2022-06-40-0D3kdx6Kak5y6n1ZGELnyWghC6keTL.png"
            alt="Organising Committee - Conference organizers and secretaries"
            width={1200}
            height={1400}
            className="w-full h-auto object-contain brightness-105 contrast-105"
          />
        </div>
      </div>
    </section>
  );
}
