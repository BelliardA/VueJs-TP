<script setup>
import { films } from './../assets/arena-lapraille.js';
import FilmCard from './FilmCard.vue';
import { ref, watch } from 'vue';

const keyword = ref('');
const filmTrier = ref(films);

const search = () => {
    filmTrier.value = films.filter(film => film.titre.toLowerCase().includes(keyword.value.toLowerCase()));
}

watch(keyword, () => {
    search();
});
</script>

<template>
    <form class="input-box">
        <div>
            <label for="films">Titre Films</label>
            <input id="films" name="films" type="search" v-model="keyword" placeholder="Kung-fu panda">
        </div>
    </form>
    <main class="list">
        <div v-for="film in filmTrier">
            <FilmCard :film="film"></FilmCard>
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
</style>