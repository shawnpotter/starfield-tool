'use client'
import { useEffect, useState } from 'react'
import Table from '@/app/components/Table/Table'
import Toolbar from '@/app/components/Toolbar/Toolbar'

export interface Item {
	name: string
	id: string
}

async function getTable(tableName: string) {
	const res = await fetch(`data/items/${tableName}.json`)
	const data = await res.json()
	return data
}

export default function Items() {
	const [selectedTable, setSelectedTable] = useState('inorganic')
	const [data, setData] = useState<Item[]>([])

	//handle table selection
	const handleTableChange = (newTable: string) => {
		console.log('New Table to be loaded:', newTable)
		setSelectedTable(newTable)
	}

	//fetch the selectedTable data from api
	useEffect(() => {
		getTable(selectedTable).then((data) => {
			setData(data)
		})
	}, [selectedTable])

	return (
		<main className='flex justify-center w-[95%] h-full'>
			<div className='flex w-full'>
				<div className='w-[20%]'>
					<Toolbar onTableChange={handleTableChange} />
				</div>
				<div className='w-[80%]'>
					<Table
						tableData={data}
						tableName={selectedTable}
					/>
				</div>
			</div>
		</main>
	)
}
