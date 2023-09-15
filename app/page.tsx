import Link from 'next/link'
import React from 'react'

export default function Home() {
	return (
		<main className='flex flex-col justify-center h-screen items-center'>
			<h1 className='w-100 text-2xl font-black uppercase my-10'>
				Starfield Tools
			</h1>
			<div className='flex w-screen justify-center'>
				<div className='grid grid-cols-2 gap-8 w-1/2'>
					<Link href='/items'>
						<div className='text-center py-5 border-[3px] border-blue-900 rounded-lg bg-blue-700 hover:bg-blue-500'>
							Item IDs
						</div>
					</Link>
					<div className='text-center py-5 border-[3px] border-blue-900 rounded-lg bg-blue-700 hover:bg-blue-500'>
						Coming Soon...
					</div>
				</div>
			</div>
		</main>
	)
}
