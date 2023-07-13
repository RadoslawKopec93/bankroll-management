<template>
    <MyForm :inline=true class="SessionRegister" label-position="top">
       <MyFormItem label="BUYIN">
           <PkInput v-model="session.buyin"/>
        </MyFormItem>
        <MyFormItem label="CASHOUT">
            <PkInput v-model="session.cashout"/>
        </MyFormItem>
        <MyFormItem label="START">
            <PkInput v-model="session.start"/>
        </MyFormItem>
        <MyFormItem label="END">
            <PkInput v-model="session.end"/>
        </MyFormItem>
        <MyFormItem label="BLIND">
            <PkInput v-model="session.blind"/>
        </MyFormItem>
        <MyFormItem label="TABLE SIZE">
            <PkSelect v-model="session.tableSize">
                <PkOption  v-for="item in tableSize" :key="item" :label="item" :value="item" ></PkOption>
            </PkSelect>
        </MyFormItem>
        <MyFormItem label="POKER TYPE">
            <PkSelect v-model="session.pokerType">
                <PkOption  v-for="item in pokerType" :key="item" :label="item" :value="item"></PkOption>
            </PkSelect>
        </MyFormItem>
        <MyFormItem style="width: 192px" label="DATE">
          <DatePicker v-model="session.date"/>
        </MyFormItem>

    </MyForm>
    <button @click="test"></button>
</template>

<script setup lang="ts">
import { MyFormItem, MyForm, PkInput, PkOption, PkSelect } from "@/core/components/element-plus-proxy";
import DatePicker from "@/core/components/element-plus/date-picker.vue";
import {computed, ref} from "vue";
import {usePageViewStore} from "@/components/main-page-view/store/page-view";

const tableSize = ref([2,6,9])
const pokerType = ref ([
    "Limit texas holdem",
    "No limit texas holdem",
    "Omaha"
    ]
)
const store = usePageViewStore();

const session = computed( () => store.sessionResult)

const test = () => {
    console.log(store.sessionResult)
}

</script>
<style lang="scss">
.SessionRegister {
    width: 500px;
    height: 400px;


}
</style>