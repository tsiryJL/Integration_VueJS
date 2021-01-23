<template>
  <a href="" class="shopnow-btn">
    <font-awesome-icon icon="arrow-right" class="icon mr-3" />
    shop now
  </a>
</template>

<script>
export default {};
</script>

<style>
.shopnow-btn {
  width: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  text-transform: uppercase;
  font-size: 15px;
  color: #fff;
}
.shopnow-btn .icon {
  display: flex;
  align-items: center;
  justify-items: left;
  justify-content: center;
  border: 1px #fff solid;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  width: 40px;
  height: 40px;
  padding: 9px;
}

@media all and (max-width: 992px) {
  .shopnow-btn {
    font-size: 12px;
  }
  .shopnow-btn .icon {
    width: 30px;
    height: 30px;
  }
}
@media all and (max-width: 576px) {
  .shopnow-btn {
    font-size: 5px;
  }
  .shopnow-btn .icon {
    width: 21px;
    height: 21px;
    font-size: 12px;
    padding: 5px;
    margin-right: 5px !important;
  }
}
</style>
