<template>
  <view>
    <AuthedLayout />
    {{activeTab}}
    <EnglistWord v-if="activeTab === 'words'" />
    <EnglistGrammer v-if="activeTab === 'grammer'" />
    <EnglistReading v-if="activeTab === 'reading'" />
  </view>
</template>

<script>
  import AuthedLayout from '@/layouts/AuthedLayout.vue';
  import TopMenu from '@/layouts/TopMenu.vue';
  import EnglistWord from "@/pages/english/EnglishWord/EnglishWord.vue"
  import EnglistGrammer from "@/pages/english/EnglishGrammer/EnglishGrammer.vue"
  import EnglistReading from "@/pages/english/EnglishReading/EnglishReading.vue"
  export default {
    components: {
      AuthedLayout,
      TopMenu,
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
      } else {
        // Handle invalid activeTab value here (e.g., set a default value)
        this.activeTab = 'grammer';
      }
    },
  };
</script>

<style lang="scss">

</style>