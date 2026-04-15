'use client';
import { conferenceData } from '@/lib/conference-data';
import Script from "next/script";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      {/* 💣 HIDDEN SEO CONTENT (Google ke liye) */}
      <h2 className="sr-only">
        About Vision 2047 International Conference IIT Roorkee India
      </h2>

      <p className="sr-only">
        Vision 2047 International Conference at IIT Roorkee is a major academic
        and research conference in India focusing on AI, governance, sustainability,
        innovation and Bharat development roadmap 2047.
      </p>

      {/* 💣 STRUCTURED DATA (SEO BOOST) */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Vision 2047 International Conference",
            description:
              "International Conference on Vision 2047 at IIT Roorkee focusing on science, governance and innovation.",
            location: {
              "@type": "Place",
              name: "IIT Roorkee",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Roorkee",
                addressRegion: "Uttarakhand",
                addressCountry: "India"
              }
            }
          }),
        }}
      />

      {/* 🔥 Heading (UNCHANGED) */}
      <div className="text-center mb-16 px-4">
        <div className="inline-block bg-gradient-to-r from-[#FFD124] to-[#004178] px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider">
            ABOUT THE CONFERENCE
          </h2>
        </div>
      </div>

      {/* 🔥 FULL WIDTH CONTENT */}
      <div className="w-full px-2 md:px-6">
        {/* 🔥 About Description Box - COMPLETE TEXT as provided */}
        <div className="mb-20 relative w-full">
          <div className="relative border-2 border-dashed border-gray-400 p-6 md:p-12 bg-gray-50 rounded-lg w-full">
            <div className="absolute -top-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -top-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -bottom-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>
            <div className="absolute -bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>

            {/* Paragraph 1 */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
              <span className="text-blue-700 font-semibold">
                International Conference on Vision@2047: A Prosperous and Great Bharat 2.0
              </span> — April 24–26, 2026, jointly organised by IIT Roorkee, Swadeshi Shodh Sansthan (SSS, New Delhi), and a hundred-plus premier institutions across Bharat and the world — is a landmark convergence of civilizational wisdom, frontier science, and transformative statecraft. Anchored in Integral Humanism and the eternal philosophy of Vasudhaiva Kutumbakam, this conference pioneers futuristic technologies and an evidence-based civilizational blueprint for Bharat's emergence as humanity's most developed, self-reliant, and visionary nation — where every one of Bharat's vast population becomes a sovereign, empowered contributor to national and global prosperity.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
              Eight transformative thematic tracks compose a breathtaking civilizational masterplan:
            </p>

            {/* Points 1 to 8 - Listed exactly as provided */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">1.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">A Young Dynamic Population</span> unleashing the world's greatest demographic energy for nation-building ensuring dignified self-reliance for every citizen and digital sovereignty for future generation
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">2.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">A Fully Employed Bharat</span> reimagining cooperative, knowledge-driven livelihoods, startups, and entrepreneurship
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">3.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">The World's Largest Economy</span> redesigning global financial architecture through indigenous-to-ultramodern manufacturing
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">4.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">An Impenetrable Security System</span> forging full-spectrum strategic dominance from earth to air and ocean depths
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">5.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">A Leader in Science and Technology</span> achieving quantum, biological, and energy sovereignty for all of humanity
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">6.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">An Environmentally Friendly Bharat</span> weaving the water-energy-food nexus into a net-zero civilizational promise for future generation
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">7.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">A Strong Advocate of Global Brotherhood</span> projecting the Vishwaguru vision - leading climate justice, digital equity, pharmaceutical access, and peaceful multilateral governance for the Global South and the entire world family
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-blue-700 text-lg">8.</span>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                  <span className="font-semibold">A Proponent of High Moral Values</span> building a spiritually grounded, casteless, and harmonious nationhood rooted in Satya, Ahinsa, and universal human welfare
                </p>
              </div>
            </div>

            {/* Paragraph 3 - Call to Action inside the box */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-serif mt-6 pt-4 border-t-2 border-gray-300">
              <span className="font-bold text-blue-900">It is a Call to Action</span> to redesign India's future through the convergence of indigenous wisdom, cutting-edge innovation, and inclusive human flourishing, positioning Vikas ka Bharatiya Pratiman (Bhartiya Model of Development) @2047 as a model for the entire world.
            </p>
          </div>
        </div>

        {/* 🔥 Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20" id="mission">


            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6 uppercase">
              {conferenceData.vision.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify font-serif">
              {conferenceData.vision.description}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border-l-4 border-blue-900 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase">
              {conferenceData.mission.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify font-serif">
              {conferenceData.mission.description}
            </p>
          </div>

        
        </div>

        {/* 🔥 Objectives */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 md:p-12 border border-blue-700 mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 uppercase">
            OBJECTIVES
          </h3>

          <div className="space-y-5">
            {conferenceData.objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-sm font-bold">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-white text-lg leading-relaxed text-justify font-serif">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}