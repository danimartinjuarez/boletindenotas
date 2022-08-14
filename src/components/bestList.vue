<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Notas de Lisa
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <listVue></listVue>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Notas de Bart
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <table>
                        <tr>
                               <th>Nombre</th>
                                <th>Materia</th>
                                <th>Nota</th>
                            </tr>
                            <tr>
                                <td>Bart</td>
                                <td>matematicas</td>
                                <td>sobresaliente</td>
                            </tr>
                            <tr>
                                <td>Bart</td>
                                <td>matematicas</td>
                                <td>sobresaliente</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Notas de Nelson
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <table>
                            <tr>
                                <th>Nombre</th>
                                <th>Materia</th>
                                <th>Nota</th>
                            </tr>
                            <tr>
                                <td>Nelson</td>
                                <td>matematicas</td>
                                <td>sobresaliente</td>
                            </tr>
                            <tr>
                                <td>Nelson</td>
                                <td>matematicas</td>
                                <td>sobresaliente</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup >
import listVue from './list.vue';
</script>

<style>

</style>