<template>
  <div>
    <h2>Ajouter un utilisateur</h2>

    <input type="text" placeholder="Prénom" v-model="newUser.name.first" />
    <input type="text" placeholder="Nom" v-model="newUser.name.last" />
    <input type="text" placeholder="Mail" v-model="newUser.email" />
    <input type="hidden" :value="
      (newUser.id.value = newUser.name.first + newUser.name.last)
    " />
    <button @click="addNewInscrit()">Ajouter cet inscrit</button>
  </div>
  <hr />
  <h2>Liste des utilisateurs</h2>
  <UsersTable />
</template>

<script>
import { mapStores } from 'pinia'
import { useUsersStore } from "@/stores/usersStore"
import UsersTable from "@/components/UsersTable.vue"

export default {
  name: "App",
  data() {
    return {
      newUser: {
        name: {
          first: '',
          last: ''
        },
        email: '',
        id: {
          value: ''
        }
      }
    }
  },
  components: {
    UsersTable
  },
  computed: {
    ...mapStores(useUsersStore)
  },
  methods: {
    addNewInscrit() {
      if (!this.newUser.name.first || !this.newUser.name.last || !this.newUser.email) {
        alert('Merci de remplir tous les champs !')
      } else {
        this.usersStore.addUser({ ...this.newUser })
        this.newUser = {
          name: {
            first: '',
            last: ''
          },
          email: '',
          id: {
            value: ''
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
