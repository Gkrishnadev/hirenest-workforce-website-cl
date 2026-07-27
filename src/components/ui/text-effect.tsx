import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type TextEffectProps = {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  per?: 'char' | 'word';
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  delay?: number;
};

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4 } },
};

export function TextEffect({
  children,
  className,
  as: Component = 'div',
  per = 'word',
  variants,
  delay = 0,
}: TextEffectProps) {
  const words = children.split(' ');
  const letters = children.split('');
  const elements = per === 'word' ? words : letters;

  const MotionComponent = motion[Component as keyof typeof motion] as any;

  const container = variants?.container || defaultContainerVariants;
  const item = variants?.item || defaultItemVariants;

  if (delay > 0 && container.visible && typeof container.visible === 'object') {
     if ('transition' in container.visible) {
       (container.visible.transition as any).delayChildren = delay;
     }
  }

  return (
    <MotionComponent
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block', whiteSpace: per === 'word' ? 'normal' : 'pre-wrap' }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: 'inline-block', paddingRight: per === 'word' && i < elements.length - 1 ? '0.25em' : '0' }}
        >
          {el === ' ' && per === 'char' ? '\u00A0' : el}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
