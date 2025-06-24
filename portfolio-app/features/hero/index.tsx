import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <div id='home'>
      {/* Hero Section */}
      <section className="relative min-h-[120vh] md:min-h-screen flex items-center justify-center px-6 py-8 md:pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center space-y-8 z-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Alex Developer
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
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 md:items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-sm transform hover:scale-105 transition-all duration-300">
              Hire Me
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-sm cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div> */}
      </section>
    </div>
  );
}

export default HeroSection