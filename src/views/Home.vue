<template>
  <div class="home">
    <HeaderMe></HeaderME>
    <!-- ======= Banniere Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <!--Début banniere -->
        <div class="carousel-item active">
          <!-- Center bannière  --> 
          <div class="carousel-container">         
            <div class="items__inner" id="js-scene">
              <div class="items__layer layer" data-depth="0.10"><div class="items__item text-white">Store</div></div>
              <div class="items__layer layer" data-depth="0.5"><div class="items__item text-white"></div></div>
              <div class="items__layer layer text-center" data-depth="0.15"><div class="items__item text-white"><img src="../assets/images/landing/vans.png" style="width: 26em;" alt=""></div></div>
              <div class="items__layer layer" data-depth="0.25"><div class="items__item text-white">Cover</div></div>
            </div>     
            <div class="d-flex miniCard-1 align-items-center p-1 m-3 bg-white bd-highlight">
              <div class="image__card"><img src="../assets/images/landing/profile.png" class="profil__card" alt="image-profil"></div>
              <div>
                <div class="ligne-height bd-highlight"><b>Store verified</b></div>
                <!--  Rating Stars-->
                <div>
                  <b-form-rating class="Star-rating" v-model="value" variant="warning" readonly></b-form-rating>
                </div>
              </div>
              <div class="p-3 ml-auto bd-highlight"><input type="checkbox" name="check" class="checkbox"></div>
            </div> 
          </div>
        </div>
      </div>
    </section>
        <!--  Top Products  -->
    <section id="card__responsive" class="container mt-5">
      <!-- Card-Accordion -->
        <div id="accordion" class="accordion-container d-flex flex-column">
          <!-- Using value -->
          <b-button v-b-toggle="'collapse-1'" class="accordion-title m-1 pl-5">ABOUT THE STORE</b-button>
          <!-- Element to collapse -->
          <b-collapse id="collapse-1">
            <div class="pl-5 pr-5 pt-2 text-left txt-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
          </b-collapse>
            <!-- Using value -->
          <b-button v-b-toggle="'collapse-2'" class="accordion-title m-1 mt-3 pl-5">STORE STATUT</b-button>
          <!-- Element to collapse -->
          <b-collapse id="collapse-2">
            <div class="pl-3 pr-3 p-2"><MiniCard></MiniCard></div>
          </b-collapse>
        </div>
        <div class="d-flex flex-wrap justify-content-between mb-2 ml-4 mr-5">
          <h3>Top products</h3>
          <span><button class="grey-button text-center">SHOW MORE</button></span>
        </div>
        <div class="d-flex flex-wrap">
          <!--Card Boucle Section-->
          <ContentCard></ContentCard>
        </div>
        <!--  New Add  -->
        <div class="d-flex flex-wrap justify-content-between mt-2 mr-5 ml-4">
          <h3>New Add</h3>
          <span><button class="grey-button text-center">SHOW MORE</button></span>
        </div>
        <div class="d-flex flex-wrap">
          <!--Card Boucle Section-->
          <ContentCard></ContentCard>
        </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import { Component, methods, Vue } from "vue-property-decorator";
import HeaderMe from "../components/HeaderMe.vue";
import MiniCard from "../components/MiniCard.vue";
import ContentCard from "../components/ContentCard.vue";
import Footer from "../components/Footer.vue";

@Component({
  components: {
    HeaderMe,
    MiniCard,
    ContentCard,
    Footer
  }
})
export default class App extends Vue {
   data() {
      return {
        value: 3
      }
    }
}
</script>

