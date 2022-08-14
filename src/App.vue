<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBarVue from './components/navBar.vue';
</script>

<template>
  <header>
    <h1 class="title">Boletin de notas</h1>
    <navBarVue/>
  </header>

  <RouterView />
</template>

<style scoped>
.title{
  text-align: center;
  background-color: aqua;
  color: darkgray;
  margin: 0%;
  padding: 3vh;
  font-size: 5vw;
  width: 80%;
}

header{
  display: flex;
}

</style>
