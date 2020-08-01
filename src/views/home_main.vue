<template>
	<div class="homemain">
		<div class="mainfont">
			<transition name="main" appear>
				<div>
					<h1 class="f1">欢迎来到 StuBlog</h1>
					<h3 class="f2">It's a magical place</h3>
					<h3 class="f3">——  Phil Coulson</h3>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'homemain'
	}
</script>

<style lang="scss">
	.homemain{
		height: 100%;
		display: flex;
		text-align: center;
		
		.mainfont{
			margin: auto;
			
			.f1{
				width: 700px;
				font-size: 60px;
				color: #eee;
				margin-bottom: 100px;
				padding-bottom: 25px;
				border-bottom: 2px solid #eee;
			}
			
			.f2{
				font-family:"blackadder itc";
				font-size: 40px;
				color: dimgrey;
				margin-bottom: 30px;
			}
			
			.f3{
				font-family:"blackadder itc";
				font-size: 35px;
				color: dimgrey;
				float: right;
			}
			
			.main-enter{
				opacity: 0;
				transform: translateX(300px);
			}
			.main-enter-active{
				transition: all 1.5s ease;
			}
			
		}
	}
</style>
