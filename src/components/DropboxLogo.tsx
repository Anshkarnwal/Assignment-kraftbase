// DropboxLogo.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const DropboxLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the container
  const containerVariants = {
    default: {
      backgroundColor: '#40C4DE', // Turquoise color
      transition: { duration: 0.5 }
    },
    hover: {
      backgroundColor: '#000000', // Black
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for the logo text
  const logoTextVariants = {
    default: {
      color: '#2D3748', // Dark slate color
      transition: { duration: 0.5 }
    },
    hover: {
      color: '#FFFFFF', // White
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for diamond shapes
  const diamondVariants = {
    default: {
      fill: '#0E5C6D', // Dark teal
      stroke: '#0E5C6D',
      strokeWidth: '0px',
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      fill: 'transparent',
      stroke: '#FFFFFF', // White
      strokeWidth: '2px',
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  // Diamond positions (relative positioning in the SVG)
  const diamonds = [
    { cx: 25, cy: 25 }, // Top left
    { cx: 75, cy: 25 }, // Top right
    { cx: 50, cy: 50 }, // Middle
    { cx: 25, cy: 75 }, // Bottom left
    { cx: 75, cy: 75 }  // Bottom right
  ];

  // Function to create diamond path
  const createDiamondPath = (cx: number, cy: number, size: number = 20) => {
    return `M${cx} ${cy-size} L${cx+size} ${cy} L${cx} ${cy+size} L${cx-size} ${cy} Z`;
  };

  return (
    <motion.div 
      className="w-full h-screen flex flex-col p-8 cursor-pointer"
      variants={containerVariants}
      initial="default"
      animate={isHovered ? "hover" : "default"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="text-4xl font-bold mb-8"
        variants={logoTextVariants}
        initial="default"
        animate={isHovered ? "hover" : "default"}
      >
        Logo
      </motion.div>
      
      <div className="flex-grow flex items-end justify-end pb-16 pr-16">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {diamonds.map((diamond, index) => (
            <motion.path
              key={index}
              d={createDiamondPath(diamond.cx, diamond.cy)}
              variants={diamondVariants}
              initial="default"
              animate={isHovered ? "hover" : "default"}
            />
          ))}
        </svg>
      </div>
      
      {/* Display cursor icon when hovered */}
      <motion.div 
        className="absolute left-1/4 top-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M8 5L8 19L11 16L14 19L14 5L8 5Z" 
            fill="white" 
            transform="rotate(45, 12, 12)" 
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default DropboxLogo;