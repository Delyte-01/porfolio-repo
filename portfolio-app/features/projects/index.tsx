
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/framer-wrapper";
import Link from "next/link";


interface ProjectsProps {
  id: number;
  name: string;
  image: string;
  tech: string[];
  description: string;
  github: string;
  live: string;
}

const projects: ProjectsProps[] = [
  {
    id: 1,
    name: "Neo-AI App",
    image:
      "https://res.cloudinary.com/dk5mfu099/image/upload/v1750670564/Screenshot_of_NeoAI_1_duw3na.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gsap"],
    description:
      "A modern e-commerce admin dashboard with real-time analytics, inventory management, and responsive design.",
    github: "https://github.com/Delyte-01/Neo-Ai",
    live: "https://neo-ai-app.vercel.app/",
  },
  {
    id: 2,
    name: "Playo Gamifi-App",
    image:
      "https://res.cloudinary.com/dk5mfu099/image/upload/v1750671816/Screenshot_of_GAMI_FI_ah9xgl.jpg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Full-stack task management application with drag-and-drop functionality, user authentication, and team collaboration.",
    github: "https://github.com/Delyte-01/gami-fi",
    live: "https://gamifi-net.netlify.app/",
  },
  {
    id: 3,
    name: "Task Management App",
    image:
      "https://res.cloudinary.com/dk5mfu099/image/upload/v1750672058/OIP.-4TYjnX9aRZuGecN67J8vQHaE8_o1fswo.webp",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "Full-stack task management application with drag-and-drop functionality, user authentication, and team collaboration.",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.vercel.app",
  },
];
const ProjectSection = () => {
  return (
    <div id="projects">
      {" "}
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                key={index}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 p-0 shadow-lg">
                  <CardContent className="p-0  h-full rounded-lg relative overflow-hidden">
                    <div className="  relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6   flex flex-col justify-center ">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm h-[58px] ">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4 ">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3 h-[50px]  justify-between ">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-[45px]  flex-1"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="h-[45px]  flex-1">
                          <Link
                            href={project.live}
                            target="_blank"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
