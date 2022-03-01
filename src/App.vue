<template>
	<div class="wrap">
		<div id="nav">
			<header class="header"></header>
			<div class="com_wrap">
				<a href="javescript:;" class="logo">
					<img
						src="https://www.steelswiremesh.com/themes/simplebootx/Upload/W_1073/upload/60651e1658ab7.png.webp"
						alt=""
					/>
				</a>
				<div class="navs">
					<router-link v-for="(item, key) in routes" :to="item.path" :key="key">
						{{ item.name }}
					</router-link>
				</div>
			</div>
		</div>
		<router-view />
		<div class="footer"></div>
	</div>
</template>

<script>
import router from './router'
export default {
	data() {
		return {
			router,
		}
	},
	computed: {
		routes() {
			return this.router.options.routes.filter(item => item.name)
		},
	},
	created() {},
}
</script>
<style lang="scss">
.wrap {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
#nav {
	height: 150px;
	width: 100%;
	box-sizing: border-box;
	.header {
		width: 100%;
		height: 50px;
	}
	.com_wrap {
		width: 1200px;
		height: 100px;
		margin: auto;
		.logo {
			height: 100%;
            float: left;
			img {
				max-width: 100%;
				max-height: 100px;
			}
		}
		.navs {
			width: 724px;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			a {
				text-decoration: none;
			}
		}
	}
}
.footer {
	width: 100%;
	height: 500px;
}
</style>
