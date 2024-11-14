"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Introduction() {
  return (
    <section id="introduction" className="py-32 px-4 md:px-8 bg-white text-[#002b56]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden group"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Job Fair"
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-400">
            Welcome to ESENet
          </h2>
          <p className="text-xl leading-relaxed mb-10 text-gray-600">
            Join us for an extraordinary networking experience where talent meets
            opportunity. ESENet Job Fair brings together industry leaders,
            innovative companies, and ambitious professionals in a dynamic
            environment designed to foster meaningful connections and career
            growth.
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}