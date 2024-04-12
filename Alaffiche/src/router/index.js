import { createRouter, createWebHistory } from 'vue-router';

import Acceuil from '../components/Acceuil.vue';
import AccesCinema from '../components/AccesCinema.vue';
import FilmDescription from '../components/FilmDescription.vue';
import SelectedFilms from '@/components/SelectedFilms.vue';

const routes = [
    {path: '/', component: Acceuil},
    {path: '/cinema', component: AccesCinema},
    {path: '/film/:id', component: FilmDescription},
    {path: '/selected', component: SelectedFilms}
]

// Créez l'instance du router
const router = createRouter({
    history: createWebHistory(),
    routes, // raccourci pour `routes: routes`
  })
  
  export default router