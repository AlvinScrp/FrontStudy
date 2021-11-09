<template>
    <div class="shopcart-goods-item">
        <div @click="$emit('change-select',{shop,goods})" >
            <img  v-if="goods.selected" class="icon-select" src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_selected_jd@2x_e9080098.png" alt="">
            <img  v-else class="icon-select" src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_unselected_jd@2x_d29b6e19.png" alt="">
        </div>
        <img class="goods-image" :src="goods.image" alt="">
        <div class="goods-content">
            <p class="goods-name"><span v-if="goods.tagText" class="goods-tag" :class="{'goods-name-tag1':goods.tagStype===1,'goods-name-tag2':goods.tagStype===2}">{{goods.tagText}}</span>{{goods.name}}</p>
            <div  v-for = "(sku,index) in goods.sku" :key="index" class="goods-sku-line">
                <div class="goods-sku">
                    <p class="sku-name">{{sku.name}}</p>
                    <img  class="sku-arrow" src="~assets/img/cart/icon-shopcart-arrow-down.png" alt="">
                </div>
            </div>
            <div class="goods-discount-line">
                <div v-if="goods.discount && goods.discount.tip" class="goods-discount">
                    <p  class="discount-name">{{goods.discount.tip}}</p>
                    <img  class="discount-arrow" src="~assets/img/cart/icon-shopcart-arrow-down.png" alt="">
                </div>
                <template v-if="goods.activityNotice && goods.activityNotice.length > 0">
                    <p  class="activity-notice" v-for="(noticeText,index) in goods.activityNotice" :key="index">{{noticeText}}</p>
                </template>
            </div>
            <div class="price-num-line">
                <div class="price-wrap">
                    <p class="price-dollar">¥</p>
                    <p class="price-int">{{priceInt(goods.price)}}</p>
                    <p class="price-decimal">.{{priceDecimal(goods.price)}}</p>
                </div>
                <div class="num-wrap">
                    <img class="num-op" v-if="goods.count<2" src="~assets/img/cart/icon_cart_minus_dis.png"  alt="">
                    <img @click="$emit('decrement',{shopId:shop.id,goodsId:goods.id,value:1})" class="num-op" v-else src="~assets/img/cart/icon_cart_minus_on.png"  alt="">
                    <p class="num-text">{{goods.count}}</p>
                    <img  @click="$emit('increment',{shopId:shop.id,goodsId:goods.id,value:1})" class="num-op"  src="~assets/img/cart/icon_cart_add_on.png"  alt="">
                </div>
            </div>
            <div class="m-action-wrap">
                <div class="m-action">
                    <p class="action-text">移入关注</p>
                    <div class="action-split"></div>
                    <p  @click="$emit('remove',{shopId:shop.id,goodsId:goods.id})" class="action-text">删除</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    id: 102,
