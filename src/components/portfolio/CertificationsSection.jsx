import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import JavaImg from "@/assets/java.jpeg";
import GoogleImg from "@/assets/googlesup.jpeg";
import IbmCyberImg from "@/assets/cybersec.jpeg";

const certifications = [
  {
    name: "Java For Android",
    provider: "Coursera",
    period: "June 2020",
    description: "Demonstrated proficiency in leveraging core Java programming and Android Studio to develop scalable, user‑focused mobile applications.",
    highlights: ["Andriod Studio", "Java", "Andriod Development", "Algorithms", "Data Structures"],
    url: "https://www.coursera.org/account/accomplishments/verify/YZQBAPUCK547",
    image: JavaImg,
  },
  {
    name: "Google Google IT Support Professional",
    provider: "Coursera",
    period: "April 2024",
    description: "Validated expertise in troubleshooting, networking, operating systems, system administration, and IT security, with competencies aligned to entry‑level IT support roles.",
    highlights: ["Computer Hardware", "System Administration", "Networking", "File Systems", "IT Automation", "Troubleshooting", "Techincal Support", "Version Control"],
    url: "https://www.coursera.org/account/accomplishments/certificate/EJBT9SGVKWP2",
    image: GoogleImg,
  },
  {
    name: "Introduction to Cybersecurity Tools & Cyberattacks",
    provider: "Coursera",
    period: "April 2024",
    description: "Developed foundational skills in threat recognition, malware prevention, authentication, and identity management to safeguard digital assets and apply security controls across networks.",
    highlights: ["MFA", "Cybersecurity", "Security Controls", "IAM", "Authentications"],
    url: "https://www.coursera.org/account/accomplishments/certificate/CXC6DQDENHRC",
    image: IbmCyberImg,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-yellow-400 tracking-widest uppercase">Certifications</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Certifications & Training
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-lg">
            Continuous learning and staying current with industry standards and best practices.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-16"
              >
                <div className="absolute left-0 top-1.5 hidden md:flex">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0f] flex items-center justify-center">
                    <Award className="w-4 h-4 text-violet-400" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                        {cert.url && (
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-400 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Award className="w-4 h-4 text-violet-400" />
                        <span className="text-yellow-600 font-medium">{cert.provider}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 mb-4">
                    <p className="text-gray-400 leading-relaxed flex-1">{cert.description}</p>
                    {cert.image && (
                      <div className="rounded-xl overflow-hidden border border-white/[0.06] w-full sm:w-48 flex-shrink-0">
                        <img
                          src={cert.image}
                          alt={`${cert.name} preview`}
                          className="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
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