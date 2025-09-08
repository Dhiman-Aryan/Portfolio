import { motion } from 'framer-motion';
import { useState } from 'react';

const HexagonSkills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  const skills = [
    { name: "MongoDB", level: 85, color: "bg-green-500", icon: "🗄️" },
    { name: "Express", level: 80, color: "bg-gray-500", icon: "🚀" },
    { name: "React", level: 95, color: "bg-blue-500", icon: "⚛️" },
    { name: "Node.js", level: 80, color: "bg-green-600", icon: "🟢" },
    { name: "JavaScript", level: 95, color: "bg-yellow-500", icon: "📜" },
    { name: "Tailwind", level: 95, color: "bg-cyan-500", icon: "🎨" },
  ];

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      zIndex: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative py-12">
      <div className="hexagon-container relative mx-auto w-80 h-80">
        {skills.map((skill, index) => {
          const angle = (index * 360) / skills.length;
          const radius = 140;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          
          return (
            <motion.div
              key={skill.name}
              custom={index}
              variants={hexagonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`absolute w-20 h-20 ${skill.color} flex items-center justify-center rounded-lg cursor-pointer hexagon-item`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: activeSkill === skill.name ? 20 : 10,
              }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="text-2xl">{skill.icon}</div>
              
              {activeSkill === skill.name && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800/90 px-3 py-1 rounded-md text-xs"
                >
                  {skill.name}: {skill.level}%
                </motion.div>
              )}
            </motion.div>
          );
        })}
        
        {/* Central hexagon */}
        <motion.div 
          className="absolute left-1/2  top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-800/80 flex items-center justify-center rounded-xl border border-slate-700/50 shadow-lg"
          animate={{ 
            rotate: 360,
            transition: { 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            } 
          }}
        >
          <span className="text-gradient font-bold text-lg">MERN</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HexagonSkills;