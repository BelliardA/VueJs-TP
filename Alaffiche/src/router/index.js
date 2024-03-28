import { createRouter, createWebHistory } from 'vue-router';

import Acceuil from '../components/Acceuil.vue'
import AccesCinema from '../components/AccesCinema.vue'

const routes = [
    {path: '/', component: Acceuil},
    {path: '/cinema', component: AccesCinema},
]

// Créez l'instance du router
const router = createRouter({
    history: createWebHistory(),
    routes, // raccourci pour `routes: routes`
  })
  
  export default router