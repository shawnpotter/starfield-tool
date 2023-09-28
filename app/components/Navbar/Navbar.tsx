'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import kofiButton from '@/public/kofi_button_dark.webp'

import { HiOutlineMenu } from 'react-icons/hi'

export default function Navbar() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleNavOpen = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 1024) {
				setIsMenuOpen(false)
			}
		})
	})
	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	return (
		<nav className='block justify-between w-full bg-zinc-800 h-[56px]'>
			<div className='flex justify-between items-center h-full shadow shadow-black z-50'>
				<div className='ml-8'>
					<Link href='/'>
						<div>
							<strong className='text-lg uppercase'>Starfield Tools</strong>{' '}
						</div>
					</Link>
				</div>
				<div className='mr-4 flex items-center lg:hidden'>
					<button
						type='button'
						aria-label='menu'
						onClick={toggleNavOpen}
					>
						<HiOutlineMenu className='text-3xl' />
					</button>
				</div>
				<div className='hidden lg:inline-block'>
					<ul className='flex flex-row lg:gap-12 mr-8'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/items'>Item IDs</Link>
						</li>
						<li>
							<Link href='/outpost-calculator'>Outpost Calculator</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<div className='relative'>
								<a
									href='https://ko-fi.com/spotter_dev'
									aria-label='Support me on Ko-Fi'
								>
									<Image
										src={kofiButton}
										height={25}
										alt='link to Ko-Fi page'
										className='shadow-md shadow-black hidden lg:inline-block'
									/>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div
				className={
					isMenuOpen
						? 'fixed ease-in duration-100 w-full z-10 shadow-lg shadow-black'
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
						<Link href='/about'>
							<li>About</li>
						</Link>
						<li>
							<div className='relative'>
								<a
									href='https://ko-fi.com/spotter_dev'
									aria-label='Support me on Ko-Fi'
								>
									<Image
										src={kofiButton}
										height={32}
										alt='link to Ko-Fi page'
										className='shadow-md shadow-black'
									/>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
