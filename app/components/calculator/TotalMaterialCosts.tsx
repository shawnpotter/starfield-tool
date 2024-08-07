import React from 'react'

interface TotalMaterialCostsProps {
	totalMaterialCosts: { [material: string]: number }
}

const TotalMaterialCosts: React.FC<TotalMaterialCostsProps> = ({
	totalMaterialCosts,
}) => {
	return (
		<div className='w-full mt-4 flex flex-col'>
			<div>
				<h1 className='w-full text-base font-semibold mb-[1.25rem]'>
					Material Cost
				</h1>
			</div>
			<div>
				<table className='table-auto w-full'>
					<thead>
						<tr className='text-left border-b-2 border-dashed'>
							<th className='pb-2'>Resource</th>
							<th className='pb-2'>Amount</th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(totalMaterialCosts).map(([material, cost]) => (
							<tr
								className='border-b'
								key={material}
							>
								<td className='capitalize p-0.5'>{material}</td>
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
