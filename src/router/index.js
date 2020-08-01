import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '../assets/icon/iconfont.css'
import '../assets/icon/iconfont'
import searchlist from '../components/header-item/item-searchlist.vue'
import demolist from '../components/header-item/item-demolist.vue'
import homemain from '../views/home_main.vue'
import qqemail from '../components/header-item/item-qqemail'
import yiemail from '../components/header-item/item-163email'
import MusicA from '../components/header-item/item-music-01'


import vuelearn01 from '../components/nav-item/vue-start-01.vue'
import vuelearn02 from '../components/nav-item/vue-start-02.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/',
				name: 'HomeMain',
				component: homemain
			},
			{
				path: '/demolist',
				name: 'demolist',
				component: demolist,
				children: [
					{
						path: 'VueLearn01',
						name: 'VueLearn01',
						component: vuelearn01
					},
					{
						path: 'VueLearn02',
						name: 'VueLearn02',
						component: vuelearn02
					}
				]
			},
			{
				path: '/searchlist',
				name: 'searchlist',
				component: searchlist
			},
			{
				path: '/qqemail',
				name: 'qqemail',
				component: qqemail
			},
			{
				path: '/163email',
				name: '163email',
				component: yiemail
			},
			{
				path: '/XiuXiuMan_Video',
				name: 'XiuXiuMan_Video',
				component: MusicA
			},
		]
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
