<template>
            <el-date-picker
                v-model="dateTime"
                type="datetime"
                placeholder="Select date and time"
            />
</template>

<script lang="ts" setup>

import { computed } from "vue";
import {convertToNormalDate} from "@/components/main-page-view/domain/convert-date";

interface Props {
    modelValue: String;
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])
const dateTime = (computed({
    get: () => props.modelValue,
    set: value => emit("update:modelValue", convertToNormalDate(value))
}))
</script>
<style scoped>

</style>
