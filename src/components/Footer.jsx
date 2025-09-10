// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/Dhiman-Aryan" },
    { name: "LinkedIn", icon: "💼", url: "www.linkedin.com/in/aryan-dhiman-967146273" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Email", icon: "✉️", url: "#" },
  ];
  
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];
  
  const serviceLinks = [
    { name: "Web Development", url: "#" },
    { name: "API Development", url: "#" },
    { name: "Database Design", url: "#" },
    { name: "UI/UX Design", url: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Aryan Dhiman</h3>
            <p className="text-slate-400  mb-6 text-justify">
              Full-stack developer specializing in the MERN stack. Creating beautiful, functional web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-blue-600/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              
{quickLinks.map((link) => (
  <li key={link.name}>
    <button 
      onClick={() => {
        const element = document.getElementById(link.url.replace('#', ''));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }}
      className="text-slate-400 hover:text-white transition-colors duration-300"
    >
      {link.name}
    </button>
  </li>
))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.url} 
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600/10 p-2 rounded-lg mr-3">
                  <span className="text-blue-400">📧</span>
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="text-white">aryandhiman2017@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600/10 p-2 rounded-lg mr-3">
                  <span className="text-blue-400">📍</span>
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="text-white">Saharanpur, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600/10 p-2 rounded-lg mr-3">
                  <span className="text-blue-400">🕒</span>
                </div>
                <div>
                  <p className="text-slate-400">Availability</p>
                  <p className="text-white">Open for new projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Newsletter Subscription */}
        <motion.div 
          className="bg-slate-800/30 p-6 rounded-xl mb-12 border border-slate-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400">Subscribe to my newsletter for updates on new projects and articles.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg sm:rounded-l-none font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Aryan Dhiman. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;