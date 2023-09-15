import Link from 'next/link'
import React from 'react'

export default function Navbar() {
	return (
		<nav className='h-[50px] w-full bg-slate-800 mb-2'>
			<div className='flex justify-end items-center'>
				<ul className='flex flex-row justify-between p-2 gap-5'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/items'>Item IDs</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
