<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar safe-area-inset-bottom active-color="#07c160" route>
      <van-tabbar-item replace to="/home" icon="home-o">记账</van-tabbar-item>
      <van-tabbar-item replace to="/bill" icon="balance-list-o">账单</van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "app",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
