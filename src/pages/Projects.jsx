


// // src/pages/Projects.jsx
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import HolographicCard from '../components/HolographicCard'; // Import the component

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//    const [notification, setNotification] = useState({ show: false, message: '' });
  
  
//   const projects = [
//     {
//       id: 1,
//       title: "TechTales",
//       description: "A modern and responsive platform built with React and Node.js where users can read, write, and share articles about technology. It features user authentication for an engaging reading experience.",
//       technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
//       category: "fullstack",
//       liveUrl: "https://tech-tales-ruby.vercel.app/",
//       githubUrl: "https://github.com/Dhiman-Aryan/TechTales"
//     },
//     {
//       id: 2,
//       title: "CarVerse",
//       description: "A user-friendly frontend application showcasing premium cars with high-quality images, detailed specifications, and smooth navigation. Built with React and styled using Tailwind CSS frameworks.",
//       technologies: ["React.js", "Tailwind CSS"],
//       category: "frontend",
//       liveUrl: "https://car-verse.vercel.app/",
//       githubUrl: "https://github.com/Dhiman-Aryan/CarVerse"
//     },
//     {
//       id: 3,
//       title: "Weather Web",
//       description: "A clean and interactive application that provides real-time weather updates using external APIs. Built with React and styled for responsiveness, it displays temperature, humidity, and forecasts based on the user’s location.",
//       technologies: ["React.js","Node.js", "Express.js", "MongoDB", ],
//       category: "backend",
//       liveUrl: null,
//       githubUrl: "https://github.com/Dhiman-Aryan/CarVerse"
//     },
//   ];

//   const filters = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'fullstack', label: 'Full Stack' },
//     { key: 'frontend', label: 'Frontend' },
//     { key: 'backend', label: 'Backend' }
//   ];

//   // const filteredProjects = activeFilter === 'all' 
//   //   ? projects 
//   //   : projects.filter(project => project.category === activeFilter);




//     const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   // Function to handle URL clicks with error handling
//   const handleUrlClick = (url, title, isLiveDemo = true) => {
//     try {
//       // Check if URL is valid
//       if (!url || !url.startsWith('http')) {
//         throw new Error(isLiveDemo 
//           ? `No live demo available for ${title}` 
//           : `Source code not available for ${title}`);
//       }
      
//       // Open the URL in a new tab
//       const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
//       // Check if the window was opened successfully
//       if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
//         throw new Error(`Popup blocked! Please allow popups for this site to view ${title}`);
//       }
//     } catch (error) {
//       // Show error notification
//       setNotification({
//         show: true,
//         message: error.message
//       });
      
//       // Hide notification after 5 seconds
//       setTimeout(() => {
//         setNotification({ show: false, message: '' });
//       }, 5000);
//     }
//   };







//   return (
//      <section id="projects" className="py-16 bg-slate-800">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 
//           className="text-3xl md:text-5xl font-bold text-center mb-4 text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           My <span className="text-gradient">Projects</span>
//         </motion.h2>
        
//         <motion.p 
//           className="text-slate-300 text-center mb-12 max-w-2xl mx-auto"
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
        
//         {/* Notification */}
//         {notification.show && (
//           <motion.div 
//             className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-md"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 100 }}
//           >
//             {notification.message}
//           </motion.div>
//         )}
        
//         {/* Projects grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div 
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <HolographicCard 
//                 project={project} 
//                 onLiveDemoClick={() => handleUrlClick(project.liveUrl, project.title, true)}
//                 onGithubClick={() => handleUrlClick(project.githubUrl, project.title, false)}
//               />
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
import HolographicCard from '../components/HolographicCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [notification, setNotification] = useState({ show: false, message: '' });
  
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
      description: "A clean and interactive application that provides real-time weather updates using external APIs. Built with React and styled for responsiveness, it displays temperature, humidity, and forecasts based on the user's location.",
      technologies: ["React.js","Node.js", "Express.js", "MongoDB"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/Dhiman-Aryan"
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

  // Function to handle URL clicks with error handling
  const handleUrlClick = (url, title, isLiveDemo = true) => {
    try {
      // Check if URL is valid
      if (!url || !url.startsWith('http')) {
        throw new Error(isLiveDemo 
          ? `No live demo available for ${title}` 
          : `Source code not available for ${title}`);
      }
      
      // Open the URL in a new tab
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      // Check if the window was opened successfully
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        throw new Error(`Popup blocked! Please allow popups for this site to view ${title}`);
      }
    } catch (error) {
      // Show error notification
      setNotification({
        show: true,
        message: error.message
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 5000);
    }
  };

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
                  ? 'bg-pink-700 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        {/* Notification */}
        {notification.show && (
          <motion.div 
            className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 max-w-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {notification.message}
          </motion.div>
        )}
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HolographicCard 
                project={project} 
                onLiveDemoClick={() => handleUrlClick(project.liveUrl, project.title, true)}
                onGithubClick={() => handleUrlClick(project.githubUrl, project.title, false)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;