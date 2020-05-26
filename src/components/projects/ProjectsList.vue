<template>
  <div>
    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
      <div>Projetos</div>
      <!-- <b-btn variant="primary rounded-pill" class="d-block"><span class="ion ion-md-add"></span>&nbsp; Create project</b-btn> -->
    </h4>

    <div class="row">
      <div v-for="project in projectsData" :key="project.title" class="col-sm-6 col-xl-4">
        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-start pb-3">
            <div>
              <a
                href="javascript:void(0)"
                class="text-body text-big font-weight-semibold"
              >{{project.title}}</a>
              <b-badge
                class="align-text-bottom ml-1"
                :variant="statuses[project.status].color"
              >{{statuses[project.status].title}}</b-badge>
              <div
                class="text-muted small mt-1"
              >{{project.moduleCount - project.modulesCompleted}} módulos restantes, {{project.modulesCompleted}} módulo pronto.</div>
            </div>
            <!-- <b-dropdown variant="default icon-btn borderless rounded-pill md-btn-flat hide-arrow" size="sm" :right="!isRtlMode">
              <template slot="button-content"><i class="ion ion-ios-more"></i></template>
              <b-dropdown-item href="javascript:void(0)">View</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
            </b-dropdown>-->
          </b-card-body>

          <b-progress
            :value="completedPercent(project.moduleCount, project.modulesCompleted)"
            height="3px"
            class="rounded-0"
          />
          <div class="card-body small pt-3 pb-0">
            <strong>{{completedPercent(project.moduleCount, project.modulesCompleted)}}%</strong> completo
          </div>

          <b-card-body class="pb-3">{{project.shortDescription}}</b-card-body>

          <b-card-body class="pt-0">
            <div class="row">
              <div class="col">
                <div class="text-muted small">Criado em</div>
                <div class="font-weight-bold">{{project.created}}</div>
              </div>
              <div class="col">
                <div class="text-muted small">Vagas</div>
                <div class="font-weight-bold">{{project.newMemberStatus}}</div>
              </div>
            </div>
          </b-card-body>
          <hr class="m-0" />

          <b-card-body class="py-3">
            <div class="text-muted small mb-2">Squad</div>
            <div class="d-flex flex-wrap">
              <a
                v-for="member in project.team"
                :key="member.avatar"
                href="javascript:void(0)"
                class="d-block mr-1 mb-1"
              >
                <img
                  :src="`${publicUrl}img/avatars/${member.avatar}`"
                  alt
                  class="ui-w-30 rounded-circle"
                />
              </a>
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pages-projects-list",
  metaInfo: {
    title: "Projetos"
  },
  data: () => ({
    statuses: {
      1: { title: "Em Planejamento", color: "info" },
      2: { title: "Ativo", color: "success" },
      3: { title: "Parado", color: "warning" },
      4: { title: "Finalizado", color: "dark" }
    },

    projectsData: [
      {
        status: 2,
        title: "AliançaDEV",
        moduleCount: 10,
        modulesCompleted: 1,
        shortDescription:
          "Projeto principal da Aliança. Esse é um mock e está sendo preenchido manualmente no código",
        created: "24/05/20",
        newMemberStatus: "Fechadas",
        team: [
          { avatar: "1-small.png" },
          { avatar: "2-small.png" },
          { avatar: "3-small.png" },
          { avatar: "4-small.png" },
          { avatar: "5-small.png" }
        ]
      },
      {
        status: 1,
        title: "PerfilDEV",
        moduleCount: 10,
        modulesCompleted: 0,
        shortDescription:
          "Projeto do banco de talentos e plataforma integrada PerfilDEV",
        created: "24/05/20",
        newMemberStatus: "Aceitando Aplicações",
        team: [
          { avatar: "2-small.png" },
          { avatar: "3-small.png" },
          { avatar: "4-small.png" },
          { avatar: "5-small.png" },
          { avatar: "6-small.png" },
          { avatar: "7-small.png" },
          { avatar: "8-small.png" }
        ]
      }
    ]
  }),
  methods: {
    completedPercent(tasks, completed) {
      return Math.round((completed / tasks) * 100);
    }
  },
  mounted() {
    this.$axios.get("/user/personalData");
  }
};
</script>
