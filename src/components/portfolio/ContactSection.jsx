import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[200px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-violet-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Let's work together
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-lg">
            Have an idea brewing? I’d love to help bring it to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "mohammadsajidmir@gmail.com", href: "mailto:mohammadsajidmir@gmail.com" },
                { icon: MapPin, label: "Location", value: "Srinagar, J&K, India" },
                { icon: Clock, label: "Timezone", value: "IST (UTC +5:30)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-violet-300 transition-colors flex items-center gap-1">
                        {item.value}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-gray-400 text-sm leading-relaxed">
                "Transforming complexity into simplicity through automation. Let’s streamline, optimize, and make your vision real."
              </p>
              <p className="text-violet-400 text-sm mt-3 font-medium">— Mo Sajid</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Your Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Mo Sajid"
                    required
                    className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500/50 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">Your Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="meerz@example.com"
                    required
                    className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500/50 h-12 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm">Message</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea..."
                  required
                  rows={5}
                  className="bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500/50 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className={`w-full h-12 rounded-xl font-medium text-base transition-all duration-300 ${
                  sent
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                }`}
              >
                {sent ? (
                  "Message Sent! ✓"
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}