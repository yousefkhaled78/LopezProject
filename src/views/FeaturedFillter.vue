<template>
  <TheNav />
  <div @click="popup" class="popup-card">
    <div class="popup-card-box">
      <h1 @click="exeitpopup" class="exeit-popup">x</h1>
      <div class="row">
        <div class="col-lg-6">
          <img class="popup-card-img" src="../assets/product_05_.webp" />
        </div>
        <div class="col-lg-6">
          <h5 class="mb-3 popup-title-card">ANTIQUE RING</h5>
          <h5 class="color-item fw-bold">$80.00</h5>
          <p class="mt-5 mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div class="select-content-prodact select-content-cardpopup">
            <p class="fw-bold mb-2">Size:</p>
            <select class="select-prodact select-card-popup">
              <option>m</option>
              <option>x</option>
              <option>l</option>
              <option>s</option>
            </select>
          </div>
          <div class="select-content-prodact select-content-cardpopup mt-4">
            <p class="fw-bold mb-2">Size:</p>
            <select class="select-prodact select-card-popup">
              <option>m</option>
              <option>x</option>
              <option>l</option>
              <option>s</option>
            </select>
          </div>
          <div class="d-flex gap-4 mt-4">
            <div class="prdact-minus-plus prdact-minus-plus-2">
              <fa @click="minusprdact" class="plus-number" icon="minus" />
              <p>{{ numberprdact }}</p>
              <fa class="plus-number" @click="numberprdact++" icon="plus" />
            </div>
            <a class="button-prodact" href="">ADD TO CARD</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="about-parent">
    <div class="about-parent-box">
      <h1 class="title-cluster">Products</h1>
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
            Products
          </li>
        </ol>
      </nav>
    </div>
  </section>
  <section class="margin-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h6 class="fw-bold mb-3">Availability</h6>
          <div class="cheak-filter-box">
            <div class="item-filter">
              <div @click="itemfilter" class="itemfilter-popup"></div>
              <fa icon="check" />
            </div>
            <p>In stock (31)</p>
          </div>
          <div class="cheak-filter-box">
            <div class="item-filter">
              <div @click="itemfilter" class="itemfilter-popup"></div>
              <fa icon="check" />
            </div>
            <p>Out of stock (19)</p>
          </div>
          <h6 class="fw-bold mb-3">Price</h6>
          <div class="row">
            <div class="col-lg-6">
              <div class="d-flex gap-1 align-items-center mb-3">
                <label>$</label>
                <input class="input-all mb-0" type="number" />
                <p>From</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="d-flex gap-1 align-items-center">
                <label>$</label>
                <input class="input-all mb-0" type="number" />
                <p>To</p>
              </div>
            </div>
            <div class="col-lg-12">
              <a href="" class="Filter-link">Filter</a>
            </div>
          </div>
          <div class="mt-5">
            <h6 class="fw-bold mb-3">Product Type</h6>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 8 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter2" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 1 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter3" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 3 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter4" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 4 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter5" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 5 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter6" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 6 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter7" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 7 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilter9" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Type 9 (1)</p>
            </div>
          </div>

          <div class="mt-5">
            <h6 class="fw-bold mb-3">Brand</h6>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 1 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 10 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 11 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 12 (1)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 2 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 3 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 4 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 5 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 6 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 7 (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>Vendor 8 (3)</p>
            </div>
          </div>

          <div class="mt-5">
            <h6 class="fw-bold mb-3">Color</h6>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>black (6)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>blue (10)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>gold (9)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>gray (9)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>green (10)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>magenta (6)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>maroon (6)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>navy (6)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>orange (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>pink (6)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>purple (6)</p>
            </div>
          </div>

          <div class="mt-5">
            <h6 class="fw-bold mb-3">Material</h6>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>fiber (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>leather (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>metal (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>resin (3)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>slag (3)</p>
            </div>
          </div>

          <div class="mt-5">
            <h6 class="fw-bold mb-3">Size</h6>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>s (12)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>m (15)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>l (15)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>xl (12)</p>
            </div>
            <div class="cheak-filter-box">
              <div class="item-filter">
                <div @click="itemfilteractive" class="itemfilter-popup"></div>
                <fa icon="check" />
              </div>
              <p>xxl (6)</p>
            </div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="d-flex justify-content-between">
            <div class="d-flex gap-3 align-items-center mb-5">
              <h5>Sort By:</h5>
              <div class="select-content-prodact select-content-filter">
                <select class="select-prodact select-filter pt-0">
                  <option>Alphabetically, Z-A</option>
                  <option>Featured</option>
                  <option>Best Selling</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                  <option>Date, new to old</option>
                </select>
              </div>
            </div>
            <div class="d-flex gap-3">
              <fa
                class="table-icon table-active"
                @click="tableicon"
                icon="table-cells"
              />
              <fa class="table-icon" @click="tableicon2" icon="bars" />
            </div>
          </div>
          <div class="card-collums">
            <div class="row">
              <div class="col-lg-12" v-for="(card, i) in cardhome" :key="i">
                <div class="card-collums-content">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="position-relative">
                        <img
                          class="card-img"
                          :src="require(`../assets/${card.img}`)"
                        />
                        <div class="eya-show-popup">
                          <fa
                            @click="eyapopup"
                            class="eya-item-popup"
                            icon="eye"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <h4 class="title-popop mb-3">{{ card.title }}</h4>
                      <h5>$80.00</h5>
                      <p class="mb-3 mt-3 text-callums-card">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </p>
                      <div class="d-flex gap-3">
                        <button @click="addcard" class="button-addcard">
                          ADD TO CARD
                        </button>
                        <div
                          class="prdact-minus-plus prdact-love button-addcard"
                        >
                          <fa
                            @click="showsetting"
                            class="home-icon-heart"
                            icon="heart"
                          />
                          <fa class="home-icon-gear" icon="gear" />
                          <fa
                            @click="hidecheck"
                            class="home-icon-check"
                            icon="check"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-row">
            <div class="row">
              <div
                class="col-lg-4 col-md-4 col-sm-6"
                v-for="(card, i) in cardhome"
                :key="i"
              >
                <div class="card-home">
                  <div class="card-img-content">
                    <img
                      class="card-img"
                      :src="require(`../assets/${card.img}`)"
                    />
                    <div class="shopping-card">
                      <div class="shopping-card-box">
                        <fa class="cart-icon-shopping" icon="cart-shopping" />
                        <fa
                          @click="showsetting"
                          class="home-icon-heart"
                          icon="heart"
                        />
                        <fa class="home-icon-gear" icon="gear" />
                        <fa
                          @click="hidecheck"
                          class="home-icon-check"
                          icon="check"
                        />
                        <fa class="home-icon-eye" icon="eye" />
                      </div>
                      <div class="days-content">
                        <div class="row">
                          <div
                            class="col-3"
                            v-for="(item, i) in card.dayes"
                            :key="i"
                          >
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
                  <div class="d-flex gap-1">
                    <h6>{{ card.texttype }}</h6>
                    <h6 :class="card.classtype">{{ card.type }}</h6>
                  </div>
                </div>
              </div>
            </div>
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
    TheNav,
    FotterComponent,
  },
  data() {
    return {
      numberprdact: 1,
      uum: "8",
      uum2: "1",
      uum3: "3",
      uum4: "4",
      uum5: "5",
      uum6: "6",
      uum7: "7",
      uum9: "9",
      cardhome: [
        {
          img: "product_15_9c8c2379-281a.webp",
          sallery: "$39.00",
          title: "Dangle Earrings",
          texttype: "Type",
          type: "8",
          classtype: "card-type",
        },
        {
          img: "product_25_53254.webp",
          sallery: "$50.00",
          title: "Threader Earrings",
          texttype: "Type",
          type: "1",
          classtype: "card-type2",
        },
        {
          img: "product_09_f55eee6c.webp",
          sallery: "$40.00 $85.00",
          title: "FASHION RING",
          texttype: "Type",
          type: "3",
          classtype: "card-type3",
        },
        {
          img: "product_10_23c7ceee.webp",
          sallery: "$79.00",
          title: "Hoop Earrings",
          texttype: "Type",
          type: "4",
          classtype: "card-type4",
        },
        {
          img: "product_16.webp",
          sallery: "$29.00",
          title: "Flush Setting Ring",
          texttype: "Type",
          type: "5",
          classtype: "card-type5",
        },
        {
          img: "product_18_118x.webp",
          sallery: "$29.00",
          title: "Huggie Earrings",
          texttype: "Type",
          type: "6",
          classtype: "card-type6",
        },
        {
          img: "product_06_2100a7a9.webp",
          sallery: "$55.00 $75.00",
          title: "CLUSTER RING",
          texttype: "Type",
          type: "7",
          classtype: "card-type7",
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
          img: "product_03_921acd3e.webp",
          sallery: "$55.00 $75.00",
          title: "COCKTAIL RING",
          texttype: "Type",
          type: "9",
          classtype: "card-type9",
        },
      ],
    };
  },
  mounted() {
    $("body").on("click", function () {
      $(".popup-card").fadeOut();
    });
  },
  methods: {
    popup(e) {
      e.stopPropagation();
    },
    eyapopup(e) {
      $(".popup-card").fadeIn();
      e.stopPropagation();
      $(".popup-card-img").prop(
        "src",
        $(e.target)
          .parent()
          .parent()
          .parent()
          .parent()
          .find(".card-img")
          .prop("src")
      );
      $(".popup-title-card").text(
        $(e.target)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .find(".title-popop")
          .text()
      );
    },
    exeitpopup() {
      $(".popup-card").fadeOut();
    },
    minusprdact() {
      this.numberprdact--;
      if (this.numberprdact == -1) {
        this.numberprdact = 1;
      }
    },
    addcard(e) {
      $(e.target).text("WAIT...");
      setInterval(function () {
        $(".button-addcard").text("ADD TO CARD");
      }, 1500);
    },
    tableicon(e) {
      $(e.target).parent().addClass("table-active");
      $(e.target).parent().siblings().removeClass("table-active");
      $(".card-collums").fadeOut();
      $(".card-row").fadeIn();
    },

    tableicon2(e) {
      $(e.target).parent().addClass("table-active");
      $(e.target).parent().siblings().removeClass("table-active");
      $(".card-collums").fadeIn();
      $(".card-row").fadeOut();
    },

    itemfilteractive(e) {
      $(e.target).parent().toggleClass("check-filter");
    },
    itemfilter(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum === $(".card-type").text()) {
          $(".card-type")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .hide();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter2(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum2 === $(".card-type2").text()) {
          $(".card-type2")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter3(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum3 === $(".card-type3").text()) {
          $(".card-type3")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter4(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum4 === $(".card-type4").text()) {
          $(".card-type4")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter5(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum5 === $(".card-type5").text()) {
          $(".card-type5")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter6(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum6 === $(".card-type6").text()) {
          $(".card-type6")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter7(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum7 === $(".card-type7").text()) {
          $(".card-type7")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
    itemfilter9(e) {
      $(e.target).parent().toggleClass("check-filter");
      if ($(".item-filter").hasClass("check-filter")) {
        if (this.uum9 === $(".card-type9").text()) {
          $(".card-type9")
            .siblings()
            .parent()
            .parent()
            .parent()
            .siblings()
            .fadeOut();
        }
      } else {
        $(".card-home").parent().fadeIn();
      }
    },
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
