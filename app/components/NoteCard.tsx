const NoteCard = ({
	img_url,
	description,
	public_user,
	stars,
}: {
	img_url: string
	description: string
	public_user: {
		name: string
		avatar_url: string
	}
	stars: number
}) => {
	return (
		<>
			<div className='note-item'>
				<div className='img'></div>
				<div className='img_mask'></div>
				<div className='footer'>
					<div className='title'></div>
					<div className='author'></div>
					<div className='like_wrapper'></div>
				</div>
			</div>
		</>
	)
}

export default NoteCard
