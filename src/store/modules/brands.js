import {
  axiosInstanceMultipart,
  baseUrl,
} from "../../repositories/repository.js";
import Swal from "sweetalert2";
const state = {
  Brands: [],
  Pagination: {},
  Brand: {},
};

const getters = {
  getBrands(state) {
    return state.Brands;
  },
  getPagination(state) {
    return state.Pagination;
  },
  getBrand(state) {
    return state.Brand;
  },
};
const mutations = {
  setBrands: (state, Brands) => (state.Brands = Brands),
  setPagination: (state, Pagination) => (state.Pagination = Pagination),
  setSingleBrand: (state, Brand) => (state.Brand = Brand),
  setBrand: (state, Brand) => {
    state.Brands.push(Brand);
  },
  setUpdatedBrand: (state, Brand) => {
    const indexOfObject = state.Brands.findIndex((object) => {
      return object.id === Brand.id;
    });
    state.Brands[indexOfObject] = Brand;
  },
  setUpdatedActivationBrand: (state, Brand) => {
    const indexOfObject = state.Brands.findIndex((object) => {
      return object.id === Brand;
    });
    state.Brands[indexOfObject].isActive =
      !state.Brands[indexOfObject].isActive;
  },
  setRemovedBrand: (state, Brand) => {
    const indexOfObject = state.Brands.findIndex((object) => {
      return object.id === Brand;
    });
    state.Brands.splice(indexOfObject, 1);
  },
};
const actions = {
  async fetchSingleBrand({ commit }, id) {
    return axiosInstanceMultipart
      .get(`${baseUrl}/api/Brand/${id}`)
      .then((response) => {
        commit("setSingleBrand", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async fetchBrands({ commit }) {
    return axiosInstanceMultipart
      .get(`${baseUrl}/api/Brand`)
      .then((response) => {
        commit("setBrands", response.data.data);
        commit("setPagination", response.data.meta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async updateBrand({ commit }, item) {
    let formData = new FormData();
    item.NameByLang.forEach((language, index) => {
      formData.append(`NameByLang[${index}].langId`, language.langId);
      formData.append(`NameByLang[${index}].value`, language.value);
    });
    formData.append("Image", item.Image);
    return axiosInstanceMultipart
      .put(`${baseUrl}/api/Brand?BrandId=${item.id}`, formData)
      .then((response) => {
        commit("setUpdatedBrand", response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Brand Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
        });
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async postBrand({ commit }, item) {
    let formData = new FormData();
    item.NameByLang.forEach((language, index) => {
      if (language.value) {
        formData.append(`NameByLang[${index}].langId`, language.langId);
        formData.append(`NameByLang[${index}].value`, language.value);
      }
    });
    formData.append("Image", item.Image);
    return axiosInstanceMultipart
      .post(`${baseUrl}/api/Brand`, formData)
      .then((response) => {
        commit("setBrand", response.data.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Brand Added Successfully",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
        });
        return response;
      });
  },
  async ActivationBrand({ commit }, id) {
    return axiosInstanceMultipart
      .post(`${baseUrl}/api/Brand/Activation/${id}`)
      .then((response) => {
        commit("setUpdatedActivationBrand", id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Brand Status Chenged Successfully",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
        });
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async deleteBrand({ commit }, id) {
    return axiosInstanceMultipart
      .delete(`${baseUrl}/api/Brand/Remove/${id}`)
      .then((response) => {
        commit("setRemovedBrand", id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Brand Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
        });
        return response;
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
