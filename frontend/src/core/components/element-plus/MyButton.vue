<template>
  <ElButton :id="buttonName">
    <slot/>
  </ElButton>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import {defineProps} from "vue";

const props = defineProps({
  buttonName: {
    type: String,
    default: "MyButton",
  }
});
</script>
<style lang="scss">
#result{
  cursor: pointer;
  background: red;
  width: 100px;
  height: 80px;
  margin-left:0;
}
</style>