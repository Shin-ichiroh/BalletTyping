import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('Home renders the ballet theater menu directly', () => {
  render(<Home />)
  expect(screen.getByText(/クラシックバレエ鑑賞タイピング/i)).toBeDefined()
  expect(screen.getByText(/Classical Theater/i)).toBeDefined()
  expect(screen.getByText(/A席・レギュラー鑑賞コース/i)).toBeDefined()
})
