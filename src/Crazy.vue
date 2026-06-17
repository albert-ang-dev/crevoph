<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
</script>

<template>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg bg-white border-bottom px-4 py-2">
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
  <section class="hero-section text-center">
    <div class="container-xl px-4">
      <h1 class="hero-title fst-italic fw-bold mb-3">
        Strategic Storytelling for Organizations,<br>Brands, and Leaders
      </h1>
      <p class="hero-sub mx-auto mb-4">
        We help organizations communicate with clarity, purpose, and impact through
        strategic storytelling, visual communications, and AI-powered creative content.
      </p>
      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-gold rounded-pill fw-bold text-uppercase px-4 py-2">Lets Talk</button>
        <button class="btn btn-gold rounded-pill fw-bold text-uppercase px-4 py-2">View Our Work</button>
      </div>
    </div>
  </section>

  <!-- CORE SERVICES -->
  <section class="section-pad section-white" id="services">
    <div class="container-xl px-4">

      <p class="eyebrow mb-4">CORE SERVICES</p>

      <div class="d-flex flex-column gap-0">

        <div class="svc-row d-flex align-items-center gap-4">
          <div class="svc-circle flex-shrink-0">
            <span>Brand<br>Storytelling</span>
          </div>
          <p class="svc-desc mb-0">Developing compelling stories that communicate your brand's purpose, values, and unique position in the market while building deeper connections with your audience.</p>
        </div>

        <div class="svc-row d-flex align-items-center gap-4">
          <div class="svc-circle flex-shrink-0">
            <span>Narrative<br>Direction</span>
          </div>
          <p class="svc-desc mb-0">Helping organizations define what they want to say, how they want to be perceived, and how their message should evolve across different platforms and audiences</p>
        </div>

        <div class="svc-row d-flex align-items-center gap-4">
          <div class="svc-circle flex-shrink-0">
            <span>Visual<br>Strategy</span>
          </div>
          <p class="svc-desc mb-0">Aligning creative visuals, content, and production approaches with business objectives to ensure every communication serves a strategic purpose.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- CREVO + AI -->
  <section class="section-pad section-white" id="ai">
    <div class="container-xl px-4">

      <p class="eyebrow mb-4">CREVO + AI</p>

      <div class="d-flex flex-column align-items-start gap-2">
        <span class="ai-pill">AI-assisted content creation</span>
        <span class="ai-pill">AI-powered commercials</span>
        <span class="ai-pill">Executive communications</span>
        <span class="ai-pill">Brand storytelling</span>
        <span class="ai-pill">Brand storytelling</span>
        <span class="ai-pill">Campaign development</span>
        <span class="ai-pill">Emerging creative technologies</span>
      </div>

    </div>
  </section>

  <!-- INDUSTRIES WE SERVE -->
  <section class="section-pad section-cream" id="industries">
    <div class="container-xl px-4">

      <p class="eyebrow mb-1">INDUSTRIES WE SERVE</p>
      <p class="ind-quote mb-4">"Since 1998, CREVO has partnered with organizations ranging from startups to established national and multinational brands."</p>

      <div class="row row-cols-5 g-2">
        <div class="col" v-for="i in 7" :key="i">
          <div class="ind-img"></div>
          <p class="ind-label text-center mt-1 mb-0">Retail</p>
        </div>
      </div>

    </div>
  </section>

  <!-- WHAT OUR CLIENTS DESCRIBE US -->
  <section class="section-pad section-cream" id="clients">
    <div class="container-xl px-4">

      <p class="eyebrow mb-4">WHAT OUR CLIENTS DESCRIBES US</p>

      <div class="d-flex flex-column gap-4">
        <div class="testi-block" v-for="n in 3" :key="n">
          <div class="d-flex align-items-center gap-2 mb-1">
            <span class="testi-name">Jane Doe</span>
            <span class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <p class="testi-text mb-0">
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </p>
        </div>
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
  font-size: 0.95rem;
  font-weight: 700;
  color: #111 !important;
  text-decoration: none;
  letter-spacing: 0.03em;
}

.nav-item-link {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #111 !important;
  padding: 4px 0;
}

.nav-item-link:hover {
  color: #B27F22 !important;
}

/* ── HERO ── */
.hero-section {
  background-color: #fff;
  padding: 60px 16px 52px;
}

.hero-title {
  font-size: 1.35rem;
  color: #B27F22;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.hero-sub {
  font-size: 0.78rem;
  color: #333;
  line-height: 1.7;
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

/* ── SECTIONS ── */
.section-pad {
  padding: 48px 0;
}

.section-white {
  background-color: #fff;
}

.section-cream {
  background-color: #FDFCF8;
}

/* ── EYEBROW ── */
.eyebrow {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #B27F22;
  text-transform: uppercase;
  margin-bottom: 0;
}

/* ── CORE SERVICES ── */
.svc-row {
  padding: 18px 0;
  border-bottom: 1px solid #ece8e0;
}

.svc-row:first-child {
  border-top: 1px solid #ece8e0;
}

.svc-circle {
  width: 72px;
  height: 72px;
  min-width: 72px;
  background-color: #C9A84C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.svc-circle span {
  color: #fff;
  font-size: 0.58rem;
  font-weight: 700;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.svc-desc {
  font-size: 0.75rem;
  color: #444;
  line-height: 1.7;
  flex: 1;
}

/* ── CREVO + AI ── */
.ai-pill {
  display: inline-block;
  background-color: #C9A84C;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 50px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

/* ── INDUSTRIES ── */
.ind-quote {
  font-size: 0.72rem;
  color: #444;
  line-height: 1.6;
  max-width: 560px;
  margin-top: 4px;
}

.ind-img {
  width: 100%;
  padding-top: 100%;
  background-color: #CCCACA;
  border-radius: 3px;
}

.ind-label {
  font-size: 0.65rem;
  color: #555;
}

/* ── TESTIMONIALS ── */
.testi-block {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e4e0d8;
}

.testi-block:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.testi-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #111;
}

.testi-stars {
  color: #B27F22;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.testi-text {
  font-size: 0.72rem;
  color: #555;
  line-height: 1.75;
  max-width: 520px;
}
</style>
