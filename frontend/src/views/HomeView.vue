<template>
  <!--<button @click="goToAbout" style="height: 20px; width: 20px">about</button>-->
<!--<no-name></no-name>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
//import Hello2 from '@/components/Hello2.vue'
//import LineChart from '@/components/line-chart/line-chart.vue'
import NoName from '@/components/MainPageView/MainPageView.vue'
@Options({
  components: {
    //LineChart,
    NoName
  },
})
export default class HomeView extends Vue {
 public goToAbout(){
    window.open("http://localhost:3001/about");
 }
}
</script>
