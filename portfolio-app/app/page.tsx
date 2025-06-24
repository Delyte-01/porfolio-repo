
"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/features/about-page";
import Contact from "@/features/contact";
import Footer from "@/features/footer";
import Navigation from "@/features/header";
import HeroSection from "@/features/hero";
import ProjectSection from "@/features/projects";
import { ReviewCarousel } from "@/features/testimonial";

import React from "react";
import Loader from "@/components/loader";

const page = () =>
{
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 6000); // Adjust duration
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader isVisible={isLoading} />
  ) : (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ReviewCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
