// ModSelectionModal.tsx
'use client'

import React, { useRef, useEffect } from 'react'
import { ModSlot, Mod } from '@/utils/weaponType'
import ModifierDisplay from './ModifierDisplay'

interface ModSelectionModalProps {
	isOpen: boolean
	onClose: () => void
	activeSlot: ModSlot | null
	onModSelect: (slotType: string, mod: Mod) => void
	selectedMod: Mod | null
}

const ModSelectionModal: React.FC<ModSelectionModalProps> = ({
	isOpen,
	onClose,
	activeSlot,
	onModSelect,
	selectedMod,
}) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleOutsideClick)
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [isOpen, onClose])

	if (!isOpen || !activeSlot) return null

	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
			<div
				ref={modalRef}
				className='bg-neutral-900 border border-orange-500/50 text-orange-300 p-6 rounded-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto'
			>
				<h2 className='text-2xl mb-4 uppercase'>{activeSlot.slotType} Mods</h2>

				<div className='space-y-4'>
					{activeSlot.mods.map((mod, index) => (
						<div
							key={mod.name || index}
							className={`border-b border-orange-500/25 pb-4 ${
								mod.name === selectedMod?.name ? 'bg-orange-500/20' : ''
							}`}
						>
							<div className='font-bold'>{mod.name || 'Unnamed Mod'}</div>
							<div className='text-sm text-orange-300/75 mt-1'>
								{mod.description || 'No description available.'}
							</div>
							<ModifierDisplay mod={mod} />
							<button
								onClick={() => onModSelect(activeSlot.slotType, mod)}
								className='mt-2 px-2 py-1 bg-orange-500/20 hover:bg-orange-500/40 rounded'
							>
								Select Mod
							</button>
						</div>
					))}
				</div>

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
