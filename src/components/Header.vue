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
:focus{
 outline: none;
}
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
ul{
list-style-type: none;
}
/*--------------------------------------------------------------
  # Top Bar
  --------------------------------------------------------------*/
#topbar {
  padding: 0;
  font-size: 15px;
  height: 50px;
  transition: all 0.5s;
  color: rgba(255, 255, 255, 0.7);
}
#topbar.topbar-scrolled {
  top: -50px;
}
#topbar i {
  color: #ffb03b;
}
#topbar i + i {
  margin-left: 15px;
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  top: 75px;
  height: 70px;
  z-index: 997;
  transition: all 0.5s;
  padding: 10px 0;
  background-color: #040f3c;
}
#header.header-scrolled {
  top: 0;
  background: rgba(26, 24, 22, 0.85);
}
#header .logo h1 {
  font-size: 28px;
  margin: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 3px;
}
#header .logo h1 a, #header .logo h1 a:hover {
  color: #fff;
  text-decoration: none;
}
#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}
@media (max-width: 992px) {
  #header {
    top: 0;
    background: white;
  }
}
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu, .nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  float: left;
}
.nav-menu a {
  display: block;
  position: relative;
  color: white;
  padding: 9px 14px;
  font-size: 12px;
  font-family:"Helvetica Neue LT Std";
}
.nav-menu a:hover, .nav-menu{
  color: #ffb03b;
  text-decoration: none;
}
.nav-menu .book-a-table a {
  background: linear-gradient(104deg, #f5710f 0%, #ec3000 100%);
  color: #fff;
  border-radius: 20px;
  margin-left:4em;
  padding: 10px 25px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  width: 159px;
}
.searchbox input:focus {
  outline: none; /*by default,input shows an outline on focus */
}
.searchbox input{
  z-index: 0;
  width: 35em;
  height: 40px;
  background:white;
  border-radius: 25px;
  border: 1px solid #949494;
  padding: 1em;
}
.icon-wrap {
  position: relative;
  right: 4em;
  width: 60px;
  height: 100%;
  padding: 6px;
} 
.icon-wrap svg {
  width: 25px;
  height: 25px;
  fill: rgb(143, 143, 143);
}
</style>
