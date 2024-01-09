<template>
  <div class="title-home-elment">
    <div class="title-home">
      <h2>TESTIMONIAL</h2>
    </div>
  </div>
  <Carousel>
    <Slide v-for="slide in 2" :key="slide">
      <div class="carousel__item carousel__item-home">
        <div class="testimonial-carousel-box">
          <img class="testimonial-img" src="../assets/19.jpg" />
          <p class="testimonial-par">
            This product is best product i ever get. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt labore
            et dolore magna magna magna
          </p>
          <h6 class="mt-4">Newaz Sharif / UI Ux Designer</h6>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.testimonial-carousel-box {
  margin-top: 40px;
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonial-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.carousel__item-home {
  display: flex;
  justify-content: center;
}

@media (max-width: 992px) {
  .testimonial-carousel-box {
    width: 100%;
  }
}
</style>

<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
