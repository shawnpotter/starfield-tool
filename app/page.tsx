'use client'
import Link from 'next/link'
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

export default function Home() {
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

	const btn =
		'text-center bg-zinc-400/50 font-semibold shadow self-center border py-3 w-[20rem] md:text-sm lg:text-base hover:bg-zinc-700/75 cursor-pointer'

	return (
		<main className='flex flex-col h-full w-full items-center'>
			<h1 className='w-full text-2xl font-black uppercase text-center my-10'>
				Starfield Tools
			</h1>
			<div className='w-full'>
				<div className='flex flex-col lg:flex-row gap-8 justify-center items-center w-full px-4 sm:px-0'>
					<Link href='/items'>
						<div className={btn}>Item IDs</div>
					</Link>
					<Link href='/outpost-calculator'>
						<button className={btn}>Outpost Calculator</button>
					</Link>
					<button
						className={`${btn} bg-zinc-800 hover:bg-zinc-800`}
						disabled
					>
						Coming Soon...
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-start xl:w-1/2 md:px-10 pt-4 md:pt-[12rem] font-semibold text-lg'>
				<h1>Updates</h1>
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
		</main>
	)
}
