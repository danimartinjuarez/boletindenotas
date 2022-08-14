<template>
    <nav>
        <div id="home" class="router">
            <RouterLink to="/">🏡</RouterLink>
        </div>
        <div id="boletin" class="router">
            <RouterLink to="/about"><img src="../assets/notas.png" alt="" id="boletin-icon"></RouterLink>
        </div>
    </nav>
</template>

<script setup>

</script>

<style>

nav
{
    background-color: aqua;
    font-size: 150%;
    text-align: right;
    width: 10%;
    padding: 2%;
    border-left: 1px black solid;
}

#boletin-icon
{
    width: 40px;
}
</style>