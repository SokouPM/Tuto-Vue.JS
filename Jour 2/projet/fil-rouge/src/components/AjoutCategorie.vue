<template>
    <form action="">
        <div class="mb-3">
            <label class="form-label" for="categorie">Catégorie à ajouter  : </label><input class="form-control"  v-model="cat" type="text" name="categorie" id="categorie">
        </div>
        
        <input class="btn btn-primary" @click.prevent="ajoutCategorie()" type="submit" value="Ajouter la catégorie">
    </form>
</template>
  
<script >

export default {
    name: 'AjoutCategorie',
    data() {
        return {
            cat: '',
            categories:[]
        }
    },
    methods: {
        ajoutCategorie() {
            if (this.cat){
                const lastId = this.categories[this.categories.length-1].id

                this.categories.push({
                    id: lastId+1,
                    lib: this.cat
                })
                localStorage.setItem('categories', JSON.stringify(this.categories))
                this.$router.push({name:'Accueil'})
            }else{
                alert('catégorie obligatoire')
            }
        }
    },
    created(){
        this.categories = JSON.parse(sessionStorage.getItem('categories'))
    }
}

</script>

<style scoped>

</style>
  