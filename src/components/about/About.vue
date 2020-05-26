<template>
  <div>
    <div class="ui-block pb-0">
      <div class="uikit-example">
        <div class="jumbotron ui-hero theme-bg-white ui-mh-100vh">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-xl-6 text-md-left text-center my-5">
                <h1 class="display-3 mb-4">Nos aliamos para aprender mais</h1>
                <p class="lead text-muted py-4">
                  <span class="text-big">
                    Somos um grupo de desenvolvedores e nos aliamos para transmitir conhecimento e criar produtos digitais inovadores.
                    <br />
                    <br />Juntos, temos o potencial para transformar qualquer ideia em realidade, seja seu objetivo aprender um novo framework ou fundar uma startup de sucesso.
                  </span>
                </p>
                <router-link to="/help" :exact="true">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-lg rounded-pill btn-default md-btn-flat text-expanded"
                  >Saber Mais</a>
                </router-link>
                <router-link to="/register" :exact="true">
                  <a
                    href="javascript:void(0)"
                    class="btn btn-lg rounded-pill btn-primary text-expanded"
                  >
                    <span class="ion ion-ios-star"></span>&nbsp; Quero fazer parte
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron ui-hero theme-bg-white ui-mh-100vh">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-xl-6 text-md-left text-center my-5">
                <h1 class="display-3 mb-4">COMO NOS COMUNICAMOS</h1>
                <p class="lead text-muted py-4">
                  <span
                    class="text-big"
                  >Nosso principal meio de comunicação é o Discord. Entrando lá, você vai receber todas as informações que precisa para saber como prosseguir, alem de entrar uma comunidade muito legal e super disposta a te ajudar com o que você precisar :)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron ui-hero theme-bg-white ui-mh-100vh">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-xl-6 my-5">
                <div class="ui-device iphone mw-100 mx-auto" style="width: 230px;">
                  <div class="device-content">
                    <img src="assets/img/uikit/app-phone.png" alt />
                  </div>
                  <img class="device-img" src="assets/img/devices/iphone.png" alt />
                </div>
              </div>
              <div class="col-md-8 col-xl-6 text-md-left text-center my-5">
                <h1 class="display-3 mb-4">COMO NOS ORGANIZAMOS</h1>
                <p class="lead text-muted py-4">
                  <span
                    class="text-big"
                  >Dentro do servidor nós nos reunimos em squads, grupos de pessoas com conhecimentos de diversas áreas que são necessários durante todas as etapas da criação. Os projetos são atribuidos a essas squads.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron ui-hero theme-bg-white ui-mh-100vh">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-xl-6 text-md-left text-center my-5">
                <h1 class="display-3 mb-4">COMO NOS APRIMORAMOS</h1>
                <p class="lead text-muted py-4">
                  <span
                    class="text-big"
                  >A ideia por trás dessa comunidade é o compartilhamento de conhecimento. Nos tornaremos melhores, juntos, para criar experiencias incriveis.</span>
                </p>
              </div>

              <div class="col-md-4 col-xl-6 my-5">
                <div class="ui-device iphone mw-100 mx-auto" style="width: 230px;">
                  <div class="device-content">
                    <img src="assets/img/uikit/app-phone.png" alt />
                  </div>
                  <img class="device-img" src="assets/img/devices/iphone.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uikit-example">
          <div
            class="jumbotron ui-hero ui-mh-100vh ui-bg-cover ui-bg-fixed ui-bg-overlay-container"
            style="background-image: url('assets/img/bg/21.jpg');"
          >
            <div class="ui-bg-overlay bg-dark opacity-50"></div>
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-md-6 col-lg-6 col-xl-5 text-md-left text-center text-white my-5">
                  <h1 class="display-3 font-weight-bold mb-4">Crie algo incrível</h1>
                  <div class="lead opacity-75 mb-5">
                    Imagine os projetos que podemos fazer se trabalharmos juntos.
                    Se isso tudo ressoa com você, entre agora no nosso servidor do Discord, você será muito bem vindo.
                  </div>
                  <a href="#" class="btn btn-lg btn-outline-white">
                    IR PARA O
                    <strong>DISCORD</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Page -->
<style src='@/vendor/styles/pages/authentication.scss' lang='scss'></style>

<script>
export default {
  name: "pages-authentication-login-v1",
  metaInfo: {
    title: "Sobre"
  },
  data: () => ({
    credentials: {
      email: "",
      password: "",
      rememberMe: false
    }
  })
};
</script>
