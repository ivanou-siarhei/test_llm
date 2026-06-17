import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AppEmbed from "@/components/landing/AppEmbed";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyItMatters from "@/components/landing/WhyItMatters";
import UseCases from "@/components/landing/UseCases";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppEmbed />
      <HowItWorks />
      <WhyItMatters />
      <UseCases />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
