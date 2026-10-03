import { HeroSection }     from "./components/hero-section";
import { WelcomeSection }  from "./components/welcome-section";
import { ServicesSection } from "./components/services-section";
import { WhySection }      from "./components/why-section";
import { ProofBar }        from "./components/proof-bar";
import { ClientsSection }  from "./components/clients-section";
import { ApproachTeaser }  from "./components/approach-teaser";
import { HelloBluTeaser }  from "./components/helloblu-teaser";
import { CtaSection }      from "./components/cta-section";
import { RevealObserver }  from "./components/reveal-observer";
import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  alternates: { canonical: "https://bluladr.com/" },
};

export function HomePage() {
  return (
    <>
      <RevealObserver />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <WhySection />
      <ProofBar />
      <ClientsSection />
      <ApproachTeaser />
      <HelloBluTeaser />
      <CtaSection />
    </>
  );
}
