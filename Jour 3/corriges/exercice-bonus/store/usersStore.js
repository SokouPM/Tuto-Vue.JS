import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => {
    return { 
        users: []
     }
  },
  actions: {
    async fetchAllUsers() {
      await axios
        .get("https://randomuser.me/api/?results=10")
        .then((response) => {
          this.users = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addUser(user) {
      this.users.unshift(user);
    },
    updateUser(user) {
      const indexUser = this.users.findIndex(el => el.id.value === user.id.value)
      this.users[indexUser] = user;
    },
    deleteUser(userId) {
      this.users.splice(userId, 1);
    },
  },
  getters: {
    countAllUsers: (state) => state.users.length,
    getUser: (state) => (id) => state.users.find(user => user.id.value === id)
  },
})

