<template>
  <div>
    <div
      :class="[isOpen ? 'w-48 p-3' : 'w-14 p-2']"
      class="flex flex-col h-screen duration-300 side shadow bg-secondary relative"
    >
      <svg
        fill="none"
        :class="[isOpen ? '' : ' rotate-180']"
        class="w-6 h-6 text-primary absolute top-2 -right-3 cursor-pointer duration-300"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        @click="$emit('toggleSideBar')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        ></path>
      </svg>
      <ul
        :class="[isOpen ? 'space-y-1' : 'space-y-4']"
        class="pt-2 pb-4 text-sm"
      >
        <li class="rounded-md cursor-pointer">
          <div class="flex flex-col items-center justify-center p-2 rounded-md">
            <svg
              class=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 69.3 101.6"
              style="height: 4rem"
              fill="#ffffff"
            >
              <path
                d="M39.5,89.9c-3.5-3.1-7.4-4.9-11.3-6.9c-2.6-1.3-5.3-2.5-8-3.7c-0.6-0.3-0.7-0.1-0.7,0.5
            c0.4,4.7,2,8.8,5.1,12.4c4.7,5.5,12,8.2,19.2,7.2c0.2,0,0.4-0.1,0.6-0.1c0,0,0,0,0.1,0c-8.7,3.1-21.9,2.2-31.9-6.8
            c-10.8-9.7-13.2-24.3-9-35.8c0.3,1,0.7,2,1.1,3c2.7,6.1,7.3,10,13.6,12c2.3,0.7,4.8,0.9,7.1,1.8c7.2,2.6,11.8,7.7,13.8,15.2
            C39.3,89,39.4,89.3,39.5,89.9z"
              ></path>
              <path
                d="M62.4,38.2c-1.1-1.5-2.3-2.9-3.7-4.1c-2.7-2.2-5.9-3.8-9.3-4.6c0.4-2.3,0.5-4.6,0.2-7
              C48.6,15.1,43.7,6,34.9,2.9C33,2.3,29.5,1.4,24.7,2.2C27.3,1,35-0.1,41.6,1.4c5.7,1.3,10.7,3.9,15,7.8
              c11.2,10.1,12.9,25.2,8.8,35.6C64.8,42.4,63.8,40.2,62.4,38.2z M30.2,21.3C24.5,16.6,19,8.7,20.7,6.5c1.6-2,9.7,0.5,14.7,5.4
              c5.8,5.6,6.4,13.2,6.4,15.8C37.6,26.4,33.7,24.2,30.2,21.3L30.2,21.3z"
              ></path>
              <path
                d="M12.8,9.4c0.8,4,2.3,7.8,4.5,11.3c4.2,6.5,9.9,11,17.2,13.5c2.1,0.7,4.2,1.2,6.3,1.5
              c3.3,0.5,6.4,1.7,9.4,3.3c8.1,4.4,14.1,12,16.3,20.9c1.4,5.6,1.4,11.6-0.2,17.2c-1.6,5.7-4.6,10.6-8.9,14.8
              c-0.1,0.1-0.3,0.4-0.5,0.3c-0.2-0.1-0.2-0.3-0.2-0.5c-1.9-8.2-6.5-14.7-13.3-19.5c-4.1-2.9-8.8-4.7-13.8-5.5
              c-7.9-1.3-14.6-4.9-19.8-10.9c-4.5-5.1-7.1-11.1-7.9-17.9c-0.9-7.8,0.8-15,5-21.7c1.5-2.4,3.4-4.5,5.5-6.5
              C12.5,9.4,12.7,9.4,12.8,9.4z"
              ></path>
            </svg>
            <span v-if="isOpen" class="text-white">Issgate</span>
          </div>
        </li>
        <li
          @click.prevent="page = 'Home'"
          :class="[page == 'Home' ? ' bg-primary' : '']"
          class="rounded-md cursor-pointer"
        >
          <router-link to="/">
            <div class="flex items-center p-2 space-x-3 rounded-md">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                ></path>
              </svg>

              <span v-if="isOpen" class="text-white">Home</span>
            </div>
          </router-link>
        </li>
        <li
          @click.prevent="page = 'Brands'"
          :class="[page == 'Brands' ? ' bg-primary' : '']"
          class="rounded-md cursor-pointer"
        >
          <router-link to="/brands">
            <div class="flex items-center p-2 space-x-3 rounded-md">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                ></path>
              </svg>

              <span v-if="isOpen" class="text-white">Brands</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      page: "Home",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.side {
  position: fixed;
  top: 0;
}
</style>
