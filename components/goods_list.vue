<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in hotGoods" :key="item.id" @click="navItem(item.id)">
			<image :src="item.url"></image>
			<view class="name">{{item.name}}</view>
			<view class="price">
				<view>
					<text>¥ {{item.price}}</text>
					<text>{{item.byed}}</text>
					<text>人已购买</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['hotGoods'],
		methods:{
			navItem(id){
				this.$emit("itemDetail",id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between; //两边对齐

		.goods_item {
			background-color: #FFFFFF;
			width: 355rpx;
			border-radius: 20rpx;
			// margin: 10rpx 0;
			// padding: 5rpx 20rpx;
			// box-sizing: border-box;//padding不会撑大盒子大小
			margin-bottom: 10rpx;

			image {
				width: 100%;
				height: 150px;

			}

			.name {
				padding: 5rpx 20rpx;
				margin-top: 15rpx;
				font-size: 28rpx;
				line-height: 40rpx;
				color: $font-color-dark;
			}

			.price {
				padding: 5rpx 20rpx;
				margin-top: 10rpx;
				margin-bottom: 25rpx;

				text:nth-child(1) {
					color: $shop-color;
				}

				text:nth-child(2) {
					margin-left: 20rpx;
					color: #C8C7CC;
					font-size: 30rpx;
				}

				text:nth-child(3) {
					color: #C8C7CC;
					font-size: 30rpx;
				}
			}
		}
	}
</style>
