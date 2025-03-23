// TypographyAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const TypographyAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#FF5722" // Orange background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the letter A
  const letterAVariants = {
    initial: {
      fill: "#5D1D0E", // Dark maroon color
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  // Define the variants for the letter a
  const lowercaseAVariants = {
    initial: {
      fill: "#5D1D0E", // Dark maroon color
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
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-800'}`}>Typography</h2>
      
      <motion.svg
        className="absolute bottom-8 right-8"
        width="80"
        height="60"
        viewBox="0 0 100 70"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Capital A */}
        <motion.path
          d="M30,60 L40,20 L50,20 L60,60 L52,60 L49,50 L41,50 L38,60 Z M43,44 L47,44 L45,34 Z"
          variants={letterAVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Lowercase a */}
        <motion.path
          d="M75,40 C75,35 70,32 65,32 C60,32 55,35 55,40 C55,45 60,48 65,48 C68,48 72,47 75,45 L75,50 C72,52 68,53 65,53 C57,53 50,48 50,40 C50,32 57,27 65,27 C73,27 80,32 80,40 L80,60 L75,60 L75,55 C73,58 70,60 65,60 C60,60 55,57 55,52 C55,47 60,44 65,44 C70,44 75,47 75,52 Z"
          variants={lowercaseAVariants}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default TypographyAnimation;