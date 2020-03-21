<template>
	<view class="home">
		<view class="bar">
		<uni-nav-bar backgroundColor="#d81e06" fixed>
		    <view class="serch">
			<uni-search-bar @confirm="search" @input="input" radius="10"  cancelButton placeholder="搜索商品" maxlength="8"></uni-search-bar>
			</view>
		    <view slot="left" class="left">
				<image src="../../static/icon/scan.png"></image>
			</view>
		    <view slot="right" class="right">
				<image src="../../static/icon/msg.png"></image>
			</view>
		</uni-nav-bar>
		</view>
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in lunbo" :key="item.id">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<!-- 导航栏区域 -->
		<view class="nav_a">
			<view class="nav_item_a" v-for="(item,key) in navlistA" :key=key @click="navItemclick(item.url)">
				<view :class="item.icon" :style="{backgroundColor:item.backgroundColor}"></view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="nav_b">
			<view class="nav_item_b" v-for="(item,key) in navlistB" :key=key @click="navItemclick(item.url)">
				<view :class="item.icon" :style="{backgroundColor:item.backgroundColor}"></view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="gd">
			<image src="../../static/icon/ad1.jpg"></image>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<good-lists :hotGoods='hotGoods' @itemDetail="itemDetail"></good-lists>
		</view>
	</view>
</template>

<script>
	import goodLists from '../../components/goods_list.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'

	export default {
		data() {
			return {
				lunbo: [],
				hotGoods: [],
				navlistA: [{
						icon: 'iconfont iconbaokuan',
						name: '每日爆款',
						backgroundColor:'#f84129',
						url: '/pages/goods/goods'
					},
					{
						icon: 'iconfont iconmeishi',
						name: '环球美食',
						backgroundColor:'#e8989a',
						url: '/pages/contact/contact'
					},
					{
						icon: 'iconfont iconmeizhuang',
						name: '个护美妆',
						backgroundColor:'#ddbbf2',
						url: '/pages/pics/pics'
					},
					{
						icon: 'iconfont iconbaojian',
						name: '营养保健',
						backgroundColor:'#b1f08e',
						url: '/pages/video/video'
					},
					{
						icon: 'iconfont iconjiaju',
						name: '家居厨卫',
						backgroundColor:'#48cbfc',
						url: '/pages/video/video'
					}
				],
				navlistB: [
					{
						icon: 'iconfont iconshengxian',
						name: '速食生鲜',
						backgroundColor:'#efb336',
						url: '/pages/video/video'
					},
					{
						icon: 'iconfont iconshuiguo',
						name: '水果蔬菜',
						backgroundColor:'#2aa515',
						url: '/pages/video/video'
					},
					{
						icon: 'iconfont iconjiushui',
						name: '酒水饮料',
						backgroundColor:'#7ba1c5',
						url: '/pages/video/video'
					},
					{
						icon: 'iconfont icondangao',
						name: '乳饮烘培',
						backgroundColor:'#ea9518',
						url: '/pages/video/video'
					},
					{
						icon: 'iconfont icontemai',
						name: '社区特卖',
						backgroundColor:'#b85143',
						url: '/pages/video/video'
					}
				]
			}
		},
		onLoad() {
			this.getLunbo()
			this.getHotGoods()
		},
		components: {
			"good-lists": goodLists,
			uniNavBar,
			uniSearchBar
		},
		methods: {
			async getLunbo() {
				const res = await this.$myRequest({
					url: '/shop/getLunboImages'
				})
				this.lunbo = res.data.result;
			},
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/shop/getHotGoods'
				})
				this.hotGoods = res.data.result;
			},
			//nav点击跳转到页面
			navItemclick(url) {
				uni.navigateTo({
					url
				})
			},
			itemDetail(id){
				uni.navigateTo({
					url:'../goods/goodsDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		.bar{
			.left{
				image{
					width: 50rpx;
					height: 50rpx;
					padding-top: 30rpx;
				}
			}
			.right{
				image{
					width: 50rpx;
					height: 50rpx;
					padding-top: 30rpx;
					padding-left: 55rpx;
				}
			}
		}
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav_a {
			margin-top: 15px;
			display: flex;
			margin-left: 15rpx;
			margin-right: 15rpx;
			.nav_item_a {
				width: 20%;
				text-align: center;
				margin-top: 10rpx;
				view{
					width: 100rpx;
					height: 100rpx;
					background-color: #d81e06;
					border-radius: 60rpx;
					margin: 0px auto;
					line-height: 100rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				text {
					font-size: 25rpx;
					color: $font-color-dark;
				}
			}
		}
		
		.nav_b {
			margin-bottom: 15px;
			margin-top: 10rpx;
			display: flex;
			margin-left: 15rpx;
			margin-right: 15rpx;
			.nav_item_b {
				width: 20%;
				text-align: center;
				margin-top: 10rpx;
				view:nth-child(1){
					width: 100rpx;
					height: 100rpx;
					background-color: #d81e06;
					border-radius: 60rpx;
					margin: 0px auto;
					line-height: 100rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				text {
					font-size: 25rpx;
					color: $font-color-dark;
				}
			}
		}
		
		.gd{
			margin-top: 15px;
			image{
				width: 720rpx;
				height: 192rpx;
			}
		}
		.hot_goods {
			background-color: #eee;
			margin-top: 5px;
			overflow: hidden; //子元素设置了margin 会导致父元素塌陷掉下来 加上这个属性避免

			.title {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #FFFFFF;
				margin: 5px 0;
			}
		}
	}
</style>
