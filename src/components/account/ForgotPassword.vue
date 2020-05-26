<template>
  <div class="authentication-wrapper authentication-2 px-4">
    <div class="authentication-inner py-5">

      <!-- Form -->
      <form class="card">
        <div class="p-4 p-sm-5">
          <h5 class="text-center text-muted font-weight-normal mb-4">Recuperar Sua Senha</h5>

          <hr class="mt-0 mb-4">

          <p>
            Preencha seu email abaixo para enviarmos um email de recuperaçõa de senha
          </p>

          <b-form-group>
            <b-input v-model="credentials.email" placeholder="Email cadastrado" />
          </b-form-group>

          <router-link :to="'forgot-password-sent'"><b-btn variant="primary" class="mt-3" :block="true">Enviar email de reset de senha</b-btn></router-link>
          <router-link :to="'login'"><b-btn variant="outline-primary" class="mt-3" :block="true">Voltar</b-btn></router-link>
        </div>
      </form>
      <!-- / Form -->

    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-authentication-password-reset',
  metaInfo: {
    title: 'Recuperação de Senha'
  },
  data: () => ({
    credentials: {
      email: ''
    }
  })
}
</script>
