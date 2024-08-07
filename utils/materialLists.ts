// materialLists.ts

export const oreTypes = {
	common: ['aluminum', 'copper', 'iron', 'lead', 'nickel', 'uranium'],
	uncommon: ['beryllium', 'cobalt', 'iridium', 'silver', 'tungsten'],
	rare: [
		'gold',
		'lithium',
		'neodymium',
		'platinum',
		'tanatalum',
		'titanium',
		'vanadium',
	],
	exotic: [
		'antimony',
		'caelumite',
		'dysporsium',
		'europium',
		'palladium',
		'plutonium',
		'ytterbium',
	],
	unique: ['aldumite', 'indicite', 'rothicite', 'vytinium'],
}

export const gasTypes = {
	common: ['argon', 'chlorine', 'helium-3'],
	uncommon: ['alkanes', 'benzene', 'flourine'],
	rare: ['tetraflourides'],
	exotic: ['neon', 'xenon'],
	unique: ['veryl'],
}

export const liquidTypes = {
	common: [],
	uncommon: ['chlorosilanes'],
	rare: ['carboxylic acids', 'mercury'],
	exotic: ['caesium', 'ionic liquids'],
	unique: ['tasine'],
}

// If you want to export them all as a single object:
export const materialLists = {
	oreTypes,
	gasTypes,
	liquidTypes,
}

// Default export if you prefer
export default materialLists
