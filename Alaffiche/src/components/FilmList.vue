<script setup>
import { films } from './../assets/arena-lapraille.js';
import FilmCard from './FilmCard.vue';
import { ref, watch } from 'vue';

const keyword = ref('');
const filmTrier = ref(films);

//fonction  de recherche qui filtre les films en fonction du mot clé
const search = () => {
    filmTrier.value = films.filter(film => film.titre.toLowerCase().includes(keyword.value.toLowerCase()));//cherche dans films si un titre est similaire au caractère entré
}

watch(keyword, () => {
    search();   //appelle la fonction search à chaque fois que keyword change
});
</script>

<template>
    <form class="input-box">
        <div>
            <label for="films">
                <h2>Chercher un film</h2>
            </label>
            <input class="input-search" id="films" name="films" type="search" v-model="keyword"
                placeholder="Kung-fu panda">
        </div>
    </form>
    <main class="list">
        <div v-for="film in filmTrier">
            <router-link class="link" :to="`/film/${film.id}`">
                <!--redirige vers la page description avec l'identifaint -->
                <FilmCard :film="film"></FilmCard>
            </router-link>
        </div>
    </main>

</template>

<style scoped>
.input-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.input-box div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 10px;
}

.link {
    text-decoration: none;
    color: black;
}

.input-search {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
}
</style>