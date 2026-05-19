import { Navbar } from "@/components/Navbar";
import { BackgroundFX } from "@/components/BackgroundFX";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Offer } from "@/sections/Offer";
import { WhyChoose } from "@/sections/WhyChoose";
import { Outputs } from "@/sections/Outputs";
import { Team } from "@/sections/Team";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";

export default function HomePage() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <WhyChoose />
        <Outputs />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
