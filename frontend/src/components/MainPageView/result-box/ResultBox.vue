<template>
  <el-row>
    <el-col><MainHeader/></el-col>
  </el-row>
  <el-row>
    <el-col :span="9"></el-col>
    <el-col :span="3">
      <div class="ResultBox">
        <button class="ResultBox__dropDownButton">{{ actionNameDropDown }}</button>
        <div class="ResultBox__dropDownList" >
          <button v-for="i in actionsArray" class="ResultBox__dropDownList--choice" @click="actionNameDropDownSet(i)">{{i}}</button>
        </div>
      </div>
      <input class="ResultBox__input">
    </el-col>
    <el-col :span="3">
      <div class="ResultBox">
        <button class="ResultBox__dropDownButton">{{ positionNameDropDown }}</button>
        <div class="ResultBox__dropDownList" >
          <button v-for="i in positionsArray" class="ResultBox__dropDownList--choice" @click="positionNameDropDownSet(i)">{{i}}</button>
        </div>
        <input class="ResultBox__input">
      </div>
    </el-col>
    <el-col :span="9" style="height: 500px;">
      <DeckOfCards/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="2">
      <div class="ResultBox__actionsHeader">flop</div>
    </el-col>
  </el-row>
  <el-row >
     <el-col :span="1">
       <div class="ResultBox__actions">
         <div class="ResultBox__actions--positions">{{positions.sb}}</div>
         <div class="ResultBox__actions--positions">{{positions.bb}}</div>
         <div class="ResultBox__actions--positions">{{positions.utg}}</div>
         <div class="ResultBox__actions--positions">{{positions.utg1}}</div>
         <div class="ResultBox__actions--positions">{{positions.utg2}}</div>
         <div class="ResultBox__actions--positions">{{positions.mp1}}</div>
         <div class="ResultBox__actions--positions">{{positions.lj}}</div>
         <div class="ResultBox__actions--positions">{{positions.hj}}</div>
         <div class="ResultBox__actions--positions">{{positions.co}}</div>
         <div class="ResultBox__actions--positions">{{positions.btn}}</div>
       </div>
     </el-col>
    <el-col :span="1">
       <div class="ResultBox__actions" v-for="i in firstActions">
         <div  class="ResultBox__actions--positions">
           <span v-if="!i.folded">{{i.action}}</span>
           <span v-else>-</span>
         </div>
       </div>
    </el-col>
    <el-col :span="1">
      <div class="ResultBox__actions" v-for="i in firstActions">
        <div class="ResultBox__actions--positions">
          <span v-if="!i.folded || i.position === 'SB' || i.position === 'BB'">{{i.value}}</span>
          <span v-else>-</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import {useCardComponentStore} from "@/components/MainPageView/store/CardComponentStore";
import {useRouter} from "vue-router";
import DeckOfCards from "@/components/MainPageView/DeckOfCards/DeckOfCards.vue";
import MainHeader from '@/components/header/main-header.vue';
import {actions, positions} from "@/global/enums";
import {computed, ref} from "vue";

const store = useCardComponentStore();
const router = useRouter();
const actionNameDropDown = ref('action');
const positionNameDropDown = ref('position');

const actionsArray = [actions.call,actions.fold,actions.raise,actions.raise,actions.check]
const positionsArray = [positions.sb,positions.bb,positions.utg,positions.utg1,positions.utg2,positions.mp1,
positions.lj,positions.hj,positions.co,positions.btn]

const firstActions = [
    {
      action: actions.sb,
      position: positions.sb,
      value: 1,
      folded: true,
    },
  {
    action: actions.bb,
    position: positions.bb,
    value: 2,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.utg,
    value: 0,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.utg1,
    value: 0,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.utg2,
    value: 0,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.mp1,
    value: 0,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.lj,
    value: 0,
    folded: true,
  },
  {
    action: actions.fold,
    position: positions.hj,
    value: 0,
    folded: true,
  },
  {
    action: actions.raise,
    position: positions.co,
    value: 6,
    folded: false,
  },
  {
    action: actions.call,
    position: positions.btn,
    value: 6,
    folded: false,
  }
]

const actionNameDropDownSet = (action) =>{
   actionNameDropDown.value = action;
}

const positionNameDropDownSet = (position) => {
  positionNameDropDown.value = position;
}

</script>
<style lang="scss">
.ResultBox {
  position: relative;
  display: inline-block;
  border: none;
  &:hover {
    .ResultBox__dropDownList {
      display: block;
    }
  }
  &__dropDownButton {
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 10px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    display: block;
    width: 100%;
  }

  &__dropDownList {
    position: absolute;
    height: 120px;
    width: 100%;
    display: none;

    &--choice {
      color: white;
      border: none;
      height: 40px;
      width: 100%;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:focus{
        background-color: white;
        color: black;
        transition: all .6s;
      }
    }
  }
  &__actions {
    display: block;
    &--positions{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      border: black;
      text-transform: uppercase;
      width: 50px;
      height: 30px;
      background-color: aqua;
    }
  }
  &__actionsHeader{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 50px;
    width: 100%;
  }
  &__input{
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>