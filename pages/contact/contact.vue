<template>
	<view class="contact">
		<image src="../../static/contact.jpg"></image>
		<view class="phone" @click="callPhone">联系电话：1234567（点击拨打）</view>
		<view class="address">联系地址：广州市白云区</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:23.24,
				longitude:113.29,
				scale:12,
				covers:[
					{
						latitude:23.24,
						longitude:113.29,
						iconPath: '../../static/icon/location.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'12345678'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width: 100%;
			height: 230px;
		}
		.phone{
			font-size: 40rpx;
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
			padding: 10rpx 15rpx;
		}
		.address{
			font-size: 40rpx;
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
			padding: 10rpx 15rpx;
		}
		.map{
			margin-top: 20px;
			width: 100%;
			height: 350px;
		}
	}
</style>
