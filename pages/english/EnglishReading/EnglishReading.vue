<template>
  <view>
    <view v-for="index in 100" :key="index">
      <view>阅读 {{ index }}</view>
    </view>
  </view>
</template>

<script>
  import AuthedLayout from '@/layouts/AuthedLayout.vue';
  import TopMenu from '@/layouts/TopMenu.vue';
  export default {
    components: {
      AuthedLayout,
      TopMenu
    },
  };
</script>

<style lang="scss">

</style>