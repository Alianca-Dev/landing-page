<template>
<div id="app">
  <body data-spy="scroll" data-target=".inner-link" data-offset="60">
    <main>
      <HomologBanner />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </body>
</div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
<script>
import HomologBanner from "./components/HomologBanner.vue";

export default {
  name: "App",
  components: {
    HomologBanner
  }
};
</script>