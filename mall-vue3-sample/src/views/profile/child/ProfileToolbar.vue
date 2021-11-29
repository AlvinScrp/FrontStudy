<template>
    <div class="toolbar">
        <img src="@/assets/img/profile/icon_profile_back.png" mode class="icon-back" />
        <p class="title">我的京东</p>
        <img src="@/assets/img/profile/icon_profile_more.png" mode class="icon-back" />
    </div>
</template>

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

    .icon-back {
        width: 0.2rem;
        height: 0.2rem;
    }

    .title {
        display: inline-block;
        text-align: center;
        line-height: 0.42rem;
    }
}
</style>
