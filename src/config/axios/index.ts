import axios from 'axios'

let http: any = axios.create({
	baseURL: '/api',
	timeout: 30000,
})

http.interceptors.request.use(
	(config: any) => {
		let cookie: string | null = sessionStorage.getItem('cookie')
		let { method, data } = config
		if (method == 'get') {
			config.url += '?'
			for (const key in data) {
				config.url += `${key}=${data[key]}&`
			}
			if (cookie) {
				config.url += 'cookie=' + encodeURIComponent(cookie)
			}
		}
		return config
	},
	(error: any) => {
		return error
	}
)

http.interceptors.response.use(
	(response: any) => {
		return response.data
	},
	(error: any) => {
		return error
	}
)

export default http
