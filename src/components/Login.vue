<template>
  <div>
    <HeaderBar />
    <section class="py-0 font-1">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-center" id="login-form">
          <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div v-if="hasErrors" class="alert alert-danger" role="alert">
              <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>Ops!</strong>
              <br />
              <a>{{error}}</a>
            </div>
            <div v-else-if="hasMessage" class="alert alert-success" role="alert">
              <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <a>{{successMessage}}</a>
            </div>
            <h3 class="fw-300 mb-5">Entrar</h3>
            <form>
              <input class="form-control mb-3" type="email" v-model="email" placeholder="Email" />
              <input
                class="form-control mb-3"
                type="password"
                v-model="password"
                placeholder="Senha"
              />
              <div class="row align-items-center">
                <div class="col text-left">
                  <div class="fs--1 d-inline-block">
                    <a>
                      <router-link :to="'recover-password'">Esqueceu sua senha?</router-link>
                    </a>
                  </div>
                </div>
                <div class="col text-right">
                  <div class="btn-block btn btn-primary" type="button" v-on:click="login">ENTRAR</div>
                </div>
              </div>
            </form>
            <hr class="color-9 mt-6" />
            <div class="fs--1">
              Ainda não é cadastrado?
              <a>
                <router-link :to="'register'">Crie uma conta</router-link>
              </a>
            </div>
            <hr class="color-9" />
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
  </div>
</template>

<style scoped>
#login-form {
  margin-top: 150px;
}
</style>

<script>
import HeaderBar from "./HeaderBar.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  components: {
    HeaderBar
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      successMessage: this.$route.params.successMessage || ""
    };
  },
  methods: {
    async login() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.successMessage = "Pronto! Você está sendo redirecionado";
        this.$router.push("landing-profile");
      } catch (error) {
        this.password = "";
        this.error =
          "Não foi possivel fazer o login. Por favor, verifique os dados e tente novamente.";
      }
    }
  },
  computed: {
    hasErrors() {
      return this.error != null && this.error != "";
    },
    hasMessage() {
      return this.successMessage != null && this.successMessage != "";
    }
  }
};
</script>