import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-gray-300"
      style={{ backgroundImage: "url('/media/background.png')" }}
    >
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-6">
            <img 
              src="/media/SALON MASTERS LOGO.png" 
              alt="Salon Masters Logo" 
              className="h-24 sm:h-32 w-auto brightness-125"
            />
            <p className="text-sm sm:text-base leading-relaxed">
              There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.
            </p>
            
            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 font-semibold transition-colors">
                GO
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-semibold">LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#packages" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#franchise" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-lg sm:text-xl font-semibold">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base">9988855112 | 9988855113</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">info@mastersalon.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base">
                  B Block VIP Road Zirakpur
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © Copyright 2026 by salonmasters.com
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white hover:bg-orange-400 flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white hover:bg-orange-400 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white hover:bg-orange-400 flex items-center justify-center transition-colors group"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white hover:bg-orange-400 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-gray-800 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;