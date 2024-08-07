//ResourceOutput.tsx
import React, { useMemo, useState } from 'react'
import { ModuleType } from '@/public/data/types/ModuleType'
import { getExtractionRate } from '@/utils/extractionRate'
import { TimeUnit } from '@/utils/timeUnit'

interface ResourceOutputProps {
	selectedModulesList: ModuleType[]
}

/**
 * Renders the resource extraction rates based on the selected modules list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.selectedModulesList - The list of selected modules.
 * @returns {JSX.Element} The resource output component.
 */
const ResourceOutput: React.FC<ResourceOutputProps> = ({
	selectedModulesList,
}) => {
	const [selectedTimeUnit, setSelectedTimeUnit] = useState<TimeUnit>(
		TimeUnit.Minute
	)

	/**
	 * Updates the selected time unit when user changes the dropdown.
	 * @param event - The change event from the dropdown.
	 */
	const handleTimeUnitChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		// console.log('Time unit changed:', event.target.value)
		setSelectedTimeUnit(parseInt(event.target.value))
	}

	/**
	 * Calculates the resource data based on the selected modules list.
	 * @param selectedModulesList - The list of selected modules.
	 * @returns The resource data object containing the count and rate for each resource.
	 */
	const resourceData = useMemo(() => {
		const data: { [resource: string]: { count: number; rate: number } } = {}

		selectedModulesList.forEach((module) => {
			if (module.id.toLowerCase().includes('extractor')) {
				const resource = module.id.toLowerCase().includes('vapor')
					? 'Water'
					: module.resource

				if (resource) {
					if (!data[resource]) {
						data[resource] = { count: 0, rate: 0 }
					}
					data[resource].count += module.amount ?? 1
					data[resource].rate +=
						getExtractionRate(resource, module) * (module.amount ?? 1)
				}
			}
		})

		return data
	}, [selectedModulesList])

	return (
		<div className='mt-4'>
			<div className='flex items-center justify-between'>
				<h3 className='font-semibold text-base lg:mb-[1.25rem]'>
					Resource Extraction Rates
				</h3>
				<select
					onChange={handleTimeUnitChange}
					className='bg-neutral-700 p-2 rounded'
					value={selectedTimeUnit}
					aria-label='Time unit for resource extraction rates'
				>
					<option value={TimeUnit.Minute}>Per Minute</option>
					<option value={TimeUnit.Hour}>Per Hour</option>
					<option value={TimeUnit.Day}>Per Day</option>
				</select>
			</div>
			<table className='w-full table-auto'>
				<thead>
					<tr className='border-b-2 border-dashed'>
						<th className='text-left pb-2'>Resource</th>
						<th className='text-left pb-2'>Extractors</th>
						<th className='text-left pb-2'>Total Rate</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(resourceData).map(([resource, { count, rate }]) => (
						<tr
							key={resource}
							className='border-b-[1px]'
						>
							<td>{resource.charAt(0).toUpperCase() + resource.slice(1)}</td>
							<td>{count}</td>
							<td>
								{(rate * selectedTimeUnit).toFixed(2)}/
								{TimeUnit[selectedTimeUnit].toLowerCase()}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ResourceOutput
