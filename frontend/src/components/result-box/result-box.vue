<template>
<div class="result" @click="test">
  <div class="result__insideResult"><p>{{ theTittle }}</p></div>
</div>
</template>
<script>
export { default } from "./result-box"
</script>
<style lang="scss">
@import 'result-box.scss';

</style>