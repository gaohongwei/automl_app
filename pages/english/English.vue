<template>
  <view>
    <!--    <Level1Tab activeTab="english" /> -->
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="2" />
    <EnglishWord v-if="activeTab === 'words'" />
    EnglishWord{{tab2}}
  </view>
</template>

<script setup>
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import EnglishWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"

  import {
    useQueryParamsStore
  } from '@/store/useQueryParamsStore.js';

  const store = useQueryParamsStore();
  const {
    tab2
  } = store;


  const activeTab = tab2
  console.log('tab2', activeTab)
  const tabsConfig = tabsConfigEnglish
</script>