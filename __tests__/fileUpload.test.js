import { render, fireEvent, waitFor } from '@testing-library/react'
import FileUpload from '@/app/components/calculator/FileUpload'

// Mock the File object and its text method
const mockFileData = {
	modules: [
		{
			id: 'extractor_ore_small',
			name: 'Extractor - Ore',
			materialCosts: [
				{ material: 'aluminum', quantity: 4 },
				{ material: 'iron', quantity: 5 },
				{ material: 'tungsten', quantity: 2 },
			],
			production: {
				power: 0,
			},
			powerCost: {
				power: 5,
				fuel: 0,
			},
			amount: 1,
		},
	],
	totalCosts: {
		aluminum: 4,
		iron: 5,
		tungsten: 2,
	},
}

global.File = class {
	constructor(content, fileName, options) {
		this.content = content
		this.name = fileName
		this.options = options
	}

	text() {
		return Promise.resolve(JSON.stringify(mockFileData))
	}
}

describe('FileUpload', () => {
	const setSelectedModulesList = jest.fn()
	const setTotalMaterialCosts = jest.fn()

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should process the uploaded JSON file correctly', async () => {
		const file = new File([JSON.stringify(mockFileData)], 'data.json', {
			type: 'application/json',
		})

		const { getByLabelText } = render(
			<FileUpload
				setSelectedModulesList={setSelectedModulesList}
				setTotalMaterialCosts={setTotalMaterialCosts}
			/>
		)

		const fileInput = getByLabelText('Upload Saved Base')
		fireEvent.change(fileInput, { target: { files: [file] } })

		await waitFor(() => {
			expect(setSelectedModulesList).toHaveBeenCalledWith(mockFileData.modules)
			expect(setTotalMaterialCosts).toHaveBeenCalledWith(
				mockFileData.totalCosts
			)
		})
	})
})
