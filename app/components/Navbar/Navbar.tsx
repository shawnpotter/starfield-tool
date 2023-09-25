import Link from 'next/link'
import React from 'react'

export default function Navbar() {
	return (
		<nav className='block justify-between w-full bg-zinc-800/75 px-10 h-[56px]'>
			<div className='flex justify-between items-center h-full'>
				<div>
					<Link href='/'>
						<span>
							<strong className='text-lg uppercase'>Starfield Tools</strong>{' '}
							<em>
								<small>by @Spotter_Dev</small>
							</em>
						</span>
					</Link>
				</div>
				<div>
					<ul className='flex flex-row gap-12'>
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
			</div>
		</nav>
	)
}
