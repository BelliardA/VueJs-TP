<script setup>
import {films} from './../assets/arena-lapraille.js'
import FilmCard from './FilmCard.vue'
</script>

<template>
    <main class="list">
        <div v-for="film in films">
            <FilmCard :film="film"></FilmCard>
        </div>    
    </main>
  
</template>

<style scoped>
.list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 10px;
}
</style>