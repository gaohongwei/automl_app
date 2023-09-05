<template>
  <view class="links">
    <view class="link_item">
      <navigator url="/pages/automl/automl">AI</navigator>
    </view>
    <view class="link_item">
      <navigator url="/pages/MyProfile/MyProfile">My</navigator>
    </view>
    <view class="link_item">
      <navigator url="/pages/english/English">English</navigator>
    </view>
  </view>
</template>


<style lang="scss">
  .links {
    display: flex;
    direction: row;
    justify-content: space-around;

    .link_item {
      color: skyblue;
    }
  }
</style>