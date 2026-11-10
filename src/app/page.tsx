import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import JyotOSShowcase from '@/components/products/JyotOSShowcase';
import ProductShowcase from '@/components/products/ProductShowcase';
import EnterpriseArchitectureBlueprint from '@/components/architecture/EnterpriseArchitectureBlueprint';
import CaseStudiesSection from '@/components/proof/CaseStudiesSection';
import ContactSection from '@/components/home/ContactSection';
import HowWeWork from '@/components/home/HowWeWork';
import SolutionMatcher from '@/components/conversion/SolutionMatcher';
import ArchitectureTopology from '@/components/home/ArchitectureTopology';
import Reveal from '@/components/ui/Reveal';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg overflow-hidden cyber-grid-bg">
      {/* 1. Hero: layered planes with a live product window */}
      <HeroSection />

      {/* 2. Free sample: the Solution Matcher, right under the hero */}
      <section id="matcher" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-44 md:pt-56 pb-16 scroll-mt-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Not sure where to start? Try it in 60 seconds.
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Answer three questions about your institution and get a recommended setup, with no sign-up.
          </p>
        </div>
        <SolutionMatcher />
      </section>

      {/* 3. Trust & credibility strip */}
      <Reveal>
        <TrustStrip />
      </Reveal>

      {/* 3b. How the platform thinks (pipeline visual) */}
      <Reveal>
        <ArchitectureTopology />
      </Reveal>

      {/* 3. Capabilities: what we build */}
      <Reveal>
        <CapabilitiesSection />
      </Reveal>

      {/* 4. Flagship: JyotOS Platform */}
      <Reveal>
        <JyotOSShowcase />
      </Reveal>

      {/* 5. Product ecosystem: featured four plus compact list */}
      <Reveal>
        <ProductShowcase />
      </Reveal>

      {/* 6. Enterprise architecture blueprint */}
      <Reveal>
        <EnterpriseArchitectureBlueprint />
      </Reveal>

      {/* 7. Case studies */}
      <Reveal>
        <CaseStudiesSection />
      </Reveal>

      {/* 8. How we work */}
      <Reveal>
        <HowWeWork />
      </Reveal>

      {/* 9. Executive consultation and conversion CTA */}
      <Reveal>
        <ContactSection />
      </Reveal>
    </div>
  );
}
