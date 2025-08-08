import React from 'react'
import { render, screen } from '@testing-library/react'
import SkeletonLoader from '../SkeletonLoader'

describe('SkeletonLoader', () => {
  it('renders default skeleton with text type', () => {
    render(<SkeletonLoader />)
    
    // Should render 3 lines by default for text type
    const skeletonElements = document.querySelectorAll('.animate-pulse')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('renders text skeleton with custom lines', () => {
    render(<SkeletonLoader type="text" lines={5} />)
    
    const skeletonElements = document.querySelectorAll('.animate-pulse')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('renders card skeleton', () => {
    render(<SkeletonLoader type="card" />)
    
    const cardElement = screen.getByTestId('skeleton-card')
    expect(cardElement).toHaveClass('bg-white')
    expect(cardElement).toHaveClass('rounded-lg')
  })

  it('renders image skeleton', () => {
    render(<SkeletonLoader type="image" />)
    
    const skeletonElement = document.querySelector('.animate-pulse')
    expect(skeletonElement).toBeInTheDocument()
  })

  it('renders stats skeleton', () => {
    render(<SkeletonLoader type="stats" />)
    
    // Should render 4 stat items by default
    const statElements = document.querySelectorAll('.text-center')
    expect(statElements.length).toBe(4)
  })

  it('applies custom className', () => {
    render(<SkeletonLoader className="custom-class" />)
    
    const skeletonElement = document.querySelector('.custom-class')
    expect(skeletonElement).toBeInTheDocument()
  })

  it('applies custom height and width', () => {
    render(<SkeletonLoader height="h-8" width="w-32" />)
    
    const skeletonElement = document.querySelector('.h-8.w-32')
    expect(skeletonElement).toBeInTheDocument()
  })

  it('renders default skeleton for unknown type', () => {
    render(<SkeletonLoader type="unknown" />)
    
    const skeletonElement = document.querySelector('.animate-pulse')
    expect(skeletonElement).toBeInTheDocument()
  })
})
