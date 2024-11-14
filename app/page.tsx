"use client";

import { useScroll, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Static imports for critical components
import { Hero } from '@/components/sections/Hero';
import { Introduction } from '@/components/sections/Introduction';

// Dynamic imports for non-critical components
const Stats = dynamic(() => import('@/components/sections/Stats').then(mod => mod.Stats));
const Partners = dynamic(() => import('@/components/sections/Partners').then(mod => mod.Partners));
const Organizers = dynamic(() => import('@/components/sections/Organizers').then(mod => mod.Organizers));
const Program = dynamic(() => import('@/components/sections/Program').then(mod => mod.Program));
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact));
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => mod.Footer));

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen bg-[#001f3f] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Hero />
      <Introduction />
      <Stats />
      <Partners />
      <Organizers />
      <Program />
      <Contact />
      <Footer />
    </main>
  );
}