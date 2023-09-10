<template>
  <view>
    <Level1Tab activeTab="english" />
    <LevelxTab :tabsConfig="tabsConfigEnglish" :activeTab="activeTab" :tabLevel="2" />
    <!--    <LevelxTab :tabsConfig="tabsConfigEnglish" :activeTab="activeTab" :tabLevel="3" /> -->
    <!--    <EnglistWord v-if="activeTab === 'words'" />
    <EnglistGrammer v-if="activeTab === 'grammer'" />
    <EnglistReading v-if="activeTab === 'reading'" /> -->
    <slot></slot>
  </view>
</template>

<script>
  import Level1Tab from '@/layouts/Level1Tab.vue';
  import LevelxTab from '@/layouts/LevelxTab.vue';
  // import EnglistWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  // import EnglistGrammer from "@/pages/english/EnglishGrammer/EnglishGrammer.vue"
  // import EnglistReading from "@/pages/english/EnglishReading/EnglishReading.vue"
  import {
    tabsConfig as tabsConfigEnglish
  } from "@/appConfig/tabsConfigEnglish.js"
  // tabsConfig is accessible in js, but not in view
  // do not need this for props

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
      //const options = this.$route.query; // Assuming you're using Vue Router
      console.log('onLoad options', options)
      const key1 = Object.keys(options)[0];
      const tabValue = options[key1]
      this.activeTab = tabValue
      console.log("\n\nEnglish activeTab", this.activeTab)
    },
  };
</script>


<style lang="scss">

</style>