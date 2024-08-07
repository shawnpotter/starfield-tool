//extractionRate.ts

import { ModuleType } from '@/public/data/types/ModuleType'
import { oreTypes, gasTypes, liquidTypes } from '@/utils/materialLists'

// set the multipliers for each module type
const ORE_COMMERCIAL_MULTIPLIER = 1.25
const ORE_INDUSTRIAL_MULTIPLIER = 2
const GAS_LIQUID_COMMERCIAL_MULTIPLIER = 2.5
const GAS_LIQUID_INDUSTRIAL_MULTIPLIER = 4

// Define the extraction rate and resource rarity variables
let extractionRate = 0
let resourceRarity = ''
let isResourceOre = false

// Define the resource categories and types
type ResourceCategory = 'common' | 'uncommon' | 'rare' | 'exotic' | 'unique'
type ResourceTypes = Record<ResourceCategory, string[]>

// Combine the gas and liquid types into a single object
const gasAndLiquidTypes: ResourceTypes = Object.entries(
	gasTypes
).reduce<ResourceTypes>(
	(acc, [key, value]) => {
		const typedKey = key as ResourceCategory
		acc[typedKey] = [...(acc[typedKey] || []), ...value]
		return acc
	},
	{ ...liquidTypes }
)

// console.log('gasAndLiquidTypes:', gasAndLiquidTypes)

const oreExtractionRates = {
	common: 3.33,
	uncommon: 2.22,
	rare: 1.66,
	exotic: 1.33,
	unique: 1.11,
}
const gasAndLiquidExtractionRates = {
	common: 1.11,
	uncommon: 1.66,
	rare: 0.83,
	exotic: 0.66,
	unique: 0.41,
}

/**
 * Sets the resource rarity and type based on the given resource name.
 * @param resource - The name of the resource.
 */
function setResourceRarity(resource: string): void {
	for (const [rarity, resources] of Object.entries(oreTypes)) {
		if (resources.includes(resource)) {
			resourceRarity = rarity
			isResourceOre = true
			return
		}
	}

	for (const [rarity, resources] of Object.entries(gasAndLiquidTypes)) {
		if (resources.includes(resource)) {
			resourceRarity = rarity
			isResourceOre = false
			return
		}
	}

	// If resource is not found in either object
	resourceRarity = ''
	isResourceOre = false
}

/**
 * Calculates the extraction rate for a given resource and module type.
 * @param resource - The name of the resource.
 * @param moduleType - The type of the module.
 * @returns The extraction rate.
 */
export function getExtractionRate(
	resource: string,
	moduleType: ModuleType
): number {
	// Special case for Water extraction (Vapor Extractor)
	if (
		resource.toLowerCase() === 'water' &&
		moduleType.id.toLowerCase().includes('vapor')
	) {
		extractionRate = 1.11 // Base rate for Water extraction
		modifyExtractionRate(moduleType.name)
		return round(extractionRate, 3)
	}

	setResourceRarity(resource)

	if (resourceRarity === '') {
		// Resource not found
		return 0
	}

	if (isResourceOre) {
		extractionRate =
			oreExtractionRates[resourceRarity as keyof typeof oreExtractionRates]
	} else {
		extractionRate =
			gasAndLiquidExtractionRates[
				resourceRarity as keyof typeof gasAndLiquidExtractionRates
			]
	}

	modifyExtractionRate(moduleType.name)

	// Round the extraction rate to 2 decimal places using the custom round function
	console.log('extractionRate:', extractionRate)
	return round(extractionRate, 3)
}

/**
 * Rounds a number to the specified number of decimal places.
 * @param value - The number to round.
 * @param decimals - The number of decimal places to round to.
 * @returns The rounded number.
 */
function round(value: number, decimals: number): number {
	return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals)
}

/**
 * Modifies the extraction rate based on the given module name.
 * @param moduleName - The name of the module.
 */
function modifyExtractionRate(moduleName: string): void {
	const lowerModuleName = moduleName.toLowerCase()

	switch (true) {
		case lowerModuleName.includes('ore'):
			if (lowerModuleName.includes('commercial')) {
				extractionRate *= ORE_COMMERCIAL_MULTIPLIER
			} else if (lowerModuleName.includes('industrial')) {
				extractionRate *= ORE_INDUSTRIAL_MULTIPLIER
			}
			break
		case lowerModuleName.includes('gas') ||
			lowerModuleName.includes('liquid') ||
			lowerModuleName.includes('vapor'):
			if (lowerModuleName.includes('commercial')) {
				extractionRate *= GAS_LIQUID_COMMERCIAL_MULTIPLIER
			} else if (lowerModuleName.includes('industrial')) {
				extractionRate *= GAS_LIQUID_INDUSTRIAL_MULTIPLIER
			}
			break
		default:
			return
	}
}
