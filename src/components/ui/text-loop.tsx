import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextLoopProps {
  children: string[];
  className?: string;
  interval?: number;
}

export function TextLoop({
  children,
  className,
  interval = 3000,
}: TextLoopProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % children.length);
    }, interval);
    return () => clearInterval(timer);
  }, [children.length, interval]);

  return (
    <div className={`relative inline-block ${className}`} style={{ minWidth: 'min-content' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="whitespace-nowrap"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
