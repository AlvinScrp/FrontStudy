
<template>
    <div class="goods-container">
        <a
            class="goods-item"
            v-for="(goods, index) in goodsList"
            :key="index"
            @click="itemClick(goods)">
            <img :src="goods.image" alt="" />
            <p class="title1">{{ goods.title1 }}</p>
            <p class="title2">{{ goods.title2 }}</p>
            <div class="bottom">
                <span class="price-container">
                    ￥<span class="price">{{ priceFormat(goods) }}</span>
                </span>
                <img class="shopcart" src="~assets/img/common/icon_shopcart.png" />
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        currentGoodsType: {
            type: String,
            required: true,
            default: 'pop'
        },
        goodsList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {}
    },
    created () {
    // console.log("create goodsfeed");
    },
    updated () {
    // console.log("update goodsfeed");
    },
    mounted () {
    // console.log("update goodsfeed");
    },
    methods: {
        priceFormat (goods) {
            return `${goods.sellPrice / 100.0}`
        },
        itemClick (goods) {
            this.$router.push({ path: '/goods' })
        }
    }
}
</script>
<style lang='less' scoped>
.goods-container {
    background-color: #f6f8fb;
    display: flex;
    flex-wrap: wrap;
    padding: 1vw 2vw;
    justify-content: space-between;
}
.goods-item {
    position: relative;
    box-sizing: border-box;
    background-color: white;
    width: 46vw;
    height: 69vw;
    margin: 1vw;
    // border: 5px  solid red;
    border-radius: 8px;

    img {
        width: 100%;
    }
    .title1 {
        margin: 3px 4px;
        font-size: 14px;
        line-height: 14px;
        color: #212121;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title2 {
        margin: 6px 4px;
        font-size: 12px;
        line-height: 12px;
        color: #939393;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .bottom {
        position: relative;
        width: 100%;

        .price-container {
            margin-left: 8px;
            font-size: 10px;
            color: red;
            line-height: 34px;
            font-weight: 500;
            vertical-align: baseline;
        }
        .price {
            font-size: 16px;
        }
        .shopcart {
            position: absolute;
            right: 8px;
            width: 34px;
            height: 34px;
            padding: 5px;
        }
    }
}
</style>
