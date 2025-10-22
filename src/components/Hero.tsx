"use client";
import React from "react";
import { motion } from "framer-motion";
import { Braces } from "lucide-react";
import Link from "next/link";
import CodeTerminal from "./CodeTerminal";
import { HoverBorderGradientDemo } from "./HoverBorderGradientButton";

function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans pt-12 lg:px-0 md:px-0 sm:px-12">
      {/* Main content */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-16 md:px-12">
        <div className="grid w-full max-w-8xl grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Left column - Text content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <div className="flex items-center mb-4">
                <Braces className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                <p className="text-base sm:text-lg font-semibold uppercase tracking-wide text-blue-400">
                  Hello, I&apos;m
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h1 className="mb-6 text-4xl sm:text-5xl text-white md:text-7xl">
                Vishal Vishwakarma
              </h1>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="mb-8 max-w-lg text-2xl sm:text-3xl font-semibold text-gray-300 md:text-4xl">
                Frontend Engineer &{" "}
                <span className="text-blue-400">Full-Stack Developer</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeIn}>
              <p className="mb-10 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200">
                Frontend Engineer with{" "}
                <span className="text-blue-300">2 years</span> of experience
                building scalable web and mobile applications using{" "}
                <span className="text-blue-300">React.js</span>,{" "}
                <span className="text-blue-300">Next.js </span>, and
                <span className="text-blue-300"> TypeScript</span>
              </p>
            </motion.div>
            <div className="h-fit w-fit text-base sm:text-lg">
      <Link
        href="https://drive.google.com/file/d/1tIFHQwipB0qTIK1MZ8msi3upRTpV2-i_/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverBorderGradientDemo ButtonName="Take a look yourself" />
      </Link>
    </div>
          </motion.div>

          {/* Right column - Terminal */}
          <motion.div
            className="flex items-center justify-center rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full max-w-[620px] shadow-2xl">
              <CodeTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
