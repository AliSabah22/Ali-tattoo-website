import { useState, useCallback } from 'react'

export interface CursorState {
  isVisible: boolean
  isHovering: boolean
  isClicking: boolean
  isButton: boolean
  isImage: boolean
  isText: boolean
  isLink: boolean
  isMagnetic: boolean
}

export const useCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    isVisible: false,
    isHovering: false,
    isClicking: false,
    isButton: false,
    isImage: false,
    isText: false,
    isLink: false,
    isMagnetic: false,
  })

  const updateCursorState = useCallback((updates: Partial<CursorState>) => {
    setCursorState(prev => ({ ...prev, ...updates }))
  }, [])

  const resetCursorState = useCallback(() => {
    setCursorState({
      isVisible: false,
      isHovering: false,
      isClicking: false,
      isButton: false,
      isImage: false,
      isText: false,
      isLink: false,
      isMagnetic: false,
    })
  }, [])

  const setHoverState = useCallback((elementType: 'button' | 'image' | 'text' | 'link' | 'magnetic') => {
    const newState: Partial<CursorState> = { isHovering: true }
    
    switch (elementType) {
      case 'button':
        newState.isButton = true
        break
      case 'image':
        newState.isImage = true
        break
      case 'text':
        newState.isText = true
        break
      case 'link':
        newState.isLink = true
        break
      case 'magnetic':
        newState.isMagnetic = true
        break
    }
    
    updateCursorState(newState)
  }, [updateCursorState])

  const clearHoverState = useCallback(() => {
    updateCursorState({
      isHovering: false,
      isButton: false,
      isImage: false,
      isText: false,
      isLink: false,
    })
  }, [updateCursorState])

  const triggerClick = useCallback(() => {
    updateCursorState({ isClicking: true })
    setTimeout(() => {
      updateCursorState({ isClicking: false })
    }, 200)
  }, [updateCursorState])

  return {
    cursorState,
    updateCursorState,
    resetCursorState,
    setHoverState,
    clearHoverState,
    triggerClick,
  }
} 