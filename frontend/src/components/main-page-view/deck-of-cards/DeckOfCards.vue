<template>
<figure class="DeckOfCards">
    <div class="DeckOfCards__rows DeckOfCards__clubs" @drop="onDrop($event)"
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
    <div class="DeckOfCards__rows DeckOfCards__diamonds" @drop="onDrop($event)"
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
    <div class="DeckOfCards__rows DeckOfCards__spades" @drop="onDrop($event)"
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
    <div class="DeckOfCards__rows DeckOfCards__hearts" @drop="onDrop($event)"
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
    <div class="DeckOfCards__zone" >
        <div class="DeckOfCards__zone--selected">
            <div class="DeckOfCards__zone--cardZone"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="onDropSelected($event, 0)"
            >
            <Card  draggable="true"
                   v-if="!!handData.boardCards[0]"
                  @dragstart="startDragBoard($event,handData.boardCards[0], 0)"
                  :card-name="handData.boardCards[0].name"
                  :card-color="handData.boardCards[0].color"
                  :is-visible="!!handData.boardCards[0]"
            />
            </div>
            <div class="DeckOfCards__zone--cardZone"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="onDropSelected($event, 1)">
            <Card draggable="true"
                  v-if="!!handData.boardCards[1]"
                  @dragstart="startDragBoard($event,handData.boardCards[1], 1)"
                  :card-name="handData.boardCards[1].name"
                  :card-color="handData.boardCards[1].color"
                  :is-visible="!!handData.boardCards[1]"
            />
                </div>
            <div class="DeckOfCards__zone--cardZone"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="onDropSelected($event, 2)">
            <Card draggable="true"
                  v-if="!!handData.boardCards[2]"
                  @dragstart="startDragBoard($event,handData.boardCards[2], 2)"
                  :card-name="handData.boardCards[2].name"
                  :card-color="handData.boardCards[2].color"
                  :is-visible="!!handData.boardCards[2]"
            />
            </div>
            <div class="DeckOfCards__zone--cardZone"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="onDropSelected($event, 3)">
            <Card draggable="true"
                  v-if="!!handData.boardCards[3]"
                  @dragstart="startDragBoard($event,handData.boardCards[3], 3)"
                  :card-name="handData.boardCards[3].name"
                  :card-color="handData.boardCards[3].color"
                  :is-visible="!!handData.boardCards[3]"
            />
            </div>
            <div class="DeckOfCards__zone--cardZone"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="onDropSelected($event, 4)">
            <Card draggable="true"
                  v-if="!!handData.boardCards[4]"
                  @dragstart="startDragBoard($event,handData.boardCards[4], 4)"
                  :card-name="handData.boardCards[4].name"
                  :card-color="handData.boardCards[4].color"
                  :is-visible="!!handData.boardCards[4]"
            />
                </div>
        </div >
    </div>
    <div class="DeckOfCards__underZoneInputAndButton">
    <PkInput v-model="comment" placeholder="comment" class="DeckOfCards__underZoneInputAndButton&#45;&#45;input"></PkInput>
    <PkButton @click="$emit('emitCard',addCards)" class="DeckOfCards__underZoneInputAndButton&#45;&#45;confirmButton">
        CONFIRM</PkButton></div>

  </figure>

</template>
<script setup lang="ts">
import Card from "@/components/main-page-view/card/card.vue";
import {computed, onMounted, Ref, ref} from "vue";
import { useResultReportStore } from "@/components/main-page-view/store/result-box-store";
import { PkButton, PkInput } from '@/core/components/element-plus-proxy'
import {CardStructure} from "@/global/card-structure";
import { HandData } from "@/components/main-page-view/result-box-body/HandData";
type cardTypeArray = {id: string ,name: string,color:string,list:number, mainId: string}[]

/*const props = defineProps({
    visiblePosition: {
        type: Map,
        required: true
    }
})*/

const store = useResultReportStore();
const handData = new HandData();

const comment = ref("");
const cardsOnBoard: CardStructure[] = []



let count = 0;

const addCards = computed( ()=> {
    const sortedCards: CardStructure [] = cardsOnBoard.filter(card =>{
        if(card.name !== 'B'){
            return card;
        }
    })
    //store.addBoardCards(sortedCards, comment.value);
    return {
        cards: sortedCards,
        comment: comment.value
    }
});

const onDrop = (event) => {
  const card = event.dataTransfer.getData('whichCard');
        cardNamesClub.value.push(handData.boardCards[0]);

}
const boardCards = ref<CardStructure[] | undefined>();
const onDropSelected = (event, number) =>{
  const itemID = event.dataTransfer.getData('itemID');
  const item = cardNamesClub.value.find((item) => item.id == itemID);
  if(item) {
      handData.boardCards[number] = item;
      cardNamesClub.value = cardNamesClub.value.filter((item) => item.id != itemID);
  } else {
      console.log(number);
      const card = event.dataTransfer.getData('whichCard');
    /*  handData.boardCards[number] = handData.boardCards[card];
      console.log(handData.boardCards[number]);
      console.log(handData.boardCards[card]);*/
      handData.boardCards.push(handData.boardCards[0]);
      console.log(handData.boardCards.length);
     // handData.boardCards[0] = undefined;
      console.log(handData.boardCards[0]);
  }
}
const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('itemID', item.id);
}
const startDragBoard = (event, item, whichCard) =>{
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('whichCard', whichCard);
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
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
          "clubs ."
          "diamonds ."
          "spades ."
          "hearts ."
          "zone ."
          "underZone .";
  &__clubs{
    grid-area: clubs;
  }
  &__diamonds{
    grid-area: diamonds;
  }
  &__spades{
    grid-area: spades;
  }
  &__hearts{
    grid-area: hearts;
  }
   &__underZoneInputAndButton {
     grid-area: underZone;
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
     grid-area: zone;
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
       &--cardZone {
           border: black solid 1px;
           width: 40px;
           height: 60px;
           margin:5px;
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