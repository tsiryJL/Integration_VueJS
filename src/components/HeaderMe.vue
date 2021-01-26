<template>
  <div>
    <!-- ======= Top Bar ======= -->
    <header id="topbar" class="d-none d-lg-flex align-items-center fixed-top justify-content-around bg-white" style="height: 5em;">
  <!-- LOGO -->
      <div class="p-1"><img src="../assets/images/landing/logo.png" alt=""></div>            
  <!-- SEARCH BUTTON -->
      <div class="p-1 searchbox d-flex">
        <input id="search" type="text" placeholder="Search" />
        <span class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
      </div>
  <!-- COMMERCE ICON -->
      <div class="p-2">
        <span class="p-3"><img src="../assets/images/landing/cart.png" alt=""></span>
    <!-- PROFIL ICON -->
        <span class="p-3"><img src="../assets/images/landing/profile-tiny.png" alt=""></span>
      </div>
    </header>
    <!-- ======= Header ======= -->
    <nav id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="mr-auto">
          <span class=""><img id="responsive__logo" class="d-none" src="../assets/images/landing/logo.png" alt=""></span>
          <span class="p-3"><img id="responsive__chart" class="d-none" src="../assets/images/landing/cart.png"></span>
          <span class="p-3"><img id="responsive__profil" class="d-none" src="../assets/images/landing/menu_icon.png"></span>
        </div>
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <div class="dropdown">
                <a class="#" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="display: flex;">
                  ALL BRANDS 
                  <span class="p-1"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </li>
            <li><a href="#about">SKIN CARE</a></li>
            <li><a href="#menu">MAKE UP</a></li>
            <li><a href="#specials">HAIR CARE</a></li>
            <li><a href="#events">BATH & BODY</a></li>
            <li><a href="#chefs">BEAUTY SUPPLEMENTS</a></li>
            <li class="book-a-table text-center"><a href="#book-a-table">SELL WITH Us</a></li>
          </ul>
        </nav><!-- .nav-menu -->
      </div>
    </nav><!-- End Header -->
  </div>
</template>
<style scoped>
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