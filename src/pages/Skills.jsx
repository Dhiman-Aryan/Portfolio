// src/pages/Skills.jsx
import { motion } from 'framer-motion';
import HexagonSkills from '../components/HexagonSkills';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "📜" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 95, icon: "" },
        { name: "Redux", level: 90, icon: "🔄" },
        { name: "TypeScript", level: 85, icon: "🔤" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "REST APIs", level: 80, icon: "🌐" },
        { name: "GraphQL", level: 50, icon: "📊" },
        { name: "PostgreSQL", level: 55, icon: "🐘" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95, icon: "📚" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Vercel", level: 85, icon: "🔥" },
        { name: "Webpack", level: 10, icon: "📦" },
        { name: "Jest", level: 10, icon: "🧪" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        
        <motion.p 
          className="text-slate-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the technologies and tools I work with to create amazing web applications.
        </motion.p>

        {/* Hexagon Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <HexagonSkills />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-slate-600 rounded-full mr-3">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                      <span className="text-slate-400 text-sm w-8">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-slate-700/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl  mb-6 font-semibold  text-white text-center">
            My Development Approach
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-slate-300">
              <h4 className="text-xl font-medium mb-2 text-blue-400">🚀 What I Do Best</h4>
              <ul className="space-y-2">
                <li className="flex items-start font-serif">
                  <span className="text-green-400 mr-2 ">✓</span>
                  Building responsive and accessible web applications
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-green-400 mr-2">✓</span>
                  Creating RESTful APIs and backend services
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-green-400 mr-2">✓</span>
                  Database design and optimization
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-green-400 mr-2">✓</span>
                  Implementing authentication and authorization
                </li>
              </ul>
            </div>
            
            <div className="text-slate-300">
              <h4 className="text-xl font-medium mb-2 text-purple-400">📈 Currently Learning</h4>
              <ul className="space-y-2">
                <li className="flex items-start font-serif">
                  <span className="text-yellow-400 mr-2">🌟</span>
                  Advanced React patterns and performance optimization
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-yellow-400 mr-2">🌟</span>
                  Serverless architecture and microservices
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-yellow-400 mr-2">🌟</span>
                  Machine learning integration with web apps
                </li>
                <li className="flex items-start font-serif">
                  <span className="text-yellow-400 mr-2">🌟</span>
                  Web3 and blockchain technologies
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;