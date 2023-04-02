<template>
    <el-row>
      <el-col><MainHeader/></el-col>
    </el-row>
    <el-row>
      <el-col :span="9"><LineChart/></el-col>
      <el-col :span="6"><ResultBox/></el-col>
      <el-col :span="9" style="height: 500px;"><DeckOfCards/></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="9" :offset="15" style="background-color: green">

        <div class="drop-zone"
             @drop="onDrop($event,1)"
             @dragenter.prevent
             @dragover.prevent>

        <div v-for="item in getList(1)"
             :key="item.id" class="drag-el"
             draggable="true"
             @dragstart="startDrag($event, item)"

        >{{item.title}}</div>
      </div>

        <div class="drop-zone"
             @drop="onDrop($event,2)"
             @dragenter.prevent
             @dragover.prevent
        >
          <div v-for="item in getList(2)"
               :key="item.id"
               class="drag-el"
               draggable="true"
               @dragstart="startDrag($event, item)"
          >{{item.title}}
          </div>
        </div>

      </el-col>

    </el-row>

</template>

<script setup lang="ts">
import LineChart from '@/components/MainPageView/line-chart/line-chart.vue'
import ArbitrageBettingCalculator from "@/components/arbitrage-betting-calculator/arbitrage-betting-calculator.vue";
import MainHeader from '@/components/header/main-header.vue';
import ResultBox from "@/components/MainPageView/result-box/result-box.vue"
import DeckOfCards from "@/components/MainPageView/DeckOfCards/DeckOfCards.vue";
import {ref} from "vue";

const items = ref([
  { id:0, title: 'Item A', list: 1},
  { id:1, title: 'Item B', list: 1},
  { id:2, title: 'Item C', list: 2}
])

const getList = (list) => {
  return items.value.filter((item) => item.list == list);
}

const startDrag = (event, item) => {
  console.log(item);

  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('itemID', item.id);
}

const onDrop = (event, list) =>{
  const itemID = event.dataTransfer.getData('itemID');
  const item = items.value.find((item) => item.id == itemID);
  item.list = list;
}

</script>

<style>
body{
  padding: 0;
}
/*.drop-zone{
  width: 50%;
  margin: 50px auto;
  background-color: green;
  padding: 10px;
  min-width: 10px;
}

.drag-el {
  background-color: #2A52BE;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}*/
.el-row {
  margin-bottom: 0;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>