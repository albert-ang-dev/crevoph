<script setup>
  import {ref, onMounted, onUnmounted} from 'vue';
</script>

<template>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg bg-white py-3 px-4 border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-4 text-dark" href="#">crevo</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-3 text-uppercase fw-semibold small">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero-section text-center d-flex align-items-center justify-content-center">
    <div class="container">
      <h1 class="hero-title fw-bold mb-3">
        Strategic Storytelling for Organizations, Brands,<br class="d-none d-md-block"> and Leaders
      </h1>
      <p class="hero-subtitle mx-auto mb-4">
        We help organizations communicate with clarity, purpose, and impact
        through strategic storytelling, visual communications, and AI-powered
        creative content.
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <button class="btn btn-gold px-4 py-2 fw-bold text-uppercase rounded-pill">Lets Talk</button>
        <button class="btn btn-gold px-4 py-2 fw-bold text-uppercase rounded-pill">View Our Work</button>
      </div>
    </div>
  </section>

  <!-- INDUSTRIES WE SERVE -->
  <section class="industries-section py-5">
    <div class="container">
      <h2 class="fw-black text-uppercase mb-2 industries-title">Industries We Serve</h2>
      <p class="industries-quote mb-4">
        "Since 1999, CREVO has partnered with organizations ranging from startups to established national and multinational brands."
      </p>

      <div class="row g-3">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="i in 7" :key="i">
          <div class="industry-card">
            <div class="industry-img-placeholder"></div>
            <p class="industry-label mt-2 mb-0 text-center">Retail</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

/* NAVBAR */
.navbar {
  letter-spacing: 0.05em;
}

/* HERO */
.hero-section {
  min-height: 55vh;
  background-color: #ffffff;
  padding: 80px 16px;
}

.hero-title {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: #B27F22;
  line-height: 1.25;
}

.hero-subtitle {
  max-width: 520px;
  font-size: 1rem;
  color: #222;
  line-height: 1.6;
}

.btn-gold {
  background-color: #B27F22;
  color: #fff;
  border: none;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
}

.btn-gold:hover {
  background-color: #9a6d1b;
  color: #fff;
}

/* INDUSTRIES */
.industries-section {
  background-color: #FDFCF8;
}

.industries-title {
  font-size: 1.25rem;
  letter-spacing: 0.04em;
}

.industries-quote {
  font-size: 0.85rem;
  color: #222;
  max-width: 680px;
}

.industry-card {
  cursor: pointer;
}

.industry-img-placeholder {
  width: 100%;
  padding-top: 100%;
  background-color: #D9D9D9;
  border-radius: 4px;
}

.industry-label {
  font-size: 0.85rem;
  color: #222;
}
</style>
