import { createStore } from "vuex";
import AdminLogin from "./AdminLogin"; // Import the AdminLogin module
import brandsModule from "./modules/brands"; // Import the brands module
import languagesModule from "./modules/languages"; // Import the languages module
export default createStore({
  modules: {
    brands: brandsModule, // Register the brands module
    languages: languagesModule, // Register the languages module
  },
  ...AdminLogin,
});
