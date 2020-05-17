<template>
  <div>
    <HeaderBar />
    <section class="pb-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="fs--1 font-1 mb-3">
              <a class="mr-2" href="#">Home</a>
              <span class="fa fa-angle-double-right color-6"></span>
              <a class="mx-2" href="#">Careers</a>
              <span class="fa fa-angle-double-right mr-2 color-6"></span>
              <span class="color-5">Job Details</span>
            </div>
            <h1 class="fs-4 fw-400">Full Stack Developer</h1>
            <hr class="color-9 mt-5" />
          </div>
        </div>
        <!--/.row-->
      </div>
      <!--/.container-->
    </section>
    <section class="font-1 pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-xl-7">
            <h5 class="mb-3">Company Description</h5>
            <p class="color-5 mb-5 fw-300">
              Dropbox supports hundreds of millions of creators and innovators around the world. Our mission is to simplify the way people work together. In the workplace, Dropbox Business is trusted by over 200,000 companies to safeguard
              their most important information. As we continue to build the best place to create, share, and work with others, there’s a perfect spot for you to grow with us.
            </p>
            <h5 class="mb-3">Team Description</h5>
            <p
              class="color-5 mb-5 fw-300"
            >The finance team is responsible for establishing our financial infrastructure and strategy. We combine analytical and strategic thinking to help Dropbox scale its global brand and continue on a best-in-class trajectory.</p>
            <h5 class="mb-3">Role Description</h5>
            <p class="color-5 mb-5 fw-300">
              As the Sales Compensation and Crediting Analyst, you will help build out the sales incentive program that motivate our global sales team to succeed. As a member of the finance team, you will have the opportunity to contribute
              across the full gamut of sales crediting and compensation topics as well as gain exposure to broader sales strategy and operational areas. You will build and evolve scalable processes and tools for managing our crediting
              and sales compensation programs, inform and enforce incentive plan designs and policies that align to our business strategy, audit and analyze performance results, and collaborate extensively across Sales, Finance, and
              People Operations to contribute insights that drive the direction of our fast growing business.
            </p>
            <h5 class="mb-3">Responsibilities</h5>
            <ul class="color-5 mb-5 fw-300">
              <li
                class="mb-2"
              >Assign sales compensation plan and quota letters to the global sales team</li>
              <li
                class="mb-2"
              >Manage sales quotas, compensation plan designs, and sales roster in Xactly Incent, our sales compensation system of record</li>
              <li
                class="mb-2"
              >Contribute to the development and enforcement of sales crediting and compensation plan designs and policies</li>
              <li class="mb-2">
                Work across systems such as Salesforce, Workday, Xactly to collect all the people, performance, and quota data required of the program. Help drive systems and process changes to ensure Dropbox scales its world class Sales
                and Finance teams.
              </li>
              <li
                class="mb-2"
              >Oversee and audit sales compensation calculations and exception handling</li>
              <li
                class="mb-2"
              >Partner with Sales to field inquiries and requests on crediting, quota, and commission topics</li>
              <li
                class="mb-2"
              >Help build out our performance reporting and analysis to a variety of stakeholders across the business on sales performance and compensation results</li>
            </ul>
            <h5 class="mb-3">Requirements</h5>
            <ul class="color-5 mb-5 fw-300">
              <li class="mb-2">BA/BS degree with excellent academic credentials</li>
              <li
                class="mb-2"
              >4+ years of experience in a sales compensation or related sales operations or finance functions</li>
              <li
                class="mb-2"
              >Prior experience driving complex, cross-functional, data intensive processes</li>
              <li
                class="mb-2"
              >Clear and thoughtful communicator in discussing and sharing sensitive performance and compensation data with a range of business functions</li>
              <li
                class="mb-2"
              >Prior experience with Xactly or other sales compensation software (Callidus, OIC, Varicent) is strongly preferred</li>
            </ul>
            <h5 class="mb-3">Benefits and Perks</h5>
            <ul class="color-5 fw-300">
              <li
                class="mb-2"
              >100% company paid individual medical, dental, &amp; vision insurance coverage</li>
              <li class="mb-2">401k + company match</li>
              <li class="mb-2">Market competitive total compensation package</li>
              <li class="mb-2">Free Dropbox space for your friends and family</li>
              <li class="mb-2">Wellness Reimbursement</li>
              <li class="mb-2">Generous vacation policy</li>
              <li class="mb-2">10 company paid holidays</li>
              <li class="mb-2">Volunteer time off</li>
              <li
                class="mb-2"
              >Company sponsored tech talks (technology and other relevant professional topics)</li>
            </ul>
          </div>
          <div class="col text-center">
            <div class="pt-5 sticky-top">
              <a class="btn btn-primary" href="#">Apply Now</a>
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