<!-- copied from pages/template/tabbar/tabbar.nvue -->
<template>
  <view class="tab-menu">
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
    {{activeTabId}}
  </view>

</template>
<script>
  import {
    tabsConfig,
    tabBarPaths
  } from "@/appConfig/level1TabsConfig.js"
  import {
    getNewUrl,
    getQueryParams
  } from "./helper.js"


  export default {
    data() {
      return {
        scrollInto: null,
        tabBars: tabsConfig.tabBars,
        activeTabId: tabsConfig.activeTabId,
        currentURL: "",
        queryParams: {}
      }

    },
    mounted(options) {
      console.log('mounted', options);
    },
    created(options) {
      console.log('created', options);
    },
    methods: {

      ontabtap(e) {
        const activeTabId = e.target.dataset.active || e.currentTarget.dataset.active;
        const activeTab = this.tabBars.find(tab => tab.tabId === activeTabId)


        const pages = getCurrentPages();
        const pageUrl = (pages[pages.length - 1]).route;
        // const pageUrl = window.location.href
        const queryParams = getQueryParams(pageUrl)

        if (!activeTab) {
          console.log('not found')
          return
        }
        if (activeTab.url) {
          // redirectTo will skip tabBar
          // navigateTo, navigateTo:fail webview count limit exceed
          // switchTab only apply to pages with tabBar
          if (tabBarPaths.includes(activeTab.url)) {
            uni.switchTab({
              url: activeTab.url
            })
          } else {
            uni.redirectTo({
              url: activeTab.url
            })
          }
        } else {
          const newParams = {
            ...queryParams,
            tab1: activeTabId
          }
          const newUrl = getNewUrl(pageUrl, newParams)
          console.log('newUrl', newUrl)
          uni.redirectTo({
            url: newUrl
          })
        }
        this.activeTabId = activeTabId
        //
      }
    },
  }
</script>

<style lang='scss'>
  .tab-menu {
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    height: 160rpx;

    .tabs {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: #ffffff;
      /* same height as title */
      /* #ifndef APP-PLUS */
      /*      height: 80rpx; */
      /* #endif */


      .scroll-h {
        width: 750rpx;
        /* #ifdef H5 */
        width: 100%;
        /* #endif */
        /*        height: 80rpx; */
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
        font-size: 30rpx;
        /*        height: 80rpx; */
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