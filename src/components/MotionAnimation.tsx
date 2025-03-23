// MotionAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#D8BFD8" // Light purple background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the path and nodes
  const pathVariants = {
    initial: {
      stroke: "#8B008B", // Dark purple
      strokeWidth: 3
    },
    hover: {
      stroke: "white",
      strokeWidth: 2
    }
  };

  const nodeVariants = {
    initial: {
      fill: "#8B008B", // Dark purple
      stroke: "transparent",
      strokeWidth: 0,
      rx: 4
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2,
      rx: 2
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
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-purple-900'}`}>Motion</h2>
      
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 400"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Curve path */}
        <motion.path
          d="M50,350 C120,300 180,150 250,50"
          fill="transparent"
          variants={pathVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Bottom left nodes */}
        <motion.rect
          x="30"
          y="330"
          width="20"
          height="20"
          variants={nodeVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.rect
          x="70"
          y="350"
          width="20"
          height="20"
          variants={nodeVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Top right nodes */}
        <motion.rect
          x="230"
          y="30"
          width="20"
          height="20"
          variants={nodeVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.rect
          x="270"
          y="50"
          width="20"
          height="20"
          variants={nodeVariants}
          transition={{ duration: 0.5 }}
        />

        {/* Straight lines connecting the nodes */}
        <motion.line
          x1="50"
          y1="350"
          x2="70"
          y2="350"
          variants={pathVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.line
          x1="250"
          y1="50"
          x2="270"
          y2="50"
          variants={pathVariants}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default MotionAnimation;