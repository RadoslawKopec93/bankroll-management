<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="goToHome" style="height: 20px; width: 20px">home</button>
</template>
<script>
export default {

  methods: {
    goToHome() {
      window.open("http://localhost:3001/");
    }
  }
}
</script>