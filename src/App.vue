<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  box-sizing: border-box;
}
:root {
  --min-color: #f9f9f9;
  --min-yellow: #c09578;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0 !important;
}
nav {
  padding: 0px;
}
.margin-top {
  margin-top: 4.5rem;
}
a {
  text-decoration: none !important;
  color: black !important;
}
ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none;
}
.active-color {
  transition: 0.6s;
}
.active-color:hover {
  color: var(--min-yellow) !important;
}
.color-item {
  color: var(--min-yellow) !important;
}
.color-blog {
  color: var(--min-yellow) !important;
  transition: 0.6s;
}
.input-all {
  width: 100%;
  border: 1px solid rgb(217 217 217);
  padding: 10px 15px;
  margin-bottom: 20px;
}
.textarea-all {
  height: 180px;
}
.links-blog-box:hover > .color-blog {
  color: black !important;
}
input {
  border: none;
}
.text-item {
  color: #7a7979;
  font-size: 13px;
}
input:focus {
  outline: none;
}
::placeholder {
  font-size: 13px;
}
button {
  border: none;
}
.testimonial {
  background-color: var(--min-color);
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.home-slider {
  width: 100%;
  height: 600px;
  position: relative;
}
.home-slider-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.slider-img {
  width: 100%;
  height: 100%;
}
.carousel__pagination,
.carousel__prev,
.carousel__next {
  display: none !important;
}
.carousel__item-home {
  width: 100%;
}
.carousel-home-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.carousel-container {
  display: none;
}
.carousel-container {
  height: 100%;
}
.carousel-button {
  width: 120px;
  height: 40px;
  background: none;
  border: 1px solid black;
  border-radius: 25px;
  font-size: 14px;
  position: relative;
  margin-top: 20px;
}
.carousel-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  border-radius: 25px;
  width: 0%;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
}
.carousel-button:hover::before {
  content: "BUY NOW";
  width: 100%;
}
.carousel {
  text-align: start !important;
}
.free-shipping {
  display: flex;
  gap: 20px;
}
.free-icon-car {
  font-size: 20px;
}
.free-par {
  font-size: 13px;
  color: rgb(95, 94, 94);
}
.img-gallery-home {
  width: 100%;
  height: 350px;
}
.galleryhome img {
  width: 100%;
  height: 300px;
}
.title-home-elment {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.title-home {
  width: 450px;
  display: flex;
  justify-content: center;
  position: relative;
}
.title-home::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 2px;
  background-color: black;
  left: 0;
  top: 25px;
}
.title-home::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 2px;
  background-color: black;
  right: 0;
  top: 25px;
}
.card-img {
  width: 100%;
}
.card-home {
  margin-bottom: 30px;
}
.card-img-content {
  position: relative;
}
.shopping-card {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.shopping-card-box {
  padding: 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: white;
  box-shadow: 0 0 15px #0000001a;
  opacity: 0;
  transition: 0.6s;
}
.home-icon-check,
.cart-icon-shopping,
.home-icon-heart,
.home-icon-eye,
.home-icon-gear {
  cursor: pointer;
  font-size: 17px;
}
.home-icon-gear {
  display: none;
}
.card-home:hover .shopping-card-box {
  opacity: 1;
}
.days-content {
  transition: 0.6s;
}
.card-home:hover .days-content {
  opacity: 0;
}
.card-show-2 {
  display: none;
}
.card-show-3 {
  display: none;
}
.get-updates {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--min-color);
}
.day-box {
  border: 1px solid #ddd;
  text-align: center;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 7px;
}
.home-icon-check {
  border: 1px solid #7a7979;
  border-radius: 50%;
  padding: 3px 5px;
  color: #7a7979;
  display: none;
}
.testimonial-par {
  margin-top: 10px;
  text-align: center;
  line-height: 2;
}
.card-home-versontwo {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 4rem;
}
.card-home-versontwo h5 {
  cursor: pointer;
}
.recent-img {
  width: 100%;
  height: 200px;
}
.recent-content {
  min-height: 300px;
  background-color: var(--min-color);
  margin-bottom: 30px;
}
.recent-content-two {
  min-height: 350px;
  background-color: var(--min-color);
}
.recent-content-blog {
  min-height: 350px;
  background-color: var(--min-color);
  margin-bottom: 30px !important;
  margin-top: 30px !important;
}
.recent-text {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
}
.font-small {
  font-size: 12px;
}
.recent-span {
  width: 4px;
  height: 4px;
  background-color: #898686;
}
.recent-text {
  text-align: center;
}
.recent-content-two:hover {
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1019607843);
}
.recent-content:hover {
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1019607843);
}
.recent-content-blog:hover {
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1019607843);
}
.recent-transalete {
  transform: translateX(-98px);
  opacity: 0;
  transition: 1s;
}
.home-content {
  background-color: var(--min-color);
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-home {
  width: 100%;
  padding: 15px 45px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1019607843);
}
.form-home-email {
  height: 100%;
  display: flex;
  align-items: center;
}
.submit-send-home {
  border: none;
  background: none;
  position: absolute;
  right: 19px;
  height: 100%;
  border-left: 1px solid #d5cfcf;
  padding-left: 15px;
}
.home-email-box {
  width: 100%;
  position: relative;
}
.button-arrow-top {
  position: fixed;
  bottom: 34px;
  right: 37px;
  width: 45px;
  height: 45px;
  font-size: 21px;
  background-color: var(--min-yellow);
  color: white;
  border: none;
  display: none;
}
.about-parent {
  width: 100%;
  height: 200px;
  background-image: url(./assets/11221.webp);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about-parent-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 20px;
}
.breadcrumb li {
  color: white !important;
}
.breadcrumb a {
  color: white !important;
}
.img-about-content {
  height: 400px;
  width: 100%;
}
.submit-search-blog {
  background-color: #eee;
  right: 0;
  padding: 0px;
  width: 50px;
  border-left: none;
  color: var(--min-yellow);
}
.input-search-blog {
  border-radius: 0%;
  padding-left: 20px;
  background-color: var(--min-color) !important;
  box-shadow: none;
}
.blog-plus,
.minus-blog {
  font-size: 13px;
  cursor: pointer;
}
.minus-blog {
  display: none;
}
.links-blog-item {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 15px;
}
.links-blog-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.link-blog-show {
  margin-left: 15px !important;
  margin-top: 10px !important;
  display: none;
}
.link-blog-show li {
  margin-bottom: 7px;
}
.link-blog-content a {
  font-size: 15px;
}
.crop-center {
  width: 100%;
  height: 80px;
}
.blog-inner-text {
  font-size: 14px;
}
.blog-inner-text .item {
  color: rgb(105, 105, 105);
}
.blog-year {
  font-size: 13px;
  font-weight: bold;
}
.title-blog {
  font-weight: bold;
}
.linksto-images a {
  margin-bottom: 15px !important;
  color: rgb(110, 110, 110) !important;
  transition: 0.5;
}
.linksto-images a:hover {
  color: black !important;
}
.linksto-images-box {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.links-brand {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.links-brand a {
  padding: 10px 20px;
  border: 1px solid rgb(109, 109, 109);
  transition: 0.6s;
}
.links-brand a:hover {
  background-color: black;
  color: white !important;
}
.page-link-active {
  background-color: black !important;
  color: white !important;
}
.pagination {
  gap: 8px;
}
.page-link {
  padding: 10px 16px !important;
  border-radius: 0% !important;
  transition: 0.6s !important;
}
.page-link:hover {
  background-color: black !important;
  color: white !important;
}
.temporibus-title-item {
  font-size: 13px;
  display: flex;
  gap: 10px;
}
.img-temporibus {
  width: 100%;
  height: 500px;
}
.text-temporibus {
  padding: 0px 30px 0px 30px;
  border-left: 1px solid rgb(226, 226, 226);
}
.title-comments {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.commnt-box {
  display: flex;
  gap: 20px;
}
.commnt-img {
  width: 80px;
  height: 80px;
}
.btn-submit-blog {
  width: 120px;
  height: 45px;
  background-color: black;
  color: white;
  transition: 0.6s;
}
.btn-submit-blog:hover {
  background-color: rgba(0, 0, 0, 0.486);
}
.blog-inner-elpsics {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
#product-img-content {
  width: 100%;
  height: 120px;
  position: relative;
  margin-bottom: 20px;
  background-image: url(./assets/product_16.webp);
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.product-img-toggle::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.315);
  width: 100%;
  height: 100%;
}
.product-img-content-two {
  background-image: url(./assets/product_17.webp) !important;
}
.product-img-content-three {
  background-image: url(./assets/product_18_118x.webp) !important;
}
.product-img-content-four {
  background-image: url(./assets/product_19_118x.webp) !important;
}
.prdact-minus-plus {
  display: flex;
  gap: 15px;
  border: 1px solid rgb(203 203 203);
  padding: 15px 15px;
  width: fit-content;
  justify-content: center;
  align-items: center;
}
.plus-number {
  cursor: pointer;
}
.button-prodact {
  background-color: var(--min-yellow);
  width: 150px;
  height: 50px;
  color: white !important;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.6s;
}
.button-prodact:hover {
  background-color: black;
  color: white;
}
.prdact-love {
  padding: 13px 20px !important;
}
.prdact-love .home-icon-check {
  padding: 2px 3px !important;
}
.prodact-tolink-forms {
  width: 200px;
}
.sohial-footer {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.link-sohial {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  font-size: 13px;
  transition: 0.6s;
}
.link-sohial:hover {
  background-color: var(--min-yellow);
  color: white !important;
}
.prodactbtncolor {
  opacity: 0.5;
}
.header-forms {
  padding: 20px;
}
.header-forms-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-form-prdact {
  display: flex;
  justify-content: space-between;
}
.text-login {
  font-size: 14px;
  text-decoration: underline !important;
}
.input-prdact {
  border-radius: 5px;
}
.input-prdact:focus {
  border: 2px solid var(--min-yellow) !important;
}
.prdact-checked {
  width: 20px;
  height: 20px;
  border: 1px solid var(--min-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.radio-prdact-checked {
  display: none;
}
.radio-prdact-checked:checked + .prdact-checked {
  background-color: var(--min-yellow);
}
.lable-prdact {
  cursor: pointer;
}
.text-prdact-font {
  font-size: 15px;
}
select {
  -webkit-appearance: none;
}
select:focus-visible {
  outline: none !important;
}
.select-prodact {
  font-size: 14px;
  padding-top: 17px;
}
.select-content-prodact {
  position: relative;
}
.abslute-country {
  position: absolute;
  top: 4px;
  left: 15px;
  font-size: 11px;
}
.select-content-prodact::after {
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: transparent;
  right: 15px;
  top: 19px;
  border-bottom: 2px solid #676262;
  border-right: 2px solid #676262;
  transform: rotate(45deg);
}
.select-prdact-two {
  font-size: 14px;
}
.text-form-prdact {
  padding: 18px 25px;
  background-color: var(--min-color);
  font-size: 13px;
  margin-top: 10px;
  color: rgb(151 151 151);
  border-radius: 7px;
}
.text-form-prdact-2 {
  background-color: rgb(229 204 188 / 29%);
  border: 2px solid var(--min-yellow);
  color: black;
}
.radio-box-forms {
  display: flex;
  gap: 10px;
  padding: 18px 25px;
  border: 1px solid #d3d3d3;
  width: 100%;
  border-radius: 7px;
  cursor: pointer;
}
.prdact-checked-two {
  width: 17px;
  height: 17px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
}
.radio-prdact-checked:checked + .radio-box-forms {
  background-color: rgb(229 204 188 / 29%);
  border: 2px solid var(--min-yellow);
}
.radio-prdact-checked:checked + .radio-box-forms > .prdact-checked-two {
  border: 5px solid var(--min-yellow);
}
.forms-cheak-radio {
  padding: 20px;
  background-color: #eee;
  display: none;
}
.radio-prdact-show-forms:checked + .radio-box-forms + .forms-cheak-radio {
  display: block;
}
.pdact-forms-section {
  border-top: 1px solid #c9c8c8;
}
.img-cheakout {
  width: 70px;
  height: 70px;
  border: 1px solid #c9c8c8;
  border-radius: 7px;
}
.number-cheakout {
  position: absolute;
  left: 3.6rem;
  top: -5px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.466);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.cheakout-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 0px 30px;
}
.cheakout-box-img {
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
}
.cheakout-content {
  padding: 30px;
  background-color: var(--min-color);
  height: 100vh;
  border-left: 1px solid #c9c8c8;
}
.cheakout-box .item {
  font-weight: bold;
}
.cheakout-box .item-2 {
  font-weight: 600;
  font-size: 14px;
}
.cheakout-content-fixed {
  position: fixed;
  top: 0;
  width: 39%;
  border-left: 1px solid #c9c8c8;
}
.form-acount {
  width: 35%;
  border: 1px solid #c9c8c8;
  padding: 30px;
}
.section-form-acount {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 4rem 0px;
}
.button-acount {
  background-color: white;
  color: rgb(104, 104, 104) !important;
  border: 1px solid #c9c8c8;
}
.button-acount:hover {
  background-color: var(--min-yellow);
  color: white !important;
}
.form-acount-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}
.show-password {
  cursor: pointer;
  color: #676262;
  transition: 0.5s;
  font-size: 15px;
}
.show-password:hover {
  color: black;
}
.form-password {
  display: none;
}
table {
  width: 100%;
}
table tr {
  border: 1px solid #c9c8c8;
}
table td {
  padding: 12px;
  border-left: 1px solid #c9c8c8;
}
.Shipping-ul {
  list-style: disc;
  padding-left: 40px !important;
}
.Shipping-ul li {
  margin-bottom: 15px;
}
.wishlist-elment {
  width: 80%;
}
.wishlist-content {
  padding: 0px 10px 30px;
  cursor: pointer;
  transition: 0.6s;
  margin-bottom: 30px;
}
.wishlist-img {
  width: 100%;
  height: 300px;
}
.wishlist-icon-check {
  border: 1px solid white;
  border-radius: 50%;
  padding: 4px;
  color: white;
}
.wishlist-content-img {
  position: relative;
  overflow: hidden;
}
.wishlist-check {
  position: absolute;
  right: -74px;
  bottom: 0;
  background: #85bd02;
  width: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  border-radius: 30px 0px 0px 30px;
  transition: 0.6s;
}
.wishlist-check:hover {
  background-color: black;
  color: white;
}
.wish-sho {
  border: none;
}
.wishlist-cart-shopping {
  left: -74px;
  border-radius: 0px 30px 30px 0px;
}
.wishlist-content:hover > .wishlist-content-img > .wishlist-check {
  right: 0;
}
.wishlist-content:hover > .wishlist-content-img > .wishlist-cart-shopping {
  left: 0;
}
.wishlist-title {
  margin-top: 15px !important;
  text-align: center;
  transition: 0.6s;
}
.wishlist-title:hover {
  color: #85bd02;
}
.wishlist-sallry {
  margin-top: 10px !important;
  text-align: center;
  color: #85bd02;
  font-weight: bold;
  font-size: 20px;
}
.wishlist-content:hover {
  box-shadow: 0 0 25px #00000026;
}
// .cluster-popup {
//   width: 100%;
//   height: 100%;
//   background-color: black;
//   left: 0;
//   top: 0;
//   position: absolute;
//   z-index: 1;
//   margin-bottom: 10px;
// }
.product-inner-2 {
  position: relative;
  width: 100%;
  height: 120px;
}
.product-inner-2::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.322);
  top: 0;
  left: 0;
  z-index: 1;
}
.product-inner-2 {
  margin-bottom: 20px;
}
.cluter-item-sall {
  text-decoration: line-through;
}
.radio-cluster {
  display: none;
}
.cluster-check {
  width: 20px;
  height: 20px;
  background-color: #073847;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.cluster-check-icon {
  font-size: 12px;
  color: white !important;
  display: none;
}
.radio-cluster:checked + .cluster-check > .cluster-check-icon {
  display: block;
}
.cluster-color-text {
  font-size: 16px;
  color: #676262;
}
.cluster-check-2 {
  background-color: rgb(209, 157, 13);
}
.cluster-check-3 {
  background-color: #828282;
}
.cluster-check-4 {
  background-color: magenta;
}
.cluster-check-5 {
  background-color: maroon;
}
.cluster-check-show {
  display: flex;
}
#mang_area {
  width: 100%;
  height: 540px;
  overflow: hidden;
  position: relative;
}
.product-img-zom {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.shopping-sohail {
  width: 55px;
  height: 30px;
  margin-right: 10px;
}
.title-description {
  cursor: pointer;
  font-weight: bold;
}
.form-show-review {
  text-decoration: underline;
  cursor: pointer;
  transition: 0.3s;
}
.form-show-review:hover {
  text-decoration: none;
}
.review {
  padding: 20px;
  border: 1px solid #c9c8c8;
}
.label-review {
  font-size: 13px;
  margin-bottom: 10px;
}
.star-review {
  cursor: pointer;
}
.starreview-active {
  color: var(--min-yellow);
}
.textarea-all {
  height: 200px !important;
  outline: none;
}
.button-submit-review {
  display: flex;
  margin-top: 20px;
  justify-content: end;
}
.button-submit-review button {
  width: 185px;
  background-color: black !important;
  color: white !important;
}
.button-submit-review button:hover {
  background-color: var(--min-yellow) !important;
}
.form-review {
  display: none;
}
.comments-card {
  border: 1px solid #c9c8c8;
}
.comments-card-img {
  background-image: url(./assets/get.jpg);
  width: 100%;
  height: 100px;
  background-size: cover;
  background-position: bottom;
  position: relative;
}
.comments-popup {
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.281);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  padding: 10px;
  font-size: 14px;
  color: white;
}
.advertisement {
  width: 700px;
  margin: 4rem auto;
}
.advertisement-img {
  width: 100%;
  height: 300px;
}
.advertisement-text:hover {
  text-decoration: underline;
}
.advertisement-btn {
  font-size: 12px;
  border: 2px solid rgb(131, 131, 131);
  border-radius: 5px;
}
.advert-img-2 {
  width: 100%;
  height: 200px;
}
.gogle {
  width: 50px;
  height: 50px;
  background-color: #676262;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 10px;
}
.input-rivew {
  height: 120px;
}
.gogle-1,
.gogle-2,
.gogle-3,
.gogle-4 {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
}
.gogle-1 {
  background-color: deepskyblue;
}
.gogle-2 {
  background-color: darkblue;
}
.gogle-3 {
  background-color: deepskyblue;
}
.gogle-4 {
  background-color: red;
}
.input-all-rivew {
  height: 30px;
  border-radius: 7px;
  border: 1px solid rgb(80, 80, 80);
}
.input-rivew-show {
  display: none;
}
.content-submit-review {
  display: flex;
  justify-content: end;
}
.submit-review {
  width: 65px;
  height: 40px;
  color: white;
  background: #a7a7a7;
  font-size: 27px;
}
.share-item {
  position: relative;
  cursor: pointer;
}
.share-item::before {
  content: "";
  width: 4px;
  height: 4px;
  background-color: black;
  position: absolute;
  left: -9px;
  bottom: 7px;
  border-radius: 50%;
}
.heart-rivew {
  cursor: pointer;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
}
.heart-rivew:hover {
  border: 1px solid black;
}
.envelope-rivew {
  width: 35px;
  height: 35px;
  background: #073847;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: white !important;
}
.envelope-rivew-content {
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: 0.6s;
}
.envelope-rivew-content:hover {
  opacity: 1;
}
.share-item:hover + .envelope-rivew-content {
  opacity: 1;
}
.best-item {
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  height: fit-content;
}
.best-item-two {
  border-bottom: 3px solid;
}
.comment-box {
  display: flex;
  justify-content: center;
}
.sohilal-rivew {
  display: flex;
  gap: 10px;
}
.advertisement-card {
  margin-bottom: 30px;
}
.comments {
  display: none;
}
.review {
  display: none;
}
.variable-size {
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}
.location-contact {
  font-size: 20px;
}
.home-slider-2 {
  width: 100%;
  height: 400px;
}
.item-filter {
  width: 13px;
  height: 13px;
  border: 1px solid black;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  position: relative;
}
.cheak-filter-box {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}
.check-filter {
  background-color: dodgerblue;
  border: none;
}
.item-filter svg {
  display: none;
}
.check-filter svg {
  display: block;
}
.itemfilter-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.Filter-link {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(184, 228, 228, 0.719);
}
.select-content-filter {
  width: 154px;
}
.select-filter {
  width: 100%;
  border: none;
}
.select-content-filter::after {
  top: 6px;
}
.table-icon {
  font-size: 20px;
  color: #828282;
  cursor: pointer;
}
.table-active {
  color: black;
}
.text-callums-card {
  font-size: 19px;
  color: #676262;
}
.button-addcard {
  padding: 10px;
  border-radius: 25px;
  border: 1px solid black;
  background: none;
  transition: 0.5s;
}
.button-addcard:hover {
  background-color: black;
  color: white;
}
.prdact-minus-plus:hover {
  background-color: black;
  color: white !important;
}
.prdact-minus-plus:hover > .home-icon-check {
  color: white !important;
  border-color: white;
}
.eya-show-popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.eya-item-popup:hover {
  background-color: var(--min-yellow);
}
.eya-item-popup {
  padding: 14px;
  background: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.6s;
}
.card-collums-content {
  margin-bottom: 30px;
}
.card-collums-content:hover .eya-show-popup {
  display: flex;
}
.popup-card {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.363);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: none;
}
.popup-card-box {
  background-color: white;
  width: 900px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
}
.popup-card-img {
  width: 100%;
  height: 300px;
}
.select-card-popup {
  width: 100%;
  padding: 15px !important;
  border: 1px solid rgb(215 204 204);
}
.select-content-cardpopup::after {
  top: 54px;
}
.prdact-minus-plus-2:hover {
  background: none;
  color: black !important;
}
.exeit-popup {
  cursor: pointer;
  color: white;
  position: absolute;
  top: -6rem;
  right: 0;
}
.card-collums {
  display: none;
}
@media (max-width: 992px) {
  .free-shipping {
    margin-bottom: 30px;
  }
  .recent-content {
    margin-bottom: 30px;
  }
  .form-home-email {
    margin-top: 30px;
  }
  .img-about-content {
    margin-bottom: 30px;
  }
  .blog-margin {
    margin-bottom: 4rem;
  }
  .crop-center {
    width: 100%;
    height: 140px;
    margin-bottom: 10px;
  }
  .cheakout-content-fixed {
    position: static;
    top: 0;
    width: 100%;
    margin-top: 40px;
  }
  .wishlist-elment {
    width: 100%;
  }
  .advertisement {
    width: 100%;
  }
  .popup-card-box {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .home-slider-popup {
    background-color: rgba(0, 0, 0, 0.651);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 21;
  }
  .carousel-home-box h1,
  .carousel-home-box p {
    color: white;
  }
  .carousel-button {
    color: white;
  }
  .text-carousel-home {
    font-size: 12px;
  }
  .galleryhome {
    margin-bottom: 30px;
  }
  .free-shipping {
    margin-bottom: 30px;
  }
  .galleryhome img {
    height: 250px;
  }
  .img-about-content {
    height: 300px;
  }
  .product-inner {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
  }
  .sohilal-rivew {
    gap: 30px;
    flex-wrap: wrap;
  }
}
@media (max-width: 500px) {
  .title-home {
    width: 250px;
  }
  .title-home h2 {
    font-size: 16px;
  }
  .title-home::before {
    width: 48px;
    height: 1px;
    right: 10px;
    top: 11px;
  }
  .title-home::after {
    width: 48px;
    height: 1px;
    left: 10px;
    top: 11px;
  }
  .img-about-content {
    height: 200px;
  }
  .about-parent-box h1 {
    font-size: 20px;
  }
  .breadcrumb-item {
    font-size: 12px;
  }
  .envelope-rivew {
    width: 30px;
    height: 30px;
  }
}
</style>
