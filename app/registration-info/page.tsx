'use client';

export default function RegistrationInfoPage() {
  return (
    <main className="min-h-screen bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Registration Information</h1>
        
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">How to Register</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              All participants, including authors, co-authors, and attendees, must register for the conference. Registration is mandatory to receive conference materials and certificates.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9mnu68W-dQDofoEX9qR_qFh4dlJd3WuLyMEKBXxzu5ixoqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              📝 Register Now
            </a>
          </section>

          {/* Registration Requirements */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Registration Requirements</h2>
            <div className="bg-amber-50 border-l-4 border-orange-500 rounded-r-lg p-6">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Valid email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Phone number for communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Institutional/Organizational affiliation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Payment confirmation (required for conference access)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Registration Timeline */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Registration Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Registration Opens</h3>
                  <p className="text-gray-700">20th March 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Submission Deadline</h3>
                  <p className="text-gray-700">20th April 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Registration Deadline</h3>
                  <p className="text-gray-700">22nd April 2026</p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-8 border-orange-500 rounded-r-2xl p-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">📌</span> Important Notes
            </h2>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>All authors and co-authors must register and pay the fee individually.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>Early registration is recommended to avoid rush during the deadline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>Confirmation email will be sent immediately after successful registration and payment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>For technical support, contact us through the Contact Us page.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
