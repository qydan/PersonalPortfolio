// Feature: portfolio-website, Property 2: theme toggle is a round trip
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import * as fc from 'fast-check'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

// Validates: Requirements 7.1, 7.2, 7.3

describe('Property 2: Theme toggle is a round trip', () => {
  beforeEach(() => {
    // Mock localStorage
    const store = {}
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(key => store[key] ?? null)
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => { store[key] = value })

    // Mock document.documentElement.classList
    vi.spyOn(document.documentElement.classList, 'add').mockImplementation(() => {})
    vi.spyOn(document.documentElement.classList, 'remove').mockImplementation(() => {})

    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('toggleTheme twice returns to the original theme for any starting theme', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('dark', 'light'),
        (initialTheme) => {
          // Seed localStorage with the initial theme
          localStorage.setItem('portfolio-theme', initialTheme)

          const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
          })

          const startingTheme = result.current.theme

          // Toggle once
          act(() => {
            result.current.toggleTheme()
          })

          // Toggle twice
          act(() => {
            result.current.toggleTheme()
          })

          // Theme should be back to the original
          expect(result.current.theme).toBe(startingTheme)
        }
      ),
      { numRuns: 100 }
    )
  })
})
