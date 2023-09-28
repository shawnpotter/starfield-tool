export default function About() {
	return (
		<div className='flex flex-col justify-center items-center w-full mt-8'>
			<div className='w-[90%] flex flex-col border bg-zinc-700 h-full'>
				<div className='w-full border-b'>
					<h1 className='my-2 ml-4 font-bold text-xl'>About</h1>
				</div>
				<div className='w-full'>
					<p className='my-2 ml-8'>
						Project on{' '}
						<a
							href='https://github.com/ShawnPotter/starfield-tool'
							className='font-semibold text-blue-300'
						>
							GitHub
						</a>
					</p>
					<p className='my-2 ml-8'>
						<a
							href='https://github.com/ShawnPotter/starfield-tool/issues'
							className='font-semibold text-blue-300'
						>
							Report An Issue
						</a>{' '}
						for any problems in relation to the operation of the site, incorrect
						data, or if you have a feature request.
					</p>
					<p className='my-2 ml-8'>
						For more immediate help, comments, suggestions, or just a chat you
						can be reach me on{' '}
						<a
							href='https://twitter.com/Spotter_Dev'
							className='font-semibold text-blue-300'
						>
							Twitter
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
