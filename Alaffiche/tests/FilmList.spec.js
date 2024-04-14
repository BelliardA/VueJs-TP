import {mount } from '@vue/test-utils';
import FilmList from '@/components/FilmList.vue';
import { films } from '@/assets/arena-lapraille.js';

describe('FilmList', () => {
    it('filters films correctly', async () => {
        const wrapper = mount(FilmList, {
            props: {
                films: films // Passer les films en tant que prop au composant
            }
        });

        // Simuler la saisie d'un mot-clé dans l'input de recherche
        await wrapper.find('input').setValue('Kung Fu Panda');

        // Attendre la mise à jour du composant
        await wrapper.vm.$nextTick();

        // Récupérer les films affichés après le filtrage
        const displayedFilms = wrapper.findAll('.link');

        // Vérifier que les films affichés correspondent au filtre appliqué
        expect(displayedFilms).toHaveLength(1); // Attendre qu'un seul film soit affiché après le filtrage
        expect(displayedFilms.at(0).text()).toContain('Kung Fu Panda'); // Vérifier que le titre du film correspond au filtre
    });
});