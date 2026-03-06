import React, { useState, useEffect } from 'react';

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Services data
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

  // Intersection Observer for scroll animations
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

  // Auto-play carousel
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

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 min-h-screen relative"
      style={{ backgroundImage: "url('/media/background.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wider mb-2">
            WHAT WE'RE OFFERING
          </h2>
        </div>

        {/* Main Container - Single card with sidebar and carousel side-by-side */}
        <div className="main-container opacity-0 bg-white shadow-2xl overflow-visible flex flex-row">
          {/* Left Sidebar - Other Services - NARROW */}
          <div className="w-56 lg:w-64 bg-white p-6 lg:p-7 border-r border-gray-100 flex-shrink-0">
            <h3 className="text-xl lg:text-2xl font-light text-gray-700 mb-6 tracking-wide leading-tight">
              OTHER<br />SERVICES
            </h3>
            <div className="space-y-3 lg:space-y-4 mb-8">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className="other-service-item flex justify-between items-center opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-500 text-xs lg:text-sm">{service.name}</span>
                  <span className="text-[#d4956d] font-medium text-xs lg:text-sm">{service.price}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#d4956d] hover:bg-[#c4855d] text-white py-3 px-3 transition-all duration-300 font-normal text-[10px] lg:text-xs tracking-widest uppercase">
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Right Side - Carousel */}
          <div className="flex-1 p-6 lg:p-8 relative bg-[#fafaf8] flex items-center">
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 33.333}%)`,
                    gap: '1rem'
                  }}
                >
                  {mainServices.map((service, idx) => (
                    <div
                      key={service.id}
                      className="service-card flex-shrink-0 bg-white border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer group"
                      style={{ width: 'calc(33.333% - 0.667rem)' }}
                      onClick={() => openModal(service)}
                    >
                      {/* Image Container */}
                      <div className="relative h-44 lg:h-52 overflow-hidden bg-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 lg:p-5 bg-[#fafaf8]">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xs lg:text-sm font-normal text-gray-700 tracking-wide leading-tight">
                            {service.title}
                          </h3>
                          <span className="text-[#d4956d] font-normal text-xs lg:text-sm whitespace-nowrap ml-2">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-[10px] lg:text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator for navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {mainServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#d4956d] w-6' : 'bg-gray-300 hover:bg-[#d4956d]/50'
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/95 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-4xl md:text-5xl font-light text-white tracking-wide mb-3">
                  {selectedService.title}
                </h3>
                <span className="text-[#d4956d] font-medium text-3xl md:text-4xl">
                  {selectedService.price}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Transform your look with our professional {selectedService.title.toLowerCase()} service. 
                Our experienced team uses premium products and techniques to ensure you leave feeling confident and beautiful.
              </p>

              <h4 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">What's Included:</h4>
              <ul className="space-y-4 mb-10">
                {selectedService.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <svg
                      className="w-6 h-6 text-[#d4956d] mr-4 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base md:text-lg">{detail}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#d4956d] hover:bg-[#c4855d] text-white py-5 transition-all duration-300 transform hover:scale-[1.02] font-normal text-lg tracking-widest uppercase shadow-lg">
                BOOK THIS SERVICE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEO-friendly structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Master Salon",
          "description": "Professional salon services including hair cutting, coloring, styling, facials, and more",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Salon Services",
            "itemListElement": mainServices.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              },
              "price": service.price.replace('$', ''),
              "priceCurrency": "USD"
            }))
          }
        })}
      </script>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .main-container {
          animation-delay: 200ms;
        }

        .service-card {
          animation-delay: 400ms;
        }

        .other-service-item {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default OurServices;