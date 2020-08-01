<template>
	<div>
		<el-menu
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
			<!--@select="handleSelect"-->
			<transition appear>
				<img src="../assets/header-img-1.png" style="height: 60px; width: 150px; margin-left: 200px;"/>
			</transition>
			
			<el-menu-item index="3" style="float: right; margin-right: 200px;" @click="openMsg">关于我啊</el-menu-item>
			<el-submenu index="2" style="float: right;">
			  <template slot="title">百宝箱</template>
			  <el-menu-item index="2-1" @click="toRouter(2)">多引擎搜索</el-menu-item>
			  <el-menu-item index="2-2" @click="toRouter(3)">QQ邮箱</el-menu-item>
			  <el-menu-item index="2-3" @click="toRouter(4)">网易邮箱</el-menu-item>
			  <el-menu-item index="2-4" @click="toRouter(5)">咻咻满的电台</el-menu-item>
			</el-submenu>
			<el-menu-item index="1" style="float: right;" @click="toRouter(1)">demo学习</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: "blogheader",
		data(){
			return {
			}
		},
		methods: {
			toRouter(val) {
				switch (val) {
					case 1:
						this.$router.push('/demolist')
						break;
					case 2:
						this.$router.push('/searchlist')
						break;
					case 3:
						this.$router.push('/qqemail')
						break;
					case 4:
						this.$router.push('/163email')
						break;
					case 5:
						this.$router.push('/XiuXiuMan_Video')
						break;
					default:
						this.$router.push('/')
				}
			},
			openMsg() {
				this.$message({
					showClose: true,
					message: 'There\'s nothing to say.',
					type: 'warning'
				});
			},
		}
	}
</script>

<style>
	.v-enter{
		opacity: 0;
		transform: translateX(80px);
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.8s ease;
	}
	.v-leave-active{
		position: absolute;
	}
</style>
