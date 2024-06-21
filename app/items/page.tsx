'use client'
import { useEffect, useState } from 'react'
import Table from '@/app/components/items-table/Table'
import Toolbar from '@/app/components/items-table/Toolbar'

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
		setSelectedTable(newTable)
	}

	//fetch the selectedTable data from api
	useEffect(() => {
		getTable(selectedTable).then((data) => {
			setData(data)
		})
	}, [selectedTable])

	return (
		<main className={`item-tables flex flex-col`}>
			<div>
				<Toolbar onTableChange={handleTableChange} />
			</div>
			<div>
				<Table tableData={data} />
			</div>
		</main>
	)
}
