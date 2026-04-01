'use client';

import Image from 'next/image';
import { conferenceData } from '@/lib/conference-data';

export default function RegistrationSection() {
  return (
    <section id="registration" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration & Payment</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        {/* QR Codes Section */}
        <div className="mb-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 rounded-2xl p-8 md:p-16 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Quick Access via QR Codes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Registration QR */}
            <div className="flex flex-col items-center group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                <div className="relative w-56 h-56 md:w-64 md:h-64">
                  <Image
                    src="/qr-registration.jpg"
                    alt="Registration QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xl mt-6">
                <span className="text-3xl animate-pulse">▶</span>
                <span>Registration Link</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Scan to register now</p>
            </div>

            {/* Payment QR */}
            <div className="flex flex-col items-center group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                <div className="relative w-56 h-56 md:w-64 md:h-64">
                  <Image
                    src="/qr-payment.jpg"
                    alt="Payment QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xl mt-6">
                <span className="text-3xl animate-pulse">▶</span>
                <span>Payment Link</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Complete your payment</p>
            </div>
          </div>
        </div>

        {/* Payment Steps */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Payment Steps</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              'Step 1: In Payment Category, select "Conference/Workshop/Other Charges"',
              'Step 2: Conference/Workshop code select "CONF 179 MID"',
              'Step 3: Category – "Individual"',
              'Step 4: Fill other details and make the payment.'
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-blue-50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-gray-700 font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border-l-4 border-orange-600 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Important Notes</h3>
          <ul className="space-y-3">
            <li className="text-gray-700 flex gap-3">
              <span className="text-orange-600 font-bold flex-shrink-0">✓</span>
              <span>All authors and co-authors must register and pay the fee individually. There is one who has not yet registered, it will not be refunded.</span>
            </li>
            <li className="text-gray-700 flex gap-3">
              <span className="text-orange-600 font-bold flex-shrink-0">✓</span>
              <span>Presentation certificates will be given to all the registered authors. The name of the author will be in the certificate of each speaker.</span>
            </li>
            <li className="text-gray-700 flex gap-3">
              <span className="text-orange-600 font-bold flex-shrink-0">✓</span>
              <span>Publication for selected research papers in journals will be informed. The fee will be charged separately from the conference fee.</span>
            </li>
            <li className="text-gray-700 flex gap-3">
              <span className="text-orange-600 font-bold flex-shrink-0">✓</span>
              <span>Authors must participate actively in presentation of the conference.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
