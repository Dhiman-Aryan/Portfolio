// // src/components/Projects.jsx
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
  
//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce application with user authentication, product filtering, and payment integration.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       category: "fullstack",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
//       technologies: ["React", "Firebase", "Tailwind CSS"],
//       category: "frontend",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       id: 3,
//       title: "REST API Service",
//       description: "A scalable REST API for a blogging platform with authentication and authorization mechanisms.",
//       technologies: ["Node.js", "Express", "MongoDB", "JWT"],
//       category: "backend",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//   ];

//   const filters = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'fullstack', label: 'Full Stack' },
//     { key: 'frontend', label: 'Frontend' },
//     { key: 'backend', label: 'Backend' }
//   ];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="py-16 bg-slate-800">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           My <span className="text-gradient">Projects</span>
//         </motion.h2>
        
//         <motion.p 
//           className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Here are some of my recent projects. Each project represents my skills and passion for web development.
//         </motion.p>
        
//         {/* Filter buttons */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-4 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           {filters.map(filter => (
//             <button
//               key={filter.key}
//               onClick={() => setActiveFilter(filter.key)}
//               className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
//                 activeFilter === filter.key
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </motion.div>
        
//         {/* Projects grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div 
//               key={project.id}
//               className="bg-slate-700/50 rounded-xl overflow-hidden shadow-lg border border-slate-600/30"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//             >
//               <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
//                 <div className="text-4xl">📱</div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
//                 <p className="text-slate-400 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-slate-600/50 text-slate-300 text-sm px-3 py-1 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a 
//                     href={project.liveUrl} 
//                     className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                   <a 
//                     href={project.githubUrl} 
//                     className="text-slate-400 hover:text-slate-300 font-medium flex items-center gap-1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import HolographicCard from '../components/HolographicCard'; // Import the component

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "TechTales",
      description: "A modern and responsive platform built with React and Node.js where users can read, write, and share articles about technology. It features user authentication for an engaging reading experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      liveUrl: "https://tech-tales-ruby.vercel.app/",
      githubUrl: "https://github.com/Dhiman-Aryan/TechTales"
    },
    {
      id: 2,
      title: "CarVerse",
      description: "A user-friendly frontend application showcasing premium cars with high-quality images, detailed specifications, and smooth navigation. Built with React and styled using Tailwind CSS frameworks.",
      technologies: ["React.js", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "https://car-verse.vercel.app/",
      githubUrl: "https://github.com/Dhiman-Aryan/CarVerse"
    },
    {
      id: 3,
      title: "Weather Web",
      description: "A clean and interactive application that provides real-time weather updates using external APIs. Built with React and styled for responsiveness, it displays temperature, humidity, and forecasts based on the user’s location.",
      technologies: ["React.js","Node.js", "Express.js", "MongoDB", "API"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#"
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>
        
        <motion.p 
          className="text-slate-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects. Each project represents my skills and passion for web development.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid - Using HolographicCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HolographicCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;