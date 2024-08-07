// SelectedModulesList.tsx
import React from 'react'
import { ModuleType } from '@/public/data/types/ModuleType'
import { FaTrash } from 'react-icons/fa6'
import { oreTypes, gasTypes, liquidTypes } from '@/utils/materialLists'

interface Module {
	id: string
	name: string
	resource?: string
}

type ResourceOptions = Record<string, string[]>

interface SelectedModulesListProps {
	selectedModulesList: ModuleType[]
	handleAmountChange: (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => void
	handleRemoveModule: (moduleIndex: number) => void
	handleResourceChange: (index: number, resource: string) => void
}

const SelectedModulesList: React.FC<SelectedModulesListProps> = ({
	selectedModulesList,
	handleAmountChange,
	handleRemoveModule,
	handleResourceChange,
}) => {
	const getResourceOptions = (moduleId: string) => {
		if (moduleId.toLowerCase().includes('ore')) return oreTypes
		if (moduleId.toLowerCase().includes('gas')) return gasTypes
		if (moduleId.toLowerCase().includes('liquid')) return liquidTypes
		return null
	}

	const renderOptions = (options: Record<string, string[]>) => {
		return Object.entries(options).map(([category, resources]) => (
			<optgroup
				key={category}
				label={category.charAt(0).toUpperCase() + category.slice(1)}
			>
				{resources.map((resource) => (
					<option
						key={resource}
						value={resource}
					>
						{resource.charAt(0).toUpperCase() + resource.slice(1)}
					</option>
				))}
			</optgroup>
		))
	}

	const renderResourceSelector = (
		module: Module,
		index: number,
		resourceOptions: ResourceOptions | null
	) => {
		const isExtractor = module.id.toLowerCase().includes('extractor')
		const isVaporExtractor = module.id.toLowerCase().includes('vapor')

		if (isExtractor) {
			if (isVaporExtractor) {
				return <span>Water</span>
			} else {
				return (
					<select
						className='bg-neutral-900/50 p-1 w-full rounded'
						value={module.resource ?? ''}
						onChange={(e) => handleResourceChange(index, e.target.value)}
						title='Select a resource'
						aria-label='resource-select'
					>
						<option value=''>Select resource</option>
						{resourceOptions ? renderOptions(resourceOptions) : null}
					</select>
				)
			}
		} else {
			return <span>N/A</span>
		}
	}

	return (
		<div className='mt-4'>
			<table className='2xl:table-fixed w-full border-0 border-t-2 border-dashed border-separate border-spacing-1'>
				<thead>
					<tr className='text-left'>
						<th className='p-1 border-0 w-64'>Module Name</th>
						<th className='p-1 border-0 w-40'>Resource</th>
						<th className='p-1 border-0 w-20'>Amount</th>
						<th className='p-1 border-0'>
							<div className='w-full flex justify-center items-center'>
								<FaTrash className='text-white' />
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{selectedModulesList.map((module, index) => {
						const resourceOptions = getResourceOptions(module.id)
						return (
							<tr
								className='py-2'
								key={`${module.id}-${index}`}
							>
								<td className='p-1 border rounded'>{module.name}</td>
								<td className='p-1 border rounded'>
									{renderResourceSelector(module, index, resourceOptions)}
								</td>
								<td className='p-1 border rounded'>
									<input
										className='bg-neutral-800 w-12 mx-2 p-1 rounded'
										aria-label='Amount'
										type='number'
										min={1}
										value={module.amount ?? 1}
										onChange={(e) => handleAmountChange(index, e)}
									/>
								</td>
								<td className='w-auto p-1'>
									<div className='w-full  flex justify-center'>
										<button
											className='flex cursor-pointer'
											onClick={() => handleRemoveModule(index)}
											title='remove'
										>
											<FaTrash className='text-red-500' />
										</button>
									</div>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default SelectedModulesList
