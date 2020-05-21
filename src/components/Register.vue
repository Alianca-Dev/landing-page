<template>
  <div>
    <HeaderBar />
    <section class="font-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 pl-lg-5">
            <div class="row">
              <div class="col-lg-8 mt-5 mt-lg-0">
                <h4 class="color-black mb-2">Criar conta</h4>
                <!-- <p class="color-3">With Posh you can make a web application too. That's what we mean by doing more with Posh.</p> -->
              </div>
            </div>
            <form class="mt-5 row" @submit.prevent="submitForm">
              <div class="col-md-6">
                <div :class="{'form-group': true, 'has-error': firstnameError != null}">
                  <input
                    class="form-control"
                    type="text"
                    name="firstname"
                    v-model="firstname"
                    v-on:input="validateData"
                    placeholder="Nome"
                  />
                  <label for="firstname" class="mb-3">{{firstnameError}}</label>
                </div>
              </div>
              <div class="col-md-6">
                <div :class="{'form-group': true, 'has-error': lastnameError != null}">
                  <input
                    class="form-control"
                    name="lastname"
                    type="text"
                    v-model="lastname"
                    v-on:input="validateData"
                    placeholder="Sobrenome"
                  />
                  <label for="lastname" class="mb-3">{{lastnameError}}</label>
                </div>
              </div>
              <div class="col-12">
                <div :class="{'form-group': true, 'has-error': emailError != null}">
                  <input
                    class="form-control"
                    name="email"
                    type="email"
                    v-model="email"
                    v-on:input="validateData"
                    placeholder="Email"
                  />
                  <label for="email" class="mb-3">{{emailError}}</label>
                </div>
              </div>
              <div class="col-12">
                <div :class="{'form-group': true, 'has-error': usernameError != null}">
                  <input
                    class="form-control"
                    name="username"
                    type="text"
                    v-model="username"
                    v-on:input="validateData"
                    placeholder="Username"
                  />
                  <label for="username" class="mb-3">{{usernameError}}</label>
                </div>
              </div>
              <div class="col-6">
                <div :class="{'form-group': true, 'has-error': passwordError != null}">
                  <input
                    class="form-control"
                    name="password"
                    type="password"
                    v-model="password"
                    v-on:input="validateData"
                    placeholder="Senha"
                  />
                  <label for="password" class="mb-3">{{passwordError}}</label>
                </div>
              </div>
              <div class="col-6">
                <div :class="{'form-group': true, 'has-error': passwordConfirmationError != null}">
                  <input
                    class="form-control"
                    name="passwordConfirmation"
                    type="password"
                    v-model="passwordConfirmation"
                    v-on:input="validateData"
                    placeholder="Confirmação da Senha"
                  />
                  <label for="passwordConfirmation" class="mb-3">{{passwordConfirmationError}}</label>
                </div>
              </div>
              <div class="col-12">
                <h6>
                  Eu li e aceito os
                  <a href="#">termos de uso</a> e a
                  <a href="#">politica de privacidade.</a>
                </h6>
                <div class="form-group">
                  <input class="ios-toggle" id="checkbox1" type="checkbox" name="checkbox1" />
                  <label class="checkbox-label" for="checkbox1" data-off data-on></label>
                </div>
              </div>
            </form>
            <!-- <router-link :to="'complement-data'"><div class="mt-4 btn btn-primary">CRIAR CONTA</div></router-link> -->
            <div class="mt-4 btn btn-primary" v-on:click="submitForm">CRIAR CONTA</div>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
  </div>
</template>

<style scoped>
label {
  color: red;
}
</style>

<script>
import HeaderBar from "./HeaderBar.vue";
import * as firebase from 'firebase/app';
//import 'firebase/auth';

export default {
  name: "Register",
  components: {
    HeaderBar
  },
  methods: {
    async submitForm() {
      var validationResult = await this.validateData();
      if (validationResult == true) {
        try {
          const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.push("landing-profile");
        } catch(error) {
          console.log(error);
        }
      }
    },
    async validateData() {
      /* Firstname */

      if (this.firstname == "" || this.firstname == null) {
        this.firstnameError = "O nome não pode ser vazio";
        return false;
      } else {
        this.firstnameError = null;
      }

      /* Lastname */

      if (this.lastname == "" || this.lastname == null) {
        this.lastnameError = "O sobrenome não pode ser vazio";
        return false;
      } else {
        this.lastnameError = null;
      }

      /* Email */

      if (this.email == "" || this.email == null) {
        this.emailError = "O email não pode ser vazio";
        return false;
      } else if (!this.reg.test(this.email)) {
        this.emailError = "Esse não é um email válido";
        return false
      } else {
        this.emailError = null;
      }

      /* Username */

      if (this.username == "" || this.username == null) {
        this.usernameError = "O username não pode ser vazio";
        return false;
      } else if(this.username.length < 6) {
        this.usernameError = "O seu username precisa ter no minimo 6 caracteres";
        return false;
      } else {
        this.usernameError = null;
      }

      /* Password */

      if (this.password == "" || this.password == null) {
        this.passwordError = "A senha pode ser vazia";
        return false;
      } else {
        this.passwordError = null;
      }

      /* Password Confirmation */

      if (this.passwordConfirmation == "" || this.passwordConfirmation == null) {
        this.passwordConfirmationError =
          "A confirmação de senha não pode ser vazia";
        return false;
      } else if (this.passwordConfirmation != this.password) {
        this.passwordConfirmationError = "As senhas não coincidem";
        return false;
      } else {
        this.passwordConfirmationError = null;
      }

      return true;
    }
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",

      firstnameError: null,
      lastnameError: null,
      usernameError: null,
      emailError: null,
      passwordError: null,
      passwordConfirmationError: null,

      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  }
};
</script>