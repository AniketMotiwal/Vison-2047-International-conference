'use client';

import { conferenceData } from '@/lib/conference-data';

export default function FeesPage() {
  const fees = conferenceData.registrationFees;

  return (
    <main className="min-h-screen bg-white py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration Fees & Categories</h1>
        <p className="text-xl text-gray-700 mb-12">Choose the category that best matches your profile</p>

        {/* Fees Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <th className="px-6 py-4 text-left text-white font-bold text-lg">Category</th>
                <th className="px-6 py-4 text-center text-white font-bold text-lg">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 text-gray-900 font-semibold text-lg border-b border-gray-200">{item.category}</td>
                  <td className="px-6 py-4 text-center text-blue-600 font-bold text-lg border-b border-gray-200">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fees Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {fees.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.category}</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-blue-300">
                <p className="text-3xl font-bold text-blue-600">{item.fee}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Fee Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Conference kit</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Meals & refreshments</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Participation certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Details */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-8 border-orange-500 rounded-r-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">💰</span> What's Included
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span><strong>Conference Kit:</strong> Contains conference schedule, abstracts, and materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span><strong>Meals & Refreshments:</strong> Breakfast, lunch, and refreshments for all conference days (April 24-26)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span><strong>Participation Certificate:</strong> Certificate at the end of the conference</span>
            </li>
          </ul>
        </section>

        {/* Payment & Refund Policy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Important Information</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-3">Refund Policy</h3>
            <p className="text-gray-800">
              <strong>The fee once paid will NOT be refunded.</strong> However, in case of medical emergencies or force majeure circumstances, please contact the organizing committee.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Author Registration</h3>
            <p className="text-gray-800">
              All authors and co-authors must register and pay the fee individually using their respective categories.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-3">Group Registration</h3>
            <p className="text-gray-800 mb-4">
              For group registrations (5 or more participants), please contact us through the Contact Us section for potential group discounts.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-3">Publication Fee</h3>
            <p className="text-gray-800">
              Publication fee for selected research papers in journals will be informed. (To be paid only after the intimation of the review committee for acceptance of publication)
            </p>
          </div>
        </section>

        {/* Notes from conference data */}
        <section className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border-l-8 border-orange-500 rounded-r-2xl p-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📌</span> Important Notes
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            {conferenceData.notes.map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 text-xl">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">Ready to register?</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9mnu68W-dQDofoEX9qR_qFh4dlJd3WuLyMEKBXxzu5ixoqA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition text-lg"
          >
            Proceed to Registration →
          </a>
        </div>
      </div>
    </main>
  );
}
