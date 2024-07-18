'use client'

import { useState } from 'react'

interface ToolbarProps {
	readonly onTableChange: (newTable: string) => void
}

export default function Toolbar(props: ToolbarProps) {
	const handleButtonClick = (newTable: string) => {
		props.onTableChange(newTable)
	}

	// State to manage the visibility of the mobile menu
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

	return (
		<div className='my-2'>
			<h1 className='text-center mb-1 font-semibold'>Item ID Tables</h1>

			{/* Mobile menu toggle button */}
			<div className='flex justify-center'>
				<button
					className='block py-2 w-full rounded bg-green-700 md:hidden text-white'
					onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
				>
					{mobileMenuVisible ? 'Close Tables List' : 'Show Tables List'}
				</button>
			</div>

			<ul
				className={`flex flex-col md:flex-row gap-1 md:gap-0 justify-around w-full ${
					mobileMenuVisible ? 'block' : 'hidden'
				}`}
			>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('inorganic')}
						className={'btn'}
					>
						Inorganic
					</button>
				</li>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('organic')}
						className={'btn'}
					>
						Organic
					</button>
				</li>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('manufactured')}
						className={'btn'}
					>
						Manufactured
					</button>
				</li>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('food')}
						className={'btn'}
					>
						Food
					</button>
				</li>
				{/* 
				<li className='w-full md:w-auto'>
					<button 
					onClick={() => handleButtonClick('weapons')}
					className={'btn'}
					>
					Weapons
					</button>
				</li> 
				*/}
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('ammo')}
						className={'btn'}
					>
						Ammo
					</button>
				</li>
				<li className='w-full md:w-auto'>
					<button
						onClick={() => handleButtonClick('misc')}
						className={'btn'}
					>
						Misc
					</button>
				</li>
			</ul>
		</div>
	)
}
