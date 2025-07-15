'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { gsap } from 'gsap'

interface CursorState {
  isVisible: boolean
  isHovering: boolean
  isClicking: boolean
  isDragging: boolean
  isText: boolean
  isImage: boolean
  isLink: boolean
  isButton: boolean
  isMagnetic: boolean
}

interface CursorPosition {
  x: number
  y: number
}

const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    isVisible: false,
    isHovering: false,
    isClicking: false,
    isDragging: false,
    isText: false,
    isImage: false,
    isLink: false,
    isButton: false,
    isMagnetic: false,
  })

  const [isMobile, setIsMobile] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const magneticRefs = useRef<HTMLElement[]>([])
  
  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  // Transform for magnetic effect
  const magneticX = useTransform(cursorXSpring, (x) => x)
  const magneticY = useTransform(cursorYSpring, (y) => y)
  
  // Trail positions
  const [trailPositions, setTrailPositions] = useState<CursorPosition[]>([])
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Intersection Observer for background detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const isDark = entry.target.classList.contains('bg-dark-900') || 
                          entry.target.classList.contains('bg-black')
            setIsDarkBackground(isDark)
          }
        })
      },
      { threshold: 0.5 }
    )
    
    // Observe sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])
  
  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return
    
    const { clientX, clientY } = e
    
    // Update main cursor position
    cursorX.set(clientX)
    cursorY.set(clientY)
    
    // Update trail positions
    setTrailPositions(prev => {
      const newPositions = [{ x: clientX, y: clientY }, ...prev.slice(0, 4)]
      return newPositions
    })
    
    // Show cursor if hidden
    if (!cursorState.isVisible) {
      setCursorState(prev => ({ ...prev, isVisible: true }))
    }
    
    // Handle magnetic effect
    if (cursorState.isMagnetic && magneticRefs.current.length > 0) {
      magneticRefs.current.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          
          const deltaX = clientX - centerX
          const deltaY = clientY - centerY
          
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
          const maxDistance = 100
          
          if (distance < maxDistance) {
            const strength = (maxDistance - distance) / maxDistance
            const moveX = deltaX * strength * 0.3
            const moveY = deltaY * strength * 0.3
            
            gsap.to(element, {
              x: moveX,
              y: moveY,
              duration: 0.3,
              ease: 'power2.out'
            })
          } else {
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            })
          }
        }
      })
    }
  }, [cursorX, cursorY, cursorState.isVisible, cursorState.isMagnetic, isMobile])
  
  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => {
    if (isMobile) return
    setCursorState(prev => ({ ...prev, isVisible: true }))
  }, [isMobile])
  
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return
    setCursorState(prev => ({ ...prev, isVisible: false }))
  }, [isMobile])
  
  // Click handler
  const handleClick = useCallback(() => {
    if (isMobile) return
    setCursorState(prev => ({ ...prev, isClicking: true }))
    setTimeout(() => {
      setCursorState(prev => ({ ...prev, isClicking: false }))
    }, 150)
  }, [isMobile])
  
  // Element interaction handlers
  const handleElementEnter = useCallback((element: HTMLElement) => {
    if (isMobile) return
    
    const tagName = element.tagName.toLowerCase()
    const className = element.className
    const dataset = element.dataset
    
    let newState: Partial<CursorState> = { isHovering: true }
    
    if (tagName === 'a' || className.includes('link')) {
      newState.isLink = true
    } else if (tagName === 'button' || className.includes('btn')) {
      newState.isButton = true
    } else if (tagName === 'img' || className.includes('image') || className.includes('gallery')) {
      newState.isImage = true
    } else if (tagName === 'p' || tagName === 'span' || tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
      newState.isText = true
    }
    
    if (dataset.cursorMagnetic) {
      newState.isMagnetic = true
      magneticRefs.current.push(element)
    }
    
    setCursorState(prev => ({ ...prev, ...newState }))
  }, [isMobile])
  
  const handleElementLeave = useCallback((element: HTMLElement) => {
    if (isMobile) return
    
    const dataset = element.dataset
    
    if (dataset.cursorMagnetic) {
      magneticRefs.current = magneticRefs.current.filter(ref => ref !== element)
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
    
    setCursorState(prev => ({
      ...prev,
      isHovering: false,
      isLink: false,
      isButton: false,
      isImage: false,
      isText: false,
      isMagnetic: magneticRefs.current.length > 0
    }))
  }, [isMobile])
  
  // Event listeners
  useEffect(() => {
    if (isMobile) return
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleClick)
    
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, img, [data-cursor-magnetic], .gallery-item, .nav-link')
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleElementEnter(element as HTMLElement))
      element.addEventListener('mouseleave', () => handleElementLeave(element as HTMLElement))
    })
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleClick)
      
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => handleElementEnter(element as HTMLElement))
        element.removeEventListener('mouseleave', () => handleElementLeave(element as HTMLElement))
      })
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleClick, handleElementEnter, handleElementLeave, isMobile])
  
  // Don't render on mobile
  if (isMobile) return null
  
  // Cursor size and style based on state
  const getCursorSize = () => {
    if (cursorState.isClicking) return 40
    if (cursorState.isHovering) return 32
    return 20
  }
  
  const getCursorColor = () => {
    if (cursorState.isClicking) return 'bg-primary-500'
    if (cursorState.isHovering) {
      return isDarkBackground ? 'bg-white' : 'bg-primary-600'
    }
    return isDarkBackground ? 'bg-white/80' : 'bg-dark-900/80'
  }
  
  const getCursorBorder = () => {
    if (cursorState.isClicking) return 'border-2 border-primary-400'
    if (cursorState.isHovering) {
      return isDarkBackground ? 'border border-white/50' : 'border border-primary-500/50'
    }
    return 'border border-white/30'
  }
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference backdrop-blur-xs transition-all duration-200 ${getCursorColor()} ${getCursorBorder()}`}
        style={{
          width: getCursorSize(),
          height: getCursorSize(),
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: cursorState.isClicking ? 1.5 : cursorState.isHovering ? 1.2 : 1,
          opacity: cursorState.isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 700,
        }}
      >
        {/* Inner content for different states */}
        {cursorState.isImage && (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            VIEW
          </div>
        )}
        
        {cursorState.isLink && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
        )}
        
        {cursorState.isButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 border border-white rounded-full" />
          </div>
        )}
      </motion.div>
      
      {/* Click ripple effect */}
      {cursorState.isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border-2 border-primary-400"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
      
      {/* Trail effect */}
      {trailPositions.map((position, index) => (
        <motion.div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className="fixed top-0 left-0 pointer-events-none z-30 rounded-full bg-white/20 backdrop-blur-xs"
          style={{
            width: 8 - index * 1.5,
            height: 8 - index * 1.5,
            x: position.x,
            y: position.y,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

export default CustomCursor 