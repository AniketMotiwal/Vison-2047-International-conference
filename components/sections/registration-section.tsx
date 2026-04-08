'use client';

import Image from 'next/image';

export default function RegistrationSection() {
  return (
    <section id="registration" className="py-16 md:py-24 px-0 bg-white">
      <div className="w-full">
    

        <Image
          src="/Links.png"
          alt="Registration QR Code"
          width={2560}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {/* Payment Steps & Notes - Full width with same color coding */}
        <div className="w-full mt-12 px-4 md:px-8 lg:px-12 xl:px-16">
          {/* Payment Steps */}
          <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 shadow-lg mb-8 border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 flex items-center gap-3">
              <span className="text-3xl md:text-4xl">💰</span> PAYMENT STEPS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-base font-bold mt-0.5">1</span>
                <p className="text-gray-800 text-lg md:text-xl">In Payment Category, select <span className="font-semibold text-blue-700">"Conference/Workshop/Other Charge"</span></p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-base font-bold mt-0.5">2</span>
                <p className="text-gray-800 text-lg md:text-xl">Conference/Workshop code select <span className="font-semibold text-blue-700">"CONFR 179 MID"</span></p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-base font-bold mt-0.5">3</span>
                <p className="text-gray-800 text-lg md:text-xl">Category – <span className="font-semibold text-blue-700">"Individual"</span></p>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-base font-bold mt-0.5">4</span>
                <p className="text-gray-800 text-lg md:text-xl">Fill other details and make the payment</p>
              </div>
            </div>
          </div>

          {/* Notes - using orange/amber from screenshot gradient */}
          <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 border-l-8 border-orange-500 rounded-r-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-800 mb-6 flex items-center gap-3">
              <span className="text-3xl md:text-4xl">📌</span> NOTE:
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3 text-lg md:text-xl">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>All authors and co-authors must register and pay the fee individually.</span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>The Fee includes charges for refreshments, lunch, and a conference kit. The fee once paid, will not be refunded.</span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>Presentation certificates will be given to all the registered authors. The name of the presenting author must be underlined.</span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>Publication fee selected research papers in journals will be informed. (To be paid only after the intimation of the review committee for acceptance of publication)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}