"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="mb-8 relative w-[150px] h-[150px] mx-auto">
        <Image
          src="/portfolio.jpg"
          alt="Profile Picture"
          fill
          className="rounded-full object-cover border-4 border-primary"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
        About Me
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
        The journey of a passionate developer who loves technology and never
        stops learning
      </p>
    </motion.div>
  );
}
