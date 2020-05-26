<template>
  <div class="authentication-wrapper authentication-1 px-4">
    <div class="authentication-inner py-5">
      <b-alert
        show
        dismissible
        variant="success"
        v-if="successMessage !== null && errorMessage === null"
      >{{successMessage}}</b-alert>
      <b-alert show variant="warning" v-if="errorMessage !== null">{{errorMessage}}</b-alert>
      <!-- Form -->
      <form class="my-5">
        <b-form-group label="Email">
          <masked-input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="credentials.email"
            :mask="masks.emailMask"
          />
        </b-form-group>
        <b-form-group>
          <div slot="label" class="d-flex justify-content-between align-items-end">
            <div>Senha</div>
            <a class="d-block small">
              <router-link :to="'forgot-password'">Esqueceu a senha?</router-link>
            </a>
          </div>
          <b-input
            type="password"
            placeholder="Senha"
            v-model="credentials.password"
            :state="(errorMessage == null) ? null : false"
          />
        </b-form-group>

        <div class="d-flex justify-content-between align-items-center m-0">
          <b-check v-model="credentials.rememberMe" class="m-0">Lembrar de mim</b-check>
          <!-- <b-btn variant="primary" v-on:click="login">Entrar</b-btn> -->
        </div>
        <div class="row">
          <div class="col">
            <span class="pull-right">
              <ladda-btn
                :loading="isLoading"
                data-style="expand-right"
                @click.native="login"
                class="btn btn-primary"
              >Entrar</ladda-btn>
            </span>
          </div>
        </div>
      </form>
      <!-- / Form -->

      <div class="text-center text-muted">
        Ainda não tem uma conta?
        <a>
          <router-link :to="'register'">Cadastre-se</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import LaddaBtn from "@/vendor/libs/ladda/Ladda";
import MaskedInput from "vue-text-mask";
import * as textMaskAddons from "text-mask-addons/dist/textMaskAddons";

export default {
  name: "pages-authentication-login-v1",
  metaInfo: {
    title: "Login"
  },
  components: {
    LaddaBtn,
    MaskedInput
  },
  data: function() {
    return {
      credentials: {
        email: "",
        password: "",
        rememberMe: false
      },
      masks: {
        emailMask: textMaskAddons.emailMask
      },
      isLoading: true,
      errorMessage: null,
      successMessage: this.$route.params.successMessage || null
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      try {
        if (this.credentials.rememberMe) {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
        } else {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        }

        await firebase
          .auth()
          .signInWithEmailAndPassword(
            this.credentials.email,
            this.credentials.password
          );
        this.successMessage = "Pronto! Você está sendo redirecionado";
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.credentials.password = "";
        this.errorMessage =
          "Não foi possivel fazer o login. Por favor, verifique os dados e tente novamente.";
        this.isLoading = false;
      }
    }
  },
  computed: {
    hasErrors() {
      return this.errorMessage !== null && this.errorMessage !== "";
    },
    hasMessage() {
      return this.successMessage !== null && this.successMessage !== "";
    }
  }
};
</script>
