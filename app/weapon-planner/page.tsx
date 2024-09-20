'use client'

import React, { useState } from 'react'
import { Kode_Mono } from 'next/font/google'
import weaponList from '@/utils/weaponList'
import { Weapon, ModSlot, Mod } from '@/utils/weaponType'
import ModSelectionModal from '@/app/components/weapon-planner/ModSelectionModal'
import WeaponStats from '@/app/components/weapon-planner/WeaponStats'
import WeaponSelectionList from '@/app/components/weapon-planner/WeaponSelectionList'
import WeaponImage from '@/app/components/weapon-planner/WeaponImage'
import WeaponMods from '@/app/components/weapon-planner/WeaponMods'
import ModMaterials from '@/app/components/weapon-planner/ModMaterials'
import ModSkills from '@/app/components/weapon-planner/ModSkills'

const kodeMono = Kode_Mono({ subsets: ['latin'] })

export default function WeaponPlanner() {
	const { allWeapons, categorizedWeapons } = weaponList
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [activeSlot, setActiveSlot] = useState<ModSlot | null>(null)
	const [selectedWeapon, setSelectedWeapon] = useState<Weapon>(allWeapons[0])
	const [selectedMods, setSelectedMods] = useState<Record<string, Mod>>({})

	const handleModSelection = (slotType: string, mod: Mod) => {
		setSelectedMods((prevMods) => ({ ...prevMods, [slotType]: mod }))
		setIsModalOpen(false)
	}

	const handleModClick = (slot: ModSlot) => {
		if (slot && !slot.disabled) {
			setActiveSlot(slot)
			setIsModalOpen(true)
		}
	}

	return (
		<div
			className={`min-h-screen lg:h-screen flex flex-col text-orange-300 lg:flex-row gap-4 p-4 bg-neutral-900 ${kodeMono.className}`}
		>
			{/* Column 1 */}
			<div className='w-full lg:w-3/12 flex flex-grow flex-col lg:overflow-auto gap-8 bg-orange-500/10'>
				<WeaponStats
					selectedWeapon={selectedWeapon}
					selectedMods={selectedMods}
				/>
				<WeaponSelectionList
					categorizedWeapons={categorizedWeapons}
					selectedWeapon={selectedWeapon}
					setSelectedWeapon={setSelectedWeapon}
				/>
			</div>

			{/* Column 2 */}
			<div className='flex-grow w-full lg:w-6/12 flex flex-col gap-4  lg:overflow-auto'>
				{selectedWeapon.picture && (
					<WeaponImage imageSrc={selectedWeapon.picture} />
				)}
				<WeaponMods
					selectedWeapon={selectedWeapon}
					handleModClick={handleModClick}
				/>
			</div>

			{/* Column 3 */}
			<div className='flex-grow w-full lg:w-3/12 flex flex-col border rounded border-orange-500/50 bg-orange-500/10 lg:overflow-auto'>
				<ModMaterials />
				<ModSkills />
			</div>

			<ModSelectionModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				activeSlot={activeSlot}
				onModSelect={handleModSelection}
			/>
		</div>
	)
}
