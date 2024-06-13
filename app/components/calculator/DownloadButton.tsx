import React from 'react'

interface DownloadButtonProps {
	handleDownload: () => void
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ handleDownload }) => {
	return (
		<button
			onClick={handleDownload}
			className='mx-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700'
		>
			Download Base
		</button>
	)
}

export default DownloadButton
