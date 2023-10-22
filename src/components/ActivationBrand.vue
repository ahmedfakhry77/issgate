<template>
  <div>
    <Modal>
      <div
        class="relative p-4 h-90 dark:bg-schemePrimary-black dark:text-white"
      >
        <h1 class="text-3xl font-bold text-center my-2 py-4 mx-auto capitalize bg-secondary text-white">
          Chang Brand Status
        </h1>
        <div class="mx-auto px-5">
          <form>
            <div class="grid grid-cols-2 gap-2">
              <div class="w-full min-w-full text-center col-span-2 text-primary py-8">
                Are You Sure to Change Stauts for This Brand ?
              </div>
              <LoadingComponent class="col-span-2" v-if="isloading" />
              <hr
                class="my-4 h-px border-t-0 bg-primary opacity-100 dark:opacity-50 col-span-2"
              />
              <button
                type="button"
                class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium text-white bg-schemeSecondary-green rounded-md"
                @click="ChangeActivation()"
              >
              Change Activation
              </button>
              <button
                type="button"
                @click="$emit('closeActivationBrand', false)"
                class="w-full inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium border border-schemePrimary-blue text-schemePrimary-blue hover:text-white hover:bg-schemePrimary-blue dark:border-white dark:text-white rounded-md"
              >
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
import LoadingComponent from "./LoadingComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "IssgateActivationBrand",
  props: ["BrandId"],
  data() {
    return {
        isloading: false,
    };
  },
  components: {
    Modal,
    LoadingComponent,
  },
  mounted() {},

  methods: {
    ...mapActions("brands", ["ActivationBrand"]),

    ChangeActivation() {
      this.isloading = true;
      this.ActivationBrand(this.BrandId).then(() => {
        this.isloading = false;
        this.$emit("closeActivationBrand", false);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
