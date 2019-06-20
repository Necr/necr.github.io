<template>
  <div>
    <van-button class="add" type="primary" @click="clear">清除缓存</van-button>
    <van-button class="add" type="primary" @click="reset">重置隐藏</van-button>
  </div>
</template>
<script>
export default {
  methods: {
    clear() {
      localStorage.removeItem("bill");
    },
    reset() {
      let bill = JSON.parse(localStorage.bill);
      bill.forEach(item => (item.isHide = false));
      localStorage.bill = JSON.stringify(bill);
    }
  }
};
</script>
<style scoped>
</style>


