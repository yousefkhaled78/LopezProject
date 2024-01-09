<template>
  <TheNav />
  <section class="about-parent">
    <div class="about-parent-box">
      <h1>Flush Setting Ring</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="http://localhost:8080/">Home</a>
          </li>
          <li class="breadcrumb-item active p-0" aria-current="page">/</li>
          <li class="breadcrumb-item active p-0" aria-current="page">
            FLUSH SETTING RING
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
                <img class="product-img-zom" src="../assets/product_16.webp" />
              </figure>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="product-inner">
                <div
                  id="product-img-content"
                  :data-target="gall.targetimg"
                  @click="productimg"
                  :class="gall.class"
                  v-for="(gall, i) in gallery"
                  :key="i"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h3>Flush Setting Ring</h3>
          <ProdactItem />
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
import CollapceComponent from "@/components/CollapceComponent.vue";
import CardProdact from "@/components/CardProdact.vue";
import ProdactItem from "@/components/ProdactItem.vue";
import $ from "jquery";

export default {
  components: {
    TheNav,
    CollapceComponent,
    FotterComponent,
    CardProdact,
    ProdactItem,
  },
  data() {
    return {
      numberprdact: 1,
      gallery: [
        {
          class: "product-img-toggle",
          targetimg: "http://localhost:8080/img/product_16.8012de6d.webp",
        },
        {
          class: "product-img-content-two",
          targetimg: "http://localhost:8080/img/product_17.cbdd33d7.webp",
        },
        {
          class: "product-img-content-three",
          targetimg:
            "data:image/webp;base64,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",
        },
        {
          class: "product-img-content-four",
          targetimg:
            "data:image/webp;base64,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",
        },
      ],
      settings: {
        itemsToShow: 4,
        snapAlign: "start",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    productimg(e) {
      $(e.target).addClass("product-img-toggle");
      $(e.target).siblings().removeClass("product-img-toggle");
      $(".product-img-zom").attr("src", $(e.target).data("target"));
    },
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
      // mang_image.style.transform = "translate(-50%,-50%) scale(2)";
    });
    mang_area.addEventListener("mouseleave", function () {
      mang_image.style.transform = "translate(-50%,-50%) scale(1)";
    });
  },
};
</script>

<style scoped>
.carousel__item {
  margin-right: 20px;
}
</style>
