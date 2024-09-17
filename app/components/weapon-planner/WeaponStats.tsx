import React from 'react'
import { Weapon, Mod } from '@/utils/weaponType'

interface WeaponStatsProps {
	selectedWeapon: Weapon
	selectedMods: Record<string, Mod>
}

const WeaponStats: React.FC<WeaponStatsProps> = ({
	selectedWeapon,
	selectedMods,
}) => {
	const calculateModifiedStat = (baseStat: number, modifierKey: string) => {
		return Object.values(selectedMods).reduce((stat, mod) => {
			const modifier = mod[modifierKey as keyof Mod] as number | undefined
			return modifier ? stat * (1 + modifier) : stat
		}, baseStat)
	}

	const modifiedValue = calculateModifiedStat(
		selectedWeapon.value,
		'valueModifier'
	)
	return (
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
						{selectedWeapon?.damageType2 ? `${selectedWeapon.damage2}` : ''}
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
					<div className=''>{modifiedValue}</div>
				</div>
				<div className='flex-col w-1/3'>
					<div className='text-orange-300/75'>Mods</div>
					<div className=''>
						{selectedWeapon
							? selectedWeapon.modSlots.filter((slot) => !slot.disabled).length
							: ''}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeaponStats
