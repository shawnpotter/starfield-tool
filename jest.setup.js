// jest.setup.js
import '@testing-library/jest-dom'

// Simplified fetch mock
global.fetch = jest.fn(() =>
	Promise.resolve({ json: () => Promise.resolve({}) })
)
