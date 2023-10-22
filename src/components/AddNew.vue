<template>
  <div>
    <Modal>
      <!-- Permission Screen -->
      <div
        class="relative p-4 h-90 dark:bg-schemePrimary-black dark:text-white"
      >
        <h1 class="text-3xl font-bold text-center py-4 my-2 mx-auto capitalize bg-secondary text-white">
          Add New Brand
        </h1>
        <div class="mx-auto px-5">
          <form>
            <div
              v-if="!isloading && NameByLang.length > 0"
              class="grid grid-cols-2 gap-2"
            >
              <div class="w-52">
                <div
                  v-for="(item, index) in languages"
                  :key="item.id"
                  class="my-2"
                >
                  <label
                    :for="`name-${item.id}`"
                    class="block text-sm font-medium text-white"
                  >
                    {{ item.name }} Brand name
                  </label>
                  <input
                    :name="`name-${item.id}`"
                    :id="`name-${item.id}`"
                    v-model="NameByLang[index].value"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="`Brand Name-${item.code}`"
                  />
                </div>
              </div>

              <div class="pictureInputFile my-2">
                <div v-if="Image">
                  <img
                    :src="imagePreview"
                    alt="Preview"
                    class="max-h-24 rounded-full"
                  />
                </div>
                <div class="h-24" v-else></div>
                <input type="file" @change="handleFileChange" />
              </div>
              <hr
                class="my-4 h-px border-t-0 bg-primary opacity-100 dark:opacity-50 col-span-2"
              />
              
              <button
                type="button"
                @click="$emit('closeAddNew', false)"
                class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium border border-schemePrimary-blue text-schemePrimary-blue hover:text-white hover:bg-schemePrimary-blue dark:border-white dark:text-white rounded-md"
              >
                cancel
              </button>
              <button
                type="button"
                class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium text-white bg-schemeSecondary-green rounded-md"
                @click="AddNewBrand()"
              >
                Add
              </button>
            </div>
            <LoadingComponent v-else />
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./ModalComponent";
import LoadingComponent from "./LoadingComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "IssgateAddNew",
  props: ["languages"],
  data() {
    return {
      isloading: false,
      NameByLang: [],
      Image: null,
      imagePreview: null,
    };
  },
  components: {
    Modal,
    LoadingComponent,
  },
  mounted() {
    this.isloading = true;
    this.languages.map((lang) => {
      let obj = {
        langId: lang.id,
        value: "",
      };
      this.NameByLang.push(obj);
    });
    this.isloading = false;
  },

  methods: {
    ...mapActions("brands", ["postBrand"]),
    handleFileChange(event) {
      this.Image = event.target.files[0];
      this.previewImage();
    },
    previewImage() {
      if (this.Image) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(this.Image);
      } else {
        this.imagePreview = null;
      }
    },
    AddNewBrand() {
      this.isloading = true;
      if(this.Image){
        this.postBrand({
        Image: this.Image,
        NameByLang: this.NameByLang,
      }).then(() => {
        this.isloading = false;
        this.$emit("closeAddNew", false);
      });
      } else{
        this.isloading = false;
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: "upload Brand Image",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
        });
      }
      
    },
  },
};
</script>

<style lang="scss" scoped></style>
