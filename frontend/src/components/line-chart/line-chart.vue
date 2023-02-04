<template>
  <div style="background-color: #f0eeeb; height:100vh;">
  <div class="grid-row">
    <div class="chart-box">
      <canvas id="resultChart" width="300px" height="300px"> </canvas>
    </div>

    <div>
      <h3 class="totalResult__Header">RESULTS</h3>
      <div class="totalResult">
        <result-box> </result-box>
<!--        <ResultBox> </ResultBox>
        <ResultBox> </ResultBox>
        <ResultBox> </ResultBox>
        <ResultBox> </ResultBox>
        <ResultBox> </ResultBox>
        <ResultBox> </ResultBox>-->
      </div>

    </div>
    <div>

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