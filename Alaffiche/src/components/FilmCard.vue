<script setup>
import { ref } from 'vue'

defineProps(['film']);
</script>

<template>
    <section class="Card">
        <h2>titre : {{ film.titre }}</h2>
        <h3 v-if="film.titreOriginal">titre original : {{ film.titreOriginal }}</h3>
        <img :src="`${ film.imageURL }`" alt="">
        <p>durée : {{ film.duree }} minutes</p>
        <div class="mini-description">
            <p>genre:</p>
            <p v-for="unGenre in film.genre">{{ unGenre }}</p>
        </div>
        
        
    </section>
</template>

<style scoped>
.Card{
    display: flex;
    flex-direction: column;
    width: 370px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    background-color: rgb(194, 194, 194);
}
.mini-description{
    display: flex;
    gap: 5px;
}
</style>