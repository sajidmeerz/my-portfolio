import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CloudSync Pro",
    description: "A real-time collaborative platform enabling teams to sync files, manage projects, and communicate seamlessly. Built with a microservices architecture handling 10K+ concurrent users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "WebSocket", "AWS", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "FinTrack AI",
    description: "Intelligent financial dashboard using ML to predict spending patterns and provide personalized saving recommendations. Processes 1M+ transactions daily.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "Redis"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description: "An open-source CLI tool that automates development workflows, from project scaffolding to deployment. 2K+ GitHub stars.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    tags: ["Go", "Docker", "CI/CD", "Open Source"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "HealthPulse",
    description: "HIPAA-compliant telemedicine platform with real-time video consultations, appointment scheduling, and secure health records management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Next.js", "WebRTC", "GraphQL", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-500 ${
        project.featured ? "md:col-span-1 lg:row-span-1" : ""
      }`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.live}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/[0.05] text-gray-400 border-white/[0.06] hover:bg-white/[0.08] text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-violet-400 tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Selected work I'm proud of
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-lg">
            Each project represents a unique challenge and solution, from scalable cloud platforms to intelligent AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}