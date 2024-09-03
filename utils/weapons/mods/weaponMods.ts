import { Mod } from '@/utils/weaponType'

//check for any items marked as TBD
//accuracy is unable to be calculated at this point in time without inside knowledge of the game's code.
//there's also a hidden value that effects deminishing returns on mods for accuracy.

export const weaponMods: Record<string, Mod> = {
	//barrel mods
	shortBarrel: {
		name: 'Short Barrel',
		description: '', // TBD
		rangeModifier: -0.1,
		stabilityModifier: -0.05,
		valueModifier: 0.25,
		massModifier: -0.5,
	},
	longBarrel: {
		name: 'Long Barrel',
		description: '', // TBD
		rangeModifier: 0.2,
		stabilityModifier: 0.05,
		valueModifier: 0.25,
		massModifier: 1,
	},
	stabilizingBarrel: {
		name: 'Stabilizing Barrel',
		description: '', // TBD
		stabilityModifier: 0.2,
		valueModifier: 0.5,
		massModifier: 3.5,
	},
	magneticRails: {
		name: 'Magnetic Rails',
		description: '', // TBD
		fireRateModifier: 0.15,
		valueModifier: 0.5,
		massModifier: 3,
	},
	//blade mods
	alloyedSteelBlade: {
		name: 'Alloyed Steel Blade',
		description: 'improved sneak attack damage',
		valueModifier: 0.5,
	},
	corrodingBlade: {
		name: 'Corroding Blade',
		description: 'adds corrosion damage',
		valueModifier: 0.5,
	},
	highCarbonBlade: {
		name: 'High Carbon Blade',
		description: 'increased damage',
		damageModifier: 0.2,
		valueModifier: 0.5,
	},
	irradiatedBlade: {
		name: 'Irradiated Blade',
		description: 'adds radiation damage',
		valueModifier: 0.5,
	},
	stainlessSteelBlade: {
		name: 'Stainless Steel Blade',
		description: 'ignores percentage of enemy armor',
		valueModifier: 0.5,
	},
	venomousBlade: {
		name: 'Venomous Blade',
		description: 'adds poison damage',
		valueModifier: 0.5,
	},
	//grip mods
	ergonomicGrip: {
		name: 'Ergonomic Stock',
		description:
			'A comfortable stock that helps increase Accuracy and Aim Down Sights speed.', // TBD
		stabilityModifier: 0.05,
		accuracyModifier: 0,
		valueModifier: 0.2,
		massModifier: 0.2,
	},
	foregrip: {
		name: 'Foregrip',
		description: '', // TBD
		stabilityModifier: 0.1,
		valueModifier: 0.3,
		massModifier: 0.25,
	},
	shieldedGrip: {
		name: 'Shielded Grip',
		description: '', // TBD
		stabilityModifier: -0.1,
		reloadSpeedModifier: -0.1,
		massModifier: 2,
		valueModifier: 0.3,
	},
	stablizingGrip: {
		name: 'Stabilizing Grip',
		description: '', // TBD
		stabilityModifier: 0.2,
		massModifier: 0.65,
		valueModifier: 0.4,
	},
	tacticalGrip: {
		name: 'Tactical Grip',
		description: '', // TBD
		stabilityModifier: 0.1,
		reloadSpeedModifier: 0.1,
		massModifier: -0.25,
		valueModifier: 0.2,
	},
	//handle mods
	alloyHandle: {
		name: 'Alloy Handle',
		description: '', // TBD
		damageModifier: -0.2,
		fireRateModifier: 0.2,
		massModifier: -0.2,
		valueModifier: 0.5,
	},
	ergonomicHandle: {
		name: 'Ergonomic Handle',
		description: 'increases critical damage, lowers attack speed',
		fireRateModifier: -0.2,
		massModifier: 0.3,
		valueModifier: 0.5,
	},
	experimentalAlloyHandle: {
		name: 'Experimental Alloy Handle',
		description: 'ignores percentage of enemy armor',
		massModifier: -0.6,
		valueModifier: 0.9,
	},
	forceExtrudedHandle: {
		name: 'Force Extruded Handle',
		description: 'raises damage, lowers attack speed',
		damageModifier: 0.4,
		fireRateModifier: -0.4,
		massModifier: 0.3,
		valueModifier: 0.7,
	},
	lightweightHandle: {
		name: 'Lightweight Handle',
		description: 'raises attack speed, lowers damage',
		damageModifier: -0.2,
		fireRateModifier: 0.5,
		massModifier: -0.3,
		valueModifier: 0.7,
	},
	weightedHandle: {
		name: 'Weighted Handle',
		description: 'raises damage, lowers attack speed',
		damageModifier: 0.2,
		fireRateModifier: -0.2,
		massModifier: 0.3,
		valueModifier: 0.5,
	},
	//interal mods
	amplifier: {
		name: 'Amplifier',
		description: '', // TBD
		massModifier: 0.6,
		valueModifier: 0.3,
	},
	hairTrigger: {
		name: 'Hair Trigger',
		description: 'installs a lighter trigger pull for increase fire rate',
		fireRateModifier: 0.2,
		valueModifier: 0.15,
		massModifier: -0.1,
	},
	highPowered: {
		name: 'High Powered',
		description: '', // TBD
		massModifier: 0.3,
		valueModifier: 0.35,
	},
	highVelocity: {
		name: 'High Velocity',
		description: '', // TBD
		rangeModifier: 0.2,
		massModifier: 0.2,
		valueModifier: 0.25,
	},
	overclocked: {
		name: 'Overclocked',
		description: '', // TBD
		fireRateModifier: 0.1,
		massModifier: 0.6,
		valueModifier: 0.4,
	},
	precisionTuning: {
		name: 'Precision Tuning',
		description: '', // TBD
		accuracyModifier: 0,
		rangeModifier: 0.15,
		massModifier: 0.8,
		valueModifier: 0.2,
	},
	//laser sight mods
	laserSight: {
		name: 'Laser Sight',
		description: '', // TBD
		accuracyModifier: 0,
		stabilityModifier: 0.15,
		massModifier: 0.2,
		valueModifier: 0.3,
	},
	reconLaserSight: {
		name: 'Recon Laser Sight',
		description: '', // TBD
		accuracyModifier: 0,
		stabilityModifier: 0.1,
		massModifier: 0.3,
		valueModifier: 0.4,
	},
	//magazine mods
	annihilatorRounds: {
		name: 'Annihilator Rounds',
		description:
			'Banned by almost every government, these rounds produce a disease-like effect that spreads to any target that gets too close', // TBD
		valueModifier: 1.1,
	},
	armorPiercingRounds: {
		name: 'Armor Piercing Rounds',
		description: 'increase critical damage',
		valueModifier: 0.6,
	},
	depletedUraniumRounds: {
		name: 'Depleted Uranium Rounds',
		description: 'adds radiation damage',
		valueModifier: 0.7,
	},
	drumMagazine: {
		name: 'Drum Magazine',
		description: '', // TBD
		reloadSpeedModifier: -0.2,
		magazineCapacityModifier: 0, // TBD
		massModifier: 1,
		valueModifier: 0.7,
	},
	emRounds: {
		name: 'EM Rounds',
		description: 'adds EM damage',
		valueModifier: 0.7,
	},
	flechetteRounds: {
		name: 'Flechette Rounds',
		description: '', // TBD
		valueModifier: 0.7,
	},
	gutBusterRounds: {
		name: 'Gut Buster Rounds',
		description: '', // TBD
		massModifier: 0.3,
		valueModifier: 1.1,
	},
	hornetNestRounds: {
		name: 'Hornet Nest Rounds',
		description: '', // TBD
		massModifier: 0.4,
		valueModifier: 1.1,
	},
	ingitionBeam: {
		name: 'Ingition Beam',
		description: 'lasers do more damage and now burn enemies',
		rangeModifier: -0.2,
		valueModifier: 1.1,
	},
	largeMagazine: {
		name: 'Large Magazine',
		description: '', // TBD
		magazineCapacityModifier: 0, // TBD
		massModifier: 0.5,
		reloadSpeedModifier: -0.1,
		valueModifier: 0.5,
	},
	penetratorRounds: {
		name: 'Penetrator Rounds',
		description:
			'incredibly powerful rounds that can pass through multiple enemies',
		valueModifier: 0.9,
	},
	rubberShot: {
		name: 'Rubber Shot',
		description: '', // TBD
		valueModifier: 0.7,
	},
	slugRounds: {
		name: 'Slug Rounds',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		rangeModifier: 1,
		massModifier: 0.2,
		valueModifier: 0.5,
	},
	smallMagazine: {
		name: 'Small Magazine',
		description: '', // TBD
		magazineCapacityModifier: 0, // TBD
		massModifier: -0.5,
		reloadSpeedModifier: 0.25,
		valueModifier: 0.4,
	},
	tacticalMagazine: {
		name: 'Tactical Magazine',
		description: '', // TBD
		magazineCapacityModifier: 0, // TBD
		massModifier: -0.25,
		reloadSpeedModifier: 0.15,
		valueModifier: 0.6,
	},
	teslaPylons: {
		name: 'Tesla Pylons',
		description: '',
		accuracyModifier: 0, // TBD
		rangeModifier: 1,
		massModifier: 2.5,
		valueModifier: 0.7,
	},
	whitehotRounds: {
		name: 'Whitehot Rounds',
		description: 'standard chemically-tipped rounds that burn on contact',
		valueModifier: 0.6,
	},
	explosiveRounds: {
		name: 'Explosive Rounds',
		description: 'adds explosive damage', // TBD
		valueModifier: 1.1,
	},
	//muzzle mods
	choke: {
		name: 'Choke',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		rangeModifier: 0.1,
		massModifier: 0.7,
		valueModifier: 0.3,
	},
	compensator: {
		name: 'Compensator',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		stabilityModifier: 0.1,
		massModifier: 0.2,
		valueModifier: 0.15,
	},
	doubleBarrel: {
		// Big Bang only
		name: 'Double Barrel',
		description:
			'Changes rounds fired to go through a two-barreled attachment for different spread shots',
		accuracyModifier: 0, // TBD
		rangeModifier: 0.2,
		massModifier: 1,
		valueModifier: 0.45,
	},
	focalLens: {
		name: 'Focal Lens',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		valueModifier: 0.35,
		massModifier: 1.5,
	},
	focusNozzle: {
		name: 'Focus Nozzle',
		description: '', // TBD
		rangeModifier: 0.2,
		valueModifier: 0.35,
		massModifier: 0.8,
	},
	largeMuzzleBrake: {
		name: 'Large Muzzle Brake',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		stabilityModifier: 0.125,
		valueModifier: 0.4,
		massModifier: 0.275,
	},
	muzzleBrake: {
		name: 'Muzzle Brake',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		stabilityModifier: 0.1,
		valueModifier: 0.35,
		massModifier: 0.25,
	},
	shockCharge: {
		name: 'Shock Charge',
		description: '', // TBD
		valueModifier: 0.4,
		massModifier: 2,
	},
	spreadNozzle: {
		name: 'Spread Nozzle',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		stabilityModifier: -0.05,
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 0.3,
	},
	stealthLasers: {
		name: 'Stealth Lasers',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 1.5,
	},
	suppressor: {
		name: 'Suppressor',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		rangeModifier: -0.15,
		valueModifier: 0.35,
		massModifier: 0.3,
	},
	shortSuppressor: {
		name: 'Short Suppressor',
		description: '', // TBD
		accuracyModifier: 0, // TBD
		rangeModifier: -0.08,
		valueModifier: 0.25,
		massModifier: 0.25,
	},
	//optics
	glowSights: {
		name: 'Glow Sights',
		description: '', // TBD
		valueModifier: 0.2,
	},
	ironSights: {
		name: 'Iron Sights',
		description: '', // TBD
	},
	longScope: {
		name: 'Long Scope',
		description: '', // TBD
		stabilityModifier: 0.05,
		valueModifier: 0.6,
		massModifier: 0.6,
	},
	mediumScope: {
		name: 'Medium Scope',
		description: '', // TBD
		stabilityModifier: -0.025,
		valueModifier: 0.4,
		massModifier: 0.45,
	},
	reconScope: {
		name: 'Recon Scope',
		description: '', // TBD
		valueModifier: 0.6,
		massModifier: 0.75,
	},
	reflexSight: {
		name: 'Reflex Sight',
		description: 'reflex sight for quicker target acquistion and visibility',
		valueModifier: 0.4,
		massModifier: 0.2,
	},
	shortScope: {
		name: 'Short Scope',
		description: '', // TBD
		stabilityModifier: -0.075,
		valueModifier: 0.4,
		massModifier: 0.3,
	},
	//receivers
	binaryTrigger: {
		name: 'Binary Trigger',
		description: '', // TBD
		valueModifier: 0.3,
	},
	burstFire: {
		name: 'Burst Fire',
		description: '', // TBD
		valueModifier: 0.2,
	},
	fullAuto: {
		name: 'Full Auto',
		description: '', // TBD
		valueModifier: 0.1,
	},
	semiAuto: {
		name: 'Semi Auto',
		description: '', // TBD
	},
	//stock mods
	noStock: {
		name: 'No Stock',
		description: '', // TBD
		stabilityModifier: -0.1,
		accuracyModifier: 0, // TBD
		valueModifier: 0.2,
		massModifier: -0.8,
	},
	stablizingStock: {
		name: 'Stablizing Stock',
		description: '', // TBD
		stabilityModifier: 0.225,
		valueModifier: 0.5,
		massModifier: 1.6,
	},
	tacticalStock: {
		name: 'Tactical Stock',
		description: '', // TBD
		stabilityModifier: 0.125,
		valueModifier: 0.3,
		massModifier: -0.6,
	},
}
