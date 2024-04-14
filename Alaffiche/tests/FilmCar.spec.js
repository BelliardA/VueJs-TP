import { mount } from '@vue/test-utils';
import FilmCard from '@/components/FilmCard.vue'; 

import { films } from '@/assets/arena-lapraille.js';

describe('FilmCard', () => {
    it('renders title correctly', () => {
        const film = films[0]; 
        const wrapper = mount(FilmCard, {
            props: {
                film: film // Passer le film en tant que prop au composant
              }
            });
    expect(wrapper.text()).toContain(film.titre); // Vérifier que le titre du film est affiché
});
});