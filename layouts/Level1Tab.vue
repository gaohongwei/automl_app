<template>
  <view class="tab-menu">
    <scroll-view id="tab-bar" class="tabs" :scroll-x="true" enable-flex="true" :show-scrollbar="false">
      <view v-for="tab in tabBars" :key="tab.tabId" class="uni-tab-item" :id="tab.tabId" :data-active="tab.tabId"
        @click="ontabtap">
        <text class="uni-tab-item-title"
          :class="tab.tabId==activeTabId ? 'uni-tab-item-title-active' : ''">{{tab.label}}</text>
      </view>

    </scroll-view>
    <view class="line-h"></view>
  </view>
</template>
<style lang='scss'>
  .tab-menu {
    .line-h {
      height: 1rpx;
      background-color: red;
    }

    .tabs {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 30px;

      .uni-tab-item {

        .uni-tab-item-title {
          color: #555;
          font-size: 40rpx;
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
      }
    }
  }
</style>

<script>
  import {
    tabsConfig,
    tabBarPaths
  } from "@/appConfig/tabsConfigLevel1.js"
  import {
    gotoUrl,
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
    // mounted(options) {
    //   console.log('mounted', options);
    // },
    // created(options) {
    //   console.log('created', options);
    // },
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
          console.log('next url', activeTab.url)
          gotoUrl(activeTab.url)

        } else {
          console.log('no Url')
          // const newParams = {
          //   ...queryParams,
          //   tab1: activeTabId
          // }
          // const newUrl = getNewUrl(pageUrl, newParams)
          // console.log('newUrl', newUrl)
          // uni.redirectTo({
          //   url: newUrl
        }

        this.activeTabId = activeTabId
        //
      }
    },
  }
</script>