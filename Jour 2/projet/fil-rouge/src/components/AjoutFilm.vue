<template>
    <form action="">
        <input type="hidden" name="id" :value="idFilm">
        <div class="mb-3"><label class="form-label" for="nomFilm">Nom : </label><input class="form-control"  v-model="nom" type="text" name="nomFilm" id="nomFilm"></div>
        <div class="mb-3"><label class="form-label" for="realFilm">Réalisateur : </label><input class="form-control"  v-model="real" type="text" name="realFilm" id="realFilm"></div>
        <div class="mb-3"><label class="form-label" for="anneeFilm">Année : </label><input class="form-control"  v-model="annee" type="number" max="2022" min="1900" name="anneeFilm" id="anneeFilm"></div>
        <div class="mb-3"><label class="form-label" for="catFilm">Catégorie : </label>
        <select class="form-select" name="catFilm" id="catFilm" v-model="categorie">
            <option v-for="(cat,index) in categories"  :value="cat.id" :key="index">{{ cat.lib }}</option>
        </select>
        </div>
        <input class="btn btn-primary" @click.prevent="ajoutFilm()" type="submit" :value="labelBtn">
    </form>
</template>
  
<script >

export default {
    name: 'AjoutFilm',
    props:['data-film'],
    methods:{
        ajoutFilm(){
            if(this.nom&&this.real&&this.annee&&this.categorie)
            {
                if(this.idFilm){
                    const index = this.films.findIndex((film) => film.id==this.idFilm)
                    this.films[index] = {
                            id: this.idFilm,
                            nom: this.nom,
                            real: this.real,
                            annee: this.annee,
                            categorie: this.categorie
                        }
                }else{
                        const lastId = this.films[this.films.length-1].id

                        const film = {
                            id: lastId+1,
                            nom: this.nom,
                            real: this.real,
                            annee: this.annee,
                            categorie: this.categorie
                        }
                        this.films.push(film)
                }
                
                localStorage.setItem('films', JSON.stringify(this.films))
                this.$router.push({name:'Accueil'})
            }else{
                alert('tout les champs sont requis')
            }
        }
    },
    data() {
        return {
            labelBtn: 'Ajouter',
            idFilm:false,
            nom:'',
            real:'',
            annee:'',
            categorie: '',
            categories:[],
            films:[],
            film:{}
        }
    },
    created(){
        if(this.$props.dataFilm.nom)
            this.labelBtn = 'Modifier'

        this.idFilm = this.$props.dataFilm.id
        this.nom = this.$props.dataFilm.nom
        this.real = this.$props.dataFilm.real
        this.annee = this.$props.dataFilm.annee
        this.categorie = this.$props.dataFilm.categorie
        this.categories = JSON.parse(localStorage.getItem('categories'))
        this.films = JSON.parse(localStorage.getItem('films'));
    }
}

</script>

<style scoped>

</style>
  