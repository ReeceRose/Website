import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/Config.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    games: [],
    loading: false,
  },
  getters: {
    getProjects: (state) => state.projects,
    getGames: (state) => state.games,
    isLoading: (state) => state.loading,
  },
  mutations: {
    setProjects: (state, projects) => state.projects = projects,
    setGames: (state, games) => state.games = games,
    setLoading: (state, isLoading) => state.loading = isLoading
  },
  actions: {
    loadProjects({ commit }) {
      let projects = []
      commit('setLoading', true)
      db.collection("projects")
        .orderBy("display_order", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(doc => {
            projects.push(doc.data())
          });
        commit('setProjects', projects)
        }).finally(() => {
          commit('setLoading', false)
        })
    },
    loadGames({ commit }) {
      let games = []
      commit('setLoading', true)
      db.collection("games")
        .orderBy("display_order", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(doc => {
            games.push(doc.data())
          });
        commit('setGames', games)
        }).finally(() => {
          commit('setLoading', false)
        })
    }
  }
})