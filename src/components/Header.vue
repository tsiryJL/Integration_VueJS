<template>
  <div class="header">
    <div class="container py-3">
      <b-navbar
        toggleable="lg"
        class="d-flex justify-content-between align-items-center w-100 px-5 px-lg-0"
      >
        <b-navbar-brand href="#" class="logo"
          ><div>
            <a href="index.html">
              <img src="../assets/images/logo.png" alt="logo" class="w-100" />
            </a></div
        ></b-navbar-brand>

        <b-nav-item href="#" class="ml-4 d-block d-lg-none ml-auto mr-4"
          ><img src="../assets/images/cart.png" alt="cart"
        /></b-nav-item>

        <b-navbar-toggle target="nav-collapse" class="border-0 p-0"
          ><img src="../assets/images/menu_icon.png" alt="menu"
        /></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          class="flex-grow-0 w-70 justify-content-end"
          is-nav
        >
          <b-navbar-nav class="w-100 justify-content-around">
            <div class="d-flex searchbar justify-content-end w-75 my-3 my-lg-0">
              <form
                class="position-relative d-flex justify-content-center w-100"
              >
                <input size="sm" class="w-100" />
                <b-button type="submit" class="mr-n4 mr-sm-0"
                  ><font-awesome-icon icon="search"
                /></b-button>
              </form>
            </div>
            <div class="d-flex justify-content-end w-75">
              <b-navbar-nav
                class="d-flex justify-content-end align-items-center w-100 text-center"
              >
                <b-nav-item href="#" class="ml-4">Sign in</b-nav-item>
                <b-nav-item href="#" class="ml-4">Sign up</b-nav-item>
                <b-nav-item href="#" class="ml-4 d-none d-lg-block"
                  ><img src="../assets/images/cart.png" alt="cart"
                /></b-nav-item>
                <b-nav-item href="#" class="ml-4"
                  ><img src="../assets/images/profile-tiny.png" alt="profile"
                /></b-nav-item>
              </b-navbar-nav>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #fff !important;
}
.searchbar {
  height: 45px;
}
.searchbar input {
  padding: 7px 21px;
  padding-right: 70px;
  font-size: 20px;
  border: 1px #040f3c33 solid;
  border-radius: 30px;
  color: #040f3c;
}
.searchbar button {
  border: 0;
  background: none;
  position: absolute;
  right: 21px;
  top: 5px;
  opacity: 0.3;
  font-size: 16px;
  color: #040f3c;
}
.nav-link {
  color: #040f3c;
}

/* RESPONSIVE */
@media all and (max-width: 991px) {
  .logo {
    width: 125px !important;
  }
  .navbar-nav > div {
    width: 100% !important;
  }
  input {
    width: 75% !important;
    padding-right: 21px !important;
  }
}
@media all and (max-width: 400px) {
  .logo {
    width: 110px !important;
  }
}
</style>
