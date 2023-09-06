<template>
  <view>
    <Level2Tab />
    {{activeTab}}
    <EnglistWord v-if="activeTab === 'words'" />
    <EnglistGrammer v-if="activeTab === 'grammer'" />
    <EnglistReading v-if="activeTab === 'reading'" />
  </view>
</template>

<script>
  import Level2Tab from '@/layouts/Level2Tab.vue';
  import EnglistWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  import EnglistGrammer from "@/pages/english/EnglishGrammer/EnglishGrammer.vue"
  import EnglistReading from "@/pages/english/EnglishReading/EnglishReading.vue"
  export default {
    components: {
      Level2Tab,
      EnglistWord,
      EnglistGrammer,
      EnglistReading
    },
    data() {
      return {
        activeTab: ''
      }
    },
    onLoad(options) {
      //const options = this.$route.query; // Assuming you're using Vue Router
      console.log('options', options)
      const key1 = Object.keys(options)[0];

      if (['words', 'grammar', 'reading'].includes(options[key1])) {
        this.activeTab = options[key1];
        console.log('tab2', options[key1])
      } else {
        // Handle invalid activeTab value here (e.g., set a default value)
        this.activeTab = 'words';
      }
    },
  };
</script>

<style lang="scss">

</style>