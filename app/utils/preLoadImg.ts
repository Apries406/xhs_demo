function preLoadImg(link: string) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.src = link
		img.onload = () => {
			// 图片加载完成
			resolve({ width: img.width, height: img.height })
		}
		img.onerror = (err) => {
			// 图片加载失败
			reject(err)
		}
	})
}
