import React from "react";
import { Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-5 px-6 bg-[#0a0a0f] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">MS</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 text-sm">Automation Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            {["About", "Experience", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-sajid-mir-b99137159/" },
              { icon: Mail, href: "mailto:mohammadsajidmir@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                className="text-gray-600 hover:text-white transition-colors duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            © {currentYear} Mo Sajid. Built with <Heart className="w-3.5 h-3.5 text-yellow-500" /> and clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}