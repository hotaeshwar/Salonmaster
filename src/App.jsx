import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Ourservices from "./components/Ourservices";
import Packages from "./components/Packages";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20 lg:scroll-mt-28">
        <AboutUs />
      </section>

      <section id="services" className="scroll-mt-20 lg:scroll-mt-28">
        <Ourservices />
      </section>

      <section id="packages" className="scroll-mt-20 lg:scroll-mt-28">
        <Packages />
      </section>

      <section id="contact" className="scroll-mt-20 lg:scroll-mt-28">
        <ContactUs />
      </section>

      <Footer />
    </div>
  );
}

export default App;