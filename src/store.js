import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/Config.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    loading: false,
  },
  getters: {
    getProjects: (state) => state.projects,
    isLoading: (state) => state.loading,
  },
  mutations: {
    setProjects: (state, projects) => state.projects = projects,
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
  }
})