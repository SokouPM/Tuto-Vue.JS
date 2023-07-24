<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Real</th>
                <th>année de sortie</th>
                <th>catégorie</th>
                <th>Editer</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(film,index) in films" v-bind:key="index">
                <td>{{ film.nom }}</td>
                <td>{{ film.real }}</td>
                <td>{{ film.annee }}</td>
                <td>{{  libCat(film.categorie) }}</td>
                <td><button class="btn btn-info" @click="editFilm(film.id)">éditer le film</button></td>
                <td><button class="btn btn-info" @click="delFilm(film.id)">supprimer le film</button></td>
            </tr>
        </tbody>
    </table>
</template>
  
<script >

export default {
    name: 'ListFilms',
    props:['films','categories'],
    methods: {
        editFilm(idFilm){
            console.log(idFilm)
            this.$router.push({name:'GestionFilm',params:{idfilm:idFilm}})
        },
        delFilm(idFilm){
            if(window.confirm('Voulez vous vraiment supprimer ce film ?')){

                const index = this.films.findIndex((film) => film.id==idFilm)

                this.films.splice(index, 1)

                this.$router.push({name:'Accueil'})
            }
            console.log(idFilm)
        },
        libCat(cat){
            return this.categories.filter(category =>category.id==cat)[0].lib
        }
    }
}

</script>

<style scoped>
table{
    text-align: center;
}
table th, table td{
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}
table th {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
  