import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import albumModule from "@/stores/album.js";
import axios from "axios";

Vue.use(Vuex);

const state = {
    user: null
};

const store = new Vuex.Store({
    modules: {
        album: albumModule // Include the album module in the store
    },
    state: {
        member: {},
        ancestorOptions: {},
        genology: []
    },
    getters: {
        user: state => {
            return state.user;
        }
    },
    actions: {
        user: (context, user) => {
            context.commit("user", user);
        },
        getTree: async context => {
            const result = await axios.get("ancestors/tree");
            if (!result) return;

            context.commit("setGenology", result.data.tree);
        },
        getOptions: async context => {
            const result = await axios.get("ancestors/options");

            context.commit("setOptions", result.data);
        },
        getMember: async (context, id) => {
            const result = await axios.get(`ancestors/${id}`);
            if (!result) return;

            context.commit("setMember", result.data.data);
        },
        plusMember: async (context, data) => {
            console.log(data);
            const result = await axios.post(`ancestors/plus`, data);
            context.dispatch("getTree");
        },
        updateMember: async (context, { id, data }) => {
            console.log(id, "sd", data);
            const result = await axios.put(`ancestors/update/${id}`, data);
            context.dispatch("getTree");
        },
        undoMember: async (context, id) => {
            const result = await axios.delete(`ancestors/${id}`);
            context.dispatch("getTree");
        }
    },
    mutations: {
        user: (state, user) => {
            state.user = user;
        },
        setMember: (state, data) => {
            state.member = data;
        },
        setOptions: (state, options) => {
            state.ancestorOptions = options;
        },
        setGenology: (state, options) => {
            state.genology = options;
        },
        setMember: (state, data) => {
            state.member = data;
        }
    },
    plugins: [createPersistedState()]
});

export default store;
