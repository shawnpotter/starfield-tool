import React from 'react'
import { Weapon } from '@/utils/weaponType'

interface WeaponSelectionListProps {
	categorizedWeapons: Record<string, Record<string, Weapon>>
	selectedWeapon: Weapon
	setSelectedWeapon: (weapon: Weapon) => void
}

const WeaponSelectionList: React.FC<WeaponSelectionListProps> = ({
	categorizedWeapons,
	selectedWeapon,
	setSelectedWeapon,
}) => {
	return (
		<div className='order-1 flex-grow lg:order-2 mb-4 lg:mb-0 lg:h-96 rounded bg-black/25 border border-orange-500/25 scrollbar'>
			<select
				className='w-full p-2 border lg:hidden'
				value={selectedWeapon.name}
				onChange={(e) =>
					setSelectedWeapon(
						Object.values(categorizedWeapons)
							.flatMap((category) => Object.values(category))
							.find((w) => w.name === e.target.value) || selectedWeapon
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
	)
}

export default WeaponSelectionList
