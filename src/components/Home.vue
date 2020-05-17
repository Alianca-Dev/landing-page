<template>
  <div>
    <HeaderBar />
    <LandingPage />
  </div>
</template>
<script>
import HeaderBar from "./HeaderBar.vue";
import LandingPage from "./LandingPage.vue";

export default {
  name: "Home",
  components: {
    HeaderBar,
    LandingPage,
  }
};
</script>