<template>
    <el-row>
      <el-col><MainHeader/></el-col>
    </el-row>
    <el-row>
      <el-col :span="9"><LineChart/></el-col>
      <el-col :span="6"><DatePicker v-model="testt1" @click="test1"/></el-col>
      <el-col :span="9"  class="MainPageView"     >
          <div v-for="t in test" class="MainPageView__resultButton">
          <PkButton
            @click="goToResult"
            button-name="result"
            :result="resultData.result"
            :date="resultData.date"
          >{{ resultData.result }} zl<br>{{resultData.date}}</PkButton>
          </div>
      </el-col>
    </el-row>


</template>

<script setup lang="ts">
import LineChart from '@/components/main-page-view/line-chart/LineChart.vue';
import MainHeader from '@/components/header/MainHeader.vue';
import ResultButton from '@/components/main-page-view/result-box-body/ResultButton.vue'
import { PkButton } from "@/core/components/element-plus-proxy";
import { useRouter } from "vue-router";
import {computed, ref} from "vue";
import '@vuepic/vue-datepicker/dist/main.css';
import ResultBox from "@/components/main-page-view/result-box-body/ResultBox.vue";
import DatePicker from "@/core/components/element-plus/date-picker.vue";

const router = useRouter();
const date = ref();

const testt1 = computed({
    get: () => date.value,
    set: v => date.value = v,
})
const test1 = () => {
    console.log(date.value);
}

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
.MainPageView {
  height: 500px;
  width: 400px;
  display: flex;
  flex-wrap: wrap ;
  flex-direction: column;

  &__resultButton {
    height: 40px;
    width: 100px ;
  }

}
body{
  padding: 0;
}
</style>