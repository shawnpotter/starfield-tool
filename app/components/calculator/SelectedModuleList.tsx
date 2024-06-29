import { ModuleType } from '@/public/data/types/ModuleType'
import { FaTrash } from 'react-icons/fa6'

interface SelectedModulesListProps {
	selectedModulesList: ModuleType[]
	handleAmountChange: (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => void
	handleRemoveModule: (moduleIndex: number) => void
}

const SelectedModulesList: React.FC<SelectedModulesListProps> = ({
	selectedModulesList,
	handleAmountChange,
	handleRemoveModule,
}) => {
	return (
		<div className='mt-6'>
			<table className='lg:ml-10 table-auto w-full lg:w-96'>
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
							<td className='w-auto py-2'>
								<div>
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
					))}
				</tbody>
			</table>
		</div>
	)
}

export default SelectedModulesList
