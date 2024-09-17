// ModifierDisplay.tsx
import React from 'react'
import { Mod } from '@/utils/weaponType'

interface ModifierDisplayProps {
	mod: Mod
}

const ModifierDisplay: React.FC<ModifierDisplayProps> = ({ mod }) => {
	const modifiers = [
		{ key: 'accuracyModifier', label: 'Accuracy' },
		{ key: 'damageModifier', label: 'Damage' },
		{ key: 'massModifier', label: 'Mass' },
		{ key: 'magazineCapacityModifier', label: 'Magazine Capacity' },
		{ key: 'fireRateModifier', label: 'Fire Rate' },
		{ key: 'rangeModifier', label: 'Range' },
		{ key: 'reloadSpeedModifier', label: 'Reload Speed' },
		{ key: 'stabilityModifier', label: 'Stability' },
		{ key: 'valueModifier', label: 'Value' },
	]

	const activeModifiers = modifiers.filter((modifier) => {
		const value = mod[modifier.key as keyof Mod] as number
		return value !== undefined && value !== 0
	})

	if (activeModifiers.length === 0) return null

	return (
		<div className='text-sm grid grid-cols-2 gap-1 mt-2'>
			{activeModifiers.map((modifier) => {
				const value = mod[modifier.key as keyof Mod] as number
				let formattedValue: string
				let valueClass: string

				if (modifier.key === 'massModifier') {
					formattedValue = value > 0 ? `+${value}` : `${value}`
					valueClass = value > 0 ? 'text-red-500' : 'text-green-500'
				} else {
					formattedValue =
						(value > 0 ? '+' : '') + (value * 100).toFixed(0) + '%'
					valueClass = value > 0 ? 'text-green-500' : 'text-red-500'
				}

				return (
					<div
						key={modifier.key}
						className='flex justify-between'
					>
						<span>{modifier.label}:</span>
						<span className={valueClass}>{formattedValue}</span>
					</div>
				)
			})}
		</div>
	)
}

export default ModifierDisplay
