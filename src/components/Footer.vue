<template>
  <div class="container">
    <div class="footer">
      <ul class="footer-list m-0 row container px-5">
        <li
          class="footer-item d-inline-block align-top col-12 col-lg-2 mb-4 mb-lg-0 position-relative mr-2"
        >
          <a href="index.html" class="logo">
            <img src="../assets/images/logo-white.png" alt="logo-white" />
          </a>
        </li>
        <li
          class="footer-item d-inline-block align-top col-6 col-lg-2 mb-5 mb-lg-0 position-relative"
        >
          <h6 class="text-uppercase mb-4">Main Pages</h6>
          <ul class="p-0">
            <li>
              <a href="#">Sell with us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Promos</a>
            </li>
            <li>
              <a href="#">Become an ambassador</a>
            </li>
          </ul>
        </li>
        <li
          class="footer-item d-inline-block align-top col-6 col-lg-2 mb-5 mb-lg-0 position-relative"
        >
          <h6 class="text-uppercase mb-4">Policy</h6>
          <ul class="p-0">
            <li>
              <a href="#">Terms of usage</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Returns policy</a>
            </li>
          </ul>
        </li>
        <li
          class="footer-item d-inline-block align-top col-6 col-lg-2 position-relative"
        >
          <h6 class="text-uppercase mb-4">Categories</h6>
          <ul class="p-0">
            <li>
              <a href="#">Skin care</a>
            </li>
            <li>
              <a href="#">Make up</a>
            </li>
            <li>
              <a href="#">Bath and body</a>
            </li>
            <li>
              <a href="#">Beauty supplements</a>
            </li>
          </ul>
        </li>
        <li
          class="footer-item d-inline-block align-top col-6 col-lg-2 position-relative"
        >
          <h6 class="text-uppercase mb-4">Subscribe</h6>
          <input
            type="email"
            name="subscribe"
            id="footer-subscribe"
            placeholder="Email"
            class="w-100"
          />
          <button class="send position-absolute"></button>
          <p class="mt-3">Stay in touch with us for the freshest products!</p>
          <div class="socials mt-4">
            <a href="#" class="mr-4">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="mr-4">
              <font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
            <a href="#"> <font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
          </div>
        </li>
      </ul>
      <div class="lower-footer px-5 px-lg-0 row d-flex justify-content-between">
        <div
          class="copyright col-12 col-md-6 d-flex justify-content-center justify-content-md-start text-center"
        >
          <p>© 2020 ALL RIGHTS RESERVED</p>
        </div>
        <div
          class="partenariat col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
        >
          <a href="#" class="ml-0"
            ><img src="../assets/images/paypal.png" alt="paypal logo"
          /></a>
          <a href="#"
            ><img src="../assets/images/mastercard.png" alt="mastercard logo"
          /></a>
          <a href="#"><img src="../assets/images/visa.png" alt="visa logo"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 100px;
}
.footer-list {
  background: #040f3c;
  padding: 50px 100px;
}
.footer-item li {
  margin: 10px 0;
}
.footer-item,
.footer-item a {
  color: #fff;
}
input {
  padding: 12px;
  background: 0;
  color: #fff;
  border: 2px #ffffff77 solid;
  border-radius: 6px;
  padding-right: 40px;
  font-size: 13px;
}
.send {
  width: 16px;
  height: 16px;
  background: url("../assets/images/send.png") no-repeat center;
  right: 30px;
  top: 58px;
}
.socials a {
  font-size: 20px !important;
}

.lower-footer {
  background: #fff;
  padding: 40px 0;
}
.copyright p {
  font-size: 14px;
  color: #040f3c;
  opacity: 0.35;
}
.partenariat a {
  margin-left: 70px;
}

@media all and (max-width: 768px) {
  .footer-list {
    padding: 50px;
  }
}
@media all and (max-width: 576px) {
  .footer-list,
  .footer-list a,
  h6 {
    font-size: 12px;
  }
  .footer-item li {
    margin: 0;
  }
  .socials {
    width: 100% !important;
  }
}
</style>
