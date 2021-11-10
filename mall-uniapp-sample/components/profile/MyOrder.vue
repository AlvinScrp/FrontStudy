<template>
	<view class="order">
		<view class="top-line-box">
			<view class="order-item" :style="" v-for="(order,index) in orders " :key="index">
				<view class="order-icon-wrap">
					<image class="order-icon" :src="order.icon" alt="">
						<text class="order-count" v-if="order.count>0">{{order.count}}</text>
				</view>

				<text class="order-label">{{order.label}}</text>
			</view>
			<view class="order-item order-all" :style="">
				<view class="order-icon-wrap">
					<image class="order-icon" :src="orderAllIcon" alt="">
				</view>
				<text class="order-label label-all">全部订单</text>
			</view>
		</view>
		<div class="split" />
		<view class="logistics">
			<swiper class="swiper" :vertical="true" :autoplay="true" :circular="true">
				<swiper-item v-for="(logisticsInfo,index) in logisticses" :key="index" class="swiper-slide">
					<view class="logistics-item">
						<image class="logistics-image" :src="logisticsInfo.image" alt="">
							<view class="logistics-content">
								<view class="logistics-state">
									<text class="logistics-type">{{logisticsInfo.state.type}}</text>
									<text class="logistics-date">{{logisticsInfo.state.date}}</text>
								</view>
								<text class="logistics-text">{{logisticsInfo.text}}</text>
							</view>
					</view>
				</swiper-item>

			</swiper>
		</view>

	</view>
</template>

<script>
	import {
		profileData
	} from '../../network/profile.js'
	export default {
		data() {
			return {
				orderAllIcon: '',
				orders: [{
					label: '',
					icon: '',
					count: 0
				}],
				logisticses: [{
					image: '',
					state: {
						type: '',
						date: ''
					},
					text: ''
				}]
			}
		},
		mounted() {
			setTimeout(() => {
				const {
					orderList,
					logisticsList,
					orderAllIcon
				} = profileData.myOrder
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
		margin-top: -23rpx;
		background-color: white;
		border-radius: 30rpx;
		padding: 20rpx 30rpx;

		.top-line-box {
			position: relative;
			display: flex;
			width: 690rpx;
			flex-direction: row;
			margin-top: 20rpx;
			justify-content: space-around;

			.order-item {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;

				height: 130rpx;

				.order-icon-wrap {
					position: relative;
					height: 64rpx;
					width: 120rpx;

					.order-icon {
						margin-top: 12rpx;
						margin-left: 34rpx;
						width: 52rpx;
						height: 52rpx;
					}

					.order-count {
						font-size: 24rpx;
						color: #e93b3d;
						line-height: 24rpx;
						text-align: center;
						border: 1px solid #e93b3d;
						border-radius: 12rpx;
						position: absolute;
						background-color: white;
						padding: 0 8rpx;
						left: 64rpx;
						top: 0;
					}
				}

				.order-label {
					font-size: 24rpx;
					color: #262626;
					text-align: center;
					width: 120rpx;
					margin-top: 12rpx;
				}
			}

		}

		.split {
			height: 1rpx;
			width: 690rpx;
			background: #f2f2f2;
			
		}

		.logistics {
			.swiper {
				
				height: 140rpx;

				.swiper-slide {
					

					.logistics-item {
						margin-left: 24rpx;
						height: 140rpx;
						padding-top: 10rpx;
						display: flex;
						flex-direction: row;
						align-items: center;

						.logistics-image {
							width: 100rpx;
							height: 100rpx;
							border-radius: 8rpx;
						}

						.logistics-content {
							height: 100rpx;
							width: 546rpx;
							margin-left: 20rpx;
							display: flex;
							flex-direction: column;

							.logistics-state {
								display: flex;
								flex-direction: row;
								align-items: center;

								.logistics-type {
									font-size: 30rpx;
									color: red;
									line-height: 32rpx;
								}

								.logistics-date {
									margin-top: 2rpx;
									margin-left: 24rpx;

									color: #999;
									font-size: 24rpx;
								}
							}

							.logistics-text {
								margin-top: 10rpx;
								font-size: 24rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
