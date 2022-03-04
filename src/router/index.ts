import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: '主页',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/about',
		name: '关于我们',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/products',
		name: '产品',
		component: () => import('../views/Products.vue'),
	},
	{
		path: '/application',
		name: '应用',
		component: () => import('../views/Application.vue'),
	},
	{
		path: '/news',
		name: '新闻',
		component: () => import('../views/News.vue'),
	},
	{
		path: '/contactUs',
		name: '联系我们',
		component: () => import('../views/ContactUs.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
