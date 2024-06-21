export interface ModuleType {
	id: string
	name: string
	materialCosts: {
		material: string
		quantity: number
	}[]
	production: {
		power: number
	}
	powerCost: {
		power: number
		fuel: number
	}
	amount?: number
}
