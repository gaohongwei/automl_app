<template>
  <view>
    <!--    <Level1Tab activeTab="english" /> -->
    <LevelxTab :tabsConfig="tabsConfigEnglish" :activeTab="activeTab" :tabLevel="2" />
    <slot></slot>
  </view>
</template>

<script>
  import Level1Tab from '@/layouts/Level1Tab.vue';
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"

  import {
    getFirstValue
  } from "@/helper/queryParams"

  export default {
    components: {
      Level1Tab,
      LevelxTab,
      // EnglistWord,
      // EnglistGrammer,
      // EnglistReading
    },
    data() {
      return {
        activeTab: "",
        tabsConfig: tabsConfigEnglish,
        tabsConfigEnglish: tabsConfigEnglish
      }
    },
    onLoad(options) {
      this.activeTab = getFirstValue(options)
    },
  };
</script>