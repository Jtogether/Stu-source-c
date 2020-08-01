<template>
    <el-container class="qemail_view">
        <iframe class="iframe_view" src="https://mail.qq.com/"></iframe>
    </el-container>
</template>

<script>
    export default {
        name: "qqemail"
    }
</script>

<style lang="scss" scoped>
    .qemail_view{
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