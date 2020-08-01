<template>
	<el-container class="contain">
		<div class="content">
			<el-row>
				<td>
					<el-select v-model="Val" style="width: 120px">
						<el-option
								v-for= "item in options"
								:key= "item.value"
								:label="item.label"
								:value="item.value"
						>
							<span style="margin-right: 5px">
								<i :class="item.ali_icon"></i>
							</span>

							<span>{{ item.label }}</span>
						</el-option>
					</el-select>
				</td>
				<td>
					<el-input
							v-model="searchVal"
							placeholder="请输入搜索内容"
							style="width: 400px"
							suffix-icon="el-icon-search"
							@keydown.enter.native="useSearch(Val,searchVal)"
					>
					</el-input>
				</td>

			</el-row>
		</div>
	</el-container>
</template>

<script>

	export default {
		name: 'searchlist',
		data() {
			return {
				options: [
					{
						ali_icon: 'iconfont ali-iconbaidu',
						value: 'baidu',
						label: '百度'
					},
					{
						ali_icon: 'iconfont ali-iconguge',
						value: 'google',
						label: '谷歌'
					},
					{
						ali_icon: 'iconfont ali-iconbiying',
						value: 'biying',
						label: '必应'
					},
					{
						ali_icon: 'iconfont ali-iconbiying',
						value: 'biyingNational',
						label: '必应国际版'
					},
					{
						ali_icon: 'iconfont ali-iconwapso',
						value: '360search',
						label: '360搜索'
					}
				],
				Val: 'baidu',
				searchVal: ''
			}
		},
		methods: {
			useSearch(Val,searchVal) {
				// console.log(Val)
				// console.log(searchVal)
				switch (Val) {
					case 'baidu':
						window.open('https://www.baidu.com/s?wd=' + searchVal);
						break;
					case 'google':
						window.open('https://www.google.com/search?q=' + searchVal);
						break;
					case 'biying':
						window.open('https://cn.bing.com/search?q=' + searchVal);
						break;
					case 'biyingNational':
						window.open('https://cn.bing.com/search?q=' + searchVal + '&ensearch=1');
						break;
					case '360search':
						window.open('https://www.so.com/s?q=' + searchVal);
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	.contain{
		height: 100%;
		display: flex;
		text-align: center;

		.content{
			margin: auto;
		}
	}
</style>
