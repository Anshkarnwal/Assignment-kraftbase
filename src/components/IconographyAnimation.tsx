// IconographyAnimation.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const IconographyAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the variants for the container background
  const containerVariants = {
    initial: {
      backgroundColor: "#CDDC39" // Lime green background
    },
    hover: {
      backgroundColor: "#000000" // Black background
    }
  };

  // Define the variants for the lock icon
  const lockBodyVariants = {
    initial: {
      fill: "#2E4F1F", // Dark green
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  const lockShackleVariants = {
    initial: {
      fill: "#2E4F1F", // Dark green
      stroke: "transparent",
      strokeWidth: 0
    },
    hover: {
      fill: "transparent",
      stroke: "white",
      strokeWidth: 2
    }
  };

  const keyHoleVariants = {
    initial: {
      fill: "#CDDC39", // Lime green (same as background)
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
      <h2 className={`text-3xl font-semibold p-6 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-slate-800'}`}>Iconography</h2>
      
      <motion.svg
        className="absolute bottom-8 left-8"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Lock body */}
        <motion.rect
          x="12"
          y="25"
          width="36"
          height="30"
          rx="5"
          variants={lockBodyVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Lock shackle */}
        <motion.path
          d="M20,25 L20,15 C20,8 40,8 40,15 L40,25"
          variants={lockShackleVariants}
          transition={{ duration: 0.5 }}
        />
        
        {/* Keyhole */}
        <motion.circle
          cx="30"
          cy="40"
          r="5"
          variants={keyHoleVariants}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default IconographyAnimation;