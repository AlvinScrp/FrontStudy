<template>
    <div class="order">
        <div class="top-line-box">
            <div class="order-item" v-for="(order,index) in orders " :key="index">
                <div class="order-icon-wrap">
                    <img  class="order-icon" :src="order.icon" alt="">
                    <p class="order-count" v-if="order.count>0">{{order.count}}</p>
                </div>

                <p class="order-label">{{order.label}}</p>
            </div>
            <div class="order-item order-all">
                <div class="order-icon-wrap">
                    <img  class="order-icon" :src="orderAllIcon" alt="">
                </div>
                <p class="order-label label-all">全部订单</p>
            </div>
        </div>
        <div class="split"></div>
        <div class="logistics">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(logisticsInfo,index) in logisticses" :key="index" class="swiper-slide">
                    <div class="logistics-item">
                        <img class="logistics-image" :src="logisticsInfo.image" alt="">
                        <div class="logistics-content">
                            <div class="logistics-state">
                                <p class="logistics-type">{{logisticsInfo.state.type}}</p>
                                <p class="logistics-date">{{logisticsInfo.state.date}}</p>
                            </div>
                            <p class="logistics-text">{{logisticsInfo.text}}</p>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>

    </div>
</template>

<script>
import { profileData } from 'network/profile.js'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            orderAllIcon: '',
            orders: [{ label: '', icon: '', count: 0 }],
            logisticses: [{ image: '', state: { type: '', date: '' }, text: '' }],
            swiperOption: {
                direction: 'vertical',
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                }
            }
        }
    },
    mounted () {
        setTimeout(() => {
            const { orderList, logisticsList, orderAllIcon } = profileData.myOrder
            this.orders = orderList
            this.logisticses = logisticsList
            this.orderAllIcon = orderAllIcon
        }, 200)
    },
    methods: {

    }
}
</script>
<style lang='less' scoped>
.order {
    position: relative;
    margin-top: -0.11rem;
    background-color: white;
    border-radius: 0.15rem;
    padding: 0.1rem 0.15rem;

    .top-line-box {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-top: 0.1rem;

        .order-item {
            flex-grow: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.12rem;
            height: 0.65rem;
            color: #262626;
            .order-icon-wrap {
                position: relative;
                height: 0.32rem;
                width: 0.6rem;

                .order-icon {
                    margin-top: 0.06rem;
                    margin-left: 0.16rem;
                    width: 0.26rem;
                    height: 0.26rem;
                }
                .order-count {
                    font-size: 0.12rem;
                    color: #e93b3d;
                    line-height: 0.12rem;
                    text-align: center;
                    border: 1px solid #e93b3d;
                    border-radius: 0.06rem;
                    position: absolute;
                    background-color: white;
                    padding: 0 0.04rem;
                    left: 0.32rem;
                    top: 0;
                }
            }

            .order-label {
                text-align: center;
                width: 0.6rem;
                margin-top: 0.06rem;
            }
        }
        .order-all:before {
            position: absolute;
            left: -0.06rem;
            z-index: 1;
            top: -0.08rem;
            background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png);
            background-size: 0.1rem;
            width: 0.1rem;
            height: 0.72rem;

            content: "";
        }
    }

    .split {
        height: 0.07rem;
        background: url(https://img12.360buyimg.com/img/s678x14_jfs/t1/125465/11/7916/668/5f18ff40Ee769e9af/79cbf2646d082329.png)
            no-repeat scroll 50% / cover;
    }
    .logistics {
        .swiper {
            height: 0.7rem;
            .swiper-slide {
                width: 100%;

                .logistics-item {
                    margin-left: 0.12rem;
                    height: 0.7rem;
                    padding-top: 0.1rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    .logistics-image {
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 0.04rem;
                    }
                    .logistics-content {
                        height: 0.5rem;
                        margin-left: 0.1rem;
                        display: flex;
                        flex-direction: column;

                        .logistics-state {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            .logistics-type {
                                font-size: 0.15rem;
                                color: red;
                                line-height: 0.16rem;
                            }
                            .logistics-date {
                                margin-top: 0.01rem;
                                margin-left: 0.12rem;

                                color: #999;
                                font-size: 0.12rem;
                            }
                        }
                        .logistics-text {
                            margin-top: 0.1rem;
                            font-size: 0.13rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
