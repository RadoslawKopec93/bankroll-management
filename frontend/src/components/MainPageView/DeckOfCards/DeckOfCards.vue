<template>
<figure>
  <!--   <ul>
      <li v-for="card in cardNames">
        <Card
            :card-name="card"
            card-color="DIAMOND"
            :is-visible="true"
        />
      </li>
    </ul>
    <ul>
      <li v-for="card in cardNames">
        <Card
            :card-name="card"
            card-color="SPADE"
            :is-visible="true"
        />
      </li>
    </ul>-->
<!--  <ul>
    <li v-for="card in cardNames">
      <Card
          :card-name="card"
          card-color="HEART"
          :is-visible="true"
      />
    </li>
  </ul>-->
<!--  <div>
      <div v-for="card in cardNamesDiamond"
           :key="card.id + card.color">
        <Card
            :card-name="card.id"
            :card-color="card.color"
            :is-visible="true"
        />
      </div>
  </div>-->
  <ul @drop="onDrop($event,1)"
      @dragenter.prevent
      @dragover.prevent>
    <li v-for="card in getList(1)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        >
      <Card
          :card-name="card.name"
          :card-color="card.color"
          :is-visible="true"
      />
    </li>
  </ul>
  <ul @drop="onDrop($event,2)"
      @dragenter.prevent
      @dragover.prevent>
    <li v-for="card in getList(2)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        >
      <Card
          :card-name="card.name"
          :card-color="card.color"
          :is-visible="true"
      />
    </li>
  </ul>
  <ul @drop="onDrop($event,3)"
      @dragenter.prevent
      @dragover.prevent>
    <li v-for="card in getList(3)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        >
      <Card
          :card-name="card.name"
          :card-color="card.color"
          :is-visible="true"
      />
    </li>
  </ul>
  <ul @drop="onDrop($event,4)"
      @dragenter.prevent
      @dragover.prevent>
    <li v-for="card in getList(4)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        >
      <Card
          :card-name="card.name"
          :card-color="card.color"
          :is-visible="true"
      />
    </li>
  </ul>
  <div class="selectedCard" @drop="onDropSelected($event)"
       @dragenter.prevent
       @dragover.prevent>
    <div  draggable="true"
          @dragstart="startDrag($event,firstFlopCard)">
      <Card
          :card-name="firstFlopCard.name"
          :card-color="firstFlopCard.color"
          :is-visible="first"
      />
    </div>
    <!--    <div>
          <Card
              card-name="K"
              card-color="CLUB"
              :is-visible="true"
          />
        </div>-->
       </div>
  </figure>

</template>
<script setup lang="ts">
import Card from "@/components/MainPageView/card/card.vue";
import {Ref, ref} from "vue";
type cardTypeArray = {id: string ,name: string,color:string,list:number, mainId: string}[]
type cardType = {id: string ,name: string,color:string,list:number, mainId: string}

const firstFlopCard = ref({id:'0',name:'A',color:'CLUB',list:1, mainId: "0"})
let first = false;
const onDrop = (event, list) =>{
    const itemID = event.dataTransfer.getData('itemID');
    cardNamesClub.value.push(firstFlopCard.value);
    //firstFlopCard.value = item;
    first = false;
}
const onDropSelected = (event) =>{
  const itemID = event.dataTransfer.getData('itemID');
  const item = cardNamesClub.value.find((item) => item.id == itemID) as cardType;
  const newList = cardNamesClub.value.filter((item) => item.id != itemID) as cardTypeArray;
  cardNamesClub.value = newList;
  firstFlopCard.value = item;
  first = true;
}
const segratedlist: Ref<cardTypeArray> = ref([])

