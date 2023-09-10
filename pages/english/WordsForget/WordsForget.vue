<template>
  <view v-for="index in 100" :key="index">
    <view>Words Forget {{ index }}</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>

</style>