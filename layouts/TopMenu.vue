<template>
	<view class="tab-menu">
		<!-- Loop through tabBars and create tab buttons -->
		<view v-for="(tab, index) in tabBars" :key="index" class="tab-button"
			:class="{ active: tab.tabId === activeTabId }" @click="handleTabClick(tab)">
			{{ tab.label }}
		</view>
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
		methods: {
			handleTabClick(tab) {
				// Handle tab click, e.g., navigate to the tab's URL
				if (tab.url) {
					uni.navigateTo({
						url: tab.url
					});
				}
			},
		},
	};
</script>

<style scoped>
	/* Add styling for tab buttons, including active tab styling */
	.tab-menu {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		/* Style as needed */
	}

	.tab-button {
		flex: 1;
		text-align: center;
		padding: 10px;
		cursor: pointer;
	}

	.tab-button.active {
		background-color: #007aff;
		/* Style the active tab as needed */
		color: #fff;
	}
</style>