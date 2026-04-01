'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#003D7A] to-[#004A9E] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB81C]">About Conference</h4>
            <p className="text-sm text-white/80">
              Vision 2047: Prosperous & Great Bharat 2.0 - A landmark convergence of civilizational wisdom and frontier science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB81C]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#FFB81C] transition">About</a></li>
              <li><a href="#themes" className="hover:text-[#FFB81C] transition">Themes</a></li>
              <li><a href="#timeline" className="hover:text-[#FFB81C] transition">Timeline</a></li>
              <li><a href="#patrons" className="hover:text-[#FFB81C] transition">Leadership</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB81C]">Registration</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#registration" className="hover:text-[#FFB81C] transition">Register</a></li>
              <li><a href="#why-attend" className="hover:text-[#FFB81C] transition">Why Attend</a></li>
              <li><a href="#location" className="hover:text-[#FFB81C] transition">Location</a></li>
              <li><a href="mailto:vision2047@iitroorkee.ac.in" className="hover:text-[#FFB81C] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFB81C]">Contact Us</h4>
            <p className="text-sm text-white/80 mb-2">
              <span className="font-semibold">Email:</span><br />
              <a href="mailto:vision2047@iitroorkee.ac.in" className="hover:text-[#FFB81C] transition">
                vision2047@iitroorkee.ac.in
              </a>
            </p>
            <p className="text-sm text-white/80">
              <span className="font-semibold">Phone:</span><br />
              <a href="tel:+911332286260" className="hover:text-[#FFB81C] transition">
                +91-1332-286-260
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Organizers */}
          <div className="mb-8">
            <h4 className="text-lg font-bold mb-4 text-[#FFB81C]">Organized By</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold">IIT Roorkee</p>
                <p className="text-white/70">Indian Institute of Technology</p>
              </div>
              <div>
                <p className="font-semibold">SSS</p>
                <p className="text-white/70">Swadeshi Shodh Sansthan</p>
              </div>
              <div>
                <p className="font-semibold">Plus 100+</p>
                <p className="text-white/70">Premier Institutions Worldwide</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/70 border-t border-white/20 pt-8">
            <p>
              &copy; {new Date().getFullYear()} Vision 2047 International Conference. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              "For a Prosperous and Great Bharat 2.0" - Jointly Organized by IIT Roorkee and Swadeshi Shodh Sansthan
            </p>
            <div className="mt-4 flex justify-center gap-4 text-white/60">
              <a href="#" className="hover:text-[#FFB81C] transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#FFB81C] transition">Terms & Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-[#FFB81C] transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
