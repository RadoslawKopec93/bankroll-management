<template>
  <div class="main-menu__app-name">POKER BANKROLL MANAGEMENT</div>
  <div class="main-menu__navHeader">
    <div class="main-menu__test">
      <HeaderButton :is-user-menu="true" label="label1"></HeaderButton>
      <HeaderButton :is-user-menu="true" label="label1"></HeaderButton>
    </div>
    <div class="main-menu__test2">
      <HeaderButton :is-user-menu="false" label="USER MENU"></HeaderButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderButton from "@/components/header/header-button/HeaderButton.vue";
</script>
<style lang="scss">
.main-menu {
  //overflow:hidden;
  //background-color: #cb2d06;
  &__app-name {
    background-color: black;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    color: white;
    width: 100%;
    height: 25px;
    position: sticky;
    top: 0;
    text-shadow: -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  &__navHeader {
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    position: sticky;
    top: 25px;
    background-color: #cb2d06;
  }

  &__test {
    display: flex;
    //justify-content: flex-start;
    //flex-direction: row;
    //width: 100%;
    flex-grow: 2;
    flex-basis: 0;
  }
  &__test2 {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
  }
}


</style>