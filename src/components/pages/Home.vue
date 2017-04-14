<template>
  <main class="l-home-page">
    <picture class="md-landing-page">
      <source media="(max-width: 600px)" srcset="./../../../static/img/landing/01_x.png">
      <source media="(max-width: 768px)" srcset="./../../../static/img/landing/01_s.png">
      <source media="(max-width: 1024px)" srcset="./../../../static/img/landing/01_m.png">
      <img class="md-landing-page" src="./../../assets/img/landing/01_lb.png" alt="Landing Image Default">
    </picture>
  </main>

  <picture class="module__media resp-img lazy-loaded" data-src-base="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/" data-src="p">
    <source media="(max-width: 480px)" srcset="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/br/responsive/landing_homem/12042017/01_x.jpg" data-src="br/responsive/landing_homem/12042017/01_x.jpg">
    <source media="(max-width: 767px)" srcset="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/br/responsive/landing_homem/12042017/01_s.jpg" data-src="br/responsive/landing_homem/12042017/01_s.jpg">
    <source media="(max-width: 1024px)" srcset="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/br/responsive/landing_homem/12042017/01_m.jpg" data-src="br/responsive/landing_homem/12042017/01_m.jpg">
    <source media="(min-width: 1025px)" srcset="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/br/responsive/landing_homem/12042017/01_lb.jpg" data-src="br/responsive/landing_homem/12042017/01_lb.jpg">
    <img class="resp-img lazy-loaded" src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/br/responsive/landing_homem/12042017/01_lb.jpg" data-src-base="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/" data-src="{xs:br/responsive/landing_homem/12042017/01_x.jpg,sm:br/responsive/landing_homem/12042017/01_s.jpg,md:br/responsive/landing_homem/12042017/01_m.jpg,xl:br/responsive/landing_homem/12042017/01_lb.jpg}" alt="">
  </picture>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  .l-home-page {
    margin-top: 48px;

    @media (min-width: 600px) {
      margin-top: 0;
    }
  }
</style>
