'use client'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import list, { colorArr } from '../assets/data'
import { CardItem, CardPos, WaterFallProps } from '../assets/types'
import './waterfall.scss'

// * 未依赖组件 因此写在外面
const request = (page: number, pageSize: number) => {
	return new Promise<CardItem[]>((resolve) => {
		setTimeout(() => {
			const start = (page - 1) * pageSize
			const end = start + pageSize

			const result = list.slice(start, end)
			resolve(result)
		}, 200)
	})
}

const WaterfallList = (props: WaterFallProps) => {
	const { gap, column, pageSize } = props

	const [cardList, setCardList] = useState<CardItem[]>([])

	const containerRef = useRef<HTMLDivElement>(null)
	const [cardWith, setCardWidth] = useState<number>(0)

	useLayoutEffect(() => {
		const container = containerRef.current
		if (!container) return

		const { clientWidth } = container
		setCardWidth((clientWidth - gap * (column - 1)) / column)
	}, [column, gap, containerRef])

	const pageRef = useRef<number>(1)
	const isFinishedRef = useRef<boolean>(false)
	const loadingRef = useRef<boolean>(false)

	const getCardList = async (page: number) => {
		if (isFinishedRef.current) return

		loadingRef.current = true
		const result = await request(page, pageSize)
		if (!result.length) {
			isFinishedRef.current = true
			return
		}

		setCardList((prev) => [...prev, ...result])
		loadingRef.current = false
	}

	const cardPosList = useMemo<CardPos[]>(() => {
		const columnsHeight: number[] = new Array(cardList.length).fill(0)
		const posList: CardPos[] = []

		for (let index = 0; index < cardList.length; index++) {
			const { width, height } = cardList[index]
			const cardHeight = Math.floor((height * cardWith) / width)
			const num = index % column

			posList.push({
				width: cardWith,
				height: cardHeight,
				x: num * (cardWith + gap),
				y: columnsHeight[num],
			})

			columnsHeight[num] += cardHeight + gap // * 累加每列的高度
		}

		return posList
	}, [cardList, cardWith, column, gap])

	const handleScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = containerRef.current!
		const bottom = scrollHeight - clientHeight - scrollTop

		if (bottom <= bottom) {
			!loadingRef.current && getCardList(pageRef.current)
		}
	}

	const initRef = useRef(false)

	useEffect(() => {
		if (!initRef.current) {
			getCardList(pageRef.current)
			initRef.current = true
		}
		return () => {
			initRef.current = false
		}
	}, [])
	return (
		<>
			<div
				className='waterfall-container'
				ref={containerRef}
				onScroll={handleScroll}
			>
				<div className='waterfall-list'>
					{cardList.map((item, index) => (
						<div
							className='waterfall-list-item'
							key={item.id + index.toString()}
							style={{
								width: `${cardPosList[index]?.width}px`,
								height: `${cardPosList[index]?.height}px`,
								transform: `translate3d(${cardPosList[index]?.x}px, ${cardPosList[index]?.y}px, 0)`,
							}}
						>
							<div
								className='card-box'
								style={{
									background: colorArr[index % (colorArr.length - 1)],
								}}
							></div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default WaterfallList
