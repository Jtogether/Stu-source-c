<template>
    <el-container class="view">
        <el-aside style="margin: auto; overflow-x: hidden;">
            <h3>视频合辑：</h3>
            <div class="aside-nav">

                <ul class="list-view" style="overflow:auto" v-infinite-scroll="load" infinite-scroll-disabled="false">  <!--v-infinite-scroll="load"-->
                    <li   v-for="(item, index) in urllist" :key="index" @click="changeClass(index);changeUrl(item.musicUrl)">
                        <div class="list-item" :class="{active: isActive === index}">
                            <span style="float: left; width: 12%"> {{ item.number }}</span>
                            <span style="float: left; width: 73%"> {{ item.name }} </span>
                        </div>
                    </li>
                </ul>
                <p v-if="noMore">没有更多了</p>
            </div>
        </el-aside>

        <el-main  class="iframe_view">
            <iframe :src="urlVal" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="height: 100%; width: 100%"></iframe>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "MusicA",
        data() {
            return {
                urllist: [
                    {
                        name:'【咻咻满】 爱，存在',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=711495977&bvid=BV1ZD4y1m7YQ&cid=214756119&page=1',
                        number: 'P1'
                    },
                    {   name:'【咻咻满】 我的新衣',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=541477930&bvid=BV1ei4y137VJ&cid=213652614&page=5',
                        number: 'P2'
                    },
                    {   name:'【咻咻满】 能解答一切的答案',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=796377633&bvid=BV1zC4y1h7VF&cid=215110710&page=1',
                        number: 'P3'
                    },
                    {   name:'【咻咻满】 时候',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=498985371&bvid=BV1BK411J78v&cid=214004535&page=1',
                        number: 'P4'
                    },
                    {   name:'【咻咻满】 朝汐',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=498985371&bvid=BV1BK411J78v&cid=214003757&page=7',
                        number: 'P5'
                    },
                    {   name:'【咻咻满】 也罢',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=498764159&bvid=BV1HK411H7pG&cid=212875706&page=1',
                        number: 'P6'
                    },
                    {   name:'【咻咻满】 昨日青空',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=498764159&bvid=BV1HK411H7pG&cid=212870788&page=4',
                        number: 'P7'
                    },
                    {   name:'【咻咻满】 大眠',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211796835&page=1',
                        number: 'P8'
                    },
                    {   name:'【咻咻满】 当时',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211795889&page=2',
                        number: 'P9'
                    },
                    {   name:'【咻咻满】 beautiful light',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211796142&page=3',
                        number: 'P10'
                    },
                    {   name:'【咻咻满】 囍',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211796621&page=5',
                        number: 'P11'
                    },
                    {   name:'【咻咻满】 暗涌',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211797959&page=9',
                        number: 'P12'
                    },
                    {   name:'【咻咻满】 关键词',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211800745&page=13',
                        number: 'P13'
                    },
                    {   name:'【咻咻满】 溯',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=243872622&bvid=BV1Pv411q7BA&cid=211801229&page=14',
                        number: 'P14'
                    },
                    {   name:'【咻咻满】 我用所有报答爱',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=841346483&bvid=BV1H54y1q7sq&cid=211066287&page=1',
                        number: 'P15'
                    },
                    {   name:'【咻咻满】 彩色的黑',
                        musicUrl: 'https://player.bilibili.com/player.html?aid=498833102&bvid=BV1CK411H7sH&cid=209626538&page=1',
                        number: 'P16'
                    },
                ],
                urlVal: 'https://player.bilibili.com/player.html?aid=711495977&bvid=BV1ZD4y1m7YQ&cid=214756119&page=1',
                isActive: 0,
                count: 9
            }
        },
        methods: {
            changeClass(i) {
                this.isActive = i;
            },
            changeUrl(url){
                this.urlVal = url;
            },
            load(){
                this.count += 2;
            }
        },
        computed: {
            noMore () {
                return this.count >= 16
            },
        }
    }
</script>

<style lang="scss" scoped>
    .view{
        height: 100%;
        display: flex;
        h3{
            float: left;
            width: 100%;
            line-height: 50px;
            padding-left: 20px;
            border-bottom: 1px solid lightgray;
            background-color: #eee;
        }

        .aside-nav{
            background-color: #eee;
            height: 300px;
            float: left;
            width: 100%;
            overflow-x: hidden;

            .list-view{
                float: left;
                width: 100%;

                li{
                    height: 100%;
                    line-height: 30px;
                    list-style: none;
                    width: 85%;
                    margin: 5px auto;
                    font-size: 13px;
                    .list-item{
                        border-radius: 5px;
                        width: 100%;
                        height: 30px;
                        padding-left: 8px;
                        /*padding-right: 5px;*/
                        cursor: pointer;
                    }
                    .list-item:hover{
                        background-color: white;
                        transition: all .2s ease-in-out;
                    }
                }
            }
        }

        .iframe_view{
            width: 100%;
            height: 100%;
            margin: auto;
            overflow: hidden;
        }

        .active{
            color: darkturquoise;
            font-weight: bold;
            background-color: white;
        }
    }
</style>