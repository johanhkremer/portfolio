import AboutSection from "@/components/server/about-section";
import ContactSection from "@/components/server/contact-section";
import HeroSection from "@/components/server/hero-section";
import ProjectSection from "@/components/server/projects-section";

export default function Main() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}