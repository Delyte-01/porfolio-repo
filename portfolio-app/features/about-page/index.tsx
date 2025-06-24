import { MotionDiv } from '@/components/framer-wrapper';
import { Button } from '@/components/ui/button';
import { Code2, FileText, Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react'



const skills = [
  { name: "React", level: 90,  },
  { name: "TypeScript", level: 85,  },
  { name: "Next.js", level: 80,  },
  { name: "Tailwind CSS", level: 95,  },
  { name: "JavaScript", level: 90,  },
  { name: "Node.js", level: 75,  },
];




const AboutSection = () => {
  return (
    <div id="about">
      {" "}
      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a dedicated front-end developer with 3+ years of experience
                building modern, responsive web applications. I specialize in
                React, TypeScript, and modern CSS frameworks, always focusing on
                performance, accessibility, and user experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or mentoring fellow
                developers. I believe in writing clean, maintainable code and
                staying up-to-date with the latest industry trends.
              </p>

              <div className="flex flex-col min-h-[100px] md:flex-row gap-4 md:h-[70px] ">
                <Button
                  variant="outline"
                  className=" flex-1 md:h-[50px] cursor-pointer"
                >
                  <Link
                    href="https://github.com/Delyte-01"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className=" flex-1 md:h-[50px] cursor-pointer"
                >
                  <Link
                    href="/ezechukwu_sam_Resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6 font-space">
              <h3 className="text-2xl font-semibold mb-8 ">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 ">
                    <MotionDiv
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></MotionDiv>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection