<template>
  <view>
    <EnglishPage>
      <LevelxTab :tabsConfig="tabsConfig" :activeTab="activeTab" :tabLevel="3" />
      <!--      <view v-for="index in 100" :key="index">
        <view>单词 {{ index }}</view>
      </view> -->
      <WordsCheck v-if="activeTab === 'wordsCheck'" />
      <WordsForget v-if="activeTab === 'wordsForget'" /> -->
    </EnglishPage>

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