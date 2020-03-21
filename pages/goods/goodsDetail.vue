<template>
	<view class="goods_detail">
		<swiper indicator-dots="">
			<swiper-item v-for="(item,id) in goodsDetail.imgUrl" :key=id>
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>¥ {{goodsDetail.price}}</text>
				<text>{{goodsDetail.oldPrice}}</text>
			</view>
			<view class="title">
				{{goodsDetail.title}}
			</view>
			<view class="line"></view>
		</view>
		<view class="box2">
			<view class="goods_num">货号：{{goodsDetail.goodsNum}}</view>
			<view class="stock">库存：{{goodsDetail.stock}}</view>
			<view class="line"></view>
		</view>
		<view class="box3">
			<!-- 			<view class="detail_title">详情介绍</view>
 -->
			<view class="images" v-for="(item,id) in goodsDetail.detailUrl" :key="id">
				<image :src="item"></image>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				goodsDetail: {},
				options: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getGoodsDetail()
		},
		components: {
			uniGoodsNav
		},
		methods: {
			async getGoodsDetail() {
				const res = await this.$myRequest({
					url: '/shop/getGoodsDetail?id=' + this.id
				})
				this.goodsDetail = res.data.result
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 750rpx;

			swiper-item {
				height: 100%;
				width: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.box1 {
			.price {
				margin: 20rpx 30rpx;
				font-size: 45rpx;
				color: $shop-color;

				text:nth-child(2) {
					font-size: 30rpx;
					color: #ccc;
					text-decoration: line-through;
					margin-left: 10rpx;
				}
			}

			.title {
				margin: 0rpx 30rpx;
				font-size: 35rpx;
				line-height: 40rpx;
				//color: $font-color-dark;
			}

		}

		.box2 {
			font-size: 30rpx;

			.goods_num {
				margin: 30rpx 10rpx 0rpx 30rpx;
			}

			.stock {
				margin: 10rpx 30rpx;
			}
		}

		.box3 {
			padding-bottom: 50px;
			.detail_title {
				margin-top: 10rpx;
				font-size: 30rpx;
				margin-left: 20rpx;
			}

			.images {
				width: 750rpx;

				image {
					width: 100%;
					height: 1060rpx;
				}
			}
		}

		.line {
			width: 100%;
			height: 3px;
			background: #EEEEEE;
			margin-top: 30rpx;
		}
		.goods_nav{
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
