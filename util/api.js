const BASE_URL = 'http://118.24.248.71:8071'//配置了跨域代理这里
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.data.code != 0) {
					return uni.showToast({
						title: '请求数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "服务器异常"
				})
				reject(err)
			}
		})
	})
}
