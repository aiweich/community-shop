<template>
	<view>
		<view @click="navItem(item.id)" class="news_item" v-for="item in newsLists" :key="item.id">
			<image :src="item.url"></image>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>时间：{{item.time}}</text>
					<text>阅读：{{item.readed}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['newsLists'],
		
		methods:{
			navItem(id){
				this.$emit("itemDetail",id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;

		//left
		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 200rpx;
		}

		//right
		.right {
			margin-left: 15rpx;
			padding: 10rpx 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
			}

			.info {
				font-size: 20rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}

	}
</style>
