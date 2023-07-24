import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import AjoutFilm from '@/views/AjoutFilm.vue';
import EditFilm from '@/views/EditFilm.vue';
import AjoutCategorie from '@/views/AjoutCategorie.vue';
import EditCategorie from '@/views/EditCategorie.vue';
import GestionCategories from '@/views/GestionCategories.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView,
        meta: {
            title: 'Page accueil'
        }
    },
    {
        name: 'AjoutFilm',
        path: '/ajouter-film',
        component: AjoutFilm,
        meta: {
            title: 'Ajout de film'
        }
    },
    {
        name: 'EditFilm',
        path: '/edit-film/:id',
        component: EditFilm,
        meta: {
            title: 'Modifier mon film'
        }
    },
    {
        name: 'AjoutCategorie',
        path: '/ajouter-categorie',
        component: AjoutCategorie,
        meta: {
            title: 'Ajout de catégorie'
        }
    },
    {
        name: 'EditCategorie',
        path: '/edit-categorie/:id',
        component: EditCategorie,
        meta: {
            title: 'Modifier ma catégorie'
        }
    },
    {
        name: 'GestionCategories',
        path: '/gestion-categories',
        component: GestionCategories,
        meta: {
            title: 'Gestion des catégories'
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMath(.*)',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to) => {
    document.title = to.meta.title ? to.meta.title : "Page de mon application";
    document.title += to.params.name ? ` - ${to.params.name}` : "";
})

export default router;