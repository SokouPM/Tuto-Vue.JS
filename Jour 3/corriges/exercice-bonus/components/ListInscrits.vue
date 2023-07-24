<template>
  <table>
      <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Mail</th>
      </tr>
      <tr v-for="(personne, index) in usersStore.users" :key="index">
          <td>{{ personne.name.first }}</td>
          <td>{{ personne.name.last }}</td>
          <td>{{ personne.email }}</td>
          <td>
              <button @click="editUser(personne.id.value)">Modifier</button>
              <button @click="deleteUser(index)">Supprimer</button>
          </td>
      </tr>
  </table>

  <div v-if="showEdit">
      <hr />
      <h2>Modifier cet utilisateur</h2>
      <input type="text" placeholder="Prénom" v-model="editUserValue.name.first" />
      <input type="text" placeholder="Nom" v-model="editUserValue.name.last" />
      <input type="text" placeholder="Mail" v-model="editUserValue.email" />
      <button @click="editNewUser()">Modifier cet inscrit</button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useUsersStore } from "@/stores/usersStore"

export default {
  name: "UsersTable",
  data() {
      return {
          showEdit: false,
          editUserValue: {
              name: {
                  first: '',
                  last: ''
              },
              email: ''
          }
      }
  },
  computed: {
      ...mapStores(useUsersStore)
  },
  created() {
      this.usersStore.fetchAllUsers()
  },
  methods: {
      deleteUser(id) {
          this.showEdit = false
          this.usersStore.deleteUser(id)
      },
      editUser(id) {
          this.showEdit = true
          this.editUserValue = { ...this.usersStore.getUser(id) }
          this.editUserValue.name = { ...this.usersStore.getUser(id).name }
      },
      editNewUser() {
          if (!this.editUserValue.name.first || !this.editUserValue.name.last || !this.editUserValue.email) {
              alert('Merci de remplir tous les champs !')
          } else {
              this.usersStore.updateUser(this.editUserValue)
              this.editUserValue = {}
              this.showEdit = false
          }
      }
  }
}
</script>