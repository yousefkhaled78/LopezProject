<template>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6"
          v-for="(card, i) in cardhome"
          :key="i"
        >
          <div class="card-home">
            <div class="card-img-content">
              <img class="card-img" :src="require(`../assets/${card.img}`)" />
              <div class="shopping-card">
                <div class="shopping-card-box">
                  <fa class="cart-icon-shopping" icon="cart-shopping" />
                  <fa
                    @click="showsetting"
                    class="home-icon-heart"
                    icon="heart"
                  />
                  <fa class="home-icon-gear" icon="gear" />
                  <fa @click="hidecheck" class="home-icon-check" icon="check" />
                  <fa class="home-icon-eye" icon="eye" />
                </div>
                <div class="days-content">
                  <div class="row">
                    <div class="col-3" v-for="(item, i) in card.dayes" :key="i">
                      <div class="day-box">
                        <h6>{{ item.daynumber }}</h6>
                        <h6>{{ item.daytext }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 class="mt-3">{{ card.sallery }}</h6>
            <h6 class="mt-2 mb-2">{{ card.title }}</h6>
            <h6>{{ card.type }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      galleryimg: [
        {
          img: "banner_01_77a4cdbb-5b8a-4e0d-b5fe-c50c90702ecf.webp",
        },
        {
          img: "banner_02_ad6c3e38-26b9.webp",
        },
      ],
      cardhome: [
        {
          img: "product_25_53254.webp",
          sallery: "$39.00 $60.00",
          title: "Dangle Earrings",
          type: "Type 8",
          dayes: [
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
            {
              daynumber: "0",
              daytext: "Days",
            },
          ],
        },
        {
          img: "product_16.webp",
          sallery: "$50.00",
          title: "Threader Earrings",
          type: "Type 5",
        },
        {
          img: "product_08_eb087117.webp",
          sallery: "$40.00 $85.00",
          title: "FASHION RING",
          type: "Type 3",
        },
        {
          img: "product_02_ed8dd1bf.webp",
          sallery: "$79.00",
          title: "Hoop Earrings",
          type: "Type 9",
        },
        {
          img: "product_06_2100a7a9.webp",
          sallery: "$29.00",
          title: "Flush Setting Ring",
          type: "Type 7",
        },
        {
          img: "product_01_826b.webp",
          sallery: "$29.00",
          title: "Huggie Earrings",
          type: "Type 7",
        },
        {
          img: "product_24_9106429b.webp",
          sallery: "$55.00 $75.00",
          title: "CLUSTER RING",
          type: "Type 6",
        },
        {
          img: "product_19_118x.webp",
          sallery: "$55.00 $75.00",
          title: "COCKTAIL RING",
          type: "Type 6",
        },
      ],
    };
  },
  mounted() {
    setInterval(function () {
      $(".carousel-container").fadeIn(1000);
    }, 1000);
  },
  methods: {
    showsetting(e) {
      $(e.target)
        .parent()
        .siblings(".home-icon-gear")
        .animate(
          { borderSpacing: 360 },
          {
            step: function (now) {
              $(this).css("transform", "rotate(" + now + "deg)");
            },
            duration: 1000,
            complete: function () {
              $(".home-icon-gear").hide();
              $(e.target).parent().siblings(".home-icon-check").show();
            },
          }
        );
      $(e.target).parent().hide();
      $(e.target).parent().siblings(".home-icon-gear").show();
      $(e.target)
        .parent()
        .siblings(".home-icon-gear")
        .addClass("seating-rotete");
    },
    hidecheck(e) {
      $(e.target).hide();
      $(".home-icon-heart").show();
    },
  },
};
</script>
