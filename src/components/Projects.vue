<template>
  <div>
    <HeaderBar />
    <section class="pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9 text-center">
            <h1 class="fs-3 mb-4 fw-400">Projetos Abertos</h1>
            <p
              class="color-7 lead font-1 mb-6"
            >Esses são os projetos que estão em fase de ideação ou desenvolvimento e possuem vagas abertas para novos integrantes.</p>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1 py-3">
      <div class="container">
        <div
          class="background-holder overlay overlay-2"
          style="background-image:url(assets/images/digital-agency-header.jpg);"
        ></div>
        <!--/.background-holder-->
        <div class="row px-lg-6 py-8 color-white">
          <div class="col-lg-8 col-xl-5">
            <h4>AliançaDEV</h4>
            <p
              class="lead"
            >Estamos procurando pessoas que estejam procurando se envolver nos projetos da própria Aliança.</p>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1 py-3">
      <div class="container">
        <div
          class="background-holder overlay overlay-2"
          style="background-image:url(assets/images/careers-header.jpg);"
        ></div>
        <!--/.background-holder-->
        <div class="row px-lg-6 py-8 color-white">
          <div class="col-lg-8 col-xl-5">
            <h4>PerfilDEV</h4>
            <p
              class="lead"
            >PerfilDEV é uma plataforma para desenvolvedores mostrarem seus conhecimentos para todos.<br /><br />É assim que você se torna visível para mais empregadores e líderes de squad.</p>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1 py-3">
      <div class="container">
        <div
          class="background-holder overlay overlay-2"
          style="background-image:url(assets/images/education-01.jpg);"
        ></div>
        <!--/.background-holder-->
        <div class="row px-lg-6 py-8 color-white">
          <div class="col-lg-8 col-xl-5">
            <h4>QuotaDEV</h4>
            <!-- <br /><br />O sistema usa blockchain para garantir a integridade das cotas e possui uma API pública para facilitar a distruiçãi de remuneração. -->
            <p
              class="lead"
            >QuotaDEV é um serviço que permite que desenvolvedores autonomos contribuam para projetos da comunidade e em troca recebam uma participação justa no projeto, de acordo com o investimento de trabalho.</p>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section>
      <div class="container">
        <div class="row font-1 text-center justify-content-center">
          <div class="col-xl-7">
            <h3 class="mb-2 fw-400">Quer saber mais?</h3>
            <p
              class="lead color-5 mb-5"
            >Entre no servidor do Discord para se envolver em uma comunidade super receptiva e conversar diretamente com os envolvidos nos projetos</p>
            <a class="btn btn-primary" href="#">IR PARA O DISCORD</a>
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

export default {
  name: "Project",
  components: {
    HeaderBar
  }
};
</script>