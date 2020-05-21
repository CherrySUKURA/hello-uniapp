/**
 * @param method 请求方式 data 参数 URL 地址
  * @returns {*}
 */
export default {
	axios(method,data,URL){
		return new Promise( (resolve,reject) => {
			uni.request({
				url: URL,
				method: method,
				data : data,
				header: {
					'Content-Type' : 'application/x-www-form-urlencoded'
				},
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
}
