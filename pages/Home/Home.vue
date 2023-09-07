<template>
  <view>
    <view>
      <Level1Tab />
    </view>
    <!--    <English v-if="activeTab === 'english'" />
    <Automl v-if="activeTab === 'automl'" /> -->
  </view>
</template>

<script>
  import Level1Tab from '@/layouts/Level1Tab.vue';
  // import Automl from "@/pages/automl/automl.vue"
  // import English from "@/pages/english/English.vue"
  // import TopLinks from "@/components/TopLinks.vue"

  export default {
    components: {
      Level1Tab,
      // English,
      // Automl,
      // TopLinks
    },
    data() {
      return {
        activeTab: ''
      }
    },
    onLoad(options) {
      //const options = this.$route.query; // Assuming you're using Vue Router
      const key1 = Object.keys(options)[0];

      if (['english', 'automl'].includes(options[key1])) {
        this.activeTab = options[key1];
        console.log('tab1', options[key1])
      } else {
        // Handle invalid activeTab value here (e.g., set a default value)
        this.activeTab = 'english';
      }
    },
  }
</script>

<style>
  .centered-view {
    height: 20px;
    position: skicky;
    /* Position the element absolutely */
    top: 0;
    left: 50%;
    /* Center horizontally at 50% of the viewport width */
    transform: translate(-50%, -50%);
    /* Adjust for element dimensions */
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>