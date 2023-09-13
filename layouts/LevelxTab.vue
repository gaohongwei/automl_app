<!-- copied uni-app from pages/template/tabbar/tabbar.nvue -->
<template>
  <view :class="['tab-menu', levelClass]">
    <view class="tabs">
      <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
        <view v-for="tab in tabBars" :key="tab.tabId" :class="['uni-tab-item', itemClass]" :id="tab.tabId"
          :data-active="tab.tabId" @click="ontabtap(tab)">
          <text class="uni-tab-item-title"
            :class="tab.tabId == activeId ? 'uni-tab-item-title-active' : ''">{{ tab.label }}</text>
        </view>
      </scroll-view>
      <view class="line-h"></view>

    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    gotoUrl,
    getNewUrl,

  } from "@/helper/helper.js";

  import {
    useQueryParamsStore
  } from '@/store/useQueryParamsStore.js';

  const props = defineProps({
    tabsConfig: Object,
    activeTab: String,
    tabLevel: Number,
  });

  const store = useQueryParamsStore();

  const tabBars = props.tabsConfig.tabBars;
  const activeTab = props.activeTab; // Create a ref to store the activeTab prop
  const activeId = ref(activeTab)
  // let activeId = "words"
  //activeTab?.tabId;

  const tabLevel = props.tabLevel;
  const levelClass = `level${tabLevel}`;
  const itemClass = `itemLevel${tabLevel}`;


  const ontabtap = (selectedTab) => {
    if (!selectedTab) {
      console.log("not found");
      return;
    }

    if (selectedTab.url) {
      gotoUrl(selectedTab.url);
    } else {
      const newParams = {
        tab2: selectedTab.tabId,
      };
      const newUrl = getNewUrl(newParams);
      gotoUrl(newUrl);
    }
    // activeId.value = selectedTab.tabId;;
    store.setTab({
      tabLevel,
      tabValue: selectedTab.tabId
    })
  };
</script>

<style lang="scss">
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
        color: #007aff;
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