<template>
  <view>
    <!--    <Level1Tab activeTab="english" /> -->
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="2" />
  </view>
</template>

<script setup>
  import Level1Tab from '@/layouts/Level1Tab.vue';
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"

  import {
    getFirstValue
  } from "@/helper/queryParams"

  let activeTab = ""
  const tabsConfig = tabsConfigEnglish

  const onLoad = (options) => {
    activeTab = options['tab2'] || 'words'
    console.log('onLoad')
    console.log('activeTab', activeTab)
  }
</script>