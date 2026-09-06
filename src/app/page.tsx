import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import JyotOSShowcase from '@/components/products/JyotOSShowcase';
import ProductShowcase from '@/components/products/ProductShowcase';
import EnterpriseArchitectureBlueprint from '@/components/architecture/EnterpriseArchitectureBlueprint';
import CaseStudiesSection from '@/components/proof/CaseStudiesSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg overflow-hidden cyber-grid-bg">
      {/* 1. Hero Experience with Signature Intelligence Network Visualization */}
      <HeroSection />

      {/* 2. Trust & Credibility Strip */}
      <TrustStrip />

      {/* 3. Capabilities: What We Build */}
      <CapabilitiesSection />

      {/* 4. Flagship Experience: JyotOS Platform ("One Campus. One Intelligence.") */}
      <JyotOSShowcase />

      {/* 5. Complete Product Ecosystem Catalog with Interactive Detail Inspector */}
      <ProductShowcase />

      {/* 6. Interactive Enterprise Architecture Blueprint */}
      <EnterpriseArchitectureBlueprint />

      {/* 7. Proven Project Story & Case Studies (Proof Over Adjectives) */}
      <CaseStudiesSection />

      {/* 8. Executive Consultation Hub & Conversion CTA */}
      <ContactSection />
    </div>
  );
}
