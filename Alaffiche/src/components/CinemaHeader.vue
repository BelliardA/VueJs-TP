<script setup>
import { ref } from 'vue'

const name = ref('Arnaud')
const cinema = ref('La Praille ')
</script>

<template>
    <header>
        <h1>{{ cinema + name }}</h1>
        <div class="pages">
            <a href="#">Accueil</a>
            <a href="#">Films</a>
        </div>
    </header>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 10px 20px;
    margin-bottom: 50px;
    background-color: rgb(231, 231, 231);
    border: 1px solid black;
    border-radius: 10px;
}
.pages{
    display: flex;
    gap: 50px;
}
.pages a{
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
}
</style>