// components/ModuleSelect.tsx
import React from 'react'
import { ModuleType } from '@/public/data/types/ModuleType'

interface ModuleSelectProps {
	selectedModule: string
	handleModuleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	outpostModules: Record<string, ModuleType[]>
}

const ModuleSelect: React.FC<ModuleSelectProps> = ({
	selectedModule,
	handleModuleChange,
	outpostModules,
}) => {
	return (
		<div className='mx-4 lg:ml-10 lg:w-1/4'>
			<h1>Outpost Modules</h1>
			<div>
				<select
					className='bg-neutral-500/50 p-2 rounded-sm w-full lg:w-96'
					title='module-select'
					value={selectedModule}
					onChange={handleModuleChange}
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
	)
}

export default ModuleSelect
