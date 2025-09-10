// // src/components/HolographicCard.jsx
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const HolographicCard = ({ project }) => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);
  
//   // Provide default values if project is undefined
//   const safeProject = project || {
//     title: "Project Title",
//     description: "Project description goes here.",
//     technologies: ["React", "Node.js", "MongoDB"],
//      liveUrl: null,
//     githubUrl: null
//   };
  
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     const xPercentage = x / rect.width;
//     const yPercentage = y / rect.height;
    
//     const tiltX = (yPercentage - 0.5) * 20;
//     const tiltY = (0.5 - xPercentage) * 20;
    
//     setTilt({ x: tiltX, y: tiltY });
//   };
  
//   const handleMouseLeave = () => {
//     setTilt({ x: 0, y: 0 });
//     setIsHovered(false);
//   };
  

//   // Determine button styles based on URL availability
//   const getButtonClass = (url, isLive = true) => {
//     const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ";
    
//     if (!url) {
//       return baseClass + (isLive 
//         ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
//         : "bg-gray-600 text-gray-400 cursor-not-allowed");
//     }
    
//     return baseClass + (isLive 
//       ? "bg-blue-600 text-white hover:bg-blue-700" 
//       : "bg-slate-700 text-slate-300 hover:bg-slate-600");
//   };




//   return (
//     <motion.div
//       className="perspective-1000 w-full h-96"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       animate={{
//         rotateX: tilt.x,
//         rotateY: tilt.y,
//       }}
//       transition={{ type: "spring", damping: 15, mass: 0.5 }}
//     >
//       <div className="preserve-3d relative w-full h-full transition-all duration-300">
//         {/* Main card */}
//         <div className="absolute inset-0 backface-hidden bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
//           <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
//             {/* Holographic effect overlay */}
//             {isHovered && (
//               <motion.div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   background: `linear-gradient(${45 + tilt.y * 2}deg, 
//                     rgba(59, 130, 246, 0.5) 0%, 
//                     rgba(139, 92, 246, 0.5) 30%, 
//                     rgba(236, 72, 153, 0.5) 100%)`
//                 }}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.3 }}
//               />
//             )}
            
//             <div className="absolute bottom-4 left-4">
//               <h3 className="text-xl font-bold text-white">{safeProject.title}</h3>
//             </div>
//           </div>
          
//           <div className="p-4">
//             <p className="text-slate-300 text-sm mb-4 font-serif">{safeProject.description}</p>
            
//             <div className="flex flex-wrap gap-2">
//               {safeProject.technologies.map((tech, index) => (
//                 <span 
//                   key={index}
//                   className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>


//          {/* Action buttons */}
//           <div className="p-4 pt-0 mt-auto flex gap-3">
//             <button
//               className={getButtonClass(safeProject.liveUrl, true)}
//               onClick={() => safeProject.liveUrl && onLiveDemoClick()}
//               disabled={!safeProject.liveUrl}
//             >
//               {safeProject.liveUrl ? "Live Demo" : "No Demo"}
//             </button>
//             <button
//               className={getButtonClass(safeProject.githubUrl, false)}
//               onClick={() => safeProject.githubUrl && onGithubClick()}
//               disabled={!safeProject.githubUrl}
//             >
//               Code
//             </button>
//           </div>
        
        
//         {/* Holographic reflection */}
//         {isHovered && (
//           <motion.div 
//             className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             style={{
//               transform: `translateZ(-30px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
//               filter: 'hue-rotate(90deg)'
//             }}
//           />
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default HolographicCard;





// src/components/HolographicCard.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const HolographicCard = ({ project, onLiveDemoClick, onGithubClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
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
  
  // Determine button styles based on URL availability
  const getButtonClass = (url, isLive = true) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ";
    
    if (!url) {
      return baseClass + (isLive 
        ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
        : "bg-gray-600 text-gray-400 cursor-not-allowed");
    }
    
    return baseClass + (isLive 
      ? "bg-blue-600 text-white hover:bg-blue-700" 
      : "bg-slate-700 text-slate-300 hover:bg-slate-600");
  };
  
  // Handle button clicks
  const handleLiveDemoClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl && onLiveDemoClick) {
      onLiveDemoClick();
    }
  };
  
  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (project.githubUrl && onGithubClick) {
      onGithubClick();
    }
  };
  
  return (
    <motion.div
      className="perspective-1000 w-full h-100"
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
        <div className="absolute inset-0 backface-hidden bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl flex flex-col">
          <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden flex-shrink-0">
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
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          
          <div className="p-4 flex-grow">
            <p className="text-slate-300 text-sm mb-4 font-serif">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="p-4 pt-0 mt-auto flex gap-3">
            <button
              className={getButtonClass(project.liveUrl, true)}
              onClick={handleLiveDemoClick}
              disabled={!project.liveUrl}
            >
              {project.liveUrl ? "Live Demo" : "No Demo"}
            </button>
            <button
              className={getButtonClass(project.githubUrl, false)}
              onClick={handleGithubClick}
              disabled={!project.githubUrl}
            >
              Code
            </button>
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