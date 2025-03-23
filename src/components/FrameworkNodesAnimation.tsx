// FrameworkNodesAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const FrameworkNodesAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the nodes positions
  const initialNodes = [
    { x: 70, y: 130 },  // Top node
    { x: 330, y: 220 }, // Right node
    { x: 70, y: 310 }   // Bottom node
  ];

  const finalNodes = [
    { x: 50, y: 50 },         // Top left node
    { x: 330, y: 220 },       // Right node
    { x: 70, y: 310 }         // Bottom node
  ];

  // Define the path variants for the lines
  const pathVariants = {
    initial: {
      d: `M${initialNodes[0].x},${initialNodes[0].y} L${initialNodes[1].x},${initialNodes[1].y} L${initialNodes[2].x},${initialNodes[2].y}`
    },
    hover: {
      d: `M${finalNodes[0].x},${finalNodes[0].y} C${finalNodes[0].x + 150},${finalNodes[0].y + 50} ${finalNodes[1].x - 100},${finalNodes[1].y - 100} ${finalNodes[1].x},${finalNodes[1].y} M${finalNodes[2].x},${finalNodes[2].y} C${finalNodes[2].x + 100},${finalNodes[2].y - 50} ${finalNodes[1].x - 50},${finalNodes[1].y + 20} ${finalNodes[1].x},${finalNodes[1].y}`
    }
  };

  return (
    <div
      className="relative w-full max-w-xs h-96 bg-slate-800 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl text-blue-200 font-semibold p-6">Framework</h2>
      
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Lines connecting nodes */}
        <motion.path
          variants={pathVariants}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Nodes */}
        {isHovered ? (
          // Curved lines version (hover state)
          <>
            <motion.rect
              x={finalNodes[0].x - 6}
              y={finalNodes[0].y - 6}
              width="12"
              height="12"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              animate={{ x: finalNodes[0].x - 6, y: finalNodes[0].y - 6 }}
              initial={{ x: initialNodes[0].x - 6, y: initialNodes[0].y - 6 }}
              transition={{ duration: 0.6 }}
            />
            <motion.rect
              x={finalNodes[1].x - 6}
              y={finalNodes[1].y - 6}
              width="12"
              height="12"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />
            <motion.rect
              x={finalNodes[2].x - 6}
              y={finalNodes[2].y - 6}
              width="12"
              height="12"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
            />
          </>
        ) : (
          // Straight lines version (initial state)
          <>
            <motion.circle
              cx={initialNodes[0].x}
              cy={initialNodes[0].y}
              r="6"
              fill="#CBD5E1"
            />
            <motion.circle
              cx={initialNodes[1].x}
              cy={initialNodes[1].y}
              r="6"
              fill="#CBD5E1"
            />
            <motion.circle
              cx={initialNodes[2].x}
              cy={initialNodes[2].y}
              r="6"
              fill="#CBD5E1"
            />
          </>
        )}
      </motion.svg>
    </div>
  );
};

export default FrameworkNodesAnimation;