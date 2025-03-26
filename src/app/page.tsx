import { ClientLogos } from "@/components/ClientLogos";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { ServicesSection } from "@/components/ServicesSection";
import { ValueProposition } from "@/components/ValueProposition";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ClientLogos />
      <ValueProposition />
      <ServicesSection />
      <CTASection />
      <Newsletter />
      <Footer />
    </main>
  );
}
