<template>
  <view>
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="1" />
  </view>
</template>

<script>
  import {
    tabsConfig
  } from "@/appConfig/tabsConfigLevel1.js"
  import LevelxTab from '@/layouts/LevelxTab.vue';

  export default {
    props: {
      activeTab: String
    },
    components: {
      LevelxTab
    },
    data() {
      return {
        tabsConfig: tabsConfig
      }
    },
  }
</script>