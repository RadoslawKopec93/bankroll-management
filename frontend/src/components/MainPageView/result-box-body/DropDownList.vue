<template>
    <div v-if="isAction">
      <div class="DropDownList">
        <div class="DropDownList__box">
          <button class="DropDownList__box--dropDownButton">{{ dropDownName }}</button>
          <div class="DropDownList__box--dropDownList" >
             <button v-for="i in actionsArray" class="DropDownList__box--dropDownList--choice" @click="setChoosenAction(i)">{{i}}</button>
          </div>
        </div>
     <div class="DropDownList__functionality">
        <input class="DropDownList__functionality--input">
        <button class="DropDownList__functionality--button" @click="$emit('add', 2)">test</button>
      </div>
      </div>
    </div>

   <div v-if="!isAction">
       <div class="DropDownList__box">
            <button class="DropDownList__box&#45;&#45;dropDownButton">{{ positionNameDropDown }}</button>
            <div class="DropDownList__box&#45;&#45;dropDownList" >
                <button v-for="i in positionsArray" class="DropDownList__box--dropDownList--choice" @click="setChoosenPosition(i)">{{i}}</button>
            </div>
        </div>
        <div class="DropDownList__functionality">
            <input class="DropDownList__functionality--input">
            <button class="DropDownList__functionality--button" @click="$emit('add', 2)">test</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {actions, positions} from "@/global/enums";
import {computed, ref} from "vue";

/*interface Props {
    isAction: Boolean,
   // dropDownPositions: Boolean,
}*/

const props = defineProps({
    isAction: Boolean
});


const actionsArray = [actions.call,actions.fold,actions.raise,actions.raise,actions.check]
const positionsArray = [positions.sb,positions.bb,positions.utg,positions.utg1,positions.utg2,positions.mp1,
    positions.lj,positions.hj,positions.co,positions.btn]
const dropDownName = ref('action');
const positionNameDropDown = ref('position');

const setChoosenPosition = (value) => {
    positionNameDropDown.value = value;
}

const setChoosenAction = (value) => {
    dropDownName.value = value;
}


</script>

<style scoped lang="scss">
.DropDownList {
  &__box {
    position: relative;
    display: inline-block;
    border: none;
    width: 100%;
    margin-right: 5px;

    &:hover {
      .DropDownList__box--dropDownList {
        display: block;
      }
    }

    &--dropDownButton {
      background-color: red;
      color: white;
      font-weight: bold;
      padding: 10px;
      font-size: 15px;
      border: black solid 2px;
      cursor: pointer;
      width: 100%;
    }

    &--dropDownList {
      position: absolute;
      width: 100%;
      display: none;

      &--choice {
        color: white;
        border: none;
        height: 40px;
        width: 100%;
        background-color: black;
        /*   display: flex;
      align-items: center;
      justify-content: center;*/
        cursor: pointer;

        &:focus {
          background-color: white;
          color: black;
          transition: all .6s;
        }
      }
    }
  }
  &__functionality {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &--input{
      margin: 10px 0 10px 0;
      width: 95%;
      height: 20px;
      border: solid black 2px;
      border-radius: 5px;
    }

    &--button {
      border: solid black 2px;
      border-radius: 5px;
      width: 100%;
      height: 30px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        cursor: pointer;
        filter: brightness(85%);
        transition: 0.5s;
      }
    }
  }
}
</style>