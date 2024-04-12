import { defineStore } from 'pinia';

export const useStore = defineStore({
    id: 'mainStore',
    state: () => ({
        selectedFilms: [] // Un tableau pour stocker les IDs des films sélectionnés
    }),
    actions: {
        // Méthode pour sélectionner un film
        addFilm(film) {
            if (!this.selectedFilms.some(f => f.id === film.id)) {
                this.selectedFilms.push(film);
            }
        },
        // Méthode pour désélectionner un film
        dellFilm(film) {
            const index = this.selectedFilms.findIndex(f => f.id === film.id)
            if (index !== -1) {
                this.selectedFilms.splice(index, 1);
            }
            
        }
    }
});
