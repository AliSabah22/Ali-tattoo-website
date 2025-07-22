'use client'

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

interface CursorState {
  isVisible: boolean
  isHovering: boolean
  isClicking: boolean
  isButton: boolean
  isImage: boolean
  isText: boolean
  isLink: boolean
  isMagnetic: boolean
  isDragging: boolean
}

interface CursorPosition {
  x: number
  y: number
  timestamp: number
}

const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    isVisible: false,
    isHovering: false,
    isClicking: false,
    isButton: false,
    isImage: false,
    isText: false,
    isLink: false,
    isMagnetic: false,
    isDragging: false,
  })

  const [isMobile, setIsMobile] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const [trailPositions, setTrailPositions] = useState<CursorPosition[]>([])
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 })
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const magneticRefs = useRef<HTMLElement[]>([])
  const lastPosition = useRef<CursorPosition>({ x: 0, y: 0, timestamp: 0 })
  
  // Motion values for ultra-precise cursor tracking
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Professional spring physics for smooth, responsive movement
  const springConfig = useMemo(() => ({
    damping: 12,
    stiffness: 1000,
    mass: 0.08,
    restDelta: 0.01,
  }), [])
  
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
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
            const isDark = entry.target.classList.contains('bg-ink-900') || 
                          entry.target.classList.contains('bg-black') ||
                          entry.target.classList.contains('bg-gradient-to-br') ||
                          entry.target.classList.contains('glass')
            setIsDarkBackground(isDark)
          }
        })
      },
      { threshold: 0.5 }
    )
    
    document.querySelectorAll('section, .glass, .card').forEach((section) => {
      observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])
  
  // Mouse move handler with velocity calculation
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return
    
    const { clientX, clientY } = e
    const now = Date.now()
    
    // Calculate velocity
    const deltaTime = now - lastPosition.current.timestamp
    if (deltaTime > 0) {
      const deltaX = clientX - lastPosition.current.x
      const deltaY = clientY - lastPosition.current.y
      setMouseVelocity({
        x: deltaX / deltaTime * 16, // Normalize to 60fps
        y: deltaY / deltaTime * 16,
      })
    }
    
    lastPosition.current = { x: clientX, y: clientY, timestamp: now }
    
    // Update main cursor position immediately for accuracy
    cursorX.set(clientX)
    cursorY.set(clientY)
    
    // Update trail positions for ink effect
    setTrailPositions(prev => {
      const newPositions = [{ x: clientX, y: clientY, timestamp: now }, ...prev.slice(0, 8)]
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
          const maxDistance = 120
          
          if (distance < maxDistance) {
            const strength = Math.pow((maxDistance - distance) / maxDistance, 2)
            const moveX = deltaX * strength * 0.4
            const moveY = deltaY * strength * 0.4
            
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
  
  // Click handler with ink splatter
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
    
    if (tagName === 'button' || className.includes('btn')) {
      newState.isButton = true
    } else if (tagName === 'img' || className.includes('image') || className.includes('gallery')) {
      newState.isImage = true
    } else if (tagName === 'a' || className.includes('link')) {
      newState.isLink = true
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
      isButton: false,
      isImage: false,
      isText: false,
      isLink: false,
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
    const interactiveElements = document.querySelectorAll('a, button, img, [data-cursor-magnetic], .gallery-item, .nav-link, .card, .btn-primary, .btn-secondary, .btn-gold')
    
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
  
  // Professional cursor size and style based on state
  const getCursorSize = () => {
    if (cursorState.isClicking) return 36
    if (cursorState.isButton) return 56
    if (cursorState.isImage) return { width: 72, height: 16 }
    if (cursorState.isText) return { width: 4, height: 36 }
    if (cursorState.isLink) return 24
    return 20
  }
  
  const getCursorColor = () => {
    if (cursorState.isClicking) return 'bg-blood-500'
    if (cursorState.isButton) return 'bg-blood-600'
    if (cursorState.isImage) return 'bg-ink-50'
    if (cursorState.isText) return 'bg-ink-50'
    if (cursorState.isLink) return 'bg-gold-500'
    return isDarkBackground ? 'bg-ink-50' : 'bg-ink-900'
  }
  
  const getCursorGlow = () => {
    if (cursorState.isClicking) return 'shadow-2xl shadow-blood-500/60'
    if (cursorState.isButton) return 'shadow-2xl shadow-blood-600/60'
    if (cursorState.isImage) return 'shadow-xl shadow-ink-50/50'
    if (cursorState.isText) return 'shadow-lg shadow-ink-50/40'
    if (cursorState.isLink) return 'shadow-lg shadow-gold-500/50'
    return isDarkBackground ? 'shadow-lg shadow-ink-50/30' : 'shadow-lg shadow-ink-900/30'
  }
  
  const getCursorBlend = () => {
    return isDarkBackground ? 'mix-blend-difference' : 'mix-blend-multiply'
  }
  
  const cursorSize = getCursorSize()
  const isRectangular = typeof cursorSize === 'object'
  
  return (
    <AnimatePresence>
      {cursorState.isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[100] rounded-full transition-all duration-200 ${getCursorColor()} ${getCursorGlow()} ${getCursorBlend()}`}
            style={{
              width: isRectangular ? cursorSize.width : cursorSize,
              height: isRectangular ? cursorSize.height : cursorSize,
              x: cursorXSpring,
              y: cursorYSpring,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: cursorState.isClicking ? 2.2 : cursorState.isHovering ? 1.4 : 1,
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 600,
            }}
          >
            {/* Pulsing ring for buttons */}
            {cursorState.isButton && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blood-300"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.2, 0.8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
            
            {/* Needle point for text */}
            {cursorState.isText && (
              <motion.div
                className="absolute inset-0 bg-ink-50 rounded-full"
                animate={{
                  scaleY: [1, 2.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
            
            {/* Link indicator */}
            {cursorState.isLink && (
              <motion.div
                className="absolute inset-0 bg-ink-50 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.div>
          
          {/* Ink splatter ripple effect */}
          {cursorState.isClicking && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[90] rounded-full border-2 border-blood-400"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 10, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          )}
          
          {/* Ink trail effect */}
          {trailPositions.map((position, index) => (
            <motion.div
              key={position.timestamp + index}
              ref={(el) => {
                trailRefs.current[index] = el
              }}
              className="fixed top-0 left-0 pointer-events-none z-[80] rounded-full bg-ink-50/50 backdrop-blur-sm"
              style={{
                width: 10 - index * 1.2,
                height: 10 - index * 1.2,
                x: position.x,
                y: position.y,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  )
}

export default CustomCursor 