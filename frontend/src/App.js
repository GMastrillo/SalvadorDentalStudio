import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import all components
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import LeadCaptureForm from "./components/LeadCaptureForm";
import TestimonialsSection from "./components/TestimonialsSection";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Toaster } from "./components/ui/toaster";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* All Landing Page Sections */}
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <LeadCaptureForm />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      
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