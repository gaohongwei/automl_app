<template>
  <view>
    <EnglishPage>
      <view v-for="index in 100" :key="index">
        <view>单词 {{ index }}</view>
      </view>
    </EnglishPage>

  </view>
</template>

<script>
  import EnglishPage from "@/pages/english/English.vue"

  export default {
    components: {
      EnglishPage
    },
    data() {
      return {}
    },

  };
</script>