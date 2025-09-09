// src/pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate-300 mb-6 font-serif text-justify">
              I'm a passionate MERN Stack Developer with expertise in building scalable web applications 
              using MongoDB, Express.js, React, and Node.js. With a strong foundation in JavaScript and 
              modern web technologies, I create efficient and user-friendly solutions.
            </p>
            <p className="text-slate-300 mb-6 font-serif text-justify">
              My journey in web development started several years ago, and since then I've worked on 
              various projects including small websites to complex web applications. I'm 
              constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            <p className="text-slate-300 font-serif text-justify">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing my knowledge through blog posts and tutorials.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/30">
              <h3 className="text-2xl font-semibold mb-4 text-white">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-slate-400 font-medium w-32 font-serif">Name:</span>
                  <span className="text-slate-300 font-serif">Aryan Dhiman</span>
                </div>
                <div className="flex">
                  <span className="text-slate-400 font-medium w-32 font-serif">Email:</span>
                  <span className="text-slate-300 font-serif">aryandhiman2017@gmail.com</span>
                </div>
                <div className="flex">
                  <span className="text-slate-400 font-medium w-32 font-serif">Location:</span>
                  <span className="text-slate-300 font-serif">Saharanpur, India</span>
                </div>
                <div className="flex">
                  <span className="text-slate-400 font-medium w-32 font-serif">Education:</span>
                  <span className="text-slate-300 font-serif">Bachelors of Technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;