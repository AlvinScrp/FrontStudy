<template>
    <div id="profile" class="profile">
        <profile-toolbar class="profile-toolbar"></profile-toolbar>
        <header-info class="header-info"></header-info>
        <my-order class="my-order"></my-order>
        <my-wallet class="my-wallet"></my-wallet>
        <tool-service class="tool-service"></tool-service>
        <div class="bottom"></div>
    </div>
</template>

<script>
import ProfileToolbar from './child/ProfileToolbar.vue'
import HeaderInfo from './child/HeaderInfo.vue'
import MyOrder from './child/MyOrder.vue'
import MyWallet from './child/MyWallet.vue'
import ToolService from './child/ToolService.vue'

export default {
    components: {
        ProfileToolbar, HeaderInfo, MyOrder, MyWallet, ToolService
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.profile {
    background-color: #f6f8fb;
    width: 3.75rem;
    position: absolute;
    top: 0;
    bottom: var(--tabbar-height);
    overflow: scroll;

    .bottom {
        position: relative;
        margin-top: 0.15rem;
        background-color: white;
        border-radius: 0.15rem;
        padding: 0.1rem 0.07rem;
        height: 2rem;
        margin-bottom: 1rem;
    }
}
.profile::-webkit-scrollbar {
    display: none;
}
</style>
