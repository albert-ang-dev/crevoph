<script setup>
  import {ref, onMounted, onUnmounted} from 'vue';



</script>

<template>

<div class="hero-section">
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent  pt-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./others/images/crevo-logo.png" alt="Logo" width="80" height="50" class="d-inline-block align-text-top">
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-side navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto text-uppercase fw-semibold">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</div>


<!-- HERO SECTION -->
<section class="container-fluid text-center"> 
  <br>
  <div class="container">
    <h1 class="section-header">Strategic Storytelling for Organizations, Brands, and Leaders</h1>
    <p class="fs-3">We help organizations communicate with clarity, purpose, and impact through strategic storytelling, visual communications, and AI-powered creative content.</p>
    <p><button class="btn btn-app">LETS TALK</button> * <button class="btn btn-app">VIEW OUR WORK</button></p>
  </div>
</section>

<section class="container-fluid section-serve">
d
</section>

</template>

<style>

        /* Optional: Adds a subtle dark background on mobile when menu expands */
        @media (max-width: 991.98px) {
            .navbar-collapse {
                background-color: rgba(0, 0, 0, 0.8);
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 1rem;
            }
        }

.active {
  background-color: #B27F22;
  border-radius: 5px;

}
 .nav-link {
   color: black;
 }       

 .section-header{
    color:#B27F22;
 }

 .btn-app{
   background-color: #B27F22;
   color: white;
   font-weight: 700;
 }

 .btn:hover{
  color:red;
 }

 .section-serve{
   margin-top: 120px;
   background-color: #FDFCF8;
   height: 500px;
 }
</style>
