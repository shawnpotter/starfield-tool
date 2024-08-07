//page.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { ModuleType } from '@/public/data/types/ModuleType'
import outpostModules from '@/public/data/outpost/outpostModules.json'
import ModuleSelect from '@/app/components/calculator/ModuleSelect'
import SelectedModulesList from '@/app/components/calculator/SelectedModuleList'
import TotalMaterialCosts from '@/app/components/calculator/TotalMaterialCosts'
import DownloadButton from '@/app/components/calculator/DownloadButton'
import FileUpload from '@/app/components/calculator/FileUpload'
import ResourceOutput from '@/app/components/calculator/ResourceOutput'
import ClearButton from '@/app/components/calculator/ClearButton'

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
			return selectedModulesList.reduce((totalCosts, module) => {
				const amount = module.amount ?? 1

				module.materialCosts.forEach(({ material, quantity }) => {
					totalCosts[material] = (totalCosts[material] || 0) + quantity * amount
				})

				return totalCosts
			}, {} as { [material: string]: number })
		}

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
		const newAmount = parseInt(e.target.value, 10)
		updatedModulesList[index].amount = newAmount

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

	const handleClearModules = () => {
		setSelectedModulesList([])
	}

	/**
	 * Handles the change of a resource for a specific module.
	 *
	 * @param index - The index of the module in the selectedModulesList array.
	 * @param resource - The new resource for the module.
	 */
	const handleResourceChange = (index: number, resource: string) => {
		setSelectedModulesList((prevList) => {
			const updatedList = [...prevList]
			const selectedModule = updatedList[index]

			if (selectedModule.id.toLowerCase().includes('vapor')) {
				selectedModule.resource = 'Water'
			} else {
				selectedModule.resource = resource
			}

			return updatedList
		})
	}

	return (
		<div className='min-h-screen bg-neutral-800 text-sm font-light flex flex-col'>
			<div className='py-2 font-semibold w-full justify-between items-center bg-green-900/75 flex flex-col md:flex-row px-6'>
				<span>Outpost Calculator v1.1</span>
				<div className='flex flex-col gap-4 md:flex-row items-center md:justify-end'>
					<FileUpload
						setSelectedModulesList={setSelectedModulesList}
						setTotalMaterialCosts={setTotalMaterialCosts}
					/>
					<DownloadButton
						modulesList={selectedModulesList}
						cost={totalMaterialCosts}
					/>
					<ClearButton onClick={handleClearModules} />
				</div>
			</div>
			<div className='flex-grow px-4 flex'>
				<div className='grid px-4 grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 gap-8 mt-2 justify-between flex-grow shadow-black shadow rounded-xl'>
					<div className='px-2 flex-grow'>
						<ModuleSelect
							selectedModule={selectedModule}
							handleModuleChange={handleModuleChange}
							outpostModules={outpostModules}
						/>
						<SelectedModulesList
							selectedModulesList={selectedModulesList}
							handleAmountChange={handleAmountChange}
							handleRemoveModule={handleRemoveModule}
							handleResourceChange={handleResourceChange}
						/>
					</div>
					<div className='md:col-start-2 px-2 flex-grow'>
						<ResourceOutput selectedModulesList={selectedModulesList} />
					</div>
					<div className='px-2 md:col-start-2  2xl:col-start-3 flex-grow'>
						<TotalMaterialCosts totalMaterialCosts={totalMaterialCosts} />
					</div>
				</div>
			</div>
		</div>
	)
}
