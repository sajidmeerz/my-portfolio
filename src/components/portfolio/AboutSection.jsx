import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Globe, Workflow, Cpu, Network } from "lucide-react";

const skills = [
  { icon: Workflow, name: "Automation", items: ["Microsoft Power Automate", "Python/Shell Scripting", "Ansible", "Cron Jobs"] },
  { icon: Code2, name: "Web Development", items: ["HTML & CSS", "JavaScript", "Node.js", "Tailwind CSS"] },
  { icon: Globe, name: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "CI/CD", "Terraform"] },
  { icon: BrainCircuit, name: "AI & Generative Tools", items: ["Prompt Engineering", "ChatGPT", "Grok", "MS Copilot"] },
  { icon: Network, name: "IT Infrastructure", items: ["Data Center", "Networking", "Firewalls", "VPNs"] },
  { icon: Cpu, name: "Tools", items: ["HCL Workload Automation", "Git", "Linux/Unix", "Agile", "ServiceNow", "Splunk"] },
  
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl border border-white/20 bg-gray-900 hover:bg-gray-800 hover:border-white/40 transition-all duration-500"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/40 to-indigo-600/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <skill.icon className="w-5 h-5 text-violet-300" />
      </div>
      <h3 className="text-gray-100 font-semibold mb-3">{skill.name}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-100 border border-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-violet-700/30 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-violet-400 tracking-widest uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mt-3 leading-tight">
            Building software that makes a difference
          </h2>
          <p className="text-gray-200 mt-4 leading-relaxed text-lg mx-auto text-justify">
            Automation Engineer with 4+ years of experience in Python and Shell scripting, specializing in
            HCL Workload Automation (HWA) administration and job scheduling. Skilled in designing and
            optimizing enterprise automation workflows to reduce manual interventions and improve SLA compliance.
            Strong knowledge of Unix systems, AWS cloud services, and networking, with proven ability to deliver scalable,
            reliable, and efficient automation solutions across complex environments. Experienced Web Developer with
            expertise in building modern, responsive applications using React, Tailwind CSS, and cloud integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}