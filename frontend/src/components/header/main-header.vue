<template>
  <div class="main-menu__app-name">POKER BANKROLL MANAGEMENT</div>
  <div class="main-menu__navHeader">
    <div class="main-menu__test">
      <header-button :is-user-menu="true" label="label1"></header-button>
      <header-button :is-user-menu="true" label="label1"></header-button>
    </div>
    <div class="main-menu__test2">
      <header-button :is-user-menu="false" label="USER MENU"></header-button>
    </div>
  </div>
</template>
<script>
export { default } from "./main-header"
</script>
<style lang="scss">
@import 'main-header';
</style>