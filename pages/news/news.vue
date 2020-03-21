<template>
	<view>
		<news-list :newsLists="newsLists" @itemDetail="newsDetail"></news-list>
	</view>
</template>

<script>
	import newsItem from '../../components/news_item.vue'
	export default {
		data() {
			return {
				newsLists: []
			}
		},
		components:{
			"news-list":newsItem
		},
		methods: {
			async getNewsLists() {
				const res = await this.$myRequest({
					url: "/shop/getNewsLists"
				})
				this.newsLists = res.data.result
			},
			newsDetail(id){
				uni.navigateTo({
					url:"../news/newsDetail?id="+id
				})
			}
		},
		onLoad() {
			this.getNewsLists()
		}
	}
</script>

<style lang="scss">
	
</style>
