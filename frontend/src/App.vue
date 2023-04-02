<template>
  <router-view></router-view>
</template>
<script>
/* eslint-disable */

import Header from './components/header/main-header.vue'
import Hello2 from './components/Hello2'
export default {

  name: "App",
  components:{
    Header,
    Hello2
  },
  data() {
    return {
      msg: ''
    }
  },
  methods:{
      test(){
       fetch("/api/test",{  method: 'GET',})
           .then((response) => response.text())
           .then((data) => {
             this.msg = data;
           });
       console.log("test1F");
     },
    test1(){
      fetch("/api/test1", {
        method: 'POST',
        body: JSON.stringify({
          firstName:"c",
          lastName:"c",
          email:"c@c.com",
          password:"c"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
          .then((response) => response.json())
          .then((json) => console.log(json));
      console.log("test22F");
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">
@import '../node_modules/@fontsource/roboto/index.css';
body{
  padding: 100px;
  margin: 0;
}

</style>
