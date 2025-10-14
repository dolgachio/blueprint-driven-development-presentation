import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders demo heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /blueprint driven development demo/i })).toBeInTheDocument()
  })

  it('renders count button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
})