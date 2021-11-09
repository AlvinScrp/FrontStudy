<template>
    <div class="toolbar">
        <img src="~assets/img/profile/icon_profile_back.png" mode=""  class="icon-back"/>
        <p class="title">购物车</p>
        <img src="~assets/img/profile/icon_profile_more.png" mode=""  class="icon-back"/>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.toolbar {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 3.75rem;
    height: 0.42rem;
    padding: 0 0.12rem;
    border-bottom: #eee 1px solid;
    background-color: white;

    .icon-back {
        width: 0.2rem;
        height: 0.2rem;
    }

    .title {
        font-size: 0.18rem;
        color: #666;
        display: inline-block;
        text-align: center;
        line-height: 0.42rem;
    }
}
</style>
