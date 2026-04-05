'use client';

export default function WhoShouldAttend() {
  return (
    <section id="who-should-attend" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#003D7A] mb-8">
          Who Should Attend?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-4xl">
          Abstract submission is open to all the academicians, PhD scholars, students, scientists, researchers, policymakers, public representatives, lawyers, youth leaders, industry pioneers, and every inspired citizen of India - for this Shodh-Manthan is the sovereign calling of every Bharatiya who chooses to dream, deliberate, and decide the destiny of the nation.
        </p>

        {/* Why Attend Section - Tree Format */}
        <div>
          <h3 className="text-2xl font-semibold text-[#003D7A] mb-10">Why Attend?</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <p className="text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-wide">Abstract Types</p>
              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-[#003D7A]">
                  <p className="font-semibold text-gray-800 text-lg mb-2">Research Papers</p>
                  <p className="text-gray-600 text-base leading-relaxed">Original research findings and academic contributions</p>
                </div>
                <div className="pl-4 border-l-4 border-[#FFB81C]">
                  <p className="font-semibold text-gray-800 text-lg mb-2">Policy Briefs</p>
                  <p className="text-gray-600 text-base leading-relaxed">Actionable policy recommendations and government insights</p>
                </div>
                <div className="pl-4 border-l-4 border-[#003D7A]">
                  <p className="font-semibold text-gray-800 text-lg mb-2">Case Studies</p>
                  <p className="text-gray-600 text-base leading-relaxed">Real-world implementations and success stories</p>
                </div>
                <div className="pl-4 border-l-4 border-[#FFB81C]">
                  <p className="font-semibold text-gray-800 text-lg mb-2">Innovation Showcases</p>
                  <p className="text-gray-600 text-base leading-relaxed">Cutting-edge solutions and technological advances</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-wide">Benefits</p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <span className="text-[#003D7A] font-bold text-xl flex-shrink-0 pt-0.5">→</span>
                  <p className="text-gray-700 text-base leading-relaxed">Contribute to national discourse on future of India</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#FFB81C] font-bold text-xl flex-shrink-0 pt-0.5">→</span>
                  <p className="text-gray-700 text-base leading-relaxed">Network with 1000+ thought leaders and innovators</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#003D7A] font-bold text-xl flex-shrink-0 pt-0.5">→</span>
                  <p className="text-gray-700 text-base leading-relaxed">Gain visibility for your research and ideas</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#FFB81C] font-bold text-xl flex-shrink-0 pt-0.5">→</span>
                  <p className="text-gray-700 text-base leading-relaxed">Collaborate on transformative initiatives</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-[#003D7A] font-bold text-xl flex-shrink-0 pt-0.5">→</span>
                  <p className="text-gray-700 text-base leading-relaxed">Access published proceedings and resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
