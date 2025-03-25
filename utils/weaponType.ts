//weaponType.ts

export interface Materials {
	name: string
	quantity: number
}

export interface Mod {
	name: string
	description: string
	accuracyModifier?: number // unused in the app currently
	damageModifier?: number
	massModifier?: number
	magazineCapacityModifier?: number
	fireRateModifier?: number
	rangeModifier?: number
	reloadSpeedModifier?: number
	stabilityModifier?: number
	valueModifier?: number
	materialCost: Materials[]
	research?: string
}

export interface ModSlot {
	slotType: string
	mods: Mod[]
	defaultMod?: number // Index of the default mod in the mods array
	disabled?: boolean
}

export interface Weapon {
	name: string
	category: string
	damageType: string
	damageType2?: string
	damage: number
	damage2?: number
	ammoType?: string
	magCapacity?: number
	fireRate?: number
	range?: number
	accuracy?: number
	mass: number
	value: number
	picture?: string
	modSlots: ModSlot[]
}
