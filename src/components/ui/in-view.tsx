import { ReactNode, useRef } from 'react';
import { motion, useInView, Variant, Transition } from 'framer-motion';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  margin?: string;
  className?: string;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition = { duration: 0.5, ease: 'easeOut' },
  margin = '-50px',
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
