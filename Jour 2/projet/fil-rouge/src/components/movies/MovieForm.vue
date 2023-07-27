<script>
export default {
  name: "MovieForm",
  props: [
    "formMovieValues",
    "indexOfMovieToModify",
    "categories",
    "movies"
  ],
  data() {
    return {
      errorMessage: "",
      years: [],
    };
  },
  beforeMount() {
    for (let i = new Date().getFullYear(); i >= 1895; i--) {
      this.years.push(i);
    }
  },
  methods: {
    addOrUpdateMovie(index = null) {
      // Check if form values are not empty
      if (this.formMovieValues.title && this.formMovieValues.year && this.formMovieValues.director && this.formMovieValues.category) {
        // case of update
        if (index === 0 || index) {
          this.$emit("update:movies", this.formMovieValues);
        } else {
          this.$emit("addMovie", this.formMovieValues);
        }

        this.resetErrorMessage();

        return;
      }

      this.displayErrorMessage();
    },

    displayErrorMessage() {
      this.errorMessage = "Veuillez remplir tous les champs du formulaire";
    },

    resetErrorMessage() {
      this.errorMessage = "";
    },
  }
}
</script>

<template>
  <fieldset>
    <legend v-if="indexOfMovieToModify !== null">Modifier le film {{ movies[indexOfMovieToModify].title }}</legend>
    <legend v-else>Ajouter un film à la liste</legend>

    <div class="form-group">
      <label for="title">Titre du film</label>
      <input type="text" id="title" name="title" v-model="formMovieValues.title"
        :class="errorMessage.length && !formMovieValues.title.length && 'error-field'" />
    </div>

    <div class="form-group">
      <label for="year">Année de sortie</label>
      <select name="year" id="year" v-model="formMovieValues.year"
        :class="errorMessage.length && !formMovieValues.year.toString().length && 'error-field'">
        <option v-for="year in years" :value="year">{{ year }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="director">Réalisateur</label>
      <input type="text" id="director" name="director" v-model="formMovieValues.director"
        :class="errorMessage.length && !formMovieValues.director.length && 'error-field'" />
    </div>

    <div class="form-group">
      <label for="category">Catégorie</label>
      <select name="category" id="category" v-model="formMovieValues.category"
        :class="errorMessage.length && !formMovieValues.category.length && 'error-field'">
        <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
      </select>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <input v-if="indexOfMovieToModify !== null" class="btn btn-blue" @click="addOrUpdateMovie(indexOfMovieToModify)"
      type="submit" value="Modifier un film" />
    <input v-else class="btn btn-green" @click="addOrUpdateMovie()" type="submit" value="Ajouter un film" />
  </fieldset>
</template>

<style scoped>
fieldset {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  width: 60%;
  padding: 1% 2% 2%;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

fieldset legend {
  font-size: 1.5rem;
  font-weight: bold;
}

fieldset div.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

fieldset div.form-group label {
  margin-bottom: 0.1rem;
}

fieldset div.form-group input,
fieldset div.form-group select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

fieldset div.form-group input.error-field,
fieldset div.form-group select.error-field {
  border: 2px solid red !important;
  animation: errorEntrance 0.2s ease 0s 1 normal forwards;
}

fieldset div.form-group select {
  cursor: pointer;
}

fieldset p.error-message {
  color: red;
  font-weight: bold;
}

@keyframes errorEntrance {
  0% {
    transform: translateX(100px);
  }

  33% {
    transform: translateX(-80px);
  }

  66% {
    transform: translateX(40px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>