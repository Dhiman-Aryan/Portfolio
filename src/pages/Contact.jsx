// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import NeuralConnection from '../components/NeuralConnection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        setIsLoading(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'aryandhiman2017@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
       setIsLoading(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'aryandhiman2017@gmail.com',
      link: ''
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 6396254864',
      link: ''
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Saharanpur, India',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Availability',
      value: 'Open for new projects',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/Dhiman-Aryan',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'www.linkedin.com/in/aryan-dhiman-967146273',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: '📧',
      url: '',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>
        
        <motion.p 
          className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </motion.p> */}

        {/* Neural Connection Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <NeuralConnection />
        </motion.div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-start p-4 bg-slate-800/50 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-600/10 p-3 rounded-lg mr-4 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800/50 border border-slate-700/30 rounded-lg flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:border-blue-500/30`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/30">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              
              {isSubmitted && (
                <motion.div 
                  className="bg-green-600/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 px-6 rounded-lg font-medium transition-all duration-300 text-white flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;