<template>
  <view>
    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="3" />
    <WordsCheck v-if="activeTab === 'wordsCheck'" />
    <WordsForget v-if="activeTab === 'wordsForget'" />
    tab3{{tab3}}
  </view>
</template>

<script setup>
  import WordsCheck from "@/pages/english/WordsCheck/WordsCheck.vue"
  import WordsForget from "@/pages/english/WordsForget/WordsForget.vue"
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import {
    tabsConfig
  } from "@/appConfig/tabsConfigEnglishWords.js"

  import {
    useQueryParamsStore
  } from '@/store/useQueryParamsStore.js';

  const store = useQueryParamsStore();
  const {
    tab3 = 'wordsCheck'
  } = store;
  const activeTab = tab3
</script>