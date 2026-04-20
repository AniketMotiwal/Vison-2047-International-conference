"use client";

export default function Footer() {
  return (
    <footer className="bg-[#05111F] font-serif">
      {/* TOP CARDS */}
      <div className="flex flex-wrap gap-5 px-10 py-9 max-md:px-5">
        <div className="bg-[#0D1F38] border border-yellow-400/40 rounded-xl p-5 flex-1 min-w-[240px] hover:-translate-y-1 transition">
          <h4 className="text-xs tracking-widest text-yellow-400 mb-2 font-semibold">
            Conference
          </h4>
          <p className="text-blue-100 leading-relaxed">
            Vision 2047: Prosperous and Great Bharat 2.0
          </p>
        </div>

        <div className="bg-[#0D1F38] border border-yellow-400/40 rounded-xl p-5 flex-1 min-w-[240px] hover:-translate-y-1 transition">
          <h4 className="text-xs tracking-widest text-yellow-400 mb-2 font-semibold">
            Venue & Date
          </h4>
          <p className="text-blue-100 leading-relaxed">
            📅 April 24 – April 26, 2026 <br />
            📍 IIT Roorkee, Uttarakhand
          </p>
        </div>
      </div>

      {/* BLUE STRIP */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-10 py-4 flex justify-between flex-wrap border-t-2 border-yellow-400 max-md:px-5">
        <span className="text-yellow-300 font-semibold">
          "For a Prosperous and Great Bharat 2.0"
        </span>

        <span className="text-blue-200">
          IIT Roorkee × Swadeshi Shodh Sansthan
        </span>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#020C18] px-10 py-4 flex justify-between flex-wrap items-center gap-3 max-md:px-5">
        <p className="text-blue-300 m-0 text-sm">
          © {new Date().getFullYear()} Vision 2047 Conference
        </p>

        <div className="flex gap-4">
          <a href="#" className="text-blue-400 text-xs hover:text-yellow-400">Privacy</a>
          <a href="#" className="text-blue-400 text-xs hover:text-yellow-400">Terms</a>
          <a href="#" className="text-blue-400 text-xs hover:text-yellow-400">Sitemap</a>
        </div>

        {/* VERY SMALL DESIGN CREDIT */}
        <p className="w-full text-center text-[10px] text-yellow-200/40 mt-2">
          Designed by <span className="opacity-60">Aniket motiwal</span>
        </p>
      </div>
    </footer>
  );
}
