<template>
	<view class="out-wrapper">
		<view class="wrapper">
			<view class="nav">
				

			<view class="nav-icon">
				<image src="../../static/img/goodsdetail/icon_bottom_online_service.png" class="ic" mode=""></image>
				<text class="label">客服</text>
			</view>
			<view class="nav-icon">
				<image src="../../static/img/goodsdetail/icon_bottom_home.png" class="ic" mode=""></image>
				<text class="label">商城</text>
			</view>
			<view class="nav-icon">
				<image src="../../static/img/goodsdetail/icon_bottom_shopcar.png" class="ic" mode=""></image>
				<text class="label">购物车</text>
			</view>
						</view>
			<view class="goods-opt">
				<text class="add-shopcar">加入购物车</text>
				<text class="buy">立即购买</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
	};
</script>
<style lang="less" scoped>
	.out-wrapper {
		width: 750rpx;
		background-color: white;
		padding-top: 18rpx;
		padding-bottom: 34rpx;
		padding-left: 20rpx;
		padding-right: 30rpx;

	}

	.wrapper {
		height: 96rpx;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		
		.nav{
			align-items: center;
			flex-direction: row;
			
			.nav-icon {
				width: 100rpx;
				flex-grow: 1;
				background-color: white;
			
				display: flex;
				align-items: center;
				flex-direction: column;
			
		.ic{
			width: 36rpx;
			height:36rpx;
		}
			
				.label {
					margin-top: 4rpx;
					font-size: 22rpx;
					color: #666;
				}
			}
			
		}

		
		.goods-opt {
			flex-direction: row;

			.add-shopcar {
				line-height: 80rpx;
				background-color: #333;
				font-size: 28rpx;
				padding: 0 30rpx;
				color: white;
				border-radius: 40rpx 0 0 40rpx;
			}

			.buy {
				line-height: 80rpx;
				background: linear-gradient(90deg, #ff6381, #ff2b54);
				font-size: 28rpx;
				color: white;
				padding: 0 30rpx;
				border-radius: 0 40rpx 40rpx 0;
			}
		}
	}
</style>
