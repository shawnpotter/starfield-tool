// weaponList.ts
import { melee, rifles, pistols, shotguns, heavy, energy } from './weapons'
import { Weapon } from './weaponType'

// Create a flattened list of all weapons
const allWeapons: Weapon[] = [
	...Object.values(melee),
	...Object.values(rifles),
	...Object.values(pistols),
	...Object.values(shotguns),
	...Object.values(heavy),
	...Object.values(energy),
]

// Create a categorized list of weapons
const categorizedWeapons = {
	melee,
	rifles,
	pistols,
	shotguns,
	heavy,
	energy,
}

const weaponList = {
	allWeapons,
	categorizedWeapons,
}

export default weaponList
