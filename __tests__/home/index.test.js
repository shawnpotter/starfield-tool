import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
	it('should have a heading that says "Starfield Tools"', () => {
		render(<Home />)

		const heading = screen.getByRole('heading', {
			name: /starfield tools/i,
		})

		expect(heading).toBeInTheDocument()
	})
})
