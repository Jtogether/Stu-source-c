<template>
	<!--这里是主页，也是一整个完整外层-->
		<el-container class="home">
			<el-header class="home_head">
				<!-- 引入标题组件 -->
				<blogheader></blogheader>
			</el-header>
			
			<el-main class="home_view">
				<router-view class="inside_view"></router-view>
			</el-main>
		</el-container>
</template>

<script>
	import blogheader from '@/components/blog-header.vue'


	export default {
		name: 'Home',
		components:{
			blogheader
		}
	}
</script>

<style lang="scss">
	.home{

		.home_head{
			padding: 0;
		}
		
		.home_view{
			height: 100%;
			width: 100%;
			background: url(../assets/main-background.jpg) no-repeat;
			background-size:100% 100%;
			margin: 0;
		}
		
		.inside_view{
			overflow: hidden;	
		}
	}
</style>
