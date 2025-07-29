'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: number;
}

export default function AnimatedCard({ src, alt, title, description, index }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="border rounded-lg overflow-hidden shadow-sm"
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}