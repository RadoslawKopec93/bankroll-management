<template>
  <el-row>
    <el-col><MainHeader/></el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :span="9"></el-col>
    <el-col :span="6">
        <DropDownList @send-action="assignAction"></DropDownList>
    </el-col>
    <el-col :span="9" style="height: 500px;">
      <DeckOfCards/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <button @click="changeStreet(streets.preflop)"> preflop</button>
        <button @click="changeStreet(streets.flop)"> flop</button>
        <button @click="changeStreet(streets.turn)"> turn</button>
        <button @click="changeStreet(streets.river)"> river</button>
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
import { reactive, ref } from "vue";
import DropDownList from "@/components/MainPageView/result-box-body/DropDownList.vue";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { streets } from "@/global/enums";

const emit = defineEmits(['send-action'])

const activeStreet = ref(streets.preflop);

const gridApi = ref();
const gridColumnApi = ref()
const onGridReady = (params) => {
    gridApi.value = params.api;
    gridColumnApi.value = params.columnApi;
}

const pot = ref(3);

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
    ],})

const changeStreet = (street) => {
    activeStreet.value = street;
}
const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
};

const assignAction = (event) => {
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

}
</style>