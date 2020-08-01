<template>
	<el-container class='demolist'>
		<el-aside style="height: 100%; margin-left: 160px; margin-top: 50px; margin-right: 80px;">
			<blognav></blognav>
		</el-aside>
		
		<el-main style="height: 100%; margin-top: 50px; margin-right: 160px; margin-bottom: 50px; background-color: #eee;">
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	import blognav from '@/components/blog-nav.vue'
	
	export default {
		name: 'demolist',
		components:{
			blognav
		}
	}
</script>

<style lang="scss">
	.demolist{
		height: 100%;
	}
</style>
