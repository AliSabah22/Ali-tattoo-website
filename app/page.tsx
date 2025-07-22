'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Mail, Phone, MapPin, Star, Award, Users, Clock } from 'lucide-react'
import CustomCursor from '@/components/CustomCursor'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const HomePage: React.FC = () => {
  // Video management state
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  // Handle video play event
  const handleVideoPlay = (videoId: string) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach(key => {
      if (key !== videoId && videoRefs.current[key]) {
        videoRefs.current[key]?.pause()
      }
    })
    
    // Set current playing video
    setCurrentlyPlaying(videoId)
  }

  // Handle video pause event
  const handleVideoPause = (videoId: string) => {
    if (currentlyPlaying === videoId) {
      setCurrentlyPlaying(null)
    }
  }

  // Handle video end event
  const handleVideoEnded = (videoId: string) => {
    if (currentlyPlaying === videoId) {
      setCurrentlyPlaying(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 text-ink-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-800/80 to-ink-900/90 z-10" />
          <div className="absolute inset-0 bg-[url('/Ali_tatto/tattos/IMG_6664_2.JPG')] bg-cover bg-center opacity-30" />
        </div>
        
        {/* Floating tattoo elements */}
        <div className="absolute inset-0 z-5">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-[url('/Ali_tatto/tattos/IMG_6845_2.JPEG')] bg-cover bg-center rounded-full opacity-20"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-20 w-24 h-24 bg-[url('/Ali_tatto/tattos/IMG_6673_2.HEIC')] bg-cover bg-center rounded-full opacity-15"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center z-20 relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 text-gradient">
              ALI
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blood-500 to-gold-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-light text-ink-300 mb-8">
              TATTOO ARTISTRY
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-ink-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Where ink meets artistry. Each design tells a story, 
            every line carries meaning, and every piece becomes a part of you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary group" data-cursor-magnetic>
              <span className="flex items-center gap-2">
                View Portfolio
                <span className="w-5 h-5 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button className="btn-secondary" data-cursor-magnetic>
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-ink-700/30">
        <div className="container-max px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-display font-bold text-gradient"
            >
              ALI
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#portfolio" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                Portfolio
              </a>
              <a href="#about" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                About
              </a>
              <a href="#services" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                Services
              </a>
              <a href="#piercing" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                Piercing
              </a>
              <a href="#videos" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                Videos
              </a>
              <a href="#contact" className="nav-link text-ink-300 hover:text-ink-50 transition-colors duration-300">
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Stats Section */}
      <section className="section-padding bg-ink-800/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/Ali_tatto/tattos/IMG_6673_2.HEIC')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/60 via-ink-800/40 to-ink-900/60" />
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Happy Clients', color: 'text-blood-500', image: '/Ali_tatto/tattos/IMG_3368_2.JPG' },
              { number: '10+', label: 'Years Experience', color: 'text-gold-500', image: '/Ali_tatto/tattos/IMG_3863_2.JPG' },
              { number: '100%', label: 'Custom Designs', color: 'text-blood-500', image: '/Ali_tatto/tattos/IMG_4081_2.JPG' },
              { number: '5.0', label: 'Star Rating', color: 'text-gold-500', image: '/Ali_tatto/tattos/IMG_4085_2.JPG' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp} 
                className="text-center card p-6 relative overflow-hidden group"
                data-cursor-magnetic
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundImage: `url(${stat.image})` }} />
                <div className="relative z-10">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-ink-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Portfolio
            </h2>
            <p className="text-xl text-ink-300 max-w-3xl mx-auto">
              A collection of custom designs that showcase the fusion of traditional techniques 
              with contemporary aesthetics. Each piece is unique, meaningful, and crafted with precision.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { id: 1, image: '/Ali_tatto/tattos/IMG_4415_2.JPG', title: 'Traditional Japanese', category: 'Traditional' },
              { id: 2, image: '/Ali_tatto/tattos/IMG_4414_2.JPG', title: 'Neo-Traditional', category: 'Neo-Traditional' },
              { id: 3, image: '/Ali_tatto/tattos/IMG_4413_2.JPG', title: 'Black & Grey', category: 'Black & Grey' },
              { id: 4, image: '/Ali_tatto/tattos/IMG_4411_2.JPG', title: 'Color Realism', category: 'Color Realism' },
              { id: 5, image: '/Ali_tatto/tattos/IMG_4401_2.JPG', title: 'Minimalist', category: 'Minimalist' },
              { id: 6, image: '/Ali_tatto/tattos/IMG_4400_2.JPEG', title: 'Custom Design', category: 'Custom' },
              { id: 7, image: '/Ali_tatto/tattos/IMG_4399_2.JPG', title: 'Portrait Work', category: 'Portrait' },
              { id: 8, image: '/Ali_tatto/tattos/IMG_4397_2.JPG', title: 'Geometric', category: 'Geometric' },
              { id: 9, image: '/Ali_tatto/tattos/IMG_2924_2.JPG', title: 'Sleeve Design', category: 'Sleeve' },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl card card-hover"
                data-cursor-magnetic
              >
                <div className="aspect-square bg-cover bg-center relative" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-gold-400 font-medium mb-1">{item.category}</div>
                    <h3 className="text-xl font-display font-bold text-ink-50">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/80 transition-all duration-500 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-ink-800/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient">
                About Ali
              </h2>
              <p className="text-xl text-ink-300 mb-6 leading-relaxed">
                With over a decade of experience in the art of tattooing, Ali has developed a unique style 
                that combines traditional techniques with modern innovation. Each piece is crafted with 
                precision, passion, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg text-ink-400 mb-8 leading-relaxed">
                Specializing in custom designs, Ali works closely with clients to create meaningful, 
                one-of-a-kind pieces that tell their personal stories. From concept to completion, 
                every detail is carefully considered to ensure the final result exceeds expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-ink-300">
                  <Award className="w-5 h-5 text-gold-500" />
                  <span>Certified Artist</span>
                </div>
                <div className="flex items-center gap-2 text-ink-300">
                  <Star className="w-5 h-5 text-gold-500" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-ink-300">
                  <Users className="w-5 h-5 text-gold-500" />
                  <span>500+ Clients</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blood-600 to-blood-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/Ali_tatto/tattos/IMG_2635_2.JPEG')] bg-cover bg-center opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-blood-600/70 to-blood-800/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent" />
                <span className="text-7xl font-display font-bold text-ink-50 relative z-10">ALI</span>
              </div>
              
              {/* Floating studio image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-xl overflow-hidden border-4 border-ink-700/50"
              >
                <div className="w-full h-full bg-[url('/Ali_tatto/tattos/IMG_2925_2.JPG')] bg-cover bg-center" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Services
            </h2>
            <p className="text-xl text-ink-300 max-w-3xl mx-auto">
              Comprehensive tattoo services tailored to your vision. From consultation to completion, 
              we ensure every step of your journey is exceptional.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: 'Custom Designs', 
                desc: 'Unique, personalized artwork created specifically for you', 
                icon: '🎨',
                image: '/Ali_tatto/tattos/IMG_2924_2.JPG'
              },
              { 
                title: 'Traditional Tattoos', 
                desc: 'Classic styles with modern precision and technique', 
                icon: '⚡',
                image: '/Ali_tatto/tattos/IMG_2714_2.JPEG'
              },
              { 
                title: 'Cover-up Work', 
                desc: 'Transform existing tattoos into beautiful new designs', 
                icon: '✨',
                image: '/Ali_tatto/tattos/IMG_2679_2.JPG'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card card-hover text-center p-8 relative overflow-hidden group"
                data-cursor-magnetic
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-ink-50">{service.title}</h3>
                  <p className="text-ink-300 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Piercing Section */}
      <section id="piercing" className="section-padding bg-ink-800/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/Ali_tatto/tattos/IMG_6664_2.JPG')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/60 via-ink-800/40 to-ink-900/60" />
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Piercing Services
            </h2>
            <p className="text-xl text-ink-300 max-w-3xl mx-auto">
              Professional piercing services with the highest standards of safety and hygiene. 
              From classic to contemporary, we offer a wide range of piercing options.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: 'Ear Piercings', 
                desc: 'Classic and modern ear piercing styles', 
                image: '/Ali_tatto/piercing/IMG_5791_2.JPG'
              },
              { 
                title: 'Body Piercings', 
                desc: 'Professional body piercing services', 
                image: '/Ali_tatto/piercing/IMG_5789_2.JPG'
              },
              { 
                title: 'Facial Piercings', 
                desc: 'Trendy and traditional facial piercings', 
                image: '/Ali_tatto/piercing/IMG_5791_2.JPG'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card card-hover text-center p-8 relative overflow-hidden group"
                data-cursor-magnetic
              >
                <div className="aspect-square bg-cover bg-center rounded-xl mb-6" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent rounded-xl" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-ink-50">{service.title}</h3>
                  <p className="text-ink-300 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Behind the Scenes
            </h2>
            <p className="text-xl text-ink-300 max-w-3xl mx-auto">
              Watch the artistry in action. See how we bring your vision to life with precision and passion.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { 
                title: 'Tattoo Process', 
                desc: 'Watch the creation process', 
                video: '/Ali_tatto/videos/IMG_3288_2.MOV'
              },
              { 
                title: 'Studio Tour', 
                desc: 'Take a look at our workspace', 
                video: '/Ali_tatto/videos/IMG_0857_2.MOV'
              },
              { 
                title: 'Artist at Work', 
                desc: 'See the precision in action', 
                video: '/Ali_tatto/videos/1a1fb16f65554ac2bdf50fb7c6f52744_2.MOV'
              },

            ].slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card card-hover relative overflow-hidden group bg-ink-900/50 backdrop-blur-sm p-4"
                data-cursor-magnetic
              >
                <div className="aspect-[4/3] bg-ink-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                    <video 
                    className={`w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 ${
                      currentlyPlaying === `video-${index}` ? 'ring-2 ring-blood-500/50' : ''
                    }`}
                    controls
                    preload="metadata"
                    poster="/Ali_tatto/tattos/IMG_4415_2.JPG"
                    controlsList="nodownload"
                    onPlay={() => handleVideoPlay(`video-${index}`)}
                    onPause={() => handleVideoPause(`video-${index}`)}
                    onEnded={() => handleVideoEnded(`video-${index}`)}
                    ref={(el) => { videoRefs.current[`video-${index}`] = el }}
                  >
                    <source src={item.video} type="video/quicktime" />
                    <source src={item.video} type="video/mp4" />
                    <source src={item.video} type="video/webm" />
                    <div className="flex items-center justify-center h-full text-ink-400">
                      <p>Your browser does not support video playback.</p>
                    </div>
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent rounded-xl pointer-events-none" />
                  <div className="absolute top-4 right-4 bg-ink-900/80 text-ink-50 px-2 py-1 rounded text-sm font-medium">
                    {index + 1}/3
                  </div>
                                      <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentlyPlaying === `featured-video-${index}` 
                        ? 'bg-blood-500/90 text-ink-50' 
                        : 'bg-ink-900/80 text-ink-50'
                    }`}>
                      {currentlyPlaying === `featured-video-${index}` ? '⏸ Playing' : '▶ Play'}
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ink-50">{item.title}</h3>
                  <p className="text-ink-300 mb-3">{item.desc}</p>
                  <div className="flex items-center justify-between text-sm text-ink-400">
                    <span>HD Quality</span>
                    <span>Landscape</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Videos - Last 2 videos in larger format */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-display font-bold mb-8 text-center text-gradient">
              Featured Content
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Behind the Scenes', 
                  desc: 'Exclusive studio footage and behind-the-scenes moments', 
                  video: '/Ali_tatto/videos/sstg-5F454FC4-89FC-44BE-AB3B-3F04019E6398_2.MOV'
                },
                { 
                  title: 'Work in Progress', 
                  desc: 'See the artistry unfold in real-time', 
                  video: '/Ali_tatto/videos/sstg-75398605-31C6-419F-8DDE-009F7429D13A_2.MOV'
                },
              ].map((item, index) => (
                <motion.div
                  key={index + 3}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="card card-hover relative overflow-hidden group bg-ink-900/50 backdrop-blur-sm p-4"
                  data-cursor-magnetic
                >
                  <div className="aspect-[4/3] bg-ink-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                        <video 
                      className={`w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-105 ${
                        currentlyPlaying === `featured-video-${index}` ? 'ring-2 ring-blood-500/50' : ''
                      }`}
                      controls
                      preload="metadata"
                      poster="/Ali_tatto/tattos/IMG_4415_2.JPG"
                      controlsList="nodownload"
                      onPlay={() => handleVideoPlay(`featured-video-${index}`)}
                      onPause={() => handleVideoPause(`featured-video-${index}`)}
                      onEnded={() => handleVideoEnded(`featured-video-${index}`)}
                      ref={(el) => { videoRefs.current[`featured-video-${index}`] = el }}
                    >
                      <source src={item.video} type="video/quicktime" />
                      <source src={item.video} type="video/mp4" />
                      <source src={item.video} type="video/webm" />
                      <div className="flex items-center justify-center h-full text-ink-400">
                        <p>Your browser does not support video playback.</p>
                      </div>
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent rounded-xl pointer-events-none" />
                    <div className="absolute top-4 right-4 bg-blood-500/90 text-ink-50 px-3 py-1 rounded text-sm font-bold">
                      FEATURED
                    </div>
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentlyPlaying === `video-${index}` 
                        ? 'bg-blood-500/90 text-ink-50' 
                        : 'bg-ink-900/80 text-ink-50'
                    }`}>
                      {currentlyPlaying === `video-${index}` ? '⏸ Playing' : '▶ Play'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-ink-50">{item.title}</h3>
                    <p className="text-ink-300 mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between text-sm text-ink-400">
                      <span>HD Quality</span>
                      <span>Landscape</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-ink-800/30 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/Ali_tatto/tattos/IMG_6636_2.HEIC')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-800/60 to-ink-900/80" />
        </div>
        
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-ink-300 mb-12 max-w-2xl mx-auto">
              Ready to start your tattoo journey? Let's create something extraordinary together. 
              Book your consultation and bring your vision to life.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <motion.div variants={fadeInUp} className="card p-6">
                <Mail className="w-8 h-8 text-blood-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <a 
                  href="mailto:ali@tattoo.com" 
                  className="text-blood-400 hover:text-blood-300 transition-colors duration-300"
                  data-cursor-magnetic
                >
                  ali@tattoo.com
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="card p-6">
                <Phone className="w-8 h-8 text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-gold-400 hover:text-gold-300 transition-colors duration-300"
                  data-cursor-magnetic
                >
                  +1 (234) 567-890
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="card p-6">
                <MapPin className="w-8 h-8 text-blood-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Studio</h3>
                <p className="text-ink-300">
                  123 Ink Street<br />
                  Tattoo City, TC 12345
                </p>
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="btn-gold text-lg px-12 py-6"
              data-cursor-magnetic
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-ink-900 border-t border-ink-800">
        <div className="container-max text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-ink-400 hover:text-ink-200 transition-colors duration-300" data-cursor-magnetic>
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-ink-400 hover:text-ink-200 transition-colors duration-300" data-cursor-magnetic>
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-ink-400 mb-4">
            © 2024 Ali Tattoo. All rights reserved. | Premium tattoo artistry.
          </p>
          <p className="text-ink-500 text-sm">
            Designed by{' '}
            <a 
              href="https://pixelrush.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors duration-300 underline"
              data-cursor-magnetic
            >
              PIXELRUSH SITES
            </a>
          </p>
        </div>
      </footer>
      <CustomCursor />
    </div>
  )
}

export default HomePage 