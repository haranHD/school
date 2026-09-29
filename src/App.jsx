import React, { useState } from 'react';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import About from './components/About';
import Programs from './components/Programs';
import Phonics from './components/Phonics';
import LearningApproach from './components/LearningApproach';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import ParentCorner from './components/ParentCorner';
import AdmissionsCTA from './components/AdmissionsCTA';
import FAQ from './components/FAQ';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Playgroup");

  const handleOpenEnquiry = (programName = "Playgroup") => {
    if (typeof programName === 'string' && programName.trim()) {
      setSelectedProgram(programName);
    } else {
      setSelectedProgram("Playgroup");
    }
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="school-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Demo Banner for Sales Presentation */}
      <DemoBanner />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry("Admissions Open")} />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry("General Admission")} />

        {/* Trust / Intro Section */}
        <TrustIntro />

        {/* About Section */}
        <About onOpenEnquiry={() => handleOpenEnquiry("General Admission")} />

        {/* Programs Section */}
        <Programs onOpenEnquiry={(prog) => handleOpenEnquiry(prog)} />

        {/* Phonics Enrichment Section */}
        <Phonics onOpenEnquiry={(prog) => handleOpenEnquiry(prog)} />

        {/* Learning Approach Section */}
        <LearningApproach />

        {/* Activities Section */}
        <Activities onOpenEnquiry={() => handleOpenEnquiry("Activities & Curriculum")} />

        {/* Gallery Section */}
        <Gallery />

        {/* Parent Reassurance Corner */}
        <ParentCorner onOpenEnquiry={() => handleOpenEnquiry("Parent Partnership")} />

        {/* High-Impact Admissions CTA Section */}
        <AdmissionsCTA />

        {/* FAQ Section */}
        <FAQ />

        {/* Campus Location & Navigation Section */}
        <LocationSection />

        {/* Final Emotional CTA Section */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry("Admission Enquiry")} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry("Footer Enquiry")} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileStickyCTA onOpenEnquiry={() => handleOpenEnquiry("Mobile Quick Enquiry")} />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        defaultProgram={selectedProgram}
      />
    </div>
  );
}
