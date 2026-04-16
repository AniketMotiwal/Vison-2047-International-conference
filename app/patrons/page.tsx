'use client';
import Image from 'next/image';
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

export default function PatronsPage() {
  return (
    <>
      <Header />
      <Sidebar />
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

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center pt-8 mt-12 px-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          ⬆️ Back to Top
        </button>
        <a
          href="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          🏠 Back to Homepage
        </a>
      </div>
      </div>
      <Footer />
    </>
  );
}
