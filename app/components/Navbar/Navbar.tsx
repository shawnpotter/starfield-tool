import Link from 'next/link'
import React from 'react'

export default function Navbar() {
	return (
		<nav className='flex justify-between w-full bg-zinc-800/75 px-10 h-14 items-center'>
			<div className=''>
				<span>
					<strong className='text-lg uppercase'>Starfield Tools</strong>{' '}
					<em>
						<small>by @Spotter_Dev</small>
					</em>
				</span>
			</div>
			<div>
				<ul className='flex flex-row gap-4'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/items'>Item IDs</Link>
					</li>
					<li>
						<Link href='/outpost-calculator'>Outpost Calculator</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
