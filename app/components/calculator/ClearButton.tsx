import { FaBan } from 'react-icons/fa6'

interface ClearButtonProps {
	onClick: () => void
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
	const handleClear = () => {
		onClick()
	}

	return (
		<button
			className='bg-red-600 px-4 py-1.5 flex flex-row items-center gap-2 rounded shadow-black/75 shadow-sm'
			onClick={handleClear}
		>
			<FaBan />
			Clear
		</button>
	)
}

export default ClearButton
