<template>
  <div>
    <section class="background-11 pt-4 pt-md-6 pt-lg-8">
      <div class="container">
        <div class="row align-items-center overflow-hidden">
          <div class="col-lg-6 pl-xl-5">
            <h2 class="mb-3 fw-400">Nos aliamos para aprender mais</h2>
            <p class="lead font-1 mt-2 mb-5 color-5">
              <br />Somos um grupo de desenvolvedores e nos aliamos
              para transmitir conhecimento e criar produtos digitais inovadores.
              <br />
              <br />Juntos, temos o
              potencial para transformar qualquer ideia em realidade, seja seu objetivo aprender um novo
              framework ou fundar uma startup de sucesso.
            </p>
            <form>
              <div class="row" style="margin-left: 0px;">
                <div class="col-5 col-md-4 pl-0">
                  <a class="btn btn-primary" href="https://discord.gg/VgB6hax" v-if="isLoggedIn">
                    IR PARA O DISCORD
                  </a>
                  <a class="btn btn-primary" href="https://discord.gg/VgB6hax" v-else-if="!isLoggedIn">
                    QUERO FAZER PARTE DA
                    ALIANÇA
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="assets/images/illustrations/main.png" />
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-8">
            <h5 class="fw-400 mb-3">COMO NOS COMUNICAMOS</h5>
            <h3 class="fw-400 mb-4">Discord</h3>
            <p class="lead color-5">
              Nosso principal meio de comunicação é o Discord. Entrando
              lá, você vai receber todas as informações que precisa para saber como prosseguir, alem de
              entrar uma comunidade muito legal e super disposta a te ajudar com o que você precisar :)
            </p>
          </div>
          <div class="col-lg-6 mb-8">
            <img src="assets/images/illustrations/chat.png" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 mb-8 push-lg-6">
            <h5 class="fw-400 mb-3">COMO NOS ORGANIZAMOS</h5>
            <h3 class="fw-400 mb-4">Sistema de Squads</h3>
            <p class="lead color-5">
              Dentro do servidor nós nos reunimos em squads, grupos de pessoas com
              conhecimentos de diversas áreas que são necessários durante todas as etapas da criação. Os projetos são atribuidos a essas squads.
            </p>
          </div>
          <div class="col-lg-6 mb-8 pull-lg-6">
            <img src="assets/images/illustrations/organize.png" />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 mb-8 mb-lg-0">
            <h5 class="fw-400 mb-3">COMO NOS APRIMORAMOS</h5>
            <h3 class="fw-400 mb-4">Estudando e aprendendo juntos</h3>
            <p class="lead color-5">
              A ideia por trás dessa comunidade é o compartilhamento de conhecimento.
              Nos tornaremos melhores, juntos, para criar experiencias incriveis.
            </p>
          </div>
          <div class="col-lg-6">
            <img src="assets/images/illustrations/learn.png" />
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="text-center">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-0 fw-400">
              Crie algo incrível
              <br />
            </h2>
            <p class="lead font-1 mb-6 color-5" style="margin-top: 20px;">
              Imagine os projetos que podemos
              fazer se trabalharmos juntos.
              <br />
              <br />Se isso tudo ressoa com você, entre agora no nosso servidor do Discord, você será muito bem vindo.
            </p>
            <a class="btn btn-primary btn-capsule m-1" href="https://discord.gg/VgB6hax">
              IR PARA O
              DISCORD
            </a>
          </div>
          <!--/.row-->
        </div>
      </div>
      <!--/.container-->
    </section>
    <section class="py-5 font-1 fs--1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="color-4 my-2">
              &copy; Copyright 2020 AliançaDev | Ilustrações de
              <a href="https://undraw.co/">undraw.co</a>
            </div>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  computed: {
    isLoggedIn() {
      return this.$user != null;
    }
  },
};
</script>