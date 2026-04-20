'use client';

export default function RegistrationSection() {
  const registerUrl = 'https://forms.gle/Pr1dqxjeK84TAhf36';
  const paymentUrl = 'https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=365641';
  const registerQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(registerUrl)}`;
  const paymentQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(paymentUrl)}`;

  return (
    <section id="registration" className="py-16 md:py-24 px-0 bg-white">
      <div className="w-full">
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto mb-7 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Quick Links
            </h2>
            <p className="mt-2 text-center text-sm md:text-base font-medium text-gray-600">
              Scan the QR code to complete registration or payment quickly
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-rose-100 p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="Scan to Register"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm md:text-base font-semibold text-red-700">Scan to Register</p>
                <span className="inline-flex h-3 w-3 rounded-full bg-red-500 registration-pulse-dot" />
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4">
                <img
                  src={registerQrUrl}
                  alt="QR code for conference registration"
                  className="w-full h-auto max-w-[260px] md:max-w-[300px] lg:max-w-[340px] mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 md:py-3.5 text-base md:text-lg font-extrabold text-white transition-all duration-300 group-hover:bg-red-700 group-hover:scale-[1.02]">
                  <span>Register Now</span>
                  <span className="registration-arrow" aria-hidden="true">➜</span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-red-700 font-medium"> - Register early</p>
              </div>
            </a>

            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-100 p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="Scan to Pay"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm md:text-base font-semibold text-blue-700">Scan to Pay</p>
                <span className="inline-flex h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <div className="bg-white rounded-xl p-3 md:p-4">
                <img
                  src={paymentQrUrl}
                  alt="QR code for conference payment"
                  className="w-full h-auto max-w-[260px] md:max-w-[300px] lg:max-w-[340px] mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 md:py-3.5 text-base md:text-lg font-bold text-white transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-[1.02]">
                  <span>Pay Now</span>
                  <span aria-hidden="true">→</span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-blue-700 font-medium">Secure SBI Collect payment gateway</p>
              </div>
            </a>
          </div>
        </div>

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
      <style jsx>{`
        .registration-arrow {
          animation: registrationArrowFloat 1.3s ease-in-out infinite;
        }

        .registration-pulse-dot {
          animation: registrationDotPulse 1.6s ease-in-out infinite;
        }

        @keyframes registrationArrowFloat {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        @keyframes registrationDotPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.45);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(239, 68, 68, 0);
          }
        }
      `}</style>
    </section>
  );
}