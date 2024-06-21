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

	const btn =
		'text-center bg-zinc-400/50 font-semibold shadow self-center border py-3 md:w-[8rem] lg:w-[10rem] xl:w-[14rem] md:text-sm lg:text-base  hover:bg-zinc-700/75 cursor-pointer'
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
				className={`md:flex justify-around ${
					mobileMenuVisible ? 'block' : 'hidden'
				}`}
			>
				<li>
					<button
						onClick={() => handleButtonClick('inorganic')}
						className={btn}
					>
						Inorganic
					</button>
				</li>
				<li>
					<button
						onClick={() => handleButtonClick('organic')}
						className={btn}
					>
						Organic
					</button>
				</li>
				<li>
					<button
						onClick={() => handleButtonClick('manufactured')}
						className={btn}
					>
						Manufactured
					</button>
				</li>
				<li>
					<button
						onClick={() => handleButtonClick('food')}
						className={btn}
					>
						Food
					</button>
				</li>
				{/* 
				<li>
					<button 
					onClick={() => handleButtonClick('weapons')}
					className={btn}
					>
					Weapons
					</button>
				</li> 
				*/}
				<li>
					<button
						onClick={() => handleButtonClick('ammo')}
						className={btn}
					>
						Ammo
					</button>
				</li>
				<li>
					<button
						onClick={() => handleButtonClick('misc')}
						className={btn}
					>
						Misc
					</button>
				</li>
			</ul>
		</div>
	)
}
