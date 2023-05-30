<template>
<div class="SingleHand" v-if="handVisibility" @click="displayDetails">
    <div :class="singleHandClasses">
        {{ handName }}
    </div>
</div>
</template>
<script setup lang="ts">

import {computed, ref} from "vue";
import {useResultReportStore} from "@/components/main-page-view/store/result-box-store";

const store = useResultReportStore();
const thisHandIsInUse = ref(false)
const props = defineProps( {
    showHand: { type: Boolean, required: true},
    handName: { type: String, required: true},
    lossHand: { type: Boolean, required: true},
})

const singleHandClasses = computed( ()=> ({
    'SingleHand__wonHand': !props.lossHand,
}))

const handVisibility = computed( ()=> props.showHand && (!store.handIsUsed || thisHandIsInUse.value))
const displayDetails = () => {
    thisHandIsInUse.value = !thisHandIsInUse.value;
    store.handIsUsed = !store.handIsUsed;
}

</script>
<style scoped lang="scss">
.SingleHand {
  width: 50px;
  text-align: center;
  border: black 2px solid;
  margin: 5px;
  cursor: pointer;
    &__lossHand {
      background: red;
    }
    &__wonHand {
      background: green;
    }
}
</style>