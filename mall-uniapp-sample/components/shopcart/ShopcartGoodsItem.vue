<template>
	<view class="shopcart-goods-item" :class="{'goods-split-line':!isLastOne}">
		<view @click="$emit('select',{shop,goods})">
			<image v-if="goods.selected" class="icon-select"
				src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_selected_jd@2x_e9080098.png" alt="">
				<image v-else class="icon-select"
					src="https://wq.360buyimg.com/wxsq_trade/cart/main/images/icon_unselected_jd@2x_d29b6e19.png"
					alt="">
		</view>
		<image class="goods-image" :src="goods.image" alt="" mode="aspectFill">
			<view class="goods-content">
		
				<!-- #ifndef APP-NVUE -->
				<text class="goods-name">
					<text v-if="goods.tagText" class="goods-tag"
						:class="{'goods-name-tag1':goods.tagStype===1,'goods-name-tag2':goods.tagStype===2}">{{goods.tagText}}</text>{{goods.name}}</text>
				<!-- #endif -->

				<!-- #ifdef APP-NVUE -->
				<text class="goods-name">{{goods.name}}</text>
				<!-- #endif -->


				<view v-for="(sku,index) in goods.sku" :key="index" class="goods-sku-line">
					<view class="goods-sku">
						<text class="sku-name">{{subText(sku.name,16)}}</text>
						<image class="sku-arrow" src="../../static/img/cart/icon-shopcart-arrow-down.png" alt="">
					</view>
				</view>
				<view class="goods-discount-line">
					<view v-if="goods.discount && goods.discount.tip" class="goods-discount">
						<text class="discount-name">{{subText( goods.discount.tip,16)}}</text>
						<image class="discount-arrow" src="../../static/img/cart/icon-shopcart-arrow-down.png" alt="">
					</view>
					<template v-if="goods.activityNotice && goods.activityNotice.length > 0">
						<text class="activity-notice" v-for="(noticeText,index) in goods.activityNotice"
							:key="index">{{noticeText}}</text>
					</template>
				</view>
				<view class="price-num-line">
					<view class="price-wrap">
						<text class="price-dollar">¥</text>
						<text class="price-int">{{priceInt(goods.price)}}</text>
						<text class="price-decimal">.{{priceDecimal(goods.price)}}</text>
					</view>
					<view class="num-wrap">
						<image class="num-op" v-if="goods.count<2" src="../../static/img/cart/icon_cart_minus_dis.png"
							alt="">
							<image @click="$emit('decrement',{shopId:shop.id,goodsId:goods.id,value:1})" class="num-op"
								v-else src="../../static/img/cart/icon_cart_minus_on.png" alt="">
								<text class="num-text">{{goods.count}}</text>
								<image @click="$emit('increment',{shopId:shop.id,goodsId:goods.id,value:1})"
									class="num-op" src="../../static/img/cart/icon_cart_add_on.png" alt="">
					</view>
				</view>
				<view class="m-action-wrap">
					<view class="m-action">
						<text class="action-text">移入关注</text>
						<view class="action-split"></view>
						<text @click="$emit('remove',{shopId:shop.id,goodsId:goods.id})" class="action-text">删除</text>
					</view>
				</view>
			</view>
	</view>
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
			},
			isLastOne: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		created() {
			console.log(this.goods)
			console.log("菲力原切牛排1kg".length)
		},
		computed: {

		},
		methods: {
			priceInt(price) {
				return parseInt(price / 100)
			},
			priceDecimal(price) {
				const value = parseInt(price % 100)
				return (value < 10 ? '0' : '') + `${value}`
			},
			subText(text, maxLenth) {
				let result = text
				if (result.length > maxLenth) {
					result = result.substring(0, 14)
					result += "..."
				}
				return result
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url("/components/gaoyia-parse/parse.css");

	.shopcart-goods-item {
		display: flex;
		position: relative;
		flex-direction: row;
		align-items: flex-start;
		margin-left: 20rpx;
		padding-right: 30rpx;
		padding-bottom: 20rpx;
		width: 730rpx;


		.icon-select {
			margin-top: 68rpx;
			width: 62rpx;
			height: 62rpx;
		}

		.goods-image {
			background: white;
			box-shadow: 0 8rpx 24rpx 0 rgba(0, 0, 0, 0.05);
			margin-left: 8rpx;
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
		}

		.goods-content {
			margin-left: 20rpx;
			width: 409rpx;
			display: flex;
			flex-direction: column;
			overflow: hidden;


			.goods-tag {
				font-size: 23rpx;
				border-radius: 4rpx;

				margin-right: 10rpx;
				padding-left: 10rpx;
				padding-right: 10rpx;
				box-sizing:border-box ;
			}

			.goods-name-tag1 {
				color: green;
				border:2rpx solid green;
			}

			.goods-name-tag2 {
				background-color: #f2270c;
				color: white;
			}

			.goods-name {
				/* #ifndef APP-NVUE   */
				/* #endif  */
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				font-size: 26rpx;
				line-height: 36rpx;
				height: 72rpx;
				width: 409rpx;
				lines: 2;
				/* #ifndef APP-NVUE */
				overflow: hidden;
				/*  #endif*/
			}

			.goods-sku-line {
				display: flex;
				flex-direction: row;
				width: 409rpx;
				flex-wrap: wrap;
				overflow: hidden;

				.goods-sku {
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 14rpx;
					padding: 0 6rpx 0 12rpx;
					margin: 8rpx 0;
					display: flex;
					align-items: center;
					color: #262626;
					flex-direction: row;
					overflow: hidden;

					.sku-name {
						white-space: nowrap;
						line-height: 32rpx;
						height: 32rpx;
						color: #333;
						font-size: 24rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.sku-arrow {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}

			.goods-discount-line {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				align-items: center;
				width: 409rpx;

				.goods-discount {
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 14rpx;
					position: relative;
					padding: 0 6rpx 0 12rpx;
					margin: 8rpx 8rpx 8rpx 0;
					display: flex;
					align-items: center;
					flex-direction: row;
					overflow: hidden;

					.discount-name {
						white-space: nowrap;
						line-height: 32rpx;
						height: 32rpx;
						color: #262626;
						font-size: 24rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.discount-arrow {
						width: 24rpx;
						height: 24rpx;
					}
				}

				.activity-notice {
					line-height: 36rpx;
					color: #f2270c;
					font-size: 24rpx;
				}
			}

			.price-num-line {
				margin-top: 20rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.price-wrap {
					display: flex;
					flex-direction: row;
					/* #ifndef APP-NVUE */
					align-items: baseline;
					/*  #endif*/
					/* #ifdef APP-NVUE */
					align-items: flex-start;
					/*  #endif*/

					.price-dollar {
						/* #ifdef APP-NVUE */
						margin-top: 13rpx;
						/*  #endif*/
						color: #f2270c;
						font-size: 24rpx;
					}

					.price-int {
						font-weight: 600;
						color: #f2270c;
						font-size: 36rpx;
					}

					.price-decimal {
						/* #ifdef APP-NVUE */
						margin-top: 13rpx;
						/*  #endif*/
						color: #f2270c;
						font-size: 24rpx;
					}
				}

				.num-wrap {
					display: flex;
					flex-direction: row;
					align-items: center;

					.num-op {
						width: 42rpx;
						height: 42rpx;
						padding: 6rpx;
					}

					.num-text {
						font-size: 26rpx;
						line-height: 36rpx;
						text-align: center;
						width: 90rpx;
						background-color: rgba(0, 0, 0, 0.05);
					}
				}
			}

			.m-action-wrap {
				margin-top: 6rpx;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;

				.m-action {
					display: flex;
					flex-direction: row;
					align-items: center;

					.action-split {
						height: 20rpx;
						width: 2rpx;
						background-color: #999;
					}

					.action-text {
						font-size: 24rpx;
						padding: 20rpx;
					}
				}
			}
		}
	}

	.goods-split-line {
		border-bottom: 1px #f2f2f2 solid;
		margin-bottom: 40rpx;
	}
</style>
