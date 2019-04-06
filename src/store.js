import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase/init.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
    },
    getters: {
        getProjects: (state) => state.projects
    },
    mutations: {
        setProjects: (state, projects) => state.projects = projects
    },
    actions: {
        loadProjects({ commit }) {
            
        }
    }
})