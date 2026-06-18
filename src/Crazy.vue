<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';


  const coreServices = ref([
    {service:"Brand Story Telling",desc:"Developing compelling stories that communicate your brand's purpose, values, and unique position in the market while building deeper connections with your audience."}
  ]);


</script>

<template>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg bg-white border-bottom py-3 px-3">
    <div class="container-xl">

      <a class="navbar-brand brand-logo" href="#">crevo</a>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-4 text-uppercase">
          <li class="nav-item"><a class="nav-link nav-item-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link nav-item-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link nav-item-link" href="#portfolio">Portfolio</a></li>
          <li class="nav-item"><a class="nav-link nav-item-link" href="#contact">Contact</a></li>
        </ul>
      </div>

    </div>
  </nav>

  <!-- HERO -->
  <section class="hero-section">
    <div class="container-xl px-2">
      <div class="row align-items-center">

        <!-- Left: copy -->
        <div class="col-12 col-lg-6 hero-left">
          <h1 class="hero-title fst-italic fw-bold mb-3">
            Strategic Storytelling for<br>Organizations, Brands,<br>and Leaders
          </h1>
          <p class="hero-sub mb-4">
            We help organizations communicate with clarity, purpose, and impact through
            strategic storytelling, visual communications, and AI-powered creative content.
          </p>
          <div class="d-flex gap-3 flex-wrap">
            <button class="btn btn-gold rounded-pill fw-bold text-uppercase px-4 py-2">Lets Talk</button>
            <button class="btn btn-gold rounded-pill fw-bold text-uppercase px-4 py-2">View Our Work</button>
          </div>
        </div>

        <!-- Right: brand mark -->
        <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center hero-right">
          <img src="./others/images/crevo-log.png" alt="Crevo" class="hero-img">
        </div>

      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="container">
    <h2 class="fst-italic fw-bold mb-3">Core Services</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam animi harum officiis consequatur laudantium blanditiis, debitis culpa totam! Deleniti!</p>
    <div class="row">
      <div class="col-sm-4" v-for="n in coreServices">
        <div class="card" style="width: 18rem;">
          <p>{{ n.service }}</p>
        </div>
      </div>
    </div>
  </section>


  <!-- LETS CONNECT -->
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>Hello</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sequi repellat id incidunt nam modi officiis quod? Aut quisquam itaque, tenetur enim fuga delectus doloribus sunt! Quidem quasi molestias sunt a mollitia nisi similique laborum praesentium optio ab numquam repellendus quia, accusantium itaque, asperiores tenetur odio. Eveniet illum quia magni sit repellendus. Quis suscipit id nihil necessitatibus. Ipsam repellendus inventore, voluptate itaque vitae maiores adipisci error temporibus ex quibusdam consequatur tenetur fugiat, laborum doloremque, nemo vero id sit illum rem harum dolorum dolorem soluta eaque quae! Accusantium nam, quisquam rem laboriosam, praesentium dolor quos iure quia culpa voluptas a porro!</p>
      </div>

      <div class="col-md-6">
        <form action="" method="POST" class="frm-connect">
          <h3>Lets Connect!</h3>
          <p>Name: <input type="text" name="" id="" class="form-control"></p>
          <p>Email: <input type="email" name="" id="" class="form-control"></p>
          <p>Message: <textarea name="" id="" class="form-control"></textarea></p>
        </form> 
      </div>
    </div>
  </section>

</template>

<style scoped>

/* ── BASE ── */
* {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* ── NAVBAR ── */
.brand-logo {
  font-size: 0.9rem;
  font-weight: 700;
  color: #111 !important;
  text-decoration: none;
  letter-spacing: 0.03em;
}

.nav-item-link {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #111 !important;
  padding: 4px 0;
}

.nav-item-link:hover {
  color: #B27F22 !important;
}

@media (max-width: 991.98px) {
  #navbarNav {
    background-color: #C9A84C;
    padding: 1rem 1.25rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }

  .nav-item-link {
    color: #fff !important;
  }

  .nav-item-link:hover {
    color: rgba(255, 255, 255, 0.75) !important;
  }
}

/* ── HERO ── */
.hero-section {
  background-color: #fff;
  padding: 48px 0;
  display: flex;
  align-items: center;
}

.hero-left {
  padding-right: 2rem;
}

.hero-title {
  font-size: clamp(1.3rem, 2.8vw, 2rem);
  color: #B27F22;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.hero-sub {
  font-size: 0.82rem;
  color: #333;
  line-height: 1.75;
  max-width: 380px;
}

.btn-gold {
  background-color: #B27F22;
  color: #fff;
  border: none;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  transition: background 0.2s;
}

.btn-gold:hover {
  background-color: #9a6d1b;
  color: #fff;
}

/* Right column brand mark */
.hero-right {
  padding-left: 0rem;
}

.hero-img {
  width: 100%;
  max-width: 480px;
  height: auto;
  object-fit: contain;
  display: block;
}

.hero-brand-mark {
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 900;
  color: #111;
  letter-spacing: -0.04em;
  line-height: 1;
  user-select: none;
}

@media (max-width: 991.98px) {
  .hero-section {
    min-height: auto;
    padding: 48px 0 40px;
    text-align: center;
  }

  .hero-left {
    padding-right: 0;
  }

  .hero-sub {
    margin-left: auto;
    margin-right: auto;
  }

  .d-flex.gap-3 {
    justify-content: center;
  }

  .hero-right {
    padding-left: 0;
    margin-top: 2rem;
  }

  .hero-img {
    max-width: 280px;
  }

}

.frm-connect{
  padding: 15px 15px 15px 15px;
  border: 1px solid black;
  border-radius: 15px;
}

.card{
  margin-bottom: 5px;
}
</style>
