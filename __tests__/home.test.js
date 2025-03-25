import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve({}),
			})
		)
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('renders a heading', async () => {
		await act(async () => {
			render(<Home />)
		})

		const heading = screen.getByRole('heading', { level: 1 })
		expect(heading).toBeInTheDocument()
	})
})
