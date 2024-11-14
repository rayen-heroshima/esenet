"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Clock, Coffee, Laptop, Mic, Users, Zap } from 'lucide-react';

const programs = [
  {
    time: '09:00 AM',
    title: 'Welcome Speech',
    description: 'Opening remarks and event overview',
    icon: Mic,
  },
  {
    time: '10:00 AM',
    title: 'Company Presentations',
    description: 'Leading companies showcase opportunities',
    icon: Laptop,
  },
  {
    time: '11:30 AM',
    title: 'Networking Break',
    description: 'Connect with professionals over coffee',
    icon: Coffee,
  },
  {
    time: '01:00 PM',
    title: 'Panel Discussion',
    description: 'Industry experts share insights',
    icon: Users,
  },
  {
    time: '02:30 PM',
    title: 'Innovation Showcase',
    description: 'Latest tech trends and solutions',
    icon: Zap,
  },
  {
    time: '04:00 PM',
    title: 'Closing Session',
    description: 'Final networking and wrap-up',
    icon: Clock,
  },
];

export function Program() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-500"
        >
          Event Program
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-blue-50/50 hover:bg-blue-50 border-blue-100/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <program.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-blue-600 text-sm mb-1">{program.time}</p>
                    <h3 className="text-xl font-semibold mb-2 text-[#002b56]">
                      {program.title}
                    </h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}