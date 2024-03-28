<script setup>
import { ref } from 'vue'

const name = ref('Arnaud')
const cinema = ref('La Praille ')
</script>

<template>
    <h1>{{ cinema + name }}</h1>
</template>