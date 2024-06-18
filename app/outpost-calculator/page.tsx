'use client'
import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import { ModuleType } from '@/public/data/types/ModuleType'
import outpostModules from '@/public/data/outpost/outpostModules.json'
import ModuleSelect from '@/app/components/calculator/ModuleSelect'
import SelectedModulesList from '@/app/components/calculator/SelectedModuleList'
import TotalMaterialCosts from '@/app/components/calculator/TotalMaterialCosts'
import DownloadButton from '@/app/components/calculator/DownloadButton'
import FileUpload from '@/app/components/calculator/FileUpload'

export default function OutpostCalculator() {
	const [selectedModule, setSelectedModule] = useState('')
	const [selectedModulesList, setSelectedModulesList] = useState<ModuleType[]>(
		[]
	)
	const [totalMaterialCosts, setTotalMaterialCosts] = useState(
		{} as {
			[material: string]: number
		}
	)

	useEffect(() => {
		const calculateTotalMaterialCost = () => {
			// Create an object to store the total material costs
			const totalMaterialCosts: { [material: string]: number } = {}

			// Iterate through the selected modules and calculate the total material costs
			selectedModulesList.forEach((module) => {
				const amount = module.amount ?? 1 // Use 1 as the default amount if not specified
				module.materialCosts.forEach((materialCost) => {
					const { material, quantity } = materialCost
					if (totalMaterialCosts[material]) {
						// If the material exists in the totalMaterialCosts object, add the quantity
						totalMaterialCosts[material] += quantity * amount
					} else {
						// If the material doesn't exist, initialize it with the quantity
						totalMaterialCosts[material] = quantity * amount
					}
				})
			})

			return totalMaterialCosts
		}

		// Calculate total material cost whenever selectedModulesList changes
		const updatedTotalMaterialCosts = calculateTotalMaterialCost()
		setTotalMaterialCosts(updatedTotalMaterialCosts)
	}, [selectedModulesList])

	//handle module Selection and reset dropdown list
	const handleModuleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedModuleId = e.target.value

		if (selectedModuleId !== 'Select') {
			// Check if the selected module already exists in the list
			const existingModuleIndex = selectedModulesList.findIndex(
				(module) => module.id === selectedModuleId
			)

			if (existingModuleIndex !== -1) {
				// If it exists, remove it first
				const updatedModulesList = [...selectedModulesList]
				updatedModulesList.splice(existingModuleIndex, 1)
				setSelectedModulesList(updatedModulesList)
			}

			// Find the selected module within the categories
			const selectedModuleToAdd = Object.values(outpostModules)
				.flatMap((category: ModuleType[]) => category)
				.find((module: ModuleType) => module.id === selectedModuleId)

			if (selectedModuleToAdd) {
				// Initialize the amount property to 1 when adding a module
				setSelectedModulesList([
					...selectedModulesList,
					{ ...selectedModuleToAdd, amount: 1 },
				])
				setSelectedModule('') // Reset the dropdown selection
			}
		}
	}

	/**
	 * Handles the change event for the amount input field.
	 *
	 * @param index - The index of the module in the selectedModulesList array.
	 * @param e - The change event object.
	 */
	const handleAmountChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const updatedModulesList = [...selectedModulesList]
		updatedModulesList[index].amount = parseInt(e.target.value, 10) // Convert input value to an integer
		setSelectedModulesList(updatedModulesList)
	}

	/**
	 * Removes a module from the selected modules list.
	 *
	 * @param moduleIndex - The index of the module to be removed.
	 */
	const handleRemoveModule = async (moduleIndex: number) => {
		setSelectedModulesList((prevModulesList) => {
			const updatedModulesList = [...prevModulesList]
			updatedModulesList.splice(moduleIndex, 1)
			return updatedModulesList
		})
	}

	/**
	 * Generates JSON data based on the selected modules and total costs.
	 * @returns {string} The generated JSON data.
	 */
	const generateJsonData = () => {
		const totalCostsData =
			Object.keys(totalMaterialCosts).length > 0 ? totalMaterialCosts : null

		return JSON.stringify(
			{
				modules: selectedModulesList,
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

	/**
	 * Handles the file upload event and processes the uploaded file.
	 * @param e - The change event triggered by the file input element.
	 */
	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			try {
				const fileContents = await file.text()
				const sanitizedContents = DOMPurify.sanitize(fileContents)
				const data = JSON.parse(sanitizedContents)

				// Check if the data has the expected structure
				if (data.modules && data.totalCosts) {
					setSelectedModulesList(data.modules)
					setTotalMaterialCosts(data.totalCosts)
				} else {
					// If the data has a different structure, try to extract the modules and costs
					const modules = Array.isArray(data) ? data : Object.values(data)
					const costs = modules.reduce((acc, module: ModuleType) => {
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
					}, {})

					setSelectedModulesList(modules)
					setTotalMaterialCosts(costs)
				}
			} catch (error) {
				console.error('Error parsing JSON file:', error)
			}
		}
	}
	return (
		<div className='h-full'>
			<div className='flex flex-1 flex-col h-full lg:h-[90%] lg:mx-5'>
				<div className='mt-5 lg:mt-10 py-2 font-semibold w-full justify-between items-center bg-green-900/75 flex flex-row '>
					<span className='ml-10'>Outpost Calculator v1.01</span>
					<div className='flex flex-row justify-end'>
						<FileUpload handleFileUpload={handleFileUpload} />
						<DownloadButton handleDownload={handleDownload} />
					</div>
				</div>
				<div className='flex flex-1 flex-col lg:flex-row h-full pb-20 bg-neutral-800/75'>
					<div className='w-full h-full mt-10'>
						{/* Input */}
						<ModuleSelect
							selectedModule={selectedModule}
							handleModuleChange={handleModuleChange}
							outpostModules={outpostModules}
						/>
						{/* Output */}
						<SelectedModulesList
							selectedModulesList={selectedModulesList}
							handleAmountChange={handleAmountChange}
							handleRemoveModule={handleRemoveModule}
						/>
					</div>
					<TotalMaterialCosts totalMaterialCosts={totalMaterialCosts} />
				</div>
			</div>
		</div>
	)
}
