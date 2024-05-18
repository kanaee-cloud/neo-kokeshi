import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "../views/Cart.vue";
import Detail from "../views/Detail.vue";
import Home from "../views/Home.vue";
import Transaction from "../views/Transaction.vue";
import Product from "../views/Product.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/transaction",
      name: "transaction",
      component : Transaction
    },
    {
      path: "/product",
      name: "product",
      component: Product
    }
  ],
});

export default router;
