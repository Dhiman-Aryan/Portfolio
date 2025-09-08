// src/components/HolographicCard.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const HolographicCard = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Provide default values if project is undefined
  const safeProject = project || {
    title: "Project Title",
    description: "Project description goes here.",
    technologies: ["React", "Node.js", "MongoDB"]
  };
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercentage = x / rect.width;
    const yPercentage = y / rect.height;
    
    const tiltX = (yPercentage - 0.5) * 20;
    const tiltY = (0.5 - xPercentage) * 20;
    
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  return (
    <motion.div
      className="perspective-1000 w-full h-80"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", damping: 15, mass: 0.5 }}
    >
      <div className="preserve-3d relative w-full h-full transition-all duration-300">
        {/* Main card */}
        <div className="absolute inset-0 backface-hidden bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
          <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
            {/* Holographic effect overlay */}
            {isHovered && (
              <motion.div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(${45 + tilt.y * 2}deg, 
                    rgba(59, 130, 246, 0.5) 0%, 
                    rgba(139, 92, 246, 0.5) 30%, 
                    rgba(236, 72, 153, 0.5) 100%)`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
              />
            )}
            
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">{safeProject.title}</h3>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-slate-300 text-sm mb-4 font-serif">{safeProject.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {safeProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Holographic reflection */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              transform: `translateZ(-30px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              filter: 'hue-rotate(90deg)'
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default HolographicCard;