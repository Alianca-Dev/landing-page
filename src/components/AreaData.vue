<template>
  <div>
    <HeaderBar />
    <section class="font-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 pl-lg-5">
            <div class="py-4">
              <h4 class="color-black mb-2">Agora me conte um pouco mais sobre o que sabe sobre front-end</h4>
              <h5>1. Frameworks</h5>
              <p class="py-2">Marque apenas as áreas nas quais você pode ativamente contribuir para os projetos.</p>
              <form class="py-2">
                <div class="zinput zcheckbox">
                  <input id="front" name="front" type="checkbox" />
                  <label for="front">React.js</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="back" name="back" type="checkbox" />
                  <label for="back">Vue.js</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="mobile" name="mobile" type="checkbox" />
                  <label for="mobile">Mobile</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="uiux" name="uiux" type="checkbox" />
                  <label for="uiux">UI/UX</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="redacao" name="redacao" type="checkbox" />
                  <label for="redacao">Redação</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="marketing" name="marketing" type="checkbox" />
                  <label for="marketing">Marketing</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="devops" name="devops" type="checkbox" />
                  <label for="devops">DevOps</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="datascience" name="datascience" type="checkbox" />
                  <label for="datascience">Data Science / ML</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="gestao" name="gestao" type="checkbox" />
                  <label for="gestao">Gestão</label>
                </div>
              </form>
            </div>
            <router-link :to="'area-data'"><div class="mt-4 btn btn-primary">CONTINUAR</div></router-link>
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
  name: "AreaData",
  components: {
    HeaderBar
  }
};
</script>