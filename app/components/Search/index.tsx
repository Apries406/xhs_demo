import { CSSProperties, ReactNode, useRef } from 'react'
import './index.scss'
type SearchProps = {
	placeholder: string
	btnItem?: ReactNode
	className?: string
	style?: CSSProperties
}

const Search = (props: SearchProps) => {
	const { placeholder, btnItem, className, style } = props
	const iptRef = useRef<HTMLInputElement>(null)
	return (
		<div className={`search-container ${className}`} style={style}>
			<input
				type='text'
				placeholder={placeholder}
				className='search-ipt'
				ref={iptRef}
			/>
			<button className='search-btn'>
				{btnItem == undefined ? (
					<span className='search-btn-text'>搜索</span>
				) : (
					btnItem
				)}
			</button>
		</div>
	)
}

export default Search
