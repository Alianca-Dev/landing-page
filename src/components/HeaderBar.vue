<template>
  <div>
    <div class="znav-container znav-white" id="znav-container">
      <div class="container">
        <nav class="navbar navbar-toggleable-md">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="hamburger hamburger--emphatic">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </button>
          <a class="navbar-brand overflow-hidden" href="index.html">
            <img v-bind:src="logo" alt="logo" width="80px" />
          </a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li>
                <a>
                  <router-link :to="'home'">Sobre</router-link>
                </a>
              </li>
              <li>
                <a>
                  <router-link :to="'landing-profile'">PerfilDEV</router-link>
                </a>
              </li>
              <li v-if="isLoggedIn">
                <a>
                  <router-link :to="'logout'">Sair</router-link>
                </a>
              </li>
              <li v-if="!isLoggedIn">
                <a>
                  <router-link :to="'login'">Entrar</router-link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <hr class="color-9 mt-0" style="margin-bottom: 0;" />
  </div>
</template>
<style scoped>
.znav-container {
  height: 58px;
}
</style>
<script>
export default {
  name: "HeaderBar",
  props: {
    logo: {
      default: "./assets/logo.png",
      type: String
    }
  },
  computed: {
    isLoggedIn() {
      return this.$user != null;
    }
  },
  methods: {
    logout() {}
  }
};
</script>