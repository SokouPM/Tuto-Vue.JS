<script>
export default {
  name: "CategoryForm",
  props: [
    "categories",
    "indexOfCategoryToModify",
    "formCategoryValues"
  ],
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    addOrUpdateCategory(index = null) {
      // Check if form values are not empty
      if (this.formCategoryValues.name) {
        // case of update
        if (index === 0 || index) {
          this.$emit("update:categories", this.formCategoryValues);
        } else {
          this.$emit("addCategory", this.formCategoryValues);
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
    <legend v-if="indexOfCategoryToModify !== null">Modifier la categorie {{ categories[indexOfCategoryToModify].name }}
    </legend>
    <legend v-else>Ajouter une catégorie à la liste</legend>

    <div class="form-group">
      <label for="name">Nom de la catégorie</label>
      <input type="text" id="name" name="name" v-model="formCategoryValues.name"
        :class="errorMessage.length && !formCategoryValues.name.length && 'error-field'" />
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <input v-if="indexOfCategoryToModify !== null" class="btn btn-blue"
      @click="addOrUpdateCategory(indexOfCategoryToModify)" type="submit" value="Modifier la catégorie" />
    <input v-else class="btn btn-green" @click="addOrUpdateCategory()" type="submit" value="Ajouter une catégorie" />
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