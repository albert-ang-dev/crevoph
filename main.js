 window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };

 var showcaseVideoModal = document.getElementById('showcaseVideoModal');
    if (showcaseVideoModal) {
      var showcaseVideo = document.getElementById('showcaseVideo');
      var showcaseVideoSource = showcaseVideo.querySelector('source');
      showcaseVideoModal.addEventListener('show.bs.modal', function (event) {
        var trigger = event.relatedTarget;
        var src = trigger && trigger.getAttribute('data-video-src');
        if (src) {
          showcaseVideoSource.src = src;
          showcaseVideo.load();
        }
      });
      showcaseVideoModal.addEventListener('hidden.bs.modal', function () {
        showcaseVideo.pause();
        showcaseVideo.currentTime = 0;
      });
}

   (function () {
      var carousel = document.querySelector('.testimonials-carousel');
      if (!carousel) return;

      var track = carousel.querySelector('.testimonial-track');
      var slides = Array.prototype.slice.call(carousel.querySelectorAll('.testimonial-slide'));
      var dots = Array.prototype.slice.call(carousel.querySelectorAll('.testimonial-dot'));
      var prevBtn = carousel.querySelector('.testimonial-arrow-prev');
      var nextBtn = carousel.querySelector('.testimonial-arrow-next');
      var total = slides.length;
      var index = 0;
      var autoplayDelay = parseInt(carousel.getAttribute('data-autoplay'), 10) || 0;
      var timer = null;

      function goTo(i) {
        index = (i + total) % total;
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach(function (dot, di) {
          dot.classList.toggle('active', di === index);
        });
      }
      function next() { goTo(index + 1); }
      function prev() { goTo(index - 1); }
      function startAutoplay() {
        if (!autoplayDelay) return;
        stopAutoplay();
        timer = setInterval(next, autoplayDelay);
      }
      function stopAutoplay() {
        if (timer) clearInterval(timer);
      }

      nextBtn.addEventListener('click', function () { next(); startAutoplay(); });
      prevBtn.addEventListener('click', function () { prev(); startAutoplay(); });
      dots.forEach(function (dot, di) {
        dot.addEventListener('click', function () { goTo(di); startAutoplay(); });
      });
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);

      var startX = null;
      track.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      track.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) {
          diff < 0 ? next() : prev();
          startAutoplay();
        }
        startX = null;
      });

      goTo(0);
      startAutoplay();
    })();


   (function () {
      var items = Array.prototype.slice.call(document.querySelectorAll('.project-item'));
      if (!items.length) return;

      var modal = document.getElementById('projectModal');
      var backdrop = document.getElementById('projectModalBackdrop');
      var closeBtn = document.getElementById('projectModalClose');
      var prevBtn = document.getElementById('projectModalPrev');
      var nextBtn = document.getElementById('projectModalNext');
      var modalImg = document.getElementById('projectModalImg');
      var modalTitle = document.getElementById('projectModalTitle');
      var modalMeta = document.getElementById('projectModalMeta');
      var index = 0;

      function render() {
        var item = items[index];
        modalImg.src = item.getAttribute('data-img');
        modalImg.alt = item.getAttribute('data-title') || '';
        modalTitle.textContent = item.getAttribute('data-title') || '';
        modalMeta.textContent = item.getAttribute('data-meta') || '';
      }
      function open(i) {
        index = i;
        render();
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      function close() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      function next() { index = (index + 1) % items.length; render(); }
      function prev() { index = (index - 1 + items.length) % items.length; render(); }

      items.forEach(function (item, i) {
        item.addEventListener('click', function () { open(i); });
      });
      closeBtn.addEventListener('click', close);
      backdrop.addEventListener('click', close);
      nextBtn.addEventListener('click', next);
      prevBtn.addEventListener('click', prev);

      document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });
    })();