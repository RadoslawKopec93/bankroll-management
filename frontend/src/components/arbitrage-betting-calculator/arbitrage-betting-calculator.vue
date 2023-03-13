<template>
<!--  <ArbitrageHeader/>
  <div class="gridWrapper">
    <div class="inputBackground">
      <div class="inputBackground__inputPossition">
        <input/>
      </div>
    </div>
    <div class="inputBackground">
      <div class="inputBackground__inputPossition">
        <input/>
      </div>
    </div>
    <div class="inputBackground">
      <div class="inputBackground__inputPossition">
        <input/>
      </div>
    </div>
  </div>-->
  <div id="app">test
<!--    <input type="text" v-model="newMovie">-->
    <button @click="addMovies">add movie</button>
    <ul>
      <li v-for="movie in movies" :key="movie">
        {{movie}}
        <ArbitrageHeader/>
      </li>
    </ul>
  </div>
  <ArbitrageHeader/>
</template>
<script>
import ArbitrageHeader from "@/components/arbitrage-betting-calculator/arbitrage-header/arbitrage-header.vue";

export  default {/*from "./arbitrage-betting-calculator";*/
  name:"ArbitrageBettingCalculator",
  components:{
    ArbitrageHeader,
  },
  data: () => {
    return {
      newMovie:'',
      movies:['Batman','test2','test3','test4'],
    }
  },
  methods: {
    addMovies(){
      this.newMovie='chuj';
        this.movies.push(this.newMovie);


    }
  }

}

</script>
<style lang="scss">
@import 'arbitrage-betting-calculator.scss';

</style>