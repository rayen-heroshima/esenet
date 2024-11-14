"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function Partners() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white text-[#002b56]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-500 mb-16"
        >
          Our Partners
        </motion.h2>

        <div className="grid md:grid-cols-[1fr,2px,1fr] gap-12 items-center">
          {/* Left side - Thank you message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#002b56] mb-4">Thank You to Our Partners</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We extend our heartfelt gratitude to all our partners who have made this event possible. Your commitment to fostering innovation and supporting the next generation of tech talent is invaluable. Together, we're building bridges between education and industry.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {['TechCorp', 'InnovateLabs', 'GlobalTech', 'FutureTech'].map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Center - Divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            className="hidden md:block w-0.5 h-80 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 rounded-full"
          />

          {/* Right side - Partners Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
              alt="Our Partners"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-medium">Building Success Together</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}