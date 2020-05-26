<template>
  <div class="authentication-wrapper authentication-1 px-4">
    <div class="authentication-inner py-5">
      <!-- Form -->
      <form class="my-5">
        <b-form-group label="Nome">
          <b-input v-model="credentials.firstname" />
        </b-form-group>
        <b-form-group label="Sobrenome">
          <b-input v-model="credentials.lastname" />
        </b-form-group>
        <b-form-group label="Username">
          <b-input-group prepend="@">
            <b-input v-model="credentials.username" />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Número de telefone">
          <masked-input
            type="text"
            class="form-control"
            placeholder="Phone"
            v-model="credentials.phone"
            :mask="masks.phoneMask"
          />
        </b-form-group>
        <b-form-group label="Email">
          <masked-input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="credentials.email"
            :mask="masks.emailMask"
          />
        </b-form-group>
        <b-form-group label="Senha" class="position-relative">
          <password v-model="credentials.password" defaultClass="form-control" />
        </b-form-group>
        <b-form-group label="Repita a senha" class="position-relative">
          <b-input type="password" v-model="credentials.passwordRepeat" />
        </b-form-group>
        <b-btn variant="primary" :block="true" class="mt-4" v-on:click="submitForm">Criar conta</b-btn>
        <div class="bg-lightest text-muted small p-2 mt-4">
          Ao clicar em "Criar conta", você aceita nossos
          <a
            href="javascript:void(0)"
          >termos de uso e política de privacidade</a>.
          Nós enviaremos emails ocasionais sobre a sua.
        </div>
      </form>
      <!-- / Form -->
      <div class="text-center text-muted">
        Já tem uma conta?
        <router-link :to="'login'"><a>Faça login</a></router-link>
      </div>
    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-password-strength-meter/vue-password-strength-meter.scss" lang="scss"></style>

<script>
import Password from "vue-password-strength-meter";
import MaskedInput from "vue-text-mask";
import * as textMaskAddons from "text-mask-addons/dist/textMaskAddons";
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "pages-authentication-register-v1",
  metaInfo: {
    title: "Register v1 - Pages"
  },
  components: {
    Password,
    MaskedInput
  },
  async submitForm() {
    var validationResult = await this.validateData();
    if (validationResult === true) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.credentials.email, this.credentials.password);
        console.log(user);
        this.$router.push("landing-profile");
      } catch (error) {
        console.log(error);
      }
    }
  },
  async validateData() {
    /* Firstname */

    if (this.firstname === "" || this.firstname === null) {
      this.firstnameError = "O nome não pode ser vazio";
      return false;
    } else {
      this.firstnameError = null;
    }

    /* Lastname */

    if (this.lastname === "" || this.lastname === null) {
      this.lastnameError = "O sobrenome não pode ser vazio";
      return false;
    } else {
      this.lastnameError = null;
    }

    /* Email */

    if (this.email === "" || this.email === null) {
      this.emailError = "O email não pode ser vazio";
      return false;
    } else if (!this.reg.test(this.email)) {
      this.emailError = "Esse não é um email válido";
      return false;
    } else {
      this.emailError = null;
    }

    /* Username */

    if (this.username === "" || this.username === null) {
      this.usernameError = "O username não pode ser vazio";
      return false;
    } else if (this.username.length < 6) {
      this.usernameError = "O seu username precisa ter no minimo 6 caracteres";
      return false;
    } else {
      this.usernameError = null;
    }

    /* Password */

    if (this.password === "" || this.password === null) {
      this.passwordError = "A senha pode ser vazia";
      return false;
    } else {
      this.passwordError = null;
    }

    /* Password Confirmation */

    if (this.passwordConfirmation === "" || this.passwordConfirmation === null) {
      this.passwordConfirmationError =
        "A confirmação de senha não pode ser vazia";
      return false;
    } else if (this.passwordConfirmation !== this.password) {
      this.passwordConfirmationError = "As senhas não coincidem";
      return false;
    } else {
      this.passwordConfirmationError = null;
    }

    return true;
  },
  data: () => ({
    masks: {
      emailMask: textMaskAddons.emailMask,
      phoneMask: [
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]
    },
    credentials: {
      name: "",
      email: "",
      password: ""
    },
    errors: {
      firstnameError: null,
      lastnameError: null,
      usernameError: null,
      emailError: null,
      passwordError: null,
      passwordConfirmationError: null
    },
    patterns: {
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  })
};
</script>
