<template>
  <div>
    <h3 class="row align-items-center font-weight-bold py-4 mb-4">
      <div class="col">
        Ajuda
      </div>
      <div class="col-sm-6 col-md-4 col-xl-3 mt-4 mt-sm-0">
        <b-input size="lg" placeholder="Procurar..." />
      </div>
    </h3>
    <hr class="container-m-nx border-light my-0" />

    <div class="row row-bordered my-4">
      <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
        <a href="javascript:void(0)" class="card card-hover text-body my-2">
          <b-card-body class="text-center py-5">
            <div class="lnr lnr-enter display-3 text-primary"></div>
            <h5 class="m-0 mt-3">Primeiros Passos</h5>
          </b-card-body>
        </a>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
        <a href="javascript:void(0)" class="card card-hover text-body my-2">
          <b-card-body class="text-center py-5">
            <div class="lnr lnr-layers display-3 text-primary"></div>
            <h5 class="m-0 mt-3">Projetos</h5>
          </b-card-body>
        </a>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
        <a href="javascript:void(0)" class="card card-hover text-body my-2">
          <b-card-body class="text-center py-5">
            <div class="lnr lnr-users display-3 text-primary"></div>
            <h5 class="m-0 mt-3">Squads</h5>
          </b-card-body>
        </a>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
        <a href="javascript:void(0)" class="card card-hover text-body my-2">
          <b-card-body class="text-center py-5">
            <div class="lnr lnr-flag display-3 text-primary"></div>
            <h5 class="m-0 mt-3">Liderança</h5>
          </b-card-body>
        </a>
      </div>
    </div>
    <hr class="container-m-nx border-light my-0" />
    <b-card no-body class="mt-5">
      <b-card-header header-tag="h5" class="py-4 px-5">Primeiros Passos</b-card-header>
      <div class="row no-gutters row-bordered">
        <div class="col-md-6 p-5">
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Por onde começar
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; O que é o PerfilDEV
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Quais são as features da plataform
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Usando como portfólio
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Quem são os responsáveis
          </a>
        </div>
        <div class="col-md-6 p-5">
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como posso ajudar no desenvolvimento
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como entrar em contato
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como solicitar uma feature
          </a>
        </div>
      </div>
    </b-card>
    <b-card no-body class="mt-5">
      <b-card-header header-tag="h5" class="py-4 px-5">Projetos</b-card-header>
      <div class="row no-gutters row-bordered">
        <div class="col-md-6 p-5">
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como funcionam os projetos
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como contribuir para um projeto
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como sugerir um projeto
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Como os projetos são escolhidos
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Quais projetos estão abertos
          </a>
        </div>
        <div class="col-md-6 p-5">
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Por onde votar para projetos
          </a>
          <a href="javascript:void(0)" class="d-block mb-3">
            <i class="ion ion-ios-arrow-forward"></i>&nbsp; Quanto tempo duram os projetos
          </a>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "pages-help-center",
  metaInfo: {
    title: "Ajuda"
  }
};
</script>
