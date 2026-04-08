'use client';

export default function Header() {
  return (
    <header className="relative w-full bg-white shadow-md py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 overflow-hidden">

      {/* LEFT LOGO - Bigger for 2560px */}
      <div className="absolute left-3 sm:left-4 md:left-6 lg:left-8 xl:left-12 2xl:left-20 top-1/2 -translate-y-1/2 z-10">
        <img
          src="/iit-logo.png"
          alt="IIT Logo"
          className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-40 object-contain"
        />
      </div>

      {/* RIGHT LOGO - Bigger for 2560px */}
      <div className="absolute right-3 sm:right-4 md:right-6 lg:right-8 xl:right-12 2xl:right-20 top-1/2 -translate-y-1/2 z-10">
        <img
          src="/swadesheader.png"
          alt="Swades Header Logo"
          className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-44 object-contain"
        />
      </div>

      {/* CENTER TEXT - More side spacing on 2560px */}
      <div className="text-center px-12 xs:px-16 sm:px-20 md:px-28 lg:px-36 xl:px-48 2xl:px-64">
        
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold text-blue-900 mb-1 sm:mb-2 md:mb-3 tracking-wide">
          INTERNATIONAL CONFERENCE ON
        </p>

        <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-extrabold text-orange-500 leading-tight sm:whitespace-normal md:whitespace-nowrap">
          Vision 2047: Prosperous and Great Bharat 2.0
        </h1>

      </div>

      {/* GRADIENT LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] md:h-[4px] lg:h-[5px] xl:h-[6px] bg-gradient-to-r from-blue-900 via-orange-500 via-yellow-400 to-blue-900"></div>

    </header>
  );
}