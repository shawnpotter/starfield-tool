'use client'
import React, { useEffect, useState } from 'react'
import outpostModules from '@/public/data/outpost/outpostModules.json'
import { FaTrash } from 'react-icons/fa6'

// Define an interface for a module
interface ModuleType {
	id: string
	name: string
	materialCosts: {
		material: string
		quantity: number
	}[]
	production: {
		power: number
	}
	powerCost: {
		power: number
		fuel: number
	}
	amount?: number
}

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
			console.log('Calculating Total Material Costs')
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

			console.log('Total Material Costs:', totalMaterialCosts) // Log the total material costs

			return totalMaterialCosts
		}

		// Calculate total material cost whenever selectedModulesList changes
		const updatedTotalMaterialCosts = calculateTotalMaterialCost()
		setTotalMaterialCosts(updatedTotalMaterialCosts)
	}, [selectedModulesList])

	//handle module Selection and reset dropdown list

	const handleModuleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedModuleId = e.target.value
		console.log('Selected Module ID:', selectedModuleId) // Log the selected module ID

		if (selectedModuleId !== 'Select') {
			// Check if the selected module already exists in the list
			const existingModuleIndex = selectedModulesList.findIndex(
				(module) => module.id === selectedModuleId
			)

			if (existingModuleIndex !== -1) {
				// If it exists, update the "amount" property
				const updatedModulesList = [...selectedModulesList]

				const existingModule = updatedModulesList[existingModuleIndex]
				if (existingModule) {
					existingModule.amount = (existingModule.amount ?? 1) + 1

					// check the updated "amount"
					console.log('Updated Module Amount:', existingModule.amount)

					setSelectedModulesList(updatedModulesList)
				}
			} else {
				// Find the selected module within the categories
				const selectedModuleToAdd = Object.values(outpostModules)
					.flatMap((category: ModuleType[]) => category)
					.find((module: ModuleType) => module.id === selectedModuleId)

				if (selectedModuleToAdd) {
					console.log('Selected Module:', selectedModuleToAdd) // Log the selected module
					setSelectedModulesList([...selectedModulesList, selectedModuleToAdd])
					console.log('Selected Modules List:', [
						...selectedModulesList,
						selectedModuleToAdd,
					]) // Log the selected modules list
					setSelectedModule('') // Reset the dropdown selection
				}
			}
		}
	}

	const handleAmountChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		console.log('Changing amount for index:', index)
		console.log('New amount:', e.target.value)
		const updatedModulesList = [...selectedModulesList]
		updatedModulesList[index].amount = parseInt(e.target.value, 10) // Convert input value to an integer
		setSelectedModulesList(updatedModulesList)
		console.log('Updated modules list:', updatedModulesList)
	}

	const handleRemoveModule = (moduleIndex: number) => {
		const updatedModulesList = [...selectedModulesList]
		updatedModulesList.splice(moduleIndex, 1)
		console.log('Updated Modules List:', updatedModulesList) // Log the updated list
		setSelectedModulesList(updatedModulesList)
	}
	return (
		<div className='flex flex-row'>
			<div className='w-full h-full mt-10'>
				{/* Input */}
				<div className='ml-10 w-1/4'>
					<h1>Outpost Modules</h1>
					<div>
						<select
							className='bg-neutral-500/50 p-2 rounded-sm w-full'
							title='module-select'
							value={selectedModule}
							onChange={(e) => handleModuleChange(e)}
						>
							<option value='Select'>Select</option>
							{Object.entries(outpostModules).map(([category, options]) => (
								<optgroup
									label={category}
									key={category}
								>
									{options.map((option) => (
										<option
											value={option.id}
											key={option.id}
										>
											{option.name}
										</option>
									))}
								</optgroup>
							))}
						</select>
					</div>
				</div>
				{/* Output */}
				<div className='mt-6'>
					<table className='ml-10 table-auto w-96'>
						<thead className='border-b border-white'>
							<tr className='text-left'>
								<th className='pb-2'>Module Name</th>
								<th className='pb-2'>Amount</th>
								<th className='pb-2'>
									<div>
										<FaTrash className='text-white' />
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{selectedModulesList.map((module, index) => (
								<tr
									className='py-2 bg-neutral-500/50'
									key={`${module.id}`}
								>
									<td className='py-2'>{module.name}</td>
									<td className='py-2'>
										<input
											className='bg-neutral-800 w-12 mx-2 p-1 rounded'
											aria-label='Amount'
											type='number'
											min={1}
											value={module.amount ?? 1}
											onChange={(e) => handleAmountChange(index, e)}
										/>
									</td>
									<td className=' w-auto py-2'>
										<div
											className='flex cursor-pointer'
											onClick={() => handleRemoveModule(index)}
										>
											<FaTrash className='text-red-500' />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<div className='w-3/5 justify-start bg-black/50 overflow-x-hidden text-lg'>
				<table className='ml-10 w-full'>
					<thead className=''>
						<tr className='text-left border-b border-white/75'>
							<th className='pb-2'>Resource</th>
							<th className='pb-2'>Amount</th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(totalMaterialCosts).map(([material, cost]) => (
							<tr
								className='border-b border-white/25'
								key={material}
							>
								<td className='capitalize pl-2 mb-2'>{material}</td>
								<td className='pl-2 mb-2'>{cost}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
