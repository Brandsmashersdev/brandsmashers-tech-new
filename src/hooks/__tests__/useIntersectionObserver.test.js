import { renderHook, act } from '@testing-library/react'
import useIntersectionObserver from '../useIntersectionObserver'

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
let observerCallback
let observerInstance

mockIntersectionObserver.mockImplementation((callback, options) => {
  observerCallback = callback
  observerInstance = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }
  return observerInstance
})

window.IntersectionObserver = mockIntersectionObserver

describe('useIntersectionObserver', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns initial state', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    expect(result.current.isIntersecting).toBe(false)
    expect(result.current.hasIntersected).toBe(false)
    expect(result.current.entry).toBe(null)
    expect(typeof result.current.ref).toBe('function')
  })

  it('calls IntersectionObserver with default options', () => {
    renderHook(() => useIntersectionObserver())
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.1,
        rootMargin: '0px',
        root: null,
      }
    )
  })

  it('calls IntersectionObserver with custom options', () => {
    const customOptions = {
      threshold: 0.5,
      rootMargin: '10px',
      root: document.body,
    }
    
    renderHook(() => useIntersectionObserver(customOptions))
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      customOptions
    )
  })

  it('updates state when intersection observer triggers', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    act(() => {
      // Simulate intersection observer callback
      observerCallback([{ isIntersecting: true }])
    })
    
    expect(result.current.isIntersecting).toBe(true)
    expect(result.current.hasIntersected).toBe(true)
  })

  it('updates state when element becomes non-intersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    act(() => {
      // First trigger intersection
      observerCallback([{ isIntersecting: true }])
    })
    
    expect(result.current.isIntersecting).toBe(true)
    expect(result.current.hasIntersected).toBe(true)
    
    act(() => {
      // Then trigger non-intersection
      observerCallback([{ isIntersecting: false }])
    })
    
    expect(result.current.isIntersecting).toBe(false)
    expect(result.current.hasIntersected).toBe(true) // Should remain true
  })

  it('calls observe when ref is set', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    act(() => {
      result.current.ref(document.createElement('div'))
    })
    
    expect(observerInstance.observe).toHaveBeenCalled()
  })

  it('calls disconnect on cleanup', () => {
    const { unmount } = renderHook(() => useIntersectionObserver())
    
    unmount()
    
    expect(observerInstance.disconnect).toHaveBeenCalled()
  })

  it('handles multiple intersection events correctly', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    act(() => {
      observerCallback([{ isIntersecting: true }])
    })
    
    expect(result.current.isIntersecting).toBe(true)
    expect(result.current.hasIntersected).toBe(true)
    
    act(() => {
      observerCallback([{ isIntersecting: false }])
    })
    
    expect(result.current.isIntersecting).toBe(false)
    expect(result.current.hasIntersected).toBe(true)
    
    act(() => {
      observerCallback([{ isIntersecting: true }])
    })
    
    expect(result.current.isIntersecting).toBe(true)
    expect(result.current.hasIntersected).toBe(true)
  })
})
