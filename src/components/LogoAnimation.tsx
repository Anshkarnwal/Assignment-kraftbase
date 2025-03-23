// LogoAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const LogoAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#4DD0E1" // Light blue background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the dropbox logo diamonds
  const diamondVariants = {
    initial: {
      fill: "#0B6E7C", // Teal color for the filled diamonds
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
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-800'}`}>Logo</h2>
      
      <motion.svg
        className="absolute bottom-8 right-8"
        width="80"
        height="80"
        viewBox="0 0 100 100"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Top left and top right diamonds */}
        <motion.path
          d="M35,30 L50,40 L65,30 L50,20 Z"
          variants={diamondVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M65,30 L80,40 L65,50 L50,40 Z"
          variants={diamondVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Bottom left and bottom right diamonds */}
        <motion.path
          d="M35,50 L50,60 L35,70 L20,60 Z"
          variants={diamondVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M50,40 L65,50 L50,60 L35,50 Z"
          variants={diamondVariants}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LogoAnimation;