'use client';

export default function FeesPage() {
  const fees = [
    {
      category: 'UG/PG Students',
      fee: '₹1,000',
      description: 'Undergraduate and Postgraduate students',
      includes: ['Conference kit', 'Meals & refreshments', 'Certificate']
    },
    {
      category: 'PhD Research Scholars',
      fee: '₹1,500',
      description: 'Doctoral research scholars',
      includes: ['Conference kit', 'Meals & refreshments', 'Certificate']
    },
    {
      category: 'Faculties / Scientists',
      fee: '₹3,000',
      description: 'University faculties and research scientists',
      includes: ['Conference kit', 'Meals & refreshments', 'Certificate']
    },
    {
      category: 'Industry / MSMEs',
      fee: '₹5,000',
      description: 'Industry professionals and MSME representatives',
      includes: ['Conference kit', 'Meals & refreshments', 'Certificate']
    },
    {
      category: 'International Participants',
      fee: '₹10,000',
      description: 'Participants from outside India',
      includes: ['Conference kit', 'Meals & refreshments', 'Certificate']
    },
  ];

  return (
    <main className="min-h-screen bg-white py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Registration Fees & Categories</h1>
        <p className="text-xl text-gray-700 mb-12">Choose the category that best matches your profile</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {fees.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.category}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4 border-2 border-blue-300">
                <p className="text-3xl font-bold text-blue-600">{item.fee}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Fee Includes:</p>
                <ul className="space-y-2">
                  {item.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
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
              <span><strong>Meals & Refreshments:</strong> Breakfast, lunch, and refreshments for all conference days (24-26 April)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1 text-xl">•</span>
              <span><strong>Certificate:</strong> Participation certificate at the end of the conference</span>
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
            <h3 className="text-lg font-bold text-blue-900 mb-3">Multiple Registrations</h3>
            <p className="text-gray-800">
              If you have multiple roles (e.g., author and industry representative), each role requires a separate registration with appropriate fees.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6">
            <h3 className="text-lg font-bold text-green-900 mb-3">Group Registration</h3>
            <p className="text-gray-800 mb-4">
              For group registrations (5 or more participants), please contact us at the email address provided in the Contact Us section for potential group discounts.
            </p>
          </div>
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
