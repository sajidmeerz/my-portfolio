import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}