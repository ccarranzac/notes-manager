import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
    notes: [],
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setNotes(state, value) {
      state.notes = value;
    },
  },
  actions: {
    createNote({ commit }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
        const notes = JSON.parse(localStorage.getItem("notes"));
        const note = {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2),
          ...payload,
        };
        notes.push(note);
        commit("setNotes", notes);
        localStorage.setItem("notes", JSON.stringify(notes));
      }, 2000);
    },
    deleteNote({ commit, getters }, payload) {
      commit("setLoading", true);
      setTimeout(() => {
        let notes = getters.getNotes;
        notes = notes.filter((el) => el.id !== payload);
        commit("setNotes", notes);
        localStorage.setItem("notes", JSON.stringify(notes));
        commit("setLoading", false);
      }, 2000);
    },
    initialNotes({ commit }) {
      const notes = localStorage.getItem("notes");
      if (notes) {
        commit("setNotes", JSON.parse(notes));
      } else {
        const empty = [];
        localStorage.setItem("notes", JSON.stringify(empty));
        commit("setNotes", empty);
      }
    },
  },
  modules: {},
});
