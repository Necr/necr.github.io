<template>
  <div>
    <van-popup v-model="showPop" style="width: 100%">
      <div class="addBox"></div>
    </van-popup>
    <van-notice-bar text="通知内容" left-icon="volume-o"/>
    <van-skeleton title :row="7" :loading="loading">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="(item, index) in list" :key="item.id" @click="output(item, index)">
          <van-swipe-cell :right-width="60" v-if="!item.isHide">
            <van-cell :title="item.type" :value="item.money"/>
            <van-button square slot="right" type="danger" text="隐藏" @click="hideThis(index)"/>
          </van-swipe-cell>
        </div>
      </van-list>
    </van-skeleton>

    <van-button class="add" icon="plus" type="primary" @click="showPop = true"/>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Button,
  Popup,
  SwipeCell,
  Cell,
  List,
  Skeleton,
  NoticeBar
} from "vant";
export default {
  mounted() {
    this.bill = localStorage.bill ? JSON.parse(localStorage.bill) : [];
    this.bill.forEach(item => {
      item.isHide = item.isHide || false;
    });
  },
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [List.name]: List,
    [Skeleton.name]: Skeleton,
    [NoticeBar.name]: NoticeBar
  },
  data() {
    return {
      showPop: false,
      bill: [],
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    hideThis(index) {
      let newItem = this.bill[index];
      newItem.isHide = !this.bill[index].isHide;
      Vue.set(this.bill, index, newItem);
      localStorage.bill = JSON.stringify(this.bill);
    },
    output() {
      console.log(...arguments, this.bill);
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          if (this.bill[this.list.length]) {
            this.list.push(this.bill[this.list.length]);
          }
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.bill.length) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>
.add {
  position: fixed;
  right: 0;
  bottom: calc(83px + 50px);
}
.addBox {
  min-height: 200px;
}
</style>


