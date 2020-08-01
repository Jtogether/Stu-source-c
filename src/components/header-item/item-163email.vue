<template>
    <el-container class="yiemail_view">
        <iframe class="iframe_view" src="https://mail.163.com/"></iframe>
    </el-container>
</template>

<script>
    export default {
        name: "yiemail"
    }
</script>

<style lang="scss" scoped>
    .yiemail_view{
        height: 100%;
        display: flex;
        text-align: center;

        .iframe_view{
            width: 100%;
            height: 100%;
            margin: auto;
        }
    }
</style>