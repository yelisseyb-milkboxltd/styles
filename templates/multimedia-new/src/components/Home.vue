<template>
  <div>
    <div class="banner white--text d-flex align-items-center">
      <div class="container">
        <div class="banner_block">
          <h2> Media Everywhere</h2>
          <div class="my-6">
            <div>Movies, Games, Music, Books & More</div>
            <div class="subtitle pt-1" style="font-weight: 600;"> Only {product_price_1_month} per.month </div>
          </div>
          <a class="button" href="sign_up">
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
    <div class="block-1">
      <div class="container align-items-center">
        <h3 class="text-center"> Take <span class="site-name">{site_name}</span> with you everywhere you go</h3>
        <img src="../assets/take.png" class="mt-10 mb-6">
        <a class="button" href="sign_up">
          Sign Up Now
        </a>
      </div>
    </div>
    <div class="block-2">
      <div class="container align-items-center text-center">
        <h3 class="white--text"> Checkout what <span class="site-name">{site_name}</span> has to offer!</h3>
        <div class="d-sm-none d-md-none">
          <img src="../assets/checkout.png" style="margin: 66px 0 38px; width: 100%">
        </div>
        <div class="d-none d-md-block" style="margin: 50px 0 32px; width: 100%">
          <div class="tablet-slides position-relative">
            <img src="../assets/checkout-tablet-1.png" class="tablet-slide slide-show">
            <img src="../assets/checkout-tablet-2.png" class="tablet-slide">
          </div>
          <div class="tablet-controls d-flex justify-content-center mt-4 mb-2">
            <div class="tablet-control control control-show"></div>
            <div class="tablet-control control"></div>
          </div>
        </div>
        <div class="d-none d-sm-block" style="margin: 32px 0; width: 100%">
          <div class="mobile-slides position-relative">
            <img src="../assets/checkout-mobile-1.png" class="mobile-slide slide-show">
            <img src="../assets/checkout-mobile-2.png" class="mobile-slide">
            <img src="../assets/checkout-mobile-3.png" class="mobile-slide">
            <img src="../assets/checkout-mobile-4.png" class="mobile-slide">
          </div>
          <div class="mobile-controls d-flex justify-content-center mt-4 mb-2">
            <div class="mobile-control control control-show"></div>
            <div class="mobile-control control"></div>
            <div class="mobile-control control"></div>
            <div class="mobile-control control"></div>
          </div>
        </div>
        <a class="button" href="sign_up">
          Try it!
        </a>
      </div>
    </div>
    <div class="block-3 d-flex flex-wrap">
      <img src="../assets/laptop.png" class="pr-12 pr-md-5 pr-sm-0 fit-cover">
      <div class="container container_half" >
        <div class="pb-6">
          <h4 class="text_title">A library of thousands</h4>
          <div class="cap1">{site_name} has thousands of movies, games, music and e-books, from massive hits to rare gems to cult classics, with more added every week. It's more music than you could listen to in alifetime.</div>
        </div>
        <div class="pb-6">
          <h4 class="text_title">Share your favorites</h4>
          <div class="cap1">Build a collection of your favorite content, so they’re always close at hand, and share a list of what you love with members who might love it next.</div>
        </div>
        <div class="pb-6">
          <h4 class="text_title">Play and explore</h4>
          <div class="cap1">Find what to listen to next by following friends, tastemakers, influential critics and artists themselves. Check out the most popular albums in your network or explore curated playlists.</div>
        </div>
        <a class="button" href="sign_up">
          Get {site_name}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      document.getElementsByClassName('tablet-control').forEach(function(control, index) {
        control.onclick = function() {
          document.getElementsByClassName('tablet-control').forEach(function(control) {
            control.classList.remove('control-show')
          });
          document.getElementsByClassName('tablet-slide').forEach(function(slide) {
            slide.classList.remove('slide-show')
          });
          document.getElementsByClassName('tablet-slide')[index].classList.add('slide-show')
          control.classList.add('control-show')
        }
      });
      document.getElementsByClassName('mobile-control').forEach(function(control, index) {
        control.onclick = function() {
          document.getElementsByClassName('mobile-control').forEach(function(control) {
            control.classList.remove('control-show')
          });
          document.getElementsByClassName('mobile-slide').forEach(function(slide) {
            slide.classList.remove('slide-show')
          });
          document.getElementsByClassName('mobile-slide')[index].classList.add('slide-show')
          control.classList.add('control-show')
        }
      });
    },
  }
</script>
