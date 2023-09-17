'use client'
import React from 'react'
import { Item } from '../../items/page'

interface TableProps {
	tableData: Item[]
}

const Table: React.FC<TableProps> = ({ tableData }) => {
	//onclick that copies the item id to clipboard

	// If tableData is empty, return a message
	if (!tableData || tableData.length === 0) {
		return <div>No data available</div>
	}

	const handleRowClick = (id: string) => {
		navigator.clipboard
			.writeText(id)
			.then(() => {
				alert('Copied to clipboard!')
			})
			.catch((err) => {
				console.log('Error copying to clipboard: ', err)
			})
	}

	return (
		<div
			id='table-component'
			className='flex flex-col h-full'
		>
			<div className='h-full overflow-x-hidden'>
				<table className='text-lg display'>
					<thead className='sticky top-0'>
						<tr>
							<th>Item Name</th>
							<th>Item ID</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((item, index) => (
							<tr
								key={item.id}
								className={
									index % 2 === 0 ? 'bg-zinc-600/75' : 'bg-zinc-800/75'
								}
								onClick={() => handleRowClick(item.id)}
								style={{ cursor: 'pointer' }}
							>
								<td>{item.name}</td>
								<td>{item.id}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
