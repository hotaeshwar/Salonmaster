import React, { useState, useEffect } from 'react';

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const mainServices = [
    {
      id: 1,
      title: 'HAIR TREATMENT',
      price: '$30.00',
      image: '/media/hairtreatment.jpg',
      description: 'lorem is free text to used.',
      details: [
        'Consultation with expert stylist',
        'Precision cutting techniques',
        'Style recommendations',
        'Complimentary hair wash',
        'Blow dry and styling included'
      ]
    },
    {
      id: 2,
      title: 'MAKEUP',
      price: '$40.00',
      image: '/media/makeup.jpg',
      description: 'lorem is free text to used.',
      details: [
        'Color consultation',
        'Premium quality products',
        'Highlights and lowlights',
        'Full or partial coloring',
        'Color protection treatment',
        'Aftercare guidance'
      ]
    },
    {
      id: 3,
      title: 'MANICURE',
      price: '$35.00',
      image: '/media/nailextension.jpg',
      description: 'lorem is free text to used.',
      details: [
        'Nail shaping and filing',
        'Cuticle care and treatment',
        'Hand massage',
        'Polish application',
        'Nail strengthening treatment',
        'Hand moisturizing'
      ]
    },
    {
      id: 4,
      title: 'FACIAL TREATMENT',
      price: '$40.00',
      image: '/media/facial.jpg',
      description: 'lorem is free text to used.',
      details: [
        'Deep cleansing',
        'Exfoliation',
        'Face massage',
        'Customized mask',
        'Moisturizing treatment',
        'Skin analysis included'
      ]
    },
    {
      id: 5,
      title: 'PEDICURE',
      price: '$20.00',
      image: '/media/pedicure.jpg',
      description: 'lorem is free text to used.',
      details: [
        'Foot soak and scrub',
        'Nail shaping and buffing',
        'Cuticle care',
        'Foot massage',
        'Polish application',
        'Moisturizing treatment'
      ]
    }
  ];

  const otherServices = [
    { name: 'Facials', price: '$40' },
    { name: 'Mini Pedicure', price: '$20' },
    { name: 'Hair Smoothing', price: '$30' },
    { name: 'Herbal Massage', price: '$80' },
    { name: 'Manicure', price: '$30' },
    { name: 'Body Massage', price: '$90' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.service-card, .other-service-item, .main-container');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile: 1 card, Tablet: 2 cards, Desktop: 3 cards
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mainServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mainServices.length]);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const cardWidthPercent = 100 / visibleCount;
  const gapPx = visibleCount > 1 ? 16 : 0;

  return (
    <section
      className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen relative"
      style={{
        backgroundImage: "url('/media/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider mb-2">
            WHAT WE'RE OFFERING
          </h2>
        </div>

        {/* Main Container */}
        <div className="main-container opacity-0 bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Sidebar — top on mobile/tablet, left on desktop */}
          <div className="w-full lg:w-56 xl:w-64 bg-white p-5 lg:p-7 border-b lg:border-b-0 lg:border-r border-gray-100 flex-shrink-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mb-4 lg:mb-6 tracking-wide leading-tight">
              OTHER SERVICES
            </h3>

            {/* Mobile/Tablet: horizontal scroll grid, Desktop: vertical list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-0 lg:space-y-4 mb-5 lg:mb-8">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className="other-service-item flex justify-between items-center opacity-0 bg-gray-50 lg:bg-transparent px-3 py-2 lg:px-0 lg:py-0 rounded lg:rounded-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-500 text-xs sm:text-sm">{service.name}</span>
                  <span className="text-[#d4956d] font-medium text-xs sm:text-sm ml-2">{service.price}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#d4956d] hover:bg-[#c4855d] text-white py-3 px-3 transition-all duration-300 font-normal text-xs tracking-widest uppercase">
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Carousel */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#fafaf8] flex items-center">
            <div className="relative w-full">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (cardWidthPercent + (gapPx / (window?.innerWidth || 1000) * 100))}%)`,
                    gap: `${gapPx}px`
                  }}
                >
                  {mainServices.map((service) => (
                    <div
                      key={service.id}
                      className="service-card flex-shrink-0 bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer group"
                      style={{ width: `calc(${cardWidthPercent}% - ${gapPx * (visibleCount - 1) / visibleCount}px)` }}
                      onClick={() => openModal(service)}
                    >
                      <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden bg-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 sm:p-4 lg:p-5 bg-[#fafaf8]">
                        <div className="flex justify-between items-start mb-1 sm:mb-2">
                          <h3 className="text-xs sm:text-sm font-normal text-gray-700 tracking-wide leading-tight">
                            {service.title}
                          </h3>
                          <span className="text-[#d4956d] font-normal text-xs sm:text-sm whitespace-nowrap ml-2">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-5 sm:mt-8 space-x-2">
                {mainServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#d4956d] w-6' : 'bg-gray-300 hover:bg-[#d4956d]/50 w-2'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/95 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-wide mb-2 sm:mb-3">
                  {selectedService.title}
                </h3>
                <span className="text-[#d4956d] font-medium text-xl sm:text-3xl md:text-4xl">
                  {selectedService.price}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 md:p-12">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Transform your look with our professional {selectedService.title.toLowerCase()} service.
                Our experienced team uses premium products and techniques to ensure you leave feeling confident and beautiful.
              </p>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 mb-4 sm:mb-6">What's Included:</h4>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {selectedService.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4956d] mr-3 sm:mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base md:text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#d4956d] hover:bg-[#c4855d] text-white py-4 sm:py-5 transition-all duration-300 hover:scale-[1.02] font-normal text-sm sm:text-lg tracking-widest uppercase shadow-lg">
                BOOK THIS SERVICE
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.4s ease-out forwards; }
        .main-container { animation-delay: 200ms; }
        .service-card { animation-delay: 400ms; }
        .other-service-item { animation: fade-in 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default OurServices;