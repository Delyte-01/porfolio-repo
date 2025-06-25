"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaSquareWhatsapp } from "react-icons/fa6";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  LucideProps,
} from "lucide-react";
import Link from "next/link";

interface contactinfoProps {
  label: string;
  href: string;
  value: string;
  icon: React.ComponentType<any>;
  span?:string
}

 const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
   const formRef = useRef<HTMLFormElement>(null);
   
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0jx9mai", // from EmailJS dashboard
        "template_vkv4wyh", // from EmailJS templates
        formRef.current!,
        "Aq_1iyqK4MDR4viwa" // from EmailJS account
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("Failed to send message.");
        }
      );

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // You would typically handle the actual form submission here
    toast.success("Message sent successfully!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
   };
   const phoneNumber = "2348139760048"; // Nigeria +234
   const textMessage = encodeURIComponent(
     "Hello, I'm interested in your work!"
   );

  const contactInfo: contactinfoProps[] = [
    {
      icon: Mail,
      label: "Email",
      value: "madunecheezechukwu@gmail.com",
      href: "mailto:madunecheezechukwu@gmail.com",
    },
    {
      icon: FaSquareWhatsapp,
      label: "Whatsapp",
      value: "+234 8139760048",
      href: `https://wa.me/${phoneNumber}?text=${textMessage}`,
      span: "fill-green-700  w-7 h-7",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Delyte-01", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sammy-delyte-0a1224302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: " https://x.com/Sammydelyte?t=arT4zY01e4t-9wCcPGB-sA&s=09",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden w-full"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-space">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm available for freelance
            projects, internships, and full-time opportunities. Let's discuss
            how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 font-space">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-4 h-4 ${info.span} text-white`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm md:text-[16px] dark:text-white">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-space">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-50 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-3 h-3" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.2 }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-space">
                Looking for immediate availability?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently open to new opportunities and can start
                immediately.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-space bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="tel:08139760048">
                   Call Now
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 " ref={formRef}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Project Inquiry / Freelance Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full py-4 font-space bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact