<template>
  <div id="landingpage">
    <Header></Header>
    <div class="banner position-relative">
      <div class="container">
        <div class="upper-side d-flex justify-content-left">
          <div class="product-image position-relative">
            <img
              class="chair w-100"
              src="../assets/images/chair.png"
              alt="chair"
            />
          </div>
          <div class="text">
            <div class="line"></div>
            <p>
              New <br />
              <span>arrivals</span>
            </p>
            <a :href="shopnowLink" class="shopnow">
              <div class="icon">
                <font-awesome-icon icon="arrow-right" />
              </div>
              shop now
            </a>
          </div>
          <div class="circle d-none d-lg-block"></div>
        </div>
        <div class="lower-side">
          <ul
            class="lower-list pl-5 pl-lg-0 flex-column flex-md-row pt-5 pb-1 mb-0 d-flex justify-content-between"
          >
            <li class="item d-flex mr-3 mb-5 mb-md-0">
              <div class="icon mr-3">
                <img src="../assets/images/ic_camion.png" alt="" />
              </div>
              <div class="item-text">
                <h5>Free shipping</h5>
                <p>On purchases over $199</p>
              </div>
            </li>
            <li class="item d-flex mr-3 mb-5 mb-md-0">
              <div class="icon mr-3">
                <img src="../assets/images/ic_camion.png" alt="" />
              </div>
              <div class="item-text">
                <h5>99% Satisfied Customers</h5>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            <li class="item d-flex mr-3">
              <div class="icon mr-3">
                <img src="../assets/images/ic_camion.png" alt="" />
              </div>
              <div class="item-text">
                <h5>Originality Guaranteed</h5>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="recommend">
      <div class="container px-5 px-lg-0">
        <div
          class="title d-flex align-items-center mb-5 justify-content-between"
        >
          <h4>Selected just for you</h4>
          <a href="#" class="showmore-btn">View all</a>
        </div>
        <ul class="list d-flex justify-content-around flex-wrap p-0">
          <li
            class="rec-item dark-bg size2 position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/controller.png"
                alt="controller"
                class="w-75 align-middle"
              />
            </div>
            <div class="recommend-text mt-auto">
              <Shopnow></Shopnow>
            </div>
          </li>
          <li
            class="rec-item red-bg position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/running_shoes.png"
                alt="shoes"
                class="w-75"
              />
            </div>
            <div class="recommend-text mt-3 text-left mt-auto">
              <span class="product-name">Nike Men's flex</span> <br />
              <span class="product-price d-block mb-3">$ 29.99</span>
              <Shopnow></Shopnow>
            </div>
          </li>
          <li
            class="rec-item yellow-bg position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="bez"
                class="w-75"
              />
            </div>
            <div class="recommend-text mt-3 text-left mt-auto">
              <span class="product-name">Loose Textured Sofa</span> <br />
              <span class="product-price d-block mb-3">$ 119.99</span>
              <Shopnow></Shopnow>
            </div>
          </li>
          <li
            class="rec-item red-bg position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/running_shoes.png"
                alt="shoes"
                class="w-75"
              />
            </div>
            <div class="recommend-text mt-3 text-left mt-auto">
              <span class="product-name">Nike Men's flex</span> <br />
              <span class="product-price d-block mb-3">$ 29.99</span>
              <Shopnow></Shopnow>
            </div>
          </li>
          <li
            class="rec-item yellow-bg position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="bez"
                class="w-75"
              />
            </div>
            <div class="recommend-text mt-3 text-left mt-auto">
              <span class="product-name">Loose Textured Sofa</span> <br />
              <span class="product-price d-block mb-3">$ 119.99</span>
              <Shopnow></Shopnow>
            </div>
          </li>
          <li
            class="rec-item dark-bg size2 position-relative text-center d-flex flex-column"
          >
            <div class="thumbnail mt-auto">
              <img
                src="../assets/images/controller.png"
                alt="controller"
                class="w-75"
              />
            </div>
            <div class="recommend-text mt-auto">
              <Shopnow></Shopnow>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="newArrivals">
      <div class="container px-5 px-lg-0">
        <div
          class="title d-flex align-items-center mb-5 justify-content-between"
        >
          <h4>New Arrivals</h4>
          <a href="#" class="showmore-btn">Show more</a>
        </div>
      </div>
      <NewproductSlider></NewproductSlider>
    </div>

    <div class="offer">
      <div class="container">
        <div
          class="ad d-flex justify-content-between align-items-center flex-column flex-md-row"
        >
          <div class="text text-center text-md-left">
            <div class="tiny mt-5 mt-md-0">Shop the classic collection</div>
            <div class="big mb-4 mb-md-0">Sale up to 80%</div>
          </div>
          <div class="warning mb-5 mb-md-0">Limited time only</div>
          <Shopnow class="mt-5 mt-md-0"></Shopnow>
        </div>
      </div>
    </div>

    <StoreSlider class="mt-5"></StoreSlider>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Shopnow from "../components/Shopnow.vue";
import NewproductSlider from "../components/NewproductSlider.vue";
import StoreSlider from "../components/StoreSlider.vue";

@Component({
  components: {
    Header,
    Footer,
    Shopnow,
    NewproductSlider,
    StoreSlider
  }
})
export default class App extends Vue {}
</script>

