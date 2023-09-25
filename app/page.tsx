import Link from 'next/link'
import React from 'react'
import { FaTwitter } from 'react-icons/fa6'

export default function Home() {
	const btn =
		'text-center bg-zinc-400/50 font-semibold shadow self-center border py-3 w-[20rem] md:text-sm lg:text-base hover:bg-zinc-700/75 cursor-pointer'
	return (
		<main className='flex flex-col h-full w-full items-center'>
			<h1 className='w-full text-2xl font-black uppercase text-center my-10'>
				Starfield Tools
			</h1>
			<div className='w-full'>
				<div className='flex flex-row gap-8 justify-center w-full px-4 sm:px-0'>
					<Link href='/items'>
						<div className={btn}>Item IDs</div>
					</Link>
					<Link href='/outpost-calculator'>
						<div className={btn}>Outpost Calculator</div>
					</Link>
					<div className='text-center bg-zinc-400/25 font-semibold shadow self-center border py-3 w-[20rem] md:text-sm lg:text-base'>
						Coming Soon...
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-start w-1/2 px-10 pt-[12rem] font-semibold text-lg'>
				<h1>Updates</h1>
				<div className='flex flex-col border rounded p-4'>
					<span className='ml-5 font-normal'>9/20/2023:</span>
					<span className='ml-5 font-normal'>
						Outpost Calculator v1.0 is live. I will be adding more features to
						it in the future.
					</span>
					<br />
					<span className='ml-5 font-normal'>9/17/2023:</span>
					<span className='ml-5 font-normal'>
						Item ID tables are mostly finished. I haven&apos;t included weapons
						yet because I have not figured out how to properly work with the
						tiered weapons in the console yet. I will be adding them soon.
					</span>
					<span className='ml-5 font-normal mt-4'>
						I will be introducing new tools soon. Outpost building and Weapon
						Modification calculators are next. First iteration of Weapon Mod
						calculator will be a simple calculator that will tell you base
						modification values. I&apos;ll add in skill modifiers later on.
					</span>
				</div>
			</div>
			<div className='pt-[5rem]'>
				<span>
					Questions, Comments, or Suggestions can be directed to my
					<a
						href='https://twitter.com/Spotter_Dev'
						className=' inline-block ml-1'
					>
						<button className='flex flex-row bg-[#26A7DE]/75 py-1 px-4 rounded-xl font-extrabold just items-center'>
							<FaTwitter className='mr-2' /> Twitter
						</button>
					</a>
				</span>
			</div>
		</main>
	)
}
