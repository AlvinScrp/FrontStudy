<template>
    <div class="wallet">
        <div v-for="(item,index) in wallet" :key="index" class="wallet-item">
            <div class="wallet-text">{{ item.text }}</div>
            <div class="wallet-label">{{ item.label }}</div>
        </div>
        <div class="wallet-item wallet-all">
            <img
                class="wallet-image"
                src="https://img12.360buyimg.com/img/s60x62_jfs/t1/124603/26/7654/1293/5f16621fE5203989a/ac40297eb801ec8d.png"
            />
            <div class="wallet-label">我的资产</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { profileData } from '@/network/profile'
import { WalletItemBean } from '@/common/bean'
import { ref, onMounted } from 'vue'
const wallet = ref<WalletItemBean[]>()
onMounted(() => {
    setTimeout(() => {
        wallet.value = profileData.myWallet
    }, 200)
})
</script>
<style lang='less' scoped>
.wallet {
    margin-top: 0.15rem;
    background-color: white;
    border-radius: 0.15rem;
    padding: 0.18rem 0.15rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .wallet-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .wallet-text {
            font-size: 0.2rem;
            line-height: 0.24rem;
            width: 0.6rem;
            text-align: center;
            color: #333;
            font-weight: 700;
        }
        .wallet-label {
            font-size: 0.12rem;
            text-align: center;
            width: 0.6rem;
            margin-top: 0.12rem;
        }
    }
    .wallet-all {
        .wallet-image {
            width: 0.24rem;
            height: 0.24rem;
        }
    }
}
</style>
