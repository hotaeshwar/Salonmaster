import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [containerHeight, setContainerHeight] = useState('100vh');

  const images = [
    '/media/Hero.jpg',
    '/media/Hero1.jpg',
    '/media/Hero2.jpg'
  ];

  useEffect(() => {
    // Check if screen is small or iPad - comprehensive device detection
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Detect iPad devices by common resolutions
      const isIPad = (
        // iPad Mini: 768x1024
        (width === 768 && height === 1024) ||
        // iPad Air: 820x1180  
        (width === 820 && height === 1180) ||
        // iPad Pro 11": 834x1194
        (width === 834 && height === 1194) ||
        // iPad Pro 12.9": 1024x1366
        (width === 1024 && height === 1366) ||
        // Landscape orientations
        (height === 768 && width === 1024) ||
        (height === 820 && width === 1180) ||
        (height === 834 && width === 1194) ||
        (height === 1024 && width === 1366) ||
        // General iPad detection
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      
      setIsSmallScreen(width < 768 && !isIPad);
      
      // Calculate responsive height based on device type
      if (width < 768) {
        // Mobile phones (portrait) - 60% of screen height, max 500px
        setContainerHeight(`${Math.min(height * 0.6, 500)}px`);
      } else if (isIPad) {
        // iPad specific handling - maintain aspect ratio
        setContainerHeight(`${Math.min(width * 0.5625, height * 0.6)}px`);
      } else if (width < 1024) {
        // Other tablets and small laptops - 70% of screen height, max 600px
        setContainerHeight(`${Math.min(height * 0.7, 600)}px`);
      } else {
        // Desktop - full viewport height
        setContainerHeight('100vh');
      }
    };
    
    checkScreenSize();
    
    // Throttled resize handler for performance
    let resizeTimeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkScreenSize, 300);
    };
    
    window.addEventListener('resize', throttledResize, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(checkScreenSize, 300);
    }, { passive: true });

    // Image slider timer
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, []);

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-black"
      style={{ 
        height: containerHeight,
        minHeight: isSmallScreen ? '300px' : '400px'
      }}
    >
      {/* Background Image Slider with Zoom Effect */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transform transition-transform duration-[8000ms] ease-out ${
                index === currentSlide && !isAnimating ? 'scale-110' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center center',
                objectFit: 'cover',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
          </div>
        ))}
      </div>

      {/* Responsive gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 sm:h-1/3 md:h-1/3 lg:h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Decorative Text Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[8rem] xs:text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[24rem] xl:text-[28rem] font-bold text-white opacity-5 select-none whitespace-nowrap">
            Salon
          </h1>
        </div>

        {/* Main Heading - Responsive sizing */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white text-center mb-6 sm:mb-8 md:mb-12 tracking-wider uppercase leading-tight drop-shadow-lg">
          <span className="block">YOUR COMPLETE</span>
          <span className="block font-normal">HAIR CARE</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-0">
          {/* Book Appointment Button with Split Effect */}
          <button className="group relative bg-transparent text-white font-medium px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 uppercase tracking-wider text-xs sm:text-sm md:text-base w-full max-w-xs sm:max-w-none sm:w-auto overflow-hidden shadow-lg">
            {/* Left Half */}
            <span className="absolute inset-0 bg-[#D4957D] transition-transform duration-500 ease-out origin-left group-hover:-translate-x-full" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></span>
            
            {/* Right Half */}
            <span className="absolute inset-0 bg-[#D4957D] transition-transform duration-500 ease-out origin-right group-hover:translate-x-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></span>
            
            {/* Button Text */}
            <span className="relative z-10 inline-block drop-shadow-md">
              Book Appointment
            </span>
          </button>

          {/* Play Button */}
          <button className="bg-white hover:bg-gray-100 text-gray-800 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 sm:ml-3 md:ml-4 shadow-lg">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators - Responsive positioning */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-white shadow-md'
                  : 'w-6 sm:w-8 md:w-10 h-0.5 sm:h-1 bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;