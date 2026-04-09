import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Developer L3",
    company: "Wipro Limited",
    period: "Dec 2025 — Present",
    description: "Leading automation initiatives, designing scalable workflows with Python, Shell scripting, and Power Automate. Streamlined repetitive processes to reduce manual effort by 70%, accelerated deployment cycles, and improved system reliability across enterprise environments.",
    highlights: ["Automate Repetive Tasks", "Workflow Optimization", "Python & Power Automate"],
  },
  {
    role: "Developer L2",
    company: "Wipro Limited",
    period: "March 2023 — Nov 2025",
    description: "Implemented and optimized automation workflows in HCL Workload Automation, cutting manual effort by 40%, enhancing reliability of enterprise operations and improving SLA compliance across critical business processes.",
    highlights: ["HCL Workload Automation", "Workflow Optimization"]
  },
  {
    role: "Tools Engineer",
    company: "Wipro Limited",
    period: "Aug 2021 — Feb 2023",
    description: "Developed and maintained automation frameworks using HCL Workload Automation, enhancing reliability and efficiency of enterprise operations.",
    highlights: ["HWA Admin", "Automated Ticketing", "Job Scheduling"]
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-yellow-400 tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Where I've made an impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 hidden md:flex">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0f] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-violet-400" />
                        <span className="text-yellow-600 font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}