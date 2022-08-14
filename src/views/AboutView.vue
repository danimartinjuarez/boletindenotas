<script setup>
import Filter from '../components/filter.vue';
import List from '../components/list.vue';

</script>
<template>
  <main>
    <Filter />
    <List />
  </main>
  <RouterLink to="/version2"><button type="button">version mejorada</button></RouterLink>
</template>

<style scoped>
main{
  display: flex;
}
button{
  margin-left: 45vw;
  height: 10vh;
  width: 20vw;
  font-size: 140%;
  background-color: blueviolet;
  color:violet;
}
</style>
