'use client'

interface ToolbarProps {
	onTableChange: (newTable: string) => void
}

export default function Toolbar(props: ToolbarProps) {
	const handleButtonClick = (newTable: string) => {
		console.log('Button Clicked. New Table to be loaded:', newTable)
		props.onTableChange(newTable)
	}

	const btn =
		'text-center py-3 border-[3px] border-blue-900 rounded-lg bg-blue-700 hover:bg-blue-500 w-full disabled:opacity-50 focus:bg-green-700'
	return (
		<div>
			<h1 className='text-center'>Item ID Tables</h1>
			<button
				onClick={() => handleButtonClick('inorganic')}
				className={btn}
			>
				Inorganic
			</button>
			<button
				onClick={() => handleButtonClick('organic')}
				className={btn}
			>
				Organic
			</button>
			<button
				onClick={() => handleButtonClick('manufactured')}
				className={btn}
			>
				Manufactured
			</button>
			<button
				onClick={() => handleButtonClick('food')}
				className={btn}
			>
				Food
			</button>
			<button
				onClick={() => handleButtonClick('weapons')}
				className={btn}
				disabled
			>
				Weapons
			</button>
			<button
				onClick={() => handleButtonClick('ammo')}
				className={btn}
			>
				Ammo
			</button>
			<button
				onClick={() => handleButtonClick('misc')}
				className={btn}
			>
				Misc
			</button>
		</div>
	)
}
