'use client'
import React from 'react'
import { Item } from '../../items/page'

interface TableProps {
	tableData: Item[]
	tableName: string
}

const Table: React.FC<TableProps> = ({ tableData, tableName }) => {
	console.log('tableName: ', tableName)
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
			data-testid='table-component'
			id='table-component'
			className='flex flex-col max-h-screen'
		>
			<h1 className='text-center text-2xl capitalize font-semibold'>
				{tableName}
			</h1>
			<div className='max-h-screen overflow-scroll overflow-x-hidden'>
				<table className='text-lg'>
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
								className={index % 2 === 0 ? 'bg-black' : 'bg-slate-800'}
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
