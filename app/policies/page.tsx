'use client';
import Script from "next/script";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Code of Conduct",
      content: "All participants must adhere to professional standards and respectful communication. Any form of harassment or discrimination is strictly prohibited."
    },
    {
      title: "Privacy Policy",
      content: "We protect your personal data in accordance with GDPR and Indian privacy laws. Your information will not be shared without consent."
    },
    {
      title: "Intellectual Property Rights",
      content: "All content presented at the conference is protected. Please seek permission before reproducing or citing presented materials."
    },
    {
      title: "Cancellation Policy",
      content: "Registrations can be cancelled up to 14 days before the event for a full refund. Cancellations after this date will be subject to a 25% processing fee."
    },
    {
      title: "Health & Safety",
      content: "The conference venue follows all safety protocols. Participants are requested to follow venue guidelines and COVID-19 precautions if applicable."
    },
    {
      title: "Terms & Conditions",
      content: "By registering, you agree to the conference terms. The organizers reserve the right to modify the schedule or cancel sessions as needed."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <Script
        id="policies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vision2047.iitr.ac.in"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Policies",
                item: "https://vision2047.iitr.ac.in/policies"
              }
            ]
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#004178] to-[#002d5c] px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider">
              POLICIES & GUIDELINES
            </h1>
          </div>
          <p className="mt-6 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Important policies and guidelines for participants at Vision 2047 International Conference.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#004178] mb-3">
                {policy.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact for Clarification */}
        <div className="mt-12 bg-blue-50 border-l-4 border-[#004178] p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-[#004178] mb-3">
            Questions About Our Policies?
          </h3>
          <p className="text-gray-700 mb-4">
            For any clarifications or concerns regarding conference policies, please contact us at:
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <p className="font-semibold text-gray-900">Email:</p>
              <p className="text-[#004178] hover:underline">conference@iitr.ac.in</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone:</p>
              <p className="text-gray-700">+91-1332-284601</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
