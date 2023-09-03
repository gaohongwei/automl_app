<!-- copied from pages/template/tabbar/tabbar.nvue -->
<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false"
			:scroll-into-view="scrollInto">
			<view v-for="tab in tabBars" :key="tab.tabId" class="uni-tab-item" :id="tab.tabId" :data-active="tab.tabId"
				@click="ontabtap">
				<text class="uni-tab-item-title"
					:class="tab.tabId==activeTabId ? 'uni-tab-item-title-active' : ''">{{tab.label}}</text>
			</view>
		</scroll-view>
		<view class="line-h"></view>
	</view>
</template>
<script>
	import {
		tabsConfig
	} from "@/appConfig/tabsConfig.js"

	export default {
		data() {
			console.log('tabsConfig', tabsConfig)
			return {
				tabBars: tabsConfig.tabBars,
				activeTabId: tabsConfig.activeTabId
			}

		},
		mounted() {
			// similar to onReady of Page
		},
		methods: {
			ontabtap(e) {
				const activeTabId = e.target.dataset.active || e.currentTarget.dataset.active;
				const activeTab = this.tabBars.find(tab => tab.tabId === activeTabId)
				this.activeTabId = activeTabId
				if (activeTab && activeTab.url) {
					console.log('url', activeTab.url)
					uni.redirectTo({


						url: activeTab.url
					})
				} else {
					console.log('not found')
					return
				}
			},
		}
	}
</script>

<style lang='scss' scoped>
	.tabs {
		z-index: 99;
		position: fixed;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* same height as title */
		/* #ifndef APP-PLUS */
		height: 80rpx;
		/* #endif */


		.scroll-h {
			width: 750rpx;
			/* #ifdef H5 */
			width: 100%;
			/* #endif */
			height: 80rpx;
			flex-direction: row;
			/* #ifndef APP-PLUS */
			white-space: nowrap;
			/* #endif */
			/* flex-wrap: nowrap; */
			/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
		}

		.line-h {
			height: 1rpx;
			background-color: #cccccc;
		}

		.uni-tab-item {
			/* #ifndef APP-PLUS */
			display: inline-block;
			/* #endif */
			flex-wrap: nowrap;
			padding-left: 34rpx;
			padding-right: 34rpx;
		}

		.uni-tab-item-title {
			color: #555;
			font-size: 30rpx;
			height: 80rpx;
			line-height: 80rpx;
			flex-wrap: nowrap;
			/* #ifndef APP-PLUS */
			white-space: nowrap;
			/* #endif */
		}

		.uni-tab-item-title-active {
			color: #007AFF;
		}

		.swiper-box {
			flex: 1;
		}

		.swiper-item {
			flex: 1;
			flex-direction: row;
		}

		.scroll-v {
			flex: 1;
			/* #ifndef MP-ALIPAY */
			flex-direction: column;
			/* #endif */
			width: 750rpx;
			width: 100%;
		}
	}
</style>