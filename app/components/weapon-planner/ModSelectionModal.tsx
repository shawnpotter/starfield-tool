'use client'

import React from 'react'
import { ModSlot } from '@/utils/weaponType'

interface ModSelectionModalProps {
	isOpen: boolean
	onClose: () => void
	activeSlot: ModSlot | null
}

const ModSelectionModal: React.FC<ModSelectionModalProps> = ({
	isOpen,
	onClose,
	activeSlot,
}) => {
	if (!isOpen || !activeSlot) return null

	return (
		// Full screen overlay with centered content
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
			<div className='bg-neutral-900 border border-orange-500/50 text-orange-300 p-6 rounded-lg w-11/12 max-w-2xl'>
				<h2 className='text-2xl mb-4 uppercase'>{activeSlot.slotType} Mods</h2>

				{/* List all mods */}
				<div className='space-y-2'>
					{activeSlot.mods.map((mod, index) => (
						<div
							key={mod.name || index}
							className='border-b border-orange-500/25 py-2'
						>
							<div className='font-bold'>{mod.name || 'Unnamed Mod'}</div>
							<div className='text-sm text-orange-300/75'>
								{mod.description || 'No description available.'}
							</div>
						</div>
					))}
				</div>

				{/* Close button */}
				<button
					onClick={onClose}
					className='mt-4 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/40 rounded'
				>
					Close
				</button>
			</div>
		</div>
	)
}

export default ModSelectionModal
