<template>
  <div>
    <h3 class="totalResult__Header">RESULTS</h3>
    <button @click="test">Add ToDo</button>
      <div class="totalResult">

      </div> </div>
</template>
<script setup lang="ts">

import {ref} from "vue";

const array = ref([
  {id:0, name:'dupa'},
  {id:1, name:'dupa1'},
  {id:3, name:'dupa3'},
  {id:2, name:'dupa2'},
]);
const test = () => {
  array.value.sort((a,b)=> (a.id > b.id ? -1 : 1))
  array.value.forEach( (v)=>{
    console.log(v.name);
  })
}
</script>
<style lang="scss">
.totalResult {
  width: 100%;
  &__Header{
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    color: black;
    text-align: center;
    margin: 0;
    padding: 20px 10px;
  }
}
</style>