//                 name: '国拓 菲力原切牛排1kg  健身儿童食材 新西兰PS级安格斯草饲 轻食 牛肉 生鲜 牛扒 烤肉囤货食材',
//                 image: 'https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/175560/22/18639/144617/60e58a6aE76f0d5a1/b459ec76a4188619.jpg!q70.dpg.webp',
//                 tagText: '生鲜',
//                 tagStype: 1,
//                 sku: [{ id: 202, name: '新西兰原切草饲菲力牛排套餐1kg' }],
//                 activityNotice: ['秒杀中，7小时后结束'],
//                 price: 11800,
//                 originPrice: 11800,
//                 count: 1,
//                 selected: false
export default {
    props: {
        goods: {
            type: Object,
            default: undefined
        },
        shop: {
            type: Object,
            default: undefined
        }
    },
    data () {
        return {

        }
    },

    created () {
        console.log(this.goods)
    },
    methods: {
        priceInt (price) {
            return parseInt(price / 100)
        },
        priceDecimal (price) {
            const value = parseInt(price % 100)
            return (value < 10 ? '0' : '') + `${value}`
        }
    }
}
</script>
<style lang='less' scoped>
.shopcart-goods-item {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;

    overflow: hidden;
    margin-left: 0.1rem;
    padding-right: 0.15rem;
    padding-bottom: 0.1rem;
    margin-bottom: 0.2rem;

    .icon-select {
        margin-top: 0.34rem;
        width: 0.31rem;
        height: 0.31rem;
    }
    .goods-image {
        background: white;
        box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
        margin-left: 0.04rem;
        width: 1rem;
        height: 1rem;
        border-radius: 0.1rem;
    }
    .goods-content {
        margin-left: 0.1rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .goods-name {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 0.13rem;
            line-height: 0.18rem;
            height: 0.36rem;
            overflow: hidden;

            .goods-tag {
                font-size: 0.12rem;
                border-radius: 0.02rem;
                padding-left: 0.1rem;
                margin-right: 0.05rem;
                padding-left: 0.05rem;
                padding-right: 0.05rem;
            }

            .goods-name-tag1 {
                color: rgb(70, 165, 70);
                border: green 0.01rem solid;
            }
            .goods-name-tag2 {
                background-color: #f2270c;
                color: white;
            }
        }
        .goods-sku-line {
            display: flex;
            flex-direction: row;
            .goods-sku {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0.07rem;
                position: relative;
                padding: 0rem 0.03rem 0 0.06rem;
                margin: 0.04rem 0;
                display: flex;
                align-items: center;
                color: #262626;
                flex-direction: row;
                overflow: hidden;

                .sku-name {
                    white-space: nowrap;
                    line-height: 0.16rem;
                    height: 0.16rem;
                    color: #333;
                    font-size: 0.12rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .sku-arrow {
                    width: 0.12rem;
                    height: 0.12rem;
                }
            }
        }
        .goods-discount-line {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;

            .goods-discount {
                background-color: rgba(0, 0, 0, 0.1);
                border-radius: 0.07rem;
                position: relative;
                padding: 0rem 0.03rem 0 0.06rem;
                margin: 0.04rem 0;
                display: flex;
                align-items: center;
                flex-direction: row;
                overflow: hidden;
                flex-wrap: wrap;

                .discount-name {
                    white-space: nowrap;
                    line-height: 0.16rem;
                    height: 0.16rem;
                    color: #262626;
                    font-size: 0.12rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .discount-arrow {
                    width: 0.12rem;
                    height: 0.12rem;
                }
            }

            .activity-notice {
                line-height: 0.18rem;
                margin-left: 0.08rem;
                color: #f2270c;
                font-size: 0.12rem;
            }
        }
        .price-num-line {
            margin-top: 0.1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .price-wrap {
                display: flex;
                flex-direction: row;
                align-items: baseline;
                .price-dollar {
                    color: #f2270c;
                    font-size: 0.12rem;
                }
                .price-int {
                    font-weight: 600;
                    color: #f2270c;
                    font-size: 0.18rem;
                }
                .price-decimal {
                    color: #f2270c;
                    font-size: 0.12rem;
                }
            }
            .num-wrap {
                display: flex;
                flex-direction: row;
                align-items: center;

                .num-op {
                    width: 0.21rem;
                    height: 0.21rem;
                    padding: 0.03rem;
                }
                .num-text {
                    font-size: 0.13rem;
                    line-height: 0.18rem;
                    text-align: center;
                    width: 0.45rem;
                    background-color: rgba(0, 0, 0, 0.05);
                }
            }
        }
        .m-action-wrap {
            margin-top: 0.03rem;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            .m-action {
                display: flex;
                flex-direction: row;
                align-items: center;

                .action-split {
                    height: 0.1rem;
                    width: 0.01rem;
                    background-color: #999;
                }

                .action-text {
                    font-size: 0.12rem;
                    padding: 0.1rem;
                }
            }
        }
    }
}
</style>
