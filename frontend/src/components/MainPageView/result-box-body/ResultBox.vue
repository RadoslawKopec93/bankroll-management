<template>
  <el-row>
    <el-col><MainHeader/></el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :span="7">

    </el-col>
      <el-col :span="2">
          <el-row>
              <PkCheckBox v-model="smallBlind">Small Blind</PkCheckBox>
              <PkCheckBox v-model="bigBlind">Big Blind</PkCheckBox>
              <PkCheckBox v-model="underTheGun">Under the Gun</PkCheckBox>
              <PkCheckBox v-model="underTheGun1">Under the Gun + 1</PkCheckBox>
              <PkCheckBox v-model="underTheGun2">Under the Gun + 2</PkCheckBox>
              <PkCheckBox v-model="middlePosition">Middle Position </PkCheckBox>
              <PkCheckBox v-model="lowJack">Low Jack</PkCheckBox>
              <PkCheckBox v-model="highJack">High Jack</PkCheckBox>
              <PkCheckBox v-model="cutOff">Cut Off</PkCheckBox>
              <PkCheckBox v-model="button">Button</PkCheckBox>
          </el-row>
      </el-col>
    <el-col :span="6">
        <DropDownList @send-action="assignAction"></DropDownList>
    </el-col>
    <el-col :span="9" style="height: 500px;">
      <DeckOfCards/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <div class="ResultBox__streets">
          <PkButton @click="changeStreet(streets.preflop)"> preflop</PkButton>
          <PkButton @click="changeStreet(streets.flop)"> flop</PkButton>
          <PkButton @click="changeStreet(streets.turn)"> turn</PkButton>
          <PkButton @click="changeStreet(streets.river)"> river</PkButton>
        </div>
        <ag-grid-vue
                style="width: 900px; height: 500px"
                class="ag-theme-alpine"
                :columnDefs="columnDefs.value"
                :rowData="rowData.value"
                :defaultColDef="defaultColDef"
                @grid-ready="onGridReady"
        >
        </ag-grid-vue>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import DeckOfCards from "@/components/MainPageView/DeckOfCards/DeckOfCards.vue";
import MainHeader from '@/components/header/main-header.vue';
import {computed, reactive, ref} from "vue";
import DropDownList from "@/components/MainPageView/result-box-body/DropDownList.vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { streets } from "@/global/enums";
import { PkButton, PkCheckBox } from "@/core/components/element-plus-proxy";
import {useResultReportStore} from "@/components/MainPageView/store/ResultReport";
import {c} from "chart.js/dist/chunks/helpers.core";

const emit = defineEmits(['send-action'])

const store = useResultReportStore();
const smallBlind = computed( {
        get:() => store.positionsMap.get("SB"),
        set: v => store.positionsMap.set("SB", v)
})

const bigBlind = computed( {
    get:() => store.positionsMap.get("BB"),
    set: v => store.positionsMap.set("BB", v)
})
const underTheGun = computed( {
    get:() => store.positionsMap.get("UTG"),
    set: v => store.positionsMap.set("UTG", v)
})
const underTheGun1 = computed( {
    get:() => store.positionsMap.get("UTG1"),
    set: v => store.positionsMap.set("UTG1", v)
})
const underTheGun2 = computed( {
    get:() => store.positionsMap.get("UTG2"),
    set: v => store.positionsMap.set("UTG2", v)
})
const middlePosition = computed( {
    get:() => store.positionsMap.get("MP"),
    set: v => store.positionsMap.set("MP", v)
})
const lowJack = computed( {
    get:() => store.positionsMap.get("LJ"),
    set: v => store.positionsMap.set("LJ", v)
})
const highJack = computed( {
    get:() => store.positionsMap.get("HJ"),
    set: v => store.positionsMap.set("HJ", v)
})
const cutOff = computed( {
    get:() => store.positionsMap.get("CO"),
    set: v => store.positionsMap.set("CO", v)
})
const button = computed( {
    get:() => store.positionsMap.get("BTN"),
    set: v => store.positionsMap.set("BTN", v)
})

const activeStreet = ref(streets.preflop);
const pot = ref(3);
const gridApi = ref();
const gridColumnApi = ref()
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

const rowData = reactive({value:[
        { street: activeStreet.value, position: "SB", action: "BET", value: 1, pot: 1 },
        { street: activeStreet.value, position: "BB", action: "BET", value: 2, pot: 3 },
    ]
})



const changeStreet = (street) => {
    activeStreet.value = street;
}
const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
};


const assignAction = (event) => {
    if(event.action === 'CHECK' || event.a === 'FOLD')
      pot.value += parseInt(event.value);

    const newItems = [{
        street: activeStreet.value,
        position: event.position,
        action: event.action,
        value: event.value,
        pot: pot.value
    }]
    gridApi.value.applyTransaction({
        add: newItems,
    });
}

</script>
<style lang="scss">
.ResultBox {
   &__streets {
      display: flex;
      width: 400px;
   }
}
</style>