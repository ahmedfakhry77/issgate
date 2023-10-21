<template>
  <div
    class="main flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-60 px-0"
  >
    <div
      class="container mx-auto flex flex-col items-center justify-center px-2 sm:px-5 xl:max-w-xl-7"
    >
      <form
        class="text-white p-6 space-y-4 md:space-y-6 sm:p-8 border border-white rounded-lg relative"
      >
        <svg
          class="form-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69.3 101.6"
          style="height: 8rem; margin-bottom: 2.5rem"
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
        <h1
          class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
        >
          Sign in to your account
        </h1>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white"
            >Your email</label
          >
          <input
            type="email"
            v-model="credentials.email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-mediumtext-white"
            >Password</label
          >
          <input
            type="password"
            name="password"
            v-model="credentials.password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                v-model="credentials.rememberMe"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-white"
                >Remember me</label
              >
            </div>
          </div>
          
        </div>
        <div class="w-full text-end">
          <a
          href="#"
          class="text-sm font-medium text-white hover:underline dark:text-primary-500"
          >Forgot password?</a
        >
        </div>
        <button
          type="button"
          @click="login()"
          class="w-full text-primary bg-white hover:bg-primary hover:text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
        <p class="text-sm font-light text-white">
          Don’t have an account yet?
          <a
            href="#"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Sign up</a
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script>

export default{
  data() {
    return {
      credentials: {
        email: "",
        password: "",
        rememberMe: true,
      },

      errorEmail: "",
      errors: {
        errorEmail: ["The email field is required."],
        errorPassword: ["The password confirmation does not match."],
      },
    };
  },
  methods: {
   
    async login() {
      try {
        await this.$store.dispatch("login", this.credentials).then(() => {
          
        })
      } catch (e) {
        console.log(e);
      }
    },
  },
}
</script>
<style scoped>
.main {
  background-image: linear-gradient(
      to bottom right,
      #258392,
      rgba(25, 138, 156, 0.75),
      #125188
    ),
    url(../assets/background.jpg);
}
.form-logo {
  position: absolute;
  top: -90px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
