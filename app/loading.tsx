"use client";

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#001f3f] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <Loader2 className="w-12 h-12 text-blue-400" />
        </motion.div>
        <p className="text-blue-200 text-lg">Loading amazing content...</p>
      </motion.div>
    </div>
  );
}