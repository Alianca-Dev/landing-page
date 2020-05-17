<template>
  <div>
    <HeaderBar />
    <section class="font-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 pl-lg-5">
            <h4 class="color-black mb-2">Vamos lá!</h4>
            <p class="color-3">
              <br />Precisamos de mais alguns dados para continuar o cadastro
            </p>

            <!-- <div class="ui selection dropdown">
              <input type="hidden" />
              <i class="dropdown icon"></i>
              <div class="text">All Categories</div>
              <div class="menu">
                <div class="item">All Categories</div>
                <div class="item">Digital</div>
                <div class="item">Animation</div>
                <div class="item">Print</div>
              </div>
            </div>-->

            <div class="py-4">
              <h5>Primeiro, o que você sabe?</h5>
              <p
                class="py-2"
              >Marque apenas as áreas nas quais você pode ativamente contribuir para os projetos.</p>
              <form class="py-2">
                <div class="zinput zcheckbox">
                  <input id="front" name="front" type="checkbox" />
                  <label for="front">Front End</label>
                </div>
                <div class="zinput zcheckbox">
                  <input id="back" name="back" type="checkbox" />
                  <label for="back">Back End</label>
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
  name: "ComplementData",
  components: {
    HeaderBar
  },
  props: {
    headerColor: String
  }
};
</script>