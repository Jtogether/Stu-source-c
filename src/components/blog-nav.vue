<template>
	<div class="blognav">
		<el-menu style="background: #eee" :default-openeds="['1']">
		  <el-submenu index="1">
			<template slot="title"><i class="el-icon-more-outline"></i>Vue学习</template>
			<el-menu-item-group>
			  <template slot="title">Vue学习之入门</template>
			  <el-menu-item index="1-1" @click="navRouterManager(1)">vue-start-01</el-menu-item>
			  <el-menu-item index="1-2" @click="navRouterManager(2)">vue-start-02</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
			  <el-menu-item index="1-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="1-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
			</el-submenu>
		  </el-submenu>
		  <el-submenu index="2">
			<template slot="title"><i class="el-icon-more-outline"></i>导航二</template>
			<el-menu-item-group>
			  <template slot="title">分组一</template>
			  <el-menu-item index="2-1">选项1</el-menu-item>
			  <el-menu-item index="2-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
			  <el-menu-item index="2-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="2-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
			</el-submenu>
		  </el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name:'blognav',
		methods: {
			navRouterManager(val){
				switch (val) {
					case 1: 
						this.$router.push('/demolist/VueLearn01')	
						break;
					case 2:
						this.$router.push('/demolist/VueLearn02')
						break;
					default:
						this.$router.push('/demolist/VueLearn01')
					
				}
			}
		}
	}
</script>

<style lang="scss"> 
	.blognav{
		height: 100%;
	}
</style>
