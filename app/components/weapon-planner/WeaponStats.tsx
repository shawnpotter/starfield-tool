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
	const calculateModifiedStat = (
		baseStat: number | undefined,
		modifierKey: string
	) => {
		if (baseStat === undefined) return 0
		return Object.values(selectedMods).reduce((stat, mod) => {
			const modifier = mod[modifierKey as keyof Mod] as number | undefined
			return modifier ? stat * (1 + modifier) : stat
		}, baseStat)
	}

	const calculateModifiedMass = (baseMass: number) => {
		return Object.values(selectedMods).reduce((mass, mod) => {
			const modifier = mod['massModifier' as keyof Mod] as number | undefined
			return modifier ? mass + modifier : mass
		}, baseMass)
	}

	const calculateModifiedMagCapacity = (
		baseMagCapacity: number | undefined
	) => {
		if (baseMagCapacity === undefined) return 0
		return Object.values(selectedMods).reduce((capacity, mod) => {
			const modifier = mod['magazineCapacityModifier' as keyof Mod] as
				| number
				| undefined
			return modifier ? capacity + modifier : capacity
		}, baseMagCapacity)
	}

	const modifiedDamage = calculateModifiedStat(
		selectedWeapon.damage,
		'damageModifier'
	)
	const modifiedMagCapacity = calculateModifiedMagCapacity(
		selectedWeapon.magCapacity
	)
	const modifiedFireRate = calculateModifiedStat(
		selectedWeapon.fireRate ?? 0,
		'fireRateModifier'
	)
	const modifiedRange = calculateModifiedStat(
		selectedWeapon.range ?? 0,
		'rangeModifier'
	)
	const modifiedMass = calculateModifiedMass(selectedWeapon.mass)
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
					<div className='flex-auto'>{modifiedDamage}</div>
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
					<div className=''>{modifiedMagCapacity.toFixed(0)}</div>
				</div>
			</div>
			<div className='flex px-4 border-b-[1px] border-orange-500/25 my-1'>
				<div className='flex-col flex-auto'>
					<div className='text-orange-300/75'>Fire Rate</div>
					<div className=''>{modifiedFireRate.toFixed(0)}</div>
				</div>
				<div className='flex-col w-1/3'>
					<div className='text-orange-300/75'>Range</div>
					<div className=''>{modifiedRange.toFixed(0)}</div>
				</div>
			</div>
			<div className='flex px-4 flex-row'>
				<div className='flex-col w-1/3'>
					<div className='text-orange-300/75'>Mass</div>
					<div className=''>{modifiedMass.toFixed(2)}</div>
				</div>
				<div className='flex-col w-1/3'>
					<div className='text-orange-300/75'>Value</div>
					<div className=''>{modifiedValue.toFixed(0)}</div>
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
