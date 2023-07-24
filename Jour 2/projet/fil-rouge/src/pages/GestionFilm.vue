<template>
    <AjoutFilm :data-film="dataFilm" @postForm="receiveForm($event)" />
</template>

<script>
import AjoutFilm from '../components/AjoutFilm.vue'

export default {
    name: 'GestionFilm',
    components: { AjoutFilm },
    props: ['idfilm'],
    data() {
        return {
            dataFilm: {
                nom: null,
                real: null,
                annee: null,
                categorie: null
            },
            films : [],
            categories: [],
        }
    },
    methods:function(){
    },
    created() {
        console.log(localStorage.getItem('films'))
        this.categories = JSON.parse(sessionStorage.getItem('categories'))
        this.films = JSON.parse(localStorage.getItem('films'));
        if (this.$props.idfilm) {
            this.dataFilm =  this.films.filter(film =>film.id==this.$props.idfilm)[0]||null
        }
    }
}
</script>

<style>

</style>