<template>
  <div class="slider">
    <div class="slider container position-relative">
      <!-- Slider when above 768px -->
      <VueSlickCarousel
        v-bind="settings"
        class="position-relative d-none d-md-block"
      >
        <a class="slider-item d-flex flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/drum1.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Jacket Polo</span> <br />
            <span class="desc-price">$ 29.99</span>
          </div>
        </a>
        <a class="slider-item d-flex flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/drum2.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Jacket Polo</span> <br />
            <span class="desc-price">$ 29.99</span>
          </div>
        </a>
        <a class="slider-item d-flex plus flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/hat.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Nike Men's flex</span> <br />
            <span class="desc-price">$ 15.99</span>
          </div>
        </a>
        <a class="slider-item d-flex flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/drum1.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Jacket Polo</span> <br />
            <span class="desc-price">$ 29.99</span>
          </div>
        </a>
        <a class="slider-item d-flex flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/screen.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Samsung TV</span> <br />
            <span class="desc-price">$ 119.99</span>
          </div>
        </a>
        <a class="slider-item d-flex flex-column position-relative">
          <div class="product-appearance my-auto d-flex flex-column">
            <img
              src="../assets/images/drum1.png"
              alt="image slot"
              class="m-auto w-75"
            />
          </div>
          <div class="product-desc mt-auto">
            <span class="desc-name">Jacket Polo</span> <br />
            <span class="desc-price">$ 29.99</span>
          </div>
        </a>
      </VueSlickCarousel>
      <!-- Slider when below 768px -->
      <VueSlickCarousel
        v-bind="settings"
        class="position-relative d-block d-md-none"
      >
        <div class="slide-item d-flex flex-wrap justify-content-between">
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum1.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum2.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a
            class="slider-item plus d-flex w-100 flex-column position-relative my-5"
          >
            <div
              class="product-appearance m-auto d-flex flex-column position-relative w-75"
            >
              <img
                src="../assets/images/hat.png"
                alt="image slot"
                class="m-auto"
              />
            </div>
            <div class="product-desc mt-auto ml-5">
              <span class="desc-name">Nike Men's flex</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum1.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/screen.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
        </div>
        <div class="slide-item d-flex flex-wrap justify-content-between">
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum1.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum2.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a
            class="slider-item plus d-flex w-100 flex-column position-relative my-5"
          >
            <div
              class="product-appearance m-auto d-flex flex-column position-relative w-75"
            >
              <img
                src="../assets/images/hat.png"
                alt="image slot"
                class="m-auto"
              />
            </div>
            <div class="product-desc mt-auto ml-5">
              <span class="desc-name">Nike Men's flex</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/drum1.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
          <a class="slider-item d-flex flex-column position-relative">
            <div class="product-appearance d-flex flex-column">
              <img
                src="../assets/images/screen.png"
                alt="image slot"
                class="m-auto w-75"
              />
            </div>
            <div class="product-desc my-auto ml-3">
              <span class="desc-name">Jacket Polo</span> <br />
              <span class="desc-price">$ 29.99</span>
            </div>
          </a>
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
        slidesToShow: 5,
        autoplay: true,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1750,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          }
        ]
      }
    };
  }
}
</script>

<style>
.slider .container {
  overflow: visible;
}
.slider-item {
  width: 70% !important;
  height: 400px;
  color: #000;
  position: relative;
  margin: 20px auto;
}
.slider-item .product-appearance {
  height: 55%;
  border-radius: 45px;
}
.slider-item .product-appearance img {
  z-index: 1;
  width: 80%;
}
.desc-name {
  font-size: 21px;
}
.desc-price {
  font-size: 15px;
}
.slider-item.plus .product-appearance {
  background: #2f3d54;
  transform: scale(1.3);
}
.slider-item.plus .product-appearance::before {
  content: "";
  position: absolute;
  left: 15%;
  right: 15%;
  height: 50%;
  bottom: 1%;
  z-index: -1;
  background: #2f3d54;
  box-shadow: #2f3d54 0 20px 30px;
}
.slick-slider {
  width: 90%;
  margin: auto;
}

@media all and (max-width: 992px) {
  .slider-item .product-appearance {
    height: 50%;
  }
  .slider-item.plus .product-appearance::before {
    bottom: 3%;
  }
}
@media all and (max-width: 768px) {
  .slider-item .product-appearance {
    height: 60%;
    margin-bottom: 0 !important;
  }
  .plus {
    width: 100% !important;
  }
  .slider-item {
    width: 45% !important;
    margin: 0 !important;
    height: 300px;
  }
  .slider-item.plus {
    height: 425px;
  }
  .slider-item .product-appearance img {
    z-index: 1;
    width: auto;
  }
  .slick-slide {
    margin: auto;
  }
  .desc-name {
    font-size: 16px;
  }
  .desc-price {
    font-size: 12px;
  }
  .slider-item .product-appearance img {
    z-index: 1;
  }
}
@media all and (max-width: 576px) {
  .slider-item.plus .product-appearance img {
    width: 70%;
  }
}
</style>
