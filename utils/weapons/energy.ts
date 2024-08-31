import { Weapon } from '@/utils/weaponType'

export const energy: Record<string, Weapon> = {
	bigBang: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	equinox: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	novalight: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	novablastDisruptor: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	orion: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	solstice: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	inflictor: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	starshard: {
		name: '',
		category: '',
		damageType: '',
		damageType2: '',
		damage: 0,
		damage2: 0,
		ammoType: '',
		magCapacity: 0,
		fireRate: 0,
		range: 0,
		accuracy: 0,
		mass: 0,
		value: 0,
		modSlots: [
			{
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'laser',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'optic',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'muzzle',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'grip and stock',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'magazine and battery',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					{
						name: 'Hair Trigger',
						description:
							'installs a lighter trigger pull for increase fire rate',
					},
					{ name: 'High Powered', description: 'increases damage done' },
					{
						name: 'High Velocity',
						description: 'internal module that increases accuracy and range',
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				slotType: 'receiver',
				mods: [
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
					{ name: '', description: '' },
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
}
