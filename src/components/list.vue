<template>
    <div>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Nota</th>
            </tr>
            <tr v-for="alumnos in studentStore.students.alumnos">
                <td>{{ alumnos.nombre }}</td>
                <td>{{ alumnos.asignatura }}</td>
                <td v-if="(alumnos.calificacion < 4)">Muy Deficiente</td>
                <td v-if="(alumnos.calificacion >=4 && alumnos.calificacion <5)">Insuficiente</td>
                <td v-if="(alumnos.calificacion >= 5 && alumnos.calificacion <6)">Suficiente</td>
                <td v-if="(alumnos.calificacion >= 6 && alumnos.calificacion < 7)">Bien</td>
                <td v-if="(alumnos.calificacion >=7 && alumnos.calificacion <9)">Notable</td>
                <td v-if="(alumnos.calificacion >=9)">Sobresaliente</td>
            </tr>
        </table>
    </div>

</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useStudentsStore } from '../stores/students'
const studentStore = useStudentsStore()
onBeforeMount(()=>{
    getStudents()
})
const getStudents = async () => {
    await studentStore.fetchStudents()
}
</script>

<style >
table{
    border: 1px solid black;
    width: 60vw;
    border-collapse: collapse;
    font-size: 2vw;
    text-align: center;
    margin-top: 2vw;
}
th{
    background-color: lightcyan;
}
td{
    border-bottom: 2px solid black;
    width: 33%;
    
}
</style>