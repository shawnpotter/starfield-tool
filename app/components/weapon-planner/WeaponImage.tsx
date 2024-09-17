import React from 'react'
import Image from 'next/image'

interface WeaponImageProps {
	imageSrc: string
}

const WeaponImage: React.FC<WeaponImageProps> = ({ imageSrc }) => {
	const filePath = `/weapon-images/${imageSrc}`
	return (
		<div className='hidden lg:block px-20 pt-20 border border-orange-500/50 rounded'>
			<div className='relative w-[75%] mx-auto aspect-video'>
				<Image
					src={filePath}
					alt='Placeholder'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			{/* <p className='mt-10 mb-10 text-center'>Description for image</p> */}
		</div>
	)
}

export default WeaponImage
