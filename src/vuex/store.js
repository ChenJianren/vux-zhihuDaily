import Vue from'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    home: true,
    other: false,
    data:'',
}

const mutations = {
    IN_HOME(state) {
        state.home = true
        state.other = false
    },
    IN_OTHER(state) {
        state.home = false
        state.other = true
    }
    
}

const actions = {
    inHome({commit}){
        commit('IN_HOME')
    },
    inOther({commit}){
        commit('IN_OTHER')
    }
}

export default new Vuex.Store({
    state,
    mutations,actions
})