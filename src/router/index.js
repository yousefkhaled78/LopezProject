import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView";
import MyForms from "../views/MyForms.vue";
import FormOne from "../views/FormOne.vue";
import FormTwo from "../views/FormTwo.vue";
import FormThree from "../views/FormThree.vue";
import MonthlyPackages from "../views/MonthlyPackages.vue";
import PayingOff from "../views/PayingOff";
import AddCard from "../views/AddCard.vue";
import MyRequests from "../views/MyRequests.vue";
import OrderDetails from "../views/OrderDetails.vue";
import MyAccount from "../views/MyAccount.vue";
import EditProfile from "../views/EditProfile.vue";
import ConnectUs from "../views/ConnectUs.vue";
import MyPortfolio from "../views/MyPortfolio.vue";
import AddPortfolio from "../views/AddPortfolio.vue";
import DoneActive from "@/views/DoneActive.vue";
import SaveMap from "@/views/SaveMap.vue";
import ChooseLocation from "@/views/ChooseLocation.vue";
import AddLocation from "@/views/AddLocation.vue";
import TheGoll from "@/views/TheGoll.vue";
import MapContent from "@/views/MapContent.vue";
import MyInhert from "@/views/MyInhert.vue";
import MyParent from "@/views/MyParent.vue";
import MyParenttwo from "@/views/MyParenttwo";
import MyNotifications from "@/views/MyNotifications";
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/",
    name: "myforms",
    component: MyForms,
  },
  {
    path: "/formone",
    name: "formone",
    component: FormOne,
  },
  {
    path: "/formtwo",
    name: "formtwo",
    component: FormTwo,
  },
  {
    path: "/formthree",
    name: "formthree",
    component: FormThree,
  },
  {
    path: "/monthlypackages",
    name: "monthlypackages",
    component: MonthlyPackages,
  },
  {
    path: "/payingoff",
    name: "payingoff",
    component: PayingOff,
  },
  {
    path: "/addcard",
    name: "addcard",
    component: AddCard,
  },
  {
    path: "/myrequests",
    name: "myrequests",
    component: MyRequests,
  },
  {
    path: "/orderdetails",
    name: "orderdetails",
    component: OrderDetails,
  },
  {
    path: "/myaccount",
    name: "myaccount",
    component: MyAccount,
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: EditProfile,
  },
  {
    path: "/connectus",
    name: "connectus",
    component: ConnectUs,
  },
  {
    path: "/myportfolio",
    name: "myportfolio",
    component: MyPortfolio,
  },
  {
    path: "/addportfolio",
    name: "addportfolio",
    component: AddPortfolio,
  },
  {
    path: "/doneactive",
    name: "doneactive",
    component: DoneActive,
  },
  {
    path: "/savemap",
    name: "savemap",
    component: SaveMap,
  },
  {
    path: "/chooselocation",
    name: "chooselocation",
    component: ChooseLocation,
  },
  {
    path: "/addlocation",
    name: "addlocation",
    component: AddLocation,
  },
  {
    path: "/thegoll",
    name: "thegoll",
    component: TheGoll,
  },
  {
    path: "/mapcontent",
    name: "mapcontent",
    component: MapContent,
  },
  {
    path: "/myinhert",
    name: "myinhert",
    component: MyInhert,
  },
  {
    path: "/myparent",
    name: "myparent",
    component: MyParent,
  },
  {
    path: "/myparenttwo",
    name: "myparenttwo",
    component: MyParenttwo,
  },
  {
    path: "/mynotifications",
    name: "mynotifications",
    component: MyNotifications,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