<style>
/* BANNER */
.banner {
  background: #81c4ff;
  padding-bottom: 120px;
}
.container {
  overflow: hidden;
}
.upper-side {
  padding: 150px;
  padding-bottom: 20px;
}
.line {
  width: 150px;
  height: 5px;
  background: #fff;
  margin-bottom: -23%;
  margin-left: -200px;
}
.product-image {
  width: 50%;
}
.banner .text {
  position: absolute;
  top: 30%;
  right: 22%;
  font-size: 130px;
  color: #fff;
  text-align: left;
}
.banner .text p {
  margin: 0;
}
.banner .text span {
  margin-left: 30%;
}
.shopnow {
  position: absolute;
  right: 0;
  bottom: -100px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 15px;
}
.shopnow .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border: 1px #fff solid;
  border-radius: 50%;
  margin-right: 30px;
}
.circle {
  width: 385px;
  height: 385px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  right: -200px;
  top: 35%;
}
.lower-side {
  position: absolute;
  bottom: 0;
  background: #fff;
  padding-left: 300px;
  margin-left: -300px;
  border-top-right-radius: 70px;
  width: 70%;
  z-index: 10;
}
.lower-list {
  width: 75%;
}
.item {
  width: 25%;
}
h5 {
  font-size: 15px !important;
  color: #000;
}
.lower-side p {
  font-size: 12px;
  color: #a8a8a8;
}

/* For YOU */
.recommend {
  margin-top: 100px;
  color: #fff;
}
h4 {
  color: #000;
}
.recommend .list {
  padding-bottom: 50px !important;
}
.rec-item {
  border-radius: 35px;
  padding: 50px !important;
  height: 450px;
  margin-bottom: 70px;
  width: 24%;
}
.size2 {
  width: 49%;
}
.rec-item::before {
  opacity: 0.8;
  content: "";
  width: 70%;
  height: 21%;
  position: absolute;
  bottom: 2px;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
}
.dark-bg {
  background: #2f313a;
}
.dark-bg::before {
  background: #2f313a;
  box-shadow: #2f313a 0 50px 50px;
}
.red-bg {
  background: #fe382e;
}
.red-bg::before {
  background: #fe382e;
  box-shadow: #fe382e 0 50px 50px;
}
.yellow-bg {
  background: #ffc481;
}
.yellow-bg::before {
  background: #ffc481;
  box-shadow: #ffc481 0 50px 50px;
}

/* Offer */
.ad {
  background: url("../assets/images/ad-bg.png") center no-repeat;
  color: #fff;
  padding: 70px;
  margin-top: 200px;
}
.tiny {
  font-size: 15px;
  margin-bottom: 21px;
}
.big {
  font-size: 48px;
}
.warning {
  background: #f5710f;
  padding: 20px 50px;
  text-transform: uppercase;
  border-radius: 30px;
  margin-left: -15%;
}

/* RESPONSIVE */
@media all and (max-width: 1750px) {
  .rec-item {
    height: 400px;
  }
}

@media all and (max-width: 1600px) {
  .banner .text {
    font-size: 100px;
  }
  .circle {
    width: 300px;
    height: 300px;
    right: -160px;
  }
  .lower-side {
    width: 80%;
  }
  .lower-list {
    width: 95%;
  }
}

@media all and (max-width: 1200px) {
  .product-image {
    width: 65%;
  }
  .lower-side {
    width: 100%;
  }
  .banner .text {
    right: 33%;
  }
  .rec-item {
    height: 300px;
    padding: 25px !important;
  }
  .ad .big {
    font-size: 30px;
  }
  .warning {
    margin: 0 !important;
  }
}
@media all and (max-width: 992px) {
  .banner .text {
    font-size: 75px;
    top: 40%;
  }
  .product-image {
    width: 100% !important;
  }
  .lower-side {
    padding-left: 0 !important;
    margin-left: 0 !important;
    width: 80%;
  }
  .rec-item {
    width: 48%;
    height: 360px;
  }
  .size2 {
    width: 100%;
  }
  .rec-item .thumbnail img {
    width: 60% !important;
  }
}
@media all and (max-width: 768px) {
  .upper-side {
    padding: 100px;
  }
  .banner .text {
    font-size: 50px;
  }
  .line {
    width: 75px;
    margin-bottom: -25%;
    margin-left: -100px;
  }
  .shopnow {
    font-size: 12px;
  }
  .shopnow .icon {
    width: 45px;
    height: 45px;
    margin-right: 5px;
  }
  .lower-side {
    width: 70%;
    bottom: -230px;
  }
  .banner {
    margin-bottom: 200px;
    padding-bottom: 0;
  }
  .item {
    width: 100%;
  }
  .recommend .title {
    margin-top: 100px;
  }
  .rec-item .thumbnail img {
    width: 85% !important;
  }
  .size2 .thumbnail img {
    width: 60% !important;
  }
  .rec-item {
    height: 300px;
    margin-bottom: 50px;
  }

  .ad {
    background: url("../assets/images/ad-bg-mobile.png") center no-repeat;
    background-size: cover;
    padding: 70px 40px;
  }
  .ad .tiny {
    font-size: 16px;
  }
  .ad .big {
    font-size: 45px;
  }
}
@media all and (max-width: 576px) {
  .upper-side {
    padding: 70px;
  }
  .lower-side {
    bottom: -260px;
    width: 85%;
  }
  .line {
    margin-bottom: -18%;
  }
  .banner .text {
    line-height: 50px;
  }
  .shopnow {
    bottom: -60px;
  }
  .rec-item {
    font-size: 8px;
    height: 200px;
    padding: 16px !important;
  }
  .rec-item::before {
    bottom: 10px;
  }
  .showmore-btn {
    font-size: 8px !important;
    padding: 10px 20px !important;
  }
  h4 {
    font-size: 16px !important;
  }
  .ad .tiny {
    font-size: 14px;
  }
  .ad .big {
    font-size: 35px;
  }
  .ad .warning {
    font-size: 14px;
  }
  .ad .shopnow-btn .icon {
    width: 30px;
    height: 30px;
    padding: 7px !important;
    margin-right: 10px !important;
  }
  .ad .shopnow-btn {
    font-size: 12px;
  }
}
</style>
