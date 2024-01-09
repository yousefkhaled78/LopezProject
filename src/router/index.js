import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/BlogContent",
    name: "BlogContent",
    component: () => import("../views/BlogContent.vue"),
  },
  {
    path: "/BlogtwoContent",
    name: "BlogtwoContent",
    component: () => import("../views/BlogtwoContent.vue"),
  },
  {
    path: "/BlogTemporibus",
    name: "BlogTemporibus",
    component: () => import("../views/BlogTemporibus.vue"),
  },
  {
    path: "/StandardBlog",
    name: "StandardBlog",
    component: () => import("../views/StandardBlog.vue"),
  },
  {
    path: "/BlogTags",
    name: "BlogTags",
    component: () => import("../views/BlogTags.vue"),
  },
  {
    path: "/ProductContent",
    name: "ProductContent",
    component: () => import("../views/ProductContent.vue"),
  },
  {
    path: "/CheakoutLopez",
    name: "CheakoutLopez",
    component: () => import("../views/CheakoutLopez.vue"),
  },
  {
    path: "/AcountLpeaz",
    name: "AcountLpeaz",
    component: () => import("../views/AcountLpeaz.vue"),
  },
  {
    path: "/SizeChart",
    name: "SizeChart",
    component: () => import("../views/SizeChart.vue"),
  },
  {
    path: "/ShippingPolicy",
    name: "ShippingPolicy",
    component: () => import("../views/ShippingPolicy.vue"),
  },
  {
    path: "/WishlistLopez",
    name: "WishlistLopez",
    component: () => import("../views/WishlistLopez.vue"),
  },
  {
    path: "/ClusterEarrings",
    name: "ClusterEarrings",
    component: () => import("../views/ClusterEarrings.vue"),
  },
  {
    path: "/BridalSet",
    name: "BridalSet",
    component: () => import("../views/BridalSet.vue"),
  },
  {
    path: "/AffiliateProduct",
    name: "AffiliateProduct",
    component: () => import("../views/AffiliateProduct.vue"),
  },
  {
    path: "/VariableProduct",
    name: "VariableProduct",
    component: () => import("../views/VariableProduct.vue"),
  },
  {
    path: "/SoldoutProduct",
    name: "SoldoutProduct",
    component: () => import("../views/SoldoutProduct.vue"),
  },
  {
    path: "/ShoppingCart",
    name: "ShoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/TopsTees",
    name: "TopsTees",
    component: () => import("../views/TopsTees.vue"),
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/HomeVersion2",
    name: "HomeVersion2",
    component: () => import("../views/HomeVersion2.vue"),
  },
  {
    path: "/FeaturedFillter",
    name: "FeaturedFillter",
    component: () => import("../views/FeaturedFillter.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
