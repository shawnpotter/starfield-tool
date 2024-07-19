import React from 'react'

interface TotalMaterialCostsProps {
	totalMaterialCosts: { [material: string]: number }
}

const TotalMaterialCosts: React.FC<TotalMaterialCostsProps> = ({
	totalMaterialCosts,
}) => {
	return (
		<div className='w-full h-full bg-neutral-900/50 flex flex-col'>
			<div>
				<h1 className='w-full'>Material Cost</h1>
			</div>
			<div>
				<table className='table-auto w-[95%]'>
					<thead>
						<tr className='text-lg text-left border-b border-white/75'>
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
								<td className='capitalize'>{material}</td>
								<td className=''>{cost}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TotalMaterialCosts
