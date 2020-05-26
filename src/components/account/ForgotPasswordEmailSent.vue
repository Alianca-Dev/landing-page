<template>
  <div class="authentication-wrapper authentication-2 px-4">
    <div class="authentication-inner py-5">

      <!-- Form -->
      <b-card no-body>
        <div class="p-4 p-sm-5">

          <div class="display-1 lnr lnr-checkmark-circle text-center text-success mb-4"></div>

          <p class="text-center text-big mb-4">Solicitação enviada com sucesso! Verifique seu email para continuar.</p>

          <router-link :to="'login'"><button type="button" class="btn btn-primary btn-block">Ir para o login</button></router-link>

        </div>
      </b-card>
      <!-- / Form -->

    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-authentication-email-confirm',
  metaInfo: {
    title: 'Email Enviado'
  }
}
</script>
