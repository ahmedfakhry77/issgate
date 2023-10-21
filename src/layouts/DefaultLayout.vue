<template>
  <div class="flex">
    <div :class="[isOpen ? 'w-52' : ' w-16 ']" class="z-10" id="sidebar">
      <Sidebar
        @toggleSideBar="isOpen = !isOpen"
        :isOpen="isOpen"
        class="z-10"
      />
    </div>
    <div v-if="isOpen" class="overlay fixed md:hidden"></div>
    <div class="p-4 ml-2 w-full overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "IssgateDefaultLayout",
  components: {
    Sidebar,
  },
  data() {
    return {
      isOpen: true,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.fade-enter-from {
  transform: translateY(-70px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  transform: translateY(70px);
  opacity: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.overlay {
  display: initial;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
