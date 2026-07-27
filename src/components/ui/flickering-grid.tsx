import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(6, 182, 212)",
  width,
  height,
  className,
  maxOpacity = 0.15,
}) => {
  const [gridSize, setGridSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setGridSize({
          width: width || containerRef.current.clientWidth,
          height: height || containerRef.current.clientHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [width, height]);

  const cols = Math.floor(gridSize.width / (squareSize + gridGap));
  const rows = Math.floor(gridSize.height / (squareSize + gridGap));

  const squares = useMemo(() => {
    const result = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result.push({
          x: j * (squareSize + gridGap),
          y: i * (squareSize + gridGap),
          flickerDelay: Math.random() * 2,
          flickerDuration: 1 + Math.random() * 3,
          baseOpacity: Math.random() < flickerChance ? Math.random() * maxOpacity : 0,
        });
      }
    }
    return result;
  }, [rows, cols, squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width={gridSize.width} height={gridSize.height}>
        {squares.map((sq, i) => (
          <motion.rect
            key={i}
            x={sq.x}
            y={sq.y}
            width={squareSize}
            height={squareSize}
            fill={color}
            initial={{ opacity: sq.baseOpacity }}
            animate={
              sq.baseOpacity > 0
                ? {
                    opacity: [sq.baseOpacity, 0, sq.baseOpacity],
                  }
                : {}
            }
            transition={
              sq.baseOpacity > 0
                ? {
                    duration: sq.flickerDuration,
                    delay: sq.flickerDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        ))}
      </svg>
    </div>
  );
};
