<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

  export default {
    components: {NavBar,Footer}
    
  }
</script>

<style lang="scss" scoped>

</style>