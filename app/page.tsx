'use client'
import Link from 'next/link'
import Updates from './components/Updates'

export default function Home() {
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
					<Link href='/weapon-planner'>
						<button className={btn}>Weapon Planner</button>
					</Link>
				</div>
			</div>
			<Updates />
		</main>
	)
}
