'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import CustomCursor from './CustomCursor'

interface CursorContextType {
  isCursorVisible: boolean
  setIsCursorVisible: (visible: boolean) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}

interface CursorProviderProps {
  children: React.ReactNode
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [isCursorVisible, setIsCursorVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const value = {
    isCursorVisible,
    setIsCursorVisible,
  }

  return (
    <CursorContext.Provider value={value}>
      {children}
      {isMounted && <CustomCursor />}
    </CursorContext.Provider>
  )
} 