<template>
    <div id="shopcart" class="shopcart">
        <shopcart-toolbar></shopcart-toolbar>
        <div class="shop-goods" v-for="(section,index) in shopGoods" :key="index">
            <div v-if=" section.goodsList && section.goodsList.length > 0" class="shop">
                <div class="shop-left">
                    <img class="shop-icon" :src="section.shop.icon" alt="">
                    <p class="shop-name">{{section.shop.name}}</p>
                    <img  class="shop-arrow" v-if="section.shop.clickable" src="~assets/img/cart/icon_shopcart_arrow_right.png" alt=""/>
                </div>
                <p class="shop-coupon" v-if="section.shop.hasCoupon"> 优惠券</p>
            </div>
            <shopcart-goods-item
                :class="{'goods-bottom-line':showGoodsBootomLine(index,section.goodsList)}"
                :goods="goods"
                :shop = "section.shop"
                @change-select ="changeSelect"
                @increment = "incrementGoods"
                @decrement = "decrementGoods"
                @remove = "removeGoods"
                v-for="(goods,index) in section.goodsList"
                :key="index">
            </shopcart-goods-item>

        </div>
        <div class="bottom-empty"></div>

        <div class="bottom-option">
            <div @click="selectAll({selected:!isAllSelected})" class="select-all-wrap">
                <img  v-if="isAllSelected" class="icon-select" src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_selected_jd@2x_e9080098.png" alt="">
                <img  v-else class="icon-select" src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_unselected_jd@2x_d29b6e19.png" alt="">
                <p class="select-all-text">全选</p>
            </div>
            <div class="total-wrap">
                <p class="total-label">总计：</p>
                <p class="total-value">{{formatPrice(total.price,true)}}</p>
                <p class="total-checkout">去结算({{total.goodsCount}}件)</p>
            </div>

        </div>

        <div @click="addGoods({goodsId:1,count:3})">addGoods</div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ShopcartGoodsItem from './child/ShopcartGoodsItem.vue'
import ShopcartToolbar from './child/ShopcartToolbar.vue'

export default {
    components: {
        ShopcartToolbar, ShopcartGoodsItem
    },

    computed: {
        ...mapState({
            shopGoods: state => state.shopcart.shopGoods
            // total: state => state.shopcart.total
        }),
        ...mapGetters('shopcart', {
            total: 'cartTotal',
            isAllSelected: 'isAllSelected'
        })

    },
    created () {
        this.initShopcart()
    },
    methods: {
        ...mapActions('shopcart', ['initShopcart', 'incrementGoods', 'decrementGoods', 'removeGoods', 'selectGoods', 'selectAll', 'checkout']),
        showGoodsBootomLine (index, goodsList) {
            return goodsList.length > 1 && index !== goodsList.length - 1
        },
        changeSelect ({ shop, goods }) {
            console.log(shop, goods)
            this.selectGoods({ shopId: shop.id, goodsId: goods.id, selected: !goods.selected })
        },
        formatPrice (price, withDollar = false) {
            return `${withDollar ? '¥' : ''}${(price / 100.0).toFixed(2)}`
        }
    }
}
</script>
<style lang='less' scoped>
.shopcart {
    background-color: #f6f8fb;
    width: 3.75rem;
    position: absolute;
    top: 0;
    bottom: var(--tabbar-height);
    overflow: scroll;

    .shop-goods {
        margin-top: 0.12rem;
        background-color: white;
        border-radius: 0.15rem;

        .shop {
            padding: 0.1rem 0.15rem;
            height: 0.4rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .shop-left {
                margin-left: 0.25rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                .shop-icon {
                    width: 0.2rem;
                    height: 0.2rem;
                }
                .shop-name {
                    margin-left: 0.04rem;
                    font-size: 0.12rem;
                    color: #333;
                    font-weight: 700;
                }
                .shop-arrow {
                    width: 0.15rem;
                    height: 0.15rem;
                }
            }

            .shop-coupon {
                color: #f2270c;
                font-size: 0.12rem;
                height: 0.16rem;
                padding: 0 0.06rem;
                line-height: 0.16rem;
                background-color: #fcedeb;
                border-radius: 0.09rem;
            }
        }
    }
    .bottom-empty {
        width: 3.75rem;
        height: 0.5rem;
    }

    .goods-bottom-line {
        border-bottom: 1px #f2f2f2 solid;
    }

    .bottom-option {
        position: fixed;
        bottom: var(--tabbar-height);
        left: 0;
        right: 0;
        z-index: 99;
        height: 0.5rem;
        background-color: yellow;
        border-top: 1px #f2f2f2 solid;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .select-all-wrap {
            margin-left: 0.11rem;
            display: flex;
            flex-direction: row;
            .icon-select {
                width: 0.31rem;
                height: 0.31rem;
            }
            .select-all-text {
                font-size: 0.12rem;
                line-height: 0.31rem;
                color: #333;
            }
        }
        .total-wrap {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 0.12rem;

            .total-label {
                color: black;
                font-size: 0.13rem;
            }
            .total-value {
                color: black;
                font-weight: 700;
            }
            .total-checkout {
                margin-left: 0.1rem;
                color: white;
                line-height: 0.4rem;
                border-radius: 0.2rem;
                text-align: center;
                font-size: 0.14rem;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                font-weight: 500;
                background-color: #f2270c;
            }
        }
    }
}
.shopcart::-webkit-scrollbar {
    display: none;
}
</style>
