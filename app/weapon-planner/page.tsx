//page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Placeholder from '@/public/weapon-images/AR-99.webp'
import weaponList from '@/utils/weaponList'
import { Weapon, ModSlot } from '@/utils/weaponType'
import { Kode_Mono } from 'next/font/google'
import ModSelectionModal from '@/app/components/weapon-planner/ModSelectionModal'

const kodeMono = Kode_Mono({ subsets: ['latin'] })

export default function WeaponPlanner() {
	const { allWeapons, categorizedWeapons } = weaponList
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [activeSlot, setActiveSlot] = useState<ModSlot | null>(null)

	const handleModClick = (slot: ModSlot) => {
		if (slot && !slot.disabled) {
			setActiveSlot(slot)
			setIsModalOpen(true)
		}
	}

	// Set the initial selected weapon to the first weapon in the list
	const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(allWeapons[0])

	return (
		<div
			className={`min-h-screen lg:h-screen flex flex-col text-orange-300 lg:flex-row gap-4 p-4 bg-neutral-900 ${kodeMono.className}`}
		>
			{/* Column 1 */}
			<div className='w-full lg:w-3/12 flex flex-grow flex-col lg:overflow-auto gap-8 bg-orange-500/10'>
				{/* Row 1 (second on mobile) */}
				<div className='flex-grow order-2 lg:order-1 lg:h-12 overflow-x-auto w-full rounded'>
					<div className='w-full uppercase'>
						<div className='flex flex-row px-4 py-1 bg-orange-500/50'>
							<div className='flex-auto'>{selectedWeapon.name}</div>
						</div>
						<div className='flex flex-row px-4 py-1 bg-orange-500/50'>
							<div className='flex-auto'>{selectedWeapon.category}</div>
						</div>
						<div className='flex flex-row px-4 border-b-[1px] border-orange-500/25 my-1'>
							<div className='flex flex-col'>
								<div className='flex-auto text-orange-300/75'>
									{selectedWeapon.damageType}
								</div>
								<div className='flex-auto'>{selectedWeapon.damage}</div>
							</div>
							<div className='flex flex-col'>
								<div className='flex-auto'>{selectedWeapon.damageType2}</div>
								<div className='flex-auto'>
									{selectedWeapon?.damageType2
										? `${selectedWeapon.damage2}`
										: ''}
								</div>
							</div>
						</div>
						<div className='flex px-4 border-b-[1px] border-orange-500/25 my-1'>
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Ammo</div>
								<div className=''>{selectedWeapon.ammoType}</div>
							</div>
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Mag</div>
								<div className=''>{selectedWeapon.magCapacity}</div>
							</div>
						</div>
						<div className='flex px-4 border-b-[1px] border-orange-500/25 my-1'>
							<div className='flex-col flex-auto'>
								<div className='text-orange-300/75'>Fire Rate</div>
								<div className=''>{selectedWeapon.fireRate}</div>
							</div>
							{/* <div className='flex-col w-1/3'> // Accuracy is just not do-able right now.
								<div className='text-orange-300/75'>Accuracy</div>
								<div className=''>{selectedWeapon.accuracy}</div>
							</div> */}
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Range</div>
								<div className=''>{selectedWeapon.range}</div>
							</div>
						</div>
						<div className='flex px-4 flex-row'>
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Mass</div>
								<div className=''>{selectedWeapon.mass}</div>
							</div>
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Value</div>
								<div className=''>{selectedWeapon.value}</div>
							</div>
							<div className='flex-col w-1/3'>
								<div className='text-orange-300/75'>Mods</div>
								<div className=''>
									{selectedWeapon
										? selectedWeapon.modSlots.filter((slot) => !slot.disabled)
												.length
										: ''}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Row 2: List/Dropdown (first on mobile) */}
				<div className='order-1 flex-grow lg:order-2 mb-4 lg:mb-0 lg:h-96 rounded bg-black/25 border border-orange-500/25 scrollbar'>
					<select
						className='w-full p-2 border lg:hidden'
						value={selectedWeapon.name}
						onChange={(e) =>
							setSelectedWeapon(
								allWeapons.find((w) => w.name === e.target.value) ||
									allWeapons[0]
							)
						}
					>
						{Object.entries(categorizedWeapons).map(([category, weapons]) => (
							<optgroup
								key={category}
								label={category}
							>
								{Object.values(weapons).map((weapon) => (
									<option
										key={weapon.name}
										value={weapon.name}
									>
										{weapon.name}
									</option>
								))}
							</optgroup>
						))}
					</select>
					<div className='hidden lg:block overflow-y-auto h-full'>
						{Object.entries(categorizedWeapons).map(([category, weapons]) => (
							<div
								key={category}
								className='text-sm'
							>
								<h3 className='font-bold uppercase p-2 bg-orange-500/50'>
									{category}
								</h3>
								{Object.values(weapons).map((weapon) => (
									<div
										key={weapon.name}
										className='p-2 border-b border-orange-500/25 cursor-pointer hover:bg-black/50'
										onClick={() => setSelectedWeapon(weapon)}
									>
										{weapon.name}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Column 2 */}
			<div className='flex-grow w-full lg:w-6/12 flex flex-col gap-4  lg:overflow-auto'>
				{/* Row 1: Card (hidden on mobile) */}
				<div className='hidden lg:block px-20 pt-20 border border-orange-500/50 rounded'>
					<div className='relative w-[75%] mx-auto aspect-video'>
						<Image
							src={Placeholder}
							alt='Placeholder'
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<p className='mt-10 mb-10 text-center'>Description for image</p>
				</div>

				{/* Row 2: Grid */}

				{/* Row 2: Mod Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center border border-orange-500/50 rounded bg-orange-500/10 p-4 gap-8'>
					{[...Array(8)].map((_, index) => {
						const slot = selectedWeapon.modSlots[index]

						return (
							<div
								key={slot?.slotType || `empty-slot-${index}`}
								onClick={() => handleModClick(slot)}
								className={`flex h-28 w-28 border rounded border-orange-500/50 shadow-md shadow-black/50 items-center justify-center text-center ${
									!slot || slot.disabled
										? 'bg-black/50 text-orange-300/25'
										: 'hover:bg-orange-500/25 cursor-pointer'
								}`}
							>
								{slot
									? slot.disabled
										? 'Slot Disabled'
										: slot.mods[0]?.name || 'Unnamed Mod'
									: 'No Mod Available'}
							</div>
						)
					})}
				</div>
			</div>

			{/* Column 3 */}
			<div className='flex-grow w-full lg:w-3/12 flex flex-col border rounded border-orange-500/50 bg-orange-500/10 lg:overflow-auto'>
				{[1, 2].map((rowNum) => (
					<table
						key={rowNum}
						className='table-auto w-full'
					>
						<thead>
							<tr>
								<th
									className='p-2 text-left'
									colSpan={3}
								>
									Table {rowNum} Header
								</th>
							</tr>
						</thead>
						<tbody>{/* Empty for now */}</tbody>
					</table>
				))}
			</div>
			<ModSelectionModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				activeSlot={activeSlot}
			/>
		</div>
	)
}
