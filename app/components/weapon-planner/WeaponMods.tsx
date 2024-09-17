import React from 'react'
import { Weapon, ModSlot } from '@/utils/weaponType'

interface WeaponModsProps {
	selectedWeapon: Weapon
	handleModClick: (slot: ModSlot) => void
}

const WeaponMods: React.FC<WeaponModsProps> = ({
	selectedWeapon,
	handleModClick,
}) => {
	return (
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
	)
}

export default WeaponMods
