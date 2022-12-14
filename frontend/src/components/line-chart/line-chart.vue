<template>
  <div class="grid-row">
    <div class="chart-box">
      <canvas id="resultChart" width="300px" height="300px"> </canvas>
    </div>
    <div>
         <h3 class="totalResult__Header">RESULT</h3>
         <div class="totalResult">
           <result-button/>
         </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script lang="ts">
export { default } from "./line-chart"
</script>
<style lang="scss">
@import 'line-chart.scss';

</style>