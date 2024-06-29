import DOMPurify from 'dompurify'
import { ModuleType } from '@/public/data/types/ModuleType'

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
		<div className='lg:ml-10 flex flex-row items-center'>
			<label
				htmlFor='fileInput'
				className='block pr-2'
			>
				Upload Saved Base
			</label>
			<input
				type='file'
				id='fileInput'
				accept='.json'
				className='bg-neutral-500/50 p-2 rounded-sm w-full lg:w-96'
				onChange={handleFileUpload}
			/>
		</div>
	)
}

export default FileUpload
