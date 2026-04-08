'use client';

import React from 'react';

interface Professor {
  name: string;
  contact: string;
}

const sharedEmail = 'vision2047.iitr.ac.in'; // common email

const professors: Professor[] = [
  { name: 'Prof. Akshay Dvivedi', contact: '+91 9411176136' },
  { name: 'Prof. Vikas Kumar Singh', contact: '+91 9131506848' },
];

const ContactCard: React.FC<{ prof: Professor }> = ({ prof }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
    <h2 className="text-2xl font-bold text-gray-800">{prof.name}</h2>
    <p className="text-gray-600 flex items-center gap-2">
      📞 <a href={`tel:${prof.contact}`} className="text-blue-500 hover:underline">{prof.contact}</a>
    </p>
    <p className="text-gray-600 flex items-center gap-2">
      ✉️ <a href={`mailto:${sharedEmail}`} className="text-blue-500 hover:underline">{sharedEmail}</a>
    </p>
  </div>
);

export default function ContactUs() {
  return (
    <section id="contactus" className="bg-gradient-to-r from-[#003D7A] to-[#0056b3] text-white py-16 px-4 md:px-16">
      
      {/* 🔹 Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-200">
          For any queries, reach out to our professors
        </p>
      </div>

      {/* 🔹 Cards */}
      <div className="grid gap-8 sm:grid-cols-2">
        {professors.map((prof, index) => (
          <ContactCard key={index} prof={prof} />
        ))}
      </div>

      {/* 🔹 Shared Email at bottom (large) */}
      <div className="mt-12 text-center text-2xl sm:text-3xl font-semibold">
        ✉️ Email: <a href={`mailto:${sharedEmail}`} className="text-yellow-400 hover:underline">{sharedEmail}</a>
      </div>
    </section>
  );
}