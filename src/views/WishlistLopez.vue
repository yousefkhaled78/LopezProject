<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>Wishlist</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">
            Wishlist
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="wishlist-elment">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(gall, i) in gallery" :key="i">
            <a :href="gall.href">
              <div class="wishlist-content">
                <div class="wishlist-content-img">
                  <div class="wishlist-check">
                    <fa class="wishlist-icon-check" icon="check" />
                  </div>
                  <div class="wishlist-check wishlist-cart-shopping">
                    <fa
                      class="wishlist-icon-check wish-sho"
                      icon="cart-shopping"
                    />
                  </div>
                  <img
                    @click="wishlistlocalstorage"
                    class="wishlist-img"
                    :src="require(`../assets/${gall.img}`)"
                  />
                </div>
                <h5 class="wishlist-title">{{ gall.title }}</h5>
                <p class="wishlist-sallry">{{ gall.sallry }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FotterComponent />
</template>

<script>
import FotterComponent from "@/components/FotterComponent.vue";
import TheNav from "@/components/NavComponent.vue";
import $ from "jquery";

export default {
  components: {
    FotterComponent,
    TheNav,
  },
  data() {
    return {
      gallery: [
        {
          img: "product_03_921acd3e.webp",
          title: "Cluster Earrings",
          sallry: "$19.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_01_826b.webp",
          title: "CLUSTER RING",
          sallry: "$55.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_02_ed8dd1bf.webp",
          title: "CLADDAGH RING",
          sallry: "$79.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_13_3a661b25-.webp",
          title: "Pearls & Gold Unique Choker",
          sallry: "$19.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_11_326x.webp",
          title: "Unique Persian Choker",
          sallry: "$39.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_24_9106429b.webp",
          title: "COCKTAIL RING",
          sallry: "$55.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_15_9c8c2379-281a.webp",
          title: "Threader Earrings",
          sallry: "$50.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_17.webp",
          title: "ESTATE RING",
          sallry: "$110.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_14_befc8e36.webp",
          title: "ANTIQUE RING",
          sallry: "$80.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
        {
          img: "product_16.webp",
          title: "Flush Setting Ring",
          sallry: "$29.00",
          href: "http://localhost:8080/#/ClusterEarrings",
        },
      ],
    };
  },
  methods: {
    wishlistlocalstorage(e) {
      localStorage.setItem("wishlistlocalstorage", $(e.target).prop("src"));
      localStorage.setItem(
        "wishlisttitle",
        $(e.target).parent().siblings(".wishlist-title").text()
      );
    },
  },
};
</script>
