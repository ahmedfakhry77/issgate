<template>
  <div>
    <Modal>
        <!-- Permission Screen -->
        <div class="relative p-4 w-96 h-90 dark:bg-schemePrimary-black dark:text-white">
          <h1 class="text-3xl font-bold text-center my-2 mx-auto capitalize">
            Add New Brand
          </h1>
          <div class="mx-auto px-5">
            <form action="w-3/6">
              <div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-white"
                      >Brand name</label
                    >
                    <input
                      type="text"
                      v-model="name"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                    />
                  </div>
                <button type="button" 
                  class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium text-white bg-schemeSecondary-green rounded-md">
                  Add
                </button>
                <button type="button" @click="$emit('closeAddNew', false)"
                  class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium border border-schemePrimary-blue text-schemePrimary-blue hover:text-white hover:bg-schemePrimary-blue dark:border-white dark:text-white rounded-md">
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from "./ModalComponent";
export default {
  name: "IssgateAddNew",

  data() {
    return {
        name: "",
    };
  },
  components: {
    Modal,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
