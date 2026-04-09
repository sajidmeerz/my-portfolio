import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 
  // "idle" | "sending" | "sent"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending"); // show immediate feedback

    emailjs.sendForm(
      "service_gvov9rw",     // Your Service ID
      "template_2mlcueg",    // Your Template ID
      e.target,              // the form element
      "R-9qIFY499B95yr74"    // Your Public Key from EmailJS
    ).then(
      () => {
        setStatus("sent"); // show success
        setTimeout(() => setStatus("idle"), 3000); // reset after 3s
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("EmailJS error:", error);
        setStatus("idle"); // reset if error
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0a0a0f] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[200px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-yellow-400 tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">
            Let's work together
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed text-lg">
            Have an idea brewing? I’d love to help bring it to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info (left column) */}
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
                    <item.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-yellow-300 transition-colors flex items-center gap-1">
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
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "Transforming complexity into simplicity through automation. Let’s streamline, optimize, and make your vision real."
              </p>
              <p className="text-violet-400 text-sm mt-3 font-medium">— Mo Sajid</p>
            </div>
          </motion.div>

          {/* Contact Form (right column) */}
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
                    name="user_name"
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
                    name="user_email"
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
                  name="message"
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
                disabled={status === "sending"} // prevent multiple clicks
                className={`w-full h-12 rounded-xl font-medium text-base transition-all duration-300 ${
                  status === "sent"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : status === "sending"
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                }`}
              >
                {status === "sent" ? (
                  "Message Sent! ✓"
                ) : status === "sending" ? (
                  "Sending..."
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