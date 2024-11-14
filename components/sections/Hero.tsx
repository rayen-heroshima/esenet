"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleScroll = () => {
    const nextSection = document.querySelector('#introduction');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef} 
      className="relative h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002b56]/70 via-[#003366]/75 to-[#004080]/80" />
      </motion.div>

      <BackgroundParticles />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Logo Space */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-200">ESENet</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-400/10 border border-blue-300/20 backdrop-blur-sm"
          >
            <span className="text-blue-100 font-medium">November 25th, 2024</span>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100">
              ESENet Job Fair 2024
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-blue-50/90 font-light max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connect with industry leaders and shape your future
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-13 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-300/30 group-hover:bg-blue-400/30 transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 text-blue-100" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

function BackgroundParticles() {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
          initial={{ opacity: 0.1, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
            x: Math.sin(i) * 100,
            y: Math.cos(i) * 100,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}