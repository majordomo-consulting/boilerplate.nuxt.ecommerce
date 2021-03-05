<template>
  <div>
    <Header />
    <section class="container">
      <About />
      <Banner />
      <Catalogue />
      <Ribbon />
      <Contact />
    </section>
  </div>
</template>

<script>
import Header from '@/components/header';
import Banner from '@/components/banner';
import Catalogue from '@/components/catalogue';
import About from '@/components/about';
import Contact from '@/components/contact';
import Ribbon from '@/components/ribbon';

export default {
  components: {Header,Banner,Catalogue,About,Contact,Ribbon},
}
</script>

<style lang="scss" scoped>

</style>