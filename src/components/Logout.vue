<template>
  <div>
    <HeaderBar />
    <section class="py-0 font-1">
      <div class="container-fluid">
        <div class="row align-items-center text-center h-full">
          <div class="col">
            <p class="lead">Tem certeza que deseja sair?</p>
            <a class="btn btn-info mt-3" v-on:click="back" href="#">VOLTAR</a>
            <a class="btn btn-outline mt-3" v-on:click="logout" href="#">FAZER LOGOUT</a>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  components: {
    HeaderBar
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
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>