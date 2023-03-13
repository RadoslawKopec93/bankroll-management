<template>
<div style="background-color: #f0eeeb; height:100vh;">
  <div class="grid-row">
    <div class="chart-box">
      <canvas id="resultChart" width="300px" height="300px"> </canvas>
    </div>

    <div>
      <h3 class="totalResult__Header">RESULTS</h3>
      <button @click="addMovie">Add ToDo</button>
      <div class="totalResult">

        <ul>
          <li v-for="t in movies" :key="t">
          <ResultBox the-tittle="test"></ResultBox>
          </li>
        </ul>
      </div>

    </div>
    <div>
      <ul>
        <li v-for="(color,indexColor) in colors" :key="color">
        <li v-for="(card, indexCard) in cards" :key="card">
        <CardComponent :card-name="card" :card-color="color"/>
        </li>
        </li>
      </ul>

    </div>

  </div>
  </div>
</template>
<script>
export { default } from "./line-chart";
</script>
<style lang="scss">
@import 'line-chart.scss';

</style>