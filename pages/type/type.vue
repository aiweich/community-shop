<template>
	<view class="pics">
		<view>
		<scroll-view class="left" scroll-y>
			<view @click="navClick(index,item.id)" :class="active == index?'active':''" v-for="(item,index) in navList" :key="item.id">{{item.name}}</view>
		</scroll-view>
		</view>
		
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in itemList" :key="item.id">
				<image :src="item.imgUrl" @click="preView(item.imgUrl)"></image>
				<text class="title">{{item.title}}</text>
				<view class="kb"></view>
			</view>
		</scroll-view>
																					
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [],
				active: 0,
				itemList: []
			}
		},
		methods: {
			async getPicNavList() {
				const res = await this.$myRequest({
					url: '/shop/getPicNavList'
				})
				this.navList = res.data.result
				this.getNavItem(1)
			},
			navClick(index,id) {
				this.active = index
				this.getNavItem(id)
			},
			async getNavItem(id) {
				const res = await this.$myRequest({
					url: '/shop/getNavDetail?id='+id
				})
				this.itemList = res.data.result
			},
			preView(current){
				const urls = this.itemList.map(item=>{
					return item.imgUrl
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicNavList();
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-left: 1px solid #eee;

			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
				color: $font-color-dark;
			}

			.active {
				background: $shop-color;
				color: #fff;
			}
		}

		.right {
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image {
					width: 520rpx;
					height: 520rpx;
				}
				
				.title {
					font-size: 30rpx;
					line-height: 50rpx;
					color: $font-color-dark;
				}
				.kb{
					width: 100%;
					height: 50rpx;
				}
			}
		}
	}
</style>
