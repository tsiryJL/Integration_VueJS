<template>
  <div id="product-details">
    <Header></Header>

    <div class="blue-b">
      <div
        class="container d-flex justify-content-around align-items-center py-3"
      >
        <div class=""></div>
        <ul class="d-flex justify-content-between w-50 mb-0 p-0">
          <li class="blue-b-item text-uppercase"><a href="#">All brands</a></li>
          <li class="blue-b-item text-uppercase"><a href="#">Skin care</a></li>
          <li class="blue-b-item text-uppercase"><a href="#">Make up</a></li>
          <li class="blue-b-item text-uppercase"><a href="#">Hair care</a></li>
          <li class="blue-b-item text-uppercase">
            <a href="#">Bath & body</a>
          </li>
          <li class="blue-b-item text-uppercase">
            <a href="#">Beauty supplements</a>
          </li>
        </ul>
        <a href="#" class="sellWUs text-uppercase py-2 px-4 rounded-pill"
          >sell with us</a
        >
      </div>
    </div>

    <div class="container">
      <div class="current-link mt-4 pl-3 d-none d-md-block">
        <a href="index.html"
          ><div class="home-icon d-inline-block mr-2"></div
        ></a>
        <span>/</span> <span class="ml-2">Top product</span>
        <span class="ml-2">/</span> <span class="ml-2">Home deco</span>
        <span class="ml-2">/</span>
        <span class="ml-2 text-black">Minimalist standard sofa</span>
      </div>

      <div class="pd-main mt-5 d-flex align-items-start">
        <div class="p-images d-flex">
          <div
            class="p-tiny d-flex justify-content-center align-items-center mr-3"
          >
            <div class="main-img text-center">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="bez-nazwy"
                class="w-75"
              />
            </div>
            <div class="p-tiny-shadow"></div>
          </div>
          <div class="p-big d-flex justify-content-center align-items-center">
            <div class="main-img text-center">
              <img src="../assets/images/bez-nazwy.png" alt="bez-nazwy" />
            </div>
            <div class="p-big-shadow"></div>
          </div>
        </div>

        <div class="p-main-details w-50 text-black">
          <div class="w-50">
            <div class="pub d-flex justify-content-between align-items-center">
              <div class="info text-black d-flex align-items-center">
                <img
                  src="../assets/images/build-a-bear.png"
                  alt="image-ad"
                  class="mr-3"
                />
                <div>
                  Build a bear Store
                  <div class="location">
                    <img
                      src="../assets/images/USFlag.png"
                      alt="flag"
                      class="mr-2"
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div class="verified">
                <div
                  class="check d-flex justify-content-center align-items-center"
                >
                  <img src="../assets/images/check.png" alt="check" />
                </div>
              </div>
            </div>

            <h2 class="mt-5">Minimalistic standart sofa</h2>
            <div class="price d-flex justify-content-between">
              <div class="actual-price">$89.99</div>
              <div class="last-price">$119.99</div>
              <div class="promotion rounded-pill">- 30% off</div>
            </div>
            <p class="quick-desc mt-4">
              White Summer Vibes sofat in the line with a colorful print. Made
              of jersey cotton. T-shirt fits perfectly with jeans, pants or
              shorts.
            </p>
            <a href="#" class="read-more">Read more</a>

            <div class="carting mt-3">
              <h3>Quantity:</h3>
              <div class="quantity mt-3 d-flex justify-content-between">
                <input
                  type="text"
                  min="1"
                  max="100"
                  name="quantity"
                  size="3"
                  id="input-quantity"
                  class="border rounded-pill text-center"
                  value="-     2     +"
                />
                <button class="addTC rounded-pill">ADD TO CART</button>
                <button class="favorite border rounded-circle px-3">
                  <img src="../assets/images/heart.png" alt="heart" />
                </button>
              </div>
            </div>

            <div class="qualities mt-3">
              <ul class="d-flex flex-wrap justify-content-between m-0 p-0">
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
                <li class="quality rounded-pill mt-3">Lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { Component, methods, Vue } from "vue-property-decorator";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style scoped>
.blue-b {
  background: #040f3c;
}
.blue-b a {
  color: #fff;
  font-size: 12px;
}
.sellWUs {
  background: linear-gradient(120deg, #f5710f, #ec3000);
  color: #fff;
}
.current-link {
  font-size: 13px;
  color: #b2b2b2;
}
.home-icon {
  width: 15px;
  height: 15px;
  background: url("../assets/images/ic_home.png") no-repeat center;
}

.pd-main {
  margin-bottom: 100px;
}
.p-images {
  width: 50% !important;
}
.p-big,
.p-tiny {
  height: 530px;
  width: 530px;
  background: #ffc481;
  border-radius: 21px;
  position: relative;
  margin-bottom: 50px;
  z-index: 1;
}
.main-img {
  z-index: 1;
  width: 85%;
}
.main-img img {
  width: 100%;
}
.p-big-shadow,
.p-tiny-shadow {
  position: absolute;
  bottom: 0;
  height: 30px;
  left: 10%;
  right: 10%;
  box-shadow: #e6b074 0 16px 35px;
  z-index: 0;
}
.p-tiny {
  width: 110px;
  height: 110px;
  border-radius: 16px;
}
.p-tiny-shadow {
  box-shadow: #e6b074 0 7px 15px;
}

.pub {
  padding: 20px;
  box-shadow: #00000011 0 16px 16px;
}
.check {
  background: #00a00622;
  width: 40px;
  height: 40px;
  border-radius: 12px;
}

h2 {
  font-size: 36px;
  font-weight: 100;
}
.actual-price {
  color: #ff0000;
  font-size: 24px;
}
.last-price {
  color: #cecece;
  font-size: 24px;
  text-decoration: line-through;
}
.promotion {
  color: #fff;
  background: #ff0000;
  padding: 8px 15px;
}
.quick-desc {
  color: #040f3c;
  opacity: 0.3;
}
.read-more {
  color: #000;
  text-decoration: underline;
  font-size: 14px;
}

h3 {
  font-size: 14px;
  font-weight: 100;
}
#input-quantity {
  font-size: 16px;
  width: 130px;
}
#input-quantity::-webkit-inner-spin-button,
#input-quantity::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#input-quantity {
  -moz-appearance: textfield;
  outline: none;
  border: 1px #d8d8d8 solid;
  padding: 10px 20px;
}
.addTC {
  background: #fbb03b;
  padding: 10px 40px;
}

.quality {
  background: #cecece;
  color: #fff;
  text-align: center;
  width: 23%;
  padding: 5px;
}
</style>
