<template>
      <ElTimePicker
           class="DatePicker"
           v-model="date"
           type="time"
           placeholder="Pick a date"
    >
       </ElTimePicker>
</template>
<script setup lang="ts">
import { ElDatePicker, ElTimePicker } from "element-plus";
import { computed } from "vue";

const props = defineProps({
    modelValue: Date,

})

const emit = defineEmits(['update:modelValue'])
//TODO convert this date?
const date = computed({
    get: ()=> props.modelValue,
    set: v => {
        emit('update:modelValue', v)
    }
})

</script>
<style lang="scss">
.DatePicker {
   .el-input__inner {
     &:hover {
       cursor: pointer;
     }
   }
}
</style>