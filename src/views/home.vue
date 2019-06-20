<template>
  <div>
    <van-dialog closeOnClickOverlay title="添加新的账单" v-model="showAdd" :beforeClose="addNewBill">
      <div class="addBox">
        <van-cell-group>
          <van-field label="类型" v-model="type" placeholder="请输入消费类型" :error-message="typeError"/>
        </van-cell-group>
        <van-cell-group>
          <van-field label="金额" v-model="money" placeholder="请输入金额" :error-message="moneyError"/>
        </van-cell-group>
      </div>
    </van-dialog>
    <van-notice-bar text="通知内容" left-icon="volume-o"/>
    <van-list
      style="paddingBottom: 83px"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="item in list" :key="item.id" @click="output(item)">
        <van-cell :title="item.type" :value="`¥${item.money}`"/>
      </div>
    </van-list>

    <van-button class="add" icon="plus" type="primary" @click="showAdd = true"/>
  </div>
</template>
<script>
// import Vue from "vue";
import { SwipeCell, List, NoticeBar, Field } from "vant";
export default {
  mounted() {
    this.bill = localStorage.bill ? JSON.parse(localStorage.bill) : [];
    this.bill.forEach(item => {
      item.isHide = item.isHide || false;
    });
  },
  components: {
    [SwipeCell.name]: SwipeCell,
    [List.name]: List,
    [NoticeBar.name]: NoticeBar,
    [Field.name]: Field
  },
  data() {
    return {
      showAdd: false,
      bill: [],
      list: [],
      loading: false,
      finished: false,
      type: null,
      money: null,
      typeError: "",
      moneyError: ""
    };
  },
  methods: {
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
        console.log(this.list);
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.bill.length) {
          this.finished = true;
        }
      }, 1000);
    },
    addNewBill(action, done) {
      if (action == "overlay") {
        done();
        return;
      }
      if (action == "confirm") {
        this.typeError = this.type ? "" : "请输入类型";
        this.moneyError = this.money ? "" : "请输入金额";
        let right = Boolean(this.type && this.money);
        if (!right) {
          done(false);
          return;
        }
        let newArr = [
          {
            id: new Date().getTime(),
            type: this.type,
            money: this.money
          }
        ];
        this.bill = newArr.concat(this.bill);
        this.list = newArr.concat(this.list);
        localStorage.bill = JSON.stringify(this.bill);

        this.type = null;
        this.money = null;
        done(right);
      }
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
</style>


