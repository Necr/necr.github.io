import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";

import { Button, Cell, CellGroup, Icon, Image, Row, Col, Dialog } from "vant";

Vue.use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Image)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Dialog);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
