<template>
	<view class = "goods_list">
		<good-lists :hotGoods='hotGoods' @itemDetail="itemDetail"></good-lists>
		<view class = "footer" v-if="flag">----我是有底线的----</view>
	</view>
</template>

<script>
	import goodLists from '../../components/goods_list.vue'
	export default {
		data() {
			return {
				hotGoods: [],
				flag:false,
				}
		},
		onLoad() {
			this.getHotGoods()
		},
		components: {
			"good-lists": goodLists
		},
		methods: {
			async getHotGoods(callback) {
				const res = await this.$myRequest({
					url: '/shop/getHotGoods'
				})
				this.hotGoods = res.data.result;
				callback && callback();
			},
			itemDetail(id){
				uni.navigateTo({
					url:'../goods/goodsDetail?id='+id
				})
			}
		},
		onReachBottom() {
			this.flag = true;
		},
		onPullDownRefresh() {
			this.flag = false;
			this.getHotGoods(()=>{
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background: #F1F1F1;
		padding-top: 10rpx;
	}
	.footer{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 10px;
		text-align: center;
	}
</style>
