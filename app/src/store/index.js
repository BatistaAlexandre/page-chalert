import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        rtl: true,
        enableRtl:false
    },  
    mutations: {
        SET_RTL_VALUE:(state, payload) => {
            state.rtl = payload
        }
    },
    actions: {
        rtlHandler: ({ state, commit }, routePath) => {
            if (routePath) {
                if (routePath.name === 'HomeRtl') {
                    state.enableRtl = true
                } else {
                    state.enableRtl = false
                }
            }
            commit('SET_RTL_VALUE', !state.rtl)
            const html = document.getElementsByTagName("html");
            if (state.rtl) {
                html[0].lang = "ar";
                html[0].dir = "rtl";
            } else {
                html[0].lang = "en";
                html[0].dir = "";
            }
           
        }
    }
})