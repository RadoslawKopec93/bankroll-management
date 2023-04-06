<template>
  <div class="ResultBox">
    <span class="ResultBox__text">aaa</span>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.ResultBox{
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 40px;
  width: 100px;
  border: black double  ;
  background-color: green;
    &__text{
       margin-top: 10px;
      margin-bottom: 10px;
    }
}
</style>