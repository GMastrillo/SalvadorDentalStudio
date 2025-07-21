import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import LeadCaptureForm from "./components/LeadCaptureForm";
import TestimonialsSection from "./components/TestimonialsSection";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Toaster } from "./components/ui/toaster";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />
      
      {/* All Landing Page Sections */}
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <LeadCaptureForm />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <FloatingWhatsApp />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;