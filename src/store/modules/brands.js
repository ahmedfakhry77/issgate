import Repository, { baseUrl } from "../../repositories/repository.js";
const state = {
  Brands: [],
};

const getters = {
  getBrands(state) {
    return state.Brands;
  },
};
const mutations = {
  setBrands: (state, Brands) => (state.Brands = Brands),
};
const actions = {
  async fetchBrands({ commit }) {
    return Repository.get(`${baseUrl}/api/Brand`)
      .then((response) => {
        commit("setBrands", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  name: "brands",
  state,
  getters,
  actions,
  mutations,
};
