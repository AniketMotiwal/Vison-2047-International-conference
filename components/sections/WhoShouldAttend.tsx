'use client';

export default function WhoShouldAttend() {
  return (
    <section
      id="who-should-attend"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white"
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003D7A] mb-6">
            Who Should Attend?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify font-serif">
            Abstract submission is open to all the academicians, PhD scholars,
            students, scientists, researchers, policymakers, public representatives,
            lawyers, youth leaders, industry pioneers, and every inspired citizen
            of India - for this Shodh-Manthan is the sovereign calling of every
            Bharatiya who chooses to dream, deliberate, and decide the destiny
            of the nation.
          </p>
        </div>

        {/* Why Attend */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#003D7A] mb-14 text-center">
            Why Attend?
          </h3>

          {/* 🔥 FIXED GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 w-full">
            
            {/* LEFT */}
            <div className="text-left max-w-xl mx-auto md:mx-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-widest">
                Abstract Types
              </p>

              <div className="space-y-7">
                {[
                  {
                    title: 'Research Papers',
                    desc: 'Original research findings and academic contributions',
                    color: '#003D7A'
                  },
                  {
                    title: 'Policy Briefs',
                    desc: 'Actionable policy recommendations and government insights',
                    color: '#FFB81C'
                  },
                  {
                    title: 'Case Studies',
                    desc: 'Real-world implementations and success stories',
                    color: '#003D7A'
                  },
                  {
                    title: 'Innovation Showcases',
                    desc: 'Cutting-edge solutions and technological advances',
                    color: '#FFB81C'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="pl-5 border-l-4 transition-all duration-300 hover:translate-x-1"
                    style={{ borderColor: item.color }}
                  >
                    <p className="font-semibold text-gray-800 text-base sm:text-lg mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-left max-w-xl mx-auto md:mx-0">
              <p className="text-xs sm:text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-widest">
                Benefits
              </p>

              <div className="space-y-6">
                {[
                  'Contribute to national discourse on future of India',
                  'Network with 1000+ thought leaders and innovators',
                  'Gain visibility for your research and ideas',
                  'Collaborate on transformative initiatives',
                  'Access published proceedings and resources'
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start group"
                  >
                    <span
                      className={`font-bold text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
                        i % 2 === 0 ? 'text-[#003D7A]' : 'text-[#FFB81C]'
                      }`}
                    >
                      →
                    </span>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}