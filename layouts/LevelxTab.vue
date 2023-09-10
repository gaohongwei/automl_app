<!-- copied uni-app from pages/template/tabbar/tabbar.nvue -->
<template>
  <view :class="['tab-menu',levelClass]">
    <view class="tabs">
      <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
        <view v-for="tab in tabBars" :key="tab.tabId" :class="['uni-tab-item',itemClass]" :id="tab.tabId"
          :data-active="tab.tabId" @click="ontabtap">
          <text class="uni-tab-item-title"
            :class="tab.tabId==activeTabId ? 'uni-tab-item-title-active' : ''">{{tab.label}}</text>
        </view>
      </scroll-view>
      <view class="line-h"></view>
    </view>
  </view>
</template>

<script>
  import {
    gotoUrl,
    getNewUrl,
    getQueryParams
  } from "./helper.js"

  export default {
    props: {
      tabsConfig: Object,
      activeTab: String,
      tabLevel: Number
    },
    data() {
      return {
        tabBars: this.tabsConfig.tabBars,
        activeTabId: this.activeTab,
        tabLevel: this.tabLevel
      }
    },
    created() {
      this.levelClass = `level${this.tabLevel}`
      this.itemClass = `itemLevel${this.tabLevel}`
    },
    watch: {
      activeTab(newVal, oldVal) {
        // This watcher will be called when the prop initialCount changes
        this.activeTabId = newVal
      },
    },
    methods: {
      ontabtap(e) {
        // console.log('this.tabsConfig', this.tabsConfig)
        const activeTabId = e.target.dataset.active || e.currentTarget.dataset.active;
        const activeTab = this.tabBars.find(tab => tab.tabId === activeTabId)

        const pages = getCurrentPages();
        const pageUrl = (pages[pages.length - 1]).route;
        // const pageUrl = window.location.href
        const queryParams = getQueryParams(pageUrl)
        console.log('pageUrl', pageUrl)
        console.log('queryParams', queryParams)
        if (!activeTab) {
          console.log('not found')
          return
        }

        if (activeTab.url) {
          gotoUrl(activeTab.url)
        } else {
          console.log('here')
          const newParams = {
            ...queryParams,
            tab2: activeTabId
          }
          const newUrl = getNewUrl(pageUrl, newParams)
          console.log('newUrl', newUrl)
          gotoUrl(newUrl)
        }
        this.activeTabId = activeTabId
      }
    },
  }
</script>
<style lang='scss'>
  .level1 {
    top: 0;
    z-index: 999;
    font-size: 45rpx;
  }

  .level2 {
    top: 0;
    z-index: 998;
    font-size: 40rpx;
  }

  .level3 {
    top: 80rpx;
    z-index: 997;
    font-size: 40rpx;
  }

  .itemLevel1,
  .itemLevel3 {}

  .itemLevel2 {
    background-color: lightgrey;
  }

  .tab-menu {
    position: sticky;

    .tabs {
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
        height: 10rpx;
        background-color: red;
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
        /*        font-size: 35rpx; */
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
  }
</style>