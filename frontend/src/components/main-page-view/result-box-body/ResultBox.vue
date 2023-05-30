<template>
  <el-row>
    <el-col><MainHeader/></el-col>
  </el-row>
  <el-row :gutter="5">

    <el-col :span="3">
        <ModifiableDropdownList @selectedItem="setAction" emit-name="selectedItem" :items="dropdownItemsActions" :button-name="action"></ModifiableDropdownList>
        <PkInput class="ResultBox__betInput" v-model="playerBet"/>
        <PkButton @click="assignAction">ADD</PkButton>
    </el-col>
      <el-col :span="3">
          <ModifiableDropdownList @selectedItem1="setPosition" emit-name="selectedItem1" :items="dropdownItemsPositions" :button-name="position"></ModifiableDropdownList>
      </el-col>
      <el-col :span="2">
          <div style="display: flex; flex-direction: column">
              <PkCheckBox v-model="showPositionInDropdown.SB" @change="changingDropdownListValues('SB')">Small Blind</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.BB" @change="changingDropdownListValues('BB')">Big Blind</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.UTG" @change="changingDropdownListValues('UTG')">Under the Gun</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.UTG1" @change="changingDropdownListValues('UTG1')">Under the Gun + 1</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.UTG2" @change="changingDropdownListValues('UTG2')">Under the Gun + 2</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.MP" @change="changingDropdownListValues('MP')">Middle Position </PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.LJ" @change="changingDropdownListValues('LJ')">Low Jack</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.HJ" @change="changingDropdownListValues('HJ')">High Jack</PkCheckBox>
              <PkCheckBox v-model="showPositionInDropdown.CO" @change="changingDropdownListValues('CO')">Cut Off</PkCheckBox>
          </div>
      </el-col>
    <el-col :span="9" style="margin-left: 60px">
      <DeckOfCards/>
    </el-col>
    <el-col :span="6">
         <SingleHand hand-name="Lost 100" :loss-hand="false" :show-hand="true"></SingleHand>
         <SingleHand hand-name="Lost 100" :loss-hand="false" :show-hand="true"></SingleHand>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <div class="ResultBox__streets">
          <PkButton @click="changeStreet(streets.preflop)"> preflop</PkButton>
          <PkButton @click="changeStreet(streets.flop)"> flop</PkButton>
          <PkButton @click="changeStreet(streets.turn)"> turn</PkButton>
          <PkButton @click="changeStreet(streets.river)"> river</PkButton>
          <PkButton @click="revertAction">REMOVE SELECTED ROW</PkButton>
        </div>
        <ag-grid-vue
                style="width: 900px; height: 500px"
                class="ag-theme-alpine"
                :columnDefs="columnDefs.value"
                :rowData="rowData.value"
                :defaultColDef="defaultColDef"
                @grid-ready="onGridReady"
                rowSelection='multiple'
        >
        </ag-grid-vue>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import DeckOfCards from "@/components/main-page-view/deck-of-cards/DeckOfCards.vue";
import MainHeader from '@/components/header/MainHeader.vue';
import { computed, reactive, ref } from "vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import {positions, streets} from "@/global/enums";
import { PkButton, PkCheckBox, PkInput, ModifiableDropdownList } from "@/core/components/element-plus-proxy";
import { useResultReportStore } from "@/components/main-page-view/store/result-box-store"
import SingleHand from "@/components/main-page-view/result-box-body/SingleHand.vue";

const test22 = computed( () => store.getTest())
const test1 = () => {
    console.log(store.getTest().t)
}

const emit = defineEmits(['selectedItem'])
const store = useResultReportStore();

const activeStreet = ref(streets.preflop);
const pot = ref(0);
const gridApi = ref();
const gridColumnApi = ref()
const playerBet = ref();
const action = ref('ACTIONS');
const position = ref('POSITIONS')
const showPositionInDropdown = ref({
    SB: true,
    BB: true,
    UTG: false,
    UTG1: false,
    UTG2: false,
    MP: false,
    LJ: false,
    HJ: false,
    CO: false,
    BTN: false,
})
const positionsMap = ref(new Map<string,boolean>([
    [positions.sb,true],
    [positions.bb,true],
    [positions.utg, false],
    [positions.utg1, false],
    [positions.utg2, false],
    [positions.mp1, false],
    [positions.lj, false],
    [positions.hj, false],
    [positions.co, false],
    [positions.btn,false]]
))
const setAction = (event) =>{
    action.value = event;
}
const setPosition = (event) =>{
    position.value = event;
}
const changingDropdownListValues = (item: string) => {
    if(positionsMap.value.get(item)){
        removeDropdownItem(item);
        positionsMap.value.set(item,false);
    }else{
        positionsMap.value.set(item,true);
        dropdownItemsPositions.value.push(item);
    }
}
const removeDropdownItem = (item: string) => {
    const index = dropdownItemsPositions.value.indexOf(item)
    if (index !== -1) {
        dropdownItemsPositions.value.splice(index, 1);
    }
}
const dropdownItemsActions = ref(["CALL","CHECK","RAISE","FOLD","STRADDLE","BET"])
const dropdownItemsPositions = ref(["SB","BB"])

const revertAction = () => {
    const selectedData = gridApi.value.getSelectedRows();
    gridApi.value.applyTransaction({ remove: selectedData });
};

const changeStreet = (street) => {
    activeStreet.value = street;
}
const onGridReady = (params) => {
    gridApi.value = params.api;
    gridColumnApi.value = params.columnApi;
}

const columnDefs = reactive({value:[
        { headerName: "Street", field: "street" },
        { headerName: "Position", field: "position" },
        { headerName: "Action", field: "action" },
        { headerName: "Value", field: "value" },
        { headerName: "Pot", field: "pot"}
    ],})

const rowData = reactive({value:[]})

const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
};


const assignAction = () => {
    if(action.value === 'BET' || action.value === 'RAISE' || action.value === "STRADDLE") {
        store.lastBetOrRaise = playerBet.value;
        pot.value += Number(playerBet.value);
        const newItems = [{
            street: activeStreet.value,
            position: position.value,
            action: action.value,
            value: playerBet.value,
            pot: pot.value
        }]
        gridApi.value.applyTransaction({
            add: newItems,
        });
    }
    if(action.value === 'CHECK' || action.value === 'FOLD') {
        const newItems = [{
            street: activeStreet.value,
            position: position.value,
            action: action.value,
            value: 0,
            pot: pot.value
        }]
        gridApi.value.applyTransaction({
            add: newItems,
        });
    }
    if(action.value === 'CALL') {
        pot.value += Number(store.lastBetOrRaise);
        const newItems = [{
            street: activeStreet.value,
            position: position.value,
            action: action.value,
            value: store.lastBetOrRaise,
            pot: pot.value
        }]
        gridApi.value.applyTransaction({
            add: newItems,
        });
    }
}

</script>
<style lang="scss">
.ResultBox {
  &__betInput {
    margin: 5px 0 5px 0;
    border: 1px black solid;
  }
   &__streets {
      display: flex;
      width: 400px;
   }
}
</style>