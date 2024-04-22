'use client'

import Menu from './components/Menu'
import Search from './components/Search'
import WaterfallList from './components/WaterfallList'
import './page.scss'
export default function Home() {
	return (
		<>
			<div className='app-container'>
				<div className='side-bar'>
					<div className='top-logo'>
						<h1>LOGO</h1>
					</div>
					<Menu style={{ width: '100%', height: '200px' }}>
						<div key='1'>选项1</div>
						<div key='2'>选项2</div>
						<div key='3'>选项3</div>
					</Menu>
				</div>
				<div className='main-content'>
					<div className='top-bar__search'>
						<Search
							placeholder='请输入关键字'
							style={{ width: '300px', height: '50px' }}
						/>
					</div>
					<div className='waterfall-content'>
						<WaterfallList gap={5} column={10} bottom={20} pageSize={20} />
					</div>
				</div>
				{/* <WaterfallList gap={10} column={4} bottom={20} pageSize={20} /> */}
				{/* <Search placeholder='请输入关键字' /> */}
				{/* <Menu>
						<div key='1'>选项1</div>
						<div key='2'>选项2</div>
						<div key='3'>选项3</div>
					</Menu> */}
			</div>
		</>
	)
}
