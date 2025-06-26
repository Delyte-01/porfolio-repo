"use client"
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from "react";



const words:string[] = [
  "a frontend craftsman",
  "a React & Next.js expert",
  "an AI-assisted web builder",
  "a scalable UI engineer",
  "a performance-first coder",
];

const HeroSection = () =>
{
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!reverse && subIndex === currentWord.length) {
      // pause before deleting
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor blinking
  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  const phoneNumber = "2348139760048"; // Nigeria +234
  const Message = encodeURIComponent("Hello, I'm interested in your work!");

  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative min-h-[130vh] md:min-h-screen flex items-center justify-center px-6 py-8 md:pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center space-y-8 z-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm md:text-[16px] text-green-400">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-space">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies.
              Specializing in React, TypeScript, and cutting-edge web
              development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 md:items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-sm transform hover:scale-105 transition-all duration-300">
              <Link href={`https://wa.me/${phoneNumber}?text=${Message}`}>Hire Me</Link>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-sm cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <Link
                href="/Eze_samuel_delyte_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection