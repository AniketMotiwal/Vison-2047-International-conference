'use client';

export default function Header() {
    return (
        <header className="w-full bg-white border-b-2 border-gradient-to-r from-blue-900 via-orange-500 to-blue-900 shadow-md">
            <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-16">

                    {/* Left Logo - IIT Roorkee */}
                    {/* Left Logo */}
                    <div className="flex-shrink-0 w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                        <img
                            src="/iit-logo.png"
                            className="max-w-full max-h-full object-contain"
                            alt="IIT Roorkee Logo"
                        />
                    </div>

                    {/* Center Content - Main Title */}
                    <div className="flex-1 text-center">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 mb-2 sm:mb-3 tracking-wide">
                            INTERNATIONAL CONFERENCE ON
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-orange-500">
                            Vision 2047: Prosperous and Great Bharat 2.0
                        </h1>
                    </div>

                    {/* Right Logo */}
                    <div className="flex-shrink-0 w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                        <img
                            src="/swadesheader.png"
                            className="object-contain scale-[1.3] lg:scale-[1.5]"
                            alt="Swadeshi Logo"
                        />
                    </div>
                </div>
            </div>
            {/* Gradient Divider Line */}
            <div className="h-1 bg-gradient-to-r from-blue-900 via-orange-500 via-yellow-400 to-blue-900"></div>
        </header>
    );
}
