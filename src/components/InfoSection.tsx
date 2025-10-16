"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function InfoSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-10 md:py-16">
      {/* Sparkle Background */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1.2}
          particleDensity={800}
          className="w-full h-full"
          particleColor="#fff"
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12">
        <motion.div
          className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 lg:-ml-48"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Reach Me Out
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-gray-300 text-lg md:text-xl max-w-md"
          >
            I’d love to connect! You can reach me anytime through these
            platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center md:items-end mt-8 md:mt-0 space-y-4 lg:-mr-36"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Catchy line above icons */}
          <motion.p
            variants={fadeIn}
            className="text-gray-300 text-lg md:text-xl font-semibold text-center md:text-right"
          >
            Let’s collaborate or just say hi 👋
          </motion.p>

          {/* Icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <motion.a
              variants={fadeIn}
              href="https://wa.me/9579847763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl text-white" />
            </motion.a>
            <motion.a
              variants={fadeIn}
              href="https://www.instagram.com/_vishal4real"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="text-2xl text-white" />
            </motion.a>
            <motion.a
              variants={fadeIn}
              href="https://www.linkedin.com/in/vishal4real"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl text-white" />
            </motion.a>
            <motion.a
              variants={fadeIn}
              href="https://github.com/Vishal4real"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="text-2xl text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Top & Bottom subtle gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
