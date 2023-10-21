import Repository, { baseUrl } from "../repositories/repository.js";
const state = function () {
  return {
    token: null || localStorage.getItem("token"),
    didLogOut: false,
    error: null,
  };
};
const getters = {
  isAuthenticated(state) {
    return state.token !== null;
  },
  getErrorMessage(state) {
    return state.error;
  },
  getToken(state) {
    return state.token;
  },
};
const mutations = {
  setAdmin(state, payload) {
    state.token = payload.idToken;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setImg(state, payload) {
    state.img = payload;
  },
};
const actions = {
  async login({ commit }, { email, password , rememberMe }) {
    let data = {
      password: password,
      username: email,
      rememberMe: rememberMe,
    };

    return Repository.post(`${baseUrl}/api/Auth/Authenticate`, data)
      .then((response) => {
        localStorage.setItem("token", response.data.Data.Token);

        commit("setAdmin", {
          idToken: response.data.Data.Token,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
        //
        commit("setError", null);
      })

      .catch((error) => {
        commit("setError", error.response.data.message);
      });
  },
};

export default {
  namespaced: true,
  name: "login",
  state,
  getters,
  actions,
  mutations,
};
