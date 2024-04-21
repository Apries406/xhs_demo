import { CSSProperties, ReactNode } from 'react'
import './index.scss'
type MenuProps = {
	children: ReactNode[]
	className?: string
	style?: CSSProperties
}
const Menu = (props: MenuProps) => {
	const { children, className, style } = props
	return (
		<div className={`menu ${className}`} style={style}>
			{children.map((child, index) => {
				return (
					<div key={index} className='menu-item'>
						{child}
					</div>
				)
			})}
		</div>
	)
}

export default Menu
