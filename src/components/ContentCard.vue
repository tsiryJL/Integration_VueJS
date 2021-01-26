<template>
      <div class="d-flex flex-wrap">
      <!--Card Boucle Section-->
          <div class="card" style="width: 15rem; border: none;">
            <img class="img__card" src= "../assets/images/landing/salon1.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">
                <span>Evertosomberg</span>
                <span>$260.99</span>
              </p>
            </div>
          </div>

          <div class="card" style="width: 15rem; border: none;">
            <img class="img__card" src= "../assets/images/landing/salon2.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">
                <span>Eurosofa</span>
                <span>$619.99</span>
              </p>
            </div>
          </div>

          <div class="card" style="width: 15rem; border: none;">
            <img class="img__card" src= "../assets/images/landing/salon3.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">
                <span>Holmustund</span>
                <span>$1999.99</span>
              </p>
            </div>
          </div>

          <div class="card" style="width: 15rem; border: none;">
            <img class="img__card" src= "../assets/images/landing/salon4.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">
                <span>Fartov</span>
                <span>$1999,99</span>
              </p>
            </div>
          </div>

          <div class="card" style="width: 15rem; border: none;">
            <img class="img__card" src="../assets/images/landing/instru2.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">
                <span>Shogsta</span>
                <span>$99,99</span>
              </p>
            </div>
          </div>
    </div>
</template>

<style scoped>
.img__card{
  border-radius: 2em;
  height: 14em;
  padding: 10px;
}
.card{
  height: auto;
  width: 350px;
  height: auto;
  border-radius: 1em!important;
  margin: 1em;
  border: none;
}  
p.card-text span:first-child{
  font-size: 20px;
  font-weight: bold;
}
.card-text{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
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
</style>