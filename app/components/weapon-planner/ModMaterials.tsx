import React from 'react'

const ModMaterials: React.FC = () => {
	return (
		<table className='table-auto w-full'>
			<thead>
				<tr>
					<th
						className='p-2 text-left'
						colSpan={3}
					>
						Mod Materials
					</th>
				</tr>
			</thead>
			<tbody>{/* Add mod materials here */}</tbody>
		</table>
	)
}

export default ModMaterials
