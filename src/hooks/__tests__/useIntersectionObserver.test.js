import { renderHook } from '@testing-library/react'
import useIntersectionObserver from '../useIntersectionObserver'

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
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

  it('returns ref function', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    expect(typeof result.current.ref).toBe('function')
  })

  it('returns correct interface', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    
    expect(result.current).toHaveProperty('ref')
    expect(result.current).toHaveProperty('isIntersecting')
    expect(result.current).toHaveProperty('hasIntersected')
    expect(result.current).toHaveProperty('entry')
  })
})
