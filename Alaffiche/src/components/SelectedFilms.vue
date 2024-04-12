<script setup>
import { useStore } from './../store/store.js';
import FilmCard from './FilmCard.vue';

const store = useStore();

const { selectedFilms } = store;

</script>

<template>
    <section>
        <div v-for="film in selectedFilms" :key="film.id">
            <router-link class="link" :to="`/film/${film.id}`">
                <!--redirige vers la page description avec l'identifaint -->
                <FilmCard :film="film"></FilmCard>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.link {
    text-decoration: none;
    color: black;
}
</style>
