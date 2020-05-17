<template>
  <div>
    <HeaderBar />
    <section class="p-0 color-white font-1">
      <div
        class="background-holder overlay"
        style="background-image:url(assets/images/contact-03.jpg);"
      ></div>
      <!--/.background-holder-->
      <div class="container">
        <div class="row h-half align-items-center py-5">
          <div class="col-md-8 col-lg-5">
            <h1 class="fs-3 fs-md-4 mb-3">Contact</h1>
            <p
              class="lead fs-xs-1"
            >Relax, we've got your back. Feel free to contact us for any support.</p>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h3 class="text-uppercase fw-300">Contact</h3>
            <hr class="short left mb-5" align="left" />
            <div class="row">
              <div class="col-1">
                <span class="fa fa-map-marker"></span>
              </div>
              <div class="col">
                <p class="fw-300">
                  <span class="fw-600">Posh Headquarte</span>
                  <br />
                  <span class="color-5">2000 Fashion Show Drive</span>
                  <br />
                  <span class="color-5">Las Vegas, Nevada 56846</span>
                </p>
                <p class="fw-300">
                  <span class="fw-600">Phone:</span>
                  <span class="color-5">&nbsp;&nbsp;&nbsp;&nbsp; 458.564.4545</span>
                  <br />
                  <span class="fw-600">Reserve:</span>
                  <span class="color-5">&nbsp; 677.454.5757</span>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <span class="fa fa-envelope"></span>
              </div>
              <div class="col">
                <a class="fw-300" href="#">info@posh.com</a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <form class="zform" method="post">
              <div class="form-group">
                <input
                  class="form-control"
                  type="hidden"
                  name="to"
                  value="username@domain.extension"
                />
              </div>
              <div class="form-group">
                <input class="form-control" type="text" name="name" required placeholder="Name" />
              </div>
              <div class="form-group">
                <input class="form-control" type="email" name="from" required placeholder="Email" />
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="8" name="message" placeholder="Message"></textarea>
              </div>
              <input class="btn btn-primary" type="submit" name="submit" value="Send!" />
              <div class="zform-feedback mt-3"></div>
            </form>
          </div>
          <div class="col mt-5">
            <div
              class="googlemap"
              data-latlng="48.8583701,2.2922926"
              data-scrollwheel="false"
              data-zoom="14"
              data-theme="SubtleGray"
              style="min-height: 400px;"
            >
              <div class="marker-content py-3">
                <h4>Eiffel Tower</h4>
                <p>
                  Gustave Eiffel's iconic,
                  <br />wrought-iron 1889 tower.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <footer class="background-1 color-8 py-3 fs--1 fw-600 font-heading">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-auto font-1">&copy; 2017 POSH &trade; Inc.</div>
          <div class="col fs-0 text-right">
            <a class="p-2 color-8" href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a class="p-2 color-8" href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="p-2 color-8" href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a class="p-2 color-8" href="#">
              <i class="fa fa-behance"></i>
            </a>
            <a class="p-2 color-8" href="#">
              <i class="fa fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
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