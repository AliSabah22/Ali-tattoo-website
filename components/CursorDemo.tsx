'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CursorDemo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Cursor Interactions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hover over different elements to see the custom cursor in action. 
            Each interaction has its own unique animation and state.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Link Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Links</h3>
            <p className="text-gray-300 mb-6">
              Links show a small dot indicator and grow slightly on hover.
            </p>
            <div className="space-y-4">
              <a 
                href="#" 
                className="block text-primary-400 hover:text-primary-300 transition-colors duration-300"
                data-cursor-magnetic
              >
                Primary Link
              </a>
              <a 
                href="#" 
                className="block text-white hover:text-gray-300 transition-colors duration-300"
                data-cursor-magnetic
              >
                Secondary Link
              </a>
            </div>
          </motion.div>

          {/* Button Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Buttons</h3>
            <p className="text-gray-300 mb-6">
              Buttons show a ring indicator and have magnetic attraction.
            </p>
            <div className="space-y-4">
              <button 
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
                data-cursor-magnetic
              >
                Primary Button
              </button>
              <button 
                className="w-full px-6 py-3 bg-transparent border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors duration-300"
                data-cursor-magnetic
              >
                Secondary Button
              </button>
            </div>
          </motion.div>

          {/* Image Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Images</h3>
            <p className="text-gray-300 mb-6">
              Images show "VIEW" text and have a special hover state.
            </p>
            <div className="space-y-4">
              <div 
                className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center cursor-pointer"
                data-cursor-magnetic
              >
                <span className="text-white font-bold">IMAGE 1</span>
              </div>
              <div 
                className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                data-cursor-magnetic
              >
                <span className="text-white font-bold">IMAGE 2</span>
              </div>
            </div>
          </motion.div>

          {/* Text Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Text</h3>
            <p className="text-gray-300 mb-6">
              Text elements have subtle highlighting and magnetic effects.
            </p>
            <div className="space-y-4">
              <h4 
                className="text-xl font-semibold text-white cursor-pointer"
                data-cursor-magnetic
              >
                Clickable Heading
              </h4>
              <p 
                className="text-gray-300 cursor-pointer leading-relaxed"
                data-cursor-magnetic
              >
                This is a clickable paragraph that demonstrates text interaction with the custom cursor.
              </p>
            </div>
          </motion.div>

          {/* Magnetic Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Magnetic</h3>
            <p className="text-gray-300 mb-6">
              Elements with magnetic attraction move toward the cursor.
            </p>
            <div className="space-y-4">
              <div 
                className="w-full h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center cursor-pointer"
                data-cursor-magnetic
              >
                <span className="text-white font-bold">MAGNETIC</span>
              </div>
              <div 
                className="w-full h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                data-cursor-magnetic
              >
                <span className="text-white font-bold">ATTRACTION</span>
              </div>
            </div>
          </motion.div>

          {/* Trail Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 bg-dark-700 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Trail Effect</h3>
            <p className="text-gray-300 mb-6">
              Move your cursor around to see the trail effect with fading dots.
            </p>
            <div className="aspect-square bg-gradient-to-br from-dark-600 to-dark-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm text-center">
                Move cursor here<br />
                to see trail
              </span>
            </div>
          </motion.div>
        </div>

        {/* Click Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-white">Click Anywhere</h3>
          <p className="text-xl text-gray-300 mb-8">
            Click on any element to see the ripple animation effect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
              data-cursor-magnetic
            >
              Click Me
            </button>
            <button 
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors duration-300"
              data-cursor-magnetic
            >
              Click Me Too
            </button>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              data-cursor-magnetic
            >
              Gradient Button
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CursorDemo 