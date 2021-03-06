<template>
  <div>
    <Header />
    <section class="container">
      <About />
      <Specials />
      <Catalogue />
      <Ribbon />
      <Contact />
    </section>
  </div>
</template>

<script>
import Header from '@/components/header';
import Specials from '@/components/specials';
import Catalogue from '@/components/catalogue';
import About from '@/components/about';
import Contact from '@/components/contact';
import Ribbon from '@/components/ribbon';

export default {
  components: {Header,Specials,Catalogue,About,Contact,Ribbon},
}
</script>

<style lang="scss" scoped>

</style>