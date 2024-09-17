import { Weapon } from '@/utils/weaponType'
import { weaponMods } from '@/utils/weapons/mods/weaponMods'

export const energy: Record<string, Weapon> = {
	bigBang: {
		name: 'Big Bang',
		category: 'energy',
		damageType: 'physical',
		damageType2: 'energy',
		damage: 32,
		damage2: 94,
		ammoType: 'Heavy Fuse',
		magCapacity: 8,
		fireRate: 14,
		range: 20,
		accuracy: 54.7,
		mass: 7,
		value: 12870,
		picture: 'Big_Bang.webp',
		modSlots: [
			{
				// barrels
				slotType: 'barrel',
				mods: [
					//first mod slot should be the default mod
					{ name: 'Standard Barrel', description: 'Standard issue barrel' },
					{
						name: 'Long Barrel',
						description:
							'Increases Accuracy, Recoil Control, and Range at the cost of Aim Down Sight speed',
					},
					{
						name: 'Extended Barrel',
						description:
							'Vastly increases Accuracy, Recoil Control, and Range at the cost of Aim Down Sight speed',
						stabilityModifier: 0.075,
						rangeModifier: 0.3,
						valueModifier: 0.5,
						massModifier: 2.2,
					},
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// laser sights
				slotType: 'laser',
				mods: [
					{ name: 'No Mod', description: 'Emtpy laser sight attechment' },
					weaponMods.laserSight,
					weaponMods.reconLaserSight,
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// optics
				slotType: 'optic',
				mods: [
					{ name: 'iron sights', description: 'standard issue iron sights' },
					weaponMods.reflexSight,
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// muzzle
				slotType: 'muzzle',
				mods: [
					{ name: 'standard muzzle', description: 'standard issue muzzle' },
					weaponMods.doubleBarrel,
					weaponMods.focalLens,
					weaponMods.focusNozzle,
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// grip and stock
				slotType: 'grip and stock',
				mods: [
					{ name: 'Standard Stock', description: 'Standard issue stock' },
					weaponMods.ergonomicGrip,
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// magazine and battery
				slotType: 'magazine and battery',
				mods: [
					{ name: 'Standard Magazine', description: 'Standard issue magazine' },
					weaponMods.annihilatorRounds,
				],
				defaultMod: 0,
				disabled: false,
			},
			{
				// internal
				slotType: 'internal',
				mods: [
					{ name: 'No Mod', description: '' },
					weaponMods.amplifier,
					weaponMods.overclocked,
				],
				defaultMod: 0,
				disabled: false,
			},
		],
	},
	equinox: {
		name: 'Equinox',
		category: 'energy',
		damageType: 'energy',
		damageType2: '',
		damage: 13,
		damage2: 0,
		ammoType: '3KV LZR',
		magCapacity: 20,
		fireRate: 50,
		range: 50,
		accuracy: 70.2,
		mass: 3.2,
		value: 2408,
		picture: 'Equinox.webp',
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
		name: 'Novalight',
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
		picture: 'Novalight.webp',
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
		name: 'Novablast Disruptor',
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
		picture: 'Novablast_Disruptor.webp',
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
		name: 'Orion',
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
		picture: 'Orion.webp',
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
		name: 'Solstice',
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
		picture: 'Solstice.webp',
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
		name: "Va'ruun Inflictor",
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
		picture: 'Varuun_Inflictor.webp',
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
		name: "Va'ruun Starshard",
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
		picture: 'Varuun_Starshard.webp',
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
