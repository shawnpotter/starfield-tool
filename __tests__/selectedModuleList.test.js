// SelectedModulesList.test.js
import { render, screen, fireEvent } from '@testing-library/react'
import SelectedModulesList from '@/app/components/calculator/SelectedModuleList'
import moduleData from '@/__mocks__/moduleData'

describe('SelectedModulesList', () => {
	const mockModulesList = [moduleData.categoryOne[0], moduleData.categoryTwo[0]]

	const mockHandleAmountChange = jest.fn()
	const mockHandleRemoveModule = jest.fn()

	describe('with selected modules', () => {
		beforeEach(() => {
			render(
				<SelectedModulesList
					selectedModulesList={mockModulesList}
					handleAmountChange={mockHandleAmountChange}
					handleRemoveModule={mockHandleRemoveModule}
				/>
			)
		})

		it('renders the component with selected modules', () => {
			// Assert the presence of table headers
			expect(screen.getByText('Module Name')).toBeInTheDocument()
			expect(screen.getByText('Amount')).toBeInTheDocument()

			// Assert the presence of module names and amounts
			expect(screen.getByText('Module - One')).toBeInTheDocument()
			expect(screen.getByText('Module - Two')).toBeInTheDocument()
			expect(screen.getAllByLabelText('Amount')[0]).toHaveValue(1)
			expect(screen.getAllByLabelText('Amount')[1]).toHaveValue(1)
		})

		it('calls handleAmountChange when amount input changes', () => {
			const amountInput = screen.getAllByLabelText('Amount')[0]
			fireEvent.change(amountInput, { target: { value: '3' } })
			expect(mockHandleAmountChange).toHaveBeenCalledWith(0, expect.any(Object))
		})

		it('calls handleRemoveModule when remove button is clicked', () => {
			const removeButton = screen.getAllByTitle('remove')[0]
			fireEvent.click(removeButton)
			expect(mockHandleRemoveModule).toHaveBeenCalledWith(0)
		})
	})

	describe('with empty selected modules', () => {
		it('displays nothing when selectedModulesList is empty', () => {
			render(
				<SelectedModulesList
					selectedModulesList={[]}
					handleAmountChange={mockHandleAmountChange}
					handleRemoveModule={mockHandleRemoveModule}
				/>
			)

			// Assert that no module names or amounts are displayed
			expect(screen.queryByText('Module - One')).not.toBeInTheDocument()
			expect(screen.queryByText('Module - Two')).not.toBeInTheDocument()
			expect(screen.queryByLabelText('Amount')).not.toBeInTheDocument()
		})
	})
})
