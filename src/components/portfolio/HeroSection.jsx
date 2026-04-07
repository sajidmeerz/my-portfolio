import React from "react";
import dp from "../../assets/dp.png";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 py-24">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-700/50 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-700/50 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/40 rounded-full blur-[200px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="w-24 h-24 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/40 ring-4 ring-violet-500/50">
              <img src={dp} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-gray-950" />
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm mb-8 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-gray-100 tracking-wide">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-100 leading-[1.05]"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Mo. Sajid Mir
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-lg sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed italic"
        >
          Crafting automation solutions and scalable web systems.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-4 flex flex-wrap justify-center gap-4 text-gray-100 text-sm sm:text-base"
        >
          <span className="px-3 py-1 rounded-full border border-white/40 bg-gray-800">Automation Engineer</span>
          <span className="px-3 py-1 rounded-full border border-white/40 bg-gray-800">Web Developer</span>
          <span className="px-3 py-1 rounded-full border border-white/40 bg-gray-800">Cloud & AWS</span>
          <span className="px-3 py-1 rounded-full border border-white/40 bg-gray-800">HCL HWA Admin</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 text-base font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-5 h-5" /> View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/50 text-gray-100 hover:bg-white/20 rounded-full px-8 h-12 text-base font-medium transition-all duration-300 bg-transparent flex items-center gap-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="w-5 h-5" /> Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/50 text-gray-100 hover:bg-white/20 rounded-full px-8 h-12 text-base font-medium transition-all duration-300 bg-transparent flex items-center gap-2"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileText className="w-5 h-5" /> Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-sajid-mir-b99137159/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mohammadsajidmir@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              title={social.label}
              className="p-3 rounded-full border border-white/50 text-gray-100 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400"
        >
          <ArrowDown className="w-5 h-5 text-gray-100" />
        </motion.div>
      </motion.div>
    </section>
  );
}