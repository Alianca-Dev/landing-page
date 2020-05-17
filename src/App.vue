<template>
<div id="app">
  <body data-spy="scroll" data-target=".inner-link" data-offset="60">
    <main>
      <div class="alert alert-info" role="alert">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Hey!</strong> Essa é a versão de homologação do site. Para ir para a página de produção,
        <a href="https://alianca.dev/">clique aqui</a>.
      </div>

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
export default {
  name: "App",
  components: {}
};
</script>