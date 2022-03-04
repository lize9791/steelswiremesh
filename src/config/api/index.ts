import http from '../axios'

const axios = (url: string, method: string, data: any) => {
	let reqParams = { url, method, data }
	return http(reqParams)
}

export const Login = {
	cellphone: (data: any) => axios('/login/cellphone', 'POST', data),
}
