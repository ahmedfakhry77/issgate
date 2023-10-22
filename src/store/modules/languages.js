import {
  axiosInstanceMultipart,
  baseUrl,
} from "../../repositories/repository.js";
const state = {
  languages: [],
};

const getters = {
  getLanguages(state) {
    return state.languages;
  },
};
const mutations = {
  setLanguages: (state, languages) => (state.languages = languages),
};
const actions = {
  async fetchLanguages({ commit }) {
    return axiosInstanceMultipart
      .get(`${baseUrl}/api/Languages`)
      .then((response) => {
        commit("setLanguages", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  name: "languages",
  state,
  getters,
  actions,
  mutations,
};
