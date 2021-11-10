<template>
    <view class="tools-wrap">
        <text class="title">工具与服务</text>
        <view class="split"></view>
        <view class="tools">
            <view v-for="(tool,index) in tools" :key="index" class="tool">
                <image class="tool-image" :src="tool.image"/>
                <text class="tool-label">{{tool.label}}</text>
            </view>
        </view>
    </view>
</template>

<script>
import { profileData } from '../../network/profile.js'
export default {
    data () {
        return {
            tools: [{ image: '', label: '' }]
        }
    },
    created () {
        this.tools = profileData.tools
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.tools-wrap {
    position: relative;
    margin-top: 30rpx;
    background-color: white;
    border-radius: 30rpx;
    padding: 20rpx 14rpx;
    .title {
        margin-left: 30rpx;
        color: #444;
        font-size: 28rpx;
        font-weight: 600;
    }
    .split {
        margin-left: 30rpx;
        margin-top: 24rpx;
        height: 1px;
        background: #f2f2f2;
    }
    .tools {
        display: flex;
        flex-wrap: wrap;
				flex-direction: row;
        .tool {
            width: 180rpx;
            display: flex;
            padding: 30rpx 0;
            flex-direction: column;
            align-items: center;
            .tool-image {
                width: 70rpx;
                height: 70rpx;
            }
            .tool-label {
                margin-top: 20rpx;
                font-size: 24rpx;
            }
        }
    }
}
</style>
