"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const organizers = [
  {
    name: 'Rayen Hammami',
    title: 'Lead Organizer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sarah Chen',
    title: 'Event Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
];

export function Organizers() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#003366] to-[#001f3f]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"
        >
          Meet Our Organizers
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[400px]"
                >
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{organizer.name}</h3>
                    <p className="text-blue-200">{organizer.title}</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}