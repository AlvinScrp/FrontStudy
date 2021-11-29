<template>
    <div class="tool-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
<style scoped>
.tool-bar {
    display: flex;
    height: var(--toolbar-height);
    width: 100vw;
    text-align: center;
}
.tool-bar .left,
.right {
    width: 15%;
    line-height: var(--toolbar-height);
}
.tool-bar .center {
    flex-grow: 1;
    line-height: var(--toolbar-height);
}
</style>
