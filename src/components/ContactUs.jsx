import React from "react";

function ContactUs() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-24 flex items-center justify-center relative"
      style={{ backgroundImage: "url('/media/background.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-300 text-sm sm:text-base">
              Have questions or want to book an appointment? Reach out to us and our team will get back to you shortly.
            </p>

            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-gray-300">9988855112 | 9988855113</p>
            </div>

            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-gray-300">info@mastersalon.com</p>
            </div>

            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="text-gray-300">B Block VIP Road Zirakpur</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-[#E2B89D] transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-[#E2B89D] transition"
            />

            {/* Package Selector */}
            <select
              className="w-full bg-white/10 border border-white/30 text-white px-4 py-3 outline-none focus:border-[#E2B89D] transition appearance-none"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-800">Select a Package</option>
              <option value="basic" className="text-gray-800">Basic Package</option>
              <option value="standard" className="text-gray-800">Standard Package</option>
              <option value="premium" className="text-gray-800">Premium Package</option>
              <option value="luxury" className="text-gray-800">Luxury Package</option>
            </select>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-xs mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-white/10 border border-white/30 text-white px-4 py-3 outline-none focus:border-[#E2B89D] transition"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-xs mb-1">Preferred Time</label>
                <input
                  type="time"
                  className="w-full bg-white/10 border border-white/30 text-white px-4 py-3 outline-none focus:border-[#E2B89D] transition"
                />
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-white/10 border border-white/30 text-white placeholder-gray-300 px-4 py-3 outline-none focus:border-[#E2B89D] transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#E2B89D] text-white px-8 py-3 uppercase tracking-[3px] text-sm hover:bg-[#d9a98a] transition w-full sm:w-auto"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;