<template>
    <el-row>
      <el-col><MainHeader/></el-col>
    </el-row>
    <el-row>
      <el-col :span="9"><LineChart/></el-col>
      <el-col :span="6"><ResultBox/></el-col>
      <el-col :span="9" style="height: 500px;"><DeckOfCards/></el-col>
    </el-row>


</template>

<script setup lang="ts">
import LineChart from '@/components/MainPageView/line-chart/line-chart.vue';
import MainHeader from '@/components/header/main-header.vue';
import ResultBox from "@/components/MainPageView/result-box/result-box.vue"
import DeckOfCards from "@/components/MainPageView/DeckOfCards/DeckOfCards.vue";


</script>

<style>
body{
  padding: 0;
}
</style>