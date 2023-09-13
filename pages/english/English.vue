<template>
  <view>
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="2" />
    <EnglishGrammer v-if="activeTab === 'grammer'" />
    <EnglishReading v-if="activeTab === 'reading'" />
    <EnglishWord v-if="activeTab === 'words'" />
    tab2{{tab2}}
  </view>
</template>

<script setup>
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import EnglishWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  import EnglishGrammer from "@/pages/english/EnglishGrammer/EnglishGrammer.vue"
  import EnglishReading from "@/pages/english/EnglishReading/EnglishReading.vue"
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"

  import {
    useQueryParamsStore
  } from '@/store/useQueryParamsStore.js';

  const store = useQueryParamsStore();
  const {
    tab2 = "words"
  } = store;


  const activeTab = tab2
  console.log('tab2', activeTab)
  const tabsConfig = tabsConfigEnglish
</script>