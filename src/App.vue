<template>
	<div class="wrap">
		<nav class="nav">
			<div class="logo">
				<img src="https://s1.music.126.net/style/favicon.ico?v20180823" alt="" />
				网易云音乐
			</div>
			<div class="search">
				<Input placeholder="请输入歌曲、歌手、专辑名称" />
			</div>
			<div class="notlogin" v-if="!islogin">
				<span class="login">登录</span>
			</div>
			<div class="info" v-else>
				<img :src="loginInfo.profile.avatarUrl" alt="" />
				<span class="nickname">{{ loginInfo.profile.nickname }}</span>
			</div>
		</nav>
		<router-view />
		<footer class="footer"></footer>
	</div>
</template>

<script lang="ts">
import router from './router'
import { Login } from './config/api'
import http from './config/axios'
import { Input } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
	data() {
		return {
			router,
			islogin: false,
			loginInfo: {},
		}
	},
	components: {
		Input,
	},
	computed: {
		// routes() {
		// 	return this.router.options.routes.filter((item: any) => item.name)
		// },
	},
	created() {
		this.login()
		// this.getdata()
		// this.geturl()
	},
	methods: {
		async login() {
			let res: any = await Login.cellphone({
				phone: '13111532764',
				password: 'lz13111532764',
			})
			sessionStorage.setItem('cookie', res.cookie)
			this.loginInfo = res
		},
		async getdata() {
			let res = await http({
				url: '/cloudsearch?keywords=海阔天空',
				method: 'GET',
			})
			console.log(res)
		},
		async geturl() {
			let res = await http({
				url: '/song/url?id=347230',
				method: 'GET',
			})
			console.log(res)
		},
	},
})
</script>
<style lang="scss">
.wrap {
	width: 1030px;
	height: 665px;
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 0 10px #ccc;
	display: flex;
	flex-direction: column;
	font-family: PingFangSC-Medium, PingFang SC;
}
.nav {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	background-color: #f5f5f5;
	.logo,
	.search,
	.info,
	.notlogin {
		width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo {
		justify-content: left;
		font-size: 18px;
		font-weight: 550;
		padding-left: 20px;
		img {
			width: 25px;
			height: 25px;
			margin-right: 5px;
		}
	}
	.search {
		.ant-input {
			border-radius: 30px;
		}
	}
	.info {
		img {
			width: 25px;
			height: 25px;
			margin-right: 5px;
			border-radius: 50%;
		}
		.nickname {
			width: 180px;
			height: 30px;
			font-family: PingFangSC-Medium, PingFang SC;
		}
	}
}
.footer {
	width: 100%;
	height: 70px;
	border-top: 1px solid #e0e0e0;
}
</style>
