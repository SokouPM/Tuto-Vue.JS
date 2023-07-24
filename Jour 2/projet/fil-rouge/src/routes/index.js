import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '@/pages/Accueil.vue'
import GestionFilm from '@/pages/GestionFilm.vue'
import GestionCategorie from '@/pages/GestionCategorie.vue'

const routes = [
    {
        name: 'Accueil',
        path: '/',
        component: Accueil
    },
    {
        name: 'GestionFilm',
        path: '/film/:idfilm?',
        component: GestionFilm,
        props: true
    },
    {
        name: 'GestionCategorie',
        path: '/categorie',
        component: GestionCategorie
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
})

export default router
