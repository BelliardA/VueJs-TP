<script setup>
defineProps(['film']);
</script>

<template>
    <main>
        <div class="text-gauche">
            <h2>{{ film.titre }}</h2>
            <h3 v-if="film.titreOriginal">titre original : {{ film.titreOriginal }}</h3>
            <p>durée : {{ film.duree }} minutes</p>
            <p>Age légal : {{ film.ageLegal }}</p>
            <div class="mini-description">
                <p>genre:</p>
                <p v-for="unGenre in film.genre">{{ unGenre }}</p>
            </div>

        </div>
        <img :src="`${film.imageURL}`" alt="">
    </main>
</template>

<style scoped></style>