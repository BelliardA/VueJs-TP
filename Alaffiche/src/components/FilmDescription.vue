<script setup>
import { films } from './../assets/arena-lapraille.js';
import { useRoute } from 'vue-router';
import { useStore } from './../store/store.js';
import { toRefs } from 'vue';

const store = useStore();
const { selectedFilms, addFilm, dellFilm } = store;

const route = useRoute();

let film;
films.map(r => {    //va chercher le film qui a l'id correspondant dans la liste des tous les films
    if (r.id == route.params.id) {
        film = r;
    }
})

const addFilmToList = () => {
    addFilm(film);
}

const removeFilmFromList = () => {
    dellFilm(film);
}

</script>

<template>
    <button class="btn add" @click="addFilmToList">Ajouter le film dans la list</button>
    <button class="btn dell" @click="removeFilmFromList">Retirer le film de la list</button>
    <main>
        <div class="text-gauche">
            <h2>{{ film.titre }}</h2>
            <h3 v-if="film.titreOriginal"><strong>Titre original :</strong> {{ film.titreOriginal }}</h3>
            <div>
                <p><strong>Durée : </strong>{{ film.duree }} minutes</p>
                <p><strong>Langue : </strong>{{ film.langue }}</p>
            </div>
            <p><strong>Age légal :</strong> {{ film.ageLegal }}</p>
            <div class="mini-description">
                <p><strong>Genre :</strong></p>
                <p v-for="unGenre in film.genre">{{ unGenre }}</p>
            </div>
            <p class="description"><strong>Description : </strong>{{ film.description }}</p>
            <h3>Les Séances d'aujourd'hui</h3>
            <div class="salle-heure" v-for="seance in film.seances">
                <p>Salle : {{ seance.salle }}</p>
                <p>|</p>
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

.salle-heure {
    display: flex;
    gap: 20px;
}

.btn {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    margin: 10px;
    transition: 0.3s;
}

.add:hover {
    background-color: green;
    color: white;
}

.dell:hover {
    background-color: red;
    color: white;
}
</style>