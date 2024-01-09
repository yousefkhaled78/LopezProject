<template>
  <div class="container">
    <header>
      <a href="">
        <img class="logo-header" src="../assets/color-logo_167x.png" />
      </a>
      <ul class="header-link">
        <li class="link-item">
          <div class="mix-minus-plus">
            <fa icon="plus" @click="plusheader" class="header-plus" />
            <fa @click="minusheader" class="minus-header" icon="minus" />
          </div>
          <router-link class="link-show" to="/">Home</router-link>
          <hr class="header-hr" />
          <ul class="item-header-link">
            <li>
              <router-link to="/">Home Version 1</router-link>
            </li>
            <li>
              <router-link to="HomeVersion2">Home Version 2</router-link>
            </li>
          </ul>
        </li>
        <li class="link-item">
          <div class="mix-minus-plus">
            <fa icon="plus" @click="plusheader" class="header-plus" />
            <fa @click="minusheader" class="minus-header" icon="minus" />
          </div>
          <router-link class="link-show" to="FeaturedFillter">Shop</router-link>
          <hr class="header-hr" />
          <div class="item-header-link item-header-link-2">
            <div class="header-shop-inner">
              <div>
                <div class="plas-content">
                  <h5 class="shoes">SHOES</h5>
                  <div>
                    <fa
                      @click="shoesplusclick"
                      class="shoes-plus"
                      icon="plus"
                    />
                    <fa
                      @click="shoesminusclick"
                      class="minus-header minus-header-shoes"
                      icon="minus"
                    />
                  </div>
                </div>
                <ul class="mt-4 shoes-header">
                  <li>
                    <router-link @click="TopsTees" to="TopsTees"
                      >Tops & Tees</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="uniquechoker" to="TopsTees"
                      >Polo Short Sleeve</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="graphic" to="TopsTees"
                      >Graphic T-Shirts</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="jackets" to="TopsTees"
                      >Jackets & Coats</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="Fashion" to="TopsTees"
                      >Fashion Jackets</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="gens-content">
                <div class="plas-content">
                  <h5 class="shoes">JEANS</h5>
                  <div>
                    <fa
                      @click="shoesplusclick"
                      class="shoes-plus"
                      icon="plus"
                    />
                    <fa
                      @click="shoesminusclick"
                      class="minus-header minus-header-shoes"
                      icon="minus"
                    />
                  </div>
                </div>
                <ul class="mt-4 shoes-header">
                  <li>
                    <router-link @click="Crochet" to="TopsTees"
                      >Crochet</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="Fashion" to="TopsTees"
                      >Sleeveless</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="Fashion" to="TopsTees"
                      >Stripes</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="Fashion" to="TopsTees"
                      >Sweaters</router-link
                    >
                  </li>
                  <li>
                    <router-link @click="Crochet" to="TopsTees"
                      >Hoodies</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="link-item">
          <div class="mix-minus-plus">
            <fa icon="plus" @click="plusheader" class="header-plus" />
            <fa @click="minusheader" class="minus-header" icon="minus" />
          </div>
          <router-link to="ProductContent" class="link-show"
            >Product</router-link
          >
          <hr class="header-hr" />
          <ul class="item-header-link">
            <li>
              <router-link to="BridalSet">Simple Product</router-link>
            </li>
            <li>
              <router-link to="AffiliateProduct">Affiliate Product</router-link>
            </li>
            <li>
              <router-link to="VariableProduct">Variable Product</router-link>
            </li>
            <li>
              <router-link to="SoldoutProduct">Soldout Product</router-link>
            </li>
          </ul>
        </li>
        <li class="link-item">
          <div class="mix-minus-plus">
            <fa icon="plus" @click="plusheader" class="header-plus" />
            <fa @click="minusheader" class="minus-header" icon="minus" />
          </div>
          <router-link to="BlogContent" class="link-show">Blog</router-link>
          <hr class="header-hr" />
          <ul class="item-header-link">
            <li>
              <router-link to="BlogContent">Blog</router-link>
            </li>
            <li>
              <router-link to="BlogTemporibus">Blog Details</router-link>
            </li>
          </ul>
        </li>
        <li class="link-item">
          <router-link to="about">About Us</router-link>
          <hr class="header-hr" />
        </li>
        <li class="link-item">
          <router-link to="ContactUs">Contact Us</router-link>
        </li>
      </ul>
      <div class="btons-header">
        <div class="search-header">
          <fa
            @click="showsearch"
            class="header-search"
            icon="magnifying-glass"
          />
          <fa @click="hidexmark" class="header-xmark" icon="xmark" />
          <input
            class="input-search-header"
            type="search"
            placeholder="Search What you want"
          />
        </div>
        <div class="link-item">
          <a
            class="link-show header-briefcase"
            href="http://localhost:8080/#/ShoppingCart"
          >
            <fa icon="briefcase" />
          </a>
          <div class="item-header-link item-header-briefcase">
            <h5>Your cart is currently empty.</h5>
          </div>
        </div>
        <button @click="showlinks" class="header-bars">
          <fa icon="bars" />
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    $(".header-briefcase").on("mouseenter", function () {
      $(".item-header-briefcase").fadeIn(500);
    });
    $(".header-briefcase").on("mouseleave", function () {
      $(".item-header-briefcase").fadeOut(500);
    });
    $(".link-show")
      .on("mouseenter", function (e) {
        $(e.target).siblings(".item-header-link").fadeIn(500);
      })
      .on("mouseleave", function (e) {
        $(e.target).siblings(".item-header-link").fadeOut(500);
      });
  },
  methods: {
    showsearch() {
      $(".header-xmark").show();
      $(".header-search").hide();
      $(".input-search-header").fadeIn();
    },
    hidexmark() {
      $(".header-search").show();
      $(".header-xmark").hide();
      $(".input-search-header").fadeOut();
    },
    showlinks() {
      $(".header-link").toggleClass("header-link-show");
    },
    plusheader(event) {
      $(event.target)
        .parent()
        .siblings(".item-header-link")
        .addClass("header-link-responsive");
      $(event.target).next().fadeIn();
      $(event.target).hide();
    },
    minusheader(event) {
      $(event.target)
        .parent()
        .siblings(".item-header-link")
        .removeClass("header-link-responsive");
      $(event.target).hide();
      $(event.target).parent().find(".header-plus").fadeIn();
    },
    shoesplusclick(event) {
      $(event.target).parent().parent().siblings(".shoes-header").fadeToggle();
      $(event.target).hide();
      $(event.target).next().fadeIn();
    },
    shoesminusclick(event) {
      $(event.target).hide();
      $(event.target).parent().find(".shoes-plus").fadeIn();
      $(event.target).parent().parent().siblings(".shoes-header").fadeToggle();
    },
    TopsTees() {
      localStorage.setItem("uniquechoker", "CONTEMPORARY RING");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
    uniquechoker() {
      localStorage.setItem("uniquechoker", "Unique Persian Choker");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
    graphic() {
      localStorage.setItem("uniquechoker", "Chandelier Earrings");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
    jackets() {
      localStorage.setItem("uniquechoker", "Dangle Earrings");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
    Fashion() {
      localStorage.setItem("uniquechoker", "Chandelier Earrings");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
    Crochet() {
      localStorage.setItem("uniquechoker", "Cluster Earrings");
      $(".title-cluster").text(localStorage.getItem("uniquechoker"));
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
}
.header-link {
  display: flex;
  justify-content: space-between;
  gap: 4.2rem;
}
.logo-header {
  width: 175px;
  height: 56px;
}
.link-item {
  position: relative;
}
.link-item a {
  font-weight: 700;
}
.link-item a:hover {
  color: #c99d38 !important;
  transition: 0.4s;
}
.header-search,
.header-briefcase {
  font-size: 25px;
  cursor: pointer;
}
.item-header-link {
  position: absolute;
  width: 200px;
  padding: 20px !important;
  box-shadow: 0px 0px 5px 0px #c5c2c2;
  top: 4rem;
  transition: 0.7s;
  background: white;
  z-index: 1;
  display: none;
}
.item-header-link a {
  font-weight: 400 !important;
}
.item-header-link:hover {
  display: block !important;
}
.shoes {
  position: relative;
}
.shoes::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 30%;
  height: 1px;
  background-color: #b7b0b0;
}
.item-header-link-2 {
  width: 400px;
}
.item-header-link li {
  margin-bottom: 10px;
}
.item-header-link-2 li:hover {
  transform: translateX(10px);
  transition: 0.3s;
}
.search-header {
  position: relative;
}
.input-search-header {
  position: absolute;
  left: -20rem;
  top: -10px;
  padding: 10px;
  width: 300px;
  border: 1px solid #dddddd;
  display: none;
}
.header-xmark {
  font-size: 25px;
  cursor: pointer;
  display: none;
}
.item-header-briefcase {
  left: -18rem;
  width: 290px;
}
.header-bars {
  border: 1px solid rgb(129, 129, 129);
  background: none;
  display: none;
}
.btons-header {
  display: flex;
  justify-content: space-between;
  gap: 58px;
}
.header-plus {
  display: none;
}
.header-hr {
  display: none;
}
.shoes-plus {
  display: none;
}
.minus-header {
  display: none;
}
.mix-minus-plus {
  display: none !important;
}
.header-link-responsive {
  display: none;
}
.header-shop-inner {
  display: flex;
  gap: 5rem;
}
@media (max-width: 1200px) {
  .link-item a {
    font-size: 11px;
  }
  .header-search[data-v-0210a24a],
  .header-briefcase[data-v-0210a24a] {
    font-size: 18px;
    cursor: pointer;
  }
  .logo-header[data-v-0210a24a] {
    width: 120px;
    height: 50px;
  }
  .header-link[data-v-0210a24a] {
    gap: 2.2rem;
  }
  .btons-header {
    gap: 30px;
  }
}
@media (max-width: 768px) {
  .header-bars {
    display: block;
  }
  .header-link {
    display: none;
  }
  .btons-header {
    gap: 20px;
  }
  .header-link-show {
    display: block;
    position: absolute;
    top: 7rem;
    width: 93%;
    background: var(--min-color);
    padding: 10px !important;
    z-index: 1;
  }
  .header-plus {
    position: absolute;
    right: 4px;
    display: block;
    top: 2px;
    font-size: 11px;
    cursor: pointer;
  }
  .header-link-responsive {
    display: none;
    background: none;
    position: static;
    box-shadow: none;
    opacity: 1;
  }
  .header-hr {
    display: block;
  }
  .shoes-header {
    display: none;
  }
  .shoes[data-v-0210a24a]::after {
    background: none !important;
  }
  .item-header-link-2[data-v-0210a24a] {
    width: 100%;
  }
  .plas-content {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .shoes-plus {
    display: block;
    font-size: 11px;
    cursor: pointer;
  }
  .gens-content {
    margin-top: 20px;
  }
  .shoes {
    font-size: 14px !important;
  }
  .item-header-link {
    padding: 6px !important;
  }
  .minus-header {
    position: absolute;
    right: 4px;
    top: 2px;
    cursor: pointer;
    font-size: 11px;
  }
  .mix-minus-plus {
    display: block !important;
  }
  .minus-header-shoes {
    right: 0px;
    top: 0px;
  }
  .header-link-responsive {
    display: block;
  }
  .header-shop-inner {
    display: block;
    margin-bottom: 20px;
  }
}
@media (max-width: 500px) {
  .input-search-header[data-v-0210a24a] {
    left: -12rem;
    top: -10px;
    padding: 7px;
    width: 177px;
  }
}
@media (max-width: 400px) {
  .input-search-header[data-v-0210a24a] {
    left: -11rem;
    width: 150px;
  }
}
</style>
