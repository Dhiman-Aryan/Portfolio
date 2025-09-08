import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const NeuralConnection = () => {
  const constraintsRef = useRef(null);
  const [connected, setConnected] = useState(false);
  
  const nodes = [
    { id: 1, name: "Email", icon: "✉️", x: 50, y: 50 },
    { id: 2, name: "GitHub", icon: "🐙",url: "https://github.com/Dhiman-Aryan", x: 150, y: 200 },
    { id: 3, name: "LinkedIn", icon: "💼",url: "www.linkedin.com/in/aryan-dhiman-967146273", x: 250, y: 100 },
    { id: 4, name: "Twitter", icon: "🐦", x: 350, y: 250 },
    { id: 5, name: "You", icon: "👋", x: 200, y: 300 },
  ];
  
  return (
    <div className="py-16 relative">
      

      <motion.h2 
                className="text-3xl md:text-5xl font-bold text-center mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Let's <span className="text-gradient">Connect</span>
              </motion.h2>
              
              <motion.p 
                className="text-slate-300 text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </motion.p>
      
      <motion.div 
        ref={constraintsRef}
        className="neural-network relative h-96 w-full max-w-4xl mx-auto border border-slate-700/30 rounded-2xl bg-slate-900/50 overflow-hidden"
      >
        {/* Animated connections */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map(target => (
              <motion.line
                key={`${node.id}-${target.id}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2
                }}
              />
            ))
          )}
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Draggable nodes */}
        {nodes.map(node => (
          <motion.div
            key={node.id}
            drag
            dragConstraints={constraintsRef}
            className="absolute w-12 h-12 bg-slate-800/80 border border-slate-700/50 rounded-full flex items-center justify-center cursor-grab shadow-lg"
            style={{ x: node.x - 24, y: node.y - 24 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            onDragEnd={() => setConnected(true)}
          >
            <span className="text-xl">{node.icon}</span>
            
            <motion.span 
              className="absolute -bottom-8 text-xs bg-slate-800 px-2 py-1 rounded-md whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {node.name}
            </motion.span>
          </motion.div>
        ))}
        
        {/* Connection message */}
        <motion.div 
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 px-4 py-2 rounded-full text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: connected ? 1 : 0 }}
        >
          🎉 Connection established! Let's talk.
        </motion.div>
      </motion.div>
      
      {/* Contact form that appears after connection */}
      {/* <motion.div 
        className="mt-12 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: connected ? 1 : 1, y: connected ? 0 : 20 }}
      >
        <form className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Email</label>
            <input 
              type="email" 
              className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">Message</label>
            <textarea 
              rows="4"
              className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 px-4 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div> */}
    </div>
  );
};

export default NeuralConnection;





// // src/components/NeuralConnection.jsx
// import { motion } from 'framer-motion';
// import { useRef, useState } from 'react';

// const NeuralConnection = () => {
//   const constraintsRef = useRef(null);
//   const [connected, setConnected] = useState(false);
  
//   const nodes = [
//     { id: 1, name: "Email", icon: "✉️", x: 50, y: 50 },
//     { id: 2, name: "GitHub", icon: "🐙", x: 150, y: 200 },
//     { id: 3, name: "LinkedIn", icon: "💼", x: 250, y: 100 },
//     { id: 4, name: "Twitter", icon: "🐦", x: 350, y: 250 },
//     { id: 5, name: "You", icon: "👋", x: 200, y: 300 },
//   ];
  
//   return (
//     <div className="py-8 relative">

//        <motion.h2 
//                 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Let's <span className="text-gradient">Connect</span>
//               </motion.h2>
              
//               <motion.p 
//                 className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
//               </motion.p>


//       <motion.div 
//         ref={constraintsRef}
//         className="neural-network relative h-80 w-full max-w-4xl mx-auto border border-slate-700/30 rounded-2xl bg-slate-900/50 overflow-hidden mb-8"
//       >
//         {/* Animated connections */}
//         <svg className="absolute inset-0 w-full h-full">
//           {nodes.map((node, i) => 
//             nodes.slice(i + 1).map(target => (
//               <motion.line
//                 key={`${node.id}-${target.id}`}
//                 x1={node.x}
//                 y1={node.y}
//                 x2={target.x}
//                 y2={target.y}
//                 stroke="url(#gradient)"
//                 strokeWidth="2"
//                 strokeOpacity="0.3"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: Math.random() * 2
//                 }}
//               />
//             ))
//           )}
          
//           <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#3b82f6" />
//               <stop offset="50%" stopColor="#8b5cf6" />
//               <stop offset="100%" stopColor="#ec4899" />
//             </linearGradient>
//           </defs>
//         </svg>
        
//         {/* Draggable nodes */}
//         {nodes.map(node => (
//           <motion.div
//             key={node.id}
//             drag
//             dragConstraints={constraintsRef}
//             className="absolute w-10 h-10 bg-slate-800/80 border border-slate-700/50 rounded-full flex items-center justify-center cursor-grab shadow-lg z-10"
//             style={{ x: node.x - 20, y: node.y - 20 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95, cursor: "grabbing" }}
//             onDragEnd={() => setConnected(true)}
//           >
//             <span className="text-lg">{node.icon}</span>
            
//             <motion.span 
//               className="absolute -bottom-8 text-xs bg-slate-800 px-2 py-1 rounded-md whitespace-nowrap"
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//             >
//               {node.name}
//             </motion.span>
//           </motion.div>
//         ))}
        
//         {/* Connection message */}
//         <motion.div 
//           className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 px-4 py-2 rounded-full text-sm text-white z-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: connected ? 1 : 0 }}
//         >
//           🎉 Connection established! Let's talk.
//         </motion.div>
//       </motion.div>
      
//       {/* Contact form that appears after connection */}
//       <motion.div 
//         className="max-w-md mx-auto"
//         initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
//         animate={{ 
//           opacity: connected ? 1 : 0, 
//           height: connected ? 'auto' : 0,
//           transition: { duration: 0.5 }
//         }}
//       >
//         <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
//           <h3 className="text-xl font-semibold mb-4 text-white">Send me a message</h3>
          
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm mb-2 text-slate-300">Your Name</label>
//               <input 
//                 type="text" 
//                 className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
//                 placeholder="Enter your name"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm mb-2 text-slate-300">Your Email</label>
//               <input 
//                 type="email" 
//                 className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
//                 placeholder="your.email@example.com"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm mb-2 text-slate-300">Message</label>
//               <textarea 
//                 rows="4"
//                 className="w-full bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white resize-none"
//                 placeholder="Tell me about your project..."
//               ></textarea>
//             </div>
            
//             <button 
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 px-4 rounded-lg transition-all duration-300 text-white font-medium"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default NeuralConnection;