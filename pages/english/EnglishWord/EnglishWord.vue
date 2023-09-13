<template>
  <view>

    <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="3" />
    <WordsCheck v-if="activeTab === 'wordsCheck'" />
    <WordsForget v-if="activeTab === 'wordsForget'" />


  </view>
</template>

<script>
  import WordsCheck from "@/pages/english/WordsCheck/WordsCheck.vue"
  import WordsForget from "@/pages/english/WordsForget/WordsForget.vue"
  import LevelxTab from '@/layouts/LevelxTab.vue';
  import EnglishPage from "@/pages/english/English.vue"
  import {
    tabsConfig
  } from "@/appConfig/tabsConfigEnglishWords.js"
  export default {
    components: {
      LevelxTab,
      EnglishPage,
      WordsCheck,
      WordsForget
    },
    data() {
      return {
        activeTab: "",
        tabsConfig: tabsConfig
      }
    },
    onLoad(options) {
      const key1 = Object.keys(options)[0];
      const tabValue = options[key1]
      this.activeTab = tabValue
    },

  };
</script>