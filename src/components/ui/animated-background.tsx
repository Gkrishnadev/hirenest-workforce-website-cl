import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

export function AnimatedBackground({
  children,
  className,
}: {
  children: React.ReactElement[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative flex items-center ${className}`}>
      {children.map((child, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  style={{ zIndex: 0 }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10">{child}</div>
          </div>
        );
      })}
    </div>
  );
}
