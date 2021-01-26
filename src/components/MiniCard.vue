<template>
  <div>
    <div class="d-flex miniCard-2 align-items-center p-1 bg-white bd-highlight">
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
</template>

<script>
  export default {
    data() {
      return {
        value: 5
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
.miniCard-2{
  width:20em;
  height: auto;
  border-radius: 10px;
  border: 1px solid #c3c3c3;
  margin-bottom: 1em;
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
/*Container*/
.image__card{
  background-color: #d6d6d6;
  padding: 1em;
  margin: 4px;
  border-radius: 6px;
  width:3.5em;
  text-align: center;
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
</style>
