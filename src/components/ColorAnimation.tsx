// ColorAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const ColorAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#FF9800" // Orange background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the squares and circles
  const squareVariants = {
    initial: {
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      stroke: "white",
      strokeWidth: 2
    }
  };

  const circleVariants = {
    initial: {
      fill: "#8B4513", // Brown circles
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-xs h-80 rounded-lg overflow-hidden cursor-pointer"
      variants={containerVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.4 }}
    >
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-800'}`}>Color</h2>
      
      <div className="absolute bottom-8 right-8">
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {/* Top right square and circle */}
          <motion.rect
            x="40"
            y="20"
            width="20"
            height="20"
            fill={isHovered ? "transparent" : "#A04000"}
            variants={squareVariants}
            transition={{ duration: 0.5 }}
          />
          <motion.circle
            cx="50"
            cy="30"
            r="7"
            variants={circleVariants}
            transition={{ duration: 0.5 }}
          />
          
          {/* Bottom left square and circle */}
          <motion.rect
            x="20"
            y="40"
            width="20"
            height="20"
            fill={isHovered ? "transparent" : "#A04000"}
            variants={squareVariants}
            transition={{ duration: 0.5 }}
          />
          <motion.circle
            cx="30"
            cy="50"
            r="7"
            variants={circleVariants}
            transition={{ duration: 0.5 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ColorAnimation;