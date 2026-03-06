import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(60px)",
    transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: delay + "ms",
  });

  const fadeLeft = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-60px)",
    transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: delay + "ms",
  });

  const fadeRight = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(60px)",
    transition: "opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: delay + "ms",
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* Background image layer - original */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/media/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Main 3-col grid - NO top padding so right cards bleed to very top */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_300px] xl:grid-cols-[380px_1fr_340px] items-start">

          {/* ── Column 1: Heading + Image ── */}
          <div className="pt-16 sm:pt-20 lg:pt-20 pb-16 pl-6 sm:pl-10 lg:pl-16 pr-6">

            {/* Heading above image */}
            <div style={fadeLeft(0)} className="mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight">
                THE RIGHT PLACE<br />
                FOR YOUR HAIRS<br />
                &amp; BEARDS
              </h2>
            </div>

            {/* Image with decorative squiggle and icon box */}
            <div className="relative flex items-start" style={fadeLeft(150)}>
              {/* Squiggle line */}
              <div className="flex-shrink-0 w-8 mr-2 self-stretch hidden sm:block">
                <svg viewBox="0 0 30 400" className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M 15,0 C 30,50 0,100 15,150 C 30,200 0,250 15,300 C 30,350 0,380 15,400"
                    fill="none"
                    stroke="#D4957D"
                    strokeWidth="2.5"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Photo + icon overlay */}
              <div className="relative">
                <img
                  src="/media/about.jpg"
                  alt="Master Salon"
                  className="w-full max-w-xs object-cover"
                />
                <div className="absolute -bottom-0 right-0 bg-[#D4957D] p-5 shadow-2xl">
                  <img
                    src="/media/icon.png"
                    alt="Salon Icon"
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Column 2: Description + List + Service Cards ── */}
          <div className="pt-16 sm:pt-20 lg:pt-20 pb-16 px-6 lg:px-10">

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 font-medium" style={fadeUp(100)}>
              We are offering all hair salon services in your area with the best quality you can ever imagine from a salon.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-10">
              {[
                "Professional hair styling and cutting",
                "Expert beard grooming and shaping",
                "Premium hair coloring services",
                "Relaxing spa treatments available",
                "Modern techniques with classic care",
                "Personalized consultation for every client",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 text-sm sm:text-base"
                  style={fadeUp(200 + index * 70)}
                >
                  <span
                    className="flex-shrink-0 mt-2 mr-3"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#D4957D",
                      display: "inline-block",
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Service Cards side by side - small */}
            <div className="grid grid-cols-2 gap-3">
              {["Hair Cutting", "Hair Color"].map((label, index) => (
                <div
                  key={label}
                  className="bg-white/90 border border-gray-100 px-3 py-3 flex items-center space-x-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={fadeUp(720 + index * 100)}
                >
                  <img
                    src="/media/scissor.png"
                    alt={label}
                    className="w-6 h-6 object-contain flex-shrink-0"
                    style={{ filter: "invert(55%) sepia(60%) saturate(600%) hue-rotate(340deg) brightness(105%)" }}
                  />
                  <span className="text-gray-700 font-semibold text-xs uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Column 3: Info cards flush to very top ── */}
          <div className="flex flex-col self-start" style={fadeRight(200)}>

            {/* Location Card - starts at absolute top, no top padding */}
            <div className="bg-[#D4957D] text-white px-8 py-10 shadow-lg relative overflow-hidden">
              {/* Faint icon watermark */}
              <div className="absolute right-4 bottom-2 opacity-20">
                <img src="/media/icon.png" alt="" className="w-16 h-16 object-contain filter brightness-0 invert" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed relative z-10">
                123 Main Street<br />
                New York, United States of<br />
                America
              </p>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white px-8 py-10 shadow-lg border-t border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase leading-tight">
                  Opening<br />Hours
                </h3>
                <img
                  src="/media/clock.png"
                  alt="Clock"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  style={{ filter: "invert(55%) sepia(60%) saturate(600%) hue-rotate(340deg) brightness(105%)" }}
                />
              </div>
              <div className="space-y-4 text-sm sm:text-base">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Monday</p>
                  <p className="text-[#D4957D] font-semibold">12:00 pm - 19:00 pm</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Tuesday to Friday</p>
                  <p className="text-[#D4957D] font-semibold">8:00 am - 19:00 pm</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Saturday</p>
                  <p className="text-[#D4957D] font-semibold">8:00 am to 3:30 pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;