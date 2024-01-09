<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Shepherd Hook Backs</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li
            class="breadcrumb-item active title-cluster p-0"
            aria-current="page"
          >
            Shepherd Hook Backs
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <figure id="mang_area">
                <img
                  class="product-img-zom"
                  src="../assets/product_10_23c7ceee.webp"
                />
              </figure>
            </div>
            <div class="col-lg-3 col-md-3 product-inner-content">
              <div
                class="product-inner"
                @click="clusterimg"
                v-for="(gall, i) in gallery"
                :key="i"
              >
                <img
                  id="product-img-content"
                  :src="require(`../assets/${gall.img}`)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h4 class="title-cluster">Shepherd Hook Backs</h4>
          <ProdactItemtwo />
        </div>
      </div>
    </div>
  </section>
  <div class="title-home-elment mt-5">
    <div class="title-home">
      <h2>Related Products</h2>
    </div>
  </div>
  <CollapceComponent />
  <CardProdact />
  <div class="title-home-elment mt-5">
    <div class="title-home">
      <h2>Custom Collection</h2>
    </div>
  </div>
  <CardProdact />
  <FotterComponent />
</template>

<script>
import FotterComponent from "@/components/FotterComponent.vue";
import "vue3-carousel/dist/carousel.css";
import TheNav from "@/components/NavComponent.vue";
import CardProdact from "@/components/CardProdact.vue";
import CollapceComponent from "@/components/CollapceComponent.vue";
import ProdactItemtwo from "@/components/ProdactItemtwo.vue";
import $ from "jquery";

export default {
  components: {
    TheNav,
    FotterComponent,
    CardProdact,
    CollapceComponent,
    ProdactItemtwo,
  },
  data() {
    return {
      gallery: [
        {
          img: "product_10_23c7ceee.webp",
        },
        {
          img: "product_06_2100a7a9.webp",
        },
        {
          img: "product_05_.webp",
        },
        {
          img: "product_07_6ac5d96f.webp",
        },
      ],
    };
  },
  mounted() {
    var mang_area = document.getElementById("mang_area");
    var mang_image = document.querySelector(".product-img-zom");
    mang_area.addEventListener("mousemove", function (event) {
      var clientX = event.clientX - mang_area.offsetLeft;
      var clientY = event.clientY - mang_area.offsetTop;

      var mWidth = mang_area.offsetWidth;
      var mHeight = mang_area.offsetHeight;

      clientX = (clientX / mWidth) * 100;
      clientY = (clientY / mHeight) * 100;

      mang_image.style.transform =
        "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
    });
    mang_area.addEventListener("mouseleave", function () {
      mang_image.style.transform = "translate(-50%,-50%) scale(1)";
    });

    $(".product-inner-content .product-inner:first").addClass(
      "product-inner-2"
    );
    $(".product-inner #product-img-content:first").attr(
      "src",
      $(".product-img-zom").prop("src")
    );
    $("#product-img-content").attr("src", localStorage.getItem("shopimg"));
    $(".product-img-zom").prop("src", localStorage.getItem("shopimg"));
    $(".title-cluster").text(localStorage.getItem("shoptext"));
  },
  methods: {
    clusterimg(e) {
      $(e.target).parent().addClass("product-inner-2");
      $(e.target)
        .parent()
        .siblings(".product-inner")
        .removeClass("product-inner-2");
      $(".product-img-zom").attr("src", $(e.target).prop("src"));
    },
  },
};
</script>
