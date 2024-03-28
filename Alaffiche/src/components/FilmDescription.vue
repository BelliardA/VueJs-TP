<script setup>
import { films } from './../assets/arena-lapraille.js';
import { useRoute } from 'vue-router';

const route = useRoute();
let film;
films.map(r => {
    if (r.id == route.params.id) {
        film = r;
    }
})
</script>

<template>
    <main>
        <div class="text-gauche">
            <h2>{{ film.titre }}</h2>
            <h3 v-if="film.titreOriginal">titre original : {{ film.titreOriginal }}</h3>
            <div>
                <p>durée : {{ film.duree }} minutes</p>
                <p>langue : {{ film.langue }}</p>
            </div>
            <p>Age légal : {{ film.ageLegal }}</p>
            <div class="mini-description">
                <p>genre:</p>
                <p v-for="unGenre in film.genre">{{ unGenre }}</p>
            </div>
            <p class="description">Description : {{ film.description }}</p>
            <h3>Les Séances d'aujourd'hui</h3>
            <div v-for="seance in film.seances">
                <p>Salle : {{ seance.salle }}</p>
                <p>Heure : {{ seance.heure }}</p>
            </div>
        </div>
        <img :src="`${film.imageURL}`" alt="">
    </main>
</template>

<style scoped>
main {
    display: flex;
    gap: 20px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
    width: 70%;
    margin: auto;
}

.description {
    width: auto;
}

.mini-description {
    display: flex;
    gap: 5px;
}
</style>