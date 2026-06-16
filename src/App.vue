<script setup>
  import {ref, onMounted, onUnmounted} from 'vue';

  const navbar = ref(null);

  function setNavHeight() {
    if (navbar.value) {
      document.documentElement.style.setProperty('--nav-h', `${navbar.value.offsetHeight}px`);
    }
  }

  onMounted(() => {
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setNavHeight);
  });

</script>

<template>

  <div class="page">
    <!-- Navbar -->
    <div class="container-fluid">
      <nav class="navbar bg-body-tertiary" ref="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 navtitle">CREVO</span>
        </div>
      </nav>
    </div>

    <div class="hero-wrapper">
      <img id="hero-image" src="../public/crevo-hero.png" alt="Description">
    </div>


    <section class="container-fluid px-3 px-md-5">
      <h1>hello</h1>
    </section>
  </div>



</template>

<style>
  :root {
    --nav-h: 56px;
  }

  body{
    background-color: #FDFCF8;
  }

  .navtitle {
    color:#B27F22;
  }

  .hero-wrapper {
    width: 100%;
    height: calc(100vh - var(--nav-h));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  #hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
