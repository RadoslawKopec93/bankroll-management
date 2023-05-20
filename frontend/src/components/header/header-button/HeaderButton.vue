<template>
<div :class="headerButtonStylesClass">
  <p>{{ label }}</p>
</div>
</template>
<script setup lang="ts">
import {computed} from "vue";

interface resultData {
    date: string,
    moneyResult: number,
}

const props = defineProps({
    qwertyTest: String,
    isUserMenu: Boolean,
    label: String,
})

const test = computed( () => {
    console.log(props.qwertyTest);
    return "testComputer"
});
const test1 = 100
const resultBoxData = computed( () => {
    const data: resultData = {
        date: "aa",
        moneyResult: test1,
    };
});
const headerButtonStylesClass = computed( () =>
    props.isUserMenu?
        "headerMenuButton__basicButton" :
        "headerMenuButton__userMenu"
);
</script>

<style lang="scss">
.headerMenuButton {
  &__basicButton {
    background-color: #cb2d06;
    width: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: Roboto;
    &:hover {
      cursor: pointer;
      filter: brightness(85%);
      transition: 0.5s;
    }

  }
  &__userMenu{
    background-color: #cb2d06;
    border: grey solid 1px;
    width: 150px;
    color: white;
    display: flex;
    justify-content: center;
    align-content: center;
    font-family: Roboto;
    &:hover {
      cursor: pointer;
      filter: brightness(85%);
      transition: 0.5s;
    }
  }

}
</style>
