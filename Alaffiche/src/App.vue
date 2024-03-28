<script setup>
import CinemaHeader from './components/CinemaHeader.vue'
import FilmCard from './components/FilmCard.vue'
import {films} from './assets/arena-lapraille.js'
</script>

<template>
  <CinemaHeader></CinemaHeader>

  <div v-for="film in films">
    <FilmCard :film="film"></FilmCard>
  </div>
</template>

<style scoped>

</style>
