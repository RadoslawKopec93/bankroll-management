<template>
      <canvas id="resultChart" width="300px" height="300px"> </canvas>
</template>
<script setup lang="ts">
import {computed, onMounted} from "vue";
import Chart from "chart.js/auto";

onMounted(() => {
      updateStockPriceHistoryChart(totalResult.value)
})

const props = defineProps({
      dataTest: String
})

const labels = [10.11,20.11,21.11,23.11, 24.11];
const results = [-100,300,28,-298,100];
const cardNames = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
const updateStockPriceHistoryChart = (totalResult: string) => {
      const ctx = document.getElementById('resultChart') as HTMLCanvasElement;
      const data = {
            labels: labels,
            datasets: [{
                  label: totalResult,
                  data: results,
                  fill: true,
                  borderColor: 'black',
                  color: 'black',
                  segment: {
                        borderColor: (ctx) => {
                              const val = ctx.p0.parsed.y;
                              //return val < 0 ? 'white' : '#710627'
                              return 'black'
                        }
                  },
                  spanGaps: true,
                  tension: 0,
                  options: {
                        responsive: false,
                        maintainAspectRatio: true,
                  }
            }]
      }
      new Chart(ctx, {
            type: 'line',
            data: data,
      })
}

const totalResult = computed(() => {
      let sum = 0;
      results.forEach((result) => {
            sum+=result;
      });

      return sum.toString();
})

</script>
<style scoped lang="scss">
.chart-box {
      width: 100%;
      height: 600px
}
.grid-row{
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      background-color: #f0eeeb;
}
.grid-item {

}

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

/*#app{
  display: flex;
  justify-content: flex-start;
  align-items:center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  color: red;
  border: green;
}*/

/*ul {
      list-style: none;
      padding: 0;
      // background-color: #006699;
      //text-align: center;
      li {
            display: inline-block;
      }
}*/


</style>