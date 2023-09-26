'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { HiOutlineMenu } from 'react-icons/hi'

export default function Navbar() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleNavOpen = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setIsMenuOpen(false)
			}
		})
	})
	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	return (
		<nav className='block justify-between w-full bg-zinc-800/75 h-[56px]'>
			<div className='flex justify-between items-center h-full shadow shadow-black z-50'>
				<div className='ml-4'>
					<Link href='/'>
						<span>
							<strong className='text-lg uppercase'>Starfield Tools</strong>{' '}
							<em className='hidden md:inline-block'>
								<small>by @Spotter_Dev</small>
							</em>
						</span>
					</Link>
				</div>
				<div className='mr-4'>
					<button
						type='button'
						aria-label='menu'
						className='md:hidden'
						onClick={toggleNavOpen}
					>
						<HiOutlineMenu className='text-3xl' />
					</button>
				</div>
				<div className='hidden md:inline-block mr-8'>
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
			<div
				className={
					isMenuOpen
						? 'fixed ease-in duration-100 w-full z-10'
						: 'fixed hidden ease-in duration-100'
				}
			>
				<div className='bg-zinc-800 w-full py-6'>
					<ul className='flex w-full flex-col gap-8 ml-8'>
						<Link href='/'>
							<li>Home</li>
						</Link>
						<Link href='/items'>
							<li>Item IDs</li>
						</Link>
						<Link href='/outpost-calculator'>
							<li>Outpost Calculator</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}
