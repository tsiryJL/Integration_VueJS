<template>
  <div id="product-list">
    <Header></Header>

    <div class="container px-4 px-lg-0">
      <div class="current-link mt-4 pl-3 d-none d-md-block">
        <a href="index.html"
          ><div class="home-icon d-inline-block mr-2"></div
        ></a>
        <span>/</span> <span class="ml-2">All products</span>
      </div>
      <div class="filter mx-auto my-4 d-flex justify-content-between">
        <button class="filter-item active">Popular</button>
        <button class="filter-item">Top product</button>
        <button class="filter-item">Best selling</button>
        <button class="filter-item">New arrivals</button>
      </div>
      <div class="menu px-3 d-flex justify-content-between align-items-center">
        <div class="sort">
          <span>Sort:</span>
          <b-dropdown id="sort-list">
            <template
              #button-content
              class="sort-by-list-button bordered ml-4 px-4 py-3 border rounded-pill"
            >
              <button>
                Popular
                <font-awesome-icon icon="angle-down" class="ml-2" />
              </button>
            </template>
            <b-dropdown-item href="#">Top product</b-dropdown-item>
            <b-dropdown-item href="#">Best selling</b-dropdown-item>
            <b-dropdown-item href="#">New arrivals</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="products-to-show">
          <span>Show products:</span>
          <input
            type="number"
            size="1"
            min="30"
            max="100"
            value="30"
            id="product-number-show"
            class="bordered border rounded-pill ml-4 px-4 py-3"
            pattern="none"
          />
        </div>
      </div>

      <div class="content">
        <ul class="p-0 d-flex justify-content-between flex-wrap">
          <li class="product position-relative bg-white">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes1.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-red">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes1.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-yellow">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-blue1">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes2.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-white">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes1.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-red">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes1.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-yellow">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-blue1">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes2.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-blue2">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-chair.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-red">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes1.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-yellow">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/bez-nazwy.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
          <li class="product position-relative bg-blue1">
            <div class="product-image w-100 d-flex">
              <img
                src="../assets/images/product-shoes2.png"
                alt="product-image"
                class="w-75 m-auto d-block"
              />
            </div>
            <div class="product-image-shadow"></div>
            <div class="product-detail mt-5 ml-4">
              <span class="product-name">Jacket Polo</span> <br />
              <span class="product-price">$ 29.99</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="pages my-3 d-flex justify-content-between align-items-end">
        <div class="prev page-arrow invisible">
          <a href="#">Previous</a>
        </div>
        <div class="available-page d-flex">
          <span>Page</span>
          <ul class="available-page-list d-flex ml-3 mb-0 p-0">
            <li><a href="#" class="border text-center">1</a></li>
            <li><a href="#" class="border text-center">2</a></li>
            <li><a href="#" class="border text-center">3</a></li>
            <li><a href="#" class="border text-center">4</a></li>
            <li><a href="#" class="border text-center">5</a></li>
          </ul>
        </div>
        <div class="next page-arrow">
          <a href="#">Next</a>
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
#product-list {
  background: #f1f3f5;
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

.filter {
  font-size: 24px;
  width: 50%;
}
.filter-item {
  color: #040f3c;
  opacity: 0.2;
}
.filter-item:hover {
  opacity: 1;
}
.filter-item.active {
  color: #f5710e;
  opacity: 1;
}
.sort {
  font-size: 14px;
}
.bordered {
  border-color: #d8d8d8;
  background: none;
}
input.bordered::-webkit-inner-spin-button,
input.bordered::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input.bordered {
  -moz-appearance: textfield;
}
.products-to-show input {
  font-size: 21px;
  text-align: center;
}

.content {
  margin-top: 50px;
}
.product {
  width: 24%;
  background: transparent !important;
  margin-bottom: 50px;
}
.product-image {
  position: relative;
  z-index: 1;
  border-radius: 50px;
  height: 350px;
  width: 350px;
}
.product-image-shadow {
  position: absolute;
  left: 10%;
  right: 10%;
  height: 60px;
  bottom: 150px;
  z-index: 0;
}
.product-detail {
  color: #000 !important;
}
.product-detail .product-name {
  font-size: 27px;
}
.product-detail .product-price {
  font-size: 20px;
}

/* Coloring */

.bg-white .product-image {
  background: #fff;
}
.bg-white .product-image-shadow {
  background: #dbdbe1;
  box-shadow: #dbdbe1 0 50px 50px;
}
.bg-red .product-image {
  background: #fe382e;
}
.bg-red .product-image-shadow {
  background: #fe382e;
  box-shadow: #fe382e 0 50px 50px;
}
.bg-yellow .product-image {
  background: #ffc481;
}
.bg-yellow .product-image-shadow {
  background: #ffc481;
  box-shadow: #ffc481 0 50px 50px;
}
.bg-blue1 .product-image {
  background: #3a8af0;
}
.bg-blue1 .product-image-shadow {
  background: #3a8af0;
  box-shadow: #3a8af0 0 50px 50px;
}
.bg-blue2 .product-image {
  background: #81c4ff;
}
.bg-blue2 .product-image-shadow {
  background: #81c4ff;
  box-shadow: #81c4ff 0 50px 50px;
}

.pages * {
  color: #000 !important;
}
.pages .page-arrow {
  text-decoration: underline;
}
.available-page-list a {
  padding: 12px 18px;
}

@media all and (max-width: 1400px) {
  .product-detail .product-name {
    font-size: 22px;
  }
  .product-detail .product-price {
    font-size: 16px;
  }
}
@media all and (max-width: 1200px) {
  .filter {
    width: 75%;
    font-size: 18px;
  }
  .product-image {
    height: 250px;
  }
}
@media all and (max-width: 992px) {
  .product {
    width: 32%;
  }
}
@media all and (max-width: 768px) {
  .filter {
    width: 100%;
    font-size: 10px;
  }
  .menu * {
    font-size: 10px !important;
  }
  .sort button,
  .products-to-show input {
    padding: 7px 12px !important;
    margin-left: 10px !important;
  }
  .product {
    width: 49%;
  }
  .product-image {
    height: 325px;
  }
  .product-image-shadow {
    bottom: 120px;
  }
  .product-detail .product-name {
    font-size: 21px;
  }
  .product-detail .product-price {
    font-size: 16px;
  }
  .available-page-list a {
    padding: 7px 12px;
  }
}
@media all and (max-width: 576px) {
  .product-image {
    height: 200px;
    border-radius: 30px;
  }
  .product-detail .product-name {
    font-size: 16px;
  }
  .product-detail .product-price {
    font-size: 12px;
  }
  .pages * {
    font-size: 10px;
  }
}
</style>

<style>
.footer {
  margin-top: 25px !important;
}
.dropdown-toggle {
  border-radius: 30px !important;
  padding: 10px 15px !important;
  background: none !important;
  border: 1px #b2b2b2 solid !important;
  margin-left: 20px;
}
.dropdown-menu {
  transform: translate3d(3px, 46px, 0px) !important;
  border-radius: 30px !important;
  text-align: center !important;
}
.dropdown-item:hover {
  color: #f5710e !important;
}
.sort .btn::after {
  content: none;
}

@media all and (max-width: 768px) {
  .dropdown-toggle {
    padding: 0 !important ;
  }
  .dropdown-menu {
    transform: translate3d(0, 0, 0) !important;
    left: -16px !important;
    top: 30px !important;
    border-radius: 12px !important;
  }
}
</style>