const segregateSelectedCard = (item) => {
  if(segratedlist[0].id === 'start'){
    segratedlist[0] = item;
  }else {
    let countSelectedElements = 0;
    cardNamesClub.value.forEach((card) => {
      if (card.list === 5)
        countSelectedElements++;
    })
    //return countSelectedElements;
  }
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('itemID', item.id);
}
let cardNamesClub = ref([
    {id:'0',name:'A',color:'CLUB',list:1, mainId: "0"},
    {id:'1',name:'K',color:'CLUB',list:1, mainId: "1"},
    {id:'2',name:'Q',color:'CLUB',list:1, mainId: "2"},
    {id:'3',name:'J',color:'CLUB',list:1, mainId: "3"},
    {id:'4',name:'10',color:'CLUB',list:1, mainId: "4"},
    {id:'5',name:'9',color:'CLUB',list:1, mainId: "5"},
    {id:'6',name:'8',color:'CLUB',list:1, mainId: "6"},
    {id:'7',name:'7',color:'CLUB',list:1, mainId: "7"},
    {id:'8',name:'6',color:'CLUB',list:1, mainId: "8"},
    {id:'9',name:'5',color:'CLUB',list:1, mainId: "9"},
    {id:'10',name:'4',color:'CLUB',list:1, mainId: "10"},
    {id:'11',name:'3',color:'CLUB',list:1, mainId: "11"},
    {id:'12',name:'2',color:'CLUB',list:1, mainId: "12"},
    {id:'13',name:'A',color:'DIAMOND',list:2, mainId: "13"},
    {id:'14',name:'K',color:'DIAMOND',list:2, mainId: "14"},
    {id:'15',name:'Q',color:'DIAMOND',list:2, mainId: "15"},
    {id:'16',name:'J',color:'DIAMOND',list:2, mainId: "16"},
    {id:'17',name:'10',color:'DIAMOND',list:2, mainId: "17"},
    {id:'18',name:'9',color:'DIAMOND',list:2, mainId: "18"},
    {id:'19',name:'8',color:'DIAMOND',list:2, mainId: "19"},
    {id:'20',name:'7',color:'DIAMOND',list:2, mainId: "20"},
    {id:'21',name:'6',color:'DIAMOND',list:2, mainId: "21"},
    {id:'22',name:'5',color:'DIAMOND',list:2, mainId: "22"},
    {id:'23',name:'4',color:'DIAMOND',list:2, mainId: "23"},
  {id:'24',name:'3',color:'DIAMOND',list:2, mainId: "24"},
  {id:'25',name:'2',color:'DIAMOND',list:2, mainId: "25"},
  {id:'26',name:'A',color:'SPADE',list:3, mainId: "26"},
  {id:'27',name:'K',color:'SPADE',list:3, mainId: "27"},
  {id:'28',name:'Q',color:'SPADE',list:3, mainId: "28"},
  {id:'29',name:'J',color:'SPADE',list:3, mainId: "29"},
  {id:'30',name:'10',color:'SPADE',list:3, mainId: "30"},
  {id:'31',name:'9',color:'SPADE',list:3, mainId: "31"},
  {id:'32',name:'8',color:'SPADE',list:3, mainId: "32"},
  {id:'33',name:'7',color:'SPADE',list:3, mainId: "33"},
  {id:'34',name:'6',color:'SPADE',list:3, mainId: "34"},
  {id:'35',name:'5',color:'SPADE',list:3, mainId: "35"},
  {id:'36',name:'4',color:'SPADE',list:3, mainId: "36"},
  {id:'37',name:'3',color:'SPADE',list:3, mainId: "37"},
  {id:'38',name:'2',color:'SPADE',list:3, mainId: "38"},
  {id:'39',name:'A',color:'HEART',list:4, mainId: "39"},
  {id:'40',name:'K',color:'HEART',list:4, mainId: "40"},
  {id:'41',name:'Q',color:'HEART',list:4, mainId: "41"},
  {id:'42',name:'J',color:'HEART',list:4, mainId: "42"},
  {id:'43',name:'10',color:'HEART',list:4, mainId: "43"},
  {id:'44',name:'9',color:'HEART',list:4, mainId: "44"},
  {id:'45',name:'8',color:'HEART',list:4, mainId: "45"},
  {id:'46',name:'7',color:'HEART',list:4, mainId: "46"},
  {id:'47',name:'6',color:'HEART',list:4, mainId: "47"},
  {id:'48',name:'5',color:'HEART',list:4, mainId: "48"},
  {id:'49',name:'4',color:'HEART',list:4, mainId: "49"},
  {id:'50',name:'3',color:'HEART',list:4, mainId: "50"},
  {id:'51',name:'2',color:'HEART',list:4, mainId: "51"},


]);

const getList = (list) => {
  return cardNamesClub.value.filter((item) => item.list == list);
}
const getList1 = () => {
  return segratedlist.value
}


</script>
<style lang="scss">
.selectedCard{
  display: inline-flex;
  height: 55px;
  width: 180px;
  border: solid;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
      // background-color: #006699;
//text-align: center;
li {
  display: inline-flex;
  padding: 0;
  margin: 0;

}}
</style>