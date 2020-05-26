<template>
  <sidenav :orientation="orientation" :class="curClasses">
    <!-- Brand demo (see src/demo.css) -->
    <div class="app-brand demo" v-if="orientation !== 'horizontal'">
      <router-link
        to="/"
        class="app-brand-text demo sidenav-text font-weight-normal ml-2"
      >AliançaDEV</router-link>
      <a
        href="javascript:void(0)"
        class="layout-sidenav-toggle sidenav-link text-large ml-auto"
        @click="toggleSidenav()"
      >
        <i class="ion ion-md-menu align-middle"></i>
      </a>
    </div>
    <div class="sidenav-divider mt-0" v-if="orientation !== 'horizontal'"></div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">
      <!-- Dashboards -->
      <sidenav-router-link to="/about" :exact="true">Sobre</sidenav-router-link>
      <sidenav-router-link to="/login" :exact="true" v-if="!isLoggedIn">Login</sidenav-router-link>
      <sidenav-router-link to="/register" :exact="true" v-if="!isLoggedIn">Cadastro</sidenav-router-link>
      <sidenav-router-link to="/help" :exact="true">Ajuda</sidenav-router-link>
      <sidenav-router-link to="/logout" :exact="true" v-if="isLoggedIn">Sair</sidenav-router-link>
      <div class="loggedArea" v-if="isLoggedIn">
        <sidenav-divider class="mb-1" />
        <sidenav-header class="small font-weight-semibold">ALIANÇA</sidenav-header>
        <sidenav-menu
          icon="ion ion-md-cube"
          :active="isMenuActive('/projects')"
          :open="isMenuOpen('/projects')"
        >
          <template slot="link-text">PROJETOS</template>
          <sidenav-router-link to="/projects/discover" :exact="true">Descobrir</sidenav-router-link>
          <sidenav-router-link to="/projects/suggest" :exact="true">Enviar Sugestão</sidenav-router-link>
        </sidenav-menu>
        <!-- <sidenav-menu
          icon="ion ion-md-ribbon"
          :active="isMenuActive('/squads')"
          :open="isMenuOpen('/squads')"
        >
          <template slot="link-text">SQUADS</template>
          <sidenav-router-link to="/squads/discover" :exact="true">Descobrir</sidenav-router-link>
        </sidenav-menu>
        <sidenav-menu
          icon="ion ion-md-mail-open"
          :active="isMenuActive('/projects')"
          :open="isMenuOpen('/projects')"
        >
          <template slot="link-text">INBOX</template>
          <sidenav-router-link to="/inbox" :exact="true">Inbox</sidenav-router-link>
          <sidenav-router-link to="/inbox/compose" :exact="true">Enviar Mensagem</sidenav-router-link>
        </sidenav-menu>
        <sidenav-menu
          icon="ion ion-md-chatboxes"
          :active="isMenuActive('/projects')"
          :open="isMenuOpen('/projects')"
        >
          <template slot="link-text">CHAT</template>
          <sidenav-router-link to="/chat" :exact="true">Entrar</sidenav-router-link>
          <sidenav-router-link to="/chat/discover" :exact="true">Descobrir</sidenav-router-link>
        </sidenav-menu>
        <sidenav-menu
          icon="ion ion-md-person"
          :active="isMenuActive('/profile')"
          :open="isMenuOpen('/profile')"
        >
          <template slot="link-text">MINHA CONTA</template>
          <sidenav-router-link to="/profile/dev" :exact="true">PerfilDEV</sidenav-router-link>
          <sidenav-router-link to="/profile/settings" :exact="true">Preferencias</sidenav-router-link>
        </sidenav-menu>
        <sidenav-menu
          icon="ion ion-md-school"
          :active="isMenuActive('/education')"
          :open="isMenuOpen('/education')"
        >
          <template slot="link-text">EDUCAÇÃO</template>
          <sidenav-router-link to="/education/dashboard" :exact="true">Dashboard</sidenav-router-link>
          <sidenav-router-link to="/education/courses" :exact="true">Cursos</sidenav-router-link>
          <sidenav-router-link to="/education/forum" :exact="true">Fórum</sidenav-router-link>
        </sidenav-menu> -->
        <sidenav-menu
          icon="ion ion-md-planet"
          :active="isMenuActive('/admin')"
          :open="isMenuOpen('/admin')"
        >
          <template slot="link-text">ADMINISTRAÇÃO</template>
          <sidenav-router-link to="/admin/dashboard" :exact="true">Dashboard</sidenav-router-link>
          <!-- <sidenav-router-link to="/admin/users" :exact="true">Usuários</sidenav-router-link>
          <sidenav-router-link to="/admin/projects" :exact="true">Projetos</sidenav-router-link>
          <sidenav-router-link to="/admin/squads" :exact="true">Squads</sidenav-router-link> -->
        </sidenav-menu>
      </div>
    </div>
  </sidenav>
</template>

<script>
import {
  Sidenav,
  SidenavLink,
  SidenavRouterLink,
  SidenavMenu,
  SidenavHeader,
  SidenavBlock,
  SidenavDivider
} from "@/vendor/libs/sidenav";

export default {
  name: "app-layout-sidenav",
  components: {
    /* eslint-disable vue/no-unused-components */
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
    /* eslint-enable vue/no-unused-components */
  },

  props: {
    orientation: {
      type: String,
      default: "vertical"
    }
  },

  computed: {
    curClasses() {
      let bg = this.layoutSidenavBg;

      if (
        this.orientation === "horizontal" &&
        (bg.indexOf(" sidenav-dark") !== -1 ||
          bg.indexOf(" sidenav-light") !== -1)
      ) {
        bg = bg
          .replace(" sidenav-dark", "")
          .replace(" sidenav-light", "")
          .replace("-darker", "")
          .replace("-dark", "");
      }

      return (
        `bg-${bg} ` +
        (this.orientation !== "horizontal"
          ? "layout-sidenav"
          : "layout-sidenav-horizontal container-p-x flex-grow-0")
      );
    },
    isLoggedIn() {
      return this.$user != null;
    }
  },

  methods: {
    isMenuActive(url) {
      return this.$route.path.indexOf(url) === 0;
    },

    isMenuOpen(url) {
      return (
        this.$route.path.indexOf(url) === 0 && this.orientation !== "horizontal"
      );
    },

    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    }
  }
};
</script>
