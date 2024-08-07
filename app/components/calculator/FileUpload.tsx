import DOMPurify from 'dompurify'
import { ModuleType } from '@/public/data/types/ModuleType'
import { FaUpload } from 'react-icons/fa6'

interface FileUploadProps {
	setSelectedModulesList: (modules: ModuleType[]) => void
	setTotalMaterialCosts: (costs: { [material: string]: number }) => void
}

const FileUpload: React.FC<FileUploadProps> = ({
	setSelectedModulesList,
	setTotalMaterialCosts,
}) => {
	/**
	 * Handles the file upload event and processes the uploaded file.
	 * @param e - The change event triggered by the file input element.
	 */
	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			try {
				const fileContents = await file.text()
				processFileContents(fileContents)
			} catch (error) {
				console.error('Error parsing JSON file:', error)
			}
		}
	}

	const processFileContents = (fileContents: string) => {
		const sanitizedContents = DOMPurify.sanitize(fileContents)
		const data = JSON.parse(sanitizedContents)

		// Check if the data has the expected structure
		if (data.modules && data.totalCosts) {
			setSelectedModulesList(data.modules)
			setTotalMaterialCosts(data.totalCosts)
		} else {
			// If the data has a different structure, try to extract the modules and costs
			const modules = Array.isArray(data) ? data : Object.values(data)
			const costs = modules.reduce(
				(acc: { [material: string]: number }, module: ModuleType) => {
					if (Array.isArray(module.materialCosts)) {
						module.materialCosts.forEach((cost) => {
							const { material, quantity } = cost
							const amount = module.amount ?? 1
							if (acc[material]) {
								acc[material] += quantity * amount
							} else {
								acc[material] = quantity * amount
							}
						})
					}
					return acc
				},
				{}
			)

			setSelectedModulesList(modules)
			setTotalMaterialCosts(costs)
		}
	}

	return (
		<div>
			<button
				id='fileInput'
				className='bg-cyan-700 px-4 py-1.5 shadow-black/75 shadow-sm rounded w-full flex flex-row items-center gap-2 '
				onClick={() => {
					const hiddenFileInput = document.getElementById('hiddenFileInput')
					if (hiddenFileInput) {
						hiddenFileInput.click()
					}
				}}
			>
				<FaUpload />
				Upload File
			</button>
			<input
				aria-label='Upload JSON file'
				type='file'
				id='hiddenFileInput'
				accept='.json'
				className='hidden'
				onChange={handleFileUpload}
			/>
		</div>
	)
}

export default FileUpload