<style scoped>
.Star-rating{
  border: none;
  height: 0px;
  font-size: 14px;
}
/*Container*/
.image__card{
  background-color: #d6d6d6;
  padding: 1em;
  margin: 4px;
  border-radius: 6px;
  width:3.5em;
  text-align: center;
}
.btn:focus{
  outline: none;
  box-shadow: none;
}
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background-color: rgba(39, 37, 34, 0.8);
  overflow: hidden;
  padding: 0;
}
#hero .carousel-item {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/landing/background-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: 6em;
}
#hero .carousel-item::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
#hero .carousel-content {
  text-align: center;
}
#hero h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
}
#hero h2 span {
  color: #ffb03b;
}
#accordion{
  padding: 10px 0px 10px 0px;
  z-index: 1;
  border-radius: 20px;
  box-shadow: 0px 18px 20px #8888888a;
}
.accordion-title{
  background-color: white;
  color: black;
  font-weight: bold;
  text-align: left;
  border: none;
  font-size: 14px;
}
.accordion-title:focus{
  outline-style: none;
}
/* CSS for CodePen */
.accordion-container {
  width: 350px;
  position: absolute;
  background-color: white;
  top: 58%;
  left: 3em;
}
.items {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.items__inner {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 780px;
}
.items__layer .items__item {
  position: absolute;
}
.items__layer .items__item:after {
  content: attr(data-title);
  position: absolute;
  line-height: 20px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  visibility: hidden;
  opacity: 0;
}
.items__layer .items__item:hover:after {
  visibility: visible;
  opacity: 1;
}
/* IMAGE STORE */ 
.items__layer:nth-child(1) .items__item {
  top: 200px;
  left: 120px;
  font-size: 120px;
}
.items__layer:nth-child(1) .items__item:after {
  top: -23px;
  left: 0;
}
/* IMAGE INSERT */ 
.items__layer:nth-child(3) .items__item {
  top: 258px;
  left: 187px;
  width: 300px;
  height: 200px;
}
.items__layer:nth-child(3) .items__item:after {
  bottom: -23px;
  left: 0;
}
  /* COVER TEXT */ 
.items__layer:nth-child(4) .items__item {
  top: 400px;
  left: 400px;
  font-size: 120px;
}
.items__layer:nth-child(4) .items__item:after {
  top: -23px;
  right: 0;
}
@media (max-width: 992px) {
/* IMAGE STORE */ 
.items__layer:nth-child(1) .items__item {
  top: 149px;
  left: 30px;
  font-size: 90px;
}
.items__layer:nth-child(1) .items__item:after {
  top: -23px;
  left: 0;
}
/* IMAGE INSERT */ 
.items__layer:nth-child(3) .items__item {
  top: 185px;
  left: 24px;
  width: 300px;
  height: 165px;
}
.items__layer:nth-child(3) .items__item:after {
  bottom: -23px;
  left: 0;
}
/* COVER TEXT */ 
.items__layer:nth-child(4) .items__item {
  top: 318px;
  left: 239px;
  font-size: 90px;
}
.items__layer:nth-child(4) .items__item:after {
  top: -23px;
  right: 0;
}
#hero .carousel-item {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/landing/background-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: 0em;
}
}
/*Grey button*/
.grey-button{
  background: #ecebeb;
  border-radius: 20px;
  border: 1px;
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  width: 159px;
}
.grey-button:focus{
  outline: none;
}
.profil__card{
  width: 1em;
}
.miniCard-1{
  position: absolute;
  width:18em;
  height: auto;
  border-radius: 10px;
  float: right;
  bottom: 2em;
  right: 3em;
}
.accordion-content-card {
  display: none;
}
div#accordion h4:first-child{
  border-radius: 15px 15px 0px 0px;
}
div#accordion h4:last-of-type{
 border-radius: 0px 0px 10px 10px;
}
.profil__card{
  width: 1em;
}
.ligne-height{
    margin-left:5px;
}
/*  Checkbox  */
.checkbox {
  -webkit-appearance: none; /*hides the default checkbox*/
  display: block;
  font-size: 10vmin;
  width: 30px;
  height: 30px;
  border: solid 2px #c2c2c2;
  border-radius: 20%;
  cursor: pointer;
}
.checkbox:focus{
  outline: none;
}
.checkbox:checked {
  background-color: #d4edda;
  border: solid 2px #d4edda;
}
.checkbox:checked:before {
  font-family: "FontAwesome";
  content: "\f00c";
  font-size: 17px;
  position: absolute;
  color: #1c7230;
  padding: 0px 1px 2px 4px;
}
.checkbox:hover {
  cursor: pointer; 
  opacity: 0.8;
}
.txt-12{
  font-size: 12px;
}
.img__card{
  border-radius: 2em;
  height: 14em;
  padding: 10px;
}
</style>
