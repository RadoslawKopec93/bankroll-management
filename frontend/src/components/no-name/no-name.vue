<template>
<!--  <body>
  <div class="grid-wrapper">
    <div class="grid-item"><line-chart/></div>
    <div class="grid-item"><line-chart/>2</div>
    <div class="grid-item"><line-chart/>2</div>
    <div class="grid-item"><line-chart/></div>
  </div>
  </body>-->
  <line-chart/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
//import Hello2 from '@/components/Hello2.vue'
import LineChart from '@/components/line-chart/line-chart.vue'
@Options({
  components: {
    LineChart,
  },
})
export default class NoName extends Vue {
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  /*background: #ccdad1;*/
  background-color: #fff7f4;
  /*border-right: 3px solid #710627;
  border-left: 3px solid #710627;
  border-bottom: 3px solid #710627;*/
}
.grid-item {
  font-weight: 800;
  font-size: 64px;
  padding: 20px;
}

.item-1 {
  background-color: green;
}
.item-2 {
  background-color: red;
}
.item-3 {
  background-color: blue;
}
.item-4 {
  background-color: aqua;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: 300px 300px 300px;
}
</style>
