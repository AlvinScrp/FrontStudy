<template>
	<view class="head">
		<image class="head-bg-image" src="../../static/img/profile/image_profile_header_shadow.png" mode="" />

		<view class="header-info">
			<view class="user-info">
				<view class="user-left">
					<view class="avatar-wrap">
						<image class="avatar" :src="userInfo.avatar" alt="">
					</view>

				</view>
				<view class="user-right">
					<view class="line1-wrap">
						<view class="name-wrap">
							<text class="name-text">{{userInfo.name}}</text>
							<image v-if="userInfo.isVip" class="icon-vip" src="../../static/img/profile/icon_vip.png" />
						</view>
						<image class="icon-setting" src="../../static/img/profile/icon_profile_setting.png" alt="">
					</view>
					<view class="line2-wrap">
						<view class="score-tag"><text class="score-tag-text">京享值</text></view>
						<view class="score-tag tag2">
							<text class="score-tag-text">小白信用{{userInfo.creditScore}}</text>
							<image class="tag-arrow" src="../../static/img/profile/icon_profile_arrow_white.png"
								mode="" />
						</view>

					</view>

				</view>

			</view>
			<view class="my-fav">
				<view class="fav-item" v-for="(fav,index) in myFav" :key="index">
					<text class="fav-count">{{fav.count}}</text>
					<text class="fav-label">{{fav.label}}</text>
				</view>
			</view>
			<view class="plus-wrap">
				<image class="plus-bg-image"
					src="https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png"
					alt="" />

				<view class="plus">
					<view class="plus-left">
						<image class="plus-logo" :src="plus.logo" alt="" />
						<view class="split"></view>
						<text class="plus-tip">{{plus.tip}}</text>
					</view>
					<view class="plus-right">
						<text class="look-look">立即查看</text>
						<image class="look-arrow" src="../../static/img/profile/icon_profile_arrow_black.png" alt="" />
					</view>
				</view>
			</view>
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
				userInfo: {
					avatar: '',
					name: '',
					creditScore: '',
					isVip: false
				},
				myFav: [{
					label: '',
					count: 0
				}],
				plus: {
					logo: '',
					tip: ''
				}

			}
		},
		mounted() {
			setTimeout(() => {
				this.userInfo = profileData.userInfo
				this.myFav = profileData.myFav
				this.plus = profileData.plus
			}, 200)
		},
		methods: {

		}
	}
</script>
<style lang='less' scoped>
	.head {
		position: relative;
		width: 750rpx;
		height: 400rpx;

		.head-bg-image {
			position: absolute;

			width: 750rpx;
			height: 400rpx;
		}

		.header-info {
			display: flex;
			position: absolute;
			flex-direction: column;
			padding: 30rpx 30rpx 0 30rpx;
			width: 750rpx;
			height: 400rpx;


			.user-info {
				width: 750rpx;
				display: flex;
				flex-direction: row;

				.user-left {
					height: 104rpx;
					display: flex;
					flex-direction: row;
					align-items: center;

					.avatar-wrap {
						width: 104rpx;
						height: 104rpx;
						border-radius: 52rpx;
						background-color: rgba(255, 255, 255, 0.6);
						padding: 4rpx;

						.avatar {
							width: 96rpx;
							height: 96rpx;
							border-radius: 48rpx;
						}
					}
				}

				.user-right {
					margin-left: 24rpx;
					width: 562rpx;
					display: flex;
					flex-direction: column;

					.line1-wrap {
						flex-direction: row;
						justify-content: space-between;

						display: flex;
						height: 48rpx;

						.name-wrap {
							display: flex;
							flex-direction: row;
							text-align: center;
							align-items: center;

							.name-text {
								font-size: 36rpx;
								line-height: 48rpx;
								color: white;

							}

							.icon-vip {
								margin-left: 6rpx;
								width: 36rpx;
								height: 36rpx;
							}
						}

						.icon-setting {
							width: 48rpx;
							height: 48rpx;
						}
					}

					.line2-wrap {
						margin-top: 16rpx;
						display: flex;
						flex-direction: row;

						.score-tag {
							border-radius: 20rpx;
							background-color: rgba(0, 0, 0, 0.15);
							padding: 0 12rpx;

						}

						.score-tag-text {
							color: white;
							text-align: center;

							font-size: 20rpx;
							line-height: 40rpx;
							height: 40rpx;
						}

						.tag2 {
							margin-left: 20rpx;
							display: flex;
							flex-direction: row;
							align-items: center;

							.tag-arrow {
								margin-left: 4rpx;
								width: 16rpx;
								height: 16rpx;
							}
						}
					}
				}
			}

			.my-fav {
				margin: 40rpx 0;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.fav-item {
					width: 230rpx;
					display: flex;
					flex-direction: column;
					align-items: center;

					.fav-count {
						font-weight: 900;
						color: white;
						font-size: 30rpx;
					}

					.fav-label {
						margin-top: 20rpx;
						color: white;
						font-size: 24rpx;
					}
				}
			}

			.plus-wrap {
				position: absolute;
				bottom: 20rpx;

				.plus-bg-image {
					height: 80rpx;
					width: 690rpx;
				}


				.plus {
					position: absolute;
					top: 0;
					height: 80rpx;
					padding-left: 20rpx;
					padding-right: 20rpx;
					width: 690rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					.plus-left {
						display: flex;
						flex-direction: row;
						align-items: center;

						.plus-logo {
							width: 114rpx;
							height: 24rpx;
						}

						.split {
							background-color: #ffe678;
							margin-left: 20rpx;
							margin-right: 20rpx;
							width: 2rpx;
							height: 16rpx;
						}

						.plus-tip {
							font-size: 24rpx;
							color: #ffe678;
						}
					}

					.plus-right {
						background-image: linear-gradient(-50deg, #ffe36f, #f6d44e);
						border-radius: 18rpx;
						height: 36rpx;
						display: flex;
						padding-left: 20rpx;
						padding-right: 8rpx;
						flex-direction: row;
						align-items: center;

						.look-look {
							color: #262626;
							font-size: 24rpx;
						}

						.look-arrow {
							width: 28rpx;
							height: 28rpx;
						}
					}
				}
			}
		}
	}
</style>
