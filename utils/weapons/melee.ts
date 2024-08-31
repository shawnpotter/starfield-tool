import { Weapon } from '@/utils/weaponType'

export const melee: Record<string, Weapon> = {
	barrowKnife: {
		name: 'Barrow Knife',
		category: 'melee',
		damageType: 'physical',
		damage: 22,
		mass: 0.34,
		value: 1220,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
					// { name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	combatKnife: {
		name: 'Combat Knife',
		category: 'melee',
		damageType: 'physical',
		damage: 16,
		mass: 0.36,
		value: 505,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	osmiumDagger: {
		name: 'Osmium Dagger',
		category: 'melee',
		damageType: 'physical',
		damage: 28,
		mass: 3.51,
		value: 2395,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	rescueAxe: {
		name: 'Rescue Axe',
		category: 'melee',
		damageType: 'physical',
		damage: 17,
		mass: 1.4,
		value: 650,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	ripshank: {
		name: 'Ripshank',
		category: 'melee',
		damageType: 'physical',
		damage: 12,
		mass: 0.4,
		value: 365,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	tanto: {
		name: 'Tanto',
		category: 'melee',
		damageType: 'physical',
		damage: 40,
		mass: 0.45,
		value: 3075,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	cutlass: {
		name: 'UC Naval Cutlass',
		category: 'melee',
		damageType: 'physical',
		damage: 20,
		mass: 1.4,
		value: 935,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	painblade: {
		name: "Va'ruun Painblade",
		category: 'melee',
		damageType: 'physical',
		damage: 62,
		mass: 1.8,
		value: 11260,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'Corroding Blade', description: 'adds corrosion damage' },
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	wakizashi: {
		name: 'Wakizashi',
		category: 'melee',
		damageType: 'physical',
		damage: 49,
		mass: 1.35,
		value: 6140,
		modSlots: [
			{
				slotType: 'blade',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloyed Steel Blade',
						description: 'improved sneak attack damage',
					},
					{ name: 'High Carbon Steel Blade', description: 'increased damage' },
					{ name: 'Irradiated Blade', description: 'adds radiation damage' },
					{
						name: 'Stainless Steel Blade',
						description: 'ignores percentage of enemy armor',
					},
					{ name: 'Venomous Blade', description: 'adds poison damage' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'handle',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Alloy Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Ergonomic Handle',
						description: 'increases critical damage, lowers attack speed',
					},
					{
						name: 'Experimental Alloy Handle',
						description: 'ignores percentage of enemy armor',
					},
					{
						name: 'Force-Extruded Handle',
						description: 'raises damage, lowers attack speed',
					},
					{
						name: 'Lightweight Handle',
						description: 'raises attack speed, lowers damage',
					},
					{
						name: 'Weighted Handle',
						description: 'raises damage, lowers attack speed',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
}
