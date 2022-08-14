<template>
    <div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Nota</th>
            </tr>
            <tr>
                <td>lisa</td>
                <td>matematicas</td>
                <td>sobresaliente</td>
            </tr>
            <tr>
                <td>lisa</td>
                <td>matematicas</td>
                <td>sobresaliente</td>
            </tr>
        </table>
    </div>

</template>

<script setup>

</script>

<style>
table{
    border: 1px solid black;
    width: 60vw;
    border-collapse: collapse;
    font-size: 2vw;
    text-align: center;
}
th{
    background-color: lightcyan;
}
td{
    border-bottom: 2px solid black;
    width: 33%;
    
}
</style>