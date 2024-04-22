import { CSSProperties, ReactNode } from 'react'
import './index.scss'
type MenuProps = {
	children: ReactNode[]
	className?: string
	style?: CSSProperties
	itemHeight?: number
	gap?: number
}
const Menu = (props: MenuProps) => {
	const { children, className, style, itemHeight = 30, gap = 4 } = props
	return (
		<div className={`menu ${className}`} style={{ ...style, gap: `${gap}px` }}>
			{children.map((child, index) => {
				return (
					<div
						key={index}
						className='menu-item'
						style={{ height: `${itemHeight}px` }}
					>
						{child}
					</div>
				)
			})}
		</div>
	)
}

export default Menu
