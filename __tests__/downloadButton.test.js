import { render, fireEvent } from '@testing-library/react'
import DownloadButton from '@/app/components/calculator/DownloadButton'

// Mock for URL.createObjectURL
const mockCreateObjectURL = jest.fn(() => 'blob:mock-url')
Object.defineProperty(window, 'URL', {
	value: { createObjectURL: mockCreateObjectURL, revokeObjectURL: jest.fn() },
})

describe('DownloadButton', () => {
	const mockModulesList = [
		{ id: 1, name: 'Module 1' },
		{ id: 2, name: 'Module 2' },
	]
	const mockCost = { material1: 100, material2: 200 }

	let originalCreateElement
	let clickedLinks

	beforeAll(() => {
		originalCreateElement = document.createElement
		clickedLinks = []

		// Mock document.createElement to intercept link creation
		document.createElement = function (tagName) {
			const element = originalCreateElement.call(document, tagName)
			if (tagName.toLowerCase() === 'a') {
				element.click = function () {
					clickedLinks.push({
						href: this.href,
						download: this.download,
					})
				}
			}
			return element
		}
	})

	afterAll(() => {
		document.createElement = originalCreateElement
	})

	beforeEach(() => {
		clickedLinks = []
	})

	const interceptLinkClicks = () => clickedLinks

	it('renders the button with correct text', () => {
		const { getByText } = render(
			<DownloadButton
				modulesList={mockModulesList}
				cost={mockCost}
			/>
		)
		expect(getByText('Download Base')).toBeInTheDocument()
	})

	it('creates a download link with correct attributes when clicked', () => {
		const { getByText } = render(
			<DownloadButton
				modulesList={mockModulesList}
				cost={mockCost}
			/>
		)

		const button = getByText('Download Base')
		fireEvent.click(button)

		const clickedLink = interceptLinkClicks()[0]
		expect(clickedLink).toBeDefined()
		expect(clickedLink.href).toBe('blob:mock-url')
		expect(clickedLink.download).toBe('outpost-data.json')
	})

	it('creates a Blob with correct data and type', () => {
		const { getByText } = render(
			<DownloadButton
				modulesList={mockModulesList}
				cost={mockCost}
			/>
		)

		const button = getByText('Download Base')
		fireEvent.click(button)

		const expectedData = JSON.stringify(
			{
				modules: mockModulesList,
				totalCosts: mockCost,
			},
			null,
			2
		)

		expect(mockCreateObjectURL).toHaveBeenCalledWith(expect.any(Blob))

		const blobCall = mockCreateObjectURL.mock.calls[0][0]
		expect(blobCall.type).toBe('application/json')

		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.onload = (event) => {
				expect(event.target.result).toBe(expectedData)
				resolve()
			}
			reader.readAsText(blobCall)
		})
	})
})
