<script setup>
</script>

<template>
  <main>
    <RouterLink to="/about"><button type="button" id="boletinButton">Ir al Boletin de notas</button></RouterLink>
  </main>
</template>
<style scoped>
main{
  min-height: 80vh;
  position: relative;
  display: flex;
  background-image: url("../assets/fondo1.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size:100vw;
}
#boletinButton{
  height: 8vh;
  width: 40vw;
  text-align: center;
  font-size: 140%;
}
</style>