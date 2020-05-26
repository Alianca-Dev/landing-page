<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="media align-items-center">
          <div class="media-body">
            <h5 class="mt-3">Tem certeza que deseja sair?</h5>
          </div>
          <a href="#" class="btn btn-primary rounded-pill d-block" v-on:click="logout" >Fazer Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "pages-authentication-login-v1",
  metaInfo: {
    title: "Logout"
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$router.push({
          name: "login",
          params: {
              successMessage: "Obrigado e volte sempre!"
          }
      });
    }
  }
};
</script>
