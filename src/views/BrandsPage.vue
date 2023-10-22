<template>
  <div class="Brands">
    <div class="container mx-auto px-4 sm:px-8">
      <AddNew
        v-if="openAddNew"
        :languages="getLanguages"
        @closeAddNew="openAddNew = false"
      />
      <UpdateBrand
        v-if="openUpdateModel"
        :BrandId="selectedBrand.id"
        :languages="getLanguages"
        @closeUpdateCurrentBrand="openUpdateModel = false"
      />
      <DeleteBrand
        v-if="openDeleteModel"
        :BrandId="selectedBrand.id"
        @closeDeleteBrand="openDeleteModel = false"
      />
      <ActivationBrand
        v-if="openActivationModel"
        :BrandId="selectedBrand.id"
        @closeActivationBrand="openActivationModel = false"
      />
      <div class="py-8">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-3xl font-semibold leading-tight">Brands</h2>
          <button
            type="button"
            @click="openAddNew = true"
            class="inline-flex capitalize justify-center my-2 gap-2 px-5 py-2 font-medium text-white bg-schemeSecondary-green rounded-md"
          >
            Add New Brand
          </button>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Brand
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Created At
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Edit
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getBrands" :key="item.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-full h-full rounded-full"
                          :src="item.image"
                          alt=""
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ item.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      v-if="item.isActive"
                      @click="ChangeBrandStatus(item)"
                      class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="w-4 h-4 absolute -top-1 -left-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        ></path>
                      </svg>
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Active</span>
                    </span>
                    <span
                      v-else
                      @click="ChangeBrandStatus(item)"
                      class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight cursor-pointer"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="w-4 h-4 absolute -top-1 -left-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        ></path>
                      </svg>
                      <span class="relative">inActive</span>
                    </span>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ formatDate(item.createdAt) }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 bg-white text-sm border-b border-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-primary cursor-pointer"
                      viewBox="0 0 576 512"
                      @click="UpdateBrandinfo(item)"
                    >
                      <path
                        fill="currentColor"
                        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                      />
                    </svg>
                  </td>
                  <td
                    class="px-5 py-5 bg-white text-sm border-b border-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-red-500 cursor-pointer"
                      viewBox="0 0 448 512"
                      @click="DeleteSelectedBrand(item)"
                    >
                      <path
                        fill="currentColor"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="max-w-lg mx-auto my-12">
              <pagination
                :total-pages="
                  getPagination.last_page == 0 ? 1 : getPagination.last_page
                "
                :total="getPagination.total"
                :per-page="getPagination.per_page"
                :current-page="getPagination.current_page"
                :has-more-pages="hasMorePages"
                @pagechanged="showMore"
              >
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddNew from "@/components/AddNew";
import UpdateBrand from "@/components/UpdateBrand.vue";
import DeleteBrand from "@/components/DeleteBrand.vue";
import ActivationBrand from "@/components/ActivationBrand";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "BrandsView",
  components: {
    AddNew,
    UpdateBrand,
    DeleteBrand,
    ActivationBrand,
    Pagination,
  },
  data() {
    return {
      openAddNew: false,
      openUpdateModel: false,
      openDeleteModel: false,
      openActivationModel: false,
      page: 1,
      totalPages: 4,
      total: 40,
      perPage: 10,
      currentPage: 1,
      hasMorePages: true,
    };
  },
  created() {
    this.fetchBrands();
    this.fetchLanguages();
  },
  computed: {
    ...mapGetters("brands", ["getBrands", "getPagination"]),
    ...mapGetters("languages", ["getLanguages"]),
  },
  methods: {
    ...mapActions("brands", ["fetchBrands"]),
    ...mapActions("languages", ["fetchLanguages"]),
    formatDate(dateTime) {
      const date = new Date(dateTime);
      return date.toLocaleString(); // You can adjust the formatting as per your requirements
    },
    UpdateBrandinfo(item) {
      this.selectedBrand = item;
      this.openUpdateModel = true;
    },
    DeleteSelectedBrand(item) {
      this.selectedBrand = item;
      this.openDeleteModel = true;
    },
    ChangeBrandStatus(item) {
      this.selectedBrand = item;
      this.openActivationModel = true;
    },
    showMore(page) {
      this.page = page;
      this.currentPage = page;
    },
  },
};
</script>
