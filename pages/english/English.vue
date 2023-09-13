<template>
  <view>
    <!--    <Level1Tab activeTab="english" /> -->
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="2" />
    <EnglishWord />
  </view>
</template>

<script setup>
  import Level1Tab from '@/layouts/Level1Tab.vue';
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import EnglishWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"

  import {
    getFirstValue
  } from "@/helper/queryParams"

  import {
    useQueryParamsStore
  } from '@/store/useQueryParamsStore.js';

  const store = useQueryParamsStore();
  const {
    tab1,
    tab2
  } = store;


  console.log('tab1', tab1)
  console.log('tab2', tab2)


  let activeTab = tab2
  const tabsConfig = tabsConfigEnglish

  // const onLoad = (options) => {
  //   activeTab = options['tab2'] || 'words'
  //   console.log('onLoad')
  //   console.log('activeTab', activeTab)
  // }
</script>