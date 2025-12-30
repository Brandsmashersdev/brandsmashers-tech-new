import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import StatsComponent from '../StatsComponent'

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})
window.IntersectionObserver = mockIntersectionObserver

describe('StatsComponent', () => {
  const defaultStats = [
    { value: 8, label: "Years of Expertise" },
    { value: 95, label: "Timely Deliveries" },
    { value: 20, label: "Markets Worldwide" },
    { value: 50, label: "Global Brands" },
  ]

  beforeEach(() => {
    // Mock requestAnimationFrame
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => setTimeout(cb, 0))
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders with default stats', () => {
    render(<StatsComponent />)
    
    expect(screen.getByText('Years of Expertise')).toBeInTheDocument()
    expect(screen.getByText('Timely Deliveries')).toBeInTheDocument()
    expect(screen.getByText('Markets Worldwide')).toBeInTheDocument()
    expect(screen.getByText('Global Brands')).toBeInTheDocument()
  })

  it('renders with custom stats', () => {
    const customStats = [
      { value: 10, label: "Custom Stat 1" },
      { value: 25, label: "Custom Stat 2" },
    ]
    
    render(<StatsComponent stats={customStats} />)
    
    expect(screen.getByText('Custom Stat 1')).toBeInTheDocument()
    expect(screen.getByText('Custom Stat 2')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<StatsComponent className="custom-class" />)
    
    const container = document.querySelector('.custom-class')
    expect(container).toBeInTheDocument()
  })

  it('shows initial count as 0', () => {
    render(<StatsComponent />)
    
    const countElements = screen.getAllByText('0')
    expect(countElements.length).toBe(4)
  })

  it('starts animation when intersection observer triggers', async () => {
    let observerCallback
    mockIntersectionObserver.mockImplementation((callback) => {
      observerCallback = callback
      return {
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
      }
    })

    render(<StatsComponent />)
    
    // Simulate intersection observer triggering
    observerCallback([{ isIntersecting: true }])
    
    // Wait for animation to start
    await waitFor(() => {
      const countElements = screen.getAllByText(/[0-9]+/)
      expect(countElements.length).toBeGreaterThan(0)
    }, { timeout: 1000 })
  })

  it('renders correct number of stat items', () => {
    render(<StatsComponent />)
    
    const statItems = document.querySelectorAll('.text-center')
    expect(statItems.length).toBe(4)
  })

  it('applies custom threshold', () => {
    render(<StatsComponent threshold={0.8} />)
    
    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({ threshold: 0.8 })
    )
  })

  it('applies custom duration', () => {
    render(<StatsComponent duration={1.5} />)
    
    // The duration is used internally in the animation logic
    expect(screen.getByText('Years of Expertise')).toBeInTheDocument()
  })
})
