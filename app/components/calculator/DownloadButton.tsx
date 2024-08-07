import { ModuleType } from '@/public/data/types/ModuleType'
import { FaSave } from 'react-icons/fa'

interface DownloadButtonProps {
	modulesList: ModuleType[]
	cost: {
		[material: string]: number
	}
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
	modulesList,
	cost,
}) => {
	/**
	 * Generates JSON data based on the selected modules and total costs.
	 * @returns {string} The generated JSON data.
	 */
	const generateJsonData = () => {
		const totalCostsData = Object.keys(cost).length > 0 ? cost : null

		return JSON.stringify(
			{
				modules: modulesList,
				totalCosts: totalCostsData,
			},
			null,
			2
		)
	}

	/**
	 * Handles the download of JSON data.
	 */
	const handleDownload = () => {
		// Generate JSON data
		const jsonData = generateJsonData()

		// Create a Blob from the JSON data
		const blob = new Blob([jsonData], { type: 'application/json' })

		// Create a URL for the Blob
		const url = URL.createObjectURL(blob)

		// Create a link element
		const link = document.createElement('a')
		link.href = url
		link.download = 'outpost-data.json'

		// Append the link to the document body
		document.body.appendChild(link)

		// Click the link to trigger the download
		link.click()

		// Remove the link from the document body
		document.body.removeChild(link)

		// Revoke the URL to free up memory
		URL.revokeObjectURL(url)
	}

	return (
		<button
			onClick={handleDownload}
			className='px-4 py-1.5 flex flex-row items-center gap-2 shadow-black/75 shadow-sm bg-blue-600 rounded hover:bg-blue-700'
		>
			<FaSave />
			Download
		</button>
	)
}

export default DownloadButton
