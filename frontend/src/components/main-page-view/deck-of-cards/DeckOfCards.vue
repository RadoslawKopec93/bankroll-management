<template>
<figure class="DeckOfCards">
  <div class="DeckOfCards__rows" @drop="onDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
  <Card
      v-for="card in getList(1)"
      :key="card.id"
      draggable="true"
      @dragstart="startDrag($event,card)"
      :card-name="card.name"
      :card-color="card.color"
      :is-visible="true"
  />
  </div>
  <div class="DeckOfCards__rows" @drop="onDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <Card
        v-for="card in getList(2)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        :card-name="card.name"
        :card-color="card.color"
        :is-visible="true"
    />
  </div>
  <div class="DeckOfCards__rows" @drop="onDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <Card
        v-for="card in getList(3)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        :card-name="card.name"
        :card-color="card.color"
        :is-visible="true"
    />
  </div>
  <div class="DeckOfCards__rows" @drop="onDrop($event)"
       @dragenter.prevent
       @dragover.prevent>
    <Card
        v-for="card in getList(4)"
        :key="card.id"
        draggable="true"
        @dragstart="startDrag($event,card)"
        :card-name="card.name"
        :card-color="card.color"
        :is-visible="true"
    />
  </div>
  <div class="DeckOfCards__zone" @drop="onDropSelected($event)"
       @dragenter.prevent
       @dragover.prevent>
  <div class="DeckOfCards__zone--selected">
      <Card draggable="true"
            @dragstart="startDrag($event,cardsOnBoard[0])"
          :card-name="cardsOnBoard[0].name"
          :card-color="cardsOnBoard[0].color"
          :is-visible="firstCard"
      />
      <Card draggable="true"
            @dragstart="startDrag($event,cardsOnBoard[1])"
          :card-name="cardsOnBoard[1].name"
          :card-color="cardsOnBoard[1].color"
          :is-visible="secondCard"
      />
      <Card draggable="true"
            @dragstart="startDrag($event,cardsOnBoard[2])"
          :card-name="cardsOnBoard[2].name"
          :card-color="cardsOnBoard[2].color"
          :is-visible="thirdCard"
      />

      <Card draggable="true"
            @dragstart="startDrag($event,cardsOnBoard[3])"
          :card-name="cardsOnBoard[3].name"
          :card-color="cardsOnBoard[3].color"
          :is-visible="fourthCard"
      />
      <Card draggable="true"
            @dragstart="startDrag($event,cardsOnBoard[4])"
          :card-name="cardsOnBoard[4].name"
          :card-color="cardsOnBoard[4].color"
          :is-visible="fifthCard"
      />
    </div >
  </div>
    <div class="DeckOfCards__underZoneInputAndButton"></div>
    <PkInput v-model="comment" placeholder="comment" class="DeckOfCards__underZoneInputAndButton--input"></PkInput>
    <PkButton @click="addCards" class="DeckOfCards__underZoneInputAndButton--confirmButton">CONFIRM</PkButton>
  </figure>

</template>
<script setup lang="ts">
import Card from "@/components/main-page-view/card/card.vue";
import {Ref, ref} from "vue";
import { useResultReportStore } from "@/components/main-page-view/store/result-box-store";
import { PkButton, PkInput } from '@/core/components/element-plus-proxy'
type cardTypeArray = {id: string ,name: string,color:string,list:number, mainId: string}[]
export type cardType = {id: string ,name: string,color:string,list:number, mainId: string}

const store = useResultReportStore();

const comment = ref("");
const cardsOnBoard: cardType[] = [
    {id:'0',name:'B',color:'CLUB',list:1, mainId: "0"},
    {id:'0',name:'B',color:'CLUB',list:1, mainId: "0"},
    {id:'0',name:'B',color:'CLUB',list:1, mainId: "0"},
    {id:'0',name:'B',color:'CLUB',list:1, mainId: "0"},
    {id:'0',name:'B',color:'CLUB',list:1, mainId: "0"},
]

let firstCard = false;
let secondCard = false;
let thirdCard = false;
let fourthCard = false;
let fifthCard = false;

let count = 0;

const addCards = () => {
    const sortedCards: cardType [] = cardsOnBoard.filter( card =>{
        if(card.name !== 'B'){
            return card;
        }
    })
    store.addBoardCards(sortedCards, comment.value);
}

const onDrop = (event) =>{
  const itemID = event.dataTransfer.getData('itemID');
  const item = cardNamesClub.value.find((item) => item.id == itemID) as cardType;
  if(!item) {
    count--;
    switch (count) {
      case 0: {
        cardNamesClub.value.push(cardsOnBoard[0]);
        firstCard = false;
        break;
      }
      case 1: {
        cardNamesClub.value.push(cardsOnBoard[1]);
        secondCard = false;
        break;
      }
      case 2: {
        cardNamesClub.value.push(cardsOnBoard[2]);
        thirdCard = false;
        break;
      }
      case 3: {
        cardNamesClub.value.push(cardsOnBoard[3]);
        fourthCard = false;
        break;
      }
      case 4: {
        cardNamesClub.value.push(cardsOnBoard[4]);
        fifthCard = false;
        break;
      }
    }
    cardNamesClub.value.sort((a, b) => (a.id < b.id ? -1 : 1))
  }
}
const onDropSelected = (event) =>{
  const itemID = event.dataTransfer.getData('itemID');
  const item = cardNamesClub.value.find((item) => item.id == itemID) as cardType;
  if(item) {
    const newList = cardNamesClub.value.filter((item) => item.id != itemID) as cardTypeArray;
    cardNamesClub.value = newList;

    switch (count) {
      case 0: {
          cardsOnBoard[0] = item;
        firstCard = true;
        break;
      }
      case 1: {
          cardsOnBoard[1] = item;
        secondCard = true;
        break;
      }
      case 2: {
          cardsOnBoard[2] = item;
        thirdCard = true;
        break;
      }
      case 3: {
          cardsOnBoard[3] = item;
        fourthCard = true;
        break;
      }
      case 4: {
          cardsOnBoard[4] = item;
        fifthCard = true;
        break;
      }
    }
    count++
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


</script>
<style lang="scss">
.DeckOfCards{

   &__underZoneInputAndButton {
     display: inline-block;
     &--input{
       margin-top: 5px;
       max-width: 70%;
     }
     &--confirmButton {
       margin-top: 5px;
       max-width: 30%;
     }
   }
   &__rows{
     display: flex;
     justify-content: center;
   }
   &__zone{
     right: 0;
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100px;
     width: 100%;
     background-color: blanchedalmond;
     margin-top: 20px;
     border: 1px solid black;
     &--selected{
       display: inline-flex;
     }
     &--input{
     display: flex;
       justify-content: end;
     }
     &--button{
       width: 100%;
       background-color: black;
       color: white;
       align-self: end;
       font-weight: bold;
       &:hover{
         background-color: #cb2d06;
         color: black;
       }
     }
   }
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