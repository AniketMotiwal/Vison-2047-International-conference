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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003D7A] mb-8">
            Who Should Attend?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.9] max-w-5xl mx-auto text-justify font-serif tracking-wide">
            Abstract submission is open to academicians, PhD scholars, students,
            scientists, researchers, policymakers, public representatives,
            lawyers, youth leaders, industry pioneers, and every inspired
            citizen of India. 
            <br /><br />
            Shodh-Manthan is a sovereign call to every Bharatiya who dares to
            dream, deliberate, and actively shape the destiny of the nation.
            All interested participants are warmly invited to submit their
            abstracts through the registration link provided below.
          </p>
        </div>

        {/* Why Attend */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#003D7A] mb-16 text-center">
            Why Attend?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 xl:gap-32">

            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-widest">
                Abstract Types
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: 'Research Papers',
                    desc: 'Present original research findings and scholarly contributions.',
                    color: '#003D7A'
                  },
                  {
                    title: 'Policy Briefs',
                    desc: 'Share actionable recommendations and governance insights.',
                    color: '#FFB81C'
                  },
                  {
                    title: 'Case Studies',
                    desc: 'Highlight real-world implementations and success stories.',
                    color: '#003D7A'
                  },
                  {
                    title: 'Innovation Showcases',
                    desc: 'Demonstrate cutting-edge ideas and technological advancements.',
                    color: '#FFB81C'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="pl-6 border-l-4 transition-all duration-300 hover:translate-x-1"
                    style={{ borderColor: item.color }}
                  >
                    <p className="font-semibold text-gray-900 text-lg mb-1">
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
            <div className="max-w-xl">
              <p className="text-xs sm:text-sm font-semibold text-[#FFB81C] uppercase mb-6 tracking-widest">
                Benefits
              </p>

              <div className="space-y-7">
                {[
                  'Contribute meaningfully to national discourse on the future of India.',
                  'Network with 1000+ thought leaders, innovators, and policymakers.',
                  'Gain visibility and recognition for your ideas and research.',
                  'Collaborate on impactful and transformative initiatives.',
                  'Access published proceedings and valuable academic resources.'
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start group"
                  >
                    <span
                      className={`font-bold text-xl flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${
                        i % 2 === 0 ? 'text-[#003D7A]' : 'text-[#FFB81C]'
                      }`}
                    >
                      →
                    </span>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-[1.8]">
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