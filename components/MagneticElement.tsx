'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MagneticElementProps {
  children: React.ReactNode
  strength?: number
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 0.4,
  className = '',
  onMouseEnter,
  onMouseLeave,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxDistance = 120
      
      if (distance < maxDistance) {
        const attractionStrength = (maxDistance - distance) / maxDistance
        const moveX = deltaX * attractionStrength * strength
        const moveY = deltaY * attractionStrength * strength
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      } else {
        element.style.transform = 'translate(0px, 0px)'
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
      onMouseLeave?.()
    }

    const handleMouseEnter = () => {
      onMouseEnter?.()
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    element.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [strength, onMouseEnter, onMouseLeave])

  return (
    <motion.div
      ref={elementRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}

export default MagneticElement 