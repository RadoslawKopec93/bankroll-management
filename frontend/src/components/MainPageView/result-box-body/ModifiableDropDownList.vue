<template>
    <el-row :gutter="5">
        <el-col :span="10">
            <PkDropdown>
                <PkButton type="primary">
                    {{ buttonName }}
                </PkButton>
                <template #dropdown>
                    <PkDropdownMenu v-for="item in items">
                        <PkDropdownItem @click="$emit(emitName,item)">{{ item }}</PkDropdownItem>
                    </PkDropdownMenu>
                </template>
            </PkDropdown>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
import { PkDropdown, PkDropdownItem, PkInput,PkDropdownMenu } from "@/core/components/element-plus-proxy";
import PkButton from "@/core/components/element-plus/PkButton.vue";

const props = defineProps({
    emitName: {
        type: String,
        required: true
    },
    buttonName: {
        type: String,
        required: true,
    },
    items: Array
})


</script>

<style scoped lang="scss">
</style>