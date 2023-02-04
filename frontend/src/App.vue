<template>
<!--  <Header/>
  <router-view></router-view>-->
</template>
<script>
import Header from './components/header/header.vue'
import HelloWorld from './components/HelloWorld';
import Hello2 from './components/Hello2'
export default {

  name: "App",
  components:{
    Header,
    Hello2
  },
}
</script>
<style lang="scss">
body{
  padding: 100px;
  margin: 0;
}
</style>
