<template>
    <view class="wallet">
        <view v-for="(item,index) in wallet" :key="index" class="wallet-item">
            <text class="wallet-text">{{item.text}}</text>
            <text class="wallet-label">{{item.label}}</text>
        </view>
        <view  class="wallet-item wallet-all">
            <image class="wallet-image" src="https://img12.360buyimg.com/img/s60x62_jfs/t1/124603/26/7654/1293/5f16621fE5203989a/ac40297eb801ec8d.png" />
            <text class="wallet-label">我的资产</text>
        </view>
    </view>
</template>

<script>
import { profileData } from '../../network/profile.js'
export default {
    data () {
        return {
            wallet: [{ text: '', label: '' }]
        }
    },
    created () {
			
        this.wallet = profileData.myWallet
				 console.log(profileData.myWallet, 'wallet')
       
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.wallet {
    margin-top: 30rpx;
    background-color: white;
    border-radius: 30rpx;
    padding: 36rpx 30rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .wallet-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .wallet-text {
            font-size: 40rpx;
            line-height: 48rpx;
            width: 120rpx;
            text-align: center;
            color: #333;
            font-weight: 700;
        }
        .wallet-label {
            font-size: 24rpx;
            text-align: center;
            width: 120rpx;
            margin-top: 24rpx;
        }
    }
    .wallet-all {
        .wallet-image {
            width: 48rpx;
            height: 48rpx;
        }
    }
}
</style>
