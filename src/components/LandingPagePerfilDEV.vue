<template>
  <div>
    <HeaderBar />
    <section class="font-1">
      <div class="container">
        <div class="row">
          <div class="col align-items-center" id="container">
            <h1>Olá!</h1>
            <p class="lead" id="description-text">
              Sejá bem vindo ao
              <b>PerfilDEV</b>!
              <br />
              <br />Esse é o banco de talentos da
              <a href>
                <b>AliançaDEV</b>
              </a> e é por aqui que você vai poder conhecer e se envolver nos nossos projetos.
              <br />
              <br />Você tambem pode usa-lo como um perfil público para mostrar os seus conhecimentos para outras pessoas.
            </p>
            <div v-if="!isLoggedIn">
              <p
                class="lead"
                id="description-text"
              >O PerfilDEV é uma funcionalidade da sua conta AliançaDEV. Se você ainda não tiver uma, basta se cadastrar no botão abaixo.</p>
            </div>
            <!-- <router-link :to="'complement-data'"> -->
            <!-- <a
                href="#"
                class="btn btn-primary"
                v-if="isLoggedIn"
                id="discord-button"
            >CRIAR MEU PERFIL</a>-->
            <div>
              <div class="alert alert-info my-6" role="alert" v-if="isLoggedIn">
                <strong>Ops!</strong> Ainda estamos finalizando essa funcionalidade. Pode deixar que avisaremos quando tudo estiver pronto ;)
              </div>
            </div>
            <!-- </router-link> -->
            <router-link :to="'register'">
              <a
                href="#"
                class="btn btn-primary"
                v-if="!isLoggedIn"
                id="discord-button"
              >CRIAR UMA CONTA DA ALIANÇA</a>
            </router-link>
            <router-link :to="'login'">
              <a
                href="#"
                class="btn btn-outline"
                v-if="isLoggedIn == false"
                id="discord-button"
              >JÁ TENHO UMA CONTA</a>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#description-text {
  margin-top: 60px;
}

#discord-button {
  margin-top: 60px;
}
</style>

<script>
import HeaderBar from "./HeaderBar.vue";

export default {
  name: "LandingPagePerfilDEV",
  components: {
    HeaderBar
  },
  computed: {
    isLoggedIn() {
      return this.$user != null;
    }
  }
};
</script>