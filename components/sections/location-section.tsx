'use client';

import Image from 'next/image';

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How to Reach IIT Roorkee</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        {/* Header Section with QR and Event Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 md:p-16 shadow-2xl">
          {/* QR Code Left */}
          <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">HOW TO REACH IIT ROORKEE?</h3>
            <div className="bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="relative w-56 h-56 md:w-72 md:h-72">
                <Image
                  src="/qr-location.jpg"
                  alt="Location QR Code"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/BHsLGJ3ixvQqvuq87"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Event Image Right */}
          <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <Image
                src="/event-image.jpg"
                alt="Vision 2047 Event"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white font-semibold drop-shadow-lg">April 24-26, 2026</p>
              <p className="text-blue-100">IIT Roorkee, Uttarakhand</p>
            </div>
          </div>
        </div>

        {/* Organization Info Section */}
        <div className="mb-20 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Vision 2047: Prosperous & Great Bharat 2.0</h4>
              <p className="text-gray-600">International Conference at IIT Roorkee</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              <div className="relative w-24 h-24">
                <Image
                  src="/iit-logo.png"
                  alt="IIT Roorkee"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24">
                <Image
                  src="/swadeshi-logo.png"
                  alt="SSS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#003D7A]">
              <h3 className="text-2xl font-bold text-[#003D7A] mb-4">📍 Venue Address</h3>
              <p className="text-gray-700 text-lg mb-2">
                <span className="font-semibold">Indian Institute of Technology</span>
              </p>
              <p className="text-gray-700 text-lg mb-2">Roorkee, Uttarakhand 247667</p>
              <p className="text-gray-600 text-sm">India</p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#FFB81C]">
              <h3 className="text-2xl font-bold text-[#FFB81C] mb-4">📞 Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600">Email</p>
                  <a href="mailto:vision2047@iitroorkee.ac.in" className="text-[#003D7A] hover:underline">
                    vision2047@iitroorkee.ac.in
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Phone</p>
                  <a href="tel:+911332286260" className="text-[#003D7A] hover:underline">
                    +91-1332-286-260
                  </a>
                </div>
              </div>
            </div>

            {/* Getting There */}
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#D97706]">
              <h3 className="text-2xl font-bold text-[#D97706] mb-4">🚗 Getting There</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">✈️ By Air (Recommended)</p>
                  <p className="text-gray-600 text-sm">
                    Nearest airport: Indira Gandhi International Airport, Delhi (250 km). From Delhi, take a flight to Roorkee or travel by road.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">🚂 By Train</p>
                  <p className="text-gray-600 text-sm">
                    Roorkee Railway Station is well-connected. From the station, IIT Roorkee is approximately 5 km away.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">🚌 By Road</p>
                  <p className="text-gray-600 text-sm">
                    Regular bus services from Delhi, Lucknow, and other nearby cities to Roorkee. Taxi services available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-16 bg-gradient-to-r from-[#003D7A] to-[#004A9E] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">📲 Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold mb-4">Conference Details QR Code</p>
              <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center mx-auto max-w-xs">
                <div className="text-gray-400 text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-sm">QR Code Image Placeholder</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Campus Map QR Code</p>
              <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center mx-auto max-w-xs">
                <div className="text-gray-400 text-center">
                  <div className="text-6xl mb-2">🗺️</div>
                  <p className="text-sm">QR Code Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Info */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#003D7A] mb-6">🏨 Accommodation</h3>
          <p className="text-gray-700 mb-4">
            Several hotels and guest houses are available near IIT Roorkee campus:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'IIT Roorkee Guest House', distance: 'On Campus', phone: '+91-1332-285-000' },
              { name: 'Hotel Hindustan International', distance: '2 km', phone: 'Roorkee City Center' },
              { name: 'Various Budget Hotels', distance: 'Roorkee City', phone: 'Near Railway Station' }
            ].map((hotel, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">{hotel.name}</h4>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Distance:</span> {hotel.distance}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Contact:</span> {hotel.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
