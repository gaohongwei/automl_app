<template>
  <view>
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="1" />
  </view>
</template>

<script setup>
  import {
    tabsConfig as _tabsConfig
  } from "@/appConfig/tabsConfigLevel1.js"
  import LevelxTab from '@/layouts/LevelxTab.vue';

  const props = defineProps({
    activeTab: String
  })
  const tabsConfig = _tabsConfig
</script>