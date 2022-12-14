
<template>
  <h3>{{test}}</h3>
  <canvas id="myChart"></canvas>
</template>
<script lang="ts">

import {onMounted, ref} from "vue";
import Chart from "chart.js/auto";

export default {
  name: 'Hello2',
  mounted() {
   /* const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });*/
  },
  setup() {
    const test = ref("teast");

    const firstMeth = () => {
      return "firsdtMeth"
    }
    return {
      test
    }
  }
}
</script>
<style>
</style>
