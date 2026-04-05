'use client';

import { conferenceData } from '@/lib/conference-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#4a3f83] via-[#6b4a8f] to-[#d4454d] px-12 py-4 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                ABOUT THE CONFERENCE
              </h2>
            </div>
          </div>
        </div>

        {/* About Description with Decorative Border */}
    
        {/* About Description with Decorative Border */}
        <div className="mb-16 relative">
          <div className="relative border-2 border-dashed border-gray-400 p-8 md:p-12 bg-gray-50">
            {/* Decorative Circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-900 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-900 rounded-full"></div>

            <p className="text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6 text-justify font-serif">
              The <span className="text-blue-700 font-semibold">"International Conference on Vision@2047: A Prosperous and Great Bharat 2.0"</span> — April 24–26, 2026, jointly organised by IIT Roorkee, Swadeshi Shodh Sansthan (SSS, New Delhi), and a hundred-plus premier institutions across Bharat and the world — is a landmark convergence of civilizational wisdom, frontier science, and transformative statecraft. Anchored in Integral Humanism and the eternal philosophy of Vasudhaiva Kutumbakam, this conference pioneers futuristic technologies and an evidence-based civilizational blueprint for Bharat's emergence as humanity's most developed, self-reliant, and visionary nation — where every one of Bharat's vast populations becomes a sovereign, empowered contributor to national and global prosperity.
            </p>

            <p className="text-base md:text-lg lg:text-lg text-gray-700 leading-relaxed text-justify font-serif mb-6">
              Eight transformative thematic tracks compose a breathtaking civilizational masterplan:
            </p>

            <div className="space-y-3">
              {[
                '1. A Young Dynamic Population unleashing the world\'s greatest demographic energy for nation-building ensuring dignified self-reliance for every citizen and digital sovereignty future generation',
                '2. A Fully Employed Bharat reimagining cooperative, knowledge-driven livelihoods, startups, and entrepreneurship',
                '3. The World\'s Largest Economy redesigning global financial architecture through indigenous-to-ultramodern manufacturing',
                '4. An Impenetrable Security System forging full-spectrum strategic dominance from earth to air and ocean depths',
                '5. A Leader in Science and Technology achieving quantum, biological, and energy sovereignty for all of humanity',
                '6. An Environmentally Friendly Bharat weaving the water-energy-food nexus into a net-zero civilizational promise for future generation',
                '7. A Strong Advocate of Global Brotherhood projecting the Vishwaguru vision - leading climate justice, digital equity, pharmaceutical access, and peaceful multilateral governance for the Global South and the entire world family',
                '8. A Proponent of High Moral Values building a spiritually grounded, casteless, and harmonious nationhood rooted in Satya, Ahimsa, and universal human welfare.',
              ].map((track, idx) => (
                <p key={idx} className="text-sm md:text-base lg:text-base text-gray-700 leading-relaxed text-justify font-serif">
                  {track}
                </p>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <p className="text-base md:text-lg lg:text-lg text-gray-800 leading-relaxed text-justify font-serif mt-8 p-6 bg-blue-50 border-l-4 border-blue-900">
            <span className="font-bold text-blue-900">It is a Call to Action</span> to redesign India's future through the convergence of indigenous wisdom, cutting-edge innovation, and inclusive human flourishing, positioning <span className="font-semibold text-blue-700">Vikas ka Bharatiya Pratiman (Bhartiya Model of Development) @2047</span> as a model for the entire world.
          </p>
        </div>
     
        {/* Mission, Vision, Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-bold text-blue-900 mb-6 tracking-wide uppercase">{conferenceData.mission.title}</h3>
            <p className="text-gray-700 leading-relaxed text-base font-serif">
              {conferenceData.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-bold text-yellow-600 mb-6 tracking-wide uppercase">{conferenceData.vision.title}</h3>
            <p className="text-gray-700 leading-relaxed text-base font-serif">
              {conferenceData.vision.description}
            </p>
          </div>
        </div>

        {/* Full Objectives List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-10 border border-blue-700 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 tracking-wide uppercase">OBJECTIVES</h3>
          <div className="space-y-4">
            {conferenceData.objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-white text-base leading-relaxed font-serif">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
