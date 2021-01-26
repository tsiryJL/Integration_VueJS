<template>
  <div class="store-list">
    <div class="slider container px-4 px-md-0 position-relative">
      <VueSlickCarousel v-bind="settings" class="position-relative w-100">
        <div class="slide-item d-flex flex-wrap justify-content-between w-100">
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
        </div>
        <div class="slide-item d-flex flex-wrap justify-content-between w-100">
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
          <div class="store d-flex flex-column align-items-center mb-4 mb-md-5">
            <div class="store-img mb-3 rounded-circle">
              <img
                src="../assets/images/profile.png"
                alt="store-img"
                class="m-auto w-75"
              />
            </div>
            <span class="store-name mb-3">Store name</span>
            <a
              href="#"
              class="store-username px-2 px-md-4 py-1 py-md-1 mb-0 mb-sm-4 rounded-pill"
              >@username</a
            >
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

@Component({
  components: {
    VueSlickCarousel
  }
})
export default class App extends Vue {
  data() {
    return {
      settings: {
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {}
          }
        ]
      }
    };
  }
}
</script>

<style scoped>
.slider .container {
  overflow: visible;
}
.slide-item {
  padding: 70px 5px;
}
.store {
  background: #f1f3f5;
  padding: 40px;
  border-radius: 30px;
  color: #040f3c;
  width: 22%;
}
.store a {
  color: #040f3c;
}
.store-img {
  padding: 30px;
  background: #040f3c33;
}
.store-name {
  font-size: 32px;
}
.store-username {
  border: #040f3c 1px solid;
}

@media all and (max-width: 992px) {
  .store {
    width: 49%;
  }
}
@media all and (max-width: 768px) {
  .slide-item {
    padding: 5px;
  }
  .store {
    padding: 25px;
  }
  .store-img {
    padding: 21px;
  }
  .store-name {
    font-size: 17px;
  }
  .store-username {
    font-size: 10px;
  }
}
</style>
