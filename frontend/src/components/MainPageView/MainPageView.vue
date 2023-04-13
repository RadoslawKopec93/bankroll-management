<template>
    <el-row>
      <el-col><MainHeader/></el-col>
    </el-row>
    <el-row>
      <el-col :span="9"><LineChart/></el-col>
      <el-col :span="6"><Datepicker v-model="date"/></el-col>
      <el-col :span="9" style="height: 500px;">
        <MyButton v-for="t in test"
            @click="goToResult"
            class="MainPageView"
            button-name="result"
            :result="resultData.result"
            :date="resultData.date"
        >{{ resultData.result }} zl<br>{{resultData.date}}</MyButton>
      </el-col>
    </el-row>


</template>

<script setup lang="ts">
import LineChart from '@/components/MainPageView/line-chart/line-chart.vue';
import MainHeader from '@/components/header/main-header.vue';
import { MyButton } from "@/core/components/element-plus-proxy";
import { useRouter } from "vue-router";
import {computed, ref} from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const router = useRouter();
const date = ref();

const test = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const resultData = computed( () => {
  //TODO data from store.
  return {
    date: "11.05.2023",
    result: 102,
  }
})

const goToResult = () => {
   router.push('/result-box');
}

</script>
<style lang="scss">
body{
  padding: 0;
}
</style>