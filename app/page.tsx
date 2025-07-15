'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CursorDemo from '@/components/CursorDemo'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-black">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            ALI TATTOO
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Luxury tattoo artistry meets underground aesthetics. 
            Each piece tells a story, every line has meaning.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors duration-300 border border-primary-500/50"
            data-cursor-magnetic
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              ALI
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#portfolio" className="nav-link text-gray-300 hover:text-white transition-colors duration-300">
                Portfolio
              </a>
              <a href="#about" className="nav-link text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="nav-link text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white text-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a collection of unique designs that blend traditional techniques with contemporary aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg bg-gray-100"
                data-cursor-magnetic
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">TATTOO {item}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">About Ali</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                With over a decade of experience in the art of tattooing, Ali has developed a unique style that combines 
                traditional techniques with modern innovation. Each piece is crafted with precision and passion.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Specializing in custom designs, Ali works closely with clients to create meaningful, 
                one-of-a-kind pieces that tell their personal stories.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors duration-300"
                data-cursor-magnetic
              >
                Book Consultation
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-white">ALI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cursor Demo Section */}
      <CursorDemo />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-dark-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Ready to start your tattoo journey? Let's create something extraordinary together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <a 
                  href="mailto:ali@tattoo.com" 
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  data-cursor-magnetic
                >
                  ali@tattoo.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 bg-gray-50 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  data-cursor-magnetic
                >
                  +1 (234) 567-890
                </a>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-dark-900 hover:bg-dark-800 text-white font-semibold rounded-full transition-colors duration-300 text-lg"
              data-cursor-magnetic
            >
              Schedule Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ali Tattoo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage 