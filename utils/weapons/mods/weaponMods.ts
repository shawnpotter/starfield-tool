import { Mod, Materials } from '@/utils/weaponType'

//check for any items marked as TBD
//accuracy is unable to be calculated at this point in time without inside knowledge of the game's code.
//there's also a hidden value that effects deminishing returns on mods for accuracy.

export const weaponMods: Record<string, Mod> = {
	//barrel mods
	bullBarrel: {
		name: 'Bull Barrel',
		description: '', // TBD
		rangeModifier: 0,
		stabilityModifier: 0,
		valueModifier: 0,
		massModifier: 0,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	shortBarrel: {
		name: 'Short Barrel',
		description: '', // TBD
		rangeModifier: -0.1,
		stabilityModifier: -0.05,
		valueModifier: 0.25,
		massModifier: -0.5,
		materialCost: [
			{
				name: 'iron',
				quantity: 1,
			},
			{
				name: 'nickel',
				quantity: 1,
			},
		],
	},
	longBarrel: {
		name: 'Long Barrel',
		description: '', // TBD
		rangeModifier: 0.2,
		stabilityModifier: 0.05,
		valueModifier: 0.25,
		massModifier: 1,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'iron',
				quantity: 1,
			},
			{
				name: 'nickel',
				quantity: 1,
			},
		],
	},
	stabilizingBarrel: {
		name: 'Stabilizing Barrel',
		description: '', // TBD
		stabilityModifier: 0.2,
		valueModifier: 0.5,
		massModifier: 3.5,
		materialCost: [
			{
				name: 'lubricant',
				quantity: 1,
			},
			{
				name: 'tungsten',
				quantity: 2,
			},
			{
				name: 'nickel',
				quantity: 2,
			},
		],
	},
	magneticRails: {
		name: 'Magnetic Rails',
		description: '', // TBD
		fireRateModifier: 0.15,
		valueModifier: 0.5,
		massModifier: 3,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	//blade mods
	alloyedSteelBlade: {
		name: 'Alloyed Steel Blade',
		description: 'improved sneak attack damage',
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'cobalt',
				quantity: 3,
			},
			{
				name: 'iron',
				quantity: 4,
			},
			{
				name: 'pigment',
				quantity: 3,
			},
		],
		research: 'Blade Mods 1',
	},
	corrodingBlade: {
		name: 'Corroding Blade',
		description: 'adds corrosion damage',
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'titanium',
				quantity: 3,
			},
			{
				name: 'iron',
				quantity: 2,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'veryl',
				quantity: 2,
			},
		],
		research: 'Blade Mods 2',
	},
	highCarbonBlade: {
		name: 'High Carbon Blade',
		description: 'increased damage',
		damageModifier: 0.2,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'iron',
				quantity: 3,
			},
			{
				name: 'lead',
				quantity: 5,
			},
			{
				name: 'nickel',
				quantity: 3,
			},
		],
		research: 'Blade Mods 1',
	},
	irradiatedBlade: {
		name: 'Irradiated Blade',
		description: 'adds radiation damage',
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'titanium',
				quantity: 3,
			},
			{
				name: 'iron',
				quantity: 2,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'iridium',
				quantity: 4,
			},
		],
		research: 'Blade Mods 2',
	},
	stainlessSteelBlade: {
		name: 'Stainless Steel Blade',
		description: 'ignores percentage of enemy armor',
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'iron',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 3,
			},
		],
		research: 'Blade Mods 1',
	},
	venomousBlade: {
		name: 'Venomous Blade',
		description: 'adds poison damage',
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'titanium',
				quantity: 3,
			},
			{
				name: 'iron',
				quantity: 2,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'toxin',
				quantity: 4,
			},
		],
		research: 'Blade Mods 2',
	},
	//grip mods
	ergonomicGrip: {
		name: 'Ergonomic Stock',
		description:
			'A comfortable stock that helps increase Accuracy and Aim Down Sights speed.', // TBD
		stabilityModifier: 0.05,
		valueModifier: 0.2,
		massModifier: 0.2,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 1,
			},
		],
	},
	foregrip: {
		name: 'Foregrip',
		description: '', // TBD
		stabilityModifier: 0.1,
		valueModifier: 0.3,
		massModifier: 0.25,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	shieldedGrip: {
		name: 'Shielded Grip',
		description: '', // TBD
		stabilityModifier: -0.1,
		reloadSpeedModifier: -0.1,
		massModifier: 2,
		valueModifier: 0.3,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	stabilizingGrip: {
		name: 'Stabilizing Grip',
		description: '', // TBD
		stabilityModifier: 0.2,
		massModifier: 0.65,
		valueModifier: 0.4,
		materialCost: [
			{
				name: 'polymer',
				quantity: 2,
			},
			{
				name: 'neodymium',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
	},
	tacticalGrip: {
		name: 'Tactical Grip',
		description: '', // TBD
		stabilityModifier: 0.1,
		reloadSpeedModifier: 0.1,
		massModifier: -0.25,
		valueModifier: 0.2,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'titanium',
				quantity: 1,
			},
		],
		research: 'Grip and stock mods 1',
	},
	//handle mods
	alloyHandle: {
		name: 'Alloy Handle',
		description: '', // TBD
		damageModifier: -0.2,
		fireRateModifier: 0.2,
		massModifier: -0.2,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 4,
			},
			{
				name: 'titanium',
				quantity: 2,
			},
		],
		research: 'Handle Mods 1',
	},
	ergonomicHandle: {
		name: 'Ergonomic Handle',
		description: 'increases critical damage, lowers attack speed',
		fireRateModifier: -0.2,
		massModifier: 0.3,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'polymer',
				quantity: 1,
			},
			{
				name: 'iron',
				quantity: 3,
			},
			{
				name: 'structural',
				quantity: 2,
			},
		],
		research: 'Handle Mods 1',
	},
	experimentalAlloyHandle: {
		name: 'Experimental Alloy Handle',
		description: 'ignores percentage of enemy armor',
		massModifier: -0.6,
		valueModifier: 0.9,
		materialCost: [
			{
				name: 'titanium',
				quantity: 3,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'aldumite',
				quantity: 3,
			},
		],
		research: 'Handle Mods 2',
	},
	forceExtrudedHandle: {
		name: 'Force Extruded Handle',
		description: 'raises damage, lowers attack speed',
		damageModifier: 0.4,
		fireRateModifier: -0.4,
		massModifier: 0.3,
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'iron',
				quantity: 4,
			},
			{
				name: 'structural',
				quantity: 5,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
		],
		research: 'Handle Mods 2',
	},
	lightweightHandle: {
		name: 'Lightweight Handle',
		description: 'raises attack speed, lowers damage',
		damageModifier: -0.2,
		fireRateModifier: 0.5,
		massModifier: -0.3,
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'structural',
				quantity: 3,
			},
			{
				name: 'lead',
				quantity: 2,
			},
			{
				name: 'high-tensile spidrion',
				quantity: 4,
			},
		],
		research: 'Handle Mods 2',
	},
	weightedHandle: {
		name: 'Weighted Handle',
		description: 'raises damage, lowers attack speed',
		damageModifier: 0.2,
		fireRateModifier: -0.2,
		massModifier: 0.3,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'iron',
				quantity: 2,
			},
			{
				name: 'structural',
				quantity: 3,
			},
			{
				name: 'vanadium',
				quantity: 1,
			},
		],
		research: 'Handle Mods 1',
	},
	//interal mods
	amplifier: {
		name: 'Amplifier',
		description: '', // TBD
		massModifier: 0.6,
		valueModifier: 0.3,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'tantalum',
				quantity: 3,
			},
			{
				name: 'isocentered magnent',
				quantity: 1,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
	},
	hairTrigger: {
		name: 'Hair Trigger',
		description: 'installs a lighter trigger pull for increase fire rate',
		fireRateModifier: 0.2,
		valueModifier: 0.15,
		massModifier: -0.1,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'iridium',
				quantity: 2,
			},
			{
				name: 'platinum',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
	},
	highPowered: {
		name: 'High Powered',
		description: 'increases damage done', // TBD
		massModifier: 0.3,
		valueModifier: 0.35,
		materialCost: [
			{
				name: 'titanium',
				quantity: 4,
			},
			{
				name: 'tantalum',
				quantity: 3,
			},
			{
				name: 'isocentered magnent',
				quantity: 1,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
	},
	highVelocity: {
		name: 'High Velocity',
		description: 'internal module that increases accuracy and range', // TBD
		rangeModifier: 0.2,
		massModifier: 0.2,
		valueModifier: 0.25,
		materialCost: [
			{
				name: 'monopropellant',
				quantity: 1,
			},
			{
				name: 'platinum',
				quantity: 3,
			},
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
	},
	overclocked: {
		name: 'Overclocked',
		description: '', // TBD
		fireRateModifier: 0.1,
		massModifier: 0.6,
		valueModifier: 0.4,
		materialCost: [
			{
				name: 'europium',
				quantity: 4,
			},
			{
				name: 'titanium',
				quantity: 3,
			},
			{
				name: 'zero wire',
				quantity: 2,
			},
			{
				name: 'ytterbium',
				quantity: 2,
			},
		],
	},
	precisionTuning: {
		name: 'Precision Tuning',
		description: '', // TBD
		rangeModifier: 0.15,
		massModifier: 0.8,
		valueModifier: 0.2,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'tungsten',
				quantity: 1,
			},
			{
				name: 'iridium',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
	},
	//laser sight mods
	laserSight: {
		name: 'Laser Sight',
		description:
			'Laser sight attachment to help with target acquistion and increase accuracy',
		stabilityModifier: 0.15,
		massModifier: 0.2,
		valueModifier: 0.3,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 1,
			},
			{
				name: 'helium-3',
				quantity: 1,
			},
			{
				name: 'neon',
				quantity: 1,
			},
		],
	},
	reconLaserSight: {
		name: 'Recon Laser Sight',
		description: 'Marks Enemies while aiming, and greatly increases accuracy',
		stabilityModifier: 0.1,
		massModifier: 0.3,
		valueModifier: 0.4,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 2,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'palladium',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Optic and Laser Mods 3',
	},
	//magazine mods
	annihilatorRounds: {
		name: 'Annihilator Rounds',
		description:
			'Banned by almost every government, these rounds produce a disease-like effect that spreads to any target that gets too close', // TBD
		valueModifier: 1.1,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	armorPiercingRounds: {
		name: 'Armor Piercing Rounds',
		description: 'increase critical damage',
		valueModifier: 0.6,
		materialCost: [
			{
				name: 'tungsten',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 1,
			},
			{
				name: 'adhesive',
				quantity: 1,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	depletedUraniumRounds: {
		name: 'Depleted Uranium Rounds',
		description: 'adds radiation damage',
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'sealant',
				quantity: 2,
			},
			{
				name: 'uranium',
				quantity: 3,
			},
			{
				name: 'lead',
				quantity: 3,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	drumMagazine: {
		name: 'Drum Magazine',
		description: '', // TBD
		reloadSpeedModifier: -0.2,
		magazineCapacityModifier: 0, // TBD
		massModifier: 1,
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	emRounds: {
		name: 'EM-Charged Rounds',
		description: 'adds EM damage',
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'cobalt',
				quantity: 3,
			},
			{
				name: 'polymer',
				quantity: 2,
			},
			{
				name: 'isocentered magnent',
				quantity: 1,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	flechetteRounds: {
		name: 'Flechette Rounds',
		description: '', // TBD
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'antimony',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	gutBusterRounds: {
		name: 'Gut Buster Rounds',
		description: '', // TBD
		massModifier: 0.3,
		valueModifier: 1.1,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	hornetNestRounds: {
		name: 'Hornet Nest',
		description:
			'Explosive rounds explode downwards into a cluster of mini-explosions', // TBD
		massModifier: 0.4,
		valueModifier: 1.1,
		materialCost: [
			{
				name: 'lead',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
			{
				name: 'tetrafluorides',
				quantity: 3,
			},
		],
		research: 'Magazine And Battery Mods 3',
	},
	ingitionBeam: {
		name: 'Ingition Beam',
		description: 'lasers do more damage and now burn enemies',
		rangeModifier: -0.2,
		valueModifier: 1.1,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	largeMagazine: {
		name: 'Large Magazine',
		description: '', // TBD
		magazineCapacityModifier: 0, // TBD
		massModifier: 0.5,
		reloadSpeedModifier: -0.1,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'sealant',
				quantity: 2,
			},
			{
				name: 'tungsten',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 2,
			},
		],
	},
	penetratorRounds: {
		name: 'Penetrator Rounds',
		description:
			'incredibly powerful rounds that can pass through multiple enemies',
		valueModifier: 0.9,
		materialCost: [
			{
				name: 'antimony',
				quantity: 4,
			},
			{
				name: 'lead',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 3,
			},
		],
		research: 'Magazine And Battery Mods 3',
	},
	rubberShot: {
		name: 'Rubber Shot',
		description: '', // TBD
		valueModifier: 0.7,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	slugRounds: {
		name: 'Slug Shots',
		description: '', // TBD
		rangeModifier: 1,
		massModifier: 0.2,
		valueModifier: 0.5,
		materialCost: [
			{
				name: 'copper',
				quantity: 2,
			},
			{
				name: 'lead',
				quantity: 2,
			},
			{
				name: 'polymer',
				quantity: 1,
			},
		],
		research: 'Magazine And Battery Mods 1',
	},
	mediumMagazine: {
		name: 'Medium Magazine',
		description: '', // TBD
		magazineCapacityModifier: -30, // TBD
		massModifier: -1,
		reloadSpeedModifier: 0.25,
		valueModifier: -0.6111,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'tungsten',
				quantity: 1,
			},
			{
				name: 'lead',
				quantity: 1,
			},
		],
	},
	smallMagazine: {
		name: 'Small Magazine',
		description: '', // TBD
		magazineCapacityModifier: -15, // TBD
		massModifier: -0.5,
		reloadSpeedModifier: 0.25,
		valueModifier: 0.4,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'tungsten',
				quantity: 1,
			},
			{
				name: 'lead',
				quantity: 1,
			},
		],
	},
	tacticalMagazine: {
		name: 'Tactical Magazine',
		description: '', // TBD
		magazineCapacityModifier: 0, // TBD
		massModifier: -0.25,
		reloadSpeedModifier: 0.15,
		valueModifier: 0.6,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'lead',
				quantity: 1,
			},
		],
	},
	teslaPylons: {
		name: 'Tesla Pylons',
		description:
			'Poylons that can fired into surfaces that arc electricity between them. Mainly used for area denial.',
		rangeModifier: 1,
		massModifier: 2.5,
		valueModifier: 0.7,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
			{
				name: 'tau grade rheostat',
				quantity: 1,
			},
		],
		research: 'Magazine And Battery Mods 3',
	},
	whitehotRounds: {
		name: 'Whitehot Rounds',
		description: 'standard chemically-tipped rounds that burn on contact',
		valueModifier: 0.6,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 1,
			},
			{
				name: 'iron',
				quantity: 1,
			},
			{
				name: 'solvent',
				quantity: 1,
			},
		],
		research: 'Magazine And Battery Mods 1',
	},
	explosiveRounds: {
		name: 'Explosive Rounds',
		description: 'adds explosive damage', // TBD
		valueModifier: 1.1,
		materialCost: [
			{
				name: 'lead',
				quantity: 2,
			},
			{
				name: 'tetrafluorides',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Magazine And Battery Mods 2',
	},
	//muzzle mods
	choke: {
		name: 'Choke',
		description: '', // TBD
		rangeModifier: 0.1,
		massModifier: 0.7,
		valueModifier: 0.3,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'tungsten',
				quantity: 3,
			},
		],
		research: 'Muzzle Mods 1',
	},
	compensator: {
		name: 'Compensator',
		description:
			'increases stability and hip-fire accuracy at the cost of long-range accuracy',
		stabilityModifier: 0.1,
		massModifier: 0.2,
		valueModifier: 0.15,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 1,
			},
			{
				name: 'nickel',
				quantity: 1,
			},
		],
	},
	doubleBarrel: {
		// Big Bang only
		name: 'Double Barrel',
		description:
			'Changes rounds fired to go through a two-barreled attachment for different spread shots',
		rangeModifier: 0.2,
		massModifier: 1,
		valueModifier: 0.45,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	focalLens: {
		name: 'Focal Lens',
		description: '', // TBD
		valueModifier: 0.35,
		massModifier: 1.5,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	focusNozzle: {
		name: 'Focus Nozzle',
		description: '', // TBD
		rangeModifier: 0.2,
		valueModifier: 0.35,
		massModifier: 0.8,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	largeMuzzleBrake: {
		name: 'Large Muzzle Brake',
		description: '', // TBD
		stabilityModifier: 0.125,
		valueModifier: 0.4,
		massModifier: 0.275,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	muzzleBrake: {
		name: 'Muzzle Brake',
		description:
			'increases long-range accuracy and stability at the cost of hip-fire accuracy',
		stabilityModifier: 0.1,
		valueModifier: 0.35,
		massModifier: 0.25,
		materialCost: [
			{
				name: 'sealant',
				quantity: 2,
			},
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'tungsten',
				quantity: 3,
			},
		],
		research: 'Muzzle Mods 1',
	},
	shockCharge: {
		name: 'Shock Charge',
		description: '', // TBD
		valueModifier: 0.4,
		massModifier: 2,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	spreadNozzle: {
		name: 'Spread Nozzle',
		description: '', // TBD
		stabilityModifier: -0.05,
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 0.3,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	stealthLasers: {
		name: 'Stealth Lasers',
		description: '', // TBD
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 1.5,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	suppressor: {
		name: 'Suppressor',
		description:
			'vastly reduces acoustic intensity while increasing accuracy at the cost of range',
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 0.3,
		materialCost: [
			{
				name: 'polymer',
				quantity: 2,
			},
			{
				name: 'tungsten',
				quantity: 2,
			},
			{
				name: 'tantalum',
				quantity: 3,
			},
		],
	},
	shortSuppressor: {
		name: 'Short Suppressor',
		description: '', // TBD
		rangeModifier: -0.08,
		valueModifier: 0.25,
		massModifier: 0.25,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	//optics
	glowSights: {
		name: 'Glow Sights',
		description: '', // TBD
		valueModifier: 0.2,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	ironSights: {
		name: 'Iron Sights',
		description: '', // TBD
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	longScope: {
		name: 'Long Scope',
		description: '', // TBD
		stabilityModifier: 0.05,
		valueModifier: 0.6,
		massModifier: 0.6,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	mediumScope: {
		name: 'Medium Scope',
		description: 'Medium scope for 4x magnified view',
		stabilityModifier: -0.025,
		valueModifier: 0.4,
		massModifier: 0.45,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'vanadium',
				quantity: 3,
			},
			{
				name: 'chlorosilanes',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Optic and Laser Mods 2',
	},
	reconScope: {
		name: 'Recon Scope',
		description: 'Marks enemies while aiming',
		valueModifier: 0.6,
		massModifier: 0.75,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'europium',
				quantity: 2,
			},
			{
				name: 'chlorosilanes',
				quantity: 3,
			},
			{
				name: 'adhesive',
				quantity: 2,
			},
		],
		research: 'Optic and Laser Mods 3',
	},
	reflexSight: {
		name: 'Reflex Sight',
		description: 'reflex sight for quicker target acquistion and visibility',
		valueModifier: 0.4,
		massModifier: 0.2,
		materialCost: [
			{
				name: 'aluminum',
				quantity: 1,
			},
			{
				name: 'chlorosilanes',
				quantity: 1,
			},
			{
				name: 'adhesive',
				quantity: 1,
			},
		],
	},
	shortScope: {
		name: 'Short Scope',
		description: 'Short scope for 2x magnified view', // TBD
		stabilityModifier: -0.075,
		valueModifier: 0.4,
		massModifier: 0.3,
		materialCost: [
			{
				name: 'titanium',
				quantity: 2,
			},
			{
				name: 'chlorosilanes',
				quantity: 2,
			},
			{
				name: 'adhesive',
				quantity: 1,
			},
		],
		research: 'Optic and Laser Mods 1',
	},
	//receivers
	binaryTrigger: {
		name: 'Binary Trigger',
		description: '', // TBD
		valueModifier: 0.3,
		materialCost: [
			{
				name: 'zero wire',
				quantity: 1,
			},
			{
				name: 'microsecond regulator',
				quantity: 1,
			},
			{
				name: 'ytterbium',
				quantity: 4,
			},
			{
				name: 'lubricant',
				quantity: 3,
			},
		],
		research: 'Receiver Mods 2',
	},
	burstFire: {
		name: 'Burst Fire',
		description: '', // TBD
		valueModifier: 0.2,
		materialCost: [
			{
				name: 'titanium',
				quantity: 4,
			},
			{
				name: 'lubricant',
				quantity: 3,
			},
			{
				name: 'ytterbium',
				quantity: 2,
			},
		],
		research: 'Receiver Mods 1',
	},
	fullAuto: {
		name: 'Fully Automatic',
		description: 'reciver that fires continously while the trigger is pulled', // TBD
		valueModifier: 0.1,
		materialCost: [
			{
				name: 'sealant',
				quantity: 3,
			},
			{
				name: 'titanium',
				quantity: 4,
			},
			{
				name: 'lubricant',
				quantity: 4,
			},
			{
				name: 'microsecond regulator',
				quantity: 1,
			},
		],
		research: 'Receiver Mods 2',
	},
	semiAuto: {
		name: 'Semi Auto',
		description: '', // TBD
		materialCost: [
			{
				name: 'sealant',
				quantity: 2,
			},
			{
				name: 'copper',
				quantity: 2,
			},
			{
				name: 'nickel',
				quantity: 2,
			},
			{
				name: 'titanium',
				quantity: 3,
			},
		],
	},
	//stock mods
	noStock: {
		name: 'No Stock',
		description: '', // TBD
		stabilityModifier: -0.1,
		valueModifier: 0.2,
		massModifier: -0.8,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'aluminum',
				quantity: 1,
			},
		],
	},
	stablizingStock: {
		name: 'Stablizing Stock',
		description: '', // TBD
		stabilityModifier: 0.225,
		valueModifier: 0.5,
		massModifier: 1.6,
		materialCost: [
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
			{
				name: '',
				quantity: 1,
			},
		],
	},
	tacticalStock: {
		name: 'Tactical Stock',
		description: '', // TBD
		stabilityModifier: 0.125,
		valueModifier: 0.3,
		massModifier: -0.6,
		materialCost: [
			{
				name: 'sealant',
				quantity: 1,
			},
			{
				name: 'titanium',
				quantity: 1,
			},
			{
				name: 'aluminum',
				quantity: 1,
			},
		],
		research: 'Grip and stock mods 1',
	},
}
