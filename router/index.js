import OrderHistory from "@/components/OrderHistory.vue";

export default new VueRouter({
  routes: [
    {
      path: "/order-history",
      name: "OrderHistory",
      component: OrderHistory,
    },
  ],
});