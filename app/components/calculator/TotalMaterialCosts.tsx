import React from 'react'

interface TotalMaterialCostsProps {
	totalMaterialCosts: { [material: string]: number }
}

const TotalMaterialCosts: React.FC<TotalMaterialCostsProps> = ({
	totalMaterialCosts,
}) => {
	return (
		<div className='w-full lg:w-3/5 h-full lg:mt-10 justify-start bg-neutral-900/50 overflow-x-hidden lg:mx-10'>
			<table className='w-full lg:mx-10'>
				<thead>
					<tr className='text-left text-lg border-b border-white/75'>
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
	)
}

export default TotalMaterialCosts
