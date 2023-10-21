import { createStore } from "vuex";
import AdminLogin from "./AdminLogin";
import brandsModule from "./modules/brands"; // Import the brands module

export default createStore({
  modules: {
    brands: brandsModule, // Register the brands module
  },
  ...AdminLogin,
});
