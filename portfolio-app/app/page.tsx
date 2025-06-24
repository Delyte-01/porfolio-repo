

import AboutSection from "@/features/about-page";
import Footer from "@/features/contact";
import Navigation from "@/features/header";
import HeroSection from "@/features/hero";
import ProjectSection from "@/features/projects";
import { ReviewCarousel } from "@/features/testimonial";

import React from "react";

const page = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ReviewCarousel />
      <Footer />
    </div>
  );
};

export default page;
