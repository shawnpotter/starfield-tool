import { useEffect, useState } from 'react'

interface UpdateMessage {
	[key: string]: string
}

interface Update {
	date: string
	message: string | UpdateMessage
}

interface UpdateData {
	updates: Update[]
}

export default function Updates() {
	const [updates, setUpdates] = useState<Update[]>([])

	useEffect(() => {
		fetch('data/updates/updateNotice.json')
			.then((response) => response.json())
			.then((data: UpdateData) => setUpdates(data.updates))
			.catch((error) => console.error(error))
	}, [])

	// Function to render message
	const renderMessage = (message: string | UpdateMessage) => {
		console.log(message)
		if (typeof message === 'string') {
			return <p className='ml-4'>{message}</p>
		} else {
			return (
				<ul className='ml-4'>
					{Object.entries(message).map(([key, value]) => (
						<li
							className='mb-2'
							key={key}
						>
							{value}
						</li>
					))}
				</ul>
			)
		}
	}
	if (!updates || updates.length === 0) {
		return (
			<div className='flex h-96 justify-center flex-col items-center space-y-2'>
				<span>Loading Update Feed</span>

				<div className='mt-2 w-6 h-6 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'></div>
			</div>
		)
	} else {
		return (
			<div className='flex flex-col justify-start xl:w-1/2 md:px-10 pt-4 md:pt-[12rem] font-semibold text-lg'>
				<h2>Updates</h2>
				<div className='flex flex-col border rounded bg-black/50 p-4'>
					{updates.map((update) => (
						<div
							key={update.date}
							className='mb-2 font-normal'
						>
							<p>{update.date}</p>
							{renderMessage(update.message)}
						</div>
					))}
				</div>
			</div>
		)
	}
}
