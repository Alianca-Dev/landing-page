<template>
  <div>
    <HeaderBar />
    <section class="py-0 font-1">
      <div class="container-fluid">
        <div class="row align-items-center text-center justify-content-center" id="password-recovery-form">
          <div class="col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <h3 class="mb-3 fw-300">Esqueceu sua senha?</h3>
            <p style="margin-top: 20px">Preencha seu email abaixo para receber um link de recuperação de senha</p>
            <form style="margin-top: 80px">
              <div class="input-group">
                <input class="form-control" type="email" placeholder="Email" />
                <span class="input-group-btn">
                  <button class="btn btn-primary" type="button">Continuar</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
  </div>
</template>

<style scoped>
#password-recovery-form {
    margin-top: 150px;
}
</style>

<script>
import HeaderBar from "./HeaderBar.vue";

export default {
  name: "RecoverPassword",
  components: {
    HeaderBar
  }
};
</script>