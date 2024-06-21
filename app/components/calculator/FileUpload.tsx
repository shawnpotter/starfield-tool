import React from 'react'

interface FileUploadProps {
	handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ handleFileUpload }) => {
	return (
		<div className='lg:ml-10 flex flex-row items-center'>
			<label
				htmlFor='fileInput'
				className='block pr-2'
			>
				Upload Saved Base
			</label>
			<input
				type='file'
				id='fileInput'
				accept='.json'
				className='bg-neutral-500/50 p-2 rounded-sm w-full lg:w-96'
				onChange={handleFileUpload}
			/>
		</div>
	)
}

export default FileUpload